import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('pandu556@gmail.com');
  const [password, setPassword] = useState('************');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  const handleNewUser = () => {
    // Handle navigation to registration page
    console.log('Navigate to registration page');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5 font-sans">
      <div className="flex items-center gap-3 mb-10">
        <div className="flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="5" fill="#3B82F6"/>
            <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="#3B82F6" strokeWidth="2"/>
            <circle cx="12" cy="6" r="2" fill="white"/>
            <path d="M12 4L13 2L11 2L12 4Z" fill="white"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 m-0">Login</h1>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 shadow-lg w-full max-w-md">
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-600 m-0">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-3 border-none rounded-lg bg-blue-700 text-white text-base outline-none transition-colors duration-200 placeholder:text-white/70 focus:bg-blue-600"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-600 m-0">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="px-4 py-3 pr-12 border-none rounded-lg bg-blue-700 text-white text-base outline-none transition-colors duration-200 placeholder:text-white/70 focus:bg-blue-600"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer p-1 flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-80"
                onClick={togglePasswordVisibility}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {showPassword ? (
                    <>
                      <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="white" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                    </>
                  ) : (
                    <>
                      <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="white" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                      <line x1="2" y1="2" x2="22" y2="22" stroke="white" strokeWidth="2"/>
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span 
              className="text-gray-600 text-sm cursor-pointer transition-colors duration-200 hover:text-blue-700 hover:underline"
              onClick={handleNewUser}
            >
              New User
            </span>
            <button 
              type="submit" 
              className="bg-blue-700 text-white border-none rounded-lg px-8 py-3 text-base font-medium cursor-pointer transition-colors duration-200 hover:bg-blue-600 active:bg-blue-800"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
