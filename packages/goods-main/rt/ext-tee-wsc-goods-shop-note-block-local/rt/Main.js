"use strict";
var r = require("~/r");
r(
  "wU6g",
  Object.assign({}, require("~/v.js").modules, {
    wU6g: function (e, t, o) {
      o.r(t);
      var s = o("YeA1"),
        r = {
          data: () => ({
            goodsExtendInfo: {},
            goodsBaseInfo: {},
            themeCSS: "",
            pageStyleCSS: "",
          }),
          computed: {
            themeVars() {
              return this.themeCSS + this.pageStyleCSS;
            },
            noteList() {
              var e = this.goodsExtendInfo.SHOP_NOTE;
              return e ? e.list : [];
            },
            goodsId() {
              return this.goodsBaseInfo.id;
            },
            showShopNote() {
              var { noteList: e } = this;
              return e.length > 0;
            },
            shopNoteBlockTitle() {
              var { noteList: e } = this;
              return (e[0] || {}).globalTitle || "店铺笔记";
            },
          },
          created() {
            Object(s.b)(this, [
              "goodsExtendInfo",
              "goodsBaseInfo",
              "themeCSS",
              "pageStyleCSS",
            ]);
          },
          ud: !0,
        },
        n = o("9ZMt");
      t.default = n.default.component(r);
    },
  })
);
