const reels = [
  "Reel 1",
  "Reel 2",
  "Reel 3",
  "Reel 4",
  "Reel 5",
  "Reel 6",
  "Reel 7",
  "Reel 8",
  "Reel 9",
  "Reel 10",
];

export const Reels = () => {
  return (
    <ul>
      {reels.map((reel, index) => (
        <li key={index}>{reel}</li>
      ))}
    </ul>
  );
};
