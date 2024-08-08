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
        className="bg-white dark:bg-gray-300 w-full m-auto shadow-2xl rounded-xl p-12 md:w-3/4 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex mb-6 items-center justify-center flex-col">
          <div className="bg-primary p-6 rounded-full mb-6">
            <LogIn width={36} height={36} color="white" />
          </div>
          <Heading>{isLoginForm ? 'Sign In' : 'Sign Up'}</Heading>
          <p className="opacity-50 text-center">
            {isLoginForm ? 'enter your credentials below' : 'create an account'}
          </p>
        </div>
        <hr className="mb-16 text-bg-light dark:text-bg-dark -mx-12" />

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

        <div className="flex justify-center my-8">
          <Button className="w-1/2" disabled={isPending}>
            Submit
          </Button>
        </div>

        <div className="bg-bg-light dark:bg-gray-500 py-10 rounded-b-xl flex justify-center items-center -mx-12 -mb-12">
          <p className="inline mr-1 text-sm">
            {isLoginForm ? 'First time here?' : 'Already registered?'}
          </p>
          <button
            className="font-bold text-sm"
            onClick={() => setIsLoginForm(!isLoginForm)}
            type="button"
          >
            {isLoginForm ? 'Create an account' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
}
