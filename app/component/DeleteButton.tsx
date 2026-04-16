"use client";

export default function DeleteTweet({
  handleChange,
  tweetNumber,
}: {
  handleChange: (tweetNumber: number) => void;
  tweetNumber: number;
}) {
  return (
    <button
      onClick={() => {
        handleChange(tweetNumber);
      }}
    >
      削除
    </button>
  );
}
