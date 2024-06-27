"use strict";
var r = require("~/r");
r(
  "Ncc1",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Ncc1: function (t, o, a) {
        a.r(o);
        var e = a("rqVN"),
          i = a("YeA1"),
          s = a("KDJo"),
          n = a("QFAZ"),
          r = getApp();
        Object(e.b)({
          properties: {
            shareFrom: { type: Number },
            show: { type: Boolean },
            groupTitle: { type: String },
            canShowNavBar: { type: Boolean },
            listQuery: { type: Object },
            totalAlias: { type: Array, value: [] },
          },
          data: {
            navBarHeight: "",
            navPaddingTop: "",
            navBarTitle: "",
            showTab: !1,
            hasLoadAll: !1,
            hasLastRoute: !1,
          },
          observers: {
            show(t) {
              t && this.setShowTab();
            },
            canShowNavBar(t) {
              t && !this.data.show && this.setYZData({ hasLoadAll: !0 });
            },
            groupTitle(t) {
              this.setYZData({ navBarTitle: t });
            },
          },
          attached() {
            var { navBarHeight: t, statusBarHeight: o } = Object(n.b)(),
              { shareFrom: a, groupTitle: e } = this.data,
              i = getCurrentPages();
            this.setYZData({
              hasLastRoute: i.length > 1,
              navBarHeight: t + "px",
              navPaddingTop: o + "px",
              navBarTitle: 4 === a ? "全部商品" : e,
            });
          },
          methods: {
            toHome() {
              Object(i.a)().dmc.switchTab("Home", { kdt_id: r.getKdtId() });
            },
            toBack() {
              var { dmc: t } = Object(i.a)();
              t.back();
            },
            setShowTab() {
              var t = r.getKdtId(),
                { shareFrom: o } = this.data;
              r.request({
                path: "/wscshop/shop/shop-meta-info.json",
                data: { kdt_id: t },
              }).then((t) => {
                var a = Object(s.e)(t);
                a &&
                  r.logger.log({
                    et: "view",
                    ei: "view_recommend_tab",
                    en: "推荐tab曝光",
                    params: { share_from: o },
                  }),
                  this.setYZData({ showTab: a, hasLoadAll: !0 });
              });
            },
            onGotoVideoList() {
              var { shareFrom: t, totalAlias: o, listQuery: a } = this.data;
              r.logger.log({
                et: "click",
                ei: "click_recommend_tab",
                en: "推荐tab点击",
                params: { share_from: t },
              }),
                Object(i.a)().dmc.navigate("Share", {
                  shareFrom: t,
                  alias: o[0],
                  listQuery: encodeURIComponent(JSON.stringify(a)),
                });
            },
          },
        });
      },
      cqgp: function (t, o, a) {
        var e = function () {
          return (e =
            Object.assign ||
            function (t) {
              for (var o, a = 1, e = arguments.length; a < e; a++)
                for (var i in (o = arguments[a]))
                  Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
              return t;
            }).apply(this, arguments);
        };
        o.a = function (t) {
          var o = t.profitRange,
            a = void 0 === o ? [] : o,
            i = t.commissionSendType,
            s = void 0 === i ? 0 : i,
            n = t.customPointsName,
            r = void 0 === n ? "积分" : n,
            m = t.commissionConfigDTO,
            c = a[0],
            h = a[1],
            l = (function (t) {
              var o = t.sendType,
                a = t.pointsName,
                e = t.config,
                i = t.maxCommission,
                s = t.minCommission,
                n = !!o;
              if (n && e) {
                var r = e.everyMoneyFen,
                  m = void 0 === r ? 0 : r,
                  c = e.points,
                  h = void 0 === c ? 0 : c;
                (i = parseInt(String(Math.floor(i / m) * h), 10)),
                  (s = parseInt(String(Math.floor(s / m) * h), 10));
              } else (i /= 100), (s /= 100);
              return {
                maxCommissionStr: n ? "" + i + a : "¥" + i,
                minCommissionStr: n ? "" + s + a : "¥" + s,
                maxCommissionAmount: i,
                minCommissionAmount: s,
              };
            })({
              sendType: s,
              pointsName: r,
              config: m,
              maxCommission: (h = h || c),
              minCommission: c,
            }),
            d = l.maxCommissionStr,
            p = l.minCommissionStr,
            u = l.maxCommissionAmount,
            g = u !== l.minCommissionAmount,
            v = {
              commissionText: "分享后最高赚" + d,
              commissionRangeText: "分享后预计可赚 " + p + " - " + d,
              commissionRange: a,
              maxCommission: u,
              unit: r,
              maxCommissionStr: u > 0 ? d : "",
              isMultiCommission: g,
            };
          return e(e({}, v), {
            compatibleCommissionText: g
              ? v.commissionRangeText
              : v.commissionText,
            compatibleCommission: g ? p + " - " + d : d,
          });
        };
      },
    }
  )
);
