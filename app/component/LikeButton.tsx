"use client";

export default function LikeButton({
  handleChange,
  tweetNumber, //tweetNumber2
  like,
}: {
  handleChange: (ispushed: boolean, tweetNumber: number) => void; //tweetNumber3
  tweetNumber: number;
  like: boolean;
}) {
  // いいねボタンがクリックされたときの処理

  // return <input type="button" value="いいね" onClick={() => {}} />;
  return (
    <div>
      {like ? (
        <button
          onClick={() => {
            handleChange(like, tweetNumber); //tweetNumber4
          }}
        >
          ♥
        </button>
      ) : (
        <button
          onClick={() => {
            handleChange(like, tweetNumber); //tweetNumber5
          }}
        >
          ♡
        </button>
      )}
    </div>
  );
}

// 条件　？　trueのときの処理　：　falseのときの処理
//if(like) {trueのときの処理} else {falseのときの処理}
