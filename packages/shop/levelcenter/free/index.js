"use strict";
var r = require("~/r");
r(
  "s5rc",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      HAKf: function (e, t) {},
      "K0L/": function (e, t) {},
      LniI: function (e, t) {},
      OTjV: function (e, t, n) {
        n.d(t, "a", function () {
          return l;
        });
        var r = n("Fcif"),
          c = n("VmHG");
        function o(e) {
          return () => e;
        }
        function i(e) {
          return Object.keys(e).reduce((t, n) => {
            var r = e[n];
            return (
              (t[n] = function () {
                return r(this, this);
              }),
              t
            );
          }, {});
        }
        function a(e) {
          return Object.keys(e).reduce((t, n) => {
            var r = e[n];
            return (
              (t[n] = function () {
                for (
                  var e = this,
                    t = e,
                    n = arguments.length,
                    c = new Array(n),
                    o = 0;
                  o < n;
                  o++
                )
                  c[o] = arguments[o];
                return r(t, ...c);
              }),
              t
            );
          }, {});
        }
        function u(e) {
          return Object.keys(e).reduce((t, n) => {
            var r = e[n];
            return (
              (t[n] = function () {
                for (
                  var e = this,
                    t = (t, n) => {
                      e[t](n);
                    },
                    n = arguments.length,
                    c = new Array(n),
                    o = 0;
                  o < n;
                  o++
                )
                  c[o] = arguments[o];
                return r(
                  { state: e, getters: e, commit: t, dispatch: t },
                  ...c
                );
              }),
              t
            );
          }, {});
        }
        function l(e) {
          var { state: t, getters: n, actions: l, mutations: s } = e;
          return Object(c.a)({
            state: o(t),
            getters: i(n),
            actions: Object(r.a)({}, u(l), a(s)),
          });
        }
      },
      Qu2e: function (e, t, n) {
        n.d(t, "j", function () {
          return r;
        }),
          n.d(t, "l", function () {
            return c;
          }),
          n.d(t, "k", function () {
            return o;
          }),
          n.d(t, "h", function () {
            return i;
          }),
          n.d(t, "b", function () {
            return a;
          }),
          n.d(t, "d", function () {
            return u;
          }),
          n.d(t, "e", function () {
            return l;
          }),
          n.d(t, "i", function () {
            return s;
          }),
          n.d(t, "g", function () {
            return d;
          }),
          n.d(t, "a", function () {
            return f;
          }),
          n.d(t, "f", function () {
            return b;
          }),
          n.d(t, "c", function () {
            return p;
          }),
          n.d(t, "n", function () {
            return m;
          }),
          n.d(t, "m", function () {
            return g;
          });
        var r = 3,
          c = 6,
          o = 8,
          i = "init",
          a = { NO_RULE: r, RULE: c, PAY: o, ERROR_CARD_TYPE: -1 },
          u = 1,
          l = 0,
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
          f = 2,
          b = 3,
          p = {
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
          m =
            "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
          g = {
            appName: "更多权益",
            icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
            benefitTplId: 0,
          };
      },
      Sei9: function (e, t, n) {
        n.d(t, "f", function () {
          return s;
        }),
          n.d(t, "b", function () {
            return d;
          }),
          n.d(t, "c", function () {
            return b;
          }),
          n.d(t, "e", function () {
            return p;
          }),
          n.d(t, "g", function () {
            return m;
          }),
          n.d(t, "d", function () {
            return C;
          }),
          n.d(t, "h", function () {
            return j;
          }),
          n.d(t, "a", function () {
            return O;
          });
        var r = n("Fcif"),
          c = n("zMoS"),
          o = n("v6dD"),
          i = n("3tyi"),
          a = n("rDSc"),
          u = n("a1Mm"),
          l = n("Qu2e"),
          s = (e) => null == e;
        var d = (e, t, n, o) => {
            var {
              diyTemplateList: s = [],
              experienceCard: d,
              diyBenefitList: b,
            } = e;
            e = Object(a.a)(e, [
              "diyTemplateList",
              "experienceCard",
              "diyBenefitList",
            ]);
            var p = [],
              m = Object.keys(
                Object(i.a)(e, [
                  "postage",
                  "discount",
                  "memberPrice",
                  "pointsFeedBack",
                  "paidContent",
                ])
              ),
              g = Object.keys(
                Object(i.a)(e, ["points", "growth", "coupon", "present"])
              ),
              C = [];
            C =
              n && b
                ? b.map((e) => {
                    var t = Object.assign(
                      e.diyTemplate.benefitTemplateExternal,
                      Object(a.a)(e.diyTemplate, "benefitTemplateExternal")
                    );
                    return Object(r.a)({}, t, {
                      benefitId: e.benefitId,
                      termCycle: e.termCycle,
                      resetNum: e.stockNum,
                    });
                  })
                : s.map((e) => {
                    var t = Object.assign(
                      Object(c.a)(e, "benefitTemplateExternal", {}),
                      Object(a.a)(e, "benefitTemplateExternal")
                    );
                    return Object(r.a)({}, t);
                  });
            var j = m
                .map((t) => {
                  if (e[t]) {
                    var r = e[t];
                    return (
                      n
                        ? (((r =
                            "paidContent" === t
                              ? Object.assign(e[t][t + n], o[t])
                              : e[t][t + n]).resetNum = e[t].stockNum),
                          (r.termCycle = e[t].termCycle))
                        : (r.benefitId = e[t].benefitId),
                      (r.key = t),
                      delete e[t],
                      r
                    );
                  }
                  return null;
                })
                .filter((e) => !!e),
              O = g
                .map((t) => {
                  if (e[t]) {
                    var r = e[t];
                    return (
                      n
                        ? (((r =
                            "present" === t
                              ? Object.assign(e[t][t + n], o[t])
                              : e[t][t + n]).resetNum = e[t].stockNum),
                          (r.termCycle = e[t].termCycle))
                        : (r.benefitId = e[t].benefitId),
                      (r.key = t),
                      "coupon" === t &&
                        (r.total = r.couponList.reduce(
                          (e, t) => e + t.number,
                          0
                        )),
                      delete e[t],
                      r
                    );
                  }
                  return null;
                })
                .filter((e) => !!e),
              y = d;
            return (
              d &&
                n &&
                (y = Object.assign(
                  d.experienceCardTpl,
                  Object(a.a)(d, "experienceCardTpl")
                )),
              d &&
                t !== l.d &&
                p.unshift(Object(r.a)({}, y, { key: "experienceCard" })),
              ((e) =>
                e.map((e) =>
                  Object(r.a)({}, e, {
                    appName: Object(c.a)(e, "benefitPluginInfo.showName", ""),
                    label: f(e),
                    icon: Object(u.a)(
                      Object(c.a)(e, "benefitPluginInfo.icon", "")
                    ),
                  })
                ))((p = p.concat(j).concat(C).concat(O)))
            );
          },
          f = (e) => {
            var t = Object(c.a)(e, "key", ""),
              n = Object(c.a)(e, "benefitPluginInfo.description", "");
            switch (t) {
              case "discount":
                return "" + n + Object(c.a)(e, "discount", 100) / 10 + "折";
              case "experienceCard":
                return "" + n + Object(c.a)(e, "stockNum", 0) + "张";
              case "points":
                return "" + n + Object(c.a)(e, "points", 0) + "个";
              case "pointsFeedBack":
                return "" + n + Object(c.a)(e, "rate", 0) / 10 + "倍";
              case "growth":
                return "" + n + Object(c.a)(e, "growthValue", 0) + "个";
              default:
                return Object(c.a)(e, "benefitPluginInfo.description", "");
            }
          },
          b = function (e, t) {
            return void 0 === t && (t = "YYYY-MM-DD"), Object(o.b)(e, t);
          },
          p = (e) => {
            var t,
              n = {};
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
              n[t] = Object(c.a)(e, t, "");
            });
            var o = getApp().logger.getLogParams(),
              i =
                n.from_params ||
                (o &&
                  (null == o || null == (t = o.context)
                    ? void 0
                    : t.from_params));
            return (
              i &&
                (n = Object(r.a)({}, n, {
                  biz_trace_point_ext: Object(r.a)(
                    {},
                    n.biz_trace_point_ext || {},
                    { from_params: i }
                  ),
                })),
              n
            );
          },
          m = (e, t) => {
            var { grantCycle: n = !1, stockNum: r, resetNum: o } = e,
              i = Object(c.a)(
                e,
                "benefitPluginInfo.showName",
                Object(c.a)(e, "appName", "")
              );
            return n
              ? "权益卡有效期内，每" +
                  { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                    n.termDays
                  ] +
                  "可使用" +
                  e.stockNum +
                  "次" +
                  i +
                  "权益"
              : (!s(r) && !s(o)) || (!s(r) && !t)
              ? "权益卡有效期内，可使用" + r + "次" + i + "权益"
              : "权益卡有效期内，可使用" + i + "权益";
          },
          g = (e) => Object(o.b)(e, "YYYY-MM-DD"),
          C = (e) => Object(o.b)(e, "YYYY-MM-DD HH:mm:ss"),
          j = (e) => {
            switch (e.termType) {
              case 1:
                return "永久有效";
              case 2:
                return g(e.termBeginAt) + " - " + g(e.termEndAt);
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
      b1kB: function (e, t) {},
      cxMM: function (e, t) {},
      s5rc: function (e, t, n) {
        n.r(t);
        n("1uTS"), n("DVqm");
      },
      xBI0: function (e, t, n) {
        n.d(t, "a", function () {
          return r;
        });
        class r {
          constructor(e) {
            var { ctx: t } = e;
            this.ctx = t;
          }
        }
      },
      ygrD: function (e, t, n) {
        n.d(t, "a", function () {
          return i;
        });
        var r = n("K0L/"),
          c = n.n(r),
          o = n("9mFz");
        class i {
          constructor(e) {
            (this.onSkuSelected = Object(o.h)()),
              (this.ctx = e.ctx),
              this.initCloudData();
          }
          initCloudData() {}
        }
        i.widgets = { Main: c() };
      },
      yw36: function (e, t) {},
      zeDP: function (e, t, n) {
        n.d(t, "a", function () {
          return a;
        }),
          n.d(t, "b", function () {
            return u;
          });
        var r = n("eijD"),
          c = n("hHpg"),
          o = n("bsB/"),
          i = n("WNIS"),
          a = () =>
            new Promise((e, t) => {
              Object(o.d)()
                .then((t) => {
                  t
                    ? wx
                        .getStorage({ key: i.l })
                        .then((t) => {
                          t.data !== new Date().toLocaleDateString() && e(!0);
                        })
                        .catch(() => {
                          e(!0);
                        })
                    : e(!1);
                })
                .catch(() => t("授权能力获取失败"));
            });
        function u(e) {
          return l.apply(this, arguments);
        }
        function l() {
          return (l = Object(r.a)(function* (e) {
            var {
              templateIdList: t = [],
              onSuccess: n = null,
              onReject: r = null,
              onFail: a = null,
              onClose: u = null,
            } = e;
            Object(o.b)({
              scene: i.k,
              needAlwaysToast: !1,
              templateIdList: t,
              successCallBack: () => {
                wx.setStorage({
                  key: i.l,
                  data: new Date().toLocaleDateString(),
                })
                  .then(() => {
                    n && n();
                  })
                  .catch(() => {
                    Object(c.a)("订阅状态缓存设置失败");
                  });
              },
              rejectCallBack: () => {
                r && r();
              },
              closeCallBack: () => {
                u && u();
              },
              failCallBack: () => {
                a && a();
              },
            });
          })).apply(this, arguments);
        }
      },
    }
  )
);
