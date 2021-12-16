import React from 'react'
import { Row, Col, Container } from 'react-grid-system';
import styles from './style.module.css'
import { SocialIcon } from 'react-social-icons';
import person from '../../images/person.jpg'
import Typical from 'react-typical'

const Profile = () => {
    return (
        <>
            <Container fluid className={styles.container}>
                <Row>
                    <Col>
                        <span> <SocialIcon onHover url="https://www.facebook.com/alex.stoqnov.54" /></span>
                        <span> <SocialIcon url="https://www.instagram.com/alexstoqnov/" /></span>
                        <span> <SocialIcon bgColor='white' url="https://github.com/astoyanov98" /></span>
                        <span> <SocialIcon url="https://www.linkedin.com/in/alex-stoyanov-b5441618b/" /></span>
                        <p>Hello, I'M <span style={{ color: "#ff5823", fontFamily: "Poppins SemiBold", fontSize: '38px' }}> Alex</span></p>
                        <Typical
                            steps={['Frontend Developer', 1000, 'JavaScript Ninja', 1000, 'Fullstack Developer', 1000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                        <p style={{ fontSize: '22px' }}>
                            Knack of building applications with front and back end operations.
                        </p>
                        <div>
                            <a href={require("./Alex_Stoyanov_CV.pdf")} download="myFile">
                                <button className={styles.button_hire}>Resume</button>
                            </a>
                            <button className={styles.button_resume}>Hire Me</button>
                        </div>
                    </Col>

                    <Col>
                        <img src={person} className={styles.person} />
                    </Col>

                </Row>
            </Container>
            <div className={styles.img}></div>
        </>

    )
}

export default Profile