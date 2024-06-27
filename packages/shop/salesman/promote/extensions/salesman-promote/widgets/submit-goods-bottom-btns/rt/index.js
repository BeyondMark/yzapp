"use strict";
var r = require("~/r");
r(
  "k0L5",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      k0L5: function (t, e, a) {
        a.r(e);
        var s = a("Fcif"),
          i = a("7/pW"),
          o = a("VmHG"),
          r = a("kHfR"),
          c = a("2ncY"),
          n = a("we3t"),
          d = a("gcCW");
        Object(i.a)({
          name: "GoodsBottomBtns",
          behaviors: [r.a],
          attached() {
            Object(o.d)(this, [
              "taskAwardData",
              "goodsActivityInfo",
              "goods",
              "kdtId",
              "alias",
              "buyBtnTextInfo",
              "shareBtnTextInfo",
              "disabledBtnTextInfo",
              "cubeGoodsInfo",
              "jumpGoodsDetailQuery",
              "goodsPictures",
              "shareWxData",
            ]),
              Object(o.b)(this, [
                "handleBigButtonClick",
                "handleMiniButtonClick",
                "setSalesmanData",
                "setTrackLooger",
                "updateThirdYunInfo",
              ]);
          },
          ready() {
            (this.ctx.data.shopBaseInfo = { kdtId: this.data.kdtId }),
              (this.ctx.data.customOptionListConfig = {
                weapp: [["share", "code", "salesman", "material", "zoom"]],
              }),
              this.ctx.event.listen("share:query", this.listener.bind(this));
          },
          observers: {
            "goodsPictures, cubeGoodsInfo.**": function (t, e) {
              var a = JSON.parse(JSON.stringify(t)),
                i = JSON.parse(JSON.stringify(e)),
                { goodsPrice: o, goodsActivityInfo: r } = i;
              (this.ctx.data.currentActivity = Object(s.a)({}, r)),
                (this.ctx.data.goodsPriceInfo = Object(s.a)({}, o)),
                (this.ctx.data.goodsSkuData = {}),
                (this.ctx.data.goodsBaseInfo = Object(s.a)({}, i, {
                  pictures: a,
                }));
            },
          },
          methods: {
            listener(t) {
              var e = JSON.parse(
                JSON.stringify(Object(s.a)({}, this.data.shareWxData, t))
              );
              this.ctx.process.invokePipe("setShareInfo", e).then((t) => {
                var a, i;
                this.ctx.data.shareInfo = e;
                var { title: o } = t,
                  r =
                    (null == o ||
                    null == (a = o.split("[分享]")) ||
                    null == (i = a.slice(-1))
                      ? void 0
                      : i[0]) || o;
                this.updateThirdYunInfo({
                  share: Object(s.a)({}, t, { title: "[分享]" + r }),
                });
              });
            },
            handleToGoodsDetail(t) {
              var { currentTarget: e } = t,
                { query: a } = e.dataset;
              this.setTrackLooger(d.b.clickPurchase),
                Object(n.k)(Object(c.h)(c.a, a));
            },
            handleJumpHome() {
              Object(n.k)(Object(c.h)(c.b));
            },
          },
        });
      },
    }
  )
);
