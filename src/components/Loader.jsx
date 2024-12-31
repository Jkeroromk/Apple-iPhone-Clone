import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
        <div className="absolute top-0 left-0 w-full flex justify-center items-center">
            <div className='rounded-full w-[10vw] h-[10vw]'>
                Loading...
            </div>
        </div>
    </Html>
  )
}

export default Loader