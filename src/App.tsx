import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App(): JSX.Element {
  const [formInput, setFormInput] = useState<string>('');
  const [primeNo, setPrimeNo] = useState<number[]>([]);

  return (
    <div className="data-form">
      <Form
        formInput={formInput}
        setFormInput={setFormInput}
        setPrimeNo={setPrimeNo}
      />
      <Table primeNo={primeNo} />
    </div>
  );
}

export default App;
