import usePageTitle from '../hooks/usePageTitle';
import Reveal from '../components/ui/reveal';
import TiltedCard from '../components/ui/tilted-card';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { skills } from '../data/skills';

const bio =
  "With a strong foundation in software development, complemented by experience in marketing, branding and management, I'm passionate about creating solutions that not only solve problems but also push the boundaries of innovation.";

const About = () => {
  usePageTitle('About');

  return (
    <div className="px-6 md:px-12 pt-32 pb-24">
      <Reveal>
        <h1 className="text-5xl md:text-7xl font-bold mb-10">About</h1>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <Reveal>
          <p className="text-2xl md:text-3xl font-display font-medium">
            I'm a full-stack developer running <span className="text-accent">Baghlabs</span>,
            taking products from idea to production.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <TextGenerateEffect words={bio} className="text-muted text-lg" />
        </Reveal>
      </div>

      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
        <p className="text-muted mb-10">Technologies I work with day to day</p>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={(index % 5) * 0.05}>
            <TiltedCard
              imageSrc={skill.image}
              altText={`${skill.name} icon`}
              captionText={skill.name}
              containerHeight="160px"
              containerWidth="130px"
              imageHeight="56px"
              imageWidth="56px"
              scaleOnHover={1.1}
              rotateAmplitude={15}
              showTooltip={true}
              showMobileWarning={false}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default About;
