import { useReducer } from "react";
import BookingForm from "../components/BookingForm";

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
    default:
      return state;
  }
};

// Function to initialize form state, including availableTimes
const initializeTimes = () => ({
  date: "",
  time: "",
  guests: 1,
  occasion: "Birthday",
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"], // Default times
});

// Function to update availableTimes based on the selected date
const updateTimes = (date) => {
  console.log("Updating available times for date:", date);
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Same times for now
};

export function Reservation() {
  // Initialize form state using useReducer
  const [formState, dispatch] = useReducer(formReducer, initializeTimes());

  // Handler to update date and available times
  const handleDateChange = (newDate) => {
    dispatch({ type: "SET_DATE", payload: newDate });
    dispatch({ type: "SET_AVAILABLE_TIMES", payload: updateTimes(newDate) });
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Reservation confirmed: ${formState.guests} guests on ${formState.date} at ${formState.time} for a ${formState.occasion}!`
    );
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <BookingForm
        formState={formState}
        dispatch={dispatch}
        handleDateChange={handleDateChange} // Pass new date handler
        availableTimes={formState.availableTimes}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Reservation;
