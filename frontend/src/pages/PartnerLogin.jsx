const PartnerLogin = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h2>Food Partner Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className="button">Login</button>
        <div className="link">
          <a href="/food-partner/register">Don't have an account? Register</a>
        </div>
      </form>
    </div>
  );
};

export default PartnerLogin;