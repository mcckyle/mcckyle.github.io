//Filename: Contact.test.js
//Author: Kyle McColgan
//Date: 18 December 2025
//Description: This file contains the Jest unit tests for the personal React project contact section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../src/components/Contact/Contact.jsx';

describe('Contact component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  //Test #1
  it('renders the Contact section', () => {
    const heading = screen.getByText(/Contact/i);
    expect(heading).toBeInTheDocument();
  });

  //Test #2
  it('renders the heading with text "Contact"', () => {
    const heading = screen.getByRole('heading', { level: 2, name: /contact/i });
    expect(heading).toBeInTheDocument();
  });

  //Test #3
  it('renders the GitHub link with correct href', () => {
    const githubLink = screen.getByRole('link', { name: /github.com\/mcckyle/i });
    expect(githubLink).toHaveAttribute('href', 'https://www.github.com/mcckyle');
  });

  //Test #4
  it('renders the LinkedIn link with correct href', () => {
    const linkedinLink = screen.getByRole('link', { name: /linkedin.com\/in\/kylemccolgan/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/kylemccolgan/');
  });

  //Test #5
  it('renders the location text content', () => {
    const location = screen.getByText(/South Saint Louis, Missouri, USA/i);
    expect(location).toBeInTheDocument();
  });

  //Test #6
  it('renders the resume link with correct text', () => {
    const resumeLink = screen.getByRole('link', { name: /View PDF/i });
    expect(resumeLink).toBeInTheDocument();
  });

  //Test #7
  it('has a resume link pointing to the PDF path', () => {
    const resumeLink = screen.getByRole('link', { name: /View PDF/i });
    expect(resumeLink).toHaveAttribute('href', '/Kyle-McColgan-Resume-May-2025.pdf');
  });

  //Test #8
  it('sets target="_blank" on the resume link', () => {
    const resumeLink = screen.getByRole('link', { name: /View PDF/i });
    expect(resumeLink).toHaveAttribute('target', '_blank');
  });

  //Test #9
  it('renders a list with four items', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });

  //Test #10
  it('renders the labels with the correct text content', () => {
    const labels = screen.getAllByText((content, element) => {
      return element.classList.contains('contact-label');
    });
    expect(labels).toHaveLength(4);
    expect(labels[0]).toHaveTextContent(/github/i);
    expect(labels[1]).toHaveTextContent(/linkedin/i);
    expect(labels[2]).toHaveTextContent(/location/i);
    expect(labels[3]).toHaveTextContent(/resume/i);
  });
});
