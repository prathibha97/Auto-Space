'use client';
import { useQuery } from '@apollo/client';
import { SearchGaragesDocument } from '@autospace/network/src/gql/generated';
import { Button } from '@autospace/ui/components/atoms';
import { signOut, useSession } from 'next-auth/react';
export default function Home() {
  const { data: sessionData, status } = useSession();

  const {data:garages} = useQuery(SearchGaragesDocument, {
    variables: {
      dateFilter: { end: '12-06-2024', start: '12-06-2024' },
      locationFilter: {
        ne_lat: 1,
        ne_lng: 1,
        sw_lat: -1,
        sw_lng: -1,
      },
    },
  });
  return (
    <main className="p-8">
      {sessionData?.user?.uid ? (
        <>
          <Button onClick={() => signOut()}>SignOut</Button>
          {sessionData?.user?.uid}
          <div>{garages?.searchGarages?.map((garage)=>(
            <pre key={garage.id}>
              {JSON.stringify(garage, null, 2)}
            </pre>
          ))}</div>
        </>
      ) : (
        <>guest</>
      )}
    </main>
  );
}
