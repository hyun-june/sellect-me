import { Row, Col, Button } from 'react-bootstrap'

const MainButton = () => {
    const data = ['피팅', '배우', '모델', '행사', '댄서', '인플루언서']
    return (
        <div>
            <h3>FIND YOUR SELLEB</h3>
            <Row>
                {data.map(item => (
                    <Col xs={6} md={3}>
                        <Button
                            variant="outline-primary"
                            style={{ width: '100%' }}>
                            {item}
                        </Button>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default MainButton
