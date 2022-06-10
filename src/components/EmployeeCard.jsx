import React from "react";

const EmployeeCard = ({ name, company, designation, company_logo, key }) => {
  return (
    <div
      className="flex justify-center ml-10 mt-10 w-96 cursor-pointer"
      key={key}
    >
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={company_logo}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-700 text-base mb-4">{company}</p>
          <p className="text-gray-600 text-xs">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
