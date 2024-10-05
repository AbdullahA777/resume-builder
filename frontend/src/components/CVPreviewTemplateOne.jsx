// src/components/CVPreviewTemplateOne.js

import React from "react";

const CVPreviewTemplateOne = ({ formData }) => {
  const {
    fullName,
    email,
    phone,
    address,
    summary,
    degree,
    institution,
    year
  } = formData;

  return (
    <div className="border border-gray-400 p-6">
      {/* Header */}
      <div className="border-b-2 pb-4 mb-4">
        <h1 className="text-4xl font-bold text-indigo-600">{fullName || "Your Name"}</h1>
        <p className="text-gray-600">
          {email || "youremail@example.com"} | {phone || "+1234567890"} | {address || "Your Address"}
        </p>
      </div>

      {/* Professional Summary */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold border-b-2 pb-1 text-indigo-600">Professional Summary</h2>
        <p className="mt-2 text-gray-700">
          {summary ||
            "A highly motivated and skilled professional with a passion for excellence."}
        </p>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold border-b-2 pb-1 text-indigo-600">Education</h2>
          <div  className="mt-2">
            <h3 className="text-xl font-medium text-gray-800">
              {degree || "Degree Name"} - {institution || "Institution Name"}
            </h3>
            <p className="text-gray-600">{year || "Year"}</p>
          </div>
      </div>

   
    </div>
  );
};

export default CVPreviewTemplateOne;
