"use strict";
var r = require("~/r");
r(
  "pFsv",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      cqgp: function (i, o, n) {
        var s = function () {
          return (s =
            Object.assign ||
            function (i) {
              for (var o, n = 1, s = arguments.length; n < s; n++)
                for (var t in (o = arguments[n]))
                  Object.prototype.hasOwnProperty.call(o, t) && (i[t] = o[t]);
              return i;
            }).apply(this, arguments);
        };
        o.a = function (i) {
          var o = i.profitRange,
            n = void 0 === o ? [] : o,
            t = i.commissionSendType,
            m = void 0 === t ? 0 : t,
            e = i.customPointsName,
            r = void 0 === e ? "积分" : e,
            a = i.commissionConfigDTO,
            c = n[0],
            u = n[1],
            h = (function (i) {
              var o = i.sendType,
                n = i.pointsName,
                s = i.config,
                t = i.maxCommission,
                m = i.minCommission,
                e = !!o;
              if (e && s) {
                var r = s.everyMoneyFen,
                  a = void 0 === r ? 0 : r,
                  c = s.points,
                  u = void 0 === c ? 0 : c;
                (t = parseInt(String(Math.floor(t / a) * u), 10)),
                  (m = parseInt(String(Math.floor(m / a) * u), 10));
              } else (t /= 100), (m /= 100);
              return {
                maxCommissionStr: e ? "" + t + n : "¥" + t,
                minCommissionStr: e ? "" + m + n : "¥" + m,
                maxCommissionAmount: t,
                minCommissionAmount: m,
              };
            })({
              sendType: m,
              pointsName: r,
              config: a,
              maxCommission: (u = u || c),
              minCommission: c,
            }),
            p = h.maxCommissionStr,
            C = h.minCommissionStr,
            d = h.maxCommissionAmount,
            f = d !== h.minCommissionAmount,
            g = {
              commissionText: "分享后最高赚" + p,
              commissionRangeText: "分享后预计可赚 " + C + " - " + p,
              commissionRange: n,
              maxCommission: d,
              unit: r,
              maxCommissionStr: d > 0 ? p : "",
              isMultiCommission: f,
            };
          return s(s({}, g), {
            compatibleCommissionText: f
              ? g.commissionRangeText
              : g.commissionText,
            compatibleCommission: f ? C + " - " + p : p,
          });
        };
      },
      pFsv: function (i, o, n) {
        n.r(o);
        var s = n("uA99"),
          t = n("bPmV"),
          m = {
            name: "TaxSignPop",
            data: () => ({ show: !1, taxSignText: "" }),
            methods: {
              handleCheck(i, o) {
                if (((i = i || (() => {})), o.shareData.isShoppingGuide))
                  return i();
                o.getTaxSignInfo()
                  .then((o) => {
                    var n = Object(t.g)(o);
                    if (!n) return i();
                    (this.taxSignText = n),
                      (this.show = !0),
                      (this.handleCloseTaxSign = () => {
                        (this.show = !1), i();
                      });
                  })
                  .catch(i);
              },
              handleCert() {
                var i =
                  "https://h5.youzan.com/wscassets/cert/tax/contract?fromId=12&returnUrl=" +
                  encodeURIComponent("");
                (this.show = !1), Object(s.a)(i);
              },
            },
            ud: !0,
          },
          e = n("9ZMt");
        o.default = e.default.component(m);
      },
    }
  )
);
