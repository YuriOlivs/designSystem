import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'gray-400' | 'cyan-500' | 'gray-100';
    children: ReactNode;
    asChild?:  boolean;
    className?: string
}

export function Heading({size = 'md', color = 'gray-100', children, asChild, className}: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp 
        className={clsx(
            "font-sans font-bold", 
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
                'text-gray-400': color === 'gray-400',
                'text-cyan-500': color === 'cyan-500',
                'text-gray-100':  color === 'gray-100'
            },
            className
        )}
        >
            {children}
        </Comp>
    )
}