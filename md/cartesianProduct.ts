export const cartesianProduct = `
# 求笛卡尔积
\`\`\`javascript
//假设一个商品有两种规格，[3个颜色]，[3个尺码]。3*3=9个SKU
let spec = [
  ["红","绿","蓝"],
  ["大","中","小"]
]

let sku = spec.reduce((x,y) =>{
    let arr = [];
    x.forEach(x => y.forEach(y => arr.push(x.concat([y]))))
    return arr;
},[[]])

console.log(sku)
//输出
/**
[
  ["红","大"],
  ["红","中"],
  ["红","小"],

  ["绿","大"],
  ["绿","中"],
  ["绿","小"],

  ["蓝","大"],
  ["蓝","中"],
  ["蓝","小"]]
*/
\`\`\`
`;
