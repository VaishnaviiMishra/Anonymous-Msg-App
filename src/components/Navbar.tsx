'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { User } from 'next-auth';

function Navbar() {
  const { data: session } = useSession();
  const user : User = session?.user;

  return (
    <nav className="p-4 md:p-6 shadow-md bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-xl font-bold mb-4 md:mb-0">
          True Feedback
        </a>
        {session ? (
          <>
            <span className="mr-4">
              Welcome, {user.username || user.email}
            </span>
            <div className='flex items-center'>
              <Link href={`/u/${user.username}`} className="mr-4">
                <Button className="w-full md:w-auto bg-slate-100 text-black" variant="outline">
                  Profile
                </Button>
              </Link>
              <Button onClick={() => signOut()} className="w-full md:w-auto bg-slate-100 text-black" variant="outline">
                Logout
              </Button>
            </div>
            {/* <div className='flex items-end'>
             <Link href={`/u/${user.username}`} className="mr-4">
                <Button className="w-full md:w-auto bg-slate-100 text-black" variant="outline">
                  Profile
                </Button>
             </Link>
            </div>
            <Button onClick={() => signOut()} className="w-full md:w-auto bg-slate-100 text-black" variant='outline'>
              Logout
            </Button> */}
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="w-full md:w-auto bg-slate-100 text-black" variant={'outline'}>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;