import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import note from './Images/note.svg';

export default function QuickLinkCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Card
        style={{
          width: '18rem',
          borderRadius: '1.7rem',
          height: '10vh',
          cursor: isHovered ? 'pointer' : 'default',
          backgroundColor: isHovered ? '#e8f1ff' : 'white',
          transition: 'background-color 0.3s ease-in-out',
          boxShadow: isHovered ?"0 3px 10px 0 #aaa":""
        }}
        className="mb-2 mx-3 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <Card.Body className='d-flex align-items-center'>
          <Card.Text>
              <img src={note} alt="Note" /> <span className='mx-2'>Note</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
