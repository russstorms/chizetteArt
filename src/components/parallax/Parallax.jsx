import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

import './styles/Parallax.css';

const parallaxPosters = [
  {
    id: 0,
    url:
      'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_800/v1552434625/chizetteArt%20-%20Compressed/amethyst.jpg',
  },
  {
    id: 1,
    url:
      'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_900/v1552434629/chizetteArt%20-%20Compressed/aragonite_necklace.jpg',
  },
  {
    id: 2,
    url:
      'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_800/v1552434635/chizetteArt%20-%20Compressed/Citrine%20%2B%20Amethyst%20Necklace.jpg',
  },
  {
    id: 3,
    url:
      'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_900/v1552434634/chizetteArt%20-%20Compressed/geode_slice.jpg',
  },
  {
    id: 4,
    url:
      'https://res.cloudinary.com/chizetteart/image/upload/v1552434640/chizetteArt%20-%20Compressed/gold%2Bblue.jpg',
  },
  {
    id: 5,
    url:
      'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_900/v1552434663/chizetteArt%20-%20Compressed/constellations.jpg',
  },
  {
    id: 6,
    url:
      'https://res.cloudinary.com/chizetteart/image/upload/c_scale,w_800/v1552434670/chizetteArt%20-%20Compressed/sunset_beach.jpg',
  },
];

const ParallaxImages = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(parallaxPosters[index], (item) => item.id, {
    from: { opacity: 0.1 },
    enter: { opacity: 1 },
    leave: { opacity: 0.1 },
    config: config.molasses,
  });

  useEffect(() => {
    const counter = setInterval(() => set((state) => (state + 1) % 7), 4000);

    return function cleanup() {
      clearInterval(counter);
    };
  }, []);

  const changingImage = transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="changingImg"
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ));

  return (
    <div className="Parallax">
      <div className="ParallaxImages">{changingImage}</div>
    </div>
  );
};

export default ParallaxImages;
