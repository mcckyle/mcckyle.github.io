//Filename: Header.test.js
//Author: Kyle McColgan
//Date: 18 December 2025
//Description: This file contains the Jest unit tests for the personal React website header section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../src/components/Header/Header.jsx';

describe('Header Component', () => {
    beforeEach(() => {
        render(<Header />);
    });

    //Test #1
    it('renders the header with the correct title', () => {
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toHaveTextContent('Kyle D. McColgan');
    });

    //Test #2
    it('renders the header with the correct subtitle', () => {
        const subtitle = screen.getByText(/Technology Professional/i);
        expect(subtitle).toBeInTheDocument();
    });

    //Test #3
    it('renders the header image', () => {
        const image = screen.getByAltText('Portrait of Kyle D. McColgan.');
        expect(image).toBeInTheDocument();
    });

    //Test #4
    it('has the correct image source', () => {
        const image = screen.getByAltText('Portrait of Kyle D. McColgan.');
        expect(image).toHaveAttribute('src', 'test-file-stub');
    });

    //Test #5
    it('has the correct alt text for the image', () => {
        const image = screen.getByAltText('Portrait of Kyle D. McColgan.');
        expect(image).toHaveAttribute('alt', 'Portrait of Kyle D. McColgan.');
    });

    //Test #6
    it('renders the image with the correct class', () => {
        const image = screen.getByAltText('Portrait of Kyle D. McColgan.');
        expect(image).toHaveClass('header-img');
    });

    //Test #7
    it('renders the header element', () => {
        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();
    });

    //Test #8
    it('does not log any errors to the console', () => {
        const consoleError = jest.spyOn(console, 'error').mockImplementation();
        expect(consoleError).not.toHaveBeenCalled();
    });

    //Test #9
    it('ensures the header is not empty', () => {
        const header = screen.getByRole('banner');
        expect(header).not.toBeEmptyDOMElement();
    });

    //Test #10
    it('matches the snapshot', () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});
