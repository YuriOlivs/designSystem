import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'gray-900' | 'cyan-500' | 'gray-100';
    children: ReactNode;
    asChild?:  boolean;
}

export function Text({size = 'md', color = 'gray-100', children, asChild}: TextProps) {
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp 
        className={clsx(
            "font-sans", 
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
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