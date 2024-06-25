'use client';
import {
  IsLoggedIn,
  IsManager,
  ListGarages,
} from '@autospace/ui/components/organisms';

export default function Home() {
  return (
    <IsLoggedIn>
      <IsManager>
        {(companyId) => <ListGarages companyId={companyId} />}
      </IsManager>
    </IsLoggedIn>
  );
}
