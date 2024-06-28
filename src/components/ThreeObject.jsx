/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { ScrollControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import ThreeObj from "../assets/3d/draft_comp.glb";


const Sweet3dObj = ({scale, postition}) => {
  const Sweet3dObjRef = useRef();
  const { scene, animations } = useGLTF(ThreeObj);
  const { actions } = useAnimations(animations, Sweet3dObjRef);

  useEffect(() => {
    actions["Idle"].play();
  }, [actions]);

  return (
    <mesh ref={Sweet3dObjRef} position={position} scale={scale} rotation={[-0.3, 0, 3]}>
      <primitive object={scene} />
    </mesh>
  )

};


const Sweet3dObjCanvas = ({ScrollContainer}) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([2,2,2]);
  const [position, setPosition] = useState([0.2, -0.7, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = ScrollContainer.current.scrollTop;
      const rotationXValue = scrollTop * -0.0006;
      const rotationYValue = scrollTop * -0.00075;
      setRotationX(rotationXValue);
      setRotationY(rotationYValue);
    }
  }, [ScrollContainer]);
}

export default Sweet3dObjCanvas;