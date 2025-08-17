import React, { useState } from 'react';

const ListPatient = ({ onPatientClick, onLogout, onProfile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('patients');

  // Mock patient data
  const patients = [
    { id: 1, name: 'Sarah Johnson', age: 25, status: 'Active', lastVisit: '2 days ago' },
    { id: 2, name: 'Michael Chen', age: 32, status: 'Active', lastVisit: '1 week ago' },
    { id: 3, name: 'Emily Rodriguez', age: 28, status: 'Active', lastVisit: '3 days ago' },
    { id: 4, name: 'David Thompson', age: 45, status: 'Active', lastVisit: '1 day ago' },
    { id: 5, name: 'Lisa Wang', age: 29, status: 'Active', lastVisit: '5 days ago' },
    { id: 6, name: 'James Wilson', age: 38, status: 'Active', lastVisit: '1 week ago' },
    { id: 7, name: 'Maria Garcia', age: 31, status: 'Active', lastVisit: '2 days ago' },
    { id: 8, name: 'Robert Brown', age: 42, status: 'Active', lastVisit: '4 days ago' },
  ];

  const navigationItems = [
    { id: 'patients', label: 'Patients', icon: '👤' },
    { id: 'prescriptions', label: 'Prescriptions', icon: '📄' },
    { id: 'ddi-alerts', label: 'DDI Alerts', icon: '⚠️' },
    { id: 'blockchain', label: 'Blockchain Transactions', icon: '🔗' },
    { id: 'notifications', label: 'Notification', icon: '🔔' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const handleProfile = () => {
    if (onProfile) {
      onProfile();
    }
  };

  const handlePatientClick = (patient) => {
    if (onPatientClick) {
      onPatientClick(patient);
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
            Patient Management
          </h1>
          <p className="text-gray-600">Manage and view your patient information</p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search patients by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 shadow-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
            >
              Search
            </button>
          </form>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Patients</p>
                <p className="text-3xl font-bold text-gray-900">{patients.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Patients</p>
                <p className="text-3xl font-bold text-gray-900">{patients.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-green-600 text-xl">✅</span>
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Today's Appointments</p>
                <p className="text-3xl font-bold text-gray-900">3</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-orange-600 text-xl">📅</span>
              </div>
            </div>
          </div>
        </div>

        {/* Patient List */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Patients</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {patients.map((patient) => (
              <div
                key={patient.id}
                onClick={() => handlePatientClick(patient)}
                className="bg-white rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02] border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-lg">{patient.name}</h3>
                    <p className="text-gray-600 text-sm">{patient.age} years old • Last visit: {patient.lastVisit}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {patient.status}
                  </span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPatient;
