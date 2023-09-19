import React from 'react';
import { Rate } from 'antd';

import './rate-movies.css';
import Services from '../../server';

const RateMovies = ({ valueRate, id, addRatedMovies, current, addlistRated }) => {
  const server = new Services();
  async function onChange(page) {
    await server.addRating(page, id);
    await server.getRatedMovies(current).then((results) => addRatedMovies(results));
    await server.getRatedMovies(current).then((results) => addlistRated(results, id));
  }
  return <Rate allowHalf defaultValue={valueRate} count={10} rootClassName="rate" onChange={onChange} />;
};

export default RateMovies;