import { useNavigate } from "react-router-dom";
import Path from "../../assets/path.png";
import "./CoursesPage.css";


function CoursesPage() {
  const navigate = useNavigate();


  const handleFinanceClick = () => {
    navigate('/courses/finance');
  };

  return (
    <div className="course-list">
      <div className="course-list-title">Select a topic to learn!</div>
      <button className="course-item h1" type="button" class="btn btn-outline-primary btn-block">Cooking</button>
      <button className="course-item h1" type="button" onClick={handleFinanceClick} class="btn btn-outline-success btn-block">Finance</button>
      <button className="course-item h1" type="button" class="btn btn-outline-warning btn-block">Driving</button>
    </div>
  );
}

export default CoursesPage;
