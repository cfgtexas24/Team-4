import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import financeImage from '../../assets/finance.png'; 
import cookingImage from '../../assets/cooking.png'; 
import volunteeringImage from '../../assets/volunteer.png'; 
import artImage from '../../assets/images.png'; 
import careerImage from '../../assets/career.png'; 
import healthImage from '../../assets/health.png'; 
import { useNavigate } from 'react-router-dom';

function CommunityPage() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Duolingo color palette for design consistency
  const duolingoColors = {
    pistachio: '#7ac70c',
    chartreuse: '#8ee000',
    sun: '#faa918',
    lightningYellow: '#ffc715',
    persianRed: '#d33131',
    dodgerBlue: '#1cb0f6',
    studio: '#8549ba',
    gallery: '#f0f0f0',
  };

  // Cards data to avoid repetition
  const communities = [
    { name: 'Finance Community', image: financeImage, color: duolingoColors.pistachio, description: 'Engage in financial discussions, tips, and planning!' },
    { name: 'Cooking Community', image: cookingImage, color: duolingoColors.chartreuse, description: 'Share recipes, cooking tips, and explore cuisines together!' },
    { name: 'Volunteering Community', image: volunteeringImage, color: duolingoColors.sun, description: 'Join volunteering efforts and make a difference together!' },
    { name: 'Art Community', image: artImage, color: duolingoColors.lightningYellow, description: 'Explore and share your creativity through art!' },
    { name: 'Health & Wellness Community', image: healthImage, color: duolingoColors.dodgerBlue, description: 'Discuss health tips, wellness practices, and stay fit together!' },
    { name: 'Career Community', image: careerImage, color: duolingoColors.studio, description: 'Share career advice, job opportunities, and professional growth tips!' },
  ];

  const handleEnterCommunity = (communityName) => {
    const formattedName = communityName.toLowerCase().replace(/ /g, '-');
    navigate(`/community/${formattedName}`);
  };

  return (
    <Container className="mt-5">
      <h1 
        className="text-center mb-4" 
        style={{ color: duolingoColors.pistachio, fontSize: '36px', fontWeight: 'bold' }}
      >
        Community Hub
      </h1>
      <Row className="justify-content-center">
        {communities.map((community, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card 
              className="shadow-sm h-100 border-0" 
              style={{ borderRadius: '20px', overflow: 'hidden', backgroundColor: duolingoColors.gallery }}
            >
              <Card.Img 
                variant="top" 
                src={community.image} 
                alt={community.name} 
                className="w-100" 
                style={{ height: '200px', objectFit: 'cover', borderBottom: `5px solid ${community.color}` }}
              />
              <Card.Body className="d-flex flex-column align-items-center p-4">
                <Card.Title className="text-center" style={{ color: community.color, fontWeight: 'bold', fontSize: '24px' }}>
                  {community.name}
                </Card.Title>
                <Card.Text className="text-center flex-grow-1" style={{ color: '#4c4c4c' }}>
                  {community.description}
                </Card.Text>
                <Button 
                  style={{ 
                    backgroundColor: community.color, 
                    borderColor: community.color, 
                    borderRadius: '30px', 
                    fontWeight: 'bold', 
                    padding: '10px 20px' 
                  }} 
                  className="mt-auto"
                  onClick={() => handleEnterCommunity(community.name)}
                >
                  Enter Community
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CommunityPage;
