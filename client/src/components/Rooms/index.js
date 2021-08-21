import React from 'react';

const Room = ({room}) => {
    console.log(room, 'roomprop');
    return (
        <div className='row z-depth-5 roombox'>
            <div className='col m4'>
                <img src={room.imageurls} alt='hotel room' className='smallimg'></img>
            </div>
            <div className='col m 7'>
                <h2>{room.name}</h2>
                <p>Occupancy: {room.occupancy}</p>
                <p>Phone Number: {room.phonenumber}</p>
                <p>Type: {room.type}</p>  

                <div>
                <a class="waves-effect waves-light btn-small">View Details</a>    
                </div>    
            </div>    
        </div>
    );
};

export default Room;
