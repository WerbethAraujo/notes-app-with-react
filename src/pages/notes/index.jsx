import { Link } from 'react-router-dom';

import { CiSearch } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';

import NoteItem from '../../components/NoteItem';

import { Header, NotesContainer } from './styles';
import { useEffect, useState } from 'react';

function Notes({ notes }) {
  const [showSearch, setShowSearch] = useState(false);

  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  function handleSearchNotes() {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  }

  useEffect(handleSearchNotes, [text]);
  return (
    <>
      <Header>
        {!showSearch && <h2>Minhas Notas</h2>}

        {showSearch && (
          <input
            type='text'
            autoFocus
            placeholder='Buscar...'
            onChange={(e) => {
              setText(e.target.value);
              handleSearchNotes();
            }}
          />
        )}

        <button
          className='btn'
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </Header>
      <NotesContainer>
        {filteredNotes.length === 0 && (
          <strong className='empty__notes'>Note not found!</strong>
        )}
        {filteredNotes.map((note) => (
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
