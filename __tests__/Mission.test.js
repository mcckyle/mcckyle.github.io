//Filename: Mission.test.js
//Author: Kyle McColgan
//Date: 29 September 2025
//Description: This file contains the Jest unit tests for my personal website mission section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mission from '../src/components/Mission/Mission.jsx';

it('renders the Mission section', () => {
    render(<Mission />);
    const section = screen.getByRole('region', { name: /Mission Statement/i });
    expect(section).toBeInTheDocument();
});

it('renders the section title correctly', () => {
    render(<Mission />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Mission Statement');
});

it('renders all paragraphs in the Mission section', () => {
    render(<Mission />);
    const paragraphs = screen.getAllByText(/I/);
    expect(paragraphs).toHaveLength(3);
});

it('renders the first paragraph correctly', () => {
    render(<Mission />);
    const firstParagraph = screen.getByText(/My mission is to uplift/);
    expect(firstParagraph).toBeInTheDocument();
});

it('renders the second paragraph correctly', () => {
    render(<Mission />);
    const secondParagraph = screen.getByText(/I am dedicated to supporting/);
    expect(secondParagraph).toBeInTheDocument();
});

it('renders the third paragraph correctly', () => {
    render(<Mission />);
    const thirdParagraph = screen.getByText(/Driven by the evolving world of technology/);
    expect(thirdParagraph).toBeInTheDocument();
});

it('has the correct ARIA role of "region"', () => {
    render(<Mission />);
    const section = screen.getByRole('region', { name: /Mission Statement/i });
    expect(section).toBeInTheDocument();
});

it('matches the snapshot of the Mission section', () => {
    const { asFragment } = render(<Mission />);
    expect(asFragment()).toMatchSnapshot();
});

it('ensures there are no empty paragraphs', () => {
    render(<Mission />);
    const paragraphs = screen.getAllByText(/I/);
    paragraphs.forEach(paragraph => {
        expect(paragraph).not.toBeEmptyDOMElement();
    });
});

it('does not log any errors to the console', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    render(<Mission />);
    expect(consoleError).not.toHaveBeenCalled();
});

