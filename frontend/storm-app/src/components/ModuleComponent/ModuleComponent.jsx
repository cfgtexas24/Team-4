import "./ModuleComponent.css";

const DONE = "done";
const TODO = "todo";

function ModuleComponent({ moduleInfo }) {
  const moduleName = moduleInfo.name;
  const moduleDescription = moduleInfo.description;
  const moduleStatus = moduleInfo.status;

  // Function to handle redirect
  const handleBeginClick = () => {
  if (moduleStatus === TODO) {
    window.open("https://www.youtube.com/watch?v=qQLLDPAEzT0", "_blank");
  }
};


  return (
    <>
      <div className="module-border">
        <div className="module">
          <h2>{moduleName}</h2>
          <p>{moduleDescription}</p>
          <button
            className={"module-button " + (moduleStatus === DONE ? "done" : "todo")}
            onClick={handleBeginClick}
          >
            {moduleStatus === DONE ? "Done" : "Begin"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ModuleComponent;
