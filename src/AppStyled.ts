import styled from 'styled-components'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-area: '. .';
  margin: 0 auto;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-area: '.';
  }
`