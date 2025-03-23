import FeaturedProject from './_components/FeaturedProject';
import Section1 from './_components/Section1';
import Section2 from './_components/Section2';

export default function Home() {
  return (
    <main className="relative mx-auto max-w-[96rem] px-8 pt-20">
      <Section1 />
      <div className="h-40" />
      <Section2 />
      <div className="h-40" />
      <FeaturedProject />
    </main>
  );
}
