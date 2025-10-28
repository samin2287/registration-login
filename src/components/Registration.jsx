import React from 'react'
import { Link ,useNavigate} from 'react-router'
import { toast, ToastContainer } from "react-toastify";
import { useState } from 'react';
const Registration = () => {
    
      const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/register",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
 if (response.ok && data.success) {
        toast.success(data.message || "Registration successful!", {
          position: "top-right",
        });
        setTimeout(() => navigate("/login"), 1000); 

        setUserData({ username: "", email: "", password: "" });
      } else {
      
        if (data.errors) {
          data.errors.forEach((err) => {
            toast.error(err, { position: "top-right" });
          });
        } else {
          toast.error(data.message || "Registration failed!", {
            position: "top-right",
          });
        }
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

   
    <div>

        <ToastContainer></ToastContainer>
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2" />
            <h2 className="text-2xl font-bold leading-tight">
           Registration Form
            </h2>
            
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    User Name
                  </label>
                  <div className="mt-2">
                    <input  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData,username: e.target.value })
                  }   placeholder="Full Name" type="text" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="username" required />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input   value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }    placeholder="Email" type="email" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="email" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input    value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  } placeholder="Password" type="password" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="password" />
                  </div>
        
                </div>
                <div>
                  <button type="submit" className="inline-flex cursor-pointer w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                  Registration
                  </button>
                    
                </div>
                 
              </div>
            </form>
            <p className="mt-2 text-base text-gray-600">
          Already have an account? <Link to ="/login" className='text-blue-600'> Log In </Link> 
                </p>
          </div>
        </div>
      </section>
    </div>





           
  
  )
}

export default Registration
