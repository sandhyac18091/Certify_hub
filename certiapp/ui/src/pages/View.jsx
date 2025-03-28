import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewCertificate = () => {
    const { certificateId } = useParams(); 
    const [certificate, setCertificate] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCertificate = async () => {
            try {
                const response = await fetch(`http://localhost:5003/getcertificate/${certificateId}`, {  
                    method: "GET",
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error("Certificate not found");
                }

                const data = await response.json();
                if (data.certificate) {
                    setCertificate(data.certificate);
                } else {
                    setError("Certificate data not found");
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCertificate();
    }, [certificateId]);

    return (
        <div className="flex justify-center">
            <div className="mt-16 border border-black w-1/2 h-auto">
                <div className="mt-16 border border-black w-3/4 m-auto mb-24 p-4">
                    <h2 className="font-extrabold text-3xl text-center font-sans">Kerala Blockchain Academy</h2>

                    <div className="flex justify-center mt-8">
                        <img src="/online-course.png" alt="Certificate" className="w-56" />
                    </div>

                    <div className="text-center mt-8">
                        {error ? (
                            <p className="text-red-500">{error}</p>
                        ) : certificate ? (
                            <>
                                <p>This is to certify that <b>{certificate.candidatename}</b></p>
                                <p>has successfully completed <b>{certificate.selectcourse}</b></p>
                                <p>with <b>{certificate.grade}</b> on <b>{certificate.selectgrade}</b></p>
                            </>
                        ) : (
                            <p>Loading certificate details...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCertificate;
