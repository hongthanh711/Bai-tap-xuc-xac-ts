import React from 'react';

interface Props {
  ele: string;
}

export default function XucXac({ ele }: Props): JSX.Element {
  return (
    <img
      className='ml-2'
      style={{ width: 50, height: 50 }}
      src={ele}
      alt='1.png'
    />
  );
}
