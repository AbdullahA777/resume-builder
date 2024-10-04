import React from "react";

function CVForm({ formData, onFormChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({ ...formData, [name]: value });
  };
  return (
    <form className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Personal Information</h1>

        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={handleChange}
              value={formData.fullName}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="john.doe@example.com"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={handleChange}
              value={formData.phone}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="+1 234 567 890"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="fullName"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
              value={formData.address}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="123 Main St, City, Country"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-semibold my-3">
              Professional Summary
            </h1>
            <textarea
              type="text"
              name="summary"
              id="summary"
              onChange={handleChange}
              value={formData.summary}
              className="w-full border border-gray-300 p-2 rounded"
              rows="4"
              placeholder="A brief summary about yourself..."
            >
              {" "}
            </textarea>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-semibold my-3">Education</h1>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="degree"
              >
                Degree
              </label>
              <input
                type="text"
                name="degree"
                id="degree"
                onChange={handleChange}
                value={formData.degree}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Bachelor of Science in Computer Science"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="institution"
            >
              Institution
            </label>
            <input
              type="text"
              name="institution"
              id="institution"
              onChange={handleChange}
              value={formData.institution}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="University Name"
            />
          </div>
        </div>


        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="year"
            >
              Year
            </label>
            <input
              type="text"
              name="year"
              id="year"
              onChange={handleChange}
              value={formData.year}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="2015 - 2016"
            />
          </div>
        </div>

      </div>
    </form>
  );
}

export default CVForm;
