import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '刘力源 Cila — 数字化营销经理',
  description: '刘力源 Cila 的个人主页。专注科技与 AI 领域的新媒体运营，用真诚做内容，用数据看效果。',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: '刘力源 Cila — 数字化营销经理',
    description: '用真诚做内容，用数据看效果。',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '刘力源 Cila — 数字化营销经理',
    description: '用真诚做内容，用数据看效果。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
