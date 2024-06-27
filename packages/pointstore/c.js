"use strict";
(exports.ids = [32]),
  (exports.modules = {
    GTd8: function (e, n, t) {
      t.d(n, "a", function () {
        return o;
      });
      var r = t("rBuL"),
        o = (e) => {
          var { kdt_id: n } = e;
          return new Promise((e, t) => {
            n
              ? e(n)
              : Object(r.a)()
                  .then((n) => {
                    e(n.current);
                  })
                  .catch((e) => {
                    t(e);
                  });
          });
        };
    },
    KkJw: function (e, n, t) {
      t.d(n, "d", function () {
        return o;
      }),
        t.d(n, "c", function () {
          return c;
        }),
        t.d(n, "b", function () {
          return i;
        }),
        t.d(n, "e", function () {
          return u;
        }),
        t.d(n, "a", function () {
          return a;
        });
      var r = getApp(),
        o = (e) =>
          r.request({
            path: "/wscump/pointstore/getResultPagePreDataForWeapp.json",
            data: e,
          }),
        c = (e) =>
          r.request({ path: "/wscump/pointstore/getPointGoods.json", data: e }),
        i = (e) =>
          r.request({ path: "/wscump/coupon/get_js_ticket.json", data: e }),
        u = (e) =>
          r.request({ path: "/wscuser/wx/getSyncTicket.json", data: e }),
        a = (e) =>
          r.request({
            path: "/wscump/coupon/coupon_use_redirect.json",
            data: e,
          });
    },
    SKM5: function (e, n, t) {
      var r = t("f/Xo"),
        o = t("nnso"),
        c = t("yoW1"),
        i = Object.prototype.toString,
        u = o(function (e, n, t) {
          null != n && "function" != typeof n.toString && (n = i.call(n)),
            (e[n] = t);
        }, r(c));
      e.exports = u;
    },
    nnso: function (e, n, t) {
      var r = t("y4Yo");
      e.exports = function (e, n) {
        return function (t, o) {
          return r(t, e, n(o), {});
        };
      };
    },
    snJB: function (e, n, t) {
      t.d(n, "a", function () {
        return o;
      });
      var r = getApp();
      function o() {
        return r
          .request({ path: "/wscump/pointstore/isPointStoreV2.json" })
          .catch(() => !1);
      }
    },
    xAyJ: function (e, n, t) {
      t.d(n, "a", function () {
        return s;
      }),
        t.d(n, "b", function () {
          return g;
        }),
        t.d(n, "c", function () {
          return m;
        });
      var r = t("KEq0"),
        o = t.n(r),
        c = t("zMoS"),
        i = t("bdYe"),
        u = t.n(i),
        a = {
          Color200: {
            direction: "135deg",
            colors: ["#B7D0FF", "#4E67B7"],
            bgColor: "#526AB9",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/704e415d887541d2bf9ce945483af305.png",
          },
          Color201: {
            direction: "135deg",
            colors: ["#959595", "#20242A"],
            bgColor: "#444",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/fb7d33fa35a5c118ba0495c09cdd1b3e.png",
          },
          Color202: {
            direction: "135deg",
            colors: ["#8BECBD", "#319E69"],
            bgColor: "#2F835A",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/7ac9de05b089cb13d36323d6864b8d49.png",
          },
          Color203: {
            direction: "135deg",
            colors: ["#FF9E97", "#C44E46"],
            bgColor: "#8B3C36",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/17fbdf65817fef6f4bd7acdb8fa414ab.png",
          },
          Color204: {
            direction: "135deg",
            colors: ["#FFDAA6", "#CE9A51"],
            bgColor: "#8C714B",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/659d46363828ac8f571bd4a13ad89458.png",
          },
          Color205: {
            direction: "135deg",
            colors: ["#FFB5C1", "#D73B5B"],
            bgColor: "#9D4456",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/7646eb0f59b1ce45d3cfbcb67686e93d.png",
          },
          Color206: {
            direction: "135deg",
            colors: ["#FCFCFC", "#A8A8A8"],
            bgColor: "#444444",
          },
        },
        s = function (e, n) {
          if ((void 0 === e && (e = "Color200"), n)) return o()(n, "middle");
          var t = a.Color200.imageUrl;
          return o()(Object(c.a)(a, e + ".imageUrl", t), "middle");
        },
        d = { denominations: 1, discount: 2, exchange: 3, meetGive: 4 },
        l = { none: 0, amount: 1, count: 2, all: 3 },
        f = { none: "", amount: "condition", count: "thresholdPiece" },
        p = (e) => {
          switch (e.preferentialType) {
            case d.denominations:
              return u()(e.denominations || 0, 100);
            case d.discount:
              return u()(e.discount || 0, 10);
            case d.exchange:
              return "商品兑换券";
            case d.meetGive:
              return "买" + e.thresholdPiece + "件";
            default:
              return "";
          }
        },
        g = (e) => ({
          unit: ((e) => {
            switch (e.preferentialType) {
              case d.denominations:
                return "元";
              case d.discount:
                return "折";
              case d.meetGive:
                return "送" + e.exchangeablePiece + "件";
              default:
                return "";
            }
          })(e),
          condition: ((e) => {
            var { thresholdMaxPiece: n } = e;
            switch (e.thresholdType) {
              case l.none:
                return "无门槛";
              case l.amount:
                return "满" + u()(e[f.amount], 100) + "元使用";
              case l.count:
                return (
                  "满" +
                  e[f.count] +
                  "件使用" +
                  (n ? ",超过" + n + "不可用" : "")
                );
              case l.all:
                return "满" + u()(e[f.amount], 100) + "元使用";
              default:
                return "";
            }
          })(e),
          denomination: p(e),
          denominationText: ((e) => {
            var n = p(e);
            switch (e.preferentialType) {
              case d.denominations:
                return "减" + n + "元";
              case d.discount:
                return "打" + n + "折";
              case d.exchange:
                return n;
              default:
                return "";
            }
          })(e),
        }),
        m = (e) => {
          var { denominations: n, preferenceCopywriting: t } = e;
          return n
            ? { text: u()(n || 0, 100), unit: "元" }
            : { text: t, unit: "" };
        };
    },
    y4Yo: function (e, n, t) {
      var r = t("JIgs");
      e.exports = function (e, n, t, o) {
        return (
          r(e, function (e, r, c) {
            n(o, t(e), r, c);
          }),
          o
        );
      };
    },
  });
