import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

// Define the 3D scene component
function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  // Mouse tracking for parallax and subtle rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating rotation
      groupRef.current.rotation.y = Math.sin(t / 4) / 4;
      groupRef.current.rotation.x = Math.cos(t / 4) / 4;

      // Mouse parallax
      const x = (state.pointer.x * Math.PI) / 10;
      const y = (state.pointer.y * Math.PI) / 10;

      // Smooth interpolation for mouse movement
      groupRef.current.rotation.x += 0.05 * (y - groupRef.current.rotation.x);
      groupRef.current.rotation.y += 0.05 * (x - groupRef.current.rotation.y);
    }

    // Light follows mouse slightly
    if (lightRef.current) {
      lightRef.current.position.x = state.pointer.x * 5;
      lightRef.current.position.y = state.pointer.y * 5;
    }
  });

  return (
    <>
      {/* Base dark background */}
      <color attach="background" args={['#0A0A0A']} />

      {/* Lights */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight ref={lightRef} position={[0, 0, 5]} distance={20} intensity={2} color="#E1FC06" />

      <group ref={groupRef}>
        {/* Main distorted sphere */}
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.5, 64, 64]} position={[-2.5, 0.5, -2]}>
            <MeshDistortMaterial
              color="#111111"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>

        {/* Glassy Torus */}
        <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
          <Torus
            args={[1.2, 0.3, 32, 100]}
            position={[2.5, 1, -1]}
            rotation={[Math.PI / 4, Math.PI / 4, 0]}
          >
            <meshPhysicalMaterial
              color="#0A0A0A"
              roughness={0.1}
              metalness={0.9}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </Torus>
        </Float>

        {/* Small neon accent sphere */}
        <Float speed={1} rotationIntensity={1.5} floatIntensity={1}>
          <Sphere args={[0.3, 32, 32]} position={[0, -2, 1]}>
            <meshStandardMaterial
              color="#E1FC06"
              emissive="#E1FC06"
              emissiveIntensity={0.8}
              roughness={0.2}
            />
          </Sphere>
        </Float>
      </group>

      {/* Environment reflections */}
      <Environment preset="city" />

      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
