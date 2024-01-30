/* eslint-disable react/display-name */
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
    action?: boolean | string;
    danger?: boolean | string;
    name?: any;
    dataTestId?: string;
    loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            label,
            none,
            action,
            danger,
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
                    'bg-none text-orange-900 font-semibold hover:bg-none hover:text-orange-950': danger,
                    'bg-pink-700 text-white font-semibold': none,
                    'bg-pink-700 text-white font-semibold hover:bg-indigo-950': action,
                    'cursor-not-allowed opacity-80 text-white font-semibold': props.disabled,
                    'hover:bg-pink-800 hover:shadow-md': !props.disabled && !danger,
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
