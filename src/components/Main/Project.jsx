import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
         <section className="projects" id="proyectos">
        <h2 className="heading">
            <FormattedMessage
                id='Projects'
                defaultMessage='Projects'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage
                        id='Gitlytics'
                        defaultMessage='Developed a full-stack web application using with Flask serving a REST API with React as the frontend'

                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Implemented GitHub OAuth to get data from user’s repositories'
                    />
                </p>
                 <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Visualized GitHub data to show collaboration'
                    />
                </p>

                 
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Used Celery and Redis for asynchronous tasks'

                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='project2'
                        defaultMessage='Simple Paintball'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Developed a Minecraft server plugin to entertain kids during free time for a previous job'
                    />
                </p>
                  <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review'
                    />
                </p>
                 <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Implemented continuous delivery using TravisCI to build the plugin upon new a release'
                    />
                </p>
                 <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin'
                    />
                </p>
            </div>
           
            
        </div>
        
    </section>

    )
};
export default React.memo(Project);