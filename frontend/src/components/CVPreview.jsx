

import React, { useState } from "react";
import CVPreviewTemplateOne from "./CVPreviewTemplateOne";
import CVPreviewTemplateTwo from "./CVPreviewTemplateTwo";
import CVPreviewTemplateThree from "./CVPreviewTemplateThree";

const CVPreview = ({ formData }) => {
  const [currentTemplate, setCurrentTemplate] = useState(1);

  const switchTemplate = () => {
    setCurrentTemplate((prev) => (prev < 3  ?  prev + 1 : 1));
  };

  return (
    <div className="relative h-full">
      <button
        onClick={switchTemplate}
        className="absolute top-4 right-4 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-10"
      >
        Switch Template
      </button>

      <div className="overflow-y-auto h-full">
        {currentTemplate === 1 ? (
          <CVPreviewTemplateOne formData={formData} />
        ) : currentTemplate === 2 ? (
          <CVPreviewTemplateTwo formData={formData} />
        ) : (
          <CVPreviewTemplateThree formData={formData} />
        )}
      </div>
    </div>
  );
};

export default CVPreview;




// import React from 'react'

// function CVPreview({formData}) {
//   const {
//     fullName,
//     email,
//     phone,
//     address,
//     summary,
//     degree,
//     institution,
//     year
//   } = formData

//   return (
//     <div className=' border border-gray-400 p-6'>

//       <div className="border-b-2 pb-4 mb-4">
//         <h1 className='text-3xl font-bold'>{fullName || 'Your Name'}</h1>
        // <p className='text-gray-600'>
        //   {email || 'Your Email Address'} | {phone || '+1 234 567 890 ' }   
        //   | { address || ' 123 Main St, City, Country'} 
        // </p>
//       </div>

//       <div className="mb-4">
//         <h2 className="text-2xl font-semibold border-b-2 pb-1">Professional Summary</h2>
//         <p className="mt-2 text-gray-700">
//           { summary || 'A highly motivated and skilled professional with a passion for excellence.'}
//         </p>
//       </div>


//       <div className="mb-4">
//         <h2 className="text-2xl font-semibold border-b-2 pb-1">Education</h2>
//         <h4 className="text-md font-medium">
//               {degree || "Degree Name"} - {institution || "Institution Name"}
//             </h4>
//             <p className="text-gray-600">{year || "Done Year"}</p>

//       </div>

//     </div>
//   )
// }

// export default CVPreview