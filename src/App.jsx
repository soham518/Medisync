import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LoginPage from './utilities/LoginPage'
import SignupPage from './utilities/SignupPage'
import DoctorProfile from './doctor/DoctorProfile'
import ListPatient from './doctor/ListPatient'
import PatientInfo from './doctor/PatientInfo'

function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login', 'signup', 'profile', 'list', 'patient'
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [userData, setUserData] = useState(null);

  // Navigation handlers
  const handleLogin = (userData) => {
    setUserData(userData);
    setCurrentView('profile');
  };

  const handleSignup = (userData) => {
    setUserData(userData);
    setCurrentView('profile');
  };

  const handleProfileComplete = () => {
    setCurrentView('list');
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setCurrentView('patient');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedPatient(null);
  };

  const handleBackToProfile = () => {
    setCurrentView('profile');
  };

  const handleLogout = () => {
    setCurrentView('login');
    setUserData(null);
    setSelectedPatient(null);
  };

  const handleSwitchToSignup = () => {
    setCurrentView('signup');
  };

  const handleSwitchToLogin = () => {
    setCurrentView('login');
  };

  // Render the appropriate component based on current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onSwitchToSignup={handleSwitchToSignup} />;
      case 'signup':
        return <SignupPage onSignup={handleSignup} onSwitchToLogin={handleSwitchToLogin} />;
      case 'profile':
        return <DoctorProfile onComplete={handleProfileComplete} onBack={handleLogout} />;
      case 'list':
        return <ListPatient onPatientClick={handlePatientClick} onLogout={handleLogout} onProfile={handleBackToProfile} />;
      case 'patient':
        return <PatientInfo patient={selectedPatient} onBack={handleBackToList} onLogout={handleLogout} />;
      default:
        return <LoginPage onLogin={handleLogin} onSwitchToSignup={handleSwitchToSignup} />;
    }
  };

  return (
    <>
      {renderCurrentView()}
    </>
  )
}

export default App
