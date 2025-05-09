// __tests__/Skills.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../src/components/Skills';

it('renders the Skills section', () => {
    render(<Skills />);
    const section = screen.getByRole('region', { name: /Skills/i });
    expect(section).toBeInTheDocument();
});

it('renders the Skills heading', () => {
    render(<Skills />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Skills');
});

it('renders four skill list items', () => {
    render(<Skills />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
});

it('renders the Application Development skill category', () => {
    render(<Skills />);
    const category = screen.getByText(/Application Development:/);
    expect(category).toBeInTheDocument();
});

it('renders the Frontend Engineering skill category', () => {
    render(<Skills />);
    const category = screen.getByText(/Frontend Engineering:/);
    expect(category).toBeInTheDocument();
});

it('renders all skill categories in bold', () => {
    render(<Skills />);
    const boldElements = screen.getAllByRole('strong');
    expect(boldElements).toHaveLength(4);
});

it('renders the skills list as a <ul>', () => {
    render(<Skills />);
    const list = screen.getByRole('list');
    expect(list.tagName).toBe('UL');
});

it('does not render any empty <li> elements', () => {
    render(<Skills />);
    const items = screen.getAllByRole('listitem');
    items.forEach(item => expect(item).not.toBeEmptyDOMElement());
});

it('matches the snapshot of the Skills section', () => {
    const { asFragment } = render(<Skills />);
    expect(asFragment()).toMatchSnapshot();
});

it('renders without console errors', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Skills />);
    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
});
