import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import useCreateDate from '../../hooks/useCreateDate';
import { Header, Form } from './styles';

import { v4 as uuid } from 'uuid';

function CreateNote({ setNotes }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const date = useCreateDate();

  function handleSubmit(e) {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date };

      setNotes((prevNotes) => [note, ...prevNotes]);
    }

    navigate('/');
  }
  return (
    <>
      <Header>
        <Link to='/' className='btn'>
          {<IoIosArrowBack />}
        </Link>
        <button className='btn lg primary' onClick={handleSubmit}>
          Salvar
        </button>
      </Header>
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          autoFocus
          placeholder='Titulo'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows='28'
          placeholder='Detalhes...'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </Form>
    </>
  );
}

export default CreateNote;
