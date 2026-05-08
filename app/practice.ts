import { Akaya_Kanadaka, Asap } from "next/font/google";

export default function practiceMethods() {
  const timelinitems = [
    { text: "aaii", time: "12:00", iinecount: "2", like: false },
    { text: "aauu", time: "12:30", iinecount: "3", like: true },
    { text: "aaee", time: "13:00", iinecount: "4", like: false },
  ];

  //   timelinitems.push({
  //     text: "aaoo",
  //     time: "13:30",
  //     iinecount: "5",
  //     like: true,
  //   });

  const result = [
    ...timelinitems,
    { text: "aaoo", time: "13:30", iinecount: "4", like: false },
  ];

  function huga() {
    const timelinitems = [
      { text: "aaii", time: "12:00", iinecount: "2", like: false },
      { text: "aauu", time: "12:30", iinecount: "3", like: true },
      { text: "aaee", time: "13:00", iinecount: "4", like: false },
    ];
    const result = [
      ...timelinitems,
      { text: "aaoo", time: "13:30", iinecount: "4", like: false },
    ];
    console.log(result);
  }
  huga();

  // 引数を受け取る関数の例
  function greet(name: string, age: number) {
    console.log(`${name}さんは${age}歳です。`);
  }
  // 関数を呼び出し、引数を渡す
  greet("太郎", 25); // 出力: 太郎さんは25歳です。

  //   console.log(result);
}
