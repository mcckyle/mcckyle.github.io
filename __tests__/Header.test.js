//Filename: Header.test.js
//Author: Kyle McColgan
//Date: 28 August 2025
//Description: This file contains the Jest unit tests for my personal website header section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../src/components/Header';

it('renders the header with the correct title', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Kyle D. McColgan');
});

it('renders the header with the correct subtitle', () => {
    render(<Header />);
    const subtitle = screen.getByRole('heading', { level: 2 });
    expect(subtitle).toHaveTextContent('Technology Professional');
});

it('renders the header image', () => {
    render(<Header />);
    const image = screen.getByAltText('Kyle at the beach.');
    expect(image).toBeInTheDocument();
});

it('has the correct image source', () => {
    render(<Header />);
    const image = screen.getByAltText('Kyle at the beach.');
    expect(image).toHaveAttribute('src', 'test-file-stub');
});

it('has the correct alt text for the image', () => {
    render(<Header />);
    const image = screen.getByAltText('Kyle at the beach.');
    expect(image).toHaveAttribute('alt', 'Kyle at the beach.');
});

it('renders the image with the correct class', () => {
    render(<Header />);
    const image = screen.getByAltText('Kyle at the beach.');
    expect(image).toHaveClass('header-img');
});

it('renders the header element', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
});

it('does not log any errors to the console', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    render(<Header />);
    expect(consoleError).not.toHaveBeenCalled();
});

it('ensures the header is not empty', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).not.toBeEmptyDOMElement();
});

it('matches the snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
});
