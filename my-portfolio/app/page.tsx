import Hero3D from '@/components/3d/Hero3D';
import Skills3D from '@/components/Skills3D';
import Projects3D from '@/components/Projects3D';
import Contact3D from '@/components/Contact3D';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section id="home">
        <Hero3D />
      </section>
      <section id="skills">
        <Skills3D />
      </section>
      <section id="projects">
        <Projects3D />
      </section>
      <section id="contact">
        <Contact3D />
      </section>
    </main>
  );
}
