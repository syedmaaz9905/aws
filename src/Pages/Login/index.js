import React,{Fragment,useState,useContext,useEffect} from 'react'
import {Form,Button,Card } from 'react-bootstrap';
import axios from "axios";
 function Login() {
  const [username, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const[token,setPosts]=useState("")
  const[Customer,setCustomer] = useState("")
  const[role,setRole] = useState("")
  const [data, setData] = useState([]);


  let  handleSubmit = (e) => {
    let parameters = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8',
          // "Authorization":"c83e00f458c09f013d6383ddec00149cf8069d8258919ff0ed9b7455f7b548b8"
      },
  }
    e.preventDefault();
    axios
       .post('/login/', {
        Customer:Customer,
        username: username,
        password: password,
        role:role
       },parameters)
       .then((res) => {
          setPosts((posts) => [res.data, ...posts]);
          window.location.assign(`/dashboard`);
        })
       .catch((err) => {
          alert('INVALID CREDENTIALS!')
          console.log(err.message);
       }); };
  useEffect(() => {
  axios
      .get(`/roles/`)
      .then(result => setData(result.data));
  }, []);



 
 

  return (
   
    <Fragment>
       <Card >
      <Card.Header>Data Ingestion</Card.Header>
      <Card.Body>
      
        <div className="App" >
        <form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="text" placeholder="Customer Name"
            onChange={(e) => setCustomer(e.target.value)}
            value={Customer} />
        </Form.Group>

      
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="text" placeholder="Enter Username"
            onChange={(e) => setEmail(e.target.value)}
            value={username} />
        </Form.Group>
          
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="password" placeholder=" Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <select class="form-select" id="inputGroupSelect01"input type="text" placeholder="Select Role"
          onChange={(e) => setRole(e.target.value)}
          value={role} required>
                    <option>Select Role</option>
            {data.map((item) =>{
                    return(
                    <option value={item.role_name}>{item.role_name}</option>
            )})};
          </select>
          </Form.Group><br/>
           
        <Button variant="primary" type="submit">Login</Button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
      </Card.Body>
    </Card>
        
    </Fragment>
 
 
  )
}

export default Login
