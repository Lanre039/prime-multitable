import React from 'react';
import { IFormProps } from './types';
import utils from '../utils';
import './styles.css';

function Form(props: IFormProps): JSX.Element {
  const { formInput, setFormInput, setPrimeNo } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormInput(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const primeNo = utils.handlePrimeNo(formInput);
    if (primeNo) {
      setPrimeNo(primeNo);
    }
  };

  return (
    <section>
      <h1 className="head">PRIME MULTIPLICATION TABLE GENERATOR</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <input
            onChange={handleChange}
            value={formInput}
            name="formInput"
            placeholder="Enter positive integer..."
            required
          />
          <button type="submit" className="btn btn-2">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
