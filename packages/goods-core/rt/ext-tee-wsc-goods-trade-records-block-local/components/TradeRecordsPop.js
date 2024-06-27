"use strict";
var r = require("~/r");
r(
  "ud+V",
  Object.assign({}, require("~/v.js").modules, {
    "ud+V": function (e, o, t) {
      t.r(o);
      var s = t("ONqW"),
        r = {
          name: "trade-records-pop",
          props: {
            show: { type: Boolean, default: !1 },
            shopBaseInfo: { type: Object, default: () => ({}) },
            goodsBaseInfo: { type: Object, default: () => ({}) },
          },
          watch: {
            show(e) {
              e &&
                this.logger.log({
                  en: "成交记录模块-弹窗-曝光",
                  ei: "trade_records_pop_view",
                  et: "view",
                  pt: "g",
                  params: { goodsId: this.goodsBaseInfo.id },
                });
            },
          },
          created() {
            this.logger = Object(s.a)();
          },
          methods: {
            onClose() {
              this.$emit("close", !1);
            },
          },
          ud: !0,
        },
        a = t("9ZMt");
      o.default = a.default.component(r);
    },
  })
);
