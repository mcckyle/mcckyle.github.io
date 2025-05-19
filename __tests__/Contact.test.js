// __tests__/Contact.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../src/components/Contact';

describe('Contact component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('renders the Contact section', () => {
    const section = screen.getByRole('region', { name: /Contact Information/i });
    expect(section).toBeInTheDocument();
  });

  it('renders the heading with text "Contact Information"', () => {
    const heading = screen.getByRole('heading', { level: 2, name: /contact information/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the GitHub link with correct href', () => {
    const githubLink = screen.getByRole('link', { name: /github.com\/mcckyle/i });
    expect(githubLink).toHaveAttribute('href', 'https://www.github.com/mcckyle');
  });

  it('renders the LinkedIn link with correct href', () => {
    const linkedinLink = screen.getByRole('link', { name: /linkedin.com\/in\/kylemccolgan/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/kylemccolgan/');
  });

  it('renders the location text content', () => {
    const location = screen.getByText(/south saint louis, missouri, united states/i);
    expect(location).toBeInTheDocument();
  });

  it('renders the resume anchor text', () => {
    const resumeLink = screen.getByRole('link', { name: /View my resume/i });
    expect(resumeLink).toBeInTheDocument();
  });

  it('has a resume link pointing to the PDF path', () => {
    const resumeLink = screen.getByRole('link', { name: /View my resume/i });
    expect(resumeLink).toHaveAttribute('href', '/Kyle-McColgan-Resume-May-2025.pdf');
  });

  it('sets target="_blank" on the resume link', () => {
    const resumeLink = screen.getByRole('link', { name: /View my resume/i });
    expect(resumeLink).toHaveAttribute('target', '_blank');
  });

  it('renders a list with four items', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });

  it('renders the labels in bold using <strong>', () => {
    const labels = screen.getAllByText((content, element) => {
      return element.tagName.toLowerCase() === 'strong';
    });
    expect(labels).toHaveLength(4);
    expect(labels[0]).toHaveTextContent(/github/i);
    expect(labels[1]).toHaveTextContent(/linkedin/i);
    expect(labels[2]).toHaveTextContent(/location/i);
    expect(labels[3]).toHaveTextContent(/resume\/cv/i);
  });
});
