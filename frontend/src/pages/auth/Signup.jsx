import { useState } from "react"



function Signup() {
  const [error, setErrors] = useState({});
  const [fields, setFields] = useState({
  name:"",
  email:"",
  mobNumber:"", 
  password:""
})
const handelChange =(e)=>{
  const {name, value} = e.target
console.log('==handelChange=>', name)
console.log('==handelChange=>', value)

setFields({
  ...fields,
  [name] : value
  // name : value
})
 
}
const handelSubmit =(e)=>{
 e.preventDefault(); 
 const isValid =  formValidation();
 if (!isValid) {
  return;
}
 console.log(fields);
  
}
const formValidation = ()=>{
  const {name, email,  mobNumber, password} = fields;
  const newError={};
  
  // if(!name || !email || !mobNumber || !password){
  //   console.log("Please enter all fileds");
  //   return false
  // }
  if(!name) newError.name = "Please enter full name";
  if(!email) newError.email ="Please enter email";
  if(!mobNumber) newError.mobNumber = "Plase enter mobile number";
  if(!password) newError.password = "Plase enter password";
  console.log('------newError--------->', newError)
  setErrors(newError) 
  return Object.keys(newError).length === 0
}
  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handelSubmit}>
      <div className="row"> 
        <div className="col-sm-6 mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" id="name" className="form-control" value={fields.name} onChange={handelChange}/>
          {error.name && <p className="text-danger error">{error.name}</p>}
        </div>
        <div className="col-sm-6 mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" id="email" className="form-control" value={fields.email} onChange={handelChange}/>
          {error.email && <p className="text-danger error">{error.email}</p>}
        </div>
        <div className="col-sm-6 mb-3">
          <label className="form-label">Number</label>
          <input type="number" name="mobNumber" id="mobNumber" className="form-control" value={fields.mobNumber} onChange={handelChange}/>
           {error.mobNumber && <p className="text-danger error">{error.mobNumber}</p>}
        </div>
        <div className="col-sm-6 mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" id="password" className="form-control" value={fields.password} onChange={handelChange}/>
           {error.password && <p className="text-danger error">{error.password}</p>}
        </div>
        <div className="col-sm-12 mb-3">
          <button className="btn btn-success" type="submit">Submmit</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Signup
