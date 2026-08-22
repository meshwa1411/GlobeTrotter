import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Enter your email");
      return;
    }

    alert("Password reset link sent!");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Forgot Password?</h1>
        <p>Enter your email to reset your password.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button>Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;