'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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

export function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      name: '',
      bio: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <div>
        <h2 className="font-semibold text-xl">Account Settings</h2>
        <p className="text-muted-foreground text-xs">
          Update your Account Details
        </p>
      </div>
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
        <Button className="w-fit">Save</Button>
      </form>
    </>
  );
}
