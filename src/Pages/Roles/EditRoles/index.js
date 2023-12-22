import React, { useEffect, useState ,Fragment} from "react";
import {Card,Form,Button} from 'react-bootstrap';
import axios from "axios";
import {  useParams } from 'react-router-dom'

function EditRoles() {
  const [id, Id] = useState("")
  const [role_name, setRolename] = useState("")
  const [role_description, RoleDescription] = useState("")
  const [message, setMessage] = useState("")
  const [users, setUsers] = useState([])



  let {role_id}= useParams();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
          let res = await fetch("/roles/rolesedit/", {
            method: "PUT",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id:role_id,
              role_name: role_name,
              role_description: role_description,

            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setRolename("");
            RoleDescription("");
            window.location.assign(`/roles`);
          } else {
            alert("please enter all fields")
          }}
    catch (err) {
      alert("please enter all fields below")
      console.log(err);
    }
  };

  const fetchData = () => {
    
    fetch(`/roles/rolesedit/${role_id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const deleteHandler = () => {
    axios
      .delete(`/roles/rolesdelete/${role_id}`)
      .then(response => {
        console.log("deleted successfully!")
        if (response.status="user deleted"){
          window.location.assign(`/roles`);
        }

      })
  }


  return (
    <Fragment>
    <Card lg={12} md={12} sm={12}>
      <Card.Header>Upadate or Delete Role</Card.Header>
    <Card.Body>
        <form  onSubmit={handleSubmit}>
          {users.map(user => (
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="text" placeholder={user.role_name}
          onChange={(e) => setRolename(e.target.value)}
          value={role_name} />
          </Form.Group>
                       ))}
        {users.map(user => (
      <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control input type="text" placeholder={user.role_description}
          onChange={(e) => RoleDescription(e.target.value)}
          defaultvalue={role_description} />
        </Form.Group>
                       ))}
        <Card.Footer>
        <Button type="submit" class="btn btn-info"  onSubmit={handleSubmit} >Update Role</Button>
        &emsp;
        <Button type="button"class="btn btn-info" onClick={deleteHandler}>Delete Role</Button>
        </Card.Footer>
          </form>
        </Card.Body>
      </Card>
    </Fragment>
  )
}


export default EditRoles
