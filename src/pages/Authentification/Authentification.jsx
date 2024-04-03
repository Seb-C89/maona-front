import { useState, useEffect } from 'react';

const Authentification = () => {
  const [mail, setMail] = useState(() => {
    let mail = document.cookie.split("; ").find((row) => row.startsWith("mail="))?.split("=")[1]
    // if mail is undefinided decodeURIComponent return a string containing undefinited ...
    // so check it to avoid undefinited become "undefinited" and therefore become definited ...
    if (mail)
      mail = decodeURIComponent(mail)
    return mail
  });

  return (
    <main >
      <h1>Auth</h1>
      <p> OAuth 2.0</p>
      {
        mail
        ? <p>YOU ARE {mail}</p>
        : <p><a href={`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/authentification/auth`}>GITHUB OAuth: CLICK HERE</a></p>
      }
    </main>
  );
};

export default Authentification;
