"use strict";
var r = require("~/r");
r(
  "u+jU",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      cqgp: function (e, t, s) {
        var i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, s = 1, i = arguments.length; s < i; s++)
                for (var a in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
        t.a = function (e) {
          var t = e.profitRange,
            s = void 0 === t ? [] : t,
            a = e.commissionSendType,
            n = void 0 === a ? 0 : a,
            o = e.customPointsName,
            r = void 0 === o ? "积分" : o,
            c = e.commissionConfigDTO,
            h = s[0],
            m = s[1],
            u = (function (e) {
              var t = e.sendType,
                s = e.pointsName,
                i = e.config,
                a = e.maxCommission,
                n = e.minCommission,
                o = !!t;
              if (o && i) {
                var r = i.everyMoneyFen,
                  c = void 0 === r ? 0 : r,
                  h = i.points,
                  m = void 0 === h ? 0 : h;
                (a = parseInt(String(Math.floor(a / c) * m), 10)),
                  (n = parseInt(String(Math.floor(n / c) * m), 10));
              } else (a /= 100), (n /= 100);
              return {
                maxCommissionStr: o ? "" + a + s : "¥" + a,
                minCommissionStr: o ? "" + n + s : "¥" + n,
                maxCommissionAmount: a,
                minCommissionAmount: n,
              };
            })({
              sendType: n,
              pointsName: r,
              config: c,
              maxCommission: (m = m || h),
              minCommission: h,
            }),
            p = u.maxCommissionStr,
            l = u.minCommissionStr,
            d = u.maxCommissionAmount,
            f = d !== u.minCommissionAmount,
            g = {
              commissionText: "分享后最高赚" + p,
              commissionRangeText: "分享后预计可赚 " + l + " - " + p,
              commissionRange: s,
              maxCommission: d,
              unit: r,
              maxCommissionStr: d > 0 ? p : "",
              isMultiCommission: f,
            };
          return i(i({}, g), {
            compatibleCommissionText: f
              ? g.commissionRangeText
              : g.commissionText,
            compatibleCommission: f ? l + " - " + p : p,
          });
        };
      },
      "u+jU": function (e, t, s) {
        s.r(t);
        var i = s("+I+c"),
          a = s("5kn2"),
          n = s("9ZMt"),
          o = s("Q56H"),
          r = s("AGZf"),
          c = s("Dj8g"),
          h = s("bPmV"),
          m = s("w2Y9"),
          u = s.n(m),
          p = ["page"],
          l = ["page"],
          d = {
            name: "CubeFooter",
            props: {
              showGoodsDetail: Boolean,
              shareData: { type: Object, default: () => ({}) },
              goodsInfo: { type: Object, default: () => ({}) },
              shareInfo: { type: Object, default: () => ({}) },
              customOptionListConfig: { type: Object, default: () => ({}) },
              sceneParams: { type: Object, default: () => ({}) },
              featureDataParams: { type: Object, default: () => ({}) },
              scenes: String,
              copyText: String,
              copyShortLink: String,
              hasGuideMaterial: { type: Boolean, default: !1 },
              instanceId: String,
              activeTab: String,
              isWxShareImg: { type: Boolean, default: !1 },
            },
            data: () => ({
              codePoster: "",
              zonePoster: "",
              tuwenPoster: "",
              featurePoster: "",
              posterType: "",
            }),
            computed: {
              instance() {
                return this.ctx.instance[this.instanceId];
              },
              showTab() {
                return "promote" === this.activeTab;
              },
              iconGroup() {
                var e = Object(h.d)({
                  shareData: this.shareData,
                  goodsInfo: this.goodsInfo,
                  scenes: this.scenes,
                  customOptionListConfig: this.customOptionListConfig,
                  hasGuideMaterial: this.hasGuideMaterial,
                  runEnv: this.instance.runEnv,
                  kdtId: this.instance.getKdtId(),
                  buildEnv: this.instance.buildEnv,
                  shareInfo: this.shareInfo,
                  shopAbilities: this.instance.shopAbilities,
                });
                return this.copyShortLink
                  ? e
                  : e.map((e) => e.filter((e) => "weappLink" !== e.id));
              },
              posterImg() {
                return this[this.posterType];
              },
            },
            methods: {
              handleFeaturePoster() {
                var { featureDataParams: e, sceneParams: t } = this,
                  s = () => {
                    this.processPosterGenerate(
                      this.instance.getFeaturePoster.bind(this.instance, e, t),
                      "featurePoster"
                    );
                  };
                if (this.isWxShareImg) {
                  this.$emit("close-main-frame");
                  var a = (a) => {
                    var n = this.instance.generateFeaturePosterParams.bind(
                        this.instance,
                        e,
                        t
                      )(),
                      { scene: o } = n || {},
                      r = o || {},
                      { page: h } = r,
                      m = Object(i.a)(r, p),
                      l = u.a.add(h, m);
                    Object(c.f)({
                      instance: this.instance,
                      imgUrl: a,
                      entrancePath: l,
                      fallback: s,
                    });
                  };
                  this.featurePoster
                    ? a(this.featurePoster)
                    : (r.a.loading("正在生成"),
                      this.instance.getFeaturePoster
                        .bind(this.instance, e, t)()
                        .then((e) => {
                          r.a.clear(), (this.featurePoster = e), a(e);
                        })
                        .catch((e) => {
                          r.a.clear(), r.a.fail(Object(c.c)(e));
                        }));
                } else s();
              },
              handleTuwenPoster() {
                var e = () => {
                  this.processPosterGenerate(
                    this.instance.getTuwenPoster.bind(this.instance),
                    "tuwenPoster"
                  );
                };
                if (this.isWxShareImg) {
                  this.$emit("close-main-frame");
                  var t = (t) => {
                    var s = this.instance.generateCreatePosterJsonParams.bind(
                        this.instance,
                        "tuwen"
                      )(),
                      { scene: a } = s || {};
                    try {
                      var n = JSON.parse(a) || {},
                        { page: o } = n,
                        r = Object(i.a)(n, l),
                        h = u.a.add(o, r);
                      Object(c.f)({
                        instance: this.instance,
                        imgUrl: t,
                        entrancePath: h,
                        fallback: e,
                      });
                    } catch (t) {
                      e();
                    }
                  };
                  this.tuwenPoster
                    ? t(this.tuwenPoster)
                    : (r.a.loading("正在生成"),
                      this.instance.getTuwenPoster
                        .bind(this.instance)()
                        .then((e) => {
                          r.a.clear(), (this.tuwenPoster = e), t(e);
                        })
                        .catch((e) => {
                          r.a.clear(), r.a.fail(Object(c.c)(e));
                        }));
                } else e();
              },
              updateInstancePath(e) {
                "item_promote" === this.scenes &&
                  this.instance.update("path", e);
              },
              processPosterGenerate(e, t) {
                var s,
                  i,
                  a = this.instance.path,
                  n =
                    (null == (s = this.goodsInfo) || null == (i = s.weappUrl)
                      ? void 0
                      : i.split("?")[0]) || "packages/goods/detail/index";
                return (
                  this.updateInstancePath(n),
                  (this.posterType = t),
                  this[t] && this.$emit("show-poster-pop", this[t]),
                  r.a.loading("正在生成"),
                  e()
                    .then((e) => {
                      if (!e) return r.a.clear(), r.a.fail("生成失败");
                      (this[t] = e),
                        this.$emit("show-poster-pop", this[t]),
                        r.a.clear(),
                        this.$emit("close-main-frame"),
                        this.updateInstancePath(a);
                    })
                    .catch((e) => {
                      r.a.clear(),
                        r.a.fail(Object(c.c)(e)),
                        this.$emit("close-main-frame"),
                        this.updateInstancePath(a);
                    })
                );
              },
              handleIconClick(e) {
                switch (e.type) {
                  case "share":
                    this.$emit("close-main-frame"),
                      this.instance.handleLog(a.b.nativeCustom);
                    break;
                  case "link":
                    n.default.navigate({ url: e.url });
                    break;
                  case "copy":
                    Object(o.b)(this.copyText),
                      this.instance.handleLog(a.b.copylink),
                      this.$emit("close-main-frame");
                    break;
                  case "weappLink":
                    Object(o.b)(this.copyShortLink),
                      this.instance.handleLog(a.b.copyWeappLink, {
                        shortLink: this.copyShortLink,
                      }),
                      this.$emit("close-main-frame");
                    break;
                  case "code":
                    this.processPosterGenerate(
                      this.instance.getCodeOrQrCode.bind(this.instance),
                      "codePoster"
                    );
                    break;
                  case "tuwenPoster":
                    this.handleTuwenPoster();
                    break;
                  case "featurePoster":
                    this.handleFeaturePoster();
                    break;
                  case "zonePoster":
                    this.processPosterGenerate(
                      this.instance.getZoneCodePoster.bind(this.instance),
                      "zonePoster"
                    );
                    break;
                  case "custom":
                    this.$emit("customHandle", e);
                }
              },
            },
            ud: !0,
          };
        t.default = n.default.component(d);
      },
    }
  )
);
