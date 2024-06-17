import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('User logged in:', { email });
  };

  return (
    <div className="col-lg-5 col-12" style={{margin: 'auto', paddingTop: '20px'}}>
      <center><h2>Login</h2></center>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>Email</label>
          <input className='form-control'
            placeholder='user@mail.com'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input className='form-control'
            placeholder='**********'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='btn custom-btn'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
