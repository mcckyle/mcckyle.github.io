//Filename: Experience.test.jsx
//Author: Kyle McColgan
//Date: 31 October 2026
//Description: This file contains the Vitest unit tests for the Experience component.

import React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Experience from "../src/components/Experience/Experience.jsx";

const EXPECTED_EXPERIENCES = [
    {
        role: "IT System Engineer",
        company: "Primary Systems",
        start: "2023-05",
        end: "2023-09",
        startLabel: "May 2023",
        endLabel: "September 2023",
    },
    {
        role: "Software Engineer",
        company: "Walmart",
        start: "2021-07",
        end: "2022-10",
        startLabel: "July 2021",
        endLabel: "October 2022",
    },
];

describe("Experience component", () => {
    beforeEach(() => {
        render(<Experience />);
    });

    //Test #1
    it("renders an accessible Experience heading", () => {
        const heading = screen.getByRole("heading", { level: 2, name: "Experience" });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveAttribute("id", "experience-title");
    });

    //Test #2
    it("renders a descriptive section introduction", () => {
        expect(screen.getByText(/professional experience building and supporting reliable software and technology systems/i)).toBeInTheDocument();
    });

    //Test #3
    it("renders an ordered employment list associated with its heading", () => {
        const heading = screen.getByRole("heading", { level: 2, name: "Experience" });
        const list = screen.getByRole("list", { name: "Experience" });
        expect(list.tagName).toBe("OL");
        expect(list).toHaveAttribute("aria-labelledby", heading.id);
    });

    //Test #4
    it("renders every expected employment record", () => {
        const entries = screen.getAllByRole("listitem");
        expect(entries).toHaveLength(EXPECTED_EXPERIENCES.length);
    });

    //Test #5
    it.each(EXPECTED_EXPERIENCES)(
        "renders $role at $company correctly",
        (experience) => {
            const article = screen.getByRole("article", {
                name: experience.role,
            });

            expect(article).toBeInTheDocument();

            expect(
                within(article).getByRole("heading", {
                    level: 3,
                    name: experience.role,
                })
            ).toBeInTheDocument();

            expect(
                within(article).getByText(experience.company)
            ).toBeInTheDocument();
        }
    );

    //Test #6
    it("preseves the intended reverse-chronological employment order", () => {
        const entries = screen.getAllByRole("listitem");
        expect(entries).toHaveLength(2);

        expect(
            within(entries[0]).getByRole("heading", {
                level: 3,
                name: "IT System Engineer",
            })
        ).toBeInTheDocument();

        expect(
            within(entries[1]).getByRole("heading", {
                level: 3,
                name: "Software Engineer",
            })
        ).toBeInTheDocument();
    });

    //Test #7
    it.each(EXPECTED_EXPERIENCES)(
        "renders valid machine-readable dates for $company",
        (experience) => {
            const article = screen.getByRole("article", {
                name: experience.role,
            });

            const dates = within(article).getAllByRole("time");

            expect(dates).toHaveLength(2);

            expect(dates[0]).toHaveAttribute("datetime", experience.start);
            expect(dates[0]).toHaveTextContent(experience.startLabel);
            expect(dates[1]).toHaveAttribute("datetime", experience.end);
            expect(dates[1]).toHaveTextContent(experience.endLabel);
        }
    );

    //Test #8
    it.each(EXPECTED_EXPERIENCES)(
        "provides an accessible employment period for $company",
        (experience) => {
            const article = screen.getByRole("article", {
                name: experience.role,
            });

            expect(
                within(article).getByLabelText(
                    `${experience.startLabel} to ${experience.endLabel}`
                )
            ).toBeInTheDocument();
        }
    );

    //Test #9
    it("provides a descriptive accessible name for every employment article", () => {
        EXPECTED_EXPERIENCES.forEach(({ role }) => {
            expect(
                screen.getByRole("article", { name: role })
        ).toBeInTheDocument();
      });
    });

    //Test #10
    it("hides decorative timeline markers from assistive technology", () => {
        const markers = document.querySelectorAll(".experience-marker");
        expect(markers).toHaveLength(EXPECTED_EXPERIENCES.length);
        markers.forEach((marker) => {
            expect(marker).toHaveAttribute("aria-hidden", "true");
        });
    });

    it("renders no empty employment entries", () => {
        const entries = screen.getAllByRole("listitem");
        entries.forEach((entry) => {
            expect(entry).not.toBeEmptyDOMElement();
            expect(within(entry).getByRole("article")).toBeInTheDocument();
        });
    });
});
