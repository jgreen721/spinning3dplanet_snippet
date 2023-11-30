import React, { useLayoutEffect,useRef } from 'react'
import {useScroll,Scroll, useGLTF} from "@react-three/drei"
import { useFrame } from '@react-three/fiber';
import gsap from "gsap"




const Experience = () => {
    const scroll = useScroll();
    const tl = useRef()
    const boxRef = useRef();
    const img = useGLTF("./world.glb")

    console.log(img)
    let vel = .005


    useFrame((state,delta)=>{
        // console.log("useFrame",state)
        console.log(scroll.offset)
        boxRef.current.rotation.y += scroll.offset * vel;
        if(Math.abs(boxRef.current.rotation.y - 3.14)  > 1.15){
            vel *= -1;
        }
    })

    useLayoutEffect(()=>{

        tl.current = gsap.timeline();
        // boxRef.current.rotation.y += scroll.offset * Math.PI

    })
  return (
    <>
    <Scroll></Scroll>
    <group scale={.2} rotation={[0,Math.PI,0]} position={[0,-1.25,0]} ref={boxRef}>
        {/* <mesh name="myWeirdBox" rotation={[0,Math.PI * 1,0]} scale={[2,3,1]}>
        <boxGeometry>
        </boxGeometry>
        <meshBasicMaterial color="blue"/>

        </mesh>

        <mesh name="2ndWEIRDO" position={[2,1,1]} scale={[1,3,1]}>
        <boxGeometry>
        </boxGeometry>
        <meshBasicMaterial color="green"/>

        </mesh> */}
        <primitive object={img.scene}/>
    </group>
    </>
  )
}

export default Experience