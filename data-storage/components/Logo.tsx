import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface LogoProps {
    src: string;
    className: string;
    alt: string;
}

export default function Logo(props: LogoProps) {
    const { src, className, alt } = props;
    const classes = classNames("bg-veryDarkBlue p-3 rounded-lg flex min-w-[48px]", className);
    return (
        <div className={classes}>
            <Image src={src} width="24" height="24" alt={alt} />
        </div>
    )
}