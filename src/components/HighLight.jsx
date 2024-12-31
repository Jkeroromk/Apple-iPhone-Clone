import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { watchImg , rightImg } from '../utils'
import VideoCarousel from './videoCarousel.jsx'

const HighLight = () => {

  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out'
    })
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.25,
      ease: 'power4.out'
    })
  }, [])

  return (
    <section id='#HighLight' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
        <h1 className='section-heading' id='title'>Get the HighLight.</h1>

        <div className='flex flex-wrap items-end gap-5'>
          <p className='link'>Watch the Film
            <img src={watchImg} alt="watch" className='ml-2'/>
          </p>
          <p className='link'>Watch the event
            <img src={rightImg} alt="right" className='ml-2'/>
          </p>
        </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default HighLight