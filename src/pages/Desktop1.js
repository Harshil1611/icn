import "./Desktop1.css";

const Desktop1 = () => {
  return (
    
    <body className="body">
      
    <div className="desktop-1">
          <img className="gif-Logo" src="../CLAP1.gif"></img>
          <h2>Enter Your Details</h2>
          <img className="svg-user" alt="" src="../user.svg" />
          <img className="svg-key" alt="" src="../key.svg" />
          <div class="box">
                
                <input type="email" name="email" id="email" placeholder="Enter your Login id" ></input>
                <input type="password" name="password" id="password" placeholder="Enter password" ></input>
                <h1 className="txt-forgotpassword">Forgot Password</h1>
                <button className="btn-signin" type="submit">SIGN IN</button>
          </div>\
            <h1 className="txt-or">Signup </h1>
          <div className="login-methods">
          <img className="svg-google" alt="" src="../facebook-f.svg" />
          <img className="svg-google" alt="" src="../github.svg" />
          <img className="svg-google" alt="" src="../google.svg" />
          </div>
    </div>
    </body>
  );
};

export default Desktop1;
