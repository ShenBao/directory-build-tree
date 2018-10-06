## directory-build-tree

根据目录生成字符串树

### Demo

可以根据目录生成如下所示的字符串树

```
directory-build-tree
├── build_tree
│   └── dist_tree.tree
├── package-lock.json
├── package.json
├── README.md
└── src
    ├── config.js
    ├── directoryToObject.js
    ├── index.js
    ├── matrixToTree.js
    ├── objectToMatrix.js
    └── writeTreeToDir.js
```

### 使用

```bash
node .\src\index.js  # 读取当前目录并生成字符串树

node .\src\index.js --exclude node_modules  # 忽略的目录
```

## 参数

- directory：设置根目录路径
- exclude: 设置忽略的文件(默认忽略`node_modules`)
- extensions: 设置文件夹的后缀
- depth: 设置遍历深度
- dist: 目录树结构输出位置(默认的输出位置为`/build_tree/dist_tree.tree`)

在命令行和`config.js`配置均生效，`config.js`配置优先级高于命令行

## License

The MIT License (MIT)