"use strict";
var r = require("~/r");
r(
  "ZbK1",
  Object.assign({}, require("~/v.js").modules, {
    ZbK1: function (e, t, c) {
      c.r(t);
      var h = c("aOlM"),
        a = {
          name: "ShopSearchBar",
          data: () => ({
            showAction: !1,
            keyword: "",
            placeholder: "",
            unWathcSearchPlaceholder: null,
          }),
          created() {
            this.unWathcSearchPlaceholder = this.ctx.watch(
              "searchPlaceholder",
              (e) => {
                this.placeholder = e;
              }
            );
          },
          destroyed() {
            this.unWathcSearchPlaceholder();
          },
          methods: {
            onFocus() {
              (this.showAction = !0),
                this.ctx.event.emit("search-focus", this.keyword);
            },
            onChange(e) {
              void 0 === e && (e = {});
              var { value: t = "" } = e;
              (this.keyword = t),
                this.ctx.event.emit("search-change", t),
                this.onDebounce(t);
            },
            onDebounce: Object(h.a)(function (e) {
              this.ctx.event.emit("search-change:debounce", e);
            }, 200),
            onCancel() {
              (this.keyword = ""),
                (this.showAction = !1),
                this.ctx.event.emit("search-cancel");
            },
            onClear() {
              this.onDebounce("");
            },
          },
          ud: !0,
        },
        o = c("9ZMt");
      t.default = o.default.component(a);
    },
  })
);
