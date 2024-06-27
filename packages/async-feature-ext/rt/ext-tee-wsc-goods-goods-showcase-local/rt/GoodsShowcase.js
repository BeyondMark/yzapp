"use strict";
var r = require("~/r");
r(
  "toc4",
  Object.assign({}, require("~/v.js").modules, {
    toc4: function (e, o, t) {
      t.r(o);
      var r = t("YeA1"),
        s = t("Tewj"),
        a = {
          props: { showGoodsShowcase: { type: Boolean, default: !0 } },
          data() {
            return {
              hasGoodsShowcase: !1,
              routeData: {},
              themeVars: "",
              loggerObj: { logger: this.ctx.logger },
              kdtId: "",
              marketing: {},
              offlineId: 0,
              buyerId: 0,
              shopMetaInfo: {},
              routeKey: "",
            };
          },
          created() {
            var { route: e, getQuery: o } = this.ctx.env;
            this.routeData = { route: e, query: o() };
            var t = Math.random();
            (this.routeKey = "" + e + t),
              Object(r.b)(this, [
                "kdtId",
                "themeVars",
                "offlineId",
                "shopMetaInfo",
                "buyerId",
                "hasGoodsShowcase",
                "goodsShocase",
              ]),
              Object(r.d)(this, {
                "goods:showcase": (e) => {
                  s.default.trigger(
                    "popupContainer:goods:showcase" + this.routeKey,
                    e
                  );
                },
              });
          },
          methods: {
            doLog(e) {
              this.ctx.logger.log(e);
            },
            dmcJump(e) {
              var { type: o, page: t, options: r, extra: s } = e;
              this.ctx.dmc[o](t, r, s);
            },
            openFloatGoods(e) {
              var { open: o } = e;
              this.ctx.data.openFloatGoods = o;
            },
          },
        },
        d = t("9ZMt");
      o.default = d.default.component(a);
    },
  })
);
