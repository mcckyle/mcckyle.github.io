//Filename: History.test.js
//Author: Kyle McColgan
//Date: 29 September 2025
//Description: This file contains the Jest unit tests for the personal React project history component.

import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import History from '../src/components/History/History.jsx';

describe('History component', () => {

    it('renders the History section', () => {
        render(<History />);
        const section = screen.getByRole('region', { name: /Professional History/i });
        expect(section).toBeInTheDocument();
    });

    it('renders the section title correctly', () => {
        render(<History />);
        const title = screen.getByRole('heading', { level: 2 });
        expect(title).toHaveTextContent('Professional History');
    });

    it('renders the list of job experiences', () => {
        render(<History />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(2);
    });

    it('renders the first job experience correctly', () => {
        render(<History />);
        const firstItem = screen.getAllByRole('listitem')[0];
        expect(within(firstItem).getByText(/IT System Engineer/i)).toBeInTheDocument();
        expect(within(firstItem).getByText(/Primary Systems/i)).toBeInTheDocument();
        expect(within(firstItem).getByText(/May 2023 - September 2023/i)).toBeInTheDocument();
    });

    it('renders the second job experience correctly', () => {
        render(<History />);
        const secondItem = screen.getAllByRole('listitem')[1];
        expect(within(secondItem).getByText(/Software Engineer/i)).toBeInTheDocument();
        expect(within(secondItem).getByText(/Walmart/i)).toBeInTheDocument();
        expect(within(secondItem).getByText(/July 2021 - October 2022/i)).toBeInTheDocument();
    });

    it('has the correct ARIA role of "region"', () => {
        render(<History />);
        const section = screen.getByRole('region', { name: /Professional History/i });
        expect(section).toBeInTheDocument();
    });

    it('ensures no empty list items', () => {
        render(<History />);
        const listItems = screen.getAllByRole('listitem');
        listItems.forEach(item => {
            expect(item).not.toBeEmptyDOMElement();
        });
    });

    it('renders job titles in the list items', () => {
        render(<History />);
        expect(screen.getByText(/IT System Engineer/i)).toBeInTheDocument();
        expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    });

    it('does not log any errors to the console', () => {
        const consoleError = jest.spyOn(console, 'error').mockImplementation();
        render(<History />);
        expect(consoleError).not.toHaveBeenCalled();
        consoleError.mockRestore();
    });

    it('matches the snapshot of the History section', () => {
        const { asFragment } = render(<History />);
        expect(asFragment()).toMatchSnapshot();
    });
});
