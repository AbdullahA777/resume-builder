import React from 'react'

function CVPreview({formData}) {
  const {
    fullName,
    email,
    phone,
    address,
    summary,
    degree,
    institution,
    year
  } = formData

  return (
    <div className=' border border-gray-400 p-6'>

      <div className="border-b-2 pb-4 mb-4">
        <h1 className='text-3xl font-bold'>{fullName || 'Your Name'}</h1>
        <p className='text-gray-600'>
          {email || 'Your Email Address'} | {phone || '123 Main St, City, Country'} | 
          {address || 'Your Address'} 
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold border-b-2 pb-1">Professional Summary</h2>
        <p className="mt-2 text-gray-700">
          { summary || 'A highly motivated and skilled professional with a passion for excellence.'}
        </p>
      </div>


      <div className="mb-4">
        <h2 className="text-2xl font-semibold border-b-2 pb-1">Education</h2>
        <h4 className="text-md font-medium">
              {degree || "Degree Name"} - {institution || "Institution Name"}
            </h4>
            <p className="text-gray-600">{year || "Done Year"}</p>

      </div>

    </div>
  )
}

export default CVPreview