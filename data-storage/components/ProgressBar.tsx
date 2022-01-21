import React from 'react';

interface ProgressBarProps {
    max: number;
    min: number;
    current: number;
}

export default function ProgressBar(props: ProgressBarProps) {
    const { max, min, current } = props;

    const percentFull = (current / max) * 100;
    // E.g. (1 - (850 / 1000)) * 100 because I'm using CSS right property so it has to be distance from the right side
    const progressDistance = (1- (current / max)) * 100;

    const progressBarClasses = "progress-bar bg-veryDarkBlue relative w-100 h-4 my-2 rounded-full after:content-[''] after:h-3 after:w-3 after:absolute after:bg-neutral-50 after:rounded-full after:top-0 after:bottom-0 after:m-auto";

    // Workaround due to https://tailwindcss.com/docs/content-configuration#class-detection-in-depth
    const extraCSS = `
        .progress-bar__progress {
            width: ${percentFull !== 100 ? percentFull + 0.3 : percentFull}%;
            background-image: linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
        }
        .progress-bar::after {
            right: ${progressDistance}%
        }
    `;
    return (
        <div>
            <style>
                {extraCSS}
            </style>
            <div className="text-neutral-50 text-center xl:text-left">You&apos;ve used <span>{current}GB</span> of your storage</div>
            <div className={progressBarClasses}>
                <div className="progress-bar__progress h-full rounded-full"></div>
            </div>
            <div className="flex justify-between">
                <div className="text-neutral-50">{min}GB</div>
                <div className="text-neutral-50">{max}GB</div>
            </div>
        </div>
    )
}