import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Chair = () => {
  const gltf = useLoader(GLTFLoader, "/chair.gltf");
  return <primitive object={gltf.scene} />;
};

export default Chair;
