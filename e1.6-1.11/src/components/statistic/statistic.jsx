import React from 'react';

export default function Statistic({ title, num, percentage }) {
  return (
    <tr>
      <td>{title}</td>
      {percentage ? <td>{num}%</td> : <td>{num}</td>}
    </tr>
  );
}
