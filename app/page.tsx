import Image from 'next/image'
import Button from 'components/button'
import nw from 'public/images/home/nw.jpg'
import logo from 'public/images/home/logo.png'
import glove from 'public/images/home/glove.png'
import geeklist from 'public/images/home/geeklist.jpg'
import delfino from 'public/images/home/delfino.jpg'
import quext from 'public/images/home/quext.jpg'
import ph from 'public/images/home/ph.jpg'
import blockmatic from 'public/images/home/blockmatic.jpg'

export default async function Page() {
  return (
    <section>
      <div className='relative flex space-between'>
        <h1 className='mt-28 md:mt-32 text-[#c792e8] font-bold text-3xl tracking-tighter'>
          Hey, I'm Pablo 👋
        </h1>
        <Image
          alt='astronaut'
          src={logo}
          priority
          className='w-36 absolute right-0 top-0 h-36 md:w-44 md:h-44 '
        />
      </div>
      <div className='prose text-[#bfc7d5]'>
        <p>
          With 6+ years of experience developing web pages and apps, I'm a
          passionate software developer focused on improving user experiences
          and ensuring top-notch UI code quality in all project-related
          processes.
        </p>
        <p>These are a few projects I've been part of </p>
      </div>
      <div className='columns-2 sm:columns-3 gap-4 my-8'>
        <div className='relative h-40 mb-4'>
          <Image
            alt='quext'
            src={quext}
            fill
            sizes='(max-width: 768px) 213px, 33vw'
            priority
            className='rounded-lg object-cover'
          />
        </div>
        <div className='relative h-80 mb-4 sm:mb-0'>
          <Image
            alt='parsley health'
            src={ph}
            fill
            sizes='(max-width: 768px) 213px, 33vw'
            priority
            className='rounded-lg object-cover object-[-16px] sm:object-center'
          />
        </div>
        <div className='relative h-40 sm:h-80 sm:mb-4'>
          <Image
            alt='delfino'
            src={delfino}
            fill
            sizes='(max-width: 768px) 213px, 33vw'
            priority
            className='rounded-lg object-cover object-top sm:object-center'
          />
        </div>
        <div className='relative h-40 mb-4 sm:mb-0'>
          <Image
            alt='nw'
            src={nw}
            fill
            sizes='(max-width: 768px) 213px, 33vw'
            priority
            className='rounded-lg object-cover'
          />
        </div>
        <div className='relative h-40 mb-4'>
          <Image
            alt='geeklist'
            src={geeklist}
            fill
            sizes='(max-width: 768px) 213px, 33vw'
            priority
            className='rounded-lg object-cover'
          />
        </div>
        <div className='relative h-80'>
          <Image
            alt='blockmatic'
            src={blockmatic}
            fill
            sizes='(min-width: 768px) 213px, 33vw'
            priority
            className='rounded-lg object-cover'
          />
        </div>
      </div>
      <div className='prose text-[#bfc7d5]'>
        <p>work in progress... 🧑‍💻</p>
      </div>
      {/* <div className='prose text-[#bfc7d5]'>
        <p>stack...</p>
      </div>
      <div className='prose text-[#bfc7d5]'>
        <p>Ready to meet?</p>
      </div>
      <Image alt='below' src={glove} priority className='w-16' />
      <div className='grid grid-cols-2 gap-4'>
        <Button>
          <a
            target='_blank'
            rel='noopener noreferrer'
          >
            Book a Call
          </a>
        </Button>
        <Button>
          <a
            target='_blank'
            rel='noopener noreferrer'
          >
            DM Me
          </a>
        </Button>
      </div>
      <div>
        <Button>
          <a
            target='_blank'
            rel='noopener noreferrer'
          >
            Download resume
          </a>
        </Button>
      </div> */}
    </section>
  )
}
