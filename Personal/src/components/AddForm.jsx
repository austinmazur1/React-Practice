import { useState } from "react";
import { Select, Textarea, TextInput, Button, Label } from "flowbite-react";
import Datepicker from "tailwind-datepicker-react";

const AddForm = ({ addLog, showForm, displayForm }) => {
  
  const [position, setPosition] = useState("");
  const [offense, setOffense] = useState(false);
  const [defense, setDefense] = useState(false);
  const [technique, setTechnique] = useState("");
  const [date, setDate] = useState(null);
  const [school, setSchool] = useState("");
  const [teacher, setTeacher] = useState("");
  const [gi, setGi] = useState(false);
  const [nogi, setNoGi] = useState(false);
  const [show, setShow] = useState(false);

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
    setDate(new Date());
    setSchool("");
    setTeacher("");
  };

  //Date Picker
  const options = {
    title: "Date Trained",
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-gray-700 dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2023-06-01"),
    language: "en",
  };

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-500 opacity-90">
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="position" value="Position" />
          </div>
          <TextInput id="position" placeholder="Mount.." required type="text" onChange={(e) => handlePosition(e)}/>
        </div>
        <Label htmlFor="offenseOrDefense" value="Offense or Defense?" />
        <Select id="offenseOrDefense" required>
          <option onChange={(e) => handleDefense(e)} value={offense}>Offensive</option>
          <option onChange={(e) => handleDefense(e)}>Defensive</option>
        </Select>

        <div className="max-w-md" id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Technique Drilled" />
          </div>
          <Textarea
           onChange={(e) => handleTechnique(e)}
            id="comment"
            placeholder="Bridge and shrimp..."
            required
            rows={4}
          />
        </div>

        <Label htmlFor="date" value="Date" />
        <div>
          <Datepicker
          onChange={(e) => handleDate(e)}
            options={options}
            show={show}
            setShow={handleClose}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="school" value="School" />
          </div>
          <TextInput onChange={(e) => handleSchool(e)} id="school" required type="text" />
          <div className="mb-2 block">
            <Label htmlFor="teacher" value="Teacher" />
          </div>
          <TextInput onChange={(e) => handleTeacher(e)} id="teacher" required type="text" />
        </div>
        <Label htmlFor="giOrNogi" value="Gi or NoGi?" />
        <Select id="offenseOrDefense" required>
          <option onChange={(e) => handleGi(e)}>Gi</option>
          <option onChange={(e) => handleNoGi(e)} >NoGi</option>
        </Select>
        <Button type="submit">Submit</Button>
        {showForm && (<Button onClick={displayForm}> Close</Button>)}
      </form>
    </div>
  );
};

export default AddForm;

{
  /* <div className="bg-white w-64 p-4 rounded shadow">
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
          <button type="submit">Add</button>
        </form>
      </div> */
}
