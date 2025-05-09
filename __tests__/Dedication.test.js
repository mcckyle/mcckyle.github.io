// __tests__/Dedication.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dedication from '../src/components/Dedication';

describe('Dedication component', () => {

  it('renders the Dedication section', () => {
    render(<Dedication />);
    const section = screen.getByRole('region', { name: /Dedication/i });
    expect(section).toBeInTheDocument();
  });

  it('renders the heading "Dedication"', () => {
    render(<Dedication />);
    const heading = screen.getByRole('heading', { name: /Dedication/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the section with the correct role', () => {
    render(<Dedication />);
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('id', 'dedication');
  });

  it('contains four paragraphs in total', () => {
    render(<Dedication />);
    const paragraphs = screen.getAllByRole('paragraph');
    expect(paragraphs).toHaveLength(4);
  });

  it('renders the section with a <section> element', () => {
    render(<Dedication />);
    const section = screen.getByRole('region');
    expect(section.tagName).toBe('SECTION');
  });

  it('does not render any unexpected elements within the section', () => {
    render(<Dedication />);
    const section = screen.getByRole('region');
    const invalidElements = section.querySelectorAll('script, style');
    expect(invalidElements).toHaveLength(0);
  });

  it('matches the snapshot of the Dedication section', () => {
    const { asFragment } = render(<Dedication />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the section with the correct ARIA role of "region"', () => {
      render(<Dedication />);
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();  // This verifies that the section has the implicit role "region".
  });

  it('does not render empty <p> elements', () => {
    render(<Dedication />);
    const paragraphs = screen.getAllByRole('paragraph');
    paragraphs.forEach(paragraph => {
      expect(paragraph.textContent).not.toBe('');
    });
  });

  it('renders the section with a valid aria-label (if applicable)', () => {
    render(<Dedication />);
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('aria-label', 'Dedication');
  });

});
