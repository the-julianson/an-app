
import HomePage from './components/HomePage';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-8">
      {/* <Counter someSubComponent={<SomeServerComponent pathname={"some-file.txt"}/>}/> */}
      <HomePage pathname={"main-body.txt"}/>
    </main>
  );
}