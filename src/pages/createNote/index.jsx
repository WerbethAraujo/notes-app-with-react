import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import { Header, Form } from './styles';

function CreateNote() {
  return (
    <>
      <Header>
        <Link to='/' className='btn'>
          {<IoIosArrowBack />}
        </Link>
        <button className='btn lg primary'>Salvar</button>
      </Header>
      <Form>
        <input type='text' autoFocus placeholder='Titulo' />
        <textarea rows='28' placeholder='Detalhes...'></textarea>
      </Form>
    </>
  );
}

export default CreateNote;
