import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from "./Heading";

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem Ipsum.',
        size: 'md',
        color: 'gray-100'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
        color: {
            options: ['gray-100', 'gray-900', 'cyan-500'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        ) 
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}


