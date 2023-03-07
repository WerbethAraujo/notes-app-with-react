import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';

import { Header, Form } from './styles';

function EditNote() {
  return (
    <>
      <Header>
        <Link to='/' className='btn'>
          {<IoIosArrowBack />}
        </Link>
        <button className='btn lg primary'>Salvar</button>
        <button className='btn lg danger'>
          <RiDeleteBin6Line />
        </button>
      </Header>
      <Form>
        <input type='text' autoFocus placeholder='Titulo' />
        <textarea rows='28' placeholder='Detalhes...'></textarea>
      </Form>
    </>
  );
}

export default EditNote;
