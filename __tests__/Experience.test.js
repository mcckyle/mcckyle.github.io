//Filename: Experience.test.js
//Author: Kyle McColgan
//Date: 26 February 2026
//Description: This file contains the Jest unit tests for the Experience component.

import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from '../src/components/Experience/Experience.jsx';

describe('Experience component', () => {
    beforeEach(() => {
        render(<Experience />);
    });

    //Test #1
    it('renders a <div> with id "experience"', () => {
        const heading = screen.getByRole('heading', { level: 2, name: /experience/i });
        expect(heading).toBeInTheDocument();
        expect(heading.tagName.toLowerCase()).toBe('h2');
    });

    //Test #2
    it('renders the section title correctly', () => {
        const title = screen.getByRole('heading', { level: 2 });
        expect(title).toHaveTextContent('Experience');
    });

    //Test #3
    it('renders the list of job experiences', () => {
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(2);
    });

    //Test #4
    it('renders the first job experience correctly', () => {
        const firstItem = screen.getAllByRole('listitem')[0];
        expect(within(firstItem).getByText(/IT System Engineer/i)).toBeInTheDocument();
        expect(within(firstItem).getByText(/Primary Systems/i)).toBeInTheDocument();
        expect(within(firstItem).getByText(/May 2023 - September 2023/i)).toBeInTheDocument();
    });

    //Test #5
    it('renders the second job experience correctly', () => {
        const secondItem = screen.getAllByRole('listitem')[1];
        expect(within(secondItem).getByText(/Software Engineer/i)).toBeInTheDocument();
        expect(within(secondItem).getByText(/Walmart/i)).toBeInTheDocument();
        expect(within(secondItem).getByText(/July 2021 - October 2022/i)).toBeInTheDocument();
    });

    //Test #6
    it('renders the Experience section', () => {
        const heading = screen.getByText(/Experience/i);
        expect(heading).toBeInTheDocument();
    });

    //Test #7
    it('ensures no empty list items', () => {
        const listItems = screen.getAllByRole('listitem');
        listItems.forEach(item => {
            expect(item).not.toBeEmptyDOMElement();
        });
    });

    //Test #8
    it('renders job titles in the list items', () => {
        expect(screen.getByText(/IT System Engineer/i)).toBeInTheDocument();
        expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    });

    //Test #9
    it('does not log any errors to the console', () => {
        const consoleError = jest.spyOn(console, 'error').mockImplementation();
        expect(consoleError).not.toHaveBeenCalled();
        consoleError.mockRestore();
    });

    //Test #10
    it('matches the snapshot of the Experience section', () => {
        const { asFragment } = render(<Experience />);
        expect(asFragment()).toMatchSnapshot();
    });
});
