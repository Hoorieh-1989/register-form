import {  useState, useEffect } from "react";
import React from "react";
import "../App.css";


const Login = () => {
  const [name, setName] = useState( [], () => {      
    const localData = localStorage.getItem ('name'); 
    return localData ? JSON.parse(localData) : [];
  });                                                        
  const [password, setPassword] = useState( [], () => {
    const localData = localStorage.getItem ('password');
    return localData ? JSON.parse(localData) : [];
  });     
    


 
  useEffect(() => {
    setErrors("");
  }, [name, password]);

  useEffect (()=> {
    localStorage.setItem('name', JSON.stringify(name))                         //localstorage
    localStorage.setItem('password', JSON.stringify(password))
  }, [name, password]);  


  
  
     // States for checking the errors
     const [submitted, setSubmitted] = useState(false);
     const [errors, setErrors] = useState("");

    const [validName, setValidName] = useState();
    const [validPwd, setValidPwd] = useState();
  
    useEffect(() => {
      setValidName();
      setValidPwd();
      setErrors("");
    }, [name, password]);
  
  
    function validateForm() {
      let hasErrors = false;
      if (!name) {
        setValidName(true);
        setErrors("Enter valid name");
        hasErrors = true;
        return hasErrors;
      }
      if (!password) {
        setValidPwd(true);
        setErrors("Enter valid password");
        hasErrors = true;
        return hasErrors;
      }
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();

  
      //Validate user input
        const hasError = validateForm();
        if (!hasError) {
            setSubmitted(true)
      
        }
  
    };
  
    return (
      <>
        {submitted ? (
          <section>
            <h1>User {name} successfully Logged in !!</h1>
            <br />
            <p>
              <a href="/">Go to Home</a>
            </p>
          </section>
        ) : (
          <section>
            <p
             
              className={setErrors ? "errors" : "offscreen"}
              aria-live="assertive"
            ></p>
            <h2>Sign in</h2>
  
            <form onSubmit={handleSubmit}>
              <br />
              {validName && (
                <p className="errmsg" aria-live="assertive">
                  {errors}
                </p>

              )}
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required // clear input
              />
              
  
              <br />
              {validPwd && (
                <p className="errmsg" aria-live="assertive">
                  {errors}
                </p>
              )}
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                required// clear input
              />
  
    <button>Sign In</button>

        <p id="one">
          
            Not yet member?
            <br />
                <span className="line">
          <a href="Register">Sign up now </a>
                </span>
    </p>
</form>
                 
            
            
          </section>
        )}
      </>
    );
  }
  export default Login;