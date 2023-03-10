import styled from '@emotion/styled'
import Form from './components/Form'
import ImgCripto from './img/imagen-criptos.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 32px;

  &::after {
    content: '';
    width: 100px;
    height: 4px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
    border-radius: 4px;
  }
`

function App() {
  return (
    <Container>
      <Image src={ImgCripto} alt='Imagen criptomonedas' />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form />
      </div>
    </Container>
  )
}

export default App
