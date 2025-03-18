import localFont from 'next/font/local';

export const suit = localFont({
  src: [
    {
      path: './SUIT-Thin.woff2',
      weight: '100',
    },
    {
      path: './SUIT-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: './SUIT-Light.woff2',
      weight: '300',
    },
    {
      path: './SUIT-Regular.woff2',
      weight: '400',
    },
    {
      path: './SUIT-Medium.woff2',
      weight: '500',
    },
    {
      path: './SUIT-SemiBold.woff2',
      weight: '600',
    },
    {
      path: './SUIT-Bold.woff2',
      weight: '700',
    },
    {
      path: './SUIT-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: './SUIT-Heavy.woff2',
      weight: '900',
    },
  ],
  variable: '--font-suit',
});

export const pretendard = localFont({
  src: [
    {
      path: './Pretendard-Thin.woff2',
      weight: '100',
    },
    {
      path: './Pretendard-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: './Pretendard-Light.woff2',
      weight: '300',
    },
    {
      path: './Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: './Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: './Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: './Pretendard-Bold.woff2',
      weight: '700',
    },
    {
      path: './Pretendard-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: './Pretendard-Black.woff2',
      weight: '900',
    },
  ],
  variable: '--font-pretendard',
});
