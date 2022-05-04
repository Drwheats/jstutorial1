import Cowboy from "../media/cowboytwo.jpg"
import Google from "../media/google icon.png";
import Facebook from "../media/facebook icon.png";
import Github from "../media/github.png";

const Login = () => {
  return (
      <div className="login">
          <h1 className="logintitle">Enter Credentials Partner</h1>
          <div className="loginbuddy">
              <img src={Cowboy} alt="" className="loginbuddy"/>
          </div>
          <div className="wrapper">
              <div className="left">
                  <div className="loginbutton google">
                    <img src={Google} alt="" className="icon"/>
                      Gooogle
                  </div>
                  <div className="loginbutton facebook">
                      <img src={Facebook} alt="" className="icon"/>
                      Facebook
                  </div>
                  <div className="loginbutton github">
                      <img src={Github} alt="" className="icon"/>
                      Github
                  </div>
                  </div>
              <div className="center">
                  <div className="vertical-line"></div>
                  <div className="or">OR</div>
              </div>

              <div className="right">
              <input type="text" placeholder="Username"/>
              <input type="text" placeholder="Password"/>
              <button className="submit">Yeehaw</button>
              </div>
          </div>

      </div>
  )
}

export default Login;