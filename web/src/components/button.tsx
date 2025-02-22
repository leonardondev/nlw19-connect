import type { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children?: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center w-full px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...rest}
    >
      {children}
    </button>
  )
}
