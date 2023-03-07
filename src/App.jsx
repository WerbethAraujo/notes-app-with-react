import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateNote from './pages/createNote/';
import EditNote from './pages/editNote';
import Notes from './pages/notes';

function App() {
  return (
    <main className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/create-note' element={<CreateNote />} />
          <Route path='/edit-note/:id' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
