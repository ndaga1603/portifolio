// Desc: Main page for the app
import Header from '@/components/header'
import Footer from '@/components/footer';
import Project from '@/components/project';
import project1 from '@/public/project1.jpg';

export default function Home() {
  return (
    <div className="container mx-auto m-3 p-4 min-h-screen">
      <div className="h-full w-full bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 shadow-xl">
        <Header />
        <Project
          title="VR/AR Project"
          description="This is a project description for a VR/AR project"
          image={project1}
          link="#"
        ></Project>
        <Footer />
      </div>
    </div>
  );
}

