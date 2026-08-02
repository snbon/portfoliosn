import { FaLinkedin, FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socials = [
  { icon: <FaLinkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/baghsnnn/' },
  { icon: <FaGithub size={20} />, label: 'Github', href: 'https://github.com/snbon' },
  { icon: <FaLink size={20} />, label: 'More links', href: 'https://linktr.ee/baghsnn' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted">
          &copy; {year}, built with React &amp; GSAP
        </p>

        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-paper hover:text-accent transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <Link to="/contact" className="text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300">
          Start a project &rarr;
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
