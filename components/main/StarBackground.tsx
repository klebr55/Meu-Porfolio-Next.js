"use client";

import React, {useState, useRef, Suspense} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
// @ts-expect-error missing type definitions for maath/random esm build
import * as random from 'maath/random/dist/maath-random.esm'
/* eslint-disable @typescript-eslint/no-explicit-any */
const StarBackground = (props: any) => {
    // @ts-expect-error ref precisa ser any temporariamente
    const ref: any = useRef();
    const [sphere] = useState(() =>
      random.inSphere(new Float32Array(1750 * 3), { radius: 0.9 })
    );

    useFrame((state, delta) => {
      ref.current.rotation.x -= delta/10;
      ref.current.rotation.y -= delta/15;
    })

  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points 
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="$fff"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className='w-full h-auto fixed inset-0 z-[20]'>
        <Canvas camera={{position: [0, 0, 1]}}>
            <Suspense fallback={null}>
                <StarBackground/>
            </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;