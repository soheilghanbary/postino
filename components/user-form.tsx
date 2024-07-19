'use client';
import { updateUser } from '@/actions/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { TextField } from './text-field';
import { TextFieldArea } from './text-field-area';
import { Button } from './ui/button';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required!' }),
  bio: z.string().min(1, { message: 'Biography is required!' }),
  website: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export function UserForm(props: FormSchema) {
  const [pending, mutate] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: props,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit((data) => {
    mutate(async () => {
      const res = await updateUser(data);
      toast.success(res.msg);
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <TextField label="Full Name" {...register('name')} />
        {errors.name && (
          <span className="font-medium text-rose-500 text-sm">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <TextField
          label="Website"
          placeholder="example.com"
          {...register('website')}
        />
        {errors.website && (
          <span className="font-medium text-rose-500 text-sm">
            {errors.website.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <TextFieldArea label="Bio" {...register('bio')} />
        {errors.bio && (
          <span className="font-medium text-rose-500 text-sm">
            {errors.bio.message}
          </span>
        )}
      </div>
      <Button disabled={pending} className="w-fit">
        Save
      </Button>
    </form>
  );
}
