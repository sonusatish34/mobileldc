import React, { useEffect, useState } from 'react'

function Login() {
    const [data,setData] = useState('');
    useEffect(() => {
        fetch('')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []);
    //   console.log(data,"daya");
    return (
        <div>

            {/* <h1>Login</h1> */}
            <div className="container text-center">
      <div className="  flex-col flex justify-center items-center">
      <div></div>
      <img src='./' alt='Tboo'/>
      <h1 className="p-4">Welcome to our Website</h1>
      <input placeholder="enter whatsapp number" maxLength={10} className="text-red-600 w-52 p-2 m-2" type="text"></input>
      <h2>Login Details</h2>
      <select class="form-control text-red-700 w-52 p-2 m-2"  name="role" placeholder="select Role">
                    <option value="0">Select Role</option>
                    <option value="1">Role -1</option>
                    <option value="2">Role -2</option>
                    <option value="3">Role -3</option>
                    </select>  <i class="ion ion-ios-arrow-down login-icon-2"></i>
      
      <button className="text-red-700 border border-red-600 w-52 bg-green-600 p-2 m-2">Send otp</button>
      </div>
    </div>
        </div>
    )
}

export default Login