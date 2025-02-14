import React from "react";

const NavigateToStation = () => {
    const handleNavigate = () => {
        const googleMapsUrl = "https://maps.app.goo.gl/PgbkPzJ118z71z8XA";
        window.open(googleMapsUrl, "_blank");
    };

    return (
        <div className="text-center mt-5">
            <h5>Nous sommes à la station Shell Sejoumi, Sidi Hssine, Cité El Fateh</h5>
            <p className="text-muted">
                Cliquez sur le bouton ci-dessous pour ouvrir l'itinéraire vers notre station via Google Maps.
            </p>
            <button
                className="btn btn-primary mt-3"
                onClick={handleNavigate}
            >
                <i className="fas fa-map-marker-alt"></i> Obtenir un Itinéraire
            </button>
        </div>
    );
};

export default NavigateToStation;
