import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./NewBornBaby.css";

const NewBornBaby = () => {
    const [babyData, setBabyData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBabyData = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?inc=name,location,picture&nat=us');
                const baby = {
                    name: `${response.data.results[0].name.first} ${response.data.results[0].name.last}`,
                    place: `${response.data.results[0].location.city}, ${response.data.results[0].location.state}`,
                    photo: response.data.results[0].picture.large
                };
                setBabyData(baby);
            } catch (err) {
                console.error("Error fetching baby data:", err);
                setError(err.message);
            }
        };

        fetchBabyData();

        const interval = setInterval(fetchBabyData, 60000); // Refresh data every minute

        return () => clearInterval(interval);
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!babyData) return <div>Loading...</div>;

    return (
        <div className="container">
            <div className="card">
                <img src={babyData.photo} alt={`${babyData.name}`} />
                <div>
                    <p>{babyData.name}</p>
                    <p>{babyData.place}</p>
                </div>
            </div>
        </div>
    );
};

export default NewBornBaby;
