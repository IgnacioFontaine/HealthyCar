const Login = () => {

  return (
    <div>
      <div>
        <h1>Soy el Login</h1>
      </div>
      <div>
        <div>
          <h2>User</h2>
          <input aria-label=" You User..."></input>
        </div>
        <div>
          <h2>Password</h2>
          <input type="password" aria-label=" You Password..."></input>
        </div>
        <div>
          <button>Login</button>
          <button>Recover password</button>
        </div>
      </div>
    </div>
  );
};

export default Login;