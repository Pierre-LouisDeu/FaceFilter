/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function GrassMedium(props) {
  const { nodes, materials } = useGLTF('assets/grass/grass.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.grass_medium_01.geometry} material={materials.grass_medium_01} />
    </group>
  )
}

useGLTF.preload('assets/grass/grass.gltf')