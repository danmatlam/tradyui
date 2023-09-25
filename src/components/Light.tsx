import React from 'react';

type Props = {
    /** Some description  */
    variant: 'green' | 'red' | 'yellow';
};

/* Some comment */
const Light = ({ variant = 'green' }: Props) => {
    return (
        <div
            style={{
                backgroundColor: variant,
                borderRadius: '50%',
                height: '100px',
                width: '100px',
            }}
        ></div>
    );
};

export default Light;
