import { Link } from 'react-router-dom';

import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';

import NoteItem from '../../components/NoteItem';

import { Header, NotesContainer } from './styles';

function Notes({ notes }) {
  return (
    <>
      <Header>
        <h2>Minhas Notas</h2>
        {/* <input type='text' autoFocus placeholder='Buscar Nota...' /> */}
        <button className='btn'>{<CiSearch />}</button>
      </Header>
      <NotesContainer>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </NotesContainer>
      <Link to='/create-note' className='btn add__btn'>
        <BsPlusLg />
      </Link>
    </>
  );
}

export default Notes;
