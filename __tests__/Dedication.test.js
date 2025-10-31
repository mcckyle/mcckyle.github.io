//Filename: Dedication.test.js
//Author: Kyle McColgan
//Date: 28 October 2025
//Description: This file contains the Jest unit tests for the personal React project dedication section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dedication from '../src/components/Dedication/Dedication.jsx';

describe('Dedication component', () => {
  beforeEach(() => {
    render(<Dedication />);
  });

  //Test #1
  it('renders the Dedication section.', () => {
    const section = screen.getByRole('region', { name: /Dedication/i });
    expect(section).toBeInTheDocument();
  });

  //Test #2
  it('renders the heading "Dedication".', () => {
    const heading = screen.getByRole('heading', { name: /Dedication/i });
    expect(heading).toBeInTheDocument();
  });

  //Test #3
  it('renders the section with the correct role.', () => {
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('id', 'dedication');
  });

  //Test #4
  it('contains two paragraphs in total.', () => {
    const paragraphs = screen.getAllByRole('paragraph');
    expect(paragraphs).toHaveLength(2);
  });

  //Test #5
  it('renders the section with a <div> element.', () => {
    const section = screen.getByRole('region');
    expect(section.tagName).toBe('DIV');
  });

  //Test #6
  it('does not render any unexpected elements within the section.', () => {
    const section = screen.getByRole('region');
    const invalidElements = section.querySelectorAll('script, style');
    expect(invalidElements).toHaveLength(0);
  });

  //Test #7
  it('renders the section with the correct ARIA role of "region".', () => {
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();  // This verifies that the section has the implicit role "region".
  });

  //Test #8
  it('does not render empty <p> elements.', () => {
    const paragraphs = screen.getAllByRole('paragraph');
    paragraphs.forEach(paragraph => {
      expect(paragraph.textContent).not.toBe('');
    });
  });

  //Test #9
  it('renders the section with a valid aria-label.', () => {
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-labelledby', 'dedication-title');
  });

  //Test #10
  it('matches the snapshot of the Dedication section.', () => {
    const { asFragment } = render(<Dedication />);
    expect(asFragment()).toMatchSnapshot();
  });
});
