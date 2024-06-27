"use strict";
var r = require("~/r");
r(
  "Ttd/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "Ttd/": function (e, s, t) {
      t.r(s);
      var a = t("7/pW"),
        r = t("VmHG"),
        i = getApp();
      Object(a.a)({
        options: { styleIsolation: "shared" },
        data: {},
        properties: {},
        observers: {},
        attached() {
          Object(r.d)(this, [
            "inputValue",
            "keyword",
            "focused",
            "hotSearchKeys",
            "isShowProducts",
            "searchHistory",
            "goodsOpt",
          ]),
            Object(r.b)(this, ["setVal", "fetchProductList", "handleRootTap"]);
        },
        methods: {
          onCloseTap() {
            var { items: e = [] } = this.data.goodsOpt;
            e.length > 0 && this.setVal({ isShowProducts: !0 });
          },
          onSearchKeyTap(e) {
            var {
              detail: { text: s },
            } = e;
            s &&
              (setTimeout(() => {
                this.setVal({ keyword: s, inputValue: s });
              }, 100),
              this.searchDone({ detail: s }));
          },
          searchChange(e) {
            var { detail: s = "" } = e;
            this.setVal({ inputValue: s });
          },
          searchDone(e) {
            var { detail: s = "" } = e;
            this.setVal({ keyword: s, page: 1 }),
              i.logger.log({
                et: "click",
                ei: "search",
                en: "搜索",
                params: { words: s },
              }),
              this.searchSaveHistory(s),
              this.fetchProductList();
          },
          searchFocus() {
            this.handleSearchClick(),
              this.setVal({ isShowProducts: !1, focused: !0 });
          },
          searchSaveHistory(e) {
            if (e) {
              var s = this.data.searchHistory.filter((s) => s !== e);
              s.unshift(e),
                (s = s.slice(0, 10)),
                this.setVal({ searchHistory: s }),
                wx.setStorage({ key: "search-history", data: s });
            }
          },
          searchHandleClearHistory() {
            this.setVal({ searchHistory: [] }),
              wx.removeStorage({ key: "search-history" });
          },
          handleSearchClick() {
            wx.redirectTo({
              url:
                "/packages/shop/search-page/index?keepWords=" +
                encodeURIComponent(this.data.inputValue) +
                "&isFromList=1",
            });
          },
        },
      });
    },
  })
);
