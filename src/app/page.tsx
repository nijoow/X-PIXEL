import About from './_components/About';
import Header from './_components/Header';

export default function Home() {
  return (
    <div className="relative mx-auto max-w-[96rem] px-8">
      <Header />
      <About />
    </div>
  );
}
