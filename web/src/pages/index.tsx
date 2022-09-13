import { Navbar } from '@molecules';
import { Dropzone } from '@organisms';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-eerie-black">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-full max-w-3xl grid-cols-2 gap-4 rounded-lg border border-raisin-black px-6 py-8">
          <div>
            <h2 className="text-4xl font-extrabold tracking-wide text-white">
              Share your files <br /> in the most secure <br /> and private way.
            </h2>
            <p className="mt-6 text-base text-cadet-grey-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ut tempore
              quam, illo mollitia modi eveniet molestias accusamus doloribus impedit.
            </p>
            <p className="mt-4 inline-block rounded-lg bg-medium-state-blue-dark bg-opacity-10 px-4 py-2 text-medium-state-blue-light">
              Create your account for better benefits.
            </p>
          </div>
          <Dropzone />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
