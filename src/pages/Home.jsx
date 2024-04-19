import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import  Loader  from '../components/Loader'

import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false); 
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    } 

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const [ currentStage , setCurrentStage ] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition; 
    let rotation = [0, -1.57, 0]; // Default scale

    if(window.innerWidth < 768) {
      // Smaller screens (e.g., mobile devices)
      screenScale = [.9, .9, .9];
      screenPosition = [0, -5.5, -50.5];
    // } else if (window.innerWidth >= 1440) {
    //   // Large curved screens
    //   screenScale = [1, 1, 1]; // Slightly larger scale to utilize screen space
    //   //screenPosition = [0, -5, -90]; // Adjust position to be more centered
    //   rotation = [0, 0, 0]; // Adjust rotation if needed// }
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4]
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition; 
 
    if(window.innerWidth < 768) {
      // Smaller screens (e.g., mobile devices)
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1, 0];
    // } else if (window.innerWidth >= 1440) {
    //   // Large curved screens
    //   screenScale = [3, 3, 3]; // Slightly larger scale to utilize screen space
    //   screenPosition = [0, -4, 10]; // Adjust position to be more centered
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -1.5, -4];
    }

    return [screenScale, screenPosition];
  }

  const[islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
    <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
     <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
        camera={{near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position ={[5,1,1]} intensity={1.7} /> {/*distant point source light*/} 
          <ambientLight intensity={.5}/> {/*all light no shadows*/} 
          {/*<pointLight />*/}
          {/*spotlight*/}
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} intensity={1}/>

          
          <Bird />
          <Sky isRotating={isRotating} />
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
          <Plane
            isRotating={isRotating} 
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
     </Canvas>

     <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pinter object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
     </div>
    </section>
  )
}

export default Home