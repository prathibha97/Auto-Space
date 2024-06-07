'use client';
import { FormProviderSearchGarage } from '@autospace/forms/src/searchGarages';
import { SearchPage } from '@autospace/ui/components/templates';
import { FC } from 'react';

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <FormProviderSearchGarage>
      <SearchPage />
    </FormProviderSearchGarage>
  );
};

export default Page;
