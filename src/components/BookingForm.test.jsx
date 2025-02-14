import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { test, expect, vi } from "vitest";

test("Renders the BookingForm heading", () => {
  // Mock the form state
  const mockFormState = {
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
    availableTimes: ["17:00", "18:00", "19:00"],
  };

  // Mock dispatch function
  const mockDispatch = vi.fn();

  // Mock handleDateChange function
  const mockHandleDateChange = vi.fn();

  // Mock form submission handler
  const mockHandleSubmit = vi.fn((e) => e.preventDefault());

  // Render the component with mock props
  render(
    <BookingForm
      formState={mockFormState}
      dispatch={mockDispatch}
      handleDateChange={mockHandleDateChange}
      availableTimes={mockFormState.availableTimes}
      handleSubmit={mockHandleSubmit}
    />
  );

  // Check if the heading is rendered
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();

  // Check if the submit button exists
  const submitButton = screen.getByRole("button", { name: /Make Your Reservation/i });
  expect(submitButton).toBeInTheDocument();
  
  // Simulate entering a date
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: "2025-02-20" } });

  // Ensure the handleDateChange function was called
  expect(mockHandleDateChange).toHaveBeenCalledWith("2025-02-20");

  // Simulate clicking the submit button
  fireEvent.click(submitButton);

  // Ensure the handleSubmit function was called
  expect(mockHandleSubmit).toHaveBeenCalled();
});
