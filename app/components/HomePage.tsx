// components/HomePage.tsx

import { FC } from 'react';
import SomeServerComponent from './server-only'

interface HomePageProps {
  pathname: string;
}

const HomePage: FC<HomePageProps> = async ({ pathname }) => {

  const body = await SomeServerComponent({ pathname });
  
  return (
    <div className="p-6 bg-white rounded shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">React Server Components in a Nutshell</h2>
      <div className="text-gray-700">{body}</div>
    </div>
  );
};

export default HomePage;
