//Filename: Footer.test.js
//Author: Kyle McColgan
//Date: 21 March 2026
//Description: This file contains the Jest unit tests for the personal React project footer component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../src/components/Footer/Footer.jsx';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  //Test #1
  test('renders without crashing', () => {
    render(<Footer />);
    // No assertion necessary; render should not be thrown...
  });

  //Test #2
  test('renders a footer element with the correct role.', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer.tagName.toLowerCase()).toBe('footer');
  });

  //Test #3
  test('footer contains a paragraph with the correct class.', () => {
    const paragraph = screen.getByText(/Designed in Saint Louis/i);
    expect(paragraph).toHaveClass('footer-message');
  });

  //Test #4
  test('footer displays the current year dynamically.', () => {
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  //Test #5
  it('contains at least one paragraph of text', () => {
    const paragraphs = screen.getAllByText((_, element) => element.tagName.toLowerCase() === 'p');
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  //Test #6
  test('footer text includes the © symbol.', () => {
    const text = screen.getByText(/©/);
    expect(text).toBeInTheDocument();
  });

  //Test #7
  test('footer contains one inner div.', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer.childElementCount).toBe(1);
  });

  //Test #8
  test('text content includes a date', () => {
    const text = screen.getByText(/2026/);
    expect(text).toBeInTheDocument();
  });

  //Test #9
  test('footer has the correct class for styling.', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('footer');
  });

  //Test #10
  test('footer matches the snapshot.', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
