const tweets = [
  "I love cats",
  "I love dogs",
  "I love cats and dogs",
  "I love dogs and cats",
  "I love fish",
  "I love birds",
];

export const Tweets = () => {
  return (
    <ul>
      {tweets.map((tweet, index) => (
        <li key={index}>{tweet}</li>
      ))}
    </ul>
  );
};
