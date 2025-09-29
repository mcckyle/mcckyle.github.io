//Filename: AboutMe.test.js
//Author: Kyle McColgan
//Date: 29 September 2025
//Description: This file contains the Jest unit tests for the personal React project about me section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from '../src/components/AboutMe/AboutMe.jsx';

describe('AboutMe Component', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });

  it('renders a <section> with id "about-me"', () => {
    const section = screen.getByRole('region', { name: /about me/i });
    expect(section).toBeInTheDocument();
  });

  it('renders a heading with text "About Me"', () => {
    const heading = screen.getByRole('heading', { level: 2, name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the first paragraph introducing Kyle', () => {
    expect(screen.getByText(/Hello! My name is/i)).toBeInTheDocument();
  });

  it('renders the About Me section', () => {
    const section = screen.getByRole('region', { name: /about me/i });
    expect(section).toBeInTheDocument();
  });

  it('contains a level 2 heading', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('contains at least one paragraph of text', () => {
    const paragraphs = screen.getAllByText((_, element) => element.tagName.toLowerCase() === 'p');
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  it('does not render any links', () => {
    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(0);
  });

  it('renders semantic HTML tags', () => {
    const section = screen.getByRole('region', { name: /about me/i });
    expect(section.tagName.toLowerCase()).toBe('section');
  });

  it('contains exactly 3 paragraph elements', () => {
    const paragraphs = screen.getByRole('region', { name: /about me/i }).querySelectorAll('p');
    expect(paragraphs.length).toBe(3);
  });

  it('contains a closing line inviting others to connect', () => {
    expect(screen.getByText(/If anything here resonates, I’d be thrilled to connect/i)).toBeInTheDocument();
  });
});
