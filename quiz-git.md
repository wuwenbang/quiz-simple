# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？

请直接在这里作答。

答：
```sh
cd myProject 
git init 
git remote add origin git@github.cDEADBEAF:xxx/myProject.git
git pull
git branch newBranch
git checkout newBranch
git add .
git commit -m "init"
git push myProject newBranch
```

## Q2

你知道和用过哪些 Git 的方法论和技巧

答：
> 1. 在.gitignore里添加不需要提交的文件（如 node_modules .cache /dist 等）
> 2. 每写一个功能就commit一下，方便回退版本
