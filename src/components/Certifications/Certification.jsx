import React, { useState, useEffect } from 'react';
import './Certification.scss';
import Loader from 'react-loaders';

const Certification = () => {
  const [loading, setLoading] = useState(true);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCertifications([
        {
          logo: 'https://brm-workforce.oracle.com/pdf/certview/images/OCPJSE11.png',
          title: 'Oracle Certified Professional: Java SE 11 Developer',
          date: 'June 2024',
          issuer: 'Oracle',
          description: 'Earned certification in Java SE 11 Development, covering advanced concepts and practical skills for building efficient and scalable applications.',
          verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=DF10609A9F4F9255A50080A028C358D36A4A47297149E43CD712C65836118D7F'
        },
        {
          logo: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png',
          title: 'AWS Certified Cloud Practitioner',
          date: 'May 2024',
          issuer: 'Amazon Web Services',
          description: 'Demonstrated expertise in designing scalable, reliable, and secure AWS cloud solutions with a strong understanding of AWS architecture and services.',
          verificationUrl: 'https://www.credly.com/badges/08a445ec-496f-46b6-bb2e-87090c59958b/linked_in_profile'
        },
        {
            logo: 'https://www.englishsakshi.com/wp-content/uploads/2021/07/need-help-your-for-your-red-hat-certifications-exam.png', 
            title: 'Red Hat Application Development I: Programming in Java EE (AD183)',
            date: 'In Progress',
            issuer: 'Red Hat',
            description: 'Currently pursuing certification to demonstrate skills in developing enterprise applications using Java EE technologies, including EJB, JPA, and JSF.',
            verificationUrl: 'https://www.redhat.com/en/services/training/ad183-red-hat-application-development-i-programming-java-ee'
          },
          
        {
          logo: 'https://images.credly.com/images/74790a75-8451-400a-8536-92d792c5184a/CompTIA_Security_2Bce.png',
          title: 'CompTIA Security+',
          date: 'In Progress',
          issuer: 'CompTIA',
          description: 'Preparing for certification in security fundamentals, including network security, compliance, operational security, and various cybersecurity concepts.',
          verificationUrl: 'https://www.comptia.org/credentials/your-credential-id'
        },
      ]);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader type="pacman" />
      ) : (
        <div className="certification-container">
          {certifications.map((certification, index) => (
            <div className="certification-experience" key={index}>
              <div className="certification-logo">
                <img src={certification.logo} alt="Certification Issuer Logo" />
              </div>
              <div className="certification-details">
                <h2 className="title">{certification.title}</h2>
                <p className="date-issuer">
                  {certification.date} | {certification.issuer}
                </p>
                <p className="description">{certification.description}</p>
                {certification.date !== 'In Progress' ? (
                  <a href={certification.verificationUrl} target="_blank" rel="noopener noreferrer">
                    Verify Certification
                  </a>
                ) : (
                  <span className="verification-disabled">Certification In Progress</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Certification;
