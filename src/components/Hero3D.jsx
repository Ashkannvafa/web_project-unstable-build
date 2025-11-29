"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import { useRef } from 'react';

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    // Rotates the object based on time
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#a855f7"     // Matches your neon-purple
          attach="material"
          distort={0.5}       // Amount of wobbly distortion
          speed={2}           // Speed of the wobble
          roughness={0.2}
          metalness={0.9}     // Shiny metallic look
        />
      </Sphere>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[400px] md:h-[600px] w-full flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-3, -3, 2]} intensity={0.5} color="#a855f7" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}











    