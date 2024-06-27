// components/NavBar.tsx

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">
          <Link href="/">
            <span className="text-white hover:text-gray-300">Home</span>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/client-side-list">
            <span className="text-white hover:text-gray-300">Client Side List</span>
          </Link>
          <Link href="/server-side-list">
            <span className="text-white hover:text-gray-300">Server Side List</span>
          </Link>
          <Link href="/counter">
            <span className="text-white hover:text-gray-300">Counter</span>
          </Link>
          <Link href="/counter-display">
            <span className="text-white hover:text-gray-300">Counter Display</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
