import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    await fetch("https://retoolapi.dev/GFHqAV/getemployees", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setEmployees([...data]);
        setLoading(false);
        console.log(employees);
      });
  };

  if (Loading) return <Loader />;

  return (
    <div>
      <div className="text-5xl flex justify-center mt-9">All Employees</div>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            company={employee.name}
            designation={employee.designation}
            company_logo={employee.company_logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Employees;
