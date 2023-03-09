import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model.jsx";
import { Suspense } from "react";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

export default function CanvasContainer({ count = 80, depth = 80, z }) {

    return (
        <>
        <div className={"title"}>
            <h1>
                Concerning Hobbits...
            </h1>
        </div>
        <div className={"quote"}>
            <p>"There and back again, A Hobbit’s tale, by Bilbo Baggins". Now, where to begin? </p>
        </div>
        <Canvas className={"canvas"} camera={{near: 0.01, far: 100, fov: 40}} dpr={1}>
            <Suspense fallback={null}>
                <color attach={"background"} args={["#629677"]} />
                <ambientLight intensity={0.5} />
                {Array.from({length: count}, ( _ ,  i) => (
                    <Model key={i} z={ -i / count  * depth} />
                ))}
                <Environment preset={"city"} blur={1} />
                    <EffectComposer>
                        <DepthOfField target={[0, 0, depth / 2]} focalLength={0.4} bokehScale={12} height={800} />
                    </EffectComposer>
            </Suspense>
        </Canvas>
        </>
    );
}