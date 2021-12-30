import Head from 'next/head';
import Image from 'next/image';
import Countdown from '../components/Countdown';
import Social from '../components/Social';

export default function Home() {
  return (
    <div className="home">
      <h2 className="title">We're Launching Soon</h2>
      <Countdown />
      <Social />
      <img className="hills-image" src="/pattern-hills.svg" width="100%" />
      <style>
        {`
          .title {
            font-size: 30px;
            margin-top: auto;
          }
        `}
      </style>
    </div>
  )
}
