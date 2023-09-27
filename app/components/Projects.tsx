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
      className='columns-2 sm:columns-3 gap-4 my-8'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {projects.map((p, i) => (
        <div className={p.wrapperClass}>
          <Image
            alt={p.alt}
            src={p.src}
            priority
            fill
            className={clsx(p.imgClass, {
              'md:opacity-50': isHovered && hovered !== i,
            })}
          />
        </div>
      ))}
    </div>
  )
}
