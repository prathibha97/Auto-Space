'use client';
import { Button } from '@autospace/ui/components/atoms';
import { signOut, useSession } from 'next-auth/react';
export default function Home() {
  const { data: sessionData, status } = useSession();
  return (
    <main className="p-8">
      {sessionData?.user?.uid ? (
        <>
          <Button onClick={() => signOut()}>SignOut</Button>
          {sessionData?.user?.uid}
        </>
      ) : (
        <>guest</>
      )}
    </main>
  );
}
