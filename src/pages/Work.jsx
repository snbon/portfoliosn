import { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import Reveal from '../components/ui/reveal';
import ProjectCard from '../components/work/ProjectCard';
import { projects } from '../data/projects';

const filters = [
  { value: 'all', label: 'All' },
  { value: 'dev', label: 'Development' },
  { value: 'design', label: 'Design' },
];

const Work = () => {
  usePageTitle('Work');
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="px-6 md:px-12 pt-32 pb-24">
      <Reveal>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Work</h1>
        <p className="text-muted text-lg max-w-xl mb-10">
          A mix of products I've built as a developer and case studies from my studio, Baghlabs.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="flex gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-5 py-2 rounded-full text-sm uppercase tracking-widest border transition-colors duration-300 ${
              activeFilter === filter.value
                ? 'bg-accent text-ink border-accent'
                : 'border-white/20 text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 6) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Work;
