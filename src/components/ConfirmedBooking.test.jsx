import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";
import { expect } from "vitest";

test("confirmed booking page displays correct reservation details", () => {
    const initialEntry = {
        pathname: "/confirmed",
        state: {
            formData: {
                date: new Date(),
                time: "18:00",
                guests: 4,
                occasion: "Birthday",
            },
        },
    };

    render(
        <MemoryRouter initialEntries={[initialEntry]}>
            <Routes>
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText("18:00")).toBeInTheDocument();
    expect(screen.getByText("4 guests")).toBeInTheDocument();
});
