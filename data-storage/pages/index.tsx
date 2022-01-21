import type { NextPage } from 'next';
import ActionsCard from '../components/ActionsCard';
import StorageCard from '../components/StorageCard';

const Home: NextPage = () => {
  return (
    <main className="h-screen bg-veryDarkBlue flex items-center justify-center bg-mobile-custom bg-cover xl:bg-size-custom xl:bg-bottom xl:bg-desktop-custom bg-no-repeat">
      <div className="p-10 flex flex-col flex-1 xl:flex-initial xl:flex-row xl:items-end">
        <ActionsCard />
        <StorageCard />
      </div>
    </main>
  )
}

export default Home
