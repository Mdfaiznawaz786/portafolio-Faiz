import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='Experience'
                defaultMessage='Experinece'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage
                        id='Student Leader'
                        defaultMessage='Student Leader  at University of Buffalo , SUNY'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Demonstrated strong leadership skills by organizing and leading various student activities, managing teams of
 volunteers, and overseeing event logistics, which resulted in increased student participation and successful execution
 of events.'
                    />
                </p>
                  <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Participated in leadership training workshops and established a mentorship program for junior students, further
 developing leadership abilities and supporting the academic and personal growth of others.'
                    />
                   </p>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Employed creative problem-solving skills to overcome challenges and improve the efficiency of student council
 operations.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='Testing'
                        defaultMessage='Quality assurance Engineer at Cognizant Technology solutions'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Automation Testing and Sprint Management: Conducted comprehensive requirement analysis and test design for
 each sprint, developed and executed detailed test plans, scenarios, and scripts for automation testing, and generated
 end reports. Ensured timely execution and delivery of sprint releases, maintaining high standards of quality and
 efficiency.'
                    />
                </p>
                  <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Agile Team Coordination and Quality Assurance Management: Actively participated in daily scrum, planning, and
 retrospection meetings, managed the team to ensure on-time product delivery, implemented and tracked essential
 QA processes (including test plans, RTM, and test estimates), and provided knowledge transfer sessions to new
 joiners and other teams to ensure smooth on-boarding and effective collaboration.'
                    />
                </p>
                 <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Worked on the suites optimization to ensure that all the functionalities are getting covered as part of regression and
 sanity'
                    />
                </p>
                 <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Defect Management in JIRA.'
                    />
                </p>
            </div>
           
            
        </div>
        
    </section>
);

export default React.memo(Service);