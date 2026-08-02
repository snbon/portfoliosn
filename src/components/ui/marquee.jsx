// infinite horizontal ticker, used for the tech stack strip
// we just duplicate the items once and loop the css animation

const Marquee = ({ items, speed = 25, className = '' }) => {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="marquee-track inline-flex" style={{ animationDuration: `${speed}s` }}>
        {doubled.map((item, index) => (
          <span
            key={index}
            className="mx-6 text-2xl md:text-4xl font-display font-medium text-muted shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
