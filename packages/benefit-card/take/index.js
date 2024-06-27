"use strict";
var r = require("~/r");
r(
  "iy3x",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      NERQ: function (e, t, a) {
        var r = [],
          n = {
            show: !1,
            title: "",
            width: null,
            theme: "default",
            message: "",
            zIndex: 100,
            overlay: !0,
            selector: "#van-dialog",
            className: "",
            asyncClose: !1,
            beforeClose: null,
            transition: "scale",
            customStyle: "",
            messageAlign: "",
            overlayStyle: "",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnClickOverlay: !1,
            confirmButtonOpenType: "",
          },
          i = Object.assign({}, n);
        var c = (e) => (
          (e = Object.assign(Object.assign({}, i), e)),
          new Promise((t, a) => {
            var n,
              i = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (n = getCurrentPages())[n.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              i &&
                (i.setData(
                  Object.assign(
                    {
                      callback: (e, r) => {
                        "confirm" === e ? t(r) : a(r);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  i.setData({ show: !0 });
                }),
                r.push(i));
          })
        );
        (c.alert = (e) => c(e)),
          (c.confirm = (e) => c(Object.assign({ showCancelButton: !0 }, e))),
          (c.close = () => {
            r.forEach((e) => {
              e.close();
            }),
              (r = []);
          }),
          (c.stopLoading = () => {
            r.forEach((e) => {
              e.stopLoading();
            });
          }),
          (c.currentOptions = i),
          (c.defaultOptions = n),
          (c.setDefaultOptions = (e) => {
            (i = Object.assign(Object.assign({}, i), e)),
              (c.currentOptions = i);
          }),
          (c.resetDefaultOptions = () => {
            (i = Object.assign({}, n)), (c.currentOptions = i);
          }),
          c.resetDefaultOptions(),
          (t.a = c);
      },
      Qu2e: function (e, t, a) {
        a.d(t, "j", function () {
          return r;
        }),
          a.d(t, "l", function () {
            return n;
          }),
          a.d(t, "k", function () {
            return i;
          }),
          a.d(t, "h", function () {
            return c;
          }),
          a.d(t, "b", function () {
            return o;
          }),
          a.d(t, "d", function () {
            return s;
          }),
          a.d(t, "e", function () {
            return l;
          }),
          a.d(t, "i", function () {
            return d;
          }),
          a.d(t, "g", function () {
            return u;
          }),
          a.d(t, "a", function () {
            return f;
          }),
          a.d(t, "f", function () {
            return h;
          }),
          a.d(t, "c", function () {
            return b;
          }),
          a.d(t, "n", function () {
            return p;
          }),
          a.d(t, "m", function () {
            return m;
          });
        var r = 3,
          n = 6,
          i = 8,
          c = "init",
          o = { NO_RULE: r, RULE: n, PAY: i, ERROR_CARD_TYPE: -1 },
          s = 1,
          l = 0,
          d = {
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
          u = 1,
          f = 2,
          h = 3,
          b = {
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
          p =
            "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
          m = {
            appName: "更多权益",
            icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
            benefitTplId: 0,
          };
      },
      Sei9: function (e, t, a) {
        a.d(t, "f", function () {
          return d;
        }),
          a.d(t, "b", function () {
            return u;
          }),
          a.d(t, "c", function () {
            return h;
          }),
          a.d(t, "e", function () {
            return b;
          }),
          a.d(t, "g", function () {
            return p;
          }),
          a.d(t, "d", function () {
            return g;
          }),
          a.d(t, "h", function () {
            return C;
          }),
          a.d(t, "a", function () {
            return O;
          });
        var r = a("Fcif"),
          n = a("zMoS"),
          i = a("v6dD"),
          c = a("3tyi"),
          o = a("rDSc"),
          s = a("a1Mm"),
          l = a("Qu2e"),
          d = (e) => null == e;
        var u = (e, t, a, i) => {
            var {
              diyTemplateList: d = [],
              experienceCard: u,
              diyBenefitList: h,
            } = e;
            e = Object(o.a)(e, [
              "diyTemplateList",
              "experienceCard",
              "diyBenefitList",
            ]);
            var b = [],
              p = Object.keys(
                Object(c.a)(e, [
                  "postage",
                  "discount",
                  "memberPrice",
                  "pointsFeedBack",
                  "paidContent",
                ])
              ),
              m = Object.keys(
                Object(c.a)(e, ["points", "growth", "coupon", "present"])
              ),
              g = [];
            g =
              a && h
                ? h.map((e) => {
                    var t = Object.assign(
                      e.diyTemplate.benefitTemplateExternal,
                      Object(o.a)(e.diyTemplate, "benefitTemplateExternal")
                    );
                    return Object(r.a)({}, t, {
                      benefitId: e.benefitId,
                      termCycle: e.termCycle,
                      resetNum: e.stockNum,
                    });
                  })
                : d.map((e) => {
                    var t = Object.assign(
                      Object(n.a)(e, "benefitTemplateExternal", {}),
                      Object(o.a)(e, "benefitTemplateExternal")
                    );
                    return Object(r.a)({}, t);
                  });
            var C = p
                .map((t) => {
                  if (e[t]) {
                    var r = e[t];
                    return (
                      a
                        ? (((r =
                            "paidContent" === t
                              ? Object.assign(e[t][t + a], i[t])
                              : e[t][t + a]).resetNum = e[t].stockNum),
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
              O = m
                .map((t) => {
                  if (e[t]) {
                    var r = e[t];
                    return (
                      a
                        ? (((r =
                            "present" === t
                              ? Object.assign(e[t][t + a], i[t])
                              : e[t][t + a]).resetNum = e[t].stockNum),
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
              x = u;
            return (
              u &&
                a &&
                (x = Object.assign(
                  u.experienceCardTpl,
                  Object(o.a)(u, "experienceCardTpl")
                )),
              u &&
                t !== l.d &&
                b.unshift(Object(r.a)({}, x, { key: "experienceCard" })),
              ((e) =>
                e.map((e) =>
                  Object(r.a)({}, e, {
                    appName: Object(n.a)(e, "benefitPluginInfo.showName", ""),
                    label: f(e),
                    icon: Object(s.a)(
                      Object(n.a)(e, "benefitPluginInfo.icon", "")
                    ),
                  })
                ))((b = b.concat(C).concat(g).concat(O)))
            );
          },
          f = (e) => {
            var t = Object(n.a)(e, "key", ""),
              a = Object(n.a)(e, "benefitPluginInfo.description", "");
            switch (t) {
              case "discount":
                return "" + a + Object(n.a)(e, "discount", 100) / 10 + "折";
              case "experienceCard":
                return "" + a + Object(n.a)(e, "stockNum", 0) + "张";
              case "points":
                return "" + a + Object(n.a)(e, "points", 0) + "个";
              case "pointsFeedBack":
                return "" + a + Object(n.a)(e, "rate", 0) / 10 + "倍";
              case "growth":
                return "" + a + Object(n.a)(e, "growthValue", 0) + "个";
              default:
                return Object(n.a)(e, "benefitPluginInfo.description", "");
            }
          },
          h = function (e, t) {
            return void 0 === t && (t = "YYYY-MM-DD"), Object(i.b)(e, t);
          },
          b = (e) => {
            var t,
              a = {};
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
              a[t] = Object(n.a)(e, t, "");
            });
            var i = getApp().logger.getLogParams(),
              c =
                a.from_params ||
                (i &&
                  (null == i || null == (t = i.context)
                    ? void 0
                    : t.from_params));
            return (
              c &&
                (a = Object(r.a)({}, a, {
                  biz_trace_point_ext: Object(r.a)(
                    {},
                    a.biz_trace_point_ext || {},
                    { from_params: c }
                  ),
                })),
              a
            );
          },
          p = (e, t) => {
            var { grantCycle: a = !1, stockNum: r, resetNum: i } = e,
              c = Object(n.a)(
                e,
                "benefitPluginInfo.showName",
                Object(n.a)(e, "appName", "")
              );
            return a
              ? "权益卡有效期内，每" +
                  { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                    a.termDays
                  ] +
                  "可使用" +
                  e.stockNum +
                  "次" +
                  c +
                  "权益"
              : (!d(r) && !d(i)) || (!d(r) && !t)
              ? "权益卡有效期内，可使用" + r + "次" + c + "权益"
              : "权益卡有效期内，可使用" + c + "权益";
          },
          m = (e) => Object(i.b)(e, "YYYY-MM-DD"),
          g = (e) => Object(i.b)(e, "YYYY-MM-DD HH:mm:ss"),
          C = (e) => {
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
      iy3x: function (e, t, a) {
        a.r(t);
        var r = a("qJXH"),
          n = a("NERQ"),
          i = a("zMoS"),
          c = a("xyw3"),
          o = a("DXqK"),
          s = a("Sei9"),
          l = a("Qu2e"),
          d = a("/1Zb"),
          u = getApp(),
          f = u.getShopInfoSync();
        Object(r.b)({
          data: {
            alias: "",
            cardInfo: {},
            benefits: [],
            unQualified: !1,
            hasMobile: !1,
            shopName: Object(i.a)(f, "base.shop_name", ""),
            share: { nickName: "", avatar: "" },
            tokenNum: 0,
            cardExpire: "",
            cardNo: 0,
            coverUrl: "",
            customClass: "",
            isCurrentShopAvailable: !1,
          },
          onLoad(e) {
            void 0 === e && (e = {}),
              Object(d.a)(e, this.__route__)
                .then(() => {
                  this.handleOnLoad(e);
                })
                .catch(() => {
                  this.handleOnLoad(e);
                });
          },
          handleOnLoad(e) {
            var { alias: t, card_no: a } = e;
            (this.cardNo = a), (this.alias = t);
            var r = !!u.getBuyerId();
            this.fetchCardInfo(),
              this.fetchShareInfo(),
              this.fetchExperienceLog(),
              this.setYZData({ alias: t, hasMobile: r, cardNo: a });
          },
          onPullDownRefresh() {
            this.fetchCardInfo(),
              this.fetchShareInfo(),
              this.fetchExperienceLog();
          },
          fetchCardInfo() {
            wx.showLoading({ title: "请求中" }),
              u
                .request({
                  path: "/wscuser/scrm/api/benefitcard/getExperienceCardTplInfo.json",
                  data: { cardAlias: this.alias, cardNo: this.cardNo },
                })
                .then((e) => {
                  if ((wx.stopPullDownRefresh(), e)) {
                    this.checkCanTakeCard();
                    var { termEndAt: t } = e,
                      a = new Date().getTime();
                    if (t > 0 && t < a)
                      return this.takeResultDialog({
                        message: "体验卡已过期",
                        confirmText: "去领权益卡",
                        cancelText: "进店逛逛",
                        confirmLink: "card",
                        cancelLink: "shop",
                      });
                    var r = Object(i.a)(e, "cardTemplateDTO.benefitBag", {}),
                      n = Object(s.b)(r, l.d);
                    n.length > 4 && (n = n.slice(0, 3)).push(l.m),
                      this.setYZData({
                        cardInfo: e,
                        benefits: n,
                        customClass:
                          n && n.length < 4 ? "align-center-list" : "",
                        cardExpire: this.getCardExpire(e),
                        coverUrl: this.getCoverUrl(e),
                        isCurrentShopAvailable: Object(i.a)(
                          e,
                          "cardTemplateDTO.isCurrentShopAvailable",
                          !1
                        ),
                      });
                  }
                })
                .catch((e) => {
                  var { msg: t } = e;
                  wx.stopPullDownRefresh(),
                    wx.hideLoading(),
                    wx.showToast({ title: t, icon: "none", duration: 1e3 });
                });
          },
          fetchShareInfo() {
            u.request({
              path: "/wscuser/scrm/api/benefitcard/getShareInfo.json",
              query: { cardNo: this.cardNo },
            })
              .then((e) => {
                this.setYZData({ share: e });
              })
              .catch((e) => {
                wx.showToast({ title: e.msg, icon: "none", duration: 2e3 });
              });
          },
          fetchExperienceLog() {
            u.request({
              path: "/wscuser/scrm/api/benefitcard/getExperienceLog.json",
              query: { cardNo: this.cardNo },
            }).then((e) => {
              this.setYZData({
                tokenNum: Object(i.a)(e, "items.length", 0),
                disabled: !1,
              });
            });
          },
          checkCanTakeCard() {
            u.request({
              path: "/wscuser/scrm/api/benefitcard/canTakeExperienceCardJson.json",
              data: { card_alias: this.data.alias },
            })
              .then(() => {
                wx.hideLoading(), this.setYZData({ unQualified: !1 });
              })
              .catch((e) => {
                var { msg: t } = e;
                wx.hideLoading(),
                  this.setYZData({ unQualified: !0 }),
                  this.takeResultDialog({
                    message: t || "暂无法领取",
                    confirmText: "查看我的权益",
                    cancelText: "进店逛逛",
                    confirmLink: "userCenter",
                    cancelLink: "shop",
                  });
              });
          },
          getCardExpire(e) {
            var t = Object(i.a)(
                e,
                "cardTemplateDTO.benefitBag.experienceCard.experienceCardTermCycle",
                {}
              ),
              { termDays: a = 0 } = t,
              r = new Date();
            return Object(s.c)(r) + " 至 " + Object(s.c)(Object(o.e)(a - 1));
          },
          getTakeCardTips() {
            var e = Object(i.a)(
                this,
                "data.cardInfo.cardTemplateDTO.ruleCondition",
                {}
              ),
              t = "";
            return (
              ["amountLimit", "tradeLimit", "pointsLimit"].some(
                (a) => void 0 !== e[a] && ((t = this.getRuleTips(a, e[a])), !0)
              ),
              t
            );
          },
          getRuleTips: (e, t) =>
            ({
              amountLimit:
                "体验卡被领完啦，消费" + Object(c.a)(t).toYuan() + "元即可领卡",
              tradeLimit: "体验卡被领完啦，完成" + t + "笔订单即可领卡",
              pointsLimit: "体验卡被领完啦，获得" + t + "积分即可领卡",
            }[e]),
          handleTakeCard() {
            this.checkCardNum() || (this.data.hasMobile && this.doActivate());
          },
          takeCardAfterLogin() {
            this.checkCardNum() || this.doActivate();
          },
          checkCardNum() {
            var e = Object(i.a)(
                this.data.cardInfo,
                "cardTemplateDTO.benefitBag.experienceCard.stockNum",
                0
              ),
              t = Object(i.a)(
                this.data.cardInfo,
                "cardTemplateDTO.cardAcquireSetting",
                l.b.NO_RULE
              );
            return (
              !!(this.data.tokenNum && this.data.tokenNum >= e) &&
              (t !== l.b.RULE
                ? this.takeResultDialog({
                    message: "来晚了，体验卡被领取完了",
                    confirmText: "去领权益卡",
                    cancelText: "进店逛逛",
                    confirmLink: "card",
                    cancelLink: "shop",
                  })
                : this.takeResultDialog({
                    message: this.getTakeCardTips(),
                    confirmText: "进店逛逛",
                    cancelText: "查看我的权益",
                    confirmLink: "shop",
                    cancelLink: "userCenter",
                  }),
              !0)
            );
          },
          doActivate() {
            Object(i.a)(
              this.data.cardInfo,
              "cardTemplateDTO.activationCondition.requireProfile",
              !0
            )
              ? wx.navigateTo({
                  url:
                    "/packages/benefit-card/active/index?card_no=" +
                    this.data.cardNo +
                    "&alias=" +
                    this.data.alias +
                    "&sub_type=" +
                    l.d,
                })
              : (wx.showLoading({ title: "请求中" }),
                u
                  .request({
                    path: "/wscuser/scrm/api/benefitcard/experience/take.json",
                    data: {
                      cardAlias: this.data.alias,
                      cardNo: this.data.cardNo,
                    },
                  })
                  .then(() => {
                    wx.hideLoading(),
                      wx.redirectTo({
                        url:
                          "/packages/benefit-card/detail/index?alias=" +
                          this.data.alias,
                      });
                  })
                  .catch((e) => {
                    wx.hideLoading(),
                      wx.showToast({
                        title: e.msg,
                        icon: "none",
                        duration: 1e3,
                      });
                  }));
          },
          takeResultDialog(e) {
            var {
                message: t,
                confirmText: a,
                cancelText: r,
                confirmLink: i,
                cancelLink: c,
              } = e,
              o = {
                shop: "/packages/home/dashboard/index",
                userCenter: u.globalData.isRetailApp
                  ? "/packages/retail/usercenter/dashboard-v2/index"
                  : "/packages/usercenter/dashboard/index",
                card:
                  "/packages/benefit-card/detail/index?alias=" +
                  this.data.alias,
              };
            n.a
              .confirm({
                message: t,
                confirmButtonText: a,
                cancelButtonText: r,
              })
              .then(() => {
                "card" === i
                  ? wx.navigateTo({ url: o[i] })
                  : wx.reLaunch({ url: o[i] });
              })
              .catch(() => {
                "card" === c
                  ? wx.navigateTo({ url: o[c] })
                  : wx.reLaunch({ url: o[c] });
              });
          },
          getCoverUrl(e) {
            var t = this.getColorCode(
                Object(i.a)(e, "cardTemplateDTO.colorCode", "Color200")
              ),
              a = Object(i.a)(e, "cardTemplateDTO.coverUrl", "");
            return a
              ? "url(https://img01.yzcdn.cn" + a + ")"
              : l.i[t]
              ? "url(" + l.i[t].imageUrl + ")"
              : "";
          },
          getColorCode: (e) => l.c[e] || e,
        });
      },
    }
  )
);
