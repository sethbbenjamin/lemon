import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
    const location = useLocation();
    const formData = location.state?.formData;

    if (!formData) {
        return <p>No reservation data found.</p>;
    }

    return (
        <div>
            <h2>Reservation Confirmed!</h2>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Guests:</strong> {formData.guests}</p>
            <p><strong>Occasion:</strong> {formData.occasion}</p>
        </div>
    );
};

export default ConfirmedBooking;
