"use strict";
var r = require("~/r");
r(
  "Kdey",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Kdey: function (e, t, r) {
      r.r(t);
      var n = r("GFa9"),
        o = r("rqVN"),
        i = r("Sei9"),
        a = r("zMoS");
      Object(o.a)({
        data: { exInfo: null },
        properties: {
          benefit: { type: Object, value: {} },
          userBenefitDetail: { type: Object, value: {} },
          themeGeneral: String,
          hasCard: Boolean,
          hasUseAbility: Boolean,
          cardIsExpired: Boolean,
          isCurrentShopAvailable: Boolean,
        },
        methods: {
          toCoupon() {
            n.a.navigate({ url: "/packages/user/coupon/list/index" });
          },
          toPaid() {
            var { benefit: e } = this.properties,
              t = Object(a.a)(e, "benefitPluginInfo.payContentAlias", "");
            n.a.navigate({
              url: t ? "/packages/paidcontent/rights/index?alias=" + t : "",
            });
          },
          headerExtra() {
            var {
                cardIsExpired: e,
                benefit: t,
                hasCard: r,
                hasUseAbility: n,
                isCurrentShopAvailable: o,
              } = this.properties,
              {
                key: a,
                discount: c,
                stockNum: l,
                presentList: u,
                total: s,
                points: d,
                rate: p = 0,
              } = t;
            switch (a) {
              case "discount":
                return { opposite: !1, value: c / 10, unit: "折" };
              case "coupon":
                return n
                  ? { isBtn: !0, label: "查看", onClick: "toCoupon" }
                  : { opposite: !1, value: s, unit: "张" };
              case "paidContent":
                return { isBtn: !0, label: "查看", onClick: "toPaid" };
              case "present":
                return { opposite: !1, value: u.length || 0, unit: "份" };
              case "points":
                return { opposite: !0, value: d, unit: "" };
              case "pointsFeedBack":
                return { opposite: !1, value: p / 10, unit: "倍" };
              case "experienceCard":
                return r
                  ? {
                      isBtn: !0,
                      label: "分享",
                      btnId: "share",
                      disabled: e,
                      openType: !n || !r || !o ? "" : "share",
                      onClick: "",
                    }
                  : Object(i.f)(l)
                  ? null
                  : { opposite: !1, value: l, unit: "张" };
              case void 0:
                return Object(i.f)(l)
                  ? null
                  : { opposite: !1, value: l, unit: "次" };
              default:
                return null;
            }
          },
        },
        attached() {
          var e = this.headerExtra();
          this.setYZData({ exInfo: e });
        },
      });
    },
    Qu2e: function (e, t, r) {
      r.d(t, "j", function () {
        return n;
      }),
        r.d(t, "l", function () {
          return o;
        }),
        r.d(t, "k", function () {
          return i;
        }),
        r.d(t, "h", function () {
          return a;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return l;
        }),
        r.d(t, "e", function () {
          return u;
        }),
        r.d(t, "i", function () {
          return s;
        }),
        r.d(t, "g", function () {
          return d;
        }),
        r.d(t, "a", function () {
          return p;
        }),
        r.d(t, "f", function () {
          return b;
        }),
        r.d(t, "c", function () {
          return f;
        }),
        r.d(t, "n", function () {
          return C;
        }),
        r.d(t, "m", function () {
          return m;
        });
      var n = 3,
        o = 6,
        i = 8,
        a = "init",
        c = { NO_RULE: n, RULE: o, PAY: i, ERROR_CARD_TYPE: -1 },
        l = 1,
        u = 0,
        s = {
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
        d = 1,
        p = 2,
        b = 3,
        f = {
          Color030: "Color200",
          Color040: "Color200",
          Color050: "Color200",
          Color102: "Color201",
          Color010: "Color202",
          Color020: "Color202",
          Color082: "Color202",
          Color090: "Color203",
          Color100: "Color203",
          Color101: "Color203",
          Color060: "Color204",
          Color070: "Color204",
          Color080: "Color204",
          Color081: "Color204",
        },
        C =
          "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
        m = {
          appName: "更多权益",
          icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
          benefitTplId: 0,
        };
    },
    Sei9: function (e, t, r) {
      r.d(t, "f", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return d;
        }),
        r.d(t, "c", function () {
          return b;
        }),
        r.d(t, "e", function () {
          return f;
        }),
        r.d(t, "g", function () {
          return C;
        }),
        r.d(t, "d", function () {
          return g;
        }),
        r.d(t, "h", function () {
          return j;
        }),
        r.d(t, "a", function () {
          return O;
        });
      var n = r("Fcif"),
        o = r("zMoS"),
        i = r("v6dD"),
        a = r("3tyi"),
        c = r("rDSc"),
        l = r("a1Mm"),
        u = r("Qu2e"),
        s = (e) => null == e;
      var d = (e, t, r, i) => {
          var {
            diyTemplateList: s = [],
            experienceCard: d,
            diyBenefitList: b,
          } = e;
          e = Object(c.a)(e, [
            "diyTemplateList",
            "experienceCard",
            "diyBenefitList",
          ]);
          var f = [],
            C = Object.keys(
              Object(a.a)(e, [
                "postage",
                "discount",
                "memberPrice",
                "pointsFeedBack",
                "paidContent",
              ])
            ),
            m = Object.keys(
              Object(a.a)(e, ["points", "growth", "coupon", "present"])
            ),
            g = [];
          g =
            r && b
              ? b.map((e) => {
                  var t = Object.assign(
                    e.diyTemplate.benefitTemplateExternal,
                    Object(c.a)(e.diyTemplate, "benefitTemplateExternal")
                  );
                  return Object(n.a)({}, t, {
                    benefitId: e.benefitId,
                    termCycle: e.termCycle,
                    resetNum: e.stockNum,
                  });
                })
              : s.map((e) => {
                  var t = Object.assign(
                    Object(o.a)(e, "benefitTemplateExternal", {}),
                    Object(c.a)(e, "benefitTemplateExternal")
                  );
                  return Object(n.a)({}, t);
                });
          var j = C.map((t) => {
              if (e[t]) {
                var n = e[t];
                return (
                  r
                    ? (((n =
                        "paidContent" === t
                          ? Object.assign(e[t][t + r], i[t])
                          : e[t][t + r]).resetNum = e[t].stockNum),
                      (n.termCycle = e[t].termCycle))
                    : (n.benefitId = e[t].benefitId),
                  (n.key = t),
                  delete e[t],
                  n
                );
              }
              return null;
            }).filter((e) => !!e),
            O = m
              .map((t) => {
                if (e[t]) {
                  var n = e[t];
                  return (
                    r
                      ? (((n =
                          "present" === t
                            ? Object.assign(e[t][t + r], i[t])
                            : e[t][t + r]).resetNum = e[t].stockNum),
                        (n.termCycle = e[t].termCycle))
                      : (n.benefitId = e[t].benefitId),
                    (n.key = t),
                    "coupon" === t &&
                      (n.total = n.couponList.reduce(
                        (e, t) => e + t.number,
                        0
                      )),
                    delete e[t],
                    n
                  );
                }
                return null;
              })
              .filter((e) => !!e),
            h = d;
          return (
            d &&
              r &&
              (h = Object.assign(
                d.experienceCardTpl,
                Object(c.a)(d, "experienceCardTpl")
              )),
            d &&
              t !== u.d &&
              f.unshift(Object(n.a)({}, h, { key: "experienceCard" })),
            ((e) =>
              e.map((e) =>
                Object(n.a)({}, e, {
                  appName: Object(o.a)(e, "benefitPluginInfo.showName", ""),
                  label: p(e),
                  icon: Object(l.a)(
                    Object(o.a)(e, "benefitPluginInfo.icon", "")
                  ),
                })
              ))((f = f.concat(j).concat(g).concat(O)))
          );
        },
        p = (e) => {
          var t = Object(o.a)(e, "key", ""),
            r = Object(o.a)(e, "benefitPluginInfo.description", "");
          switch (t) {
            case "discount":
              return "" + r + Object(o.a)(e, "discount", 100) / 10 + "折";
            case "experienceCard":
              return "" + r + Object(o.a)(e, "stockNum", 0) + "张";
            case "points":
              return "" + r + Object(o.a)(e, "points", 0) + "个";
            case "pointsFeedBack":
              return "" + r + Object(o.a)(e, "rate", 0) / 10 + "倍";
            case "growth":
              return "" + r + Object(o.a)(e, "growthValue", 0) + "个";
            default:
              return Object(o.a)(e, "benefitPluginInfo.description", "");
          }
        },
        b = function (e, t) {
          return void 0 === t && (t = "YYYY-MM-DD"), Object(i.b)(e, t);
        },
        f = (e) => {
          var t,
            r = {};
          [
            "is_share",
            "dc_ps",
            "from_source",
            "from_params",
            "qr",
            "atr_ps",
            "gdt_vid",
            "qz_gdt",
          ].forEach((t) => {
            r[t] = Object(o.a)(e, t, "");
          });
          var i = getApp().logger.getLogParams(),
            a =
              r.from_params ||
              (i &&
                (null == i || null == (t = i.context)
                  ? void 0
                  : t.from_params));
          return (
            a &&
              (r = Object(n.a)({}, r, {
                biz_trace_point_ext: Object(n.a)(
                  {},
                  r.biz_trace_point_ext || {},
                  { from_params: a }
                ),
              })),
            r
          );
        },
        C = (e, t) => {
          var { grantCycle: r = !1, stockNum: n, resetNum: i } = e,
            a = Object(o.a)(
              e,
              "benefitPluginInfo.showName",
              Object(o.a)(e, "appName", "")
            );
          return r
            ? "权益卡有效期内，每" +
                { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                  r.termDays
                ] +
                "可使用" +
                e.stockNum +
                "次" +
                a +
                "权益"
            : (!s(n) && !s(i)) || (!s(n) && !t)
            ? "权益卡有效期内，可使用" + n + "次" + a + "权益"
            : "权益卡有效期内，可使用" + a + "权益";
        },
        m = (e) => Object(i.b)(e, "YYYY-MM-DD"),
        g = (e) => Object(i.b)(e, "YYYY-MM-DD HH:mm:ss"),
        j = (e) => {
          switch (e.termType) {
            case 1:
              return "永久有效";
            case 2:
              return m(e.termBeginAt) + " - " + m(e.termEndAt);
            case 4:
              return "领卡后" + e.termDays + "内有效";
            default:
              return "";
          }
        };
      function O(e) {
        return (
          void 0 === e && (e = ""),
          /iphone-x|iPhone11|iPhone13|iPhone14|iPhone12(?!,8>)/i.test(
            e.replace(/\s/g, "-") || ""
          ) || /iPhone14/i.test(e.replace(/\s/g, "") || "")
        );
      }
    },
  })
);
