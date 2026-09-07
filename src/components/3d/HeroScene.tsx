"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Sparkles, useTexture } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

/* =========================================================
   HERO PORTRAIT
   RESPONSIVE + FAST
========================================================= */

function HeroPortrait() {
  const texture = useTexture("/images/profile-hero.png");

  const group = useRef<THREE.Group>(null);
  const material = useRef<THREE.MeshBasicMaterial>(null);

  const elapsed = useRef(0);

  useFrame((state, delta) => {
    if (!group.current || !material.current) return;

    elapsed.current = Math.min(
      elapsed.current + delta,
      0.35
    );

    const progress = THREE.MathUtils.clamp(
      elapsed.current / 0.25,
      0,
      1
    );

    const eased =
      1 - Math.pow(1 - progress, 3);

    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    /* =====================================================
       RESPONSIVE POSITION
    ===================================================== */

    const isMobile = state.size.width < 640;

    const targetX = isMobile
      ? pointerX * 0.12
      : 4.0 + pointerX * 0.34;

    const targetY = isMobile
      ? 1.05 + pointerY * 0.10
      : 0.05 + pointerY * 0.2;

    /* =====================================================
       FAST ENTRANCE
    ===================================================== */

    const introOffsetY = THREE.MathUtils.lerp(
      -0.08,
      0,
      eased
    );

    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      targetX,
      0.13
    );

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      targetY + introOffsetY,
      0.13
    );

    /* =====================================================
       RESPONSIVE SCALE
    ===================================================== */

    const desktopScale = THREE.MathUtils.lerp(
      0.985,
      1,
      eased
    );

    const targetScale = isMobile
      ? desktopScale * 0.72
      : desktopScale;

    group.current.scale.setScalar(
      THREE.MathUtils.lerp(
        group.current.scale.x,
        targetScale,
        0.12
      )
    );

    /* =====================================================
       FADE
    ===================================================== */

    material.current.opacity = THREE.MathUtils.lerp(
      0,
      1,
      eased
    );

    /* =====================================================
       RESPONSIVE ROTATION
    ===================================================== */

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointerX * (isMobile ? 0.035 : 0.065),
      0.1
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointerY * 0.03,
      0.1
    );
  });

  return (
    <group
      ref={group}
      position={[4, -0.03, 0.45]}
      scale={0.985}
    >
      <mesh scale={[3, 3, 3]}>
        <planeGeometry args={[1.095, 1]} />

        <meshBasicMaterial
          ref={material}
          map={texture}
          transparent
          opacity={0}
          alphaTest={0.02}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   ORANGE BACKLIGHT
========================================================= */

function PortraitGlow() {
  const glow = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    if (!glow.current || !material.current) return;

    const isMobile = state.size.width < 640;

    const targetX = isMobile
      ? state.pointer.x * 0.08
      : 4 + state.pointer.x * 0.22;

    const targetY = isMobile
      ? 1.05 + state.pointer.y * 0.08
      : 0.05 + state.pointer.y * 0.12;

    glow.current.position.x = THREE.MathUtils.lerp(
      glow.current.position.x,
      targetX,
      0.08
    );

    glow.current.position.y = THREE.MathUtils.lerp(
      glow.current.position.y,
      targetY,
      0.08
    );

    material.current.opacity = THREE.MathUtils.lerp(
      material.current.opacity,
      0.075,
      0.08
    );
  });

  return (
    <mesh
      ref={glow}
      position={[4, 0.05, -0.15]}
    >
      <circleGeometry args={[2.45, 40]} />

      <meshBasicMaterial
        ref={material}
        color="#ff5a1f"
        transparent
        opacity={0}
        depthWrite={false}
      />
    </mesh>
  );
}

/* =========================================================
   SOFT WHITE HALO
========================================================= */

function PortraitHalo() {
  const halo = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    if (!halo.current || !material.current) return;

    const isMobile = state.size.width < 640;

    const targetX = isMobile
      ? state.pointer.x * 0.06
      : 4 + state.pointer.x * 0.18;

    const targetY = isMobile
      ? 1.05 + state.pointer.y * 0.06
      : 0.05 + state.pointer.y * 0.1;

    halo.current.position.x = THREE.MathUtils.lerp(
      halo.current.position.x,
      targetX,
      0.08
    );

    halo.current.position.y = THREE.MathUtils.lerp(
      halo.current.position.y,
      targetY,
      0.08
    );

    material.current.opacity = THREE.MathUtils.lerp(
      material.current.opacity,
      0.03,
      0.08
    );
  });

  return (
    <mesh
      ref={halo}
      position={[4, 0.05, -0.2]}
    >
      <circleGeometry args={[1.9, 40]} />

      <meshBasicMaterial
        ref={material}
        color="#ffffff"
        transparent
        opacity={0}
        depthWrite={false}
      />
    </mesh>
  );
}

/* =========================================================
   ORANGE 3D RING
========================================================= */

