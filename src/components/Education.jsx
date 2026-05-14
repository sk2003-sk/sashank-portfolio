import tenth from "../assets/images/tenth.png";
import inter from "../assets/images/inter.png";
import degree from "../assets/images/degree.png";

function Education() {
  return (
    <section className="education" id="education">
      <div className="edu-card">
        <img src={tenth} alt="" />
        <p className="stu">Sri Chaitanya Techno School</p>
        <p>CGPA: 9.8</p>
      </div>

      <div className="edu-card">
        <img src={inter} alt="" />
        <p className="stu">Narayana</p>
        <p>CGPA: 86.4</p>
      </div>

      <div className="edu-card">
        <img src={degree} alt="" />
        <p className="stu">Siddartha Institute of Science and Technology</p>
        <p>CGPA: 8.09</p>
      </div>
    </section>
  );
}

export default Education;
