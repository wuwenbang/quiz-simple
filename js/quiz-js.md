# JS 使用和基本编程

## 写代码

请完成以下文件中的编码需求：

- [查看 `clone.js`](./clone.js)
- [查看 `get-host.js`](./get-host.js)
- [查看 `get-sum.js`](./get-sum.js)

## 方法论

如果你有一定的开发经验，并且追求代码的质量。  
那么你一定知道一些实践技巧，简答 3 ～ 10 条即可。

例如：

> 面向对象编程，代码逻辑可以内聚。
> 禁止使用 var，不可变数据用 const 声明，可变数据用 let 声明。

答：
> 1. 抽离重复代码
> 2. 表驱动编程
> 3. 数据统一管理
> 4. 测试驱动编程
> 5. 高内聚，低耦合
> 6. 取变量名符合逻辑
## 请问以下代码做了什么事情

```js
const getLoglevel = () => {
  return localStorage.loglevel ?? 'INFO';
};
```

答：
> 提取本地`logleve`l数据：
> 如果`logleve`存在返回其本身，否则返回`INFO`字符串
