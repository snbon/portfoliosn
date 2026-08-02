import { useParams, Link, Navigate } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import Reveal from '../components/ui/reveal';
import MagneticButton from '../components/ui/magnetic-button';
import { projects, getProjectBySlug } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  usePageTitle(project?.name);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const tags = project.technologies || project.services || [];
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div key={project.slug} className="pt-32 pb-24">
      <div className="px-6 md:px-12">
        <Reveal>
          <Link to="/work" className="text-sm uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300">
            &larr; Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <h1 className="text-4xl md:text-6xl font-bold">{project.name}</h1>
          <p className="text-muted text-lg mt-3 max-w-2xl">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-wrap gap-2 mt-6">
          {project.year && (
            <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-muted">
              {project.year}
            </span>
          )}
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/15 text-muted">
              {tag}
            </span>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-12 px-6 md:px-12">
        <img
          src={project.hero}
          alt={`${project.name} hero`}
          className="w-full rounded-2xl border border-white/10 object-cover"
        />
      </Reveal>

      <div className="px-6 md:px-12 mt-16 grid md:grid-cols-3 gap-12">
        <Reveal className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About the project</h2>
          <p className="text-muted leading-relaxed">{project.description}</p>

          {project.features && (
            <>
              <h3 className="text-lg font-bold mt-8 mb-3">Key features</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="text-muted flex items-start gap-2">
                    <span className="text-accent">&#8226;</span> {feature}
                  </li>
                ))}
              </ul>
            </>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          {project.results && (
            <div className="border border-white/10 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Results</h3>
              <ul className="space-y-2">
                {project.results.map((result) => (
                  <li key={result} className="text-muted text-sm flex items-start gap-2">
                    <span className="text-accent">&#8594;</span> {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-3">
            {project.websiteUrl && (
              <MagneticButton
                as="a"
                href={project.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="text-center bg-accent text-ink font-medium px-6 py-3 rounded-full uppercase tracking-widest text-sm"
              >
                Visit live site
              </MagneticButton>
            )}
            {project.sourceUrl && (
              <MagneticButton
                as="a"
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-center border border-white/20 px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:border-accent transition-colors duration-300"
              >
                Source code
              </MagneticButton>
            )}
          </div>
        </Reveal>
      </div>

      {project.gallery && project.gallery.length > 1 && (
        <div className="px-6 md:px-12 mt-16">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {project.gallery.map((img, index) => (
              <Reveal key={img} delay={index * 0.08}>
                <img
                  src={img}
                  alt={`${project.name} screenshot ${index + 1}`}
                  loading="lazy"
                  className="w-full rounded-xl border border-white/10 object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <div className="px-6 md:px-12 mt-24 border-t border-white/10 pt-10">
        <Reveal>
          <p className="text-muted text-sm uppercase tracking-widest mb-2">Next project</p>
          <Link to={`/work/${nextProject.slug}`} className="text-3xl md:text-5xl font-bold hover:text-accent transition-colors duration-300">
            {nextProject.name} &rarr;
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default ProjectDetail;
