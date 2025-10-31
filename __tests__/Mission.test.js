//Filename: Mission.test.js
//Author: Kyle McColgan
//Date: 28 October 2025
//Description: This file contains the Jest unit tests for the personal React project mission section.

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
        const section = screen.getByRole('region', { name: /Mission Statement/i });
        expect(section).toBeInTheDocument();
    });

    //Test #2
    it('renders the section title correctly', () => {
        const title = screen.getByRole('heading', { level: 2 });
        expect(title).toHaveTextContent('Mission Statement');
    });

    //Test #3
    it('renders all paragraphs in the Mission section', () => {
        const paragraphs = screen.getAllByText(/I/);
        expect(paragraphs).toHaveLength(3);
    });

    //Test #4
    it('renders the first paragraph correctly', () => {
        const firstParagraph = screen.getByText(/My mission is to uplift/);
        expect(firstParagraph).toBeInTheDocument();
    });

    //Test #5
    it('renders the second paragraph correctly', () => {
        const secondParagraph = screen.getByText(/I am dedicated to supporting/);
        expect(secondParagraph).toBeInTheDocument();
    });

    //Test #6
    it('renders the third paragraph correctly', () => {
        const thirdParagraph = screen.getByText(/Driven by the evolving world of technology/);
        expect(thirdParagraph).toBeInTheDocument();
    });

    //Test #7
    it('has the correct ARIA role of "region"', () => {
        const section = screen.getByRole('region', { name: /Mission Statement/i });
        expect(section).toBeInTheDocument();
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
