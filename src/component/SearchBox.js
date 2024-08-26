import React, { useState } from 'react'
import { Button, Col, Row, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();
    const searchByName = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SEARCH_BY_NAME',
            payload: {keyword}
        })
    }
    return (
        <Form onSubmit={searchByName} className="search-form">
        <Row>
            <Col lg={10}>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력해주세요"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
            </Col>
            <Col lg={2}>
                <Button type="submit">찾기</Button>
            </Col>
        </Row>
        </Form>
  )
}

export default SearchBox
