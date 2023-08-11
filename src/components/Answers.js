import React from 'react';

function Answers({ fomData }) {
  const {
    firstAnswer,
    secondAnswer,
    thirdAnswer,
    forthAnswer,
    fifthAnswer,
    sixthAnswer,
    seventhAnswer,
  } = fomData;

  return (
    <div>
      <h2>Who are you?</h2>
      <p>{firstAnswer}</p>
      <h2>What do you do well?</h2>
      <p>{secondAnswer}</p>
      <h2>What do you love to do?</h2>
      <p>{thirdAnswer}</p>
      <h2>Whom do you intend to serve?</h2>
      <p>{forthAnswer}</p>
      <h2>What do your beneficiaries need?</h2>
      <p>{fifthAnswer}</p>
      <h2>How do your offerings transform your beneficiaries?</h2>
      <p>{sixthAnswer}</p>
      <h2>What activities can generate income for you?</h2>
      <p>{seventhAnswer}</p>
    </div>
  );
}

export default Answers;
