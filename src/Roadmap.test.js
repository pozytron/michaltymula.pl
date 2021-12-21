import { render, screen } from '@testing-library/react';
import App from './App';

describe('initial testing warmup',()=>{
  test('renders hello screen', () => {
    render(<App/>);
    const element = screen.getByText(/hello from pozytron/i);
    expect(element).toBeInTheDocument();
  });

})
