"use client";

import { useEffect, useState } from "react";
import LikeButton from "./component/LikeButton";
import DeleteTweet from "./component/DeleteButton";
import SearchButton from "./component/SearchButton";
import practiceMethods from "./practice";

type TimelineItem = {
  text: string;
  time: string;
  iineCount: number;
  like: boolean;
};

export default function Home() {
  const [allItems, setAllItems] = useState<TimelineItem[]>([]);
  const [timelineItems, setTimeLineItems] = useState<TimelineItem[]>([]);
  const [tweetText, setTweetText] = useState<string>("");
  //const [like, setLike] = useState<boolean>(false); 例）luke:boolean;
  function searchButton(text: string) {
    if (text === "") {
      setTimeLineItems(allItems);
      return;
    }
    setTimeLineItems(allItems.filter((item) => item.text === text));
  }
function deleteButton(tweetNumber: number) {
  // timelineItems から削除
  setTimeLineItems(
    timelineItems.filter((_, index) => index !== tweetNumber)
  );

  // allItems からも削除 ← これが必要！
  setAllItems(
    allItems.filter((_, index) => index !== tweetNumber)
  );
}

  function updateLikeCount(like: boolean, tweetNumber: number) {
    //tweetNumber6
    setTimeLineItems(
      //更新
      timelineItems.map((item, index) =>
        tweetNumber === index
          ? { ...item,
              like: !like, 
            iineCount: item.iineCount - (like ? 1 : -1) }
          : // いいねが押されたときにiineCountを増やす処理
            item,
      ),
    );
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      practiceMethods();
    }
  }, []);

  useEffect(() => {
    const tweets = document.querySelectorAll(".tweet");
    tweets.forEach((tweet, i) => {
      setTimeout(() => {
        tweet.classList.add("show");
      }, 100 * i);
    });
  }, [timelineItems]);

  return (
    <div className="">
<button
  onClick={() => {
    const newTweet = {
      text: tweetText,
      time: "12:00",
      iineCount: Math.floor(Math.random() * 15000) + 1,
      like: false,
    };

    setAllItems([...allItems, newTweet]);
    setTimeLineItems([...timelineItems, newTweet]);
  }}
>
  投稿
</button>


      <input
        type="text"
        placeholder="何か入力..."
        onChange={(e) => {
          setTweetText(e.target.value);
        }}
      />
      <SearchButton handleChange={searchButton} />
      {timelineItems.map((item, index) => (
  <div className="tweet" key={index}>
    <div className="tweet-text">{item.text}</div>
    <div className="tweet-time">{item.time}</div>

    <div className="tweet-actions">
      <LikeButton
        like={item.like}
        handleChange={updateLikeCount}
        tweetNumber={index}
      />
      <span>{item.iineCount}</span>
      <DeleteTweet handleChange={deleteButton} tweetNumber={index} />
    </div>
  </div>
      ))}
    </div>
    // tweetNumber1
  );
}
