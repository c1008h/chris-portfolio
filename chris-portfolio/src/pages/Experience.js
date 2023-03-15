import React, { useState } from "react";
import { Card, Container } from 'react-bootstrap'
import { experienceData } from '../constants/experienceData'
import '../styles/experience.css'

export default function Experience() {
    const [activeNavItem, setActiveNavItem] = useState(new Date().getFullYear().toString());
    const currentYear = new Date().getFullYear().toString();
    const [expandedCards, setExpandedCards] = useState([]);

    const handleNavItemClicked = (year) => {
        if (year !== activeNavItem) {
            if (year === "Present") {
              setActiveNavItem(currentYear);
            } else {
              setActiveNavItem(year);
            }
            setExpandedCards(new Set());
        }    
    };
    
    const uniqueYears = [...new Set(experienceData.flatMap(item => {
        if (item.year === 'Present') {
            return ['Present'];
        } else if (item.yearRange) {
            const [startYear, endYear] = item.yearRange.split('-');
            const years = [startYear];

            for (let i = parseInt(startYear) + 1; i <= Math.min(parseInt(endYear), new Date().getFullYear()); i++) {
                years.push(i.toString());
            }
            return years;
        } else {
            return [item.year];
        }
    }))]
    .filter(year => experienceData.some(item => item.year === year || (item.yearRange && item.yearRange.includes(year))))
    .sort((a, b) => a === 'Present' ? 1 : b === 'Present' ? -1 : b - a);

    const filteredUniqueYears = [...new Set(uniqueYears)].sort((a, b) => a === 'Present' ? 1 : b === 'Present' ? -1 : b - a);
    
    const filteredData = experienceData.filter(item => {
        if (activeNavItem === "Present") {
            return item.year === "Present" || (item.yearRange && item.yearRange.includes("Present"));
        } else {
            return item.year === activeNavItem || (item.yearRange && item.yearRange.includes(activeNavItem));
        }
    });
    const handleCardToggle = (cardIndex) => {
        if (expandedCards.includes(cardIndex)) {
            setExpandedCards(expandedCards.filter(index => index !== cardIndex));
        } else {
            setExpandedCards([...expandedCards, cardIndex]);
        }
    };

    return (
        <section id='experience'>
            <h3>Experience</h3>
            <Container id='container'>
                <div id='experienceYear'>
                {filteredUniqueYears 
                    ? filteredUniqueYears.map((year) => (
                            <p 
                                key={year}
                                id='yearBtn' role='tab' 
                                tabIndex={year}
                                onClick={() => handleNavItemClicked(year)}
                                className={year === activeNavItem ? 'active' : ''}
                            >{year === currentYear ? "Present" : year}</p>
                    )) : null}
                </div>

                    {activeNavItem && (
                        <div id='card-container'> 
                            {filteredData.map(filteredItem => (
                            <Card id='experienceCard' key={filteredItem.id}>
                                <Card.Title style={{ marginBottom: '0.5rem' }}>{filteredItem.name}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                                        <p style={{color:'grey'}}>{filteredItem.institute}</p>
                                        <p>{filteredItem.yearRange && filteredItem.yearRange.split('-').join(' - ')}</p>
                                    </div>
                                </Card.Title>
                                <Card.Body style={{ marginTop: 0, paddingTop: 0, fontSize:'16px' }}>{filteredItem.description}</Card.Body>
                            </Card>                           
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}
