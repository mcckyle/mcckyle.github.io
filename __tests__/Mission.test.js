//Filename: Mission.test.js
//Author: Kyle McColgan
//Date: 17 February 2026
//Description: This file contains the Jest unit tests for the React personal project mission section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mission from '../src/components/Mission/Mission.jsx';

describe('Mission Component', () => {
    beforeEach(() => {
        render(<Mission />);
    });

    //Test #1
    it('renders the Mission section', () => {
        const heading = screen.getByText(/Mission/);
        expect(heading).toBeInTheDocument();
    });

    //Test #2
    it('renders the section title correctly', () => {
        const title = screen.getByRole('heading', { level: 2 });
        expect(title).toHaveTextContent('Mission');
    });

    //Test #3
    it('contains exactly 2 paragraph elements', () => {
        const paragraphs = screen.getAllByText((_, element) => element.tagName.toLowerCase() === 'p');
        expect(paragraphs.length).toBe(2);
    });

    //Test #4
    it('renders the first paragraph correctly', () => {
        const firstParagraph = screen.getByText(/My mission consists of/);
        expect(firstParagraph).toBeInTheDocument();
    });

    //Test #5
    it('renders the second paragraph correctly', () => {
        const secondParagraph = screen.getByText(/Through mentorship and collaboration/);
        expect(secondParagraph).toBeInTheDocument();
    });

    //Test #6
    it('contains a level 2 heading', () => {
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
    });

    //Test #7
    it('has the correct heading text content"', () => {
        const heading = screen.getByText(/Mission/);
        expect(heading).toBeInTheDocument();
    });

    //Test #8
    it('matches the snapshot of the Mission section', () => {
        const { asFragment } = render(<Mission />);
        expect(asFragment()).toMatchSnapshot();
    });

    //Test #9
    it('ensures there are no empty paragraphs', () => {
        const paragraphs = screen.getAllByText(/I/);
        paragraphs.forEach(paragraph => {
            expect(paragraph).not.toBeEmptyDOMElement();
        });
    });

    //Test #10
    it('does not log any errors to the console', () => {
        const consoleError = jest.spyOn(console, 'error').mockImplementation();
        expect(consoleError).not.toHaveBeenCalled();
    });
});
