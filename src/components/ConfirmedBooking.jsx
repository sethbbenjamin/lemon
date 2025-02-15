import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
    const location = useLocation();
    const formData = location.state?.formData || {};

    // Convert back to Date object
    const reservationDate = new Date(formData.date);

    return (
        <div>
            <h2>Reservation Confirmed!</h2>
            <p>
                Reservation: <strong>{reservationDate.toLocaleDateString()}</strong> at <strong>{formData.time}</strong> for <strong>{formData.guests}</strong> guests.
            </p>
        </div>
    );
}

export default ConfirmedBooking;
