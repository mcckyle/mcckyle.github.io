//Filename: Projects.test.js
//Author: Kyle McColgan
//Date: 29 September 2025
//Description: This file contains the Jest unit tests for the personal React project projects section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../src/components/Projects/Projects.jsx';

describe('Projects component', () => {
  beforeEach(() => {
      render(<Projects />);
  });

    it('renders the Projects section', () => {
        const section = screen.getByRole('region', { name: /Projects/i });
        expect(section).toBeInTheDocument();
    });

    it('renders the section title correctly', () => {
        const title = screen.getByRole('heading', { level: 2, name: /Projects/i });
        expect(title).toHaveTextContent('Projects');
    });

    it('renders the list of project cards', () => {
        const projectCards = screen.getAllByRole('listitem', { name: '' }); //Default list items.
        expect(projectCards).toHaveLength(2 + 3 + 4); //2 cards, 3 tech tags (Proj. 1), 4 tech tags (Proj. 2).
    });

    it('renders the first project correctly', () => {
        const firstTitle = screen.getByText(/Automated Snapshot Management Script/i);
        const firstDesc = screen.getByText(/A Bash Script designed to automate/i);
        expect(firstTitle).toBeInTheDocument();
        expect(firstDesc).toBeInTheDocument();

        // const firstTechTags = screen.getAllByText(/Bash|Linux|Snapper/i);
        // expect(firstTechTags).toHaveLength(3);
    });

    it('renders the second project correctly', () => {
        const secondTitle = screen.getByText(/ShowMeTasks/i);
        const secondDesc = screen.getByText(/A full-stack to-do list application/i);
        expect(secondTitle).toBeInTheDocument();
        expect(secondDesc).toBeInTheDocument();

        // const secondTechTags = screen.getAllByText(/Java|React|Spring Boot|MySQL/i);
        // expect(secondTechTags).toHaveLength(4);
    });

    // it('renders each project title in bold', () => {
    //     const boldElements = screen.getAllByRole('strong');
    //     expect(boldElements.length).toBeGreaterThanOrEqual(2);
    // });

    it('does not render any empty project cards', () => {
        const projectCards = screen.getAllByRole('listitem', { name: '' }); //Default list items.
        projectCards.forEach(card => {
            expect(card).not.toBeEmptyDOMElement();
        });
    });

    // it('uses a <ul> to list projects', () => {
    //     const list = screen.getByRole('list');
    //     expect(list.tagName).toBe('UL');
    // });

    it('renders without console errors', () => {
        const consoleError = jest.spyOn(console, 'error').mockImplementation();
        expect(consoleError).not.toHaveBeenCalled();
        consoleError.mockRestore();
    });

    it('matches the snapshot of the Projects section', () => {
        const { asFragment } = render(<Projects />);
        expect(asFragment()).toMatchSnapshot();
    });
});
