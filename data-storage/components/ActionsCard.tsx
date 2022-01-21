import React from 'react';
import Image from 'next/image';
import Logo from './Logo';

export default function ActionsCard() {
    return (
        <div className="bg-darkBlue p-10 rounded-lg-tr-xxl flex flex-col justify-center xl:pr-32">
            <div className="relative aspect-square w-28">
                <Image src="/logo.svg" alt="Fylo" layout="fill" objectFit="contain" />
            </div>
            <div className="flex">
                <Logo className="mr-2" src="/icon-document.svg" alt="documents" />
                <Logo className="mr-2" src="/icon-folder.svg" alt="browse" />
                <Logo className="mr-2" src="/icon-upload.svg" alt="upload" />
            </div>
        </div>
    )
}