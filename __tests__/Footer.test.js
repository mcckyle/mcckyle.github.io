//Filename: Footer.test.js
//Author: Kyle McColgan
//Date: 04 July 2025
//Description: Contains the Jest unit tests for the website Footer component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../src/components/Footer';

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
  });

  test('renders a footer element', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('displays the correct update text', () => {
    render(<Footer />);
    const text = screen.getByText(/July/i);
    expect(text).toBeInTheDocument();
  });

  test('contains a <p> element', () => {
    render(<Footer />);
    const p = screen.getByText(/July/i);
    expect(p.tagName.toLowerCase()).toBe('p');
  });

  test('footer is semantically correct', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer.tagName.toLowerCase()).toBe('footer');
  });

  // test('text content includes the word "Updated"', () => {
  //   render(<Footer />);
  //   expect(screen.getByText(/updated/i)).toBeTruthy();
  // });

  test('text content includes a date', () => {
    render(<Footer />);
    const text = screen.getByText(/2025/);
    expect(text).toBeInTheDocument();
  });

  test('footer only contains one child element', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer.childElementCount).toBe(1);
  });

  test('footer does not contain a link (yet)', () => {
    render(<Footer />);
    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(0);
  });

  test('footer matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
