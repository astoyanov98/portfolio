import React from 'react'
import { Row, Col, Container } from 'react-grid-system';
//import {isMobile} from "react-device-detect";
import styles from './style.module.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <Container fluid className={styles.container}>
            <Row>
                <Col className={styles.name} xs={2} md={4}>
                    < img height={"auto"} width={'200px'} src={logo} />
                </Col>
                <Col xs={2} md={1} className={styles.items}>
                    <span>Home</span>
                </Col>
                <Col xs={2} md={1.5} className={styles.items}>
                    <span>About me</span>
                </Col>
                <Col xs={2} md={1.5} className={styles.items}>
                    <span>Resume</span>
                </Col>
                <Col xs={2} md={1.5} className={styles.items}>
                    <span>Testimonial</span>
                </Col>
                <Col xs={2} md={1.5} className={styles.items}>
                    <span>Contact me</span>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;