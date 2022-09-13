import Button from '../atoms/Button';

const Navbar = () => {
  return (
    <nav className="container mx-auto flex max-w-screen-lg items-center justify-between py-4">
      <h1 className="text-3xl font-extrabold tracking-wide text-white">
        File<span className="text-medium-state-blue">Send</span>
      </h1>
      <ul className="flex items-center space-x-2 text-white">
        <li>
          <Button className="bg-medium-state-blue text-white hover:bg-medium-state-blue-dark">
            Create Account
          </Button>
        </li>
        <li>
          <Button className="bg-transparent text-white hover:bg-raisin-black">
            Sign In
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
