import React from 'react';

const Managers = props => {
  const { managers } = props;
  return (
    <ul>
      {managers.map(function(manager) {
        return <li key={manager.id}>{manager.name}</li>;
      })}
    </ul>
  );
};

export default Managers;
