import type { HTMLAttributes } from 'react'

import { forwardRef } from 'react'

export type ButtonProps = HTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className='min-w-7 min-h-7 rounded inline-flex items-center justify-center px-3 gap-1 text-2 font-medium cursor-pointer transition-colors border border-base-7 hover:border-base-8 active:border-base-9 bg-base-3 hover:bg-base-4 text-base'
        {...props}
      />
    )
  }
)

export default Button
