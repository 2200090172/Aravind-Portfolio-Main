import React, { useState, useEffect } from 'react';
import './Internship.scss';
import Loader from 'react-loaders';

const Internship = () => {
  const [loading, setLoading] = useState(true); // State to handle loading spinner
  const [internships, setInternships] = useState([]); // State to store internship data

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setInternships([
        {
          logo: 'https://www.vandis.com/media/1345/palo-alto-new-logo.jpg',
          position: 'Palo Alto Cyber Security Virtual Intern (AICTE Eduskills)',
          duration: 'April - June 2024',
          location: 'Remote (Virtual)',
          description: 'Gained hands-on experience in cybersecurity with Palo Alto Networks. Learned, configured, and deployed security solutions, conducted assessments, and responded to incidents. ',
        },
        {
          logo: 'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Emblem.png',
          position: 'AWS Cloud Virtual Intern (AICTE Eduskills)',
          duration: 'January 2024 - March 2024',
          location: 'Remote (Virtual)',
          description: 'As an AWS Cloud Virtual Intern with AICTE Eduskills, I gained hands-on experience in cloud computing technologies and solutions',
        },
        {
          logo: 'https://miro.medium.com/v2/resize:fit:870/1*5RcnKkInb1AUfdu7IzMiFQ.png',
          position: 'Student Peer Mentor',
          duration: 'July 2023 - Present',
          location: 'KL University, Vijayawada',
          description: 'Completed Global Certifications, Coursera courses, NPTEL Courses, helped the Mentors with the Course planning and group discussions.',
        },
      ]);
      setLoading(false); // Stop loading after data is fetched
    }, 2000); // 2-second delay for simulating a network request

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {loading ? (
        <Loader type="pacman" /> // Display a loader while the data is being fetched
      ) : (
        <div className="internship-container">
          {internships.map((internship, index) => (
            <div className="internship-experience" key={index}>
              <div className="internship-logo">
                <img src={internship.logo} alt="Company Logo" />
              </div>
              <div className="internship-details">
                <h2 className="position">{internship.position}</h2>
                <p className="duration-location">
                  {internship.duration} | {internship.location}
                </p>
                <p className="description">{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Internship;
