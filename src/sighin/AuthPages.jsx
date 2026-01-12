import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import sighin from '../image/Target.gif'
import signup from '../image/signup.png'
import { Link } from 'react-router-dom';
export default function AuthPages() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    name: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const SignInForm = () => (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 lg:p-10">
      <Link to='/' className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </Link>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
        Welcome Back!
      </h1>
      <p className="text-gray-600 mb-8">Sign in to continue your learning journey</p>

      <div className="space-y-5">
        {/* Email/Username */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email or Username
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your email or username"
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2d2f92] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2d2f92] focus:outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-[#2d2f92]  font-semibold"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-[#2d2f92] text-white font-semibold rounded-xl cursor-pointer  transition-colors shadow-lg hover:shadow-xl"
        >
          Sign In
        </button>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => setIsSignIn(false)}
              className="text-[#2d2f92] hover:text-blue-700 font-semibold"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  const SignUpForm = () => (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 lg:p-10">
      <button  onClick={() => setIsSignIn(true)} className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
        Create Account
      </h1>
      <p className="text-gray-600 mb-8">Start your learning journey today</p>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2d2f92] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2d2f92] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2d2f92] focus:outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-[#2d2f92] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setIsSignIn(true)}
              className="text-[#2d2f92] hover:text-blue-700 font-semibold"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
  {isSignIn ? (
    // Sign In Page - Image Left, Form Right
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* Left Side - Image (DESKTOP ONLY) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sky-200 p-8 items-center justify-center order-2 lg:order-1">
        <div className="max-w-md text-center">
          <img
            src={sighin}
            alt="Sign In Animation"
            className="w-full h-auto max-w-sm mx-auto"
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 bg-white flex items-center justify-center order-1 lg:order-2">
        <SignInForm />
      </div>
    </div>
  ) : (
    // Sign Up Page - Form Left, Image Right
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* Left Side - Form */}
      <div className="lg:w-1/2 bg-white flex items-center justify-center order-1">
        <SignUpForm />
      </div>

      {/* Right Side - Image (DESKTOP ONLY) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#f25b64] to-sky-200 p-8 items-center justify-center order-2">
        <div className="max-w-md text-center">
          <img
            src={signup}
            alt="Sign Up Animation"
            className="w-full h-auto max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  )}
</div>

  );
}