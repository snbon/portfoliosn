import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import MagneticButton from '../ui/magnetic-button';

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // slide the bar in on first load
  // gsap.context + revert avoids two tweens fighting each other
  // when react strict mode runs this effect twice in dev
  // only animating y (not opacity) so the nav is never fully invisible
  // if the animation gets delayed, e.g. a backgrounded tab
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -40, duration: 0.7, ease: 'power3.out' });
    });

    return () => ctx.revert();
  }, []);

  // close the mobile menu whenever a link is clicked
  const closeMenu = () => setOpen(false);

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-ink/70 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <NavLink to="/" className="font-display text-2xl font-bold tracking-tight">
          SN<span className="text-accent">.</span>
        </NavLink>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'text-paper hover:text-accent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <MagneticButton as={NavLink} to="/contact" className="border border-paper rounded-full px-5 py-2 text-sm uppercase tracking-widest hover:bg-accent hover:text-ink hover:border-accent transition-colors duration-300">
            Let's talk
          </MagneticButton>
        </nav>

        {/* mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-7 bg-paper transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-7 bg-paper transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-paper transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* mobile fullscreen menu */}
      <div
        className={`md:hidden fixed inset-0 bg-ink flex flex-col justify-center items-center gap-8 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className="text-4xl font-display font-bold uppercase"
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
