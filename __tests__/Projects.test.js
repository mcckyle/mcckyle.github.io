// __tests__/Projects.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../src/components/Projects';

it('renders the Projects section', () => {
    render(<Projects />);
    const section = screen.getByRole('region', { name: /Projects/i });
    expect(section).toBeInTheDocument();
});

it('renders the section heading "Projects"', () => {
    render(<Projects />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Projects');
});

it('renders two project list items', () => {
    render(<Projects />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
});

it('renders the Automated Snapshot Management Script project', () => {
    render(<Projects />);
    const snapshotProject = screen.getByText(/Automated Snapshot Management Script/);
    expect(snapshotProject).toBeInTheDocument();
});

it('renders the ShowMeTasks project', () => {
    render(<Projects />);
    const showMeTasksTitle = screen.getByText(/^ShowMeTasks:/);
    expect(showMeTasksTitle).toBeInTheDocument();
});

it('renders each project title in bold', () => {
    render(<Projects />);
    const boldElements = screen.getAllByRole('strong');
    expect(boldElements.length).toBeGreaterThanOrEqual(2);
});

it('matches the snapshot of the Projects section', () => {
    const { asFragment } = render(<Projects />);
    expect(asFragment()).toMatchSnapshot();
});

it('does not render any empty list items', () => {
    render(<Projects />);
    const listItems = screen.getAllByRole('listitem');
    listItems.forEach(item => {
        expect(item).not.toBeEmptyDOMElement();
    });
});

it('uses a <ul> to list projects', () => {
    render(<Projects />);
    const list = screen.getByRole('list');
    expect(list.tagName).toBe('UL');
});

it('renders without console errors', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    render(<Projects />);
    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
});
