import { render, screen } from '@testing-library/react';

import MyComponet from '.';

describe('<MyComponet />', () => {
  it('should render the heading', () => {
    const { container } = render(<MyComponet />);

    expect(screen.getByRole('heading', { name: /MyComponet/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
