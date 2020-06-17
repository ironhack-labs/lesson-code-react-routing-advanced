import React from 'react';

const PrivatePage = props => {
  console.log(`props in the PrivatePage: ${props}`);

  //   You can destructure props and users object, or use it as we did in the example:
  //   const { name, age } = props.user;
  return (
    <div>
      <p>This page is private.</p>
      <p>
        The authenticated user is named {props.user.name} and is {props.user.age} years old.
      </p>
      <button onClick={() => props.history.goBack()}>Go back</button>
    </div>
  );
};

export default PrivatePage;
