"use strict";
var r = require("~/r");
r(
  "eBGr",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      cqgp: function (i, s, n) {
        var o = function () {
          return (o =
            Object.assign ||
            function (i) {
              for (var s, n = 1, o = arguments.length; n < o; n++)
                for (var t in (s = arguments[n]))
                  Object.prototype.hasOwnProperty.call(s, t) && (i[t] = s[t]);
              return i;
            }).apply(this, arguments);
        };
        s.a = function (i) {
          var s = i.profitRange,
            n = void 0 === s ? [] : s,
            t = i.commissionSendType,
            e = void 0 === t ? 0 : t,
            m = i.customPointsName,
            a = void 0 === m ? "积分" : m,
            r = i.commissionConfigDTO,
            c = n[0],
            u = n[1],
            d = (function (i) {
              var s = i.sendType,
                n = i.pointsName,
                o = i.config,
                t = i.maxCommission,
                e = i.minCommission,
                m = !!s;
              if (m && o) {
                var a = o.everyMoneyFen,
                  r = void 0 === a ? 0 : a,
                  c = o.points,
                  u = void 0 === c ? 0 : c;
                (t = parseInt(String(Math.floor(t / r) * u), 10)),
                  (e = parseInt(String(Math.floor(e / r) * u), 10));
              } else (t /= 100), (e /= 100);
              return {
                maxCommissionStr: m ? "" + t + n : "¥" + t,
                minCommissionStr: m ? "" + e + n : "¥" + e,
                maxCommissionAmount: t,
                minCommissionAmount: e,
              };
            })({
              sendType: e,
              pointsName: a,
              config: r,
              maxCommission: (u = u || c),
              minCommission: c,
            }),
            h = d.maxCommissionStr,
            p = d.minCommissionStr,
            l = d.maxCommissionAmount,
            g = l !== d.minCommissionAmount,
            f = {
              commissionText: "分享后最高赚" + h,
              commissionRangeText: "分享后预计可赚 " + p + " - " + h,
              commissionRange: n,
              maxCommission: l,
              unit: a,
              maxCommissionStr: l > 0 ? h : "",
              isMultiCommission: g,
            };
          return o(o({}, f), {
            compatibleCommissionText: g
              ? f.commissionRangeText
              : f.commissionText,
            compatibleCommission: g ? p + " - " + h : h,
          });
        };
      },
      eBGr: function (i, s, n) {
        n.r(s);
        var o = n("Fzvb"),
          t = n("Avd2"),
          e = n("bPmV"),
          m = {
            name: "NewBeginPop",
            props: {
              showGoodsDetail: Boolean,
              customOptionListConfig: { type: Object, default: () => ({}) },
            },
            data: () => ({
              guideList: [],
              step: 0,
              assertMap: t.a,
              show: !1,
              instance: null,
            }),
            methods: {
              handleCheck(i, s) {
                this.instance = s;
                var n = Object(e.d)({
                  shareData: s.shareData,
                  goodsInfo: s.goodsInfo,
                  scenes: s.scenes,
                  runEnv: this.instance.runEnv,
                  customOptionListConfig: this.customOptionListConfig,
                  kdtId: this.instance.getKdtId(),
                  buildEnv: this.instance.buildEnv,
                });
                (i = i || (() => {})),
                  this.instance
                    .getNewBeginGuide()
                    .then((s) => {
                      s
                        ? i()
                        : ((this.guideList = Object(o.a)({
                            iconList: n,
                            showGoodsDetail: this.showGoodsDetail,
                            popupHeight: 600,
                            commission: !1,
                            instance: this.instance,
                          })),
                          (this.show = !0));
                    })
                    .catch(i);
              },
              handleClick() {
                var i;
                this.step < this.guideList.length - 1
                  ? (this.step += 1)
                  : (null == (i = this.instance) || i.completeNewBeginGuide(),
                    (this.show = !1));
              },
            },
            ud: !0,
          },
          a = n("9ZMt");
        s.default = a.default.component(m);
      },
    }
  )
);
