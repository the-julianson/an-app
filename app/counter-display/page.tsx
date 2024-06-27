// counter-display/page.tsx

import CounterDisplay from '../components/CounterDisplay';
import SomeServerComponent from '../components/server-only';

const CounterDisplayPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CounterDisplay subComponent={<SomeServerComponent pathname="current-count.txt" />} />
    </main>
  );
};

export default CounterDisplayPage;