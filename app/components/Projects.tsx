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
      className='h-[705px] sm:h-auto flex flex-row flex-wrap sm:columns-3 sm:block gap-4 my-8 overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {projects.map((p, i) => (
        <a
          href={p.href}
          target='_blank'
          rel='noopener noreferrer'
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(10)}
          className={clsx('w-[47.5%] sm:w-auto', p.aClass, 'sm:order-none')}
        >
          <div className={p.wrapperClass}>
            <Image
              alt={p.alt}
              src={p.src}
              fill
              priority
              className={clsx(p.imgClass, {
                'md:opacity-50': isHovered && hovered !== i,
              })}
            />
          </div>
        </a>
      ))}
    </div>
  )
}
