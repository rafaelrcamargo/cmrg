"use client"
import { ReactNode, useRef, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Center, Instance, Instances, OrbitControls, Text3D, useFBO } from "@react-three/drei"

import { RGBELoader } from "three-stdlib"

export function Scene() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <Grid />
      <OrbitControls />
    </Canvas>
  )
}

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#999" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group key={x + ":" + y} position={[x * 2 - Math.floor(number / 2) * 2, 0, y * 2 - Math.floor(number / 2) * 2]}>
          <Instance color={"#646464"} rotation={[-Math.PI / 2, 0, 0]} />
          <Instance color={"#646464"} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    <gridHelper args={[100, 100, "#161616", "#161616"]} position={[0, -0.01, 0]} />
  </Instances>
)
