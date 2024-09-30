import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de login con el backend
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Iniciar Sesión</h1>
      </header>

      <main>
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="primary" type="submit">Iniciar Sesión</button>
        </form>

        <div className="button-container">
          <button className="secondary" onClick={() => window.location.href='/register'}>Registrarse</button>
        </div>

        <div>
          <p>
            ¿Eres proveedor de servicios? <a href="/register-provider">Regístrate aquí</a>
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>Plataforma de Servicios © 2024</p>
      </footer>
    </div>
  );
};

export default Login;
