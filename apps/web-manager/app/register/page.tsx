import { AuthLayout } from '@autospace/ui/components/molecules/AuthLayout';
import { RegisterForm } from '@autospace/ui/components/templates/';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <AuthLayout title="Register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default page;
