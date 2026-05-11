"use client";

export default function SearchButton({
  handleChange,
}: {
  handleChange: (text: string) => void;
}) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="検索"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  );
}
