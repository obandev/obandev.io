import clsx from 'clsx'

type Link = {
  children: React.ReactNode
  className?: string
  download?: boolean
  href: string
}

export default function Link({
  children,
  className,
  href,
  download = false,
}: Link) {
  return (
    <a
      download={download}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={clsx(
        'w-full relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#75d3c1] to-[#c792e8] group-hover:from-[#75d3c1] group-hover:to-[#c792e8] hover:text-white dark:text-[#bfc7d5] focus:ring-1 focus:outline-none focus:ring-blue-300',
        className
      )}
    >
      <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#292d3e] rounded-md group-hover:bg-opacity-0 flex items-center justify-center'>
        {children}
      </span>
    </a>
  )
}
