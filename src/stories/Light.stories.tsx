import type { Meta, StoryObj } from '@storybook/react';

import Light from '../components/Light';

const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['green', 'yellow', 'red'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Light>;

export const Base: Story = {};
export const Yellow: Story = {
    args: {
        variant: 'yellow',
    },
};
export const Green: Story = {
    args: {
        variant: 'green',
    },
};

export const Red: Story = {
    args: {
        variant: 'red',
    },
};

export const Grouped: Story = {
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                border: '1px solid black',
                width: 'max-content',
                padding: '1rem',
                borderRadius: '1rem',
            }}
        >
            <Light {...args} variant='green' />
            <Light {...args} variant='yellow' />
            <Light {...args} variant='red' />
        </div>
    ),
};
