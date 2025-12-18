const PartnerRegister = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h2>Food Partner Register</h2>
        <div className="form-group">
          <label htmlFor="businessName">Business Name</label>
          <input type="text" id="businessName" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Contact Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" />
        </div>
        <button type="submit" className="button">Register</button>
        <div className="link">
          <a href="/food-partner/login">Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
};

export default PartnerRegister;