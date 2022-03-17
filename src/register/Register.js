import { useRef, useState, useEffect } from "react";
import "./register.css";

const Register = () => {
  const [name, setName] = useState( [], () => {      
    const localData = localStorage.getItem ('name'); 
    return localData ? JSON.parse(localData) : [];
  });                                                        
  const [password, setPassword] = useState( [], () => {
    const localData = localStorage.getItem ('password');
    return localData ? JSON.parse(localData) : [];
  });     
  const [emails, setEmails] = useState( [], () => {
    const localData = localStorage.getItem ('emails');
    return localData ? JSON.parse(localData) : [];
  });   

 
  

  useEffect(() => {         
      setErrors('');
  }, [name, password])

  useEffect (()=> {
    localStorage.setItem('name', JSON.stringify(name))                         //localstorage
    localStorage.setItem('password', JSON.stringify(password))
    localStorage.setItem('emails', JSON.stringify(emails))
  }, [name, password,emails]);  



  // States for registration
 
  const [lastname, setLast] = useState("");
 
  
  // States for checking the errors
  const [submitted, setSubmitted] = useState();
  const [errors, setErrors] = useState("");

  const [validName, setValidName] = useState();
  const [validLast, setValidLast] = useState();
  const [validPwd, setValidPwd] = useState();
  const [validEmail, setValidEmail] = useState();
  
  const userRef = useRef();
  const errRef = useRef();

  

  useEffect(() => {
  
    setValidName();
    setValidLast();
    setValidEmail();
    setValidPwd();
    setErrors("");
  }, [name,lastname, password, emails]);






  
  function validateForm() {
    let hasErrors = false;
    if (!name) {
      setValidName(true);
      setErrors("Enter valid Username");
      hasErrors = true;
      return hasErrors;
    }

      if (!lastname) {
        setValidLast(true);
        setErrors("Enter valid Lastname");
        hasErrors = true;
        return hasErrors;
      }
      
    if (!password) {
      setValidPwd(true);
      setErrors("Enter valid password");
      hasErrors = true;
      return hasErrors;
      }
  
      

    if (!emails) {
      setValidEmail(true);
      setErrors("Enter valid Email");
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
    

      

  };
}

  return (
    <>
      {submitted ? (
        <section>
          <h1>User {name} successfully registered!!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={setErrors ? "errors" : "offscreen"}
            aria-live="assertive"
          ></p>
          <h2>Register </h2>

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
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
               // clear input
            />
          {validLast && (
              <p className="errmsg" aria-live="assertive">
                {errors}
              </p>
            )}
            <label htmlFor="lastname">Lastname:</label>
            <input
              type="text"
              id="lastname"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setLast(e.target.value)}
              value={lastname}
               // clear input
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
              ref={userRef} 
            
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password} // clear input
            />

            <br />
            {validEmail && (
              <p className="errmsg" aria-live="assertive">
                {errors}
              </p>
            )}
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="emails"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmails(e.target.value)}
              value={emails} // clear input
            />

            <button>Register</button>

           
             
          
          </form>
        </section>
      )}
    </>
  );
}
export default Register;