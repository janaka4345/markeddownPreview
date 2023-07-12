"use client";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { marked } from "marked";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {
  const { setTheme, theme } = useTheme();

  const [input, setInput] = useState(
    `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
  );
  marked.setOptions({ breaks: true, mangle: false, headerIds: false });
  return (
    <div className="">
      <div className="w-full h-[50px] flex flex-row items-center justify-end bg-gray-300 dark:bg-gray-800">
        <button
          className="text-white mr-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => setInput("")}
        >
          Clear
        </button>
        <button
          className="realtive flex justify-center  order-last items-center w-10 h-10"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="rotate-0 absolute   scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute   rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
      <div className="flex flex-row   w-full h-[100dvh] ">
        <div className=" pl-5 pt-5  min-w-[50%] ">
          <h1 className="mb-8 text-lg font-normal text-gray-500  lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            MarkedDown
          </h1>
          <textarea
            className="w-full h-full border"
            id="editor"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div className="min-w-[50%]  h-full overflow-y-scroll   bg-gray-200 prose prose-neutral dark:prose-invert pl-5 pt-5">
          <h1 className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Preview
          </h1>
          <div
            className="w-full h-full "
            id="preview"
            dangerouslySetInnerHTML={{
              // __html: DOMPurify.sanitize(marked(input)),
              __html: marked(input),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
