import "./Desktop2.css";

const Desktop2 = () => {
  return (
    <div className="desktop-1">
          <img className="gif-Logo" src="../CLAP1.gif"></img>
          <h2>Enter Your Details</h2>
          <img className="svg-user" alt="" src="../user.svg" />
          <img className="svg-key" id="key-1" alt="" src="../key.svg" />
          <img className="svg-key" id="key-2" alt="" src="../key.svg" />
          <img className="svg-env" alt="" src="../envelope.svg" />
         
          <div class="box">
                <input type="text" name="text" id="text" placeholder="Enter Name" ></input>
                <input type="email" name="email" id="email" placeholder="Enter your Login id" ></input>
                <input type="password" name="password" id="password-0" placeholder="Enter password" ></input>
                <input type="password" name="password" id="password-1" placeholder="Confirm password" ></input>
               
                <button className="btn-signin" type="submit">SIGN IN</button>
          </div>\
         
        
          
    </div>
    
  );
};

export default Desktop2;
