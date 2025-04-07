import React from 'react';
import ProgressStep from './ProgressStep';

const ProjectProgress = () => {
  return (
    <section className="flex flex-col items-center">
      <span className="text-center text-4xl font-bold whitespace-pre-line md:text-5xl">
        Project Progress
      </span>

      <div className="grid w-full grid-cols-12 gap-6 py-15">
        <ProgressStep
          src="/step1.svg"
          index={0}
          title="클라이언트 상담"
          description="expected.”Everything was on point and better than our team expected.”"
        />
        <ProgressStep
          src="/step2.svg"
          index={1}
          title="비즈니스 수요 조사 및 검증"
          description="expected.”Everything was on point and better than our team expected.”"
        />
        <ProgressStep
          src="/step3.svg"
          index={2}
          title="노코드 홈페이지 개발"
          description="expected.”Everything was on point and better than our team expected.”"
        />
        <ProgressStep
          src="/step4.svg"
          index={3}
          title="디자인 작업"
          description="expected.”Everything was on point and better than our team expected.”"
        />
        <ProgressStep
          src="/step5.svg"
          index={4}
          title="마케팅 준비 & 셋업"
          description="expected.”Everything was on point and better than our team expected.”"
        />
        <ProgressStep
          src="/step6.svg"
          index={5}
          title="인사이트 도출"
          description="expected.”Everything was on point and better than our team expected.”"
        />
      </div>
    </section>
  );
};

export default ProjectProgress;
