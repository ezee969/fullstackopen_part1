import React from 'react';

export default function Button({ text, handleClickFunc }) {
  return <button onClick={handleClickFunc}>{text}</button>;
}
