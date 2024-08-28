import { Container, Row, Col } from "react-bootstrap";
import photo from "../assets/images/photo.jpeg";
import '../App.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import timeline from '../assets/images/timeline.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

export const AboutMe = () => {

    const experienceItems = [
        { year: 'March 2024', title: "Internship", description: 'Started internship at SISNID as a Front-End software developer to build Nclock, an assiduity software, using tools HTML, CSS, JS, React and Typescript. Sometimes I also coded in C#.' },
        { year: 'July 2024', title: "Junior Software Developer", description: 'Promoted to Junior Software Developer at SISNID, mainly to continue the Nclock project as a freelancer.' },
    ];

    return (
        <div id="aboutMe" className="about-content-wrapper">
            <h2 style={{ color: "black", textAlign: "center", marginBottom: 50 }}>About Me</h2>
            <Container>
                <Row className="about-row" style={{ alignItems: 'center' }}>
                    <Col xs={12} md={6} lg={6}>
                        <TrackVisibility once>
                            {({ isVisible }) => (
                                <div className={`about-img ${isVisible ? 'fade-in' : 'fade-out'}`}>
                                    <img src={photo} alt="Your Name" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <TrackVisibility once>
                            {({ isVisible }) => (
                                <div className={`about-text ${isVisible ? 'fade-in' : 'fade-out'}`}>
                                    <p>
                                        I begun my developer journey in 2021 when I started taking some online courses at Alura, an on-demand learning platform. In 2022 I started my Web and Mobile Development degree at ISLA-Gaia, an institution located in Vila Nova de Gaia, Portugal. Early 2024 I started my internship at SISNID, a software development company located in Maia, Portugal. I am currently working as a freelance on the Nclock project, an assiduity software, using tools HTML, CSS, JS, React and Typescript. The languages stated before are the ones I am most comfortable with today, but I also have some skill in Laravel, C# and Wordpress.
                                    </p>
                                    <p>
                                        Besides coding, I also work as a freelance video editor. I love games, movies, music and aviation. My steam library, the largest one I have, currently has 243 games. My preferred genres are FPS, RPG, RTS, Racing and Simulator.
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <h3 style={{ color: "black", textAlign: "center", marginBottom: 50 }}>Experience</h3>
            <VerticalTimeline>
                {experienceItems.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#f9f9f9', color: '#333' }}
                        date={item.year}
                        iconStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        icon={
                            <img
                                src={timeline}
                                alt="icon"
                                style={{
                                    width: '80%',
                                    height: '80%',
                                    display: 'block',
                                    margin: 'auto'
                                }}
                            />
                        }
                    >
                        <TrackVisibility once>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                    <p className="vertical-timeline-element-subtitle">{item.description}</p>
                                </div>
                            )}
                        </TrackVisibility>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <h3>Why Buzzvel?</h3>
            <TrackVisibility once>
                {({ isVisible }) => (
                    <div className={`why-buzzvel ${isVisible ? 'animate__animated animate__slideInRight' : 'animate__animated animate__slideOutRight'}`}>
                        <p className={`${isVisible ? 'animate__animated animate__slideInRight' : 'animate__animated animate__slideOutRight'}`}>
                            Joining Buzzvel is an exciting opportunity to be part of a dynamic and innovative team that is constantly pushing the boundaries of technology. I am particularly drawn to Buzzvel's commitment to delivering top-tier software solutions that prioritize user experience and quality.
                        </p>
                        <p className={`${isVisible ? 'animate__animated animate__slideInRight' : 'animate__animated animate__slideOutRight'}`} style={{ animationDelay: '0.5s' }}>
                            With my background in front-end development, combined with a passion for creating intuitive and engaging user interfaces, I believe I can contribute significantly to Buzzvel's ongoing projects.
                        </p>
                        <p className={`${isVisible ? 'animate__animated animate__slideInRight' : 'animate__animated animate__slideOutRight'}`} style={{ animationDelay: '1s' }}>
                            I am eager to bring my skills and enthusiasm to the Buzzvel team, and I look forward to the opportunity to collaborate on innovative projects that will shape the future of technology. Together, I am confident that we can achieve new heights of success and create impactful solutions for our clients.
                        </p>
                    </div>
                )}
            </TrackVisibility>
        </div>
    )
};