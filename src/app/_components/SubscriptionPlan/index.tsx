import Image from 'next/image';
import React from 'react';

const SubscriptionPlan = () => {
  return (
    <section className="bg-white py-24 sm:py-40">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 sm:px-8">
        <span className="text-center text-4xl font-bold whitespace-pre-line text-black md:text-5xl">
          Subscription Plan
        </span>

        <div className="h-16" />

        <div className="grid w-full grid-cols-12 gap-6">
          <div className="col-span-12 flex flex-col gap-12 rounded-[48px] bg-[#F6F6F6] p-8 sm:p-12 lg:col-span-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                <Image src="/starter.svg" alt="starter" fill />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <span className="text-[1.75rem] font-bold text-[#101010]">
                  Starter
                </span>
                <span className="text-lg text-[#606060]">
                  한 번에 1가지 요청 가능
                </span>
              </div>
            </div>

            <span className="text-lg text-[#606060]">
              빠르게 실행하고, 실수의 여지 없이 신속한 성과가 필요한 초기
              스타트업 및 소규모 팀에 적합합니다. 핵심 작업을 빠르게 해결해
              성장을 시작할 수 있습니다.
            </span>

            <div className="flex items-baseline gap-2 leading-none">
              <span className="bg-gradient-to-r from-[#168FFF] from-17% via-[#64B6FF] via-44% to-[#4DDEFF] to-81% bg-clip-text text-[4rem] font-bold text-transparent sm:text-[5rem]">
                200
              </span>
              <span className="text-[2rem] text-[#101010] sm:text-[2.5rem]">
                만 원 / 월
              </span>
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-[#101010] py-4.5"
            >
              구독하기
            </button>

            <div className="flex flex-col gap-6 text-lg text-[#101010]">
              <span className="font-bold">What&apos;s included</span>
              <span>
                • 한 번에 1가지 요청 가능 (디자인, 마케팅, 노코드 개발 중 선택)
              </span>
              <span>• 무제한 수정 가능</span>
              <span>• 48시간 내 성과물 전달</span>
              <span>
                • 1x PM + 3+ 전문가 팀 (디자인, 마케팅, 노코드 개발 포함)
              </span>
            </div>
          </div>

          <div className="col-span-12 flex flex-col gap-12 rounded-[48px] bg-[#101010] p-8 sm:p-12 lg:col-span-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                <Image src="/growth.svg" alt="growth" fill />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <span className="text-[1.75rem] font-bold text-white">
                  Growth
                </span>
                <span className="text-lg text-white/40">
                  한 번에 2가지 요청 가능
                </span>
              </div>
            </div>

            <span className="text-lg text-white/40">
              디자인 유지보수와 동시다발적인 프로젝트 관리가 필요한 성장 단계
              기업에 적합합니다. 리소스 최적화와 성장 가속화를 지원합니다.
            </span>

            <div className="flex items-baseline gap-2 leading-none">
              <span className="bg-gradient-to-r from-[#168FFF] from-17% via-[#64B6FF] via-44% to-[#4DDEFF] to-81% bg-clip-text text-[4rem] font-bold text-transparent sm:text-[5rem]">
                350
              </span>
              <span className="text-[2rem] text-white sm:text-[2.5rem]">
                만 원 / 월
              </span>
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-white py-4.5 text-[#101010]"
            >
              구독하기
            </button>

            <div className="flex flex-col gap-6 text-lg text-white [&>*:not(:first-child)]:text-white/40">
              <span className="font-bold">What&apos;s included</span>
              <span>
                • 한 번에 2가지 요청 가능 (디자인, 마케팅, 노코드 개발 중 선택)
              </span>
              <span>• 무제한 수정 가능</span>
              <span>• 48시간 내 성과물 전달</span>
              <span>
                • 1x PM + 3+ 전문가 팀 (디자인, 마케팅, 노코드 개발 포함)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
