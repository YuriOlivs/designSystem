import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'gray-400' | 'cyan-500' | 'gray-100';
    children: ReactNode;
    asChild?:  boolean;
    className?: string
}

export function Text({size = 'md', color = 'gray-100', children, asChild, className}: TextProps) {
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp 
        className={clsx(
            "font-sans", 
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
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