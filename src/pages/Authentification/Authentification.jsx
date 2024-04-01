import { useState, useEffect } from 'react';

const Authentification = () => {
  const [mail, setMail] = useState(document.cookie.split("; ").find((row) => row.startsWith("mail="))?.split("=")[1]);
  
return (
  <main >
    <h1>Auth</h1>
    <p> OAuth 2.0</p>
    {
      mail
      ? <p>YOU ARE {mail}</p>
      : <p><a href="http://localhost:8000/authentification/auth">GITHUB OAuth: CLICK HERE</a></p>
    }
  </main>
);
};

export default Authentification;
