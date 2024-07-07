import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = render(<Button text="Botão" />);

    expect(screen.getByRole('button', { name: 'Botão' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
