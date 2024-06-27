"use strict";
var r = require("~/r");
r(
  "uFxa",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    uFxa: function (e, o, t) {
      t.r(o);
      var s = t("7/pW"),
        a = t("VmHG");
      Object(s.a)({
        options: { styleIsolation: "shared" },
        data: { protocolIndex: 10001, noAutoAuth: !1 },
        properties: {},
        observers: {},
        attached() {
          Object(a.d)(this, [
            "keyword",
            "isShowProducts",
            "isSupportGoodsRecommend",
            "recommendHasData",
            "showRecommend",
            "layoutConfig",
            "slg",
            "goodsOpt",
            "showShareFloating",
            "listQuery",
            "totalAlias",
          ]),
            Object(a.b)(this, ["handleRootTap", "setGoodsViewLog"]);
        },
        methods: {
          onAfterload(e) {
            var { detail: o } = e,
              { recommendList: t = [] } = o;
            t.length <= 0
              ? this.setYZData({ recommendHasData: !1 })
              : this.setGoodsViewLog(t, "search");
          },
        },
      });
    },
  })
);
