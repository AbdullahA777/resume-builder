import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function CVPreviewTemplateThree({ formData }) {
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
    <div className="border border-gray-400 p-6">
      {/* Name */}
      <div className="pb-4 mb-4">
        <h1 className="text-3xl font-bold">{fullName || "Your Name"}</h1>
      </div>

      {/* Professional Summary */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold border-b-2 pb-1">
          Professional Summary
        </h2>
        <p className="mt-2 text-gray-700">
          {summary ||
            "A highly motivated and skilled professional with a passion for excellence."}
        </p>
      </div>

      {/* Personal Information */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold border-b-2 pb-1">
          Personal Information
        </h2>
        <div className="text-gray-600 mt-2">
          {/* Email */}
          <div className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {email || "Your Email Address"}
          </div>
          {/* Phone */}
          <div className="mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            {phone || "+1 234 567 890"}
          </div>
          {/* Address */}
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            {address || "123 Main St, City, Country"}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold border-b-2 pb-1">Education</h2>
        <h4 className="text-md font-medium">
          {degree || "Degree Name"} - {institution || "Institution Name"}
        </h4>
        <p className="text-gray-600">{year || "Done Year"}</p>
      </div>
    </div>
  );
}

export default CVPreviewTemplateThree;
