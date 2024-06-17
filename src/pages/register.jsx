import { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle registration logic here
    console.log('User registered:', { username, email });
  };

  return (
    <div className="col-lg-5 col-12" style={{margin: 'auto', paddingTop: '20px'}}>
      <center><h2>Register</h2></center>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>Username</label>
          <input className='form-control'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label>Email</label>
          <input className='form-control'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input className='form-control'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label>Confirm Password</label>
          <input className='form-control'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <center><button type="submit" className='btn custom-btn'>Register</button></center>
      </form>
    </div>
  );
};

export default RegisterPage;
