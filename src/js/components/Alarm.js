/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Alarm(props) {
  const { nodes, materials } = useGLTF('assets/alarm/alarm.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.alarm_clock_01.geometry}
        material={materials.alarm_clock_01}
      />
      <mesh
        geometry={nodes.alarm_clock_01_hour_hand.geometry}
        material={materials.alarm_clock_01}
        position={[0, 0.06, 0]}
        rotation={[-Math.PI / 2, 1.2, Math.PI]}
      />
      <mesh
        geometry={nodes.alarm_clock_01_minute_hand.geometry}
        material={materials.alarm_clock_01}
        position={[0, 0.06, 0]}
        rotation={[Math.PI / 2, -0.51, 0]}
      />
      <mesh
        geometry={nodes.alarm_clock_01_second_hand.geometry}
        material={materials.alarm_clock_01}
        position={[0, 0.06, 0]}
        rotation={[-Math.PI / 2, -1.16, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.alarm_clock_01_glass.geometry}
        material={materials.alarm_clock_01_glass}
      />
    </group>
  );
}

useGLTF.preload('assets/alarm//alarm.gltf');
