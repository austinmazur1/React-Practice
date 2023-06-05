import CardDetails from "./CardDetails";

const LogCard = ({ bjjLogs, handleClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4 rounded-xl m-28 ">
      {bjjLogs.map((log) => (
        <CardDetails key={log.id} log={log} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default LogCard;
