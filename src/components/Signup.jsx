import  { useState, useEffect } from "react";
 import signupImage from "../assets/images/signup-image.jpg";
import googleLogo from  "../assets/images/google-logo.jpg";
 import '../assets/css/signup.css'

const Signup = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({}); 
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

 
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  
  const validateForm = () => {
    let newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required!";
    else if (username.length < 3)
      newErrors.username = "Username must be at least 3 characters!";

    if (!password) newErrors.password = "Password is required!";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters!";

    if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Sign up successful!");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
    }
  };

  return (
    <div className="signup-container">
      {/* Left Side - Form */}
      <div className="signup-form">
        <h2>Welcome here!</h2>
        <p>Please enter your details</p>

        <form onSubmit={handleSubmit}>
          <label>Enter Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span className="error">{errors.username}</span>}

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <label>Re-enter Password</label>
          <input
            type="password"
            placeholder="Re-write password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}

          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>

        <button className="google-btn">
          <img
            src={googleLogo}
            alt="Google Logo"
          />
          Sign up with Google
        </button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>

        
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

        <div className="signup-image">
          <img src={signupImage} alt="Signup Illustration" />
        </div>
        
    </div>
  );
};

export default Signup;