## 多行文本截断插件


### 引用

```html
<link rel="stylesheet" href="${base}/resources/jquery-multiTextToggleCollapse/index.css" />
<script type="text/javascript"
    src="${base}/resources/jquery-multiTextToggleCollapse/jquery.multiTextToggleCollapse.js"></script>
```

### 使用

```html
<div id="wrap-box-baseinfo">简介：这里有很多很多文字</div>
<script>
    // 使用
    $("#wrap-box-baseinfo").multiTextToggleCollapse({
        line: 4, // 最大显示行数，默认是  4
    });
</script>

```


