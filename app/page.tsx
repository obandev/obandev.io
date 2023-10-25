import Image from 'next/image'
import logo from 'public/images/home/logo.png'
import glove from 'public/images/home/glove.png'

import Link from './components/Link'
import Svg from './components/Svg'
import social from './utils/social'
import Projects from './components/Projects'

export default function Page() {
  return (
    <section>
      <div className='relative flex space-between'>
        <h1 className='mt-28 md:mt-32 text-[#c792e8] font-bold text-3xl tracking-tighter'>
          Hey, I'm Pablo.
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
          I'm a passionate full stack developer from SJ, Costa Rica. With over 6
          years of experience developing web pages and mobile apps, focused on
          improving user experiences and ensuring top-notch UI code quality in
          all project-related processes.
        </p>
        <p>
          I collaborate with teams to drive software product development,
          guiding technical decisions from concept to production, and ensuring
          successful project execution. Here are some projects that I've the
          privilege of work.
        </p>
      </div>
      <Projects />
      <div className='prose text-[#bfc7d5]'>
        <p>
          My favorite technologies, in which I have extensive experience, are{' '}
          <span className='text-[#75d3c1] font-semibold'>
            typescript, react, tailwind, graphql, mongodb, postgres, and node
          </span>{' '}
          . If these technologies resonate with your expertise or interests,
          there's a strong possibility we can find common ground for work.
        </p>
        <p>
          I'm currently finishing the university, studying for certify me on aws
          developer - associate and also learning solidity.
        </p>
        <p>
          Beyond the IDE, I enjoy spending quality time with my family, reading,
          exploring new destinations through travel, and savoring diverse food.
          I'm blending my academic journey with life's enjoyable moments,
          creating an unique chapter.
        </p>
      </div>
      <div className='flex flex-row justify-between mt-10'>
        <div>
          <h3 className='text-[#c792e8] font-bold text-3xl tracking-tighter'>
            Ready to connect?
          </h3>
          <p>Let's code together.</p>
        </div>
        <Image
          alt='below'
          src={glove}
          priority
          className='w-12 md:w-16 rotate-[10deg] md:rotate-45'
        />
      </div>
      <div className='flex pt-4 md:pt-0'>
        <Link href='https://twitter.com/messages/compose?recipient_id=1265171115518971905'>
          <Svg className='mr-1'>
            <path d='M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 01-.9 0L4 9.62V18h16V9.62z' />
          </Svg>
          Dm me
        </Link>

        <Link className='ml-4' href='https://cal.com/obandev'>
          <Svg className='mr-1' viewBox='0 0 20 20'>
            <path d='M11 6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z' />
            <path d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z' />
          </Svg>
          Book a call
        </Link>
      </div>
      <Link href='/resume_pablo_o.pdf' className='mt-4' download>
        <Svg viewBox='0 0 20 20' className='mr-1'>
          <path d='M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z' />
          <path d='M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z' />
        </Svg>
        Download resume
      </Link>

      <div className='flex items-center mt-8 mb-8'>
        {social.map(({ icon, href }, i) => (
          <a href={href} target='_blank' rel='noopener noreferrer' key={i}>
            <Svg className='mr-4'>{icon}</Svg>
          </a>
        ))}
      </div>
    </section>
  )
}
