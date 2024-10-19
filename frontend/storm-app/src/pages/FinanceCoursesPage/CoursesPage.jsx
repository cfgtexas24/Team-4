import ModuleComponent from "../../components/ModuleComponent/ModuleComponent";
import Path from "../../assets/path.png";

import "./CoursesPage.css";

// Same data used for finance application
const FINANCE_APP = {
  courseName: "Finances",
  modules: [
    {
      name: "The Importance of Finances",
      description:
        "An introduction to all things finance and how you can make your money work for you.",
      status: "done",
    },
    {
      name: "Fundamentals of Budgeting",
      description:
        "Learn how budgeting each month can put you ahead of the game and set you up to better achieve your financial goals.",
      status: "todo",
    },
    {
      name: "Saving for Big Goals",
      description:
        "Get to know how you can start saving up for big goals and your future.",
      status: "todo",
    },
    {
      name: "Generational Wealth",
      description:
        "Building wealth for generations to come--how you can do it and why it matters.",
      status: "todo",
    },
  ],
};

function CoursesPage() {
  /***
   * Renders an individual module of a course
   */
  function renderModule(moduleInfo) {
    return <ModuleComponent moduleInfo={moduleInfo} />;
  }

  const courseName = FINANCE_APP.courseName;
  const modules = FINANCE_APP.modules;

  return (
    <>
      <img className="path" src={Path} />
      <h1 className="path-header">{courseName}</h1>
      <div className="module-container">{modules.map(renderModule)}</div>
    </>
  );
}

export default CoursesPage;
