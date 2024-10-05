// src/components/CVPreviewTemplateTwo.js

import React from "react";

const CVPreviewTemplateTwo = ({ formData }) => {
  const {
    fullName,
    email,
    phone,
    address,
    summary,
    degree,
    institution,
    year,
  } = formData;

  return (
    <div className=" border border-gray-400 p-6 bg-gray-50">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-red-600">
          {fullName || "Your Name"}
        </h1>
        <div className="flex space-x-4 mt-2">
          <span className="text-gray-700 pr-2 border-r-4 border-double border-gray-600">
            {email || "youremail@example.com"}
          </span> 
          <span className="text-gray-700 pr-2 border-r-4 border-double border-gray-600">{phone || "+1234567890"}</span> 
          <span className="text-gray-700">{address || "Your Address"}</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-red-600">About Me</h2>
        <p className="mt-2 text-gray-700">
          {summary ||
            "A dedicated professional with extensive experience in the industry."}
        </p>
      </div>

      {/* Two-Column Layout for Education and Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            Education
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-800">
              {degree || "Degree Name"}
            </h3>
            <p className="text-gray-600">{institution || "Institution Name"}</p>
            <p className="text-gray-600">{year || "Year"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPreviewTemplateTwo;
