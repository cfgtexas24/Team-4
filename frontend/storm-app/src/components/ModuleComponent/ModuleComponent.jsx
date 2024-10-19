import "./ModuleComponent.css";

const DONE = "done";
const TODO = "todo";

function ModuleComponent(moduleInfo) {
  const moduleName = moduleInfo.moduleInfo.name;
  const moduleDescription = moduleInfo.moduleInfo.description;
  const moduleStatus = moduleInfo.moduleInfo.status;

  // Function to handle button click
  const handleClick = () => {
    if (moduleStatus === TODO) {
      // Redirect to the YouTube video
      window.location.href = "https://youtu.be/qQLLDPAEzT0?si=15FwWU-iJ9MODwT5"; // Replace with your YouTube video URL
    }
    // Optionally handle the "Done" status here if needed
  };

  return (
    <>
      <div className="module-border">
        <div className="module">
          <h2>{moduleName}</h2>
          <p>{moduleDescription}</p>
          <button className="module-button" onClick={handleClick}>
            {moduleStatus === DONE ? "Done" : "Begin"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ModuleComponent;
