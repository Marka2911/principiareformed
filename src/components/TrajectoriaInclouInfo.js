import "./TrajectoriaInclouInfo.css";
const TrajectoriaInclouInfo = ({ icon, text }) => {
  return (
    <div className="trajectoria-inclou-info">
      <div className="publicacions-description">{icon}</div>
      <div className="publicacions-description">{text}</div>
    </div>
  );
};

export default TrajectoriaInclouInfo;
