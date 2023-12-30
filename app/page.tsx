// Desc: Main page for the app
import Header from '@/components/header'
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="container mx-auto m-3 min-h-screen">
      <div className="h-full w-full bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 shadow-xl">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

