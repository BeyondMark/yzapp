"use strict";
var r = require("~/r");
r(
  "FCHJ",
  Object.assign({}, require("~/packages/async-main/c.js").modules, {
    FCHJ: function (e, t, s) {
      s.r(t);
      var a = s("o8v2"),
        i = {
          ready: "向右拖动滑块填充拼图",
          failed: "验证失败",
          success: "验证成功",
          loading: "加载中",
        },
        h = { success: "success", failed: "cross" },
        l =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAAPRJREFUSA1jYBhO4P///2oD5h+g5dVA/BuIA+juCKClLUAMAz+BDA+6OQJomSEQ/4XZDqW/A2lHejoiAWjhPzRHfAHyrenpiAw0B4C4H4HYhJ6OKMTiiLdAMT16OqIKiyNeAcU06emIZiyOeAYUU6GnI3qwOOIhUEyeno6YisURd4BiUjBHMIIUwDh0pG8A7bJnZGR8NVAOAPn1MhA7MIFYAwkGygGgKHABRsE7mnoemLwIJkKaOQBo+cBlQ6DlA1cQAS0fuKIYaPnAVUZAyweuOgZaPnANEqDlg6JJNnCNUlhBAgyJgWuWIzli4DomMEeQSgMAYqr1SM/RM9IAAAAASUVORK5CYII=";
      Component({
        data: {
          slideData: {},
          status: i.loading,
          show: !1,
          scale: 0,
          statusText: "加载中",
          slideIconName: l,
          moveX: 0,
          cy: 0,
          samllImgWith: 0,
        },
        lifetimes: {
          attached() {
            this.$_drag = Object(a.b)();
          },
        },
        observers: {
          status: function (e) {
            this.setData({
              statusText: i[e] || "加载中",
              slideIconName: h[e] || l,
            }),
              ("loading" !== e && "ready" !== e) || this.setMoveX({ x: 0 });
          },
          show: function (e) {
            e || this.setMoveX({ x: 0 });
          },
        },
        methods: {
          setSlideViewData(e) {
            this.setData({ slideData: e });
          },
          show() {
            this.setData({ show: !0 });
          },
          hide() {
            this.setData({ show: !1 });
          },
          handleIconLoad(e) {
            (this.samllImgWith = e.detail.width),
              this.scale && this.handleCalculateSize();
          },
          handleBGLoad(e) {
            (this.scale = e.detail),
              this.samllImgWith && this.handleCalculateSize();
          },
          handleCalculateSize(e) {
            var { scale: t, samllImgWith: s } = this;
            this.setData({
              scale: t,
              samllImgWith: t * s,
              cy: t * this.data.slideData.cy,
            });
          },
          handleRefresh() {
            this.onNeedCaptchaData(), this.triggerEvent("refresh");
          },
          handleClose() {
            this.hide(),
              this.onCancel && this.onCancel(),
              this.triggerEvent("close");
          },
          setMoveX(e) {
            var { x: t } = e;
            this.setData({ moveX: t });
          },
          handleTouchMove(e) {
            this.$_drag.move(e);
          },
          handleTouchEnd(e) {
            if ("ready" === this.data.status) {
              var t = this.createSelectorQuery(),
                { initLeft: s, cy: a } = this.data.slideData;
              t.select(".content")
                .boundingClientRect((e) => {
                  var i = this.$_drag.end(e.left, e.top);
                  i &&
                    t
                      .select(".slide-popup__control-mask--inner")
                      .boundingClientRect((e) => {
                        this.onComplete({
                          userDataList: i,
                          left: s + e.width,
                          top: a,
                          scale: this.data.scale,
                        });
                      })
                      .exec();
                })
                .exec();
            }
          },
        },
      });
    },
  })
);
