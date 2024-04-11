import React from 'react';

function Vitals() {

    return(
        <div>
            <h2>Vitals</h2>
                <p>Heart Rate: </p>
                    <input placeholder='Beats per Minute' />
                <p>Temperature: </p>
                    <input placeholder='Degrees Farenheit' />
                <p>Respiratory Rate:</p>
                    <input placeholder='Breaths per Minute' />
                <p>Repiratory Effort:</p>
                    <button>Normal</button>
                    <button>Mild</button>
                    <button>Moderate</button>
                    <button>Severe</button>

                <p>Capillary Refill Time:</p>
                    <button>Less than 1 second</button>
                    <button>1 to 2 seconds</button>
                    <button>Greater than 2 seconds</button>

                <p>Mucous Membranes:</p>
                    <button>Pink</button>
                    <button>Pale Pink</button>
                    <button>Pale</button>
                    <button>Cyanotic</button>
                    <button>Muddy</button>
                    <button>Injected</button>

                <p>Is this patient anxious?</p>
                    <button>Yes</button>
                    <button>No</button>
        </div>
    )
}

export default Vitals;