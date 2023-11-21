import Link from 'next/link';
import NextLogo from './NextLogo'
import SupabaseLogo from './SupabaseLogo'
import Image from 'next/image'
import useSWR from 'swr'
import logo from './logo-no-background.png'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import AuthButton from '../components/AuthButton'


const iconSize=155;
const isSupabaseConnected = true;

//  const logo = require('/logo-no-background.png');
// const imageLoader = ({ src, width, quality }) => {
//   return `https://418-y.vercel.app/${src}?w=${width}&q=${quality || 75}`
// }

export default function Header() {

  // console.log("console.log", /components/logo-no-background.png)n


  return (
    <div className="flex flex-col gap-16  justify-items-start ">
      <div className="flex gap-8  justify-items-start ">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">

      <Link href="https://418-y.vercel.app/">
            <div className="hover:cursor-pointer flex  justify-items-start ">
                  <Image
                    src={logo}
                    alt="logo"
                    width={iconSize}
                    height={iconSize}
                  />
            </div>
      </Link>

        <div className="w-full max-w-4xl flex justify-end items-right p-3 text-sm">
          {/* <DeployButton /> */}
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      {/* <AuthButton /> */}


        {/* <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a> */}
        {/* <span className="border-l rotate-45 h-6" /> */}

        {/* <a href="https://418-y.vercel.app/" target="_blank" rel="noreferrer">
          <img src="/logo-no-background.png" alt="Logo" />
        
        </a> */}

{/* <Image
      loader={logo}
      src="logo-no-background.png"
      alt="logo"
      width={500}
      height={500}
    /> */}
{/* 
        <Link href="https://418-y.vercel.app/">
          <a>
          <Image src="/app/logo-no-background.png" width={200} height={125} />
          </a>
        </Link>
       */}

      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      {/* <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The fastest way to build apps with{' '}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase
        </a>{' '}
        and{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Next.js
        </a>
      </p> */}
      {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
    </div>
  )
}
