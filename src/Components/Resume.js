import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.students.map(function(student){
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={student.name}><em>{student.name}</em><div className="information">Topic: {student.topic}</div></li>
      })
      var publication = this.props.data.publications.map(function(publication){
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return <li className="skills publications" key={publication.publication}><em>{publication.publication}</em><div className="information"><b>Authors:</b> {publication.authors} <span><a href={publication.link}> Paper Link</a></span></div>
        <div className="conference">{publication.conference}</div>
        </li>
      })
      var teaching = this.props.data.teachings.map(function(teaching){
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={teaching.title}><em>{teaching.title}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

    <div className="bars">
         <div className="three columns header-col">
            <h1><span>Publications</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {publication}
               </div>
            </div>
         </div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Teachings</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {teaching}
               </div>
            </div>
         </div>
      </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Students</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