function FloatingRing() {
  const ring = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!ring.current || !material.current) return;

    const isMobile = state.size.width < 640;

    ring.current.rotation.x += 0.0007;
    ring.current.rotation.y += 0.0014;

    const targetX = isMobile
      ? state.pointer.x * 0.08
      : 4 + state.pointer.x * 0.26;

    const targetY = isMobile
      ? 1.05 + state.pointer.y * 0.08
      : 0.05 + state.pointer.y * 0.15;

    ring.current.position.x = THREE.MathUtils.lerp(
      ring.current.position.x,
      targetX,
      0.07
    );

    ring.current.position.y = THREE.MathUtils.lerp(
      ring.current.position.y,
      targetY,
      0.07
    );

    material.current.opacity = THREE.MathUtils.lerp(
      material.current.opacity,
      0.38,
      0.08
    );

    const targetScale = isMobile ? 0.72 : 1;

    ring.current.scale.x = THREE.MathUtils.lerp(
      ring.current.scale.x,
      targetScale,
      0.08
    );

    ring.current.scale.y = THREE.MathUtils.lerp(
      ring.current.scale.y,
      targetScale,
      0.08
    );

    ring.current.scale.z = THREE.MathUtils.lerp(
      ring.current.scale.z,
      targetScale,
      0.08
    );
  });

  return (
    <mesh
      ref={ring}
      position={[4, 0.05, -0.7]}
      rotation={[0.8, 0.2, 0]}
    >
      <torusGeometry
        args={[1.85, 0.009, 12, 96]}
      />

      <meshStandardMaterial
        ref={material}
        color="#ff5a1f"
        emissive="#ff5a1f"
        emissiveIntensity={0.7}
        metalness={0.8}
        roughness={0.32}
        transparent
        opacity={0}
      />
    </mesh>
  );
}

/* =========================================================
   FLOATING CUBE
========================================================= */

function FloatingCube() {
  const cube = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!cube.current) return;

    const isMobile = state.size.width < 640;

    cube.current.rotation.x += 0.0015;
    cube.current.rotation.y += 0.0025;

    cube.current.position.x = THREE.MathUtils.lerp(
      cube.current.position.x,
      isMobile
        ? 2.25 + state.pointer.x * 0.15
        : 5 + state.pointer.x * 0.34,
      0.06
    );

    cube.current.position.y = THREE.MathUtils.lerp(
      cube.current.position.y,
      isMobile
        ? 0.2 + state.pointer.y * 0.12
        : 1.7 + state.pointer.y * 0.22,
      0.06
    );
  });

  return (
    <mesh
      ref={cube}
      position={[5, 1.7, -1]}
    >
      <boxGeometry args={[0.58, 0.58, 0.58]} />

      <meshStandardMaterial
        color="#242424"
        metalness={0.9}
        roughness={0.2}
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

/* =========================================================
   FLOATING DIAMOND
========================================================= */

function FloatingDiamond() {
  const diamond = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!diamond.current) return;

    const isMobile = state.size.width < 640;

    diamond.current.rotation.x += 0.002;
    diamond.current.rotation.y -= 0.0018;

    diamond.current.position.x = THREE.MathUtils.lerp(
      diamond.current.position.x,
      isMobile
        ? -2.1 + state.pointer.x * 0.12
        : -3.15 + state.pointer.x * 0.25,
      0.055
    );

    diamond.current.position.y = THREE.MathUtils.lerp(
      diamond.current.position.y,
      isMobile
        ? 0.15 + state.pointer.y * 0.12
        : -1.05 + state.pointer.y * 0.2,
      0.055
    );
  });

  return (
    <mesh
      ref={diamond}
      position={[-3.15, -1.05, -1]}
    >
      <octahedronGeometry args={[0.52, 0]} />

      <meshStandardMaterial
        color="#ff5a1f"
        emissive="#ff5a1f"
        emissiveIntensity={0.3}
        metalness={0.75}
        roughness={0.22}
        wireframe
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

/* =========================================================
   SMALL ORANGE DOTS
========================================================= */

function OrbitDots() {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.z += 0.0006;
  });

  const dots = [
    [1.1, 1.6, -0.8],
    [4.6, -1.35, -0.9],
    [5.0, 0.35, -0.7],
    [0.2, -1.9, -1],
    [-4.1, 1.3, -1],
  ];

  return (
    <group ref={group}>
      {dots.map(([x, y, z], index) => (
        <mesh
          key={index}
          position={[x, y, z]}
        >
          <sphereGeometry args={[0.022, 8, 8]} />

          <meshBasicMaterial
            color="#ff5a1f"
            transparent
            opacity={0.65}
          />
        </mesh>
      ))}
    </group>
  );
}

/* =========================================================
   SCENE
========================================================= */

function Scene() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 8]}
        fov={45}
      />

      <ambientLight intensity={0.3} />

      <pointLight
        position={[4, 2, 4]}
        intensity={7}
        distance={10}
        color="#ff5a1f"
      />

      <pointLight
        position={[-4, -2, 4]}
        intensity={4}
        distance={9}
        color="#ffffff"
      />

      <Suspense fallback={null}>
        <PortraitHalo />

        <PortraitGlow />

        <HeroPortrait />

        <FloatingRing />

        <FloatingCube />

        <FloatingDiamond />

        <OrbitDots />
      </Suspense>

      <Sparkles
        count={60}
        scale={[11, 7, 8]}
        size={0.9}
        speed={0.12}
        opacity={0.28}
        color="#ffffff"
      />
    </>
  );
}

/* =========================================================
   HERO CANVAS
========================================================= */

export default function HeroScene() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        max-sm:inset-x-0
        max-sm:top-[245px]
        max-sm:h-[330px]
        max-sm:bottom-auto
      "
    >
      <Canvas
        dpr={[1, 1.25]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        frameloop="always"
      >
        <Scene />
      </Canvas>
    </div>
  );
}