export const debounce = `# 防抖和节流的简易实现

\`\`\`typescript
/** 节流 */
function throttled<Fn extends (...args: any) => any>(func: Fn, delay: number) {
  let allow = true;
  type P = Parameters<Fn>;
  return function (...args: P) {
    if (allow) {
      func(...[...args]);
      pass = false;
      setTimeout(() => {
        pass = true;
      }, delay);
    }
  };
}

/** 防抖 */
function debounce<Fn extends (...args: any) => any>(func: Fn, delay: number) {
  let id: number;
  type P = Parameters<Fn>;
  return function (...args: P) {
    clearTimeout(id);
    id = setTimeout(() => {
      func(...[...args]);
    }, delay);
  };
}

const handleClick = throttled(function (val: string, count: number) {
  console.log(val, count);
}, 1000);

// const handleClick = debounce(function (val: string, count: number) {
//   console.log(val, count);
// }, 1000);

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  handleClick('abc', 234);
});
\`\`\`

`;
