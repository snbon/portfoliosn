import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import usePageTitle from '../hooks/usePageTitle';
import Marquee from '../components/ui/marquee';
import MagneticButton from '../components/ui/magnetic-button';
import Reveal from '../components/ui/reveal';
import ProjectCard from '../components/work/ProjectCard';
import { projects } from '../data/projects';

const techStack = [
  'React', 'Laravel', 'Vue', 'TypeScript', 'Node.js', 'Tailwind', 'GSAP', 'PostgreSQL',
];
// featured projects
const featuredProjects = projects.filter((p) => p.featured).concat(
  projects.filter((p) => !p.featured).slice(0, 2)
).slice(0, 3);

const Home = () => {
  usePageTitle();
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // only animating y here, not opacity, so the headline
      // is never fully invisible if the animation gets delayed
      gsap.from('.hero-line', {
        y: 60,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
      });
      gsap.from('.hero-fade', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16">
        <p className="hero-fade text-accent uppercase tracking-widest text-sm mb-4">
          Full-Stack Developer
        </p>

        <h1 className="font-display font-bold leading-[0.95] text-[13vw] md:text-[7vw]">
          {/* the name line is an image, not text. googlebot renders js and would
            otherwise be able to read the name straight out of the page, even
            though the title/meta tags never mention it. */}
          <span className="hero-line block">
            <img
              src="/assets/brand/hero-name.webp"
              alt="Introduction headline"
              className="h-[0.95em] w-auto"
            />
          </span>
          <span className="hero-line block text-muted">I build digital</span>
          <span className="hero-line block">
             <span className="text-accent">products.</span>
          </span>
        </h1>

        <p className="hero-fade mt-8 max-w-xl text-muted text-lg">
          I design and build responsive, user-friendly web applications, blending creativity
          with technical expertise to deliver seamless digital experiences.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap gap-4">
          <MagneticButton as={Link} to="/work" className="bg-accent text-ink font-medium px-7 py-4 rounded-full uppercase tracking-widest text-sm">
            View my work
          </MagneticButton>
          <MagneticButton as={Link} to="/contact" className="border border-white/20 px-7 py-4 rounded-full uppercase tracking-widest text-sm hover:border-accent transition-colors duration-300">
            Get in touch
          </MagneticButton>
        </div>
      </section>

      {/* tech marquee */}
      <section className="border-y border-white/10 py-6">
        <Marquee items={techStack} speed={30} />
      </section>

      {/* featured work */}
      <section className="px-6 md:px-12 py-24">
        <Reveal className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">Selected work</h2>
          <Link to="/work" className="uppercase tracking-widest text-sm hover:text-accent transition-colors duration-300">
            View all projects &rarr;
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* cta banner */}
      <section className="px-6 md:px-12 py-24 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Got an idea? <span className="text-accent">Let's build it.</span>
          </h2>
          <MagneticButton as={Link} to="/contact" className="inline-block bg-accent text-ink font-medium px-8 py-4 rounded-full uppercase tracking-widest text-sm">
            Start a project
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
