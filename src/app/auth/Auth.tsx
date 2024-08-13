'use client';

import { useMutation } from '@tanstack/react-query';
import { LogIn } from 'lucide-react';
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

  const [isLoginForm, setIsLoginForm] = useState(true);

  const { replace } = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) =>
      AuthService.main(isLoginForm ? 'login' : 'register', data),
    onSuccess() {
      toast.success('Successfully login!');
      reset();
      replace(DASHBOARD_PAGES.HOME);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = data => {
    mutate(data);
  };

  return (
    <div className="flex min-h-screen">
      <form
        className="m-auto w-full rounded-xl bg-white p-12 shadow-2xl md:w-3/4 lg:w-1/2 dark:bg-gray-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6 flex flex-col items-center justify-center">
          <div className="mb-6 rounded-full bg-primary p-6">
            <LogIn width={36} height={36} color="white" />
          </div>
          <Heading>{isLoginForm ? 'Sign In' : 'Sign Up'}</Heading>
          <p className="text-center opacity-50">
            {isLoginForm ? 'enter your credentials below' : 'create an account'}
          </p>
        </div>
        <hr className="-mx-12 mb-16 text-bg-light dark:text-bg-dark" />

        <Field
          id="email"
          placeholder="email"
          type="email"
          inputExtra="rounded-b-none"
          {...register('email', {
            required: 'Email is required!',
          })}
        />
        <hr className="text-white dark:text-gray-300" />
        <Field
          id="password"
          placeholder="password"
          type="password"
          inputExtra="rounded-t-none"
          {...register('password', {
            required: 'Password is required!',
          })}
        />

        <div className="my-8 flex justify-center">
          <Button className="w-1/2" disabled={isPending}>
            Submit
          </Button>
        </div>

        <div className="-mx-12 -mb-12 flex items-center justify-center rounded-b-xl bg-bg-light py-10 dark:bg-gray-500">
          <p className="mr-1 inline text-sm">
            {isLoginForm ? 'First time here?' : 'Already registered?'}
          </p>
          <button
            className="text-sm font-bold"
            onClick={() => setIsLoginForm(prev => !prev)}
            type="button"
          >
            {isLoginForm ? 'Create an account' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
}
