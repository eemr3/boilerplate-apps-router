import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderizar o componente
    const { container } = render(<Main />);
    // buscar o elemento e verificar se ele existe
    expect(screen.getByRole('heading', { name: /react avançado/i })).toBeInTheDocument();

    //gerar snapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
