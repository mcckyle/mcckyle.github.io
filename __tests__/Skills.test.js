//Filename: Skills.test.js
//Author: Kyle McColgan
//Date: 29 October 2025
//Description: This file contains the Jest unit tests for the React personal project skills section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../src/components/Skills/Skills.jsx';

describe('Skills Component', () => {
    beforeEach(() => {
        render(<Skills />);
    });

    //Test #1
    it('renders the Skills section', () => {
        const section = screen.getByRole('region', { name: /Skills/i });
        expect(section).toBeInTheDocument();
    });

    //Test #2
    it('renders the Skills heading', () => {
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent('Skills');
    });

    //Test #3
    it('renders four skill list items', () => {
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(4);
    });

    //Test #4
    it('renders the Application Development skill category', () => {
        const category = screen.getByText(/Application Development/);
        expect(category).toBeInTheDocument();
    });

    //Test #5
    it('renders the Frontend Engineering skill category', () => {
        const category = screen.getByText(/Frontend Engineering/);
        expect(category).toBeInTheDocument();
    });

    //Test #6
    it('renders all skill category titles as level 3 headings', () => {
        const headings = screen.getAllByRole('heading', { level: 3 });
        expect(headings).toHaveLength(4);

        headings.forEach((heading) => {
            expect(heading).toHaveClass('skills-subtitle');
        });
    });

    //Test #7
    it('renders the skills list as a <ul>', () => {
        const list = screen.getByRole('list');
        expect(list.tagName).toBe('UL');
    });

    //Test #8
    it('does not render any empty <li> elements', () => {
        const items = screen.getAllByRole('listitem');
        items.forEach(item => expect(item).not.toBeEmptyDOMElement());
    });

    //Test #9
    it('matches the snapshot of the Skills section', () => {
        const { asFragment } = render(<Skills />);
        expect(asFragment()).toMatchSnapshot();
    });

    //Test #10
    it('renders without console errors', () => {
        const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
        expect(consoleError).not.toHaveBeenCalled();
        consoleError.mockRestore();
    });
});
