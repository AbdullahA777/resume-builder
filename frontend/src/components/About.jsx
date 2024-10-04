import React from "react";

const AboutApp = () => {
  return (
    <section className="bg-gray-100 p-10 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          About Our Resume Builder
        </h2>
        <div className="flex flex-col lg:flex-row  justify-between">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <p className="text-lg leading-relaxed mt-3">
              Our Resume Builder is designed to help you create professional
              resumes with ease. Whether you're a seasoned professional or a
              fresh graduate, our tool offers a variety of templates and
              customization options to suit your style.
            </p>
            <div className="flex items-center justify-center ">
              <button className="px-8 py-4 text-white bg-blue-500 rounded-full text-lg font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:bg-indigo-600 hover:shadow-xl">
                Build Your Resume!
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Resume Example"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutApp;
