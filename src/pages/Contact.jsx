import usePageTitle from '../hooks/usePageTitle';
import Reveal from '../components/ui/reveal';
import MagneticButton from '../components/ui/magnetic-button';

const inputClasses =
  'w-full bg-transparent border-b border-white/20 py-3 placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-300';

const Contact = () => {
  usePageTitle('Contact');

  return (
    <div className="px-6 md:px-12 pt-32 pb-24">
      <Reveal>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Let's talk</h1>
        <p className="text-muted text-lg max-w-xl mb-16">
          Interested in working together? Fill in the form below and I'll get back to you.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <form
          method="POST"
          action="https://getform.io/f/378b4506-308a-45c6-b0db-595f8095f66c"
          className="flex flex-col gap-8 max-w-xl"
        >
          <input className={inputClasses} type="text" name="name" placeholder="Your name" required />
          <input className={inputClasses} type="email" name="email" placeholder="you@email.com" required />
          <textarea className={inputClasses} name="message" rows="5" placeholder="What's your project about?" required />

          <MagneticButton
            as="button"
            type="submit"
            className="self-start bg-accent text-ink font-medium px-8 py-4 rounded-full uppercase tracking-widest text-sm"
          >
            Send message
          </MagneticButton>
        </form>
      </Reveal>
    </div>
  );
};

export default Contact;
