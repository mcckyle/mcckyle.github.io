//Filename: AboutMe.test.js
//Author: Kyle McColgan
//Date: 29 December 2025
//Description: This file contains the Jest unit tests for the personal React project about me section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from '../src/components/AboutMe/AboutMe.jsx';

describe('AboutMe Component', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });

  //Test #1
  it('renders a <div> with id "about-me"', () => {
    const div = screen.getByRole('region', { name: /about me/i });
    expect(div).toBeInTheDocument();
  });

  //Test #2
  it('renders a heading with text "About Me"', () => {
    const heading = screen.getByRole('heading', { level: 2, name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  //Test #3
  it('renders the first paragraph with introduction', () => {
    expect(screen.getByText(/Hello! I'm/i)).toBeInTheDocument();
  });

  //Test #4
  it('renders the About Me section', () => {
    const div = screen.getByRole('region', { name: /about me/i });
    expect(div).toBeInTheDocument();
  });

  //Test #5
  it('contains a level 2 heading', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  //Test #6
  it('contains at least one paragraph of text', () => {
    const paragraphs = screen.getAllByText((_, element) => element.tagName.toLowerCase() === 'p');
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  //Test #7
  it('does not render any links', () => {
    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(0);
  });

  //Test #8
  it('renders semantic HTML tags', () => {
    const div = screen.getByRole('region', { name: /about me/i });
    expect(div.tagName.toLowerCase()).toBe('div');
  });

  //Test #9
  it('contains exactly 4 paragraph elements', () => {
    const paragraphs = screen.getByRole('region', { name: /about me/i }).querySelectorAll('p');
    expect(paragraphs.length).toBe(4);
  });

  //Test #10
  it('contains a closing line', () => {
    expect(screen.getByText(/I'm always open to learning something new./i)).toBeInTheDocument();
  });
});
