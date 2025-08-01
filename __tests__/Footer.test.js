//Filename: Footer.test.js
//Author: Kyle McColgan
//Date: 31 July 2025
//Description: This file contains the Jest unit tests for the website Footer component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../src/components/Footer';

describe('Footer Component', () => {

  //Test #1
  test('renders without crashing', () => {
    render(<Footer />);
    // No assertion necessary; render should not be thrown...
  });

  //Test #2
  test('renders a footer element with the correct role.', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer.tagName.toLowerCase()).toBe('footer');
  });

  //Test #3
  test('footer contains a paragraph with the correct class.', () => {
    render(<Footer />);
    const paragraph = screen.getByText(/Kyle McColgan/i);
    expect(paragraph).toHaveClass('footer-text');
  });

  //Test #4
  test('footer displays the current year dynamically.', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  //Test #5
  test('text content includes the word "August" and an emoji.', () => {
    render(<Footer />);
    const text = screen.getByText(/August/i);
    expect(text.textContent).toMatch(/🌻/);
  });

  //Test #6
  // test('footer text includes the © symbol.', () => {
  //   render(<Footer />);
  //   const text = screen.getByText(/©/);
  //   expect(text).toBeInTheDocument();
  // });

  //Test #7
  test('footer only contains one child element (the paragraph).', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer.childElementCount).toBe(1);
  });

  //Test #8
  test('text content includes a date', () => {
    render(<Footer />);
    const text = screen.getByText(/2025/);
    expect(text).toBeInTheDocument();
  });

  //Test #9
  test('footer has the correct class for styling.', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('site-footer');
  });

  //Test #10
  test('footer matches the snapshot.', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
