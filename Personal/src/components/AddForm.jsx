import { useState } from "react";

const AddForm = ({ addLog, showForm, displayForm }) => {
  const [position, setPosition] = useState("");
  const [offense, setOffense] = useState(false);
  const [defense, setDefense] = useState(false);
  const [technique, setTechnique] = useState("");
  const [date, setDate] = useState("");
  const [school, setSchool] = useState("");
  const [teacher, setTeacher] = useState("");
  const [gi, setGi] = useState(false);
  const [nogi, setNoGi] = useState(false);

  const handlePosition = (e) => setPosition(e.target.value);
  const handleOffense = (e) => setOffense(e.target.value);
  const handleDefense = (e) => setDefense(e.target.value);
  const handleTechnique = (e) => setTechnique(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleSchool = (e) => setSchool(e.target.value);
  const handleTeacher = (e) => setTeacher(e.target.value);
  const handleGi = (e) => setGi(e.target.value);
  const handleNoGi = (e) => setNoGi(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = {
      position,
      offense,
      defense,
      technique,
      date,
      school,
      teacher,
      gi,
      nogi,
    };
    console.log(newLog);
    addLog(newLog);

    setPosition("");
    setTechnique("");
    setDate("");
    setSchool("");
    setTeacher("");
  };
  return (
    <div onClick={displayForm} className="fixed inset-0 flex flex-col items-center justify-center bg-slate-500 opacity-90">
      <div className="bg-white w-64 p-4 rounded shadow">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => handlePosition(e)}
            placeholder="Position Trained.."
            value={position}
          />
          <select>
            <option onChange={(e) => handleDefense(e)} value={offense}>
              Offense
            </option>
            <option value={defense} onChange={(e) => handleDefense(e)}>
              Defense
            </option>
          </select>
          <input
            type="text"
            onChange={(e) => handleTechnique(e)}
            placeholder="Technique details.."
            value={technique}
          />
          <input
            type="text"
            onChange={(e) => handleDate(e)}
            placeholder="Date Trained.."
            value={date}
          />
          <input
            type="text"
            onChange={(e) => handleSchool(e)}
            placeholder="School.."
            value={school}
          />
          <input
            type="text"
            onChange={(e) => handleTeacher(e)}
            placeholder="Teacher.."
            value={teacher}
          />
          <select name="gi">
            <option value={gi} onChange={(e) => handleGi(e)}>
              Gi
            </option>
            <option value={nogi} onChange={(e) => handleNoGi(e)}>
              NoGi
            </option>
          </select>
          {/* <input type="text" onChange={(e) => handleGi(e)} placeholder="Gi.." value={gi} />
        <input type="text" onChange={(e) => handleNoGi(e)} placeholder="NoGi.." value={nogi} /> */}
          <button type="submit">Add</button>
          {showForm && <button onClick={displayForm}>Close</button>}
        </form>
      </div>
    </div>
  );
};

export default AddForm;
