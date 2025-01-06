import React, { useState, useEffect } from 'react';
import './VerticalSlider.css';

const VerticalSlider = () => {
  // Listado de proyectos (o secciones)
  const sections = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción del Proyecto 2' },
    { id: 3, title: 'Proyecto 3', description: 'Descripción del Proyecto 3' },
    { id: 4, title: 'Proyecto 4', description: 'Descripción del Proyecto 4' },
    { id: 5, title: 'Proyecto 5', description: 'Descripción del Proyecto 5' },
  ];

  // Estado para el índice de la sección actual
  const [currentSection, setCurrentSection] = useState(0);

  // Función para manejar el scroll hacia arriba o hacia abajo
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Si se hace scroll hacia abajo, ir a la siguiente sección
      setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
    } else {
      // Si se hace scroll hacia arriba, ir a la sección anterior
      setCurrentSection((prev) => Math.max(prev - 1, 0));
    }
  };

  // Manejar el evento de scroll
  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="vertical-slider">
      <div
        className="slider-container"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        {sections.map((section) => (
          <div className="section" key={section.id}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;
