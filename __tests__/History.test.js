// __tests__/History.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import History from '../src/components/History';

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
    const firstJob = screen.getByText('Primary Systems, IT System Engineer, June 2022 - September 2022');
    expect(firstJob).toBeInTheDocument();
});

it('renders the second job experience correctly', () => {
    render(<History />);
    const secondJob = screen.getByText('Walmart, Software Engineer, July 2021 - October 2022');
    expect(secondJob).toBeInTheDocument();
});

it('has the correct ARIA role of "region"', () => {
    render(<History />);
    const section = screen.getByRole('region', { name: /Professional History/i });
    expect(section).toBeInTheDocument();
});

it('does not log any errors to the console', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    render(<History />);
    expect(consoleError).not.toHaveBeenCalled();
});

it('ensures no empty list items', () => {
    render(<History />);
    const listItems = screen.getAllByRole('listitem');
    listItems.forEach(item => {
        expect(item).not.toBeEmptyDOMElement();
    });
});

it('matches the snapshot of the History section', () => {
    const { asFragment } = render(<History />);
    expect(asFragment()).toMatchSnapshot();
});

it('renders job titles in the list items', () => {
    render(<History />);
    const firstJobTitle = screen.getByText(/IT System Engineer/i);
    const secondJobTitle = screen.getByText(/Software Engineer/i);
    expect(firstJobTitle).toBeInTheDocument();
    expect(secondJobTitle).toBeInTheDocument();
});
