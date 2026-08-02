import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import MagneticButton from '../components/ui/magnetic-button';

const NotFound = () => {
  usePageTitle('Page not found');

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-[25vw] md:text-[15vw] font-display font-bold leading-none text-accent">
        404
      </h1>
      <p className="text-muted text-lg mb-8">This page doesn't exist.</p>
      <MagneticButton as={Link} to="/" className="bg-accent text-ink font-medium px-7 py-4 rounded-full uppercase tracking-widest text-sm">
        Back to home
      </MagneticButton>
    </div>
  );
};

export default NotFound;
