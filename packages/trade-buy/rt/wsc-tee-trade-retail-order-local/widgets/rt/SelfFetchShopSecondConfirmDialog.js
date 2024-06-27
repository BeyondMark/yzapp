"use strict";
var r = require("~/r");
r(
  "+Vx/",
  Object.assign({}, require("~/v.js").modules, {
    "+Vx/": function (e, t, s) {
      s.r(t);
      var i = s("YeA1"),
        r = {
          props: {
            detail: { type: String, default: "" },
            distance: { type: String, default: "" },
            name: { type: String, default: "" },
          },
          data: () => ({ show: !1, general: "" }),
          created() {
            Object(i.b)(this, {
              themeColors: (e) => {
                this.general = null == e ? void 0 : e.general;
              },
            }),
              Object(i.b)(this, ["extra"]),
              this.ctx.process.define("validateSelfFetchShop", () =>
                this.validate()
              );
          },
          methods: {
            validate() {
              var e;
              return (
                "1" !==
                  (null == (e = this.extra)
                    ? void 0
                    : e.RETAIL_MINAPP_ORDER_SECOND_CONFIRM) ||
                new Promise((e, t) => {
                  (this.show = !0),
                    this.$on("select", (s) => {
                      (this.show = !1), s ? e(!0) : t("重新选择店铺自提点");
                    });
                })
              );
            },
            onSelectShop() {
              this.$emit("select-address"), this.$emit("select", !1);
            },
            onCreateOrder() {
              this.$emit("select", !0);
            },
          },
          ud: !0,
        },
        a = s("9ZMt");
      t.default = a.default.component(r);
    },
  })
);
