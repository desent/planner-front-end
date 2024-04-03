import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Auth } from './auth';

export const metadata: Metadata = {
  title: 'Auth',
  ...NO_INDEX_PAGE,
};

export default function AuthPage(): ReactNode {
  return <Auth />;
}
