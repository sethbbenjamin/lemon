import "./bookingform.css";

function BookingForm({ formState, dispatch, handleDateChange, availableTimes, handleSubmit }) {

  const isFormValid = (formState) => {

    if (formState.date instanceof Date && formState.time && Number(formState.guests) > 0 && formState.occasion) { return true; }
    return false;
  };


  return (
    <>
      <h1>Book Now</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          required
          value={formState.date instanceof Date ? formState.date.toISOString().split("T")[0] : ""}
          onChange={(e) => handleDateChange(e.target.value)}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={formState.time}
          required
          onChange={(e) => dispatch({ type: "SET_TIME", payload: e.target.value })}
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          required
          value={formState.guests}
          onChange={(e) => dispatch({ type: "SET_GUESTS", payload: Number(e.target.value) })}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formState.occasion}
          onChange={(e) => dispatch({ type: "SET_OCCASION", payload: e.target.value })}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Party</option>
        </select>

        <input type="submit" value="Make Your Reservation" disabled={!isFormValid(formState)} />
      </form>
    </>
  );
}

export default BookingForm;
