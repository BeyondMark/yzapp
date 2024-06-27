var r = require("~/r");
r("8oOo", {
  "8oOo": function (e, t) {
    Component({
      properties: { slideData: Object, status: String },
      data: { bgWHScale: 1, imgLoading: !0 },
      lifetimes: {
        attached() {
          this.$_scale = 0;
        },
      },
      observers: {
        status: function (e) {
          "loading" === e && this.setData({ imgLoading: !0 });
        },
      },
      methods: {
        handleBGLoad(e) {
          var t = e.detail.width,
            i = this.createSelectorQuery();
          i.select(".component-display__bg").boundingClientRect((e) => {
            (this.$_scale = e.width / t),
              this.triggerEvent("load", this.$_scale);
          }),
            i.exec(),
            this.setData({ imgLoading: !1 });
        },
        handleBGLoadError(e) {
          wx.showToast({
            title: "图片加载失败：" + e.detail + "请稍后重试!",
            icon: "none",
            complete: () => {
              behaviorVerify.slideCaptcha.hide();
            },
          });
        },
        handleRefresh() {
          this.triggerEvent("refresh");
        },
      },
    });
  },
});
