export const WorkSection = () => {
  return (
    <div className="work-section">
      <h1 className="work-section__title">Dive into the work.</h1>
      <div className="work-section__content">
        <div className="work-section__image"></div>
        <div className="work-section__details">
          <div className="work-section__tabs">
            <button className="work-section__tabs__firstbutton">Skymark</button>
            <button className="work-section__tabs__firstbutton">
              Willmount
            </button>
          </div>
          <h2 className="work-section__heading">Video Production</h2>
          <p className="work-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          <a href="#" className="work-section__link">
            See full case study <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
