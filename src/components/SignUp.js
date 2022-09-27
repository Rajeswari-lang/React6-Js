import React from 'react';

const SignUp=() =>{
  const[username,setUserName] = useState('');
  const[password,setPassword] = useState('');
  const handleName = (e)=>{
setUserName(e.target.value);
}
const handlePassword = (e) =>{
  setPassword(e.target.value);
}
  return (
    <div>
      <h1>SignUp Component</h1>
      <form>
      <div class="mb-3">
            <label for="exampleInputUserName" class="form-label">Enter User Name</label>
            <input type="text" class="form-control" id="exampleInputUname" onChange={handleName}
            value={username}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputUserName" class="form-label">Enter User Password</label>
            <input type="password" class="form-control" id="exampleInputPassword" onChange={handlePasswor} />
          </div>
      </form>
    </div>
  );
}

export default SignUp;

