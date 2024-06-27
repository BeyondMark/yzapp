"use strict";
var r = require("~/r");
r(
  "cxQJ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    cxQJ: function (t, e, n) {
      n.r(e);
      var i = n("9ZMt"),
        r = n("Nvad"),
        u = n("gBZH"),
        a = {
          name: "normal-cover",
          props: {
            goodsBaseInfo: Object,
            goodsPriceInfo: Object,
            finalBigButtons: Array,
            kdtId: Number,
          },
          computed: {
            price() {
              return Object(r.b)(this.goodsPriceInfo.price);
            },
            buttons() {
              return this.finalBigButtons.map((t, e) => ({
                key: e + t.name,
                kdtId: this.kdtId,
                scene: this.authScene(t),
                dataset: t,
                authTypeList: this.authTypeList(t),
                btnText: this.btnText(t),
                btn: t,
              }));
            },
          },
          methods: {
            handleBigButtonClick(t) {
              this.$emit("big-buttons-click", t);
            },
            unNeedAuth(t) {
              var e = [u.a.ADD_CART, u.a.NORMAL_BUY].includes(
                t.accountUnionScene
              );
              return "qq" === i.default.getEnv() && e;
            },
            authScene(t) {
              return this.unNeedAuth(t) || t.isHaitaoForbiden
                ? ""
                : t.accountUnionScene;
            },
            authTypeList(t) {
              return this.unNeedAuth(t)
                ? []
                : t.isHaitaoForbiden
                ? ["mobile"]
                : [];
            },
            btnText(t) {
              var e;
              return (
                (Array.isArray(t.main) &&
                  (null == (e = t.main[0]) ? void 0 : e.text)) ||
                ""
              );
            },
          },
          ud: !0,
        };
      e.default = i.default.component(a);
    },
  })
);
