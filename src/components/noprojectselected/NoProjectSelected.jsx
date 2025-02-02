import "./NoProjectSelected.css";
import image from "/src/assets/no-projects.png";
export default function NoProjectSelected({onAddProj}) {
  return (
    <>
      <div className="no-proj-container">
        <img src={image} alt="" />
        <p className="para-bold">No Project Selected</p>
        <p className="para-normal">Select a project or get started with a new one</p>
        <button onClick={onAddProj}>Create New project</button>
      </div>
    </>
  );
}
