import React from 'react';
import Callout from './Callout';
import ProgressBar from './ProgressBar';

const MAX = 1000;
const MIN = 0;
const CURRENT = 815;

interface StorageCardProps {}

export default function StorageCard(props: StorageCardProps) {
    return (
        <div className="bg-darkBlue p-10 rounded-lg mt-4 xl:ml-5 flex flex-col xl:min-w-[750px] relative">
            <ProgressBar max={MAX} min={MIN} current={CURRENT} />
            <Callout className="m-auto absolute bottom-0 xl:bottom-[unset] translate-y-1/2 xl:translate-y-0 -translate-x-1/2 xl:translate-x-0 left-1/2 xl:left-[unset] xl:right-[2.5rem] xl:top-[-25%]" remaining={MAX - CURRENT} />
        </div>
    )
}