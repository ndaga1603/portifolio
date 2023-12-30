import Image from 'next/image'
import profile from '../public/profile.jpg'
import Header from '../components/header'
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto m-3">
      <div className="h-full w-full bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
        <Header />
          
      </div>
    </div>
  );
}

