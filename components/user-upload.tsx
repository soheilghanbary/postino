'use client';
import { updateUser } from '@/actions/user';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { S3 } from 'aws-sdk';
import { UploadCloudIcon } from 'lucide-react';
import { useCallback, useState, useTransition } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { Avatar } from './avatar';

type Props = { initialPath: string };

export const UserUpload = ({ initialPath }: Props) => {
  const [pending, mutate] = useTransition();
  const [path, setPath] = useState(initialPath);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles) return;
    setPath(URL.createObjectURL(acceptedFiles[0]));
    mutate(async () => {
      const res = await onUpload(acceptedFiles[0]);
      toast.success(res.msg);
    });
  }, []);
  // upload & save user image
  const onUpload = async (file: File) => {
    const s3 = new S3({
      accessKeyId: process.env.LIARA_ACCESS_KEY,
      secretAccessKey: process.env.LIARA_SECRET_KEY,
      endpoint: process.env.LIARA_ENDPOINT,
    });
    const params = {
      Bucket: process.env.LIARA_BUCKET_NAME!,
      Key: file.name,
      Body: file,
    };
    const response = await s3.upload(params).promise();
    return await updateUser({ image: response.Location });
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full">
        <Avatar
          src={path}
          alt={'Profile'}
          className={cn(
            'size-24 rounded-full',
            pending ? 'blur-sm' : 'blur-none',
          )}
        />
      </div>
      <Button
        {...getRootProps()}
        size={'sm'}
        variant={'outline'}
        disabled={pending}
        className="rounded-full"
      >
        <input {...getInputProps()} />
        <UploadCloudIcon className="mr-2 size-4" />
        Upload Image
      </Button>
    </div>
  );
};
