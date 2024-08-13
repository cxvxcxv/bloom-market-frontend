'use client';

import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useProfile } from '@/hooks/useProfile';

import { AuthService } from '@/services/auth/auth.service';

export function LogoutButton({ extra }: { extra?: string }) {
  const router = useRouter();

  const { data } = useProfile();

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => AuthService.logout(),
    onSuccess: () => router.replace('/auth'),
  });

  return data ? (
    <div>
      <button className={extra} onClick={() => mutate()} title="Logout">
        <LogOut size={24} className="transition-colors hover:text-primary" />
      </button>
    </div>
  ) : (
    <></>
  );
}
