import React from 'react';

function signalment () {


    return ( 
    <div>
        <h2>Signalment</h2>
            <p>Age:</p>
                <p>Select DOB or Enter Age</p>

                <p>INSERT CALENDAR HERE</p>
                
                <input placeholder='Enter Years here'/>
                <input placeholder='Enter Months here'/>
                <input placeholder='Enter Days here' />
            <p>Species:</p>
                <button>Dog</button>
                <button>Cat</button>

            <p>Gender:</p>
                <button>Male</button>
                <button>Female</button>
                <button>Male Neutered</button>
                <button>Female Spayed</button>
                <button>Unknown</button>

            <p>Breed</p>   
                <button>DSH</button>
                <button>Mixed</button>


    </div> )
}

export default signalment;