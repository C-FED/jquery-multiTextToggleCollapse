; (function (window, $, undefined) {
    // <div class="tool-multiwrapbox" id="wrap-box-baseinfo">
    // 	<div class="multi-text">简介：${baseInfo["基金简介"]}</div>
    // 	<div class="multi-text_after"><span class="after-dots">... </span><span class="after-op op-btn"
    // 		id="btn-collapse">展开</span>
    // 	</div>
    // </div>

    var RESET_CLASS = 'reset-style';

    $.fn.multiTextToggleCollapse = function (settings) {
        var defalutConfig = {
            line: 4,
        };

        var config = $.extend(defalutConfig, settings);

        var $wrapBox = this;
        var wrapBox = $wrapBox[0];
        var text = $wrapBox.text();
        var lineHeight = parseInt($wrapBox.css("line-height"));

        $wrapBox.addClass('tool-multiwrapbox');
        wrapBox.style.cssText = ';height:' + config.line * lineHeight + 'px;';

        var textBox = document.createElement("div");

        textBox.className = "multi-text";
        textBox.innerHTML = text;

        var collapseBtn = document.createElement("span");

        collapseBtn.className = "after-op op-btn op-collapse";
        collapseBtn.innerHTML = "收起";

        textBox.appendChild(collapseBtn);

        var dots = document.createElement("span");

        dots.className = "after-dots";
        dots.innerHTML = "...";

        var expandBtn = document.createElement("span");

        expandBtn.className = "after-op op-btn";
        expandBtn.innerHTML = "展开";
        var btnWrapBox = document.createElement("div");

        btnWrapBox.className = "multi-text_after";
        btnWrapBox.style.cssText = ';top:' + (config.line - 1) * lineHeight + 'px;';

        btnWrapBox.appendChild(dots);
        btnWrapBox.appendChild(expandBtn);

        $wrapBox.html('');
        $wrapBox.append(textBox);
        $wrapBox.append(btnWrapBox);


        var $btnWrapBox = $(btnWrapBox);

        // 展开 
        expandBtn.onclick = function () {
            $btnWrapBox.hide();
            $wrapBox.addClass(RESET_CLASS);
        };
        // 收起  
        collapseBtn.onclick = function () {
            $btnWrapBox.show();
            $wrapBox.removeClass(RESET_CLASS);
        };

    };

}(this, jQuery));
