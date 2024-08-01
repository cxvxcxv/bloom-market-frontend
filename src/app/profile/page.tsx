import { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import { Profile } from './Profile';

export const metadata: Metadata = {
  title: 'profile',
  ...NO_INDEX_PAGE,
};

export default function ProfilePage() {
  return <Profile />;
}
