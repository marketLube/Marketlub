import CountUp from "react-countup";

const stats = [
  { value: "59", label: "Projects Done" },
  { value: "23", label: "Happy Clients" },
  { value: "12CR+", label: "Business" },
  { value: "96%", label: "Success Rate" },
];

export const NumberSection = () => {
  return (
    <div className="stats-section">
      <div className="stats-section__item">
        <h2 className="stats-section__value">
          <CountUp start={0} end={59} duration={2.75}></CountUp>%
        </h2>
        <p className="stats-section__label">Projects Done</p>

        <h2 className="stats-section__value">
          <CountUp start={0} end={59} duration={2.75}></CountUp>%
        </h2>
        <p className="stats-section__label">Projects Done</p>

        <h2 className="stats-section__value">
          <CountUp start={0} end={59} duration={2.75}></CountUp>%
        </h2>
        <p className="stats-section__label">Projects Done</p>

        <h2 className="stats-section__value">
          <CountUp start={0} end={59} duration={2.75}></CountUp>%
        </h2>
        <p className="stats-section__label">Projects Done</p>
      </div>
    </div>
  );
};
