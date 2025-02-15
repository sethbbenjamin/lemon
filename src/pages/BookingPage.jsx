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
    default:
      return state;
  }
};

// const initializeTimes = () => ({
//   date: "",
//   time: "",
//   guests: 1,
//   occasion: "Birthday",
//   availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
// });

const initializeTimes = () => {
  const today = new Date();

  // Check if fetchAPI is available
  if (typeof fetchAPI === "function") {
    return {
      date: today,
      time: "",
      guests: 1,
      occasion: "Birthday",
      availableTimes: fetchAPI(today),
    };
  } else {
    console.error("fetchAPI function is not available.");
    return {
      date: today,
      time: "",
      guests: 1,
      occasion: "Birthday",
      availableTimes: [], // Fallback empty array
    };
  }
};


// const updateTimes = (date) => {
//   return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Same times for now
// };


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
    dispatch({ type: "SET_DATE", payload: newDate });
    dispatch({ type: "SET_AVAILABLE_TIMES", payload: updateTimes(newDate) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof submitAPI === "function") {
      const success = submitAPI(formState);

      if (success) {
        // alert(
        //   `Reservation confirmed: ${formState.guests} guests on ${formState.date} at ${formState.time} for a ${formState.occasion}!`
        // );

        navigate("/confirmed", { state: { formData: formState } });


      } else {
        alert("Reservation failed. Please try again.");
      }
    } else {
      console.error("submitAPI function is not available.");
      alert("Error: API is not loaded.");
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
    </div>
  );
}

export default BookingPage;
