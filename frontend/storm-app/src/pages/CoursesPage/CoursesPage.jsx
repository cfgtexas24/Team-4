import { useNavigate } from "react-router-dom";
import Path from "../../assets/path.png";


function CoursesPage() {
  const navigate = useNavigate();


  const handleFinanceClick = () => {
    navigate('/courses/finance');
  };

  return (
    <div className="course-list">
      <div className="course-item">Cooking</div>
      <div className="course-item" onClick={handleFinanceClick}>Finance</div>
      <div className="course-item">Driving</div>
    </div>
  );
}

export default CoursesPage;
