import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Environment, ScrollControls } from '@react-three/drei'
import Experience from "./Experience"


function App() {

  return (
    
      <div className="app">
        <Canvas>
          <color attach="background" args={["black"]}/>
          <Environment preset="city" background={false}/>
          <directionalLight position={[0,-.5,0]} intensity={5}/>
          <ScrollControls pages={5}>
            <Experience/>
          </ScrollControls>
        </Canvas>
    </div>
  )
}

export default App
