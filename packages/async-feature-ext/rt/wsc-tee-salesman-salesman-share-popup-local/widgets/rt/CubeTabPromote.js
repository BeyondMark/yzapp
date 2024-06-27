"use strict";
var r = require("~/r");
r(
  "hH/b",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      cqgp: function (t, i, s) {
        var e = function () {
          return (e =
            Object.assign ||
            function (t) {
              for (var i, s = 1, e = arguments.length; s < e; s++)
                for (var o in (i = arguments[s]))
                  Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
              return t;
            }).apply(this, arguments);
        };
        i.a = function (t) {
          var i = t.profitRange,
            s = void 0 === i ? [] : i,
            o = t.commissionSendType,
            n = void 0 === o ? 0 : o,
            a = t.customPointsName,
            r = void 0 === a ? "积分" : a,
            m = t.commissionConfigDTO,
            h = s[0],
            l = s[1],
            c = (function (t) {
              var i = t.sendType,
                s = t.pointsName,
                e = t.config,
                o = t.maxCommission,
                n = t.minCommission,
                a = !!i;
              if (a && e) {
                var r = e.everyMoneyFen,
                  m = void 0 === r ? 0 : r,
                  h = e.points,
                  l = void 0 === h ? 0 : h;
                (o = parseInt(String(Math.floor(o / m) * l), 10)),
                  (n = parseInt(String(Math.floor(n / m) * l), 10));
              } else (o /= 100), (n /= 100);
              return {
                maxCommissionStr: a ? "" + o + s : "¥" + o,
                minCommissionStr: a ? "" + n + s : "¥" + n,
                maxCommissionAmount: o,
                minCommissionAmount: n,
              };
            })({
              sendType: n,
              pointsName: r,
              config: m,
              maxCommission: (l = l || h),
              minCommission: h,
            }),
            u = c.maxCommissionStr,
            p = c.minCommissionStr,
            d = c.maxCommissionAmount,
            g = d !== c.minCommissionAmount,
            b = {
              commissionText: "分享后最高赚" + u,
              commissionRangeText: "分享后预计可赚 " + p + " - " + u,
              commissionRange: s,
              maxCommission: d,
              unit: r,
              maxCommissionStr: d > 0 ? u : "",
              isMultiCommission: g,
            };
          return e(e({}, b), {
            compatibleCommissionText: g
              ? b.commissionRangeText
              : b.commissionText,
            compatibleCommission: g ? p + " - " + u : u,
          });
        };
      },
      "hH/b": function (t, i, s) {
        s.r(i);
        var e = s("Fcif"),
          o = s("MLLI"),
          n = s("Q56H"),
          a = s("882d"),
          r = s("5kn2"),
          m = s("bPmV"),
          h = s("KEq0"),
          l = s.n(h),
          c = s("Dj8g"),
          u = s("AGZf"),
          { windowWidth: p } = Object(o.b)(),
          d = {
            name: "CubeTabPromote",
            props: {
              goodsInfo: { type: Object, default: () => ({}) },
              shopRights: { type: Object, default: () => ({}) },
              shareData: { type: Object, default: () => ({}) },
              smartTextData: { type: Object, default: () => ({}) },
              shortPromoteUrl: String,
              shortLinkPromoteUrl: String,
              kdtId: [Number, String],
              instanceId: String,
            },
            data: () => ({
              ifPublish: !0,
              rangeStyle: "",
              hasPersonalSpaceAbility: !1,
            }),
            computed: {
              instance() {
                return this.ctx.instance[this.instanceId];
              },
              promoteText() {
                var { cloudSalesPriceDesc: t } = this.smartTextData;
                if (t) {
                  var i = Object(m.f)(this.goodsInfo, this.smartTextData);
                  return i.endsWith("\n") ? "" + i + t : i + "\n" + t;
                }
                return Object(m.e)(this.goodsInfo, this.smartTextData);
              },
              publishIconColor() {
                return this.ifPublish ? "var(--general)" : "#ccc";
              },
              originImgList() {
                var t, i;
                return (
                  (null == (t = this.goodsInfo) || null == (i = t.pictures)
                    ? void 0
                    : i.map((t) => t.url || t)) || []
                );
              },
              imgList() {
                return this.originImgList.map((t) => l()(t, "large"));
              },
              showPublish() {
                return !!this.shopRights.allowMoments;
              },
            },
            watch: {
              shopRights: {
                handler(t) {
                  t && t.allowMoments
                    ? (this.ifPublish = !0)
                    : (this.ifPublish = !1);
                },
                immediate: !0,
              },
              kdtId: {
                handler(t) {
                  t &&
                    this.instance
                      .getShopAbility(
                        t,
                        "salesman_advance_personal_space_ability"
                      )
                      .then((t) => {
                        this.hasPersonalSpaceAbility = t;
                      });
                },
                immediate: !0,
              },
            },
            methods: {
              changePublishState() {
                this.ifPublish = !this.ifPublish;
              },
              publish() {
                var t,
                  i = {};
                null != (t = this.smartTextData) &&
                  t.promoteText &&
                  (i.content = "aiwriting"),
                  this.instance.handleLog(r.b.savepictures, i);
                var s = { copy: 0, image: 1 };
                u.a.loading("保存中"),
                  Promise.all([
                    this.publishMaterial().catch(() => {}),
                    Object(n.b)(
                      this.promoteText +
                        (this.shortLinkPromoteUrl || this.shortPromoteUrl)
                    )
                      .then(() => ({ copy: 1 }))
                      .catch(() => {}),
                    Object(c.a)(this.originImgList || [])
                      .then(() => ({ image: 1 }))
                      .catch(() => ({ image: 0 })),
                  ]).then((t) => {
                    var i = Object(e.a)({}, s, t[0], t[1], t[2]);
                    this.$emit("show-promote-tip", {
                      statusList: Object(m.h)(i),
                      imgList: this.imgList,
                    }),
                      setTimeout(u.a.clear.bind(u.a), 50);
                  });
              },
              publishMaterial() {
                return this.ifPublish && this.hasPersonalSpaceAbility
                  ? this.instance.publishMaterial({
                      imageList: this.imgList.slice(0, 9),
                      recommendInfo: escape(this.promoteText),
                      goods: Object(m.b)(this.goodsInfo),
                    })
                  : Promise.resolve({});
              },
              handlePreview(t) {
                return Object(a.d)({ urls: this.imgList, current: t });
              },
              onScrollComputedWidth(t) {
                var i =
                  t.detail.scrollLeft / (108 * this.imgList.length - p + 32);
                this.rangeStyle = "left: " + 28 * i + "px;";
              },
            },
            ud: !0,
          },
          g = s("9ZMt");
        i.default = g.default.component(d);
      },
    }
  )
);
