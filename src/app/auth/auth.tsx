'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthFormType } from '@/types/auth.types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { toast } from 'sonner';
import { DASHBOARD_PAGES } from '@/config/pages-url.config';
import { Heading } from '@/components/ui/Heading';
import { Field } from '@/components/ui/fields/Fields';
import { Button } from '@/components/ui/buttons/Button';

export function Auth() {
  const { register, handleSubmit, reset } = useForm<AuthFormType>({
    mode: 'onChange',
  });

  const [isLoginForm, setIsLoginFrom] = useState(false);

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: AuthFormType) =>
      authService.main(isLoginForm ? 'login' : 'register', data),
    onSuccess() {
      toast.success('Successfully login');
      reset();
      push(DASHBOARD_PAGES.HOME);
    },
  });

  const onSubmit: SubmitHandler<AuthFormType> = (data) => {
    console.log('data', data);
    mutate(data);
  };

  return (
    <div className="flex min-h-screen">
      <form className=" w=1/4 m-auto" onSubmit={handleSubmit(onSubmit)}>
        <Heading title="Auth" />
        <Field
          id="email"
          label="Email:"
          type="email"
          placeholder="Enter email"
          {...register('email', {
            required: 'Email is required',
          })}
        />
        <Field
          id="password"
          label="Password:"
          type="password"
          placeholder="Enter password"
          {...register('password', {
            required: 'Password is required',
          })}
        />
        <div className="flex items-center justify-center gap-5">
          <Button onClick={() => setIsLoginFrom(true)}>Login</Button>
          <Button onClick={() => setIsLoginFrom(false)}>Register</Button>
        </div>
      </form>
    </div>
  );
}
