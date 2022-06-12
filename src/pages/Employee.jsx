import React, { useState, useEffect } from "react";

import { useLocation, Link } from "react-router-dom";

import Loader from "../components/Loader";

const Employee = ({ id }) => {
  const [Loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState({});

  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    getEmployees();
  }, [state]);

  const getEmployees = async () => {
    await fetch(
      `https://retoolapi.dev/H2F0Ui/getemployedetail?id=${state.id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setEmployee(...data);
        setLoading(false);
        console.log(...data);
      });
  };

  if (Loading) return <Loader />;

  return (
    <div className="container mx-auto flex pt-24 items-center">
      <div className="w-96">
        <div className="flex rounded-full  justify-center">
          <img
            src={employee.company_logo}
            alt="Employee Logo"
            className="rounded-full w-48 h-48"
          />
        </div>
        <div className="flex justify-center pt-4">
          {employee.rating
            .split("")
            .map(
              (rating) =>
                rating === "⭐" && (
                  <div className="flex rounded-full bg-slate-600 w-12 h-12 justify-center items-center">
                    {rating}
                  </div>
                )
            )}
        </div>
      </div>

      <div>
        <div className="text-5xl">{employee.name}</div>
        <span className="text-3xl pt-6 flex font-semibold">
          Company Name : {"  "}
          <span className="font-normal"> {employee.company}</span>
        </span>
        <span className="text-3xl pt-6 flex font-semibold">
          Company Designation : {"  "}
          <span className="font-normal"> {employee.designation}</span>
        </span>
        <span className="text-3xl pt-6 flex font-semibold">
          Interests : {"  "}
          <span className="font-normal"> {employee.interests}</span>
        </span>
        <span className="text-xl pt-6 flex font-semibold items-start flex-wrap">
          Job Description : {"  "}
          <span className="font-normal break-all">
            {" "}
            {employee.job_descripton}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Employee;
