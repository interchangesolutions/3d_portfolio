import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Marvin</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          A Python programmer and small business consultant from Birmingham, AL. After earning a degree in Chemical Engineering from Louisiana State University, I ventured beyond traditional engineering roles, aligning my career with my passion for technology and innovation. My journey has taken me from a refining engineer to embracing startup culture with Venture for America and leading strategic operations at a health tech startup and a research institute. I am particularly passionate about biological analytics and digital biology, aiming to merge my technical expertise with advancements in these fields.
        </p>
        <p>
        <span className='blue-gradient_text font-semibold drop-shadow'> Outside of work,</span> I enjoy gaming, fitness, and pottery, continually inspired by technology’s potential to shape the future of business and biotechnology.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-front rounded=xl flex justify-center items-center'>
              <div className='btn-back rounded-xl'/>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )) } 
        </div>
      </div>

      <div className='py-16'>
          <h3 className='subhead-text'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              As a Strategic Operations Lead at Southern Research Institute, I have tackled significant technical debt and streamlined business processes, greatly enhancing operational efficiency across departments. My role involved deploying advanced software systems, such as ERP and CRM, to optimize workflow and implement sustainable solutions. Previously at Acclinate Inc., I managed multiple high-stakes projects, improving clinical trial recruitment processes and fostering patient diversity. My early career at Marathon Petroleum Corporation allowed me to develop and automate operations research projects, significantly increasing production efficiency and sustainability. My diverse experience blends technical skill with strategic foresight, preparing organizations to meet future business and technological challenges.           
            </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-bold'>
                      {experience.title}
                      <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                        {experience.company_name}
                      </p>
                    </h3>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => ( 
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>    
      </div>
      <hr className='border-slate-200' /> 
      <CTA />
    </section>
  )
}

export default About