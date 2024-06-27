var r = require("~/r");
r("goIc", {
  goIc: function (e, t) {
    Component({
      data: { keywords: [] },
      lifetimes: {
        attached() {
          var e = wx.getStorageSync("RETAIL_SHOP_SEARCH_KEY") || [];
          this.setData({ keywords: e });
        },
      },
      methods: {
        deleteAllKeywords() {
          wx.removeStorageSync("RETAIL_SHOP_SEARCH_KEY"),
            this.setData({ keywords: [] });
        },
        onSelectKeyword(e) {
          var {
            currentTarget: {
              dataset: { keyword: t },
            },
          } = e;
          this.triggerEvent("onSelectKeyword", { value: t });
        },
        saveKeyword(e) {
          var t,
            r = null != (t = null == e ? void 0 : e.trim()) ? t : "";
          if (r) {
            var { keywords: a } = this.data;
            ~a.indexOf(r) ||
              (a.unshift(r),
              a.length > 10 && a.pop(),
              this.setData({ keywords: [...a] }),
              wx.setStorageSync("RETAIL_SHOP_SEARCH_KEY", a));
          }
        },
      },
    });
  },
});
