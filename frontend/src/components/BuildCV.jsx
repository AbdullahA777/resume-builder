import React, { useState } from "react";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";



function BuildCV() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    degree: "",
    institution: "",
    year: "",
  });

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };
  return (
    <>
      <h1 className="text-center text-4xl my-4 font-bold ">Make Your Resume</h1>
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <div className="lg:w-1/2 p-6 overflow-y-auto">
        <CVForm formData={formData} onFormChange={handleFormChange} />
      </div>
      <div className="lg:w-1/2 p-6 bg-white shadow-lg">
        <CVPreview formData={formData} />
      </div>
    </div>
    </>
  );
}

export default BuildCV;
