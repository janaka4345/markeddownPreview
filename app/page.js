"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
// import remarkGfm from "remark-gfm";
// import { marked } from "marked";
// import DOMPurify from "dompurify";

export default function Home() {
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(
      "# Welcome to my React Markdown Previewer! ## This is a sub-heading... ### And here's some other cool stuff:Heres some code,  `<div></div>`, between 2 backticks. ```// this is multi-line code:"
    );
  }, []);

  // const html = marked.parse("# Marked in Node.js\n\nRendered by **marked**.");
  return (
    <div>
      <textarea
        name=""
        id="editor"
        cols="300"
        rows="10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div id="preview">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{input}</ReactMarkdown>
      </div>
    </div>
  );
}
