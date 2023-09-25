import clsx from 'clsx'

type Svg = {
  className?: string
  children: React.ReactNode
  viewBox?: string
}

export default function Svg({ className, children, viewBox }: Svg) {
  return (
    <svg
      className={clsx('h-5 w-5', className)}
      fill='currentColor'
      viewBox={viewBox || '0 0 24 24'}
    >
      {children}
    </svg>
  )
}
