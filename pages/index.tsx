import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

const md = `# 劫持 websocket

因工作原因需要劫持第三方平台的 websocket 消息，其中利用了 Proxy 对象来方便的对 socket 实例属性进行一些特殊处理，代码如下：

\`\`\`javascript
const Ws = window.WebSocket;
function WsProxy(url, protocols) {
  const ws = new Ws(url, protocols);
  const proxy = new Proxy(ws, {
    get(target, p, receiver) {
      if (p === "send") {
        return ws[p].bind(ws);
      }
      return Reflect.get(target, p);
    },
    set(target, p, value, receiver) {
      if (p === "onmessage") {
        function fn(e) {
          console.log("劫持中-----------");
          value(e);
        }
        return Reflect.set(target, p, fn);
      }
      return Reflect.set(target, p, value);
    },
  });
  return proxy;
}
window.WebSocket = WsProxy;

// 假设以下是第三方平台的代码
const ws = new WebSocket("ws://121.40.165.18:8800");
ws.onmessage = function (e) {
  console.log(e.data);
};
ws.onopen = function (e) {
  if (ws.readyState === 1) {
    ws.send("你好");
  }
};
\`\`\`
`;

function HomePage() {
  return (
    <article
      className="prose md:prose-lg lg:prose-xl"
      dangerouslySetInnerHTML={{
        __html: marked(md),
      }}
    />
  );
}

export default HomePage;
