import React from 'react';
import classNames from 'classnames';

interface CalloutProps {
    remaining: number;
    className: string;
}

export default function Callout(props: CalloutProps) {
    const { remaining, className } = props;
    const triangleClasses = "xl:after:content-[''] xl:after:-rotate-45 xl:after:right-[-3px] xl:after:top-[65%] xl:after:absolute xl:after:border-l-neutral-50 xl:after:border-b-transparent xl:after:border-t-transparent xl:after:border-solid xl:after:border-l-[20px] xl:after:border-b-[20px] xl:after:border-t-[20px]"
    const classes = classNames(`bg-neutral-50 text-veryDarkBlue p-3 rounded flex items-center ${triangleClasses}`, className);

    return (
        <div className={classes}>
            <span className="text-3xl font-bold mr-1">{remaining}</span>GB left            
        </div>
    )
}