import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { Header, Form } from './styles';

function CreateNote() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(title, details);
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
