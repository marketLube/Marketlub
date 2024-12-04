const stats = [
  { value: "59", label: "Projects Done" },
  { value: "23", label: "Happy Clients" },
  { value: "12CR+", label: "Business" },
  { value: "96%", label: "Success Rate" },
];

export const NumberSection = () => {
  return (
    <div className="stats-section">
      {stats.map((stat, index) => (
        <div key={index} className="stats-section__item">
          <h2 className="stats-section__value">{stat.value}</h2>
          <p className="stats-section__label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
