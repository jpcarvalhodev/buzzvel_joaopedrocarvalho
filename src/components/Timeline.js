import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import timeline from '../assets/images/timeline.png';

export const CareerTimeline = () => {

    const timelineItems = [
        {
            year: "Year 1: Foundation and Integration",
            title: "Onboarding and Initial Contributions",
            description: [
                "Onboarding: Get familiar with Buzzvel’s processes, tools, and team.",
                "Mentorship: Work closely with a senior developer.",
                "Initial Contributions: Take on small tasks and learn the company’s coding standards."
            ]
        },
        {
            year: "Year 2-3: Growth and Increased Responsibility",
            title: "Project Ownership and Skill Development",
            description: [
                "Project Ownership: Lead small to medium-sized projects.",
                "Skill Development: Master advanced concepts and possibly learn new technologies relevant to Buzzvel’s stack.",
                "Mentorship: Start mentoring junior developers."
            ]
        },
        {
            year: "Year 4-5: Leadership and Innovation",
            title: "Leadership Role and Innovation",
            description: [
                "Leadership Role: Potentially step into a team lead or senior developer role.",
                "Innovation: Contribute to the strategic direction of front-end development at Buzzvel.",
                "Continuous Learning: Stay updated with the latest industry trends and apply them at Buzzvel."
            ]
        }
    ];

    return (
        <div id="timeline" className="timeline">
            <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Career Timeline at Buzzvel</h2>
            <VerticalTimeline>
                {timelineItems.map((item, index) => (
                    <TrackVisibility once key={index}>
                        {({ isVisible }) => (
                            <VerticalTimelineElement
                                className={`vertical-timeline-element--work ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
                                contentStyle={{ background: '#f9f9f9', color: '#333' }}
                                contentArrowStyle={{ borderRight: '7px solid  #333' }}
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
                                position={index % 2 === 0 ? 'left' : 'right'}
                            >
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                <ul>
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        )}
                    </TrackVisibility>
                ))}
            </VerticalTimeline>
        </div>
    );
};