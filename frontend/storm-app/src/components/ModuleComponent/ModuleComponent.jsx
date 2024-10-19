import "./ModuleComponent.css";

const DONE = "done";
const TODO = "todo";

function ModuleComponent(moduleInfo) {
  const moduleName = moduleInfo.moduleInfo.name;
  const moduleDescription = moduleInfo.moduleInfo.description;
  const moduleStatus = moduleInfo.moduleInfo.status;

  return (
    <>
      <div class="module-border">
        <div class="module">
          <h2>{moduleName}</h2>
          <p>{moduleDescription}</p>
          <button
            class={"module-button " + (moduleStatus == DONE ? "done" : "todo")}
          >
            {moduleStatus == DONE ? "Done" : "Begin"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ModuleComponent;
