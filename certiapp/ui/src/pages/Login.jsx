import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const navigate=useNavigate()
    const handleLogin=async (e)=>{
        e.preventDefault()
        try{
            const response=await fetch('/api/login',{
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Email:email,
                    Password:password
                })
                
            });
            if(!response.ok){
                 const errData=await response.json()
                 throw new Error(errData.msg || 'Login failed')   
            }
            navigate('/home')
        }catch(err){
            setError(err.message || 'Invalid credentials:Please try again later!')
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-[500px] p-8 bg-transparent rounded-md mt-24 shadow-md shadow-slate-500">
        <h2 className="text-4xl text-center font-serif font-bold text-yellow-600">Login</h2>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>} 

        <form onSubmit={handleLogin}>
            <div className="mt-6">
                <label className="ml-4 text-xl font-serif text-purple-950">Email</label>
                <input
                    type="text"
                    id="username"
                    className="ml-4 w-11/12 h-11 bg-white font-serif text-lg text-purple-950"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="mt-4">
                <label className="ml-4 text-xl font-serif text-purple-950">Password</label>
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
                Login
            </button>
        </form>

        <p className="font-serif mt-6 text-center">
            Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
        </p>
    </div>
</div>
);
};
  


export default Login