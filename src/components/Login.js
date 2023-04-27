import React from "react"


function Login(){
    return(
  <div>
    <h1>Login</h1>
    <form>
      <div>
        <input type="text" name="Username" placeholder="Username"></input>
      </div>
      <div>
        <input type="text" name="passwo<rd" placeholder="Password"></input>
      </div>
      <div>
        <input type="submit" value="submit"></input>
      </div>
    </form>
  </div>
  
  
    )
  }
  export default Login;