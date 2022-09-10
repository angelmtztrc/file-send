import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-slate-100">
      <nav className="container mx-auto flex max-w-screen-lg items-center justify-between py-3">
        <h1 className="text-3xl font-extrabold tracking-wide text-slate-900">
          File<span className="text-indigo-500">Send</span>
        </h1>
        <ul>
          <li>Create Account</li>
          <li>Sign In</li>
        </ul>
      </nav>
      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-full max-w-3xl grid-cols-2 gap-4 rounded-lg bg-white p-6 shadow">
          <div>
            <h2 className="text-4xl font-extrabold tracking-wide text-slate-900">
              Share your files <br /> in the most secure <br /> and private way.
            </h2>
            <p className="mt-6 text-base text-slate-900">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ut tempore
              quam, illo mollitia modi eveniet molestias accusamus doloribus impedit.
            </p>
            <p className="mt-4">Create your account for better benefits.</p>
          </div>
          <div>
            <p>dropbox here</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
