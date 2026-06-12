import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Environment, Float, Center } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { SVGLoader } from 'three-stdlib';

// 3D Extruded Logo Component
function GlassLogo() {
  const groupRef = useRef<THREE.Group>(null);

  // Load the SVG file
  const svg = useLoader(SVGLoader, '/images/logos/logo-mark.svg');

  // Convert SVG paths to 3D shapes
  const shapes = useMemo(() => svg.paths.map((p) => p.toShapes(true)), [svg]);

  // Mouse tracking for subtle rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating rotation baseline
      const baseRotY = Math.sin(t / 4) / 6;
      const baseRotX = Math.cos(t / 4) / 8;

      // Mouse parallax
      const targetRotY = (state.pointer.x * Math.PI) / 8;
      const targetRotX = (state.pointer.y * Math.PI) / 8;

      // Smooth interpolation for mouse movement + base float
      groupRef.current.rotation.x += 0.05 * (targetRotX + baseRotX - groupRef.current.rotation.x);
      groupRef.current.rotation.y += 0.05 * (targetRotY + baseRotY - groupRef.current.rotation.y);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Center scale={[0.02, -0.02, 0.02]} position={[2, 0, -2]}>
          {svg.paths.map((path, index) => {
            // Check if this path is the accent color (#e1fc06) or the main dark color
            // SVGLoader parses styles and stores colors in path.color
            const isAccent = path.userData?.style.fill === '#e1fc06';

            return (
              <mesh key={index}>
                <extrudeGeometry
                  args={[
                    shapes[index],
                    {
                      depth: isAccent ? 40 : 20, // Make the accent pop out more
                      bevelEnabled: true,
                      bevelThickness: 2,
                      bevelSize: 1,
                      bevelSegments: 4,
                      curveSegments: 24,
                    },
                  ]}
                />

                {isAccent ? (
                  // Neon Lime Glass/Emissive for the accent part
                  <meshPhysicalMaterial
                    color="#E1FC06"
                    emissive="#E1FC06"
                    emissiveIntensity={0.2}
                    transmission={0.9}
                    opacity={1}
                    metalness={0.2}
                    roughness={0.1}
                    ior={1.5}
                    thickness={5}
                  />
                ) : (
                  // Dark Glass for the main brand mark
                  <meshPhysicalMaterial
                    color="#0A0A0A"
                    transmission={1}
                    opacity={1}
                    metalness={0.8}
                    roughness={0.1}
                    ior={1.8}
                    thickness={10}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                  />
                )}
              </mesh>
            );
          })}
        </Center>
      </Float>
    </group>
  );
}

function Scene() {
  const lightRef = useRef<THREE.PointLight>(null);

  // Light follows mouse slightly
  useFrame((state) => {
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
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight
        ref={lightRef}
        position={[0, 0, 5]}
        distance={20}
        intensity={2.5}
        color="#E1FC06"
      />

      <Suspense fallback={null}>
        <GlassLogo />
      </Suspense>

      {/* Environment reflections for the glass */}
      <Environment preset="city" />

      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.2} />
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
