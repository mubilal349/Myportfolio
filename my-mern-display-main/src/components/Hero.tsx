import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges, Html, OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const ROLES = [
  "Front-end Developer",
  "Back-end Developer",
  "MERN Stack Developer",
  "Wordpress Developer",
  "AI Automation Developer",
];

// Chips under the intro text (same order as your paragraph).
const STACK_CHIPS = ["MongoDB", "Express", "React", "Next.js", "Node.js"];

// 3D layers, bottom to top, like a real stack: data -> runtime -> server -> UI.
const SLABS = ["MongoDB", "Node.js", "Express", "React"];

/* ---------- helpers ---------- */

// Reads a CSS variable such as --primary ("180 100% 50%") so the scene matches your theme.
const useThemeColor = (cssVar: string, fallback: string) => {
  const [color, setColor] = useState(fallback);
  useEffect(() => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue(cssVar)
      .trim();
    if (!raw) return;
    const isFull = /^(#|hsl|rgb)/i.test(raw);
    setColor(isFull ? raw : `hsl(${raw.replace(/\s+/g, ", ")})`);
  }, [cssVar]);
  return color;
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
};

/* ---------- 3D ---------- */

type Focus = string | null;

const Slab = ({
  name,
  index,
  exploded,
  focus,
  setFocus,
  onToggle,
  color,
}: {
  name: string;
  index: number;
  exploded: boolean;
  focus: Focus;
  setFocus: (f: Focus) => void;
  onToggle: () => void;
  color: string;
}) => {
  const ref = useRef<THREE.Group>(null);
  const isFocused = focus === name;

  useFrame((_, delta) => {
    const g = ref.current;
    if (!g) return;
    const gap = exploded ? 1.2 : 0.42;
    const targetY =
      (index - (SLABS.length - 1) / 2) * gap + (isFocused ? 0.14 : 0);
    g.position.y = THREE.MathUtils.damp(g.position.y, targetY, 6, delta);
  });

  return (
    <group
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation();
        setFocus(name);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setFocus(null);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
    >
      <RoundedBox args={[3.4, 0.16, 2.4]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isFocused ? 0.7 : 0.08}
          transparent
          opacity={isFocused ? 0.55 : 0.18}
          metalness={0.4}
          roughness={0.35}
        />
        <Edges color={color} />
      </RoundedBox>

      <Html
        position={[2.2, 0, 0]}
        style={{ pointerEvents: "none" }}
        zIndexRange={[5, 0]}
      >
        <span
          className={`whitespace-nowrap rounded border px-2 py-0.5 font-mono text-xs backdrop-blur transition-colors ${
            isFocused
              ? "border-primary bg-primary/20 text-primary"
              : "border-border/60 bg-background/40 text-muted-foreground"
          }`}
        >
          {name}
        </span>
      </Html>
    </group>
  );
};

// Leans the whole stack toward the cursor and scales it to the screen size.
const Rig = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame(({ pointer }, delta) => {
    const g = ref.current;
    if (!g) return;
    g.rotation.x = THREE.MathUtils.damp(
      g.rotation.x,
      -pointer.y * 0.18,
      4,
      delta,
    );
    g.rotation.z = THREE.MathUtils.damp(
      g.rotation.z,
      pointer.x * 0.1,
      4,
      delta,
    );
    const s = THREE.MathUtils.clamp(viewport.width / 6.5, 0.7, 1.4);
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, s, 4, delta));
  });

  return <group ref={ref}>{children}</group>;
};

const Particles = ({
  color,
  count = 500,
}: {
  color: string;
  count?: number;
}) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={color}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const Scene = ({
  color,
  focus,
  setFocus,
  reducedMotion,
}: {
  color: string;
  focus: Focus;
  setFocus: (f: Focus) => void;
  reducedMotion: boolean;
}) => {
  // The stack starts collapsed, then splits apart once. Click to toggle after that.
  const [exploded, setExploded] = useState(reducedMotion);
  useEffect(() => {
    if (reducedMotion) return;
    const t = setTimeout(() => setExploded(true), 500);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={60} color={color} />
      <pointLight position={[-6, -4, -4]} intensity={20} color="#ffffff" />

      <Particles color={color} />

      <Rig>
        {SLABS.map((name, i) => (
          <Slab
            key={name}
            name={name}
            index={i}
            exploded={exploded}
            focus={focus}
            setFocus={setFocus}
            onToggle={() => setExploded((v) => !v)}
            color={color}
          />
        ))}
      </Rig>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.9}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.7}
        enableDamping
        dampingFactor={0.08}
      />
    </>
  );
};

/* ---------- Hero ---------- */

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [focus, setFocus] = useState<Focus>(null);

  const primary = useThemeColor("--primary", "#22d3ee");
  const reducedMotion = usePrefersReducedMotion();

  // Typing effect: one timeout per tick, cleaned up on every change.
  useEffect(() => {
    const current = ROLES[roleIndex];
    const finishedTyping = !isDeleting && displayText === current;
    const delay = finishedTyping ? 1200 : isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (finishedTyping) setIsDeleting(true);
        else setDisplayText(current.slice(0, displayText.length + 1));
      } else if (displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background: faint grid that fades out toward the edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, hsl(var(--primary)) 10%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, hsl(var(--primary)) 10%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
        }}
      />

      {/* 3D layer stack: drag to rotate, hover a layer, click to collapse or split */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 2.6, 8], fov: 45 }}
          dpr={[1, 2]}
          gl={{ alpha: true, antialias: true }}
          style={{ touchAction: "pan-y" }}
        >
          <Scene
            color={primary}
            focus={focus}
            setFocus={setFocus}
            reducedMotion={reducedMotion}
          />
        </Canvas>
      </div>

      {/* Soft shade behind the text so it stays readable over the 3D layers */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 50%, hsl(var(--background) / 0.6), transparent)",
        }}
      />

      {/* Content: pointer-events-none keeps the 3D scene draggable behind it */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none animate-fade-in">
        <div className="w-full text-left px-12">
          <h2 className="text-lg md:text-xl text-primary font-mono mb-4">
            Hello, I'm
          </h2>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
          Muhammad Bilal
        </h1>

        <div className="h-16 md:h-20 mb-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-mono text-foreground">
            <span className="text-primary mr-3">&gt;</span>
            <span className="inline-block">
              {displayText}
              <span className="border-r-2 border-primary animate-pulse ml-1" />
            </span>
          </h3>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Building scalable full-stack applications with MongoDB, Express.js,
          React, Next js , and Node.js. Passionate about creating efficient,
          user-centric solutions.
        </p>

        {/* Hover a chip and its layer lights up in the 3D stack (and the reverse) */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 pointer-events-auto">
          {STACK_CHIPS.map((name) => (
            <button
              key={name}
              type="button"
              onMouseEnter={() => setFocus(name)}
              onMouseLeave={() => setFocus(null)}
              onFocus={() => setFocus(name)}
              onBlur={() => setFocus(null)}
              className={`rounded-full border px-3 py-1 font-mono text-sm backdrop-blur transition-colors ${
                focus === name
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border/60 bg-background/40 text-muted-foreground"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12 pointer-events-auto">
          <Button
            variant="neon"
            size="lg"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center pointer-events-auto">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* <p className="absolute bottom-24 z-10 text-xs text-muted-foreground pointer-events-none hidden md:block">
        Drag to rotate. Click a layer to collapse or split the stack.
      </p> */}

      <button
        onClick={() => scrollToSection("skills")}
        className="absolute bottom-8 z-10 text-primary animate-bounce"
        aria-label="Scroll to skills"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
