import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

const MainPage = () => {


    return (
        <Container className='main-page'>
          <h1>Welcome, Todo App</h1>
        <Row>
            <Col>
          <Link to='/login'  className='btn btn-primary'>Login</Link>
            </Col>        
          </Row>
            <Row>
                <Col>
                <Link to='/register' className='btn btn-primary'>Register</Link>

                </Col>
            </Row>
            <Row>
                <Col>
          <Link to='/profile' className='btn btn-primary'>See Todos</Link>
                </Col>
            </Row>
      </Container>
    )
}
export default MainPage