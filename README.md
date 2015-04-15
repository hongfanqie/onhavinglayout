# On having layout 中文翻译

[原文](http://www.satzansatz.de/cssd/onhavinglayout.html)
[译文](https://hongfanqie.github.io/onhavinglayout)。

本译文是在 [old9 的译文](https://github.com/old9/on-having-layout-zh-cns/)上更新与整理。

## 怎么做

将 doc 目录下 `zh.md` 与 `footer.html` 翻译为中文。

安装好 [Pandoc](http://johnmacfarlane.net/pandoc/) 与 [io.js](https://iojs.org/)。

```bash
git clone git@github.com:hongfanqie/onhavinglayout.git
cd viewports
npm install -g gulp-cli
npm install

# 查看 gulpfile.js 定义了哪些任务以及它们的作用
gulp clean
gulp
gulp deploy
```

### zh.md 是怎么来的

将[原文](http://www.satzansatz.de/cssd/onhavinglayout.html)网页源码保存为 `en.html`， 再用 pandoc 将它转为 markdown：

```bash
pandoc en.html -f html -t markdown --no-wrap -s -o en.md
```

将 `en.md` 另存为 `zh.md`。因为 pandoc 在 TOC 方面的问题，这里将 `en.html` 末尾部分复制到 `footer.html`, 同时将 `zh.md` 中对应的末尾部分删掉。

## 版权

译文 ["署名-非商用"](http://creativecommons.org/licenses/by-nc/4.0/)
