import React, { useRef } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import * as THREE from 'three'

const useStyles = makeStyles((theme: Theme) => ({
  canvas: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
}));

function Cube(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]} {...props}>
      <meshStandardMaterial color="royalblue" />
    </Box>
  );
}

const Background3D: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.canvas}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default Background3D;