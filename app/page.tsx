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
    setTimeLineItems(
      //timelineItemsから削除
      timelineItems.filter((timelineItem, index) => index !== tweetNumber),
    );
  }
  function updateLikeCount(like: boolean, tweetNumber: number) {
    //tweetNumber6
    setTimeLineItems(
      //更新
      timelineItems.map((item, index) =>
        tweetNumber === index
          ? { ...item, iineCount: item.iineCount - (like ? 1 : -1) }
          : // いいねが押されたときにiineCountを増やす処理
            item,
      ),
    );
  }

  useEffect(() => {
    practiceMethods();
  }, []);

  return (
    <div className="">
      <button
        onClick={() => {
          allItems.push({
            text: tweetText,
            time: "12:00",
            iineCount: Math.floor(Math.random() * 15000) + 1,
            like: false,
          });

          setAllItems(allItems);

          // timelineに時間、テキスト、いいねを追加する処理
          setTimeLineItems([
            ...timelineItems,
            {
              text: tweetText,
              time: "12:00",
              iineCount: Math.floor(Math.random() * 15000) + 1,
              like: false,
            },
          ]); // ここでtimelineItemsを更新する際に、tweetTextの値を含めるように変更
          console.log("↓timelineItemsの内容↓");
          console.log(timelineItems);

          // ary:
        }}
        className=""
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
        <p key={index}>
          {item.text} {item.time}{" "}
          <LikeButton
            like={item.like}
            handleChange={updateLikeCount}
            tweetNumber={index}
          />
          {item.iineCount}
          <DeleteTweet handleChange={deleteButton} tweetNumber={index} />
        </p>
      ))}
    </div>
    // tweetNumber1
  );
}
