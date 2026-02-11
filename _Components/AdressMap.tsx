import React from 'react'

function AdressMap() {
    return (
        <div className="text-white p-6">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7789.494634104891!2d-8.031121194362667!3d12.532891493044602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cf0062e88211%3A0xc675940a8a4be6af!2sKalaban%20coura%20ACI!5e0!3m2!1sfr!2sml!4v1770194033160!5m2!1sfr!2sml"
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