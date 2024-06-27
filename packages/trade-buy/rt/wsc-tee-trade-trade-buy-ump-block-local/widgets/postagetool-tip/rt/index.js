"use strict";
var r = require("~/r");
r(
  "qGfE",
  Object.assign({}, require("~/v.js").modules, {
    qGfE: function (e, t, o) {
      o.r(t);
      var i = o("YeA1"),
        s = {
          data: () => ({
            hasHaitaoGoods: !1,
            postageModel: null,
            enable: !1,
            isLogger: !1,
            showPromotionBest: !1,
          }),
          watch: {
            postageModel(e) {
              if (e) {
                var { meet: t, config: o, appType: i, lackValue: s } = e;
                (this.enable = !t && (null == o ? void 0 : o.isInGray)),
                  !this.isLogger &&
                    this.enable &&
                    (this.ctx.logger &&
                      this.ctx.logger.log({
                        et: "view",
                        ei: "free_shipping_view",
                        en: "凑包邮入口曝光",
                        pt: "trade",
                        params: { diff: s, ump_code: i },
                      }),
                    (this.isLogger = !0));
              }
            },
            state(e) {
              var t;
              this.showPromotionBest =
                1e3 ===
                (null == (t = e.promotionInfo)
                  ? void 0
                  : t.includeActivityType);
            },
          },
          created() {
            Object(i.b)(this, ["postageModel", "hasHaitaoGoods", "state"]);
          },
          methods: {
            click() {
              this.ctx.event.emit("postagetool:show", null);
            },
          },
          ud: !0,
        },
        a = o("9ZMt");
      t.default = a.default.component(s);
    },
  })
);
