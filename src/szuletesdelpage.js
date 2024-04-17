import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export function SzuletesDelPage() {
    const navigate = useNavigate();
    const param = useParams();
    const id = param.babaId;
    console.log(id)
    useEffect(() => {
        const deleteSzuletes = async () => {
            try{
            const response = await fetch('http://localhost:5244/api/Szuletes/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status.toString().startsWith('2')) {
                console.log("Az id: " + id + " törölve lett.");
                throw new Error('Request failed!');
            }
            else {
                console.log("Törlés sikertelen.");
                throw new Error('Request failed!');
            }}
             catch(error) {
                console.log(error);
            }
        };
        deleteSzuletes();
        navigate("/");
    },[id]);
}
export default SzuletesDelPage;