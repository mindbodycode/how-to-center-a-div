"use client";
// import Image from "next/image";
import { copyToClipboard } from "@/utils/functions";

export default function Home() {
  const centerDivOptions = [
    {
      name: "flexbox standard",
      idName: "flex-center",
      code: `.outer-div {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    },
    {
      name: "flexbox using margin: auto",
      idName: "flex2-center",
      code: `.outer-div {
  display: flex;
}

.inner-div {
  margin: auto;
}`,
    },
    {
      name: "grid standard",
      idName: "grid-center",
      code: `.outer-div {
  display: grid;
  align-items: center;
  justify-content: center;
}
`,
    },
    {
      name: "grid using place-items",
      idName: "grid2-center",
      code: `.outer-div {
  display: grid;
  place-items: center;
}
`,
    },
    {
      name: "grid using place-center",
      idName: "grid3-center",
      code: `.outer-div {
  display: grid;
  place-content: center;
}
`,
    },
    {
      name: "grid using place-self",
      idName: "grid4-center",
      code: `.outer-div {
  display: grid;
}

.inner-div {
  place-self: center;
}
`,
    },
    {
      name: "grid using margin: auto",
      idName: "grid5-center",
      code: `.outer-div {
  display: grid;
}

.inner-div {
  margin: auto;
}
`,
    },
    {
      name: "align-content justify-items",
      idName: "align-justify-center",
      code: `.outer-div {
  align-content: center;
  justify-content: center;
}
`,
    },
    {
      name: "old school postion absolute and transform",
      idName: "oldschool1",
      code: `.outer-div {
  position: relative;
}

.inner-div {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
`,
    },
    {
      name: "bit less old school with translate",
      idName: "oldschool2",
      code: `.outer-div {
  position: relative;
}

.inner-div {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
}
`,
    },
    {
      name: "even more modern old school approach with inset and margin",
      idName: "oldschool3",
      code: `.outer-div {
  position: relative;
}

#oldschool3 .inner-div {
  position: absolute;
  inset: 0;
  margin: auto;
}
`,
    },
  ];

  return (
    <>
      <div id="top" className="m-auto p-2">
        <div className="mb-9">
          <h1 className="text-3xl text-[#A8BAC0]">
            The never-ending quest for:
            <br />
            <span className="text-[#fdf8f6] text-4xl">
              How do you center a div?
            </span>
            <br />
            Below you may choose your poison:
          </h1>
          <ul className="m-2 text-xl">
            {centerDivOptions.map((item) => (
              <a key={item.name} href={`#${item.idName}`}>
                <li className="hover:bg-slate-500">{item.name}</li>
              </a>
            ))}
          </ul>
          <h2 className="text-xl">
            Based on content by my fav css expert: Kevin Powell
            <a
              href="https://www.youtube.com/shorts/YBMBhOxbKI0"
              target="_blank"
            >
              - link to video
            </a>
          </h2>
        </div>
        {centerDivOptions.map((item) => (
          <div key={item.name} id={item.idName} className="m-4 border-b-2">
            <div className="mx-4 my-6">
              <div id="" className="code-snippet">
                <h2 className="text-xl my-3">{item.name}</h2>
                <pre
                  title="click to copy code"
                  onClick={() => copyToClipboard(item.code)}
                  className="cursor-pointer"
                >
                  {item.code}
                </pre>
              </div>
              {/* <div className="outer-div rounded-lg size-32 my-2 bg-[rgb(240,30,212)]"> */}
              <div className="outer-div rounded-lg size-32 my-2 bg-[#2B3C4A]">
                <div className="inner-div rounded-lg size-14 bg-[rgb(107,240,30)]"></div>
              </div>
            </div>
            <a href="#top">
              <p className="text-sm">back to top</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
