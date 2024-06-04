import { AuthLayout } from '@autospace/ui/components/molecules/AuthLayout';
import { LoginForm } from '@autospace/ui/components/templates';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
};

export default page;
