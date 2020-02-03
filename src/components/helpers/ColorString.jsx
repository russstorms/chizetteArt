import React from 'react'

const ColorString = ({ string }) => (
  <>
    {
      [...string]
        .map((letter, index) => (
          <span
            className='ColorString'
            key={index}
            idx={index}
            style={{
              animationDelay: `${index === 0 ? 1 : index * .1 + 1}s`,
              animationDuration: `${string.length * .875}s`,
            }}
          >
            {letter}
          </span>
        ))
    }
  </>
)

export default ColorString

