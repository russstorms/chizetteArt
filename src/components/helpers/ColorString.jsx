import React from 'react';

const ColorString = ({ string, duration }) => (
  <>
    {[...string].map((letter, index) => (
      <span
        className="ColorString"
        key={index}
        idx={index}
        style={{
          animationDelay: `${index === 0 ? 1 : index * 0.1 + 1}s`,
          animationDuration: `${string.length * duration}s`,
        }}
      >
        {letter}
      </span>
    ))}
  </>
);

export default ColorString;
