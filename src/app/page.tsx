import Work from './_components/Work';
import Header from './_components/Header';
import About from './_components/About';

export default function Home() {
  return (
    <main id="home" className="relative mx-auto max-w-[96rem] px-8">
      <Header />
      <div className="h-20" />
      <Work />
      <div className="h-[17.5rem]" />
      <About />
    </main>
  );
}
