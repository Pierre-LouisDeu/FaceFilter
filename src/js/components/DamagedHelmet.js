import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function DamagedHelmet(props) {
  const { nodes, materials } = useGLTF('assets/damagedHelmet/DamagedHelmet.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['node_damagedHelmet_-6514'].geometry} material={materials.Material_MR} rotation={[Math.PI / 2, 0, 0]} />
      <material name="Material_MR" />
    </group>
  )
}

useGLTF.preload('assets/damagedHelmet/DamagedHelmet.gltf')


