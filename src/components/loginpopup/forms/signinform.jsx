import "./formstyles.css";

const SigninForm = () => {
  return (
    <div className="loginpopup-signin-container">
      <h1 className="loginpopup-logintab-header">Luo käyttäjä</h1>
      <div className="loginpopup-logintab-form-container">
        <div className="formitem">
          <input type="text" name="email" />
        </div>
        <div className="formitem">
          <input type="password" name="password" />
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
