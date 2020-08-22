/**
 * @description 用正则获取 URL 中的 host，一定要用正则哦
 * @param {string} url 完整的url
 * @returns {string} 返回 url 中的 host
 */
const getHostName = (url) => {
  url = url.match(/https?:\/\/([^/]+)\//i);
  let result = '';
  if (url && url[1]) {
    result = url[1];
  }
  return result;
};

// * ---------------- 实现的效果：
{
  console.log(getHostName(`https://help.github.com/cn/github`)); // => `help.github.com`
}
