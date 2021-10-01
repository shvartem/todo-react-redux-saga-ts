/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { TodoBody } from '../types';

const initialValue = { body: '' };

interface IformCreateTodo {
  submitHandler: (values: TodoBody) => void
}

const FormCreateTodo: React.FC<IformCreateTodo> = ({ submitHandler }) => {
  const [formState, setFormState] = useState(initialValue);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(formState);
    setFormState(initialValue);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="mb-3">
        <label className="form-label">New todo</label>
        <input type="text" className="form-control" name="body" value={formState.body} onChange={changeInput} />
      </div>
      <button type="submit" className="btn btn-primary">Add todo</button>
    </form>
  );
};

export default FormCreateTodo;
