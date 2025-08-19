'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function AnimatedSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.5 : 1}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#00ff88" : "#0088ff"} 
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00ff88"
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        <ParticleField />
        
        <AnimatedSphere position={[-2, 1, 0]} />
        <AnimatedSphere position={[2, -1, 0]} />
        <AnimatedSphere position={[0, 2, -1]} />
        
        <Text
          position={[0, 0, 0]}
          fontSize={0.5}
          color="#00ff88"
          anchorX="center"
          anchorY="middle"
        >
         Shaunak Kundu
        </Text>
        
        {/* Biography split into three lines */}
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          I’m a full-stack developer and AI enthusiast
        </Text>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          specializing in AI/ML, NLP, and computer vision
        </Text>
        <Text
          position={[0, -1.1, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          creating interactive web platforms with React, Node.js, and Python
        </Text>
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-white/80 text-lg">
          Crafting digital experiences with code
        </p>
      </motion.div>
    </div>
  );
}