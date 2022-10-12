import React, { useState, useEffect, useRef, Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const Cat = (props) => {
  const materials = useLoader(MTLLoader, "assets/cat/12221_Cat_v1_l3.mtl");
  const obj = useLoader(OBJLoader, "assets/cat/12221_Cat_v1_l3.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} {...props} rotation-x={-Math.PI / 2} scale={0.05} position={[0, 1.5, -1]}/>;
};

export default Cat;
