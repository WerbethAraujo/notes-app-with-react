import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import CreateNote from './pages/createNote/';
import EditNote from './pages/editNote';
import Notes from './pages/notes';

import dummyNotes from './dummy_notes';

function App() {
  const [notes, setNotes] = useState(dummyNotes);
  return (
    <main className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes} />} />
          <Route path='/create-note' element={<CreateNote />} />
          <Route path='/edit-note/:id' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
