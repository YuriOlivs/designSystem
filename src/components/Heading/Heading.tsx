import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'gray-900' | 'cyan-500' | 'gray-100';
    children: ReactNode;
    asChild:  boolean;
}

export function Heading({size = 'md', color = 'gray-100', children, asChild}: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp 
        className={clsx(
            "font-sans", 
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
                'text-gray-900': color === 'gray-900',
                'text-cyan-500': color === 'cyan-500',
                'text-gray-100':  color === 'gray-100'
            }
        )}
        >
            {children}
        </Comp>
    )
}