'use client';

import cn from 'classnames';
import React, { forwardRef } from 'react';

type ButtonProps = {
    label: any;
    type?: any;
    title?: string;
    disabled?: any;
    none?: any;
    onClick?: (e: any) => void;
    className?: string;
    name?: any;
    dataTestId?: string;
    loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            label,
            none,
            dataTestId,
            className,
            loading = false,
            ...props
        },
        ref
    ) => (
        <button
            {...props}
            className={cn(
                `px-4 py-2 rounded`,
                {
                    'bg-pink-700 text-white font-semibold': !none,
                    'cursor-not-allowed opacity-80 text-white font-semibold': props.disabled,
                    'hover:bg-pink-800 hover:shadow-md': !props.disabled,
                    'focus:outline-none': !props.disabled,
                    'focus:shadow-md': !props.disabled,
                },
                className
            )}
            data-testid={dataTestId}
            ref={ref}
        >
            {label}
        </button>
    )
);
