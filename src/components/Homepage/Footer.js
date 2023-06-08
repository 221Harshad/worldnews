import React, { useState } from 'react';
import './accordion.css'
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  const accordionData = [
    {
      question: 'ABOUT OUR COLLEGE',
      answer: 'Muslim Association College of Engineering & Polytechnic is an Engineering College in Venjaramoodu, Trivandrum, Kerala. Its approved by AICTE and affiliated with Kerala Technological University and DTE. It is established in the year 2002 & is a Muslim Minority Institution run by Muslim Association, Thiruvananthapuram.',
    },
    {
      question: 'OUR MISSION',
      answer: 'To create an educational experience for students focused on deep disciplinary knowledge, problem solving, leadership, communication and interpersonal skills. To cultivate a transformative college community committed to a free exchange of ideas and a collaborative environment where critical and creative innovation and entrepreneurship can flourish in which students can achieve their full potential. To impart an education that triggers the holistic development of the student and makes him a responsible citizen.',
    },
    {
      question: 'OUR TEACHERS',
      answer: '',
      image:'./images/Teachersphoto.png'
    },
  
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleAccordionClick(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.answer}{item.image && <img src={item.image} alt="Accordion Image" />}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
