import React, { useState } from 'react';

const DoctorProfile = () => {
  const [formData, setFormData] = useState({
    // General information
    name: '',
    email: '',
    contactNo: '',
    dateOfBirth: '',
    gender: '',
    
    // Professional information
    medicalLicense: '',
    specialization: '',
    hospitalName: '',
    yearOfExperience: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">
        Doctor Profile
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* General Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 capitalize">
            General information
          </h2>
          <div className="space-y-5">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border-2 border-blue-900 rounded-md bg-blue-900 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border-2 border-blue-900 rounded-md bg-blue-900 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="contactNo" className="text-sm font-medium text-gray-700">
                Contact No
              </label>
              <input
                type="tel"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border-2 border-blue-900 rounded-md bg-blue-900 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
                placeholder="Enter your contact number"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border-2 border-blue-900 rounded-md bg-blue-900 text-white focus:outline-none focus:border-blue-600 focus:bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="gender" className="text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border-2 border-blue-900 rounded-md bg-blue-900 text-white focus:outline-none focus:border-blue-600 focus:bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Professional Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 capitalize">
            Professional information
          </h2>
          <div className="space-y-5">
            <div className="flex flex-col space-y-2">
              <label htmlFor="medicalLicense" className="text-sm font-medium text-gray-700">
                Medical License
              </label>
              <input
                type="text"
                id="medicalLicense"
                name="medicalLicense"
                value={formData.medicalLicense}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border-2 border-blue-900 rounded-md bg-blue-900 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
                placeholder="Enter your medical license number"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="specialization" className="text-sm font-medium text-gray-700">
                Specialization
              </label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border-2 border-blue-900 rounded-md bg-blue-900 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
                placeholder="Enter your specialization"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="hospitalName" className="text-sm font-medium text-gray-700">
                Hospital Name
              </label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border-2 border-blue-900 rounded-md bg-blue-900 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
                placeholder="Enter hospital name"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="yearOfExperience" className="text-sm font-medium text-gray-700">
                Year of Experience
              </label>
              <input
                type="number"
                id="yearOfExperience"
                name="yearOfExperience"
                value={formData.yearOfExperience}
                onChange={handleInputChange}
                min="0"
                max="50"
                required
                className="px-4 py-3 border-2 border-blue-900 rounded-md bg-blue-900 text-white placeholder-gray-300 focus:outline-none focus:border-blue-600 focus:bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition-all duration-300"
                placeholder="Enter years of experience"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <button 
            type="submit" 
            className="bg-blue-900 text-white px-10 py-3 text-lg font-medium rounded-md hover:bg-blue-800 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-w-32"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorProfile;
