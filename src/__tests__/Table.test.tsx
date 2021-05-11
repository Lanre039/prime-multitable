import { render } from '@testing-library/react';
import Table from '../components/Table';

it('should take a snapshot', () => {
  const props = {
    primeNo: [],
  };
  const { asFragment } = render(<Table {...props} />);
  expect(asFragment()).toMatchSnapshot();
});
