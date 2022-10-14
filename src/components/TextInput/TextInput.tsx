import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
   children: ReactNode,
}

function TextInputRoot({children}: TextInputRootProps) {
   return (
      <div className='flex h-12 items-center gap-3 rounded bg-gray-800 w-full py-4 px-3 focus-within:ring-2 ring-cyan-300 outline-none transition'>
         {children}
      </div>
   )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
   children: ReactNode
}

function TextInputIcon({children}: TextInputIconProps) {
   return(
      <Slot className='w-6 h-6 text-gray-400'>
         {children}
      </Slot>
   )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
      <input 
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
      />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
   Root: TextInputRoot,
   Input: TextInputInput,
   Icon: TextInputIcon
}