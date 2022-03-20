import React, { useEffect, useState } from 'react'


function Link() {

    const [backendData, setBackendData] = useState('');
    const [url, setUrl] = useState('');

    function HandleSubmit(){
      
        useEffect(() => {
          fetch("/submit", {
            headers: {
                "Content-Type": "application/json",
            body: JSON.stringify(url)
          }}).then(
            response => response.json()
          ).then(
            data => {
              setBackendData(data)
            }
            )
        })
    }

    return (
        <div className="App">
            <input className="url-input" type="text" placeholder="enter listing url..." defaultValue={url} onChange={url => setUrl(url)}/> 
            <div className="url">
                <button id="save_listing" type="button" className="state-save" onClick={ HandleSubmit }>NOTIFY ME</button>
            </div>
            {(typeof backendData.images === 'undefined') ? (
                <p></p>
            ): (
                backendData.images.map((image, i) => (
                    <p key={i}>{image}</p>
                )
                )
            )
            }
        </div>
    );
}

export default Link