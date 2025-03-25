import FeaturedProject from './_components/FeaturedProject';
import ProjectProgress from './_components/ProjectProgress';
import Section1 from './_components/Section1';
import Section2 from './_components/Section2';
import SubscriptionPlan from './_components/SubscriptionPlan';

export default function Home() {
  return (
    <main className="relative mx-auto w-full pt-10 md:pt-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8">
        <Section1 />
        <div className="h-24 sm:h-40" />
        <Section2 />
        <div className="h-24 sm:h-40" />
        <FeaturedProject />
        <div className="h-24 sm:h-40" />
        <ProjectProgress />
        <div className="h-24 sm:h-40" />
      </div>
      <SubscriptionPlan />
    </main>
  );
}
