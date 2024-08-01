'use client';

import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { AuthService } from '@/services/auth/auth.service';

export function LogoutButton() {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => AuthService.logout(),
    onSuccess: () => router.replace('/auth'),
  });

  return (
    <div>
      <button onClick={() => mutate()}>
        <LogOut size={20} />
      </button>
    </div>
  );
}
