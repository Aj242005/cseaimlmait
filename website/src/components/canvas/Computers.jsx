import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {
    const { scene } = useGLTF("/neural_network/scene.glb"); // Ensure correct path

    return (
        <group>
            <hemisphereLight intensity={0.15} groundColor='black'/>
            <spotLight
                position={[-70, 60, 10]}
                angle={0}
                penumbra={1}
                intensity={1}
                castShadow = {1}
                shadow-mapSize={1024}
            />
            <pointLight intensity={1}/>

            <primitive
                object={scene}
                scale={isMobile ? 0.7 : 0.85}
                position={isMobile ? [-0, -3, -2.2] : [-1, -1.7, -1]}
                rotation={[0.0, 0.79, 0.]}
            />
        </group>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [30, 10, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;