'use client'
import projects from 'app/utils/projects'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false)
  const [hovered, setHovered] = useState(10)

  return (
    <div
      className='columns-2 bg-red-500'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {projects.map((p, i) => (
        <div
          className={p.wrapperClass}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(10)}
        >
          <a href={p.href} target='_blank' rel='noopener noreferrer' key={i}>
            {/* <Image
              alt={p.alt}
              src={p.src}
              fill
              priority
              className={clsx(p.imgClass, {
                'md:opacity-50': isHovered && hovered !== i,
              })}
            /> */}
          </a>
        </div>
      ))}
    </div>
  )
}
