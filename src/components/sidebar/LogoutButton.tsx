'use client';

import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useProfile } from '@/hooks/useProfile';

import { AuthService } from '@/services/auth/auth.service';

export function LogoutButton() {
  const router = useRouter();

  const { data } = useProfile();

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => AuthService.logout(),
    onSuccess: () => router.replace('/auth'),
  });

  return data ? (
    <div>
      <button onClick={() => mutate()}>
        <LogOut size={20} className="hover:text-primary transition-colors" />
      </button>
    </div>
  ) : (
    <></>
  );
}
