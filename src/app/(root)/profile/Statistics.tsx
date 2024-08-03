'use client';

import Loader from '@/components/ui/Loader';

import { useProfile } from '@/hooks/useProfile';

export function Statistics() {
  const { data, isLoading } = useProfile();

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {data?.statistics.length ? (
        data.statistics.map(stat => (
          <div key={stat.name}>
            <div>{stat.name}</div>
            <div>{stat.value}</div>
          </div>
        ))
      ) : (
        <div>statistics not loaded</div>
      )}
    </div>
  );
}
