import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useRouter } from "next/router";
import { getMdArticle } from "../utils/getMdArticle";
import { useEffect, useState } from "react";

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

function Article() {
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    const { title = "" } = router.query;
    if (title) {
      setContent(marked(getMdArticle(title as string)));
    }
  }, [router.query]);

  return (
    <article
      className="prose md:prose-lg lg:prose-xl"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}

export default Article;
