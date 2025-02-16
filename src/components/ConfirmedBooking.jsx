import "./confirmedbooking.css"

import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
    const location = useLocation();
    const formData = location.state?.formData || {};

    // Convert back to Date object
    const reservationDate = new Date(formData.date);

    return (
        <div>
            <h2>Confirmed!</h2>
            <ul className="confirmed-details">
                <li>{reservationDate.toLocaleDateString()}</li>
                <li>{formData.time}</li>
                <li>{formData.guests} guests</li>
            </ul>
        </div>
    );
}

export default ConfirmedBooking;
