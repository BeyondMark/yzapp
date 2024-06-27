"use strict";
var r = require("~/r");
r(
  "YzPz",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      YzPz: function (t, e, s) {
        s.r(e);
        var o = s("Fcif"),
          i = s("9ZMt"),
          h = s("Tewj"),
          a = s("2wjL"),
          d = s("zMoS"),
          r = s("tuFO"),
          c = s.n(r),
          n = s("mQXz"),
          l = s.n(n),
          p = s("Sh92"),
          u = s("YeA1"),
          m = s("OK7I"),
          w = s.n(m),
          I = s("kAlr"),
          f = "shopName",
          g = {
            name: "ShopTopBar",
            data: () => ({
              showTopBar: !1,
              showSwitchBtn: !1,
              isHideStore: !1,
              logo: "",
              customName: "",
              address: "",
              kdtId: 0,
              offlineId: 0,
              rootKdtId: "",
              shopInfo: {},
              followText: "",
              isWeb: "web" === i.default.getEnv(),
              needHideTopBar: !1,
              unwatchKdtId: null,
              unwatchofflineId: null,
              unwatchShop: null,
              unwatchRootKdtId: null,
              hideShopTopBarBackIcon: !1,
              isImmersive: !1,
              topBarTop: 0,
            }),
            computed: {
              topBarStyle() {
                return this.isImmersive ? "top: " + this.topBarTop + "px;" : "";
              },
              topBarClass() {
                return this.isImmersive ? "top-bar immersive" : "top-bar";
              },
              showBack() {},
              shopTopBarClass() {
                return { "shop-top-bar": !0, "shop-top-bar--web": this.isWeb };
              },
              recordsHref() {
                var { kdtId: t, shopInfo: e } = this;
                return 1 === e.shopType
                  ? c()(
                      "/trade/record/index?source=weixin11&kdt_id=" + t,
                      "wap",
                      t
                    )
                  : c()("/showcase/usercenter?kdt_id=" + t, "wap", t);
              },
            },
            created() {
              (this.cachedUserLocation = null),
                Object(u.b)(this, ["showTopBar", "needHideTopBar"]),
                (this.unwatchKdtId = this.ctx.watch("kdtId", (t) => {
                  var e = this.kdtId;
                  (this.kdtId = t), t && e !== t && this.updateShowTopBar();
                })),
                (this.unwatchofflineId = this.ctx.watch("offlineId", (t) => {
                  (this.offlineId = t), t && this.updateShowTopBar();
                })),
                (this.unwatchShop = this.ctx.watch(
                  "shop",
                  (t) => (this.shopInfo = t)
                )),
                (this.unwatchRootKdtId = this.ctx.watch(
                  "rootKdtId",
                  (t) => (this.rootKdtId = t)
                )),
                this.fetchFolloText(),
                h.default.on("onSetImmersive", this.setImmersiveData, this),
                h.default.trigger("onSetImmersiveReady", !0);
            },
            destroyed() {
              this.unwatchKdtId(),
                this.unwatchofflineId(),
                this.unwatchShop(),
                this.unwatchRootKdtId(),
                h.default.off("onSetImmersive", this.setImmersiveData, this);
            },
            methods: {
              fetchFolloText() {
                this.isWeb &&
                  this.ctx.lambdas.getPlatform().then((t) => {
                    if ("weixin" === t) {
                      var e = Object(d.a)(
                        window._global || {},
                        "mp_account.weixin_account"
                      );
                      this.followText = e ? "关注" : "收藏";
                    }
                  });
              },
              updateShowTopBar() {
                var { kdtId: t, offlineId: e } = this,
                  s = this.$getPageQuery();
                Object(I.a)(this.kdtId, this.offlineId).then((o) => {
                  t === this.kdtId &&
                    e === this.offlineId &&
                    ((this.showTopBar = o.showTopBar),
                    (this.ctx.data.showTopBar = o.showTopBar),
                    (this.showSwitchBtn = o.showSwitchBtn),
                    (this.logo = o.logo),
                    (this.address = o.address || "定位失败，请重试"),
                    (this.isHideStore = o.isHideStore),
                    (o.nameMode || f) === f
                      ? (this.customName = o.shopName)
                      : this.cachedUserLocation
                      ? (this.customName = this.cachedUserLocation)
                      : p.d
                          .getLocation()
                          .then((t) => {
                            var { address: e } = t;
                            e.length > 16 &&
                              (e = e.slice(0, 5) + "..." + e.slice(-10)),
                              (this.cachedUserLocation = e),
                              (this.customName = e);
                          })
                          .catch(() => {
                            this.customName = o.shopName;
                          }),
                    this.isWeb &&
                      Object(d.a)(window._global || {}, "offlineData.show") &&
                      "1" === Object(d.a)(s, "hq_preview") &&
                      (this.showSwitchBtn = !0));
                });
              },
              onChange() {
                var t = this.$getPageQuery(),
                  e = this.$getPageRoute(),
                  { kdtId: s } = this;
                if (this.offlineId) this.handleAddressClick();
                else {
                  var i = t.umpType || t.ump_type || "",
                    h = t.umpAlias || t.ump_alias || "",
                    d = t.hqKdtId || t.hq_kdt_id || this.rootKdtId || "",
                    r = l()(t || {}, "hq_preview"),
                    n = this.isWeb
                      ? {
                          ump_type: i,
                          ump_alias: h,
                          hq_kdt_id: d,
                          redirect_url: encodeURIComponent(
                            c()(a.a.add("" + e, r), "h5", s)
                          ),
                        }
                      : {
                          umpType: i,
                          umpAlias: h,
                          hqKdtId: d,
                          redirectUrl: encodeURIComponent(a.a.add("/" + e, r)),
                        };
                  this.ctx.process.invoke(
                    "enterShopSelect",
                    Object(o.a)({}, n)
                  );
                }
              },
              handleAddressClick() {
                this.ctx.process.invoke("switchMultiStore");
              },
              handleSearch() {
                var t = w()(8),
                  e = this.ctx.logger.getPageSpm() + "~top_bar~0~" + t;
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "click",
                    ei: "search_goods",
                    en: "搜索商品",
                    params: {
                      has_hot_search_keys: 0,
                      banner_id: e,
                      s_type: "top_bar",
                    },
                    si: this.kdtId,
                  }),
                  this.ctx.dmc.navigate("SearchPage", { banner_id: e });
              },
              handleBack() {},
              handleClickFollowText() {
                this.ctx.event.emit("fullguide:show", {
                  viewType: "关注" === this.followText ? "follow" : "fav",
                });
              },
              setImmersiveData(t) {
                var { navHeight: e, status: s } = t;
                (this.isImmersive = s), (this.topBarTop = e);
              },
            },
            ud: !0,
          };
        e.default = i.default.component(g);
      },
    }
  )
);
