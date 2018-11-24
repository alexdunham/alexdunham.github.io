import React, { Component } from 'react';
import {projects} from '../projects';
import '../scss/components/_work.scss';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        height: '90vh',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 0,
        width: '95vw',
        maxWidth: '1000px',
        padding: 0,
        border: 'none'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'fixed'
    }
};
  

class Work extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            projectToOpen: {
                name: '',
                mainImage: '',
                byline: '',
                scope: [],
                images: []
            }
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(project) {
        this.setState({
            modalIsOpen: true,
            projectToOpen: project
        });
    }
    closeModal() {
        this.setState({
            modalIsOpen: false,
            projectToOpen: {
                name: '',
                mainImage: '',
                byline: '',
                scope: [],
                images: []
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Work</h1>
                <p>NB: Much of the work I do in my current role is not permitted to be shown on this website, for reasons of confidentiality. If you would like to know further details about the kind of projects I have worked on, particularly React-based projects (as this is the technology I have been primarily working with since December 2017), please get in contact with me.</p>
                <div className="work__wrap">
                    {
                        projects.map((project, i) => {
                            return <button className="work__item" style={{
                                backgroundImage: `url(${project.mainImage})`
                            }} type="button" aria-labelledby={`work-title-${i}`} key={project.mainImage} onClick={() => this.openModal(project)}>
                                <span className="work__item--overlay">
                                    <span className="work__item--info">
                                        <span className="work__item--title" id={`work-title-${i}`}>{project.name}</span>
                                    </span>
                                </span>
                            </button>
                        })
                    }
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel={this.state.projectToOpen ? this.state.projectToOpen.name : "Modal"}
                >
                    <button className="work__modal--close-button" type="button" onClick={this.closeModal}>&times;</button>
                    <div className="work__modal--banner">
                        <img src={this.state.projectToOpen.mainImage}/>
                    </div>
                    <div className="work__modal--content-wrap"> 
                        <div className="work__modal--content-section">
                            <h2>{this.state.projectToOpen.name}</h2>
                            <p>{this.state.projectToOpen.byline}</p>
                        </div>
                        <div className="work__modal--content-section">
                            <h2>Project summary</h2>
                            <ul>
                                {
                                    this.state.projectToOpen.scope.map((item, i) => {
                                        return <li key={`scope-${i}`}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="work__modal--content-wrap images">
                        {
                            this.state.projectToOpen.images.map((image, i) => {
                                return <div key={image.link} className="work__modal--content-image">
                                    <img src={image.link} alt={image.alt} aria-describbedby={`project-image-${i}`}/>
                                    <p id={`project-image-${i}`}>{image.caption}</p>
                                </div>
                            })
                        }
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Work;
