import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { test, expect, vi, beforeEach } from "vitest";

// Mock fetchAPI function
vi.mock("../api", () => ({
  fetchAPI: vi.fn(() => ["17:00", "18:00", "19:00"]), // Mocked available times
}));

let mockFormState;
let mockDispatch;
let mockHandleDateChange;
let mockHandleSubmit;

beforeEach(() => {
  // Initialize mock state before each test
  mockFormState = {
    date: new Date(), // Ensure the date is a Date object
    time: "",
    guests: 1,
    occasion: "Birthday",
    availableTimes: ["17:00", "18:00", "19:00"],
  };

  mockDispatch = vi.fn();
  mockHandleDateChange = vi.fn();
  mockHandleSubmit = vi.fn((e) => e.preventDefault());
});

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      formState={mockFormState}
      dispatch={mockDispatch}
      handleDateChange={mockHandleDateChange}
      availableTimes={mockFormState.availableTimes}
      handleSubmit={mockHandleSubmit}
    />
  );

  // Verify heading exists
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Handles date selection and updates state", () => {
  render(
    <BookingForm
      formState={mockFormState}
      dispatch={mockDispatch}
      handleDateChange={mockHandleDateChange}
      availableTimes={mockFormState.availableTimes}
      handleSubmit={mockHandleSubmit}
    />
  );

  // Select a new date
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: "2025-02-20" } });

  // Ensure handleDateChange function is called with correct date format
  expect(mockHandleDateChange).toHaveBeenCalledWith("2025-02-20");
});

test("Handles form submission", () => {
  render(
    <BookingForm
      formState={mockFormState}
      dispatch={mockDispatch}
      handleDateChange={mockHandleDateChange}
      availableTimes={mockFormState.availableTimes}
      handleSubmit={mockHandleSubmit}
    />
  );

  // Click submit button
  const submitButton = screen.getByRole("button", { name: /Make Your Reservation/i });
  fireEvent.click(submitButton);

  // Ensure the handleSubmit function was called
  expect(mockHandleSubmit).toHaveBeenCalled();
});
