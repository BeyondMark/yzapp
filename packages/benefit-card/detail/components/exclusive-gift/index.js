"use strict";
var r = require("~/r");
r(
  "5oK0",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "5oK0": function (e, t, r) {
      r.r(t);
      var a = r("rqVN"),
        s = r("zMoS"),
        o = r("w2Y9"),
        i = r.n(o),
        n = r("RY8z"),
        d = r("tuFO"),
        c = r.n(d);
      Object(a.a)({
        data: {
          statusMap: {
            unSent: 0,
            unTaken: 1,
            received: 2,
            deleted: 3,
            expired: 4,
          },
        },
        properties: {
          cardIsExpired: Boolean,
          themeGeneral: String,
          hasCarrier: { type: Boolean, value: !1 },
          gifts: { type: Array, value: [] },
        },
        methods: {
          takeEduPresent() {
            var e = this.properties.gifts[0],
              t = Object(s.a)(e, "cocGoodsInfo.goodsAlias"),
              r = Object(s.a)(e, "source"),
              a = Object(s.a)(e, "presentId"),
              o = Object(s.a)(e, "recordId"),
              d = JSON.stringify([{ presentId: a, presentRecordId: o }]),
              p = i.a.add("https://h5.youzan.com/wscvis/ump/receive-present", {
                alias: t,
                presentSource: r,
                presentQueryParams: d,
              });
            p = c()(p, "h5", this.kdtId);
            var u =
              "/packages/edu/webview/index?targetUrl=" + encodeURIComponent(p);
            n.a.navigate({ url: u || "" });
          },
          takeNormalPresent() {
            var e = this.properties.gifts[0],
              t =
                "/packages/goods/present/index?alias=" +
                Object(s.a)(e, "cocGoodsInfo.goodsAlias") +
                "&type=present&activityId=" +
                Object(s.a)(e, "receiveRecordAlias");
            n.a.navigate({ url: t || "" });
          },
          takePresent() {
            var e = this.properties.gifts[0];
            if (e)
              switch (+Object(s.a)(e, "cocGoodsInfo.goodsType", 0)) {
                case 31:
                  this.takeEduPresent();
                  break;
                default:
                  this.takeNormalPresent();
              }
            else this.takeNormalPresent();
          },
        },
        attached() {},
      });
    },
  })
);
