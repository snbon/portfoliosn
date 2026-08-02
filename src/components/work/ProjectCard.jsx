import { Link } from 'react-router-dom';
import SpotlightCard from '../ui/spotlight-card';

// one project tile, used on the home page and the work overview
const ProjectCard = ({ project }) => {
  const tags = project.technologies || project.services || [];

  return (
    <Link to={`/work/${project.slug}`}>
      <SpotlightCard className="group h-full hover:border-accent/50 transition-colors duration-300">
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src={project.hero}
            alt={`${project.name} preview`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {project.comingSoon && (
            <span className="absolute top-3 right-3 bg-accent text-ink text-xs font-bold px-2 py-1 rounded-full">
              Coming soon
            </span>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-xl font-display font-bold">{project.name}</h3>
          <p className="text-sm text-muted mt-1">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full border border-white/15 text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
};

export default ProjectCard;
