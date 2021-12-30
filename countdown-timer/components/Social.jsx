import React from "react";
import Image from "next/image";

function Social(props) {
    return (
        <div className="social">
            <Image className="social__icon" src="/static/icon-facebook.svg" height={30} width={30} />
            <Image className="social__icon" src="/static/icon-pinterest.svg" height={30} width={30} />
            <Image className="social__icon" src="/static/icon-instagram.svg" height={30} width={30} />
            <style>
                {`
                    .social {
                        margin-top: auto;
                        margin-bottom: 50px;
                        z-index: 1;
                        display: flex;
                        width: 250px;
                        justify-content: space-evenly;
                    }

                    .social__icon {
                        margin: 0 20px;
                    }
                `}
            </style>
        </div>
    )
}

export default Social;