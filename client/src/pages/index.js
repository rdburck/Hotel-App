import React, {useState, useEffect} from 'react';
import Room from '../components/Rooms';
import axios from "axios";

const Homepage = () => {

    const [rooms, setRoom] = useState([]);
    //whenever the API request is started, loading will be set to true
    const [loading, setLoading] = useState();
    //to display error on the home page
    const [error, setError] = useState();

    useEffect(() => {
        try {
            setLoading(true);
            axios.get('/api/rooms/getallrooms')
            .then((data) => {
                console.log(data);
                setRoom(data.data);
                setLoading(false);
            })
            .catch((err) => console.log(err))
        } catch(error) {
            setError(true);
            console.log(error)
            setLoading(false)
        }
    }, []);

    return (
        <div className="container">
            <div className="row center-align home"> 
                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                <h1>Error</h1>
                ) : (
                    rooms.map((room) => {
                    return (
                    <div className="col m 9">
                        <Room room={room} />
                    </div>
                    )
                    })
                    )
                }
            </div>
        </div>
    );    
}

export default Homepage;
