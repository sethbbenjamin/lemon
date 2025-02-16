import { render, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { test, expect, vi, beforeEach } from "vitest";

beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
});

test("App writes reservations to localStorage on startup", async () => {
    // Preload localStorage with a reservation
    const preloadedReservations = [
        { date: "2025-02-20", time: "18:00", guests: 2, occasion: "Birthday" },
    ];
    localStorage.setItem("reservations", JSON.stringify(preloadedReservations));

    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

    // Render the App wrapped in MemoryRouter for routing context.
    await act(async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
    });

    expect(setItemSpy).toHaveBeenCalledWith(
        "reservations",
        JSON.stringify(
            preloadedReservations.map((res) => ({
                ...res,
                date: new Date(res.date),
            }))
        )
    );
});
