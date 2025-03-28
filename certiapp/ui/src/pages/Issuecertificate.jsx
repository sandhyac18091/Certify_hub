import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Issuecertificate = () => {
    const [selectcourse, setSelectcourse] = useState('');
    const [certificateid, setCertificateid] = useState('');
    const [candidatename, setCandidatename] = useState('');
    const [selectgrade, setSelectgrade] = useState('');
    const [issuedate, setIssuedate] = useState('');
    const [Error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/issuecertificate', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Selectcourse: selectcourse,
                    Certificateid: certificateid,
                    Candidatename: candidatename,
                    Selectgrade: selectgrade,
                    Issuedate: issuedate
                }),
                
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Error adding course");

            alert('Certificate issued successfully');
            
        } catch (err) {
            setError(err.message || 'Certificate issuance failed. Please try again!');
            alert(`Something went wrong: ${err.message}`);
        }
    };

    return (
        <div className="p-6 min-h-screen bg-gray-100">
            
            <div className="flex justify-end space-x-4 mb-6">
                <Link to="/home" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow-md transition duration-200">
                    Home
                </Link>
                <Link to="/issuecertificate" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md shadow-md transition duration-200">
                    Issue Certificate
                </Link>
            </div>

            
            {Error && <p className="text-red-600 text-center font-semibold">{Error}</p>}

            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-center font-bold text-blue-600 mb-6">Issue New Certificate</h2>

                
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Select Course</label>
                    <select value={selectcourse} onChange={(e) => setSelectcourse(e.target.value)} className="w-full mt-1 p-3 border rounded-lg bg-gray-50">
                        <option value="">Select Course</option>
                        <option>Certified Blockchain Associate</option>
                        <option>MERN Stack Development</option>
                        <option>Staff</option>
                        <option>Others</option>
                    </select>
                </div>

               
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Certificate ID</label>
                    <input type="text" value={certificateid} onChange={(e) => setCertificateid(e.target.value)} className="w-full mt-1 p-3 border rounded-lg bg-gray-50" />
                </div>

                
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Candidate Name</label>
                    <input type="text" value={candidatename} onChange={(e) => setCandidatename(e.target.value)} className="w-full mt-1 p-3 border rounded-lg bg-gray-50" />
                </div>

                
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Select Grade</label>
                    <select value={selectgrade} onChange={(e) => setSelectgrade(e.target.value)} className="w-full mt-1 p-3 border rounded-lg bg-gray-50">
                        <option value="">Select Grade</option>
                        <option>S</option>
                        <option>A+</option>
                        <option>A</option>
                    </select>
                </div>

                
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Issue Date</label>
                    <input type="date" value={issuedate} onChange={(e) => setIssuedate(e.target.value)} className="w-full mt-1 p-3 border rounded-lg bg-gray-50" />
                </div>

                
                <button type="submit" className="w-full p-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200">
                    Issue Certificate
                </button>
            </form>
        </div>
    );
};

export default Issuecertificate;
