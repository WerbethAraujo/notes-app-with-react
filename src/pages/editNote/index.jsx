import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';

import { Header, Form } from './styles';
import useCreateDate from '../../hooks/useCreateDate';

function EditNote({ notes, setNotes }) {
  const { id } = useParams();

  const note = notes.find((item) => item.id === id);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  function handleEditform(e) {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((note) => {
        if (note.id === id) {
          note = newNote;
        }

        return note;
      });

      setNotes(newNotes);
    }

    navigate('/');
  }

  return (
    <>
      <Header>
        <Link to='/' className='btn'>
          {<IoIosArrowBack />}
        </Link>
        <button onClick={handleEditform} className='btn lg primary'>
          Salvar
        </button>
        <button className='btn lg danger'>
          <RiDeleteBin6Line />
        </button>
      </Header>
      <Form onSubmit={handleEditform}>
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

export default EditNote;
