import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [certificateId, setCertificateId] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        const token = localStorage.getItem('token'); 
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSearch = () => {
        if (certificateId.trim()) {
            navigate(`/view/${certificateId}`);
        } else {
            alert('Please enter a valid Certificate ID');
        }
    };

    return (
        <div className="text-right">
            <input
                type="button"
                value="Home"
                className="bg-cyan-400 w-20"
            />

            
            {!isLoggedIn && (
                <label>
                    <Link to="/issue" className="ml-4 text-blue-600 hover:underline">
                        Issue Certificate
                    </Link>
                </label>
            )}

            <div className="text-center mt-8">
                <h1 className="font-extrabold text-3xl">Certificate Dapp</h1>

                <div>
                    <img
                        src="online-course.png"
                        alt="Online Course"
                        className="w-56 m-auto mt-10"
                    />
                </div>

                <div className="flex justify-center mt-8">
                    <input
                        type="text"
                        placeholder="Enter Certificate ID to View"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        required
                        className="border-2 border-sky-500 h-8 px-2"
                    />
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="ml-2 border-2 bg-cyan-500 text-white w-16 h-8"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
