import React, { useRef, useState } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

type BoxProps = {
  position: [number, number, number];
};

const Box = ({ position, ...restProps }: BoxProps) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh
      ref={ref}
      scale={clicked ? 1.5 : 1}
      position={position}
      onClick={(event) => setClicked(!clicked)}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Box;
