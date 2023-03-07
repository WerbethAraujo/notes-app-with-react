import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  input,
  textarea {
    width: 100%;
    padding: 0.5rem 1rem;
    background: transparent;
    border-radius: 0.2rem;
    font-size: 1.1rem;
    color: var(--color-white);
  }

  input {
    font-size: 2rem;
  }
`;
