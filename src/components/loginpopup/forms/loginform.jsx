import "./formstyles.css";

const LoginForm = () => {
  return (
    <div className="loginpopup-logintab-container">
      <h1 className="loginpopup-logintab-header">Kirjaudu sisään</h1>

      <div className="loginpopup-logintab-form-container">
        <div className="formitem">
          <input type="text" name="email" placeholder="Sähköposti" />
        </div>
        <div className="formitem">
          <input type="password" name="password" placeholder="Salasana" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
