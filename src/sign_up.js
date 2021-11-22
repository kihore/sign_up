import React,{useState}from 'react'

function sign_up() {
const [data, setData] = useState([])
useState (() => {
    fetch("/api/data").then(
        res => setData(res.data)
    )
},[])
    
}
const sign_up = ({name,email,password,confirm_password}) => {
    return (
        <section className= 'signto'>
          <input type= 'text' input = 'Name' placeholder = 'user name' />
          <input type= 'text' input = 'email' placeholder = 'enter email-id' />
          <input type= 'text' input = 'Password' placeholder = 'password' />
          <input type= 'text' input = 'confirm_Password' placeholder = 'confrim password' />
          <input type = 'button' onClick = 'submit'/>
          </section>
            
       
    )
}

export default sign_up
