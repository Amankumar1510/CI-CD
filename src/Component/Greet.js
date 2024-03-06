// function Greet()
// {
//     return <h1>Hi Good Morning</h1>
// }
import './greet.css';
export const Greet = () => {
    return (
      <div id="login" className="container">
        <div className="row-fluid">
          <div className="span12">
            <div className="login well well-small">
              <div className="center">
                <img src="http://placehold.it/250x100&text=Logo" alt="logo" />
              </div>
              <form action="/users/login" className="login-form" id="UserLoginForm" method="post" acceptCharset="utf-8">
                <div className="control-group">
                  <div className="input-prepend">
                    <span className="add-on"><i className="icon-user"></i></span>
                    <input name="data[User][username]" required placeholder="Username" maxLength="255" type="text" id="UserUsername" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="input-prepend">
                    <span className="add-on"><i className="icon-lock"></i></span>
                    <input name="data[User][password]" required placeholder="Password" type="password" id="UserPassword" />
                  </div>
                </div>
                <div className="control-group">
                  <label id="remember-me">
                    <input type="checkbox" name="data[User][remember_me]" value="1" id="UserRememberMe" /> Remember Me?
                  </label>
                </div>
                <div className="control-group">
                  <input className="btn btn-primary btn-large btn-block" type="submit" value="Sign in" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
//   export default Greet;