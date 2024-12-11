import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-blue-900 flex items-center justify-center">
        <img src="/random-image.png" alt="Logo" className="w-2/3" />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col justify-center px-12">
        <h2 className="text-3xl font-semibold mb-4">We’re glad to see you again</h2>

        <button className="flex items-center justify-center border w-full py-2 rounded-md mb-6 hover:bg-gray-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
            alt="Google Icon" 
            className="w-5 h-5 mr-2" 
          />
          Continue with Google
        </button>

        <p className="text-gray-500 text-center mb-4">OR LOGIN WITH EMAIL</p>

        <form>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-blue-500" 
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-full border rounded-md px-3 py-2 mb-6 focus:outline-blue-500" 
          />

          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            SIGN IN
          </button>
        </form>

        <p className="text-right text-blue-500 text-sm mt-2 cursor-pointer">Forgot password?</p>
        <p className="text-center text-gray-500 mt-4">
          Don’t have an account? <span className="text-blue-500 cursor-pointer">SIGN UP</span>
        </p>
      </div>
    </div>
  );
};

const SignupPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-blue-900 flex items-center justify-center">
        <img src="/random-image.png" alt="Logo" className="w-2/3" />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col justify-center px-12">
        <h2 className="text-3xl font-semibold mb-4">Get started with your Free plan</h2>

        <button className="flex items-center justify-center border w-full py-2 rounded-md mb-6 hover:bg-gray-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
            alt="Google Icon" 
            className="w-5 h-5 mr-2" 
          />
          Continue with Google
        </button>

        <p className="text-gray-500 text-center mb-4">OR</p>

        <form>
          <input 
            type="text" 
            placeholder="Name*" 
            className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-blue-500" 
          />
          <input 
            type="tel" 
            placeholder="Phone no.*" 
            className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-blue-500" 
          />
          <input 
            type="email" 
            placeholder="Email id*" 
            className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-blue-500" 
          />
          <input 
            type="password" 
            placeholder="Create password*" 
            className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-blue-500" 
          />
          <input 
            type="password" 
            placeholder="Rewrite password*" 
            className="w-full border rounded-md px-3 py-2 mb-6 focus:outline-blue-500" 
          />

          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Create free account
          </button>
        </form>

        <p className="text-gray-500 text-xs mt-4">
          By creating an account, you confirm that you have read and agree to
          <span className="text-blue-500 cursor-pointer"> TestGrind's Terms of use </span>
          and <span className="text-blue-500 cursor-pointer">Privacy policy</span>.
        </p>
      </div>
    </div>
  );
};

export { LoginPage, SignupPage };
