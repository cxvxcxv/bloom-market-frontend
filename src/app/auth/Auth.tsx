'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/buttons/Button';
import { Field } from '@/components/ui/fields/Field';

import { IAuthForm } from '@/types/auth.types';

import { DASHBOARD_PAGES } from '@/config/urls.config';

import { AuthService } from '@/services/auth/auth.service';

export function Auth() {
  const { register, handleSubmit, reset } = useForm<IAuthForm>({
    mode: 'onChange',
  });

  const [isLoginForm, setIsLoginForm] = useState(false);

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) =>
      AuthService.main(isLoginForm ? 'login' : 'register', data),
    onSuccess() {
      toast.success('Successfully login!');
      reset();
      push(DASHBOARD_PAGES.HOME);
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = data => {
    mutate(data);
  };

  return (
    <div className="flex min-h-screen">
      <form
        className="w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading>Auth</Heading>

        <Field
          id="email"
          label="Email:"
          placeholder="Enter email:"
          type="email"
          extra="mb-4"
          {...register('email', {
            required: 'Email is required!',
          })}
        />

        <Field
          id="password"
          label="Password: "
          placeholder="Enter password: "
          type="password"
          {...register('password', {
            required: 'Password is required!',
          })}
          extra="mb-6"
        />

        <div className="flex items-center gap-5 justify-center">
          <Button onClick={() => setIsLoginForm(true)}>Login</Button>
          <Button onClick={() => setIsLoginForm(false)}>Register</Button>
        </div>
      </form>
    </div>
  );
}