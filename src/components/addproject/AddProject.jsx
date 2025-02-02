import { useRef } from "react";
import Input from "../input/Input";
import "./AddProject.css";

export default function AddProject({ onCancleProj, onAddProj }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  function handleSaveInput() {
    const enterdTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;

    if (
      enterdTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      window.alert("Please Enter Valid Inputs!");
      return;
    }

    onAddProj({
      title: enterdTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    });
  }

  return (
    <>
      <div className="add-proj-container">
        <section>
          <div className="btn-sec">
            <button onClick={onCancleProj} className="cancle-btn">
              Cancle
            </button>
            <button onClick={handleSaveInput} className="save-btn">
              Save
            </button>
          </div>
          <div className="input-sec">
            <Input ref={title} label="TITLE" />
            <Input ref={description} label="DESCRIPTION" textarea />
            <Input ref={duedate} label="DUE DATE" type="date" />
          </div>
        </section>
      </div>
    </>
  );
}
