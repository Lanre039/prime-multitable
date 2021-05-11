import { render } from '@testing-library/react';
import Form from '../components/Form';

it('should take a snapshot', () => {
  const props = {
    formInput: '',
    setFormInput: jest.fn(),
    setPrimeNo: jest.fn(),
  };
  const { asFragment } = render(<Form {...props} />);
  expect(asFragment()).toMatchSnapshot();
});
