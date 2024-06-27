"use strict";
var r = require("~/r");
r(
  "CgYP",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    CgYP: function (e, t, i) {
      i.r(t);
      var r = i("Fcif"),
        a = i("u8kV");
      Object(a.c)({
        properties: {
          list: { type: Array, value: [], observer: "initToggle" },
          hotListLoggerParams: { type: Object, value: {} },
          title: String,
          showClear: Boolean,
          maxLineNum: Number,
        },
        data: { showToggle: !1 },
        methods: {
          initToggle(e) {
            var { maxLineNum: t } = this.data;
            if (e.length > 0 && t > 0) {
              var i = wx.createSelectorQuery().in(this);
              i.select(".deco-words-list__inner").boundingClientRect(),
                i.exec((e) => {
                  if (e && e.length) {
                    var i = 40 * t;
                    e[0].height > i &&
                      this.setYZData({
                        showToggle: !0,
                        isHidden: !0,
                        hiddenStyle:
                          "max-height: " + i + "px; overflow: hidden;",
                      });
                  }
                });
            }
          },
          toggleHidden() {
            this.setYZData({ isHidden: !this.data.isHidden, immediate: !0 });
          },
          handleClickClear() {
            this.triggerEvent("clear");
          },
          handleClickWordItem(e) {
            var { hotListLoggerParams: t } = this.data;
            this.triggerEvent(
              "word-item-click",
              Object(r.a)({}, t, { wordItem: e.detail })
            );
          },
        },
      });
    },
  })
);
