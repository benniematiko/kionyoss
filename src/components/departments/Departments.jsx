import "./Departments.css";

import { DepartmentItems } from "../../DepartmentItems";



const Departments = () => {
  return (
    <div className="departments">
      <div className="departmentscontainers">
        <div className="departmentcards">


          {DepartmentItems.map((department, index) => {
            return (
              <div className="deptcard" key={index}>
                <div className="imgcontainer">
                   {department.image}
                </div>

                <div className="deptitle">
                   {department.title}
                </div>

                <div className="deptdesc">
                  {department.desc}
                </div>

                <div className="deptbtn">
                  <button>
                    Read more
                  </button>
                </div>
              </div>
            )
          })}



        </div>
      </div>
    </div>
  );
};

export default Departments;
