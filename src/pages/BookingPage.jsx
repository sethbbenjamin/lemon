import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

// Reducer function to manage form state
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_TIME":
      return { ...state, time: action.payload };
    case "SET_GUESTS":
      return { ...state, guests: action.payload };
    case "SET_OCCASION":
      return { ...state, occasion: action.payload };
    case "SET_AVAILABLE_TIMES":
      return { ...state, availableTimes: action.payload };
    case "RESET_FORM":
      return initializeTimes();
    default:
      return state;
  }
};


const initializeTimes = () => {
  const today = new Date();

  // Check if fetchAPI is available
  if (typeof fetchAPI === "function") {
    return {
      date: today,
      time: "",
      guests: 0,
      occasion: "Birthday",
      availableTimes: fetchAPI(today),
    };
  } else {
    console.error("fetchAPI function is not available.");
    return {
      date: today,
      time: "",
      guests: 0,
      occasion: "Birthday",
      availableTimes: [], // Fallback empty array
    };
  }
};


const updateTimes = (date) => {
  if (typeof fetchAPI === "function") {
    const dateObj = new Date(date);
    return fetchAPI(dateObj);
  } else {
    console.error("fetchAPI function is not available.");
    return []; // Return an empty array as fallback
  }
};


export function BookingPage({ addReservation, reservations }) {
  const [formState, dispatch] = useReducer(formReducer, initializeTimes());
  const navigate = useNavigate();


  // Handler to update date and available times
  const handleDateChange = (newDate) => {
    dispatch({ type: "SET_DATE", payload: new Date(newDate) });
    dispatch({ type: "SET_AVAILABLE_TIMES", payload: updateTimes(newDate) });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof submitAPI === "function") {
      const success = submitAPI(formState);

      if (success) {



        const newReservation = {
          ...formState,
          date: formState.date.toLocaleDateString() // Convert Date object to string for storage
        };


        addReservation(newReservation);
        dispatch({ type: "RESET_FORM" });

        navigate("/confirmed", { state: { formData: formState } });


      } else {
        alert("Reservation failed. Please try again.");
      }
    } else {
      console.error("submitAPI function is not available.");
    }
  };


  return (
    <div>
      <BookingForm
        formState={formState}
        dispatch={dispatch}
        handleDateChange={handleDateChange} // Pass new date handler
        availableTimes={formState.availableTimes}
        handleSubmit={handleSubmit}
      />




      <h2>Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        <ul>
          {reservations.map((res, index) => (
            <li key={index}>
              {new Date(res.date).toLocaleDateString()} at {res.time}, {res.guests} guests - {res.occasion}
            </li>
          ))}
        </ul>
      )}




    </div>
  );
}

export default BookingPage;
