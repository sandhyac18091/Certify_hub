import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'


const Signup = () => {
    const [fullname,setFullName]=useState('')
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError]=useState('')

    const navigate=useNavigate()

    const handleSignup=async (e)=>{
        e.preventDefault();
        try{
            const response=await fetch('/api/signup',{
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Fullname:fullname,
                    Username:username,
                    Email:email,
                    Password:password,
                    
                })
            });
            if(!response){
                const errdata=await response.json();
                throw new Error(errdata.msg || 'signup failed')
            }
            navigate('/login')
        }catch(err){
            setError(err.message || 'Signup failed:please try again!')
        }
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-[500px] p-8 bg-transparent rounded-md mt-24 shadow-md shadow-slate-500">
      <h2 className="text-4xl text-center font-serif font-bold text-yellow-600">Sign Up</h2>
      
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}

      <form onSubmit={handleSignup}>
        <div className="mt-6">
          <label  className="ml-4 text-xl font-serif text-purple-950">Fullname</label>
          <input
            type="text"
            id="fullName"
            className="ml-4 w-11/12 h-11 bg-white font-serif text-lg text-purple-950"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="mt-4">
          <label  className="ml-4 text-xl font-serif text-purple-950">Username</label>
          <input
            type="text"
            id="username"
            className="ml-4 w-11/12 h-11 bg-white font-serif text-lg text-purple-950"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mt-4">
          <label  className="ml-4 text-xl font-serif text-purple-950">Email</label>
          <input
            type="email"
            id="email"
            className="ml-4 w-11/12 h-11 bg-white font-serif text-lg text-purple-950"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mt-4">
          <label  className="ml-4 text-xl font-serif text-purple-950">Password</label>
          <input
            type="password"
            id="password"
            className="ml-4 w-11/12 h-11 bg-white font-serif text-lg text-purple-950"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        

        <button
          type="submit"
          className="ml-4 w-11/12 h-11 bg-yellow-600 rounded-2xl text-lg text-white mt-6"
        >
          Signup
        </button>
      </form>

      <p className="font-serif mt-6 text-center">
        Have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  </div>
);
};
export default Signup