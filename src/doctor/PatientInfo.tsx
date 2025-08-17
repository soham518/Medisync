import React, { useState } from 'react';

const PatientInfo = ({ patient, onBack, onLogout }) => {
  const [activeTab, setActiveTab] = useState('patient-info');

  // Default patient information if none provided
  const defaultPatientInfo = {
    name: 'Sarah Johnson',
    age: 25,
    gender: 'Female',
    contact: '+1 (555) 123-4567',
    email: 'sarah.johnson@email.com',
    address: '123 Main Street, City, State 12345',
    bloodType: 'O+',
    allergies: 'Penicillin, Peanuts',
    emergencyContact: 'John Johnson (Father) - +1 (555) 987-6543'
  };

  // Use passed patient data or default
  const patientInfo = patient ? {
    ...defaultPatientInfo,
    name: patient.name,
    age: patient.age
  } : defaultPatientInfo;

  const navigationItems = [
    { id: 'patients', label: 'Patients', icon: '👤' },
    { id: 'prescriptions', label: 'Prescriptions', icon: '📄' },
    { id: 'ddi-alerts', label: 'DDI Alerts', icon: '⚠️' },
    { id: 'blockchain', label: 'Blockchain Transactions', icon: '🔗' },
    { id: 'notifications', label: 'Notification', icon: '🔔' },
  ];

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const handleBackToPatients = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Left Sidebar */}
      <div className="w-72 bg-white/80 backdrop-blur-sm rounded-r-3xl shadow-xl border-r border-white/20 p-6 flex flex-col">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <span className="text-white text-2xl">👨‍⚕️</span>
          </div>
          <h2 className="text-blue-900 font-bold text-lg">Dr John Doe</h2>
          <p className="text-blue-700 text-sm bg-blue-50 px-3 py-1 rounded-full">Cardiology</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:bg-gray-50 hover:shadow-md'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 px-4 py-4 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all duration-300"
        >
          <span className="text-xl">➡️</span>
          <span className="font-semibold">Logout</span>
        </button>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToPatients}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Patients</span>
            </button>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Patient Information
          </h1>
        </div>

        {/* Patient Profile Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl font-bold">
                {patientInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{patientInfo.name}</h2>
              <p className="text-gray-600 bg-gray-50 px-3 py-1 rounded-full inline-block">
                Patient ID: #P-{Math.floor(Math.random() * 10000)}
              </p>
            </div>
          </div>

          {/* Patient Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-4">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Age</label>
                <p className="text-gray-900 font-bold text-lg">{patientInfo.age} years</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Gender</label>
                <p className="text-gray-900 font-bold text-lg">{patientInfo.gender}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Contact Number</label>
                <p className="text-gray-900 font-bold text-lg">{patientInfo.contact}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email Address</label>
                <p className="text-gray-900 font-bold text-lg">{patientInfo.email}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-4">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Blood Type</label>
                <p className="text-gray-900 font-bold text-lg">{patientInfo.bloodType}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Allergies</label>
                <p className="text-gray-900 font-bold text-lg">{patientInfo.allergies}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Emergency Contact</label>
                <p className="text-gray-900 font-bold text-lg">{patientInfo.emergencyContact}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Address</label>
                <p className="text-gray-900 font-bold text-lg">{patientInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical History Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Medical History</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-4">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Last Visit</p>
              <p className="text-gray-900 font-bold">December 15, 2023 - Routine Checkup</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-4">
              <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">Previous Diagnosis</p>
              <p className="text-gray-900 font-bold">Hypertension (Controlled with medication)</p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-2xl p-4">
              <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">Current Medications</p>
              <p className="text-gray-900 font-bold">Lisinopril 10mg daily, Metformin 500mg twice daily</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
            Edit Patient Info
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
            Create Prescription
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
