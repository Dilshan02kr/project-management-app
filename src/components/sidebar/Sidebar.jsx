import "./sidebar.css";

export default function Sidebar({
  onAddProj,
  projects,
  onSelectProj,
  selectedProjectId,
}) {
  return (
    <div className="sidebar-container">
      <h3>YOUR PROJECTS</h3>
      <button className="add-btn" onClick={onAddProj}>
        + Add project
      </button>
      <ul className="sidebar-ul">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onSelectProj(project.id)}
              className={
                project.id === selectedProjectId
                  ? "sidebar-list-btn active"
                  : "sidebar-list-btn"
              }
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
