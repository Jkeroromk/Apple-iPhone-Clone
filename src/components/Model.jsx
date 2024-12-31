import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useEffect } from 'react'
import ModelView from './ModelView'
import { useState } from 'react'
import { yellowImg } from '../utils'
import * as THREE from 'three'
import { useRef } from 'react'
import { View } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { models, sizes } from '../constants'
import { animateWithGsapTimeline } from '../utils/animation'

const Model = () => {

    const [Sizes, setSizes] = useState('small')
    const [model, setmodel] = useState({
        title:'iPhone 15 pro in Natural Titanium',
        color:['#8F8A81','#FFE7B9','#6F6C64'],
        img: yellowImg,
    })

    useGSAP(() => {
        gsap.to('#heading', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
    },[])

    //Camera Controls
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    //Models
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());


    //Scene
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline()

    useEffect(() => {
        if(Sizes === 'large'){
            animateWithGsapTimeline(tl,small,smallRotation,'#view1','#view2',
            {
                transform: 'translateX(-100%)',
                duration: 1.5
            });
        }
        if(Sizes === 'small'){
            animateWithGsapTimeline(tl,large,largeRotation,'#view2','#view1',
                {
                    transform: 'translateX(0)',
                    duration: 1.5
                });
        }
    },[Sizes])
    
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <h1 className='section-heading' id='heading'>
                Take a closer look
            </h1>
            <div className="flex flex-col items-center mt-5">
                <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                    <ModelView
                    index={1}
                    groupRef={small}
                    gsapType='view1'
                    controlRef={cameraControlSmall}
                    setRotationState={setSmallRotation}
                    item={model}
                    size={Sizes}
                    />
                    <ModelView
                    index={2}
                    groupRef={large}
                    gsapType='view2'
                    controlRef={cameraControlLarge}
                    setRotationState={setLargeRotation}
                    item={model}
                    size={Sizes}
                    />
                    <Canvas 
                    className='w-full h-full' 
                    style={{
                        position:'fixed',
                        top:0,
                        bottom:0,
                        left:0,
                        right:0,
                        overflow:'hidden',
                    }}
                        eventSource={document.getElementById('root')}
                    >
                        <View.Port/>
                    </Canvas>
                </div>
                <div className="mx-auto w-full">
                    <p className='text-sm font-light mb-5 text-center'>{model.title}</p>
                    <div className='flex-center'>
                        <ul className='color-container'>
                            {models.map((item, i) => (
                                <li 
                                key={i} 
                                className='w-6 h-6 rounded-full mx-2 cursor-pointer' 
                                style={{backgroundColor:item.color[0]}}
                                onClick={() => setmodel(item)}
                                />
                            ))}
                        </ul> 
                        <button className='size-btn-container'>
                            {sizes.map(({ label,value }) => (
                                <span 
                                key={label} 
                                className='size-btn'
                                style={{backgroundColor: Sizes === value ? 'white' : 'transparent',color: Sizes === value ? 'black' : 'white'}}
                                onClick={() => setSizes(value)}
                                >
                                    {label}
                                </span>
                            ))}
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model