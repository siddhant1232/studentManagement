import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false); // Tracks the form state (Login or Sign-up)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userName, setUserName] = useState<string>(''); // For sign-up form
  const [errorMessage, setErrorMessage] = useState<string>(''); // To display error messages
  const navigate = useNavigate();

  // Simulate an existing user list (You can replace this with actual API calls)
  const existingUsers = [
    { email: 'user@example.com', password: '123', userName: 'User' },
    // Add more existing users if needed
  ];

  // Handle form submission (either login or sign-up)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isSignUp) {
      // Check if email is already taken during sign-up
      const existingUser = existingUsers.find(user => user.email === email);
      if (existingUser) {
        setErrorMessage('Email already exists. Please login or use a different email.');
      } else if (userName && email && password) {
        // Simulate successful sign-up
        setErrorMessage('');
        alert('Sign-up successful!');
        navigate('/dashboard'); // Redirect to dashboard after successful sign-up
      } else {
        setErrorMessage('Please fill all fields.');
      }
    } else {
      // Check credentials during login
      const user = existingUsers.find(user => user.email === email && user.password === password);
      if (user) {
        setErrorMessage('');
        alert('Login successful!');
        navigate('/dashboard'); // Redirect to dashboard after successful login
      } else {
        setErrorMessage('Invalid email or password!');
      }
    }
  };

  // Reset userName when switching to login form
  useEffect(() => {
    if (!isSignUp) {
      setUserName('');
      setErrorMessage(''); // Clear any previous error message when switching to login
    }
  }, [isSignUp]);

  return (
    <div className="main">
      <input
        type="checkbox"
        id="chk"
        aria-hidden="true"
        checked={isSignUp}
        onChange={() => setIsSignUp(!isSignUp)}
        style={{ display: 'none' }}
      />
      <div className={isSignUp ? 'signup active' : 'signup'}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            name="username"
            placeholder="User name"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign up</button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>

      <div className={isSignUp ? 'login' : 'login active'}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>

      {/* Inline Styles for the CSS you provided */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-family: 'Jost', sans-serif;
          background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
        }

        .main {
          width: 350px;
          height: 500px;
          background: red;
          overflow: hidden;
          background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/cover;
          border-radius: 10px;
          box-shadow: 5px 20px 50px #000;
        }

        #chk {
          display: none;
        }

        .signup {
          position: relative;
          width: 100%;
          height: 100%;
        }

        label {
          color: #fff;
          font-size: 2.3em;
          justify-content: center;
          display: flex;
          margin: 50px;
          font-weight: bold;
          cursor: pointer;
          transition: .5s ease-in-out;
        }

        input {
          width: 60%;
          height: 10px;
          background: #e0dede;
          justify-content: center;
          display: flex;
          margin: 20px auto;
          padding: 12px;
          border: none;
          outline: none;
          border-radius: 5px;
        }

        button {
          width: 60%;
          height: 40px;
          margin: 10px auto;
          justify-content: center;
          display: block;
          color: #fff;
          background: #573b8a;
          font-size: 1em;
          font-weight: bold;
          margin-top: 30px;
          outline: none;
          border: none;
          border-radius: 5px;
          transition: .2s ease-in;
          cursor: pointer;
        }

        button:hover {
          background: #6d44b8;
        }

        .login {
          height: 460px;
          background: #eee;
          border-radius: 60% / 10%;
          transform: translateY(-180px);
          transition: .8s ease-in-out;
        }

        .login label {
          color: #573b8a;
          transform: scale(.6);
        }

        #chk:checked ~ .login {
          transform: translateY(-500px);
        }

        #chk:checked ~ .login label {
          transform: scale(1);
        }

        #chk:checked ~ .signup label {
          transform: scale(.6);
        }

        .error {
          color: red;
          font-size: 0.9em;
          text-align: center;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
