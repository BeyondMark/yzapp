"use strict";
var r = require("~/r");
r(
  "KuqZ",
  Object.assign({}, require("~/v.js").modules, {
    KuqZ: function (e, t, s) {
      s.r(t);
      var a = s("Fcif"),
        i = s("YeA1"),
        o = s("5Xe+"),
        n = s.n(o),
        r = s("NHEX"),
        h = s.n(r),
        c = {
          props: {
            sourceType: Number,
            guideBindSourceType: { type: Number, default: 14 },
            scenes: String,
            getShareOpportunity: String,
            needBindRelation: { type: Boolean, default: !0 },
            showGoodsDetail: { type: Boolean, default: !0 },
            popCustomStyle: { type: String, default: "" },
            iconStyle: { type: String, default: "" },
            isShareStyle: { type: Boolean, default: !1 },
            customIcon: { type: Boolean, default: !1 },
            needSetShare: { type: Boolean, default: !1 },
          },
          data: () => ({
            goodsInfo: {},
            themeVars: "",
            shopBaseInfo: {},
            customOptionListConfig: {},
            hasInitShareData: !1,
            cubeIconData: { goaway: void 0, bottom: 200 },
            shareInfo: {},
            invokePage: "",
            dcPs: "",
            offlineId: "",
          }),
          logicData: () => ({
            goodsActivityInfo: {},
            goodsBaseInfo: {},
            currentActivity: {},
            goodsPriceInfo: {},
            goodsSkuData: {},
          }),
          mounted() {
            this.initPage(), this.initData(), this.initListeners();
            var e = this.$getPageQuery();
            this.invokePage = this.$getPageRoute() + "/" + (e.alias || "");
            var t = this.ctx.logger.getLogParams();
            (this.dcPs = h()(t, "context.dc_ps", "")),
              this.initIconPosition(),
              setTimeout(() => {
                var [e] = this.ctx.process.invoke("getFeatureAlias"),
                  t = this.getFeatureParams(e),
                  [s] = this.ctx.process.invoke("getSharePath"),
                  a = { alias: t.alias, page: s };
                this.ctx.process.invoke(
                  "setFeatureAlias",
                  this.formatInvokeParams({ dataParams: t, sceneParams: a })
                );
              }, 300),
              this.ctx.lambdas.getUserInfo
                ? this.ctx.lambdas.getUserInfo().then((e) => {
                    this.ctx.process.invoke(
                      "setUserInfo",
                      this.formatInvokeParams(e)
                    );
                  })
                : this.ctx.process.invoke("setUserInfo", {
                    state: { nicknameAndAvatar: !0 },
                  });
          },
          destroyed() {
            this.ctx.event.remove(
              "floating:nav:update:position",
              this.positionHandler
            ),
              this.ctx.event.remove(
                "salesman:share:popup:optionMenu",
                this.optionMenuHandler
              ),
              this.ctx.event.remove(
                "salesman:share:popup:query",
                this.queryHandler
              ),
              this.ctx.event.remove(
                "salesman:share:popup:close",
                this.closeHandler
              ),
              this.ctx.event.remove(
                "salesman:share:popup:show",
                this.showHandler
              );
          },
          methods: {
            getFeatureParams(e) {
              var [t] = this.ctx.process.invoke("getCurrentPageType"),
                s = { pageType: t, alias: e || "" };
              return (
                "mircopage" !== s.pageType ||
                  e ||
                  (s = { pageType: "homepage", alias: "" }),
                s
              );
            },
            initIconPosition() {
              this.ctx.event.listen(
                "floating:nav:update:position",
                this.positionHandler
              ),
                this.ctx.process.invoke("createOrUpdateIndependentIcon", {
                  type: "salesman",
                  priority: 90,
                  height: 50,
                  canGoaway: !0,
                });
            },
            tryInitShareData() {
              var e;
              (null != (e = this.ctx.lambdas) &&
                null != e.checkIsHalfScreen &&
                e.checkIsHalfScreen()) ||
                (this.shopBaseInfo.kdtId &&
                  (("created" !== this.getShareOpportunity &&
                    this.getShareOpportunity) ||
                    this.initSalesmanShareData(),
                  "goodsData" === this.getShareOpportunity &&
                    this.goodsBaseInfo.id &&
                    ((this.hasInitShareData = !0),
                    this.initSalesmanShareData()
                      .then(() => this.ctx.event.emit("share:optionMenu", !0))
                      .catch(() =>
                        this.ctx.event.emit("share:optionMenu", !0)
                      ))));
            },
            initPage() {
              var { env: e } = this.ctx,
                t = e.getQuery(),
                { route: s } = e;
              this.ctx.process.invoke(
                "initSalesmanSharePageInfo",
                this.formatInvokeParams({ query: Object(a.a)({}, t), route: s })
              );
            },
            initSalesmanShareData() {
              return this.ctx.process
                .invokePipe(
                  "initSalesmanShareData",
                  this.formatInvokeParams({})
                )
                .then((e) => {
                  this.ctx.data.salesmanShareData = e;
                });
            },
            initListeners() {
              setTimeout(() => {
                this.ctx.event.listen(
                  "salesman:share:popup:optionMenu",
                  this.optionMenuHandler
                ),
                  this.ctx.event.listen(
                    "salesman:share:popup:query",
                    this.queryHandler
                  ),
                  this.ctx.event.listen(
                    "salesman:share:popup:close",
                    this.closeHandler
                  ),
                  this.ctx.event.listen(
                    "salesman:share:popup:show",
                    this.showHandler
                  );
              }, 100);
            },
            positionHandler(e) {
              "salesman" === e.type && (this.cubeIconData = e);
            },
            optionMenuHandler(e) {
              this.ctx.event.emit("share:optionMenu", e);
            },
            queryHandler(e) {
              this.ctx.event.emit("share:query", e);
            },
            closeHandler() {
              this.ctx.event.emit("salesman:popup:close");
            },
            showHandler() {
              this.ctx.event.emit("salesman:popup:show");
            },
            initData() {
              Object(i.e)(this, {
                setShareInfo: (e) =>
                  this.ctx.process
                    .invokePipe(
                      "setSalesmanSharePopupShareInfo",
                      this.formatInvokeParams(e)
                    )
                    .then((e) => e)
                    .catch(() => e),
              }),
                Object(i.b)(this, [
                  "shareInfo",
                  "themeVars",
                  "isGuideNeedPkgShareUrl",
                  "offlineId",
                ]),
                Object(i.b)(this, {
                  shopBaseInfo: (e) => {
                    (this.shopBaseInfo = e), this.tryInitShareData();
                  },
                }),
                Object(i.b)(this, {
                  customOptionListConfig: (e) => {
                    this.customOptionListConfig = e;
                  },
                }),
                Object(i.c)(
                  this,
                  [
                    "currentActivity",
                    "goodsPriceInfo",
                    "goodsSkuData",
                    "goodsBaseInfo",
                  ],
                  {
                    callback: (e) => {
                      var {
                          goodsPriceInfo: t,
                          goodsBaseInfo: s,
                          goodsSkuData: i,
                          currentActivity: o,
                        } = e,
                        r = {};
                      if (i && i.discount) {
                        var { goods: h = {} } = i;
                        r = Object(a.a)({}, s, {
                          goodsPrice: n()(h, [
                            "price",
                            "oldPrice",
                            "tags",
                            "maxPrice",
                            "minPrice",
                            "minOriginPrice",
                            "maxOriginPrice",
                            "originMaxPrice",
                            "originMinPrice",
                            "oldMaxPrice",
                            "oldMinPrice",
                            "realPrice",
                          ]),
                          goodsSkuData: i,
                        });
                      } else
                        r = Object(a.a)({}, s, {
                          goodsActivityInfo: o,
                          goodsPrice: t,
                        });
                      (this.goodsInfo = r),
                        this.hasInitShareData || this.tryInitShareData();
                    },
                  }
                ),
                this.ctx.process.invoke(
                  "setNativeYunExtension",
                  this.formatInvokeParams({ fn: this.getPosterByYunExtension })
                );
            },
            handleCustomEvent(e) {
              return this.ctx.process.invoke("customOptionHandler", e);
            },
            getPosterByYunExtension(e) {
              try {
                return this.ctx.process
                  .invokePipe("beforeGenerateSalesmanGoodsPosterEvent", e)
                  .catch(() => Promise.resolve([]));
              } catch (e) {
                return Promise.resolve([]);
              }
            },
            formatInvokeParams(e) {
              return Object(a.a)({}, e, { invokePage: this.invokePage });
            },
          },
          ud: !0,
        },
        p = s("9ZMt");
      t.default = p.default.component(c);
    },
  })
);
