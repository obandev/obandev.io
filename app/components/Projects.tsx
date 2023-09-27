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
      className='flex flex-row flex-wrap sm:columns-3 gap-4 my-8'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {projects.map((p, i) => (
        <div className={p.wrapperClass}>
          {/* <a
            href={p.href}
            target='_blank'
            rel='noopener noreferrer'
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(10)}
            className={p.wrapperClass}
          > */}
          <Image
            alt={p.alt}
            src={p.src}
            fill
            priority
            className={clsx(p.imgClass, {
              'md:opacity-50': isHovered && hovered !== i,
            })}
            style={p.style}
          />
          {/* </a> */}
        </div>
      ))}
    </div>
  )
}
