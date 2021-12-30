import Countdown from '../components/Countdown';
import Social from '../components/Social';

export default function Home() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 14);
  return (
    <div className="home">
      <h2 className="title">We're Launching Soon</h2>
      <Countdown endDate={endDate} />
      <Social />
      <img className="hills-image" src="/static/pattern-hills.svg" width="100%" />
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
