import React, { useEffect, useRef, useState } from "react";
import classNames from 'classnames';

function getTimeDifference(endDate) {
    const today = new Date();
    return ((new Date(endDate).getTime() - today.getTime()) / 1000);
}

function appendZero(number) {
    if (number < 10) {
        return `0${number}`
    }
    return number;
}

function getTimeRemaining(countdownTime) {
    let timeRemaining = countdownTime;
    const daysRemaining = Math.max(Math.floor(timeRemaining / (60 * 60 * 24)), 0);
    timeRemaining = timeRemaining - (daysRemaining * 24 * 60 * 60);
    const hoursRemaining = Math.max(Math.floor(timeRemaining / (60 * 60)), 0);
    timeRemaining = timeRemaining - (hoursRemaining * 60 * 60);
    const minutesRemaining = Math.max(Math.floor(timeRemaining / 60), 0);
    timeRemaining = timeRemaining - (minutesRemaining * 60);
    const secondsRemaining = Math.max(Math.ceil(timeRemaining), 0);
    return {
        daysRemaining,
        hoursRemaining,
        minutesRemaining,
        secondsRemaining,
    }
}

function Countdown(props) {
    const { endDate = 'December 30 2021 23:12:00' } = props;
    const [countdownTime, setCountdownTime] = useState(() => {
        return getTimeDifference(endDate)
    });
    const [prevCountdownTime, setPrevCountdownTime] = useState(() => {
        return getTimeDifference(endDate)
    });
    const intervalID = useRef(null);

    useEffect(() => {
        if (countdownTime <= 0 && intervalID.current) {
            clearInterval(intervalID.current);
            intervalID.current = null;
            return;
        }

    }, [countdownTime]);

    useEffect(() => {
        const id = setInterval(() => {
            const diff = getTimeDifference(endDate);
            setPrevCountdownTime(diff + 1);
            setCountdownTime(diff);
        }, 1000);
        intervalID.current = id;

        return () => {
            clearInterval(intervalID.current);
        }
    }, []);

    const {
        daysRemaining,
        hoursRemaining,
        minutesRemaining,
        secondsRemaining
    } = getTimeRemaining(countdownTime);

    const {
        daysRemaining: prevDays,
        hoursRemaining: prevHours,
        minutesRemaining: prevMinutes,
        secondsRemaining: prevSeconds
    } = getTimeRemaining(prevCountdownTime);

    const getBackgroundClasses = function getBackgroundClasses(timePart) {
        function getClasses(flip) {
            return classNames("countdown__background", {
                "countdown__background--flip": flip 
            });
        }

        switch (timePart) {
            case 'days':
                return getClasses(daysRemaining !== prevDays);
            case 'hours':
                return getClasses(hoursRemaining !== prevHours);
            case 'minutes':
                return getClasses(minutesRemaining !== prevMinutes);
            default: 
                return getClasses(secondsRemaining !== prevSeconds);
        }
        
    }

    return (
        <div className="countdown">
            <div className="countdown__time">
                <div className="countdown__timeRemaining">
                    <div className={getBackgroundClasses("days")}></div>
                    {appendZero(daysRemaining)}
                </div>
                <div className="countdown__label">Days</div>
            </div>
            <div className="countdown__time">
                <div className="countdown__timeRemaining">
                    <div className={getBackgroundClasses("hours")}></div>
                    {appendZero(hoursRemaining)}
                </div>
                <div className="countdown__label">Hours</div>
            </div>
            <div className="countdown__time">
                <div className="countdown__timeRemaining">
                    <div className={getBackgroundClasses("minutes")}></div>
                    {appendZero(minutesRemaining)}
                </div>
                <div className="countdown__label">Minutes</div>
            </div>
            <div className="countdown__time">
                <div className="countdown__timeRemaining">
                <div className={getBackgroundClasses("seconds")}></div>
                    {appendZero(secondsRemaining)}
                </div>
                <div className="countdown__label">Seconds</div>
            </div>
            <style jsx>{`
                .countdown {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 50px;
                }

                .countdown__time {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .countdown__timeRemaining {
                    background-image: linear-gradient(to bottom, var(--darkerSaturatedBlue) 0 50%, var(--darkSaturatedBlue) 50% 100%);
                    border-radius: 5px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    z-index: 1;
                    box-shadow: 0 5px var(--black);
                    font-size: 40px;
                    color: var(--red);
                    width: 75px;
                    height: 75px;
                }

                .countdown__background {
                    background-color: var(--darkSaturatedBlue);
                    position: absolute;
                    top: 50%;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: -1;
                }

                .countdown__background--flip {
                    animation-name: flip;
                    animation-duration: 1s;
                    animation-iteration-count: infinite;
                    transform-origin: top;
                }

                @keyframes flip {
                    from {
                        transform: rotateX(0deg);
                        background-color: var(--darkSaturatedBlue);
                    }


                    to {
                        transform: rotateX(180deg);
                        background-color: var(--darkerSaturatedBlue);
                    }
                }

                .countdown__timeRemaining,
                .countdown__label {
                    position: relative;
                    z-index: 2;
                }

                .countdown__timeRemaining::before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    background-color: var(--black);
                    width: 10px;
                    height: 10px;
                    left: -5px;
                    transform: translateY(-50%);
                    top: 50%;
                }

                .countdown__timeRemaining::after {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    background-color: var(--black);
                    width: 10px;
                    height: 10px;
                    right: -5px;
                    transform: translateY(-50%);
                    top: 50%;
                }

                .countdown__label {
                    margin-top: 20px;
                    color: var(--grayBlue);
                    font-size: 10px;
                }

                @media screen and (min-width: 460px) {
                    .countdown__timeRemaining {
                        width: 100px;
                        height: 100px;
                        font-size: 50px;
                    }
                }
            `}
            </style>
        </div>
    )
}

export default Countdown;