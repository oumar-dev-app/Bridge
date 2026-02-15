import React from 'react'

function AdressMap() {
    return (
        <div className="text-white p-6">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.5166617285718!2d-7.999264271163937!3d12.548146527435433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cf3950235305%3A0x42f2f0b45d6fda1e!2sBridge%20Mali!5e0!3m2!1sfr!2sml!4v1771177574429!5m2!1sfr!2sml"
                width="120%"
                height="272"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg w-auto"
            ></iframe>
        </div>
    )
}

export default AdressMap;


  