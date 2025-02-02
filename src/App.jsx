import { useState } from "react";
import "./App.css";
import AddProject from "./components/addproject/AddProject";
import NoProjectSelected from "./components/noprojectselected/NoProjectSelected";
import Sidebar from "./components/sidebar/sidebar";
import ShowProject from "./components/showproject/ShowProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSaveProject(projData) {
    const newProj = {
      ...projData,
      id: Math.random(),
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProj],
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleProjDelete() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== projectState.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  }

  function handleSaveTask(taskDetails) {
    setProjectState((prevState) => {
      const newTask = {
        id: Math.random(),
        projectId: prevState.selectedProjectId,
        task: taskDetails.task,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        selectedProjectId: undefined,
      };
    });
  }

  function handleClearTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const showTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <ShowProject
      project={selectedProject}
      onDelete={handleProjDelete}
      tasks={showTasks}
      addTask={handleSaveTask}
      onClear={handleClearTask}
    />
  );
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProj={handleAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <AddProject
        onCancleProj={handleCancleAddProject}
        onAddProj={handleSaveProject}
      />
    );
  }

  return (
    <>
      <main>
        <Sidebar
          onAddProj={handleAddProject}
          projects={projectState.projects}
          onSelectProj={handleSelectedProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
