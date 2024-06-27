import Counter from '../components/counter';
import SomeServerComponent from '../components/server-only';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter someSubComponent={<SomeServerComponent pathname={"some-file.txt"}/>}/>
    </main>
  );
}