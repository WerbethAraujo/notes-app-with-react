import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem 1.5rem;
  background: var(--color-bg-black);
  z-index: 9;

  input {
    padding: 0.7rem 1rem;
    background: transparent;
    border: 1px solid var(--color-bg-dark);
    border-radius: 0.6rem;
    color: var(--color-white);
    font-size: 1.1rem;
    width: 100%;
    margin-right: 1.5rem;
  }
`;

export const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
`;
