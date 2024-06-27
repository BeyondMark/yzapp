"use strict";
var r = require("~/r");
r(
  "tz+R",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "42tT": function (e, t, s) {
        var i = s("nKXO"),
          u = s.n(i),
          r = s("Fcif"),
          n = s("KEq0"),
          a = s.n(n),
          o = s("NHEX"),
          c = s.n(o),
          l = s("5Xe+"),
          d = s.n(l),
          h = s("Nvad");
        function k(e) {
          return function (t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]";
          };
        }
        var m = {
          isNumber: k("Number"),
          isString: k("String"),
          isBoolean: k("Boolean"),
          isNull: k("Null"),
          isUndefined: k("Undefined"),
          isSymbol: k("Symbol"),
          isFunction: k("Function"),
          isPureObject: k("Object"),
          isArray: k("Array"),
        };
        function S(e, t) {
          void 0 === e && (e = []), void 0 === t && (t = []);
          var s = [];
          return (
            e.forEach((e) => {
              t.forEach((t) => {
                ((m.isPureObject(e) &&
                  m.isPureObject(t) &&
                  e.type !== t.type) ||
                  (m.isString(e) && m.isString(t) && t !== e) ||
                  (m.isString(t) && m.isPureObject(e) && t !== e.text) ||
                  (m.isString(e) && m.isPureObject(t) && e !== t.text)) &&
                  s.unshift(e);
              });
            }),
            s
          );
        }
        function v(e) {
          var { selectedSkuComb: t, sku: s, goods: i } = e,
            u = s.priceTags || s.tags || [],
            r = t || s,
            { priceTitle: n, notShowPriceTitle: a } = r,
            { priceTags: o = [] } = i || {};
          if (a) return [...o];
          var c = [];
          if (t && !t.noneSku) {
            if (Array.isArray(n)) c = [...S(u, n), ...n];
            else if (n) {
              c = [...S(u, [n]), n];
            } else c = u;
          } else c = u;
          return [...c, ...o];
        }
        var p = s("Tr24"),
          g = s("TtQZ"),
          b = s("dKdR"),
          f = s("cJj0");
        function O(e, t) {
          var s = (function (e, t) {
              var s = (null == e ? void 0 : e.limit) || {},
                { quotaCycle: i, startSaleNum: u } = s,
                { buyWayText: n, showPeriodText: a } = e;
              return Object(r.a)({}, s, {
                quotaPeriod: i || 0,
                startSaleNum: u || 1,
                buyWayText: n,
                showPeriodText: a,
                quota: t,
              });
            })(e, t),
            i = Object(b.b)(s),
            { hideQuotaText: u } = e;
          return u ? "" : i || "";
        }
        function y(e, t) {
          var { limit: s = {} } = e,
            i = (function (e) {
              var { quota: t, singleQuota: s, quotaUsed: i } = e;
              return !!s && (!t || t - i > s);
            })(s),
            u = (function (e, t) {
              return t
                ? null == e
                  ? void 0
                  : e.singleQuota
                : (null == e ? void 0 : e.quota) || 0;
            })(s, i),
            r = (function (e, t) {
              return t ? 0 : (null == e ? void 0 : e.quotaUsed) || 0;
            })(s, i),
            n = O(e, u),
            { stepperLimit: a, limitType: o } = (function (e, t, s) {
              var i = e - t,
                u = (function (e, t, s) {
                  return e > 0 && e - t <= s;
                })(e, t, s);
              return {
                stepperLimit: u ? Math.max(0, i) : s,
                limitType: u ? f.b.QUOTA_LIMIT : f.b.STOCK_LIMIT,
              };
            })(u, r, t);
          return {
            quotaText: n,
            quota: u,
            quotaUsed: r,
            stepperLimit: a,
            limitType: o,
          };
        }
        var x = s("9ZMt"),
          C = s("tS13"),
          T = s("gBZH");
        function F(e, t, s) {
          var {
            authTypeList: i,
            authScene: u,
            accountUnionScene: r,
            skuScene: n,
          } = e;
          return t || (i || []).length > 0 || s ? "" : u || r || "";
        }
        function D(e, t, s) {
          return t ? [] : s ? ["mobile"] : e.authTypeList || [];
        }
        function j(e, t, s) {
          var { skuScene: i } = s,
            u = (null == e ? void 0 : e.isHaitao) && i !== C.c.ADD_CART,
            r = (function (e, t) {
              if ("qq" !== x.default.getEnv()) return !1;
              var { noNeedUnionScene: s } = e;
              if (void 0 !== s) return s;
              var { accountUnionScene: i } = t;
              return [T.a.ADD_CART, T.a.NORMAL_BUY].includes(i);
            })(t, s);
          return { authScene: F(s, r, u), authTypeList: D(s, r, u) };
        }
        function _(e, t, s) {
          var i = !Object(g.g)(null == t ? void 0 : t.tree),
            { picture: u } = e,
            {
              currentImage: r,
              selectedText: n,
              selectedSkuComb: o,
              pointsConfig: l,
              extraData: { view: k },
            } = s,
            { pricePrefix: m, priceSymbol: S = "￥", hideStock: p } = t,
            { showPrice: b, showOldPrice: f } = (function (e) {
              var { sku: t, selectedSkuComb: s, pointsConfig: i, view: u } = e,
                r = d()(t, [
                  "price",
                  "oldPrice",
                  "minPrice",
                  "maxPrice",
                  "oldMinPrice",
                  "oldMaxPrice",
                  "pointsPriceText",
                  "pointsPrice",
                  "priceRangeTypeStart",
                ]);
              if (s && !t.noneSku && (null == u || !u.showPriceRange)) {
                var {
                  price: n,
                  oldPrice: a,
                  pointsPriceText: o,
                  pointsPrice: c,
                } = s;
                r = {
                  price: n,
                  oldPrice: a,
                  pointsPriceText: o,
                  pointsPrice: c,
                };
              }
              var { price: l = -1, showPriceRange: k } = u || {};
              return (
                -1 === l || k || Object.assign(r, u),
                Object(h.a)(r, null == i ? void 0 : i.name)
              );
            })({ sku: t, selectedSkuComb: o, pointsConfig: l, view: k }),
            O = c()(t, "stockUnit", "件"),
            y = c()(t, "stockThreshold", 50),
            x = o ? (null == o ? void 0 : o.stockNum) : t.stockNum;
          return {
            showImage: i,
            pricePrefix: m,
            priceSymbol: S,
            price: Object(h.b)(b),
            oldPrice: Object(h.b)(f),
            stockThreshold: y,
            stockNum: x,
            stockUnit: O,
            selectedText: n,
            hideStock:
              (null == k ? void 0 : k.hideStock) ||
              (null == o ? void 0 : o.hideStock) ||
              p,
            headerImage: a()(r || u, "small"),
            tags:
              (null == k ? void 0 : k.tags) ||
              v({ goods: e, sku: t, selectedSkuComb: o }),
            skuBannerData: null == k ? void 0 : k.skuBannerData,
          };
        }
        function N(e, t) {
          var { kdtId: s, skuConfig: i, event: u, selectedSkuComb: n } = t,
            { authAllowDeny: a, skuScene: o } = u,
            { stockRemindStatus: c, showStockLackReminder: l } = e,
            { authScene: h, authTypeList: k } = j(e, i, u);
          return {
            buttons: ((e) => {
              var {
                  skuScene: t,
                  buyText: s,
                  addCartText: i,
                  previewText: u,
                  disableText: n,
                  customBtnText: a,
                  customBtnStyle: o,
                  isCustomBtnDisabled: c,
                  noNeedUnionScene: l,
                  auth: d,
                  selectedSkuComb: h,
                  stockRemindStatus: k,
                  showStockLackReminder: m,
                } = e,
                S = [],
                v = { noNeedUnionScene: l, auth: d, disable: !1 },
                p = Object(r.a)(
                  {
                    primary: !0,
                    submitAction: C.d.TRADE_SUBMIT,
                    skuScene: C.c.BUY,
                    text: s || "立即购买",
                  },
                  v
                ),
                g = Object(r.a)(
                  {
                    primary: !1,
                    submitAction: C.d.TRADE_SUBMIT,
                    skuScene: C.c.ADD_CART,
                    text: i || "加入购物车",
                  },
                  v
                );
              switch (
                (m &&
                  0 === (null == h ? void 0 : h.stockNum) &&
                  (t = C.c.SUBSCRIBE),
                t)
              ) {
                case C.c.ADD_CART:
                  S = [g];
                  break;
                case C.c.SEL_SKU:
                  S = [g, p];
                  break;
                case C.c.BUY:
                  (p.text = s || "下一步"), (S = [p]);
                  break;
                case C.c.DISABLE:
                  (p.text = n || "此商品限制购买"),
                    (p.submitAction = C.d.BREAK),
                    (p.skuScene = C.c.CUSTOM),
                    (p.disable = !0),
                    (S = [p]);
                  break;
                case C.c.PREVIEW_SKU:
                  (p.text = u || "我知道了"),
                    (p.submitAction = C.d.BREAK),
                    (p.skuScene = C.c.CUSTOM),
                    (p.disable = !0),
                    (S = [p]);
                  break;
                case C.c.SUBSCRIBE:
                  var { id: b } = h,
                    f = k[b],
                    O = f ? "已提醒补货" : "缺货中，提醒商家补货";
                  (p.text = O),
                    (p.submitAction = C.d.SUBSCRIBE),
                    (p.skuScene = C.c.SUBSCRIBE),
                    (p.disable = f),
                    (S = [p]);
                  break;
                case C.c.CUSTOM:
                  (p.text = a || "我知道了"),
                    (p.submitAction = C.d.CUSTOM),
                    (p.skuScene = C.c.CUSTOM),
                    (p.disable = c),
                    (p.customBtnStyle = o),
                    (S = [p]);
              }
              return S;
            })(
              Object(r.a)(
                {
                  skuScene: o,
                  auth: {
                    authStyle: f.a,
                    authTypeList: k,
                    authScene: h,
                    authAllowDeny: a,
                  },
                },
                d()(i, [
                  "buyText",
                  "addCartText",
                  "previewText",
                  "disableText",
                  "customBtnText",
                  "customBtnStyle",
                  "isCustomBtnDisabled",
                  "noNeedUnionScene",
                ]),
                {
                  stockRemindStatus: c,
                  showStockLackReminder: l,
                  selectedSkuComb: n,
                }
              )
            ),
            kdtId: s,
          };
        }
        var I = s("fSlU");
        t.a = {
          data: () => ({
            pickerOpts: {},
            headerOpt: {},
            rowOpt: {},
            messagesOpt: {},
            birtydayInfo: {},
            stepperOpt: {},
            footerOpt: {},
            selected: {},
          }),
          logicData: () => ({
            hasInit: !1,
            selectedSkuComb: null,
            currentImage: "",
            selectedText: "",
            skuValue: {},
            selectTextExtra: { selectValueList: [], unSelectNameList: [] },
            selectedSkuValues: [],
            messageValues: [],
            birthdayVal: {},
            loggerParams: {},
            selectedSkuEntries: { keys: [], values: [] },
          }),
          watch: {
            goods: {
              handler(e, t) {
                var s, i;
                void 0 === t && (t = {}),
                  !(
                    (null == e ? void 0 : e.alias) !==
                      (null == (s = t) ? void 0 : s.alias) ||
                    (null == e ? void 0 : e.id) !==
                      (null == (i = t) ? void 0 : i.id)
                  ) || u.a.isEmpty(t)
                    ? this.skuInit()
                    : this.resetSku();
              },
              immediate: !0,
            },
            sku: {
              handler() {
                this.skuInit();
              },
              immediate: !0,
            },
            skuConfig() {
              this.updateFooter();
            },
            event(e, t) {
              var s,
                { resetSku: i = !1, resetStepperOnHide: u = !0 } =
                  (null == (s = this.event) ? void 0 : s.skuOptions) || {};
              ((null == e ? void 0 : e.activityName) !==
                (null == t ? void 0 : t.activityName) ||
                i) &&
                this.resetSku(),
                u && this.updateStepper(!0),
                (null == e ? void 0 : e.skuScene) !==
                  (null == t ? void 0 : t.skuScene) && this.updateFooter();
            },
            extraData: {
              handler(e, t) {
                JSON.stringify(e) !== JSON.stringify(t) &&
                  this.onExtraDataChange(e);
              },
              deep: !0,
            },
            show: {
              handler(e) {
                var t, s, i;
                e &&
                  (this.setSimpleSkuList(
                    null == (t = this.sku) ? void 0 : t.list
                  ),
                  null == (s = this.emitSelected) || s.call(this),
                  null == (i = this.initAddressObserver) || i.call(this));
              },
              immediate: !0,
            },
          },
          methods: {
            skuInit() {
              var e;
              if (!u.a.isEmpty(this.goods) && !u.a.isEmpty(this.sku)) {
                var t, s, i;
                (this.birtydayInfo = this.sku.birthdayInfo || {}),
                  (this.messagesOpt = (function (e, t) {
                    var { messages: s = [] } = e;
                    return {
                      show: !(null == s || !s.length),
                      messages: s,
                      messageConfig: t,
                      needPicker:
                        s.length &&
                        s.some(
                          (e) =>
                            ["date", "time", "datetime"].indexOf(e.type) > -1
                        ),
                    };
                  })(this.sku, this.messageConfig)),
                  (this.skeletonInfo =
                    ((t = this.sku),
                    (s = null == t ? void 0 : t.tree.length),
                    {
                      class:
                        "sku-row-skeleton--" +
                        ((i = Object(g.g)(null == t ? void 0 : t.tree))
                          ? NaN
                          : "normal"),
                      height: 89 * (s - 1) + (i ? 213 : 89) + "px",
                    })),
                  (this.rowOpt = (function (e, t, s) {
                    var {
                        multiSkuDecision: i,
                        skuScene: u,
                        selected: r,
                        skuValue: n,
                      } = s,
                      {
                        tree: a,
                        list: o,
                        isShowOldPrice: c = !1,
                        activityInfo: l,
                        disableSoldoutSku: d = !0,
                      } = e,
                      { activityType: h } = l || {},
                      k = Object(p.a)({
                        tree: a,
                        multiSkuDecision: i,
                        list: o,
                        isShowOldPrice: c,
                        skuScene: u,
                        goods: t,
                        activityType: h,
                      });
                    return {
                      show: !(null == k || !k.length),
                      tree: k,
                      skuList: o,
                      disableSoldoutSku: d,
                      selectedSku: r,
                      multiSkuDecision: i,
                      skuScene: u,
                      activityType: h,
                      isShowOldPrice: c,
                    };
                  })(this.sku, this.goods, {
                    multiSkuDecision: this.multiSkuDecision || {},
                    skuScene: null == (e = this.event) ? void 0 : e.skuScene,
                    selected: this.selected,
                    skuValue: this.skuValue,
                  }));
                var r = Object(g.a)(this.sku, this.initialSku, this.selected);
                if (
                  JSON.stringify(r) !== JSON.stringify(this.selected) ||
                  this.sku.noneSku
                )
                  return (this.selected = r), void this.onSelect({});
                this.updateView();
              }
            },
            updateHeader() {
              this.headerOpt = _(this.goods, this.sku, {
                currentImage: this.currentImage,
                selectedSkuComb: this.selectedSkuComb,
                pointsConfig: this.pointsConfig,
                selectedText: this.selectedText,
                extraData: this.extraData,
              });
            },
            updateFooter() {
              this.footerOpt = N(this.goods, {
                kdtId: this.kdtId,
                skuConfig: this.skuConfig,
                event: this.event,
                selectedSkuComb: this.selectedSkuComb,
              });
            },
            updateStepper(e) {
              var t;
              void 0 === e && (e = !1),
                (this.stepperOpt = (function (e) {
                  var t,
                    s,
                    {
                      selectedNum: i,
                      sku: u,
                      initialSku: r,
                      extraData: { view: n },
                      selectedSkuComb: a,
                      reset: o,
                    } = e,
                    { selectedNum: c } = r || {},
                    l =
                      (null == u || null == (t = u.limit)
                        ? void 0
                        : t.startSaleNum) || 1,
                    d =
                      (null == u || null == (s = u.limit)
                        ? void 0
                        : s.quotaCycle) || 0,
                    h = null != c ? c : l,
                    k = l < 1 ? 1 : l,
                    m = a ? (null == a ? void 0 : a.stockNum) : u.stockNum,
                    S = (null == n ? void 0 : n.stockNum) || m,
                    {
                      quotaText: v,
                      stepperLimit: p,
                      limitType: g,
                      quota: b,
                      quotaUsed: f,
                    } = y(u, S);
                  return {
                    show: !0,
                    showTitle: !0,
                    showQuotaText: !0,
                    selectedNum: o ? h : i || h,
                    stepperMinLimit: k,
                    stepperLimit: p,
                    limitType: g,
                    quotaText: v,
                    startSaleNum: l,
                    quota: b,
                    quotaUsed: f,
                    customOverLimit: !0,
                    disableStepperInput: u.disableStepperInput,
                    stepperTitle:
                      (null == n ? void 0 : n.stepperTitle) || u.stepperTitle,
                    quotaCycle: d,
                  };
                })({
                  selectedNum: this.stepperOpt.selectedNum,
                  sku: this.sku,
                  initialSku: this.initialSku,
                  extraData: this.extraData,
                  selectedSkuComb: this.selectedSkuComb,
                  reset: e,
                })),
                void 0 !==
                  (null == (t = this.baseConfig)
                    ? void 0
                    : t.isShowSkuStepper) &&
                  (this.stepperOpt.show = this.baseConfig.isShowSkuStepper);
            },
            updateSelectedText() {
              this.selectedText = (function (e) {
                var {
                    selectTextExtra: t,
                    selectedSkuValues: s,
                    selectedSkuComb: i,
                    selected: u,
                    sku: r,
                    extraData: { view: n },
                  } = e,
                  { selectValueList: a = [], unSelectNameList: o = [] } =
                    (null == n ? void 0 : n.selectTextExtra) || {},
                  c = [...t.selectValueList, ...a],
                  l = [...t.unSelectNameList, ...o];
                if (i && !l.length) {
                  var d = [...s.map((e) => e.name || ""), ...c];
                  return d.length ? "已选 " + d.join(" ") : "";
                }
                var h = ((null == r ? void 0 : r.tree) || [])
                  .filter((e) => !u[e.kS])
                  .map((e) => e.k)
                  .concat(l);
                return h.length ? "请选择 " + h.join(" ") : "";
              })({
                selectTextExtra: this.selectTextExtra,
                selectedSkuValues: this.selectedSkuValues,
                selectedSkuComb: this.selectedSkuComb,
                selected: this.selected,
                sku: this.sku,
                extraData: this.extraData,
              });
            },
            updateView() {
              this.updateSelectedText(),
                this.updateHeader(),
                this.updateFooter(),
                this.updateStepper();
            },
            onMessageChange(e) {
              this.messageValues = e;
            },
            onBirthdayChange(e) {
              this.birthdayVal = e;
            },
            onStepperChange(e) {
              var t;
              Object(I.d)(e, {
                selectedNum: this.stepperOpt.selectedNum,
                goods: this.goods,
                selectedSkuComb: this.selectedSkuComb,
                sku: this.sku,
                selectedSkuValues: this.selectedSkuValues,
              }),
                (this.stepperOpt.selectedNum = e),
                null == (t = this.emitNumChange) || t.call(this);
            },
            onSelect(e) {
              var t,
                {
                  selected: s,
                  currentImage: i,
                  selectedSkuEntries: u,
                  isSkuCombSelected: r,
                  selectedSkuComb: n,
                  selectedSkuValues: a,
                } = Object(I.c)(e, {
                  selected: this.selected,
                  goods: this.goods,
                  sku: this.sku,
                });
              (this.skuValue = e),
                (this.selected = s),
                i && (this.currentImage = i),
                (this.selectedSkuComb = n),
                (this.selectedSkuEntries = u),
                (this.isSkuCombSelected = r),
                (this.selectedSkuValues = a),
                this.updateView(),
                null == (t = this.emitSelected) || t.call(this);
            },
            onPreview(e) {
              var t,
                s = Object(I.b)(e, {
                  goods: this.goods,
                  sku: this.sku,
                  currentImage: this.currentImage,
                });
              s && (null == (t = this.emitPreview) || t.call(this, s));
            },
            onExtraDataChange(e) {
              var t,
                { pluginsResultUpdate: s, viewUpdate: i } = e;
              s && this.emitSelected(),
                i &&
                  !u.a.isEmpty(this.sku) &&
                  (null != (t = e.view) &&
                    t.selectTextExtra &&
                    this.updateSelectedText(),
                  this.updateHeader(),
                  this.updateStepper());
            },
            validate(e) {
              var { noToast: t = !1 } = e || {};
              return Object(I.e)({
                btn: {},
                sku: this.sku,
                goods: this.goods,
                selectedSkuComb: this.selectedSkuComb,
                skuTree: this.rowOpt.tree,
                selectedNum: this.stepperOpt.selectedNum,
                selectedSkuEntries: this.selectedSkuEntries,
                event: this.event,
                extraData: this.extraData,
                messageValues: this.messageValues,
                isSkuCombSelected: this.isSkuCombSelected,
                selectedText: this.selectedText,
                noToast: t,
              });
            },
            resetSku() {
              (this.hasInit = !1),
                (this.selectedSkuComb = null),
                (this.isSkuCombSelected = !1),
                (this.currentImage = ""),
                (this.selectedText = ""),
                (this.skuValue = {}),
                (this.selected = {}),
                (this.selectTextExtra = {
                  selectValueList: [],
                  unSelectNameList: [],
                }),
                (this.selectedSkuValues = []),
                (this.messageValues = []),
                (this.messagesOpt = {}),
                this.skuInit();
            },
            clearSkuGlobalData() {
              x.default.setGlobal("_goodsCommonSkuList", []);
            },
            setSimpleSkuList(e) {
              var t = [];
              if (Array.isArray(e) && e.length > 0) {
                var s = [1, 2, 3, 4, 5];
                t = e.map((e) => {
                  var t = {
                    stockNum: e.stockNum,
                    customDisableSell: e.customDisableSell,
                  };
                  return (
                    s.forEach((s) => {
                      var i = "s" + s;
                      void 0 !== e[i] && (t[i] = e[i]);
                    }),
                    t
                  );
                });
              }
              x.default.setGlobal("_goodsCommonSkuList", t);
            },
          },
        };
      },
      "6us3": function (e, t, s) {
        s.d(t, "a", function () {
          return u;
        }),
          s.d(t, "b", function () {
            return r;
          });
        var i = s("Fcif");
        function u(e) {
          return (e || []).map((e) => {
            var t,
              { v: s } = e;
            if (e.largeImageMode) {
              var u = [],
                r = [];
              e.v.forEach((e, t) => {
                (Math.floor(t / 3) % 2 == 0 ? u : r).push(e);
              }),
                (s = [...u, ...r]),
                (t = u.length);
            }
            return Object(i.a)({}, e, { v: s, topLength: t });
          });
        }
        function r(e, t) {
          var s = (function (e) {
            var t = [],
              s = function (e) {
                var { v: s, kS: u, kId: r } = e;
                s &&
                  s.forEach((e) => {
                    (e.previewImgUrl || e.imgUrl) &&
                      t.push(Object(i.a)({}, e, { ks: u, kId: r }));
                  });
              };
            for (var u of e) s(u);
            return t;
          })(e.tree);
          return {
            imageList: s,
            imageUrls: s.map((e) =>
              e.defaultSkuImg ? t.picture + "#" + e.id : e.imgUrl
            ),
          };
        }
      },
      "9Eee": function (e, t, s) {
        s.d(t, "b", function () {
          return o;
        }),
          s.d(t, "a", function () {
            return c;
          }),
          s.d(t, "c", function () {
            return l;
          });
        var i = s("Fcif"),
          u = s("5Xe+"),
          r = s.n(u),
          n = s("TtQZ"),
          a = s("Bg0V");
        function o(e) {
          var { isSkuCombSelected: t, sku: s, selectedSkuEntries: u } = e;
          return t
            ? null != s && s.noneSku
              ? Object(i.a)(
                  {},
                  r()(s, ["price", "stockNum", "pointsPrice", "noneSku"]),
                  { id: s.collectionId }
                )
              : Object(n.e)(s.list, u)
            : null;
        }
        function c(e, t) {
          var {
              couponId: s,
              pluginsResult: u,
              module: r,
              activityName: a,
              tradeData: o,
              alias: c,
            } = e,
            { selectedSkuEntries: l, skuTree: d } = t || {},
            h = Object(n.b)(l, d);
          return {
            submitAction: null == e ? void 0 : e.submitAction,
            skuScene: null == e ? void 0 : e.skuScene,
            activityName: a,
            skuData: o,
            alias: c,
            couponId: s,
            pluginsResult: u,
            module: r,
            extraParams: Object(i.a)({}, e, { skuNameForLog: h }),
          };
        }
        function l(e) {
          var {
              btn: t,
              sku: s,
              goods: i,
              selectedSkuComb: u,
              skuTree: r,
              selectedNum: n,
              selectedSkuEntries: o,
              event: l,
              extraData: d,
              messageValues: h,
              birthdayVal: k,
            } = e,
            m = l.submitAction || t.submitAction,
            S = t.skuScene || l.skuScene;
          return c(
            {
              couponId: s.couponId,
              pluginsResult: null == d ? void 0 : d.pluginsResult,
              module: null == l ? void 0 : l.module,
              activityName: null == l ? void 0 : l.activityName,
              submitAction: m,
              skuScene: S,
              alias: i.alias,
              tradeData: {
                goodsId: i.id,
                selectedSkuComb: u,
                messages: Object(a.c)(h),
                birthdayVal: k,
                selectedNum: n || 1,
                cartMessages: Object(a.b)(h, s.messages),
              },
            },
            { skuTree: r, selectedSkuEntries: o }
          );
        }
      },
      Bg0V: function (e, t, s) {
        s.d(t, "a", function () {
          return r;
        }),
          s.d(t, "c", function () {
            return n;
          }),
          s.d(t, "b", function () {
            return a;
          });
        var i = s("JijB"),
          u = s.n(i);
        function r(e, t) {
          return (
            void 0 === t && (t = "date"),
            e
              ? "datetime" === t
                ? u()(e, "YYYY-MM-DD HH:mm")
                : u()(e, "YYYY-MM-DD")
              : ""
          );
        }
        function n(e) {
          return e.reduce((e, t, s) => ((e["message_" + s] = t.value), e), {});
        }
        function a(e, t) {
          return e.reduce(
            (e, s, i) => (t[i] && (e[t[i].name] = s.value), e),
            {}
          );
        }
      },
      Tr24: function (e, t, s) {
        s.d(t, "b", function () {
          return u;
        }),
          s.d(t, "a", function () {
            return r;
          });
        s("Fcif"), s("gLTC"), s("lCVF");
        var i = s("6us3");
        var u = (e, t) => {
          var s = null == e ? void 0 : e.length,
            { s1NoAffectPrice: i, s2NoAffectPrice: u } = t;
          return 1 === s ? !i : 2 === s ? (i && !u) || (!i && u) : void 0;
        };
        function r(e) {
          var { tree: t = [], multiSkuDecision: s, skuScene: u } = e;
          return Object(i.a)(t);
        }
      },
      TtQZ: function (e, t, s) {
        s.d(t, "g", function () {
          return n;
        }),
          s.d(t, "e", function () {
            return a;
          }),
          s.d(t, "d", function () {
            return o;
          }),
          s.d(t, "h", function () {
            return c;
          }),
          s.d(t, "b", function () {
            return l;
          }),
          s.d(t, "c", function () {
            return d;
          }),
          s.d(t, "f", function () {
            return h;
          }),
          s.d(t, "a", function () {
            return k;
          });
        var i = s("Fcif"),
          u = s("xers"),
          r = s.n(u);
        function n(e) {
          var t;
          return !(null == e || null == (t = e[0]) || !t.largeImageMode);
        }
        var a = (e, t) =>
            e.find((e) =>
              (function (e, t) {
                for (var { keys: s, values: i } = t, u = 0; u < s.length; u++) {
                  if (+e[s[u]] != +i[u]) return !1;
                }
                return !0;
              })(e, t)
            ) || null,
          o = (e, t) => {
            var { keys: s, values: i } = t;
            return s.reduce((t, s, u) => {
              if ("" !== i[s]) {
                var r = e.find((e) => e.kS === s);
                if (r && r.v) {
                  var n = r.v.find((e) => e.id === +i[u]);
                  n && ((n.skuKeyStr = r.kS), t.push(n));
                }
              }
              return t;
            }, []);
          },
          c = (e, t, s) => {
            if (0 === e.length) return !1;
            var { key: u, valueId: r } = s,
              n = Object(i.a)({}, t, { [u]: r }),
              a = Object.keys(n).filter((e) => "" !== n[e]),
              o = e.filter((e) =>
                a.every((t) => String(n[t]) === String(e[t]))
              ),
              c = o.reduce((e, t) => (e += t.stockNum), 0),
              l = o.some((e) => !0 !== e.customDisableSell);
            return c > 0 && l;
          },
          l = (e, t) =>
            ((null == e ? void 0 : e.keys) || []).map((s, i) => {
              var u = t.find((e) => e.kS === s),
                r = u.v.find((t) => t.id === e.values[i]);
              return {
                k_s: s,
                k: u.k,
                k_id: u.kId,
                v: null == r ? void 0 : r.name,
                v_id: null == r ? void 0 : r.id,
              };
            });
        function d(e) {
          return { keys: Object.keys(e), values: Object.values(e) };
        }
        function h(e) {
          var { sku: t, selectedSkuEntries: s } = e,
            { noneSku: i, tree: u } = t;
          return !(
            !i &&
            !((e, t) => {
              var s = t.values.filter(Boolean);
              return e.length === s.length;
            })(u, s)
          );
        }
        function k(e, t, s) {
          if ((void 0 === t && (t = {}), s && !r()(s))) return s;
          var i = {};
          return (
            e.tree.forEach((s) => {
              for (var u = s.kS, r = 0, n = 0; n < s.v.length; n++) {
                var a = s.v[n].id;
                if (
                  (c(e.list, i, { key: u, valueId: a }) &&
                    ((i[u] = a), (r += 1)),
                  r > 1)
                ) {
                  (i[u] = t[u] || ""), t[u] || delete i[u];
                  break;
                }
              }
            }),
            i
          );
        }
      },
      URSu: function (e, t, s) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = s("bb6g"),
          u = i.__importDefault(s("h9bJ")),
          r = function (e, t) {
            return void 0 === t
              ? e
              : "object" != typeof e || null === e
              ? t
              : (0, u.default)(e)
              ? ((s = i.__spreadArray([], e, !0)),
                "object" == typeof t &&
                  Object.keys(t).forEach(function (e) {
                    s[e] = r(s[e], t[e]);
                  }),
                s)
              : "object" != typeof t || null === t
              ? i.__assign(i.__assign({}, e), t)
              : ((s = i.__assign({}, e)),
                i
                  .__spreadArray([], Object.keys(s).concat(Object.keys(t)), !0)
                  .reduce(function (e, u) {
                    var n;
                    return i.__assign(
                      i.__assign({}, e),
                      (((n = {})[u] = r(s[u], t[u])), n)
                    );
                  }, {}));
            var s;
          };
        t.default = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          if (0 === e.length) return {};
          if (1 === e.length) {
            var s = e[0];
            return "object" != typeof s
              ? s
              : (0, u.default)(s)
              ? i.__spreadArray([], s, !0)
              : i.__assign({}, s);
          }
          return e.reduce(function (e, t) {
            return null == e
              ? i.__assign(i.__assign({}, e), t)
              : "object" != typeof e
              ? e
              : r(e, t);
          });
        };
      },
      cJj0: function (e, t, s) {
        s.d(t, "b", function () {
          return i;
        }),
          s.d(t, "a", function () {
            return u;
          });
        var i = { QUOTA_LIMIT: 0, STOCK_LIMIT: 1 },
          u = "display: block; width: 100%;";
      },
      dKdR: function (e, t, s) {
        var i, u;
        s.d(t, "b", function () {
          return o;
        }),
          s.d(t, "a", function () {
            return c;
          }),
          (function (e) {
            (e[(e.forever = 0)] = "forever"),
              (e[(e.days = 1)] = "days"),
              (e[(e.weeks = 2)] = "weeks"),
              (e[(e.months = 3)] = "months"),
              (e[(e.order = 4)] = "order");
          })(i || (i = {})),
          (function (e) {
            (e[(e.quotaLimit = 0)] = "quotaLimit"),
              (e[(e.stockLimit = 1)] = "stockLimit");
          })(u || (u = {}));
        var r = { 0: "", 1: "每天", 2: "每周", 3: "每月", 4: "每单" };
        function n(e) {
          var { buyWayText: t = "购买" } = e;
          return t && "string" == typeof t
            ? [t.slice(0, 1), t]
            : ["购", "购买"];
        }
        function a(e) {
          var { singleQuota: t = -1 } = e;
          return t && t > 0 ? t : -1;
        }
        function o(e) {
          var {
              quota: t = 0,
              quotaUsed: s = 0,
              quotaCycle: i = 0,
              quotaUnit: u = "件",
              startSaleNum: o = 1,
              hideQuotaText: c = !1,
            } = e,
            l = [];
          o > 1 && l.push("" + o + u + "起售");
          var d = a(e),
            [h] = n(e),
            k = !c && r[i] ? r[i] : "";
          return (
            d > 0 && t - s >= d
              ? l.push("一次限" + h + d + u)
              : t > 0 && l.push(k + "限" + h + t + u),
            l.join("，")
          );
        }
        function c(e) {
          var {
            quota: t = 0,
            quotaUsed: s = 0,
            quotaCycle: u = 0,
            quotaUnit: o = "件",
            startSaleNum: c = 1,
            hideQuotaText: l = !1,
            limitType: d,
            action: h,
          } = e;
          if ("minus" === h)
            return c > 1
              ? "该商品" + c + o + "起售哦"
              : "至少选择一" + o + "商品";
          var k = a(e),
            [m, S] = n(e),
            v = (!l && r[u]) || "";
          if ("plus" === h) {
            if (0 === d) {
              if (k > 0 && t - s >= k) return "一次最多能" + S + k + o;
              var p =
                "该商品" + (u === i.order ? "" : "每人") + v + "限" + m + t + o;
              return (
                s > 0 && (p += "，\n你之前已" + S + "了" + s + o + "。"), p
              );
            }
            return "该商品库存不足";
          }
          return "";
        }
      },
      fSlU: function (e, t, s) {
        s.d(t, "c", function () {
          return m;
        }),
          s.d(t, "b", function () {
            return S;
          }),
          s.d(t, "d", function () {
            return v;
          }),
          s.d(t, "e", function () {
            return p;
          }),
          s.d(t, "a", function () {
            return g;
          });
        var i = s("Fcif"),
          u = s("882d"),
          r = s("tS13"),
          n = s("AGZf"),
          a = s("6us3"),
          o = s("TtQZ"),
          c = s("9Eee"),
          l = s("gLTC");
        function d(e) {
          return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
            e
          );
        }
        function h(e) {
          e = e.trim();
          var t = /^((\+86)|(86))?(1)\d{10}$/.test(e),
            s = /^0[0-9\-]{10,13}$/.test(e),
            i = /^((\+852)|(852))?(5|6|8|9)\d{7}$/.test(e),
            u = /^((\+886)|(886)|(0))?9\d{2}-?\d{3}-?\d{3}$/.test(e);
          return t || s || i || u;
        }
        function k(e, t) {
          var {
            isSkuCombSelected: s,
            selectedText: u,
            messageValues: r,
            birthdayVal: n,
            messages: a,
            selectedNum: o,
            extraData: c,
          } = t;
          return new Promise((t, n) => {
            var l = { validate: !0, errorMsg: "" };
            if (
              (0 === o
                ? (l.errorMsg = "商品已经无法购买啦")
                : s
                ? s &&
                  (l.errorMsg = (function (e) {
                    for (
                      var { messageValues: t, messages: s } = e, i = 0;
                      i < s.length;
                      i++
                    ) {
                      var { value: u = "" } = t[i] || {},
                        r = s[i];
                      if ("" === u) {
                        if (1 == +r.required)
                          return (
                            ("image" === r.type ? "上传" : "填写") + r.name
                          );
                      } else {
                        if ("tel" === r.type && !/^\d+(\.\d+)?$/.test(u))
                          return "请填写正确的数字格式留言";
                        if ("mobile" === r.type && !h(u))
                          return "请输入正确的手机号";
                        if ("email" === r.type && !d(u))
                          return "请填写正确的邮箱";
                        if (
                          "id_no" === r.type &&
                          (u.length < 15 || u.length > 18)
                        )
                          return "请填写正确的身份证号码";
                      }
                    }
                  })({ messageValues: r, messages: a }))
                : (l.errorMsg = u),
              l.errorMsg)
            )
              return (l.validate = !1), n(l);
            var k = Object.values(
              (null == c ? void 0 : c.invalidMessage) || {}
            );
            return k.length
              ? ((l.validate = !1), (l.errorMsg = k[0]), n(l))
              : t(
                  Object(i.a)({}, e, {
                    pluginsResult: null == c ? void 0 : c.pluginsResult,
                  })
                );
          });
        }
        function m(e, t) {
          var { selected: s, goods: u, sku: r } = t,
            { skuKeyStr: n, id: a, imgUrl: l, defaultSkuImg: d } = e,
            h = "";
          l && (h = d ? u.picture + "#" + a : l);
          var k = n ? Object(i.a)({}, s, { [n]: +s[n] === a ? "" : a }) : s,
            m = Object(o.c)(k),
            S = Object(o.f)({ sku: r, selectedSkuEntries: m }),
            v = Object(c.b)({
              isSkuCombSelected: S,
              sku: r,
              selectedSkuEntries: m,
            }),
            p = Object(o.d)(r.tree, m);
          if (!Object.keys(e).length) {
            var g = p.find((e) => !!e.imgUrl);
            g && !g.defaultSkuImg && (h = g.imgUrl);
          }
          return {
            selected: k,
            currentImage: h,
            selectedSkuEntries: m,
            isSkuCombSelected: S,
            selectedSkuComb: v,
            selectedSkuValues: p,
          };
        }
        function S(e, t) {
          var { goods: s, sku: i, currentImage: r } = t,
            { type: n, id: o } = e,
            c = {},
            { imageList: l, imageUrls: d } = Object(a.b)(i, s),
            { previewOnClickImage: h = !0 } = i;
          if ("header" === n) {
            var k = [s.picture, ...d],
              m = r || s.picture;
            (c.current = k.findIndex((e) => e === m)), (c.urls = k);
          } else
            (c.urls = [...d]), (c.current = l.findIndex((e) => e.id === o));
          if (!h) return (c.imageList = l), c;
          (c.zIndex = 5001), Object(u.d)(c);
        }
        function v(e, t) {
          var {
            selectedNum: s,
            goods: i,
            selectedSkuComb: u,
            sku: r,
            selectedSkuValues: n,
          } = t;
          Object(l.d)(
            s,
            e,
            i,
            (null == u ? void 0 : u.skuId) ||
              (null == r ? void 0 : r.collectionId),
            { selectedSkuValues: n, skuTree: r.tree }
          );
        }
        function p(e, t) {
          var {
              btn: s,
              sku: i,
              goods: u,
              selectedSkuComb: r,
              skuTree: a,
              selectedNum: o,
              selectedSkuEntries: l,
              event: d,
              extraData: h,
              messageValues: m,
              birthdayVal: S,
              isSkuCombSelected: v,
              selectedText: p,
              noToast: g = !1,
            } = e,
            b =
              t ||
              Object(c.c)({
                btn: s,
                sku: i,
                goods: u,
                selectedSkuComb: r,
                skuTree: a,
                selectedNum: o,
                selectedSkuEntries: l,
                event: d,
                extraData: h,
                messageValues: m,
                birthdayVal: S,
              }),
            { submitAction: f, skuScene: O } = b;
          return k(
            { submitAction: f, skuScene: O },
            {
              selectedNum: o,
              extraData: h,
              isSkuCombSelected: v,
              selectedText: p,
              messageValues: m,
              birthdayVal: S,
              messages: (null == i ? void 0 : i.messages) || [],
            }
          )
            .then(() => Promise.resolve(b))
            .catch((e) => {
              var { validate: t, errorMsg: s } = e;
              return (
                !t &&
                  s &&
                  (n.a.clear(),
                  !g && Object(n.a)({ message: s, zIndex: 99999 })),
                Promise.reject({ validate: t, errorMsg: s })
              );
            });
        }
        function g(e, t) {
          var {
            sku: s,
            goods: i,
            multiSkuDecision: u,
            selectedSkuComb: n,
            skuTree: a,
            selectedNum: o,
            selectedSkuEntries: d,
            event: h,
            extraData: k,
            messageValues: m,
            birthdayVal: S,
            isSkuCombSelected: v,
            selectedText: g,
          } = t;
          Object(l.b)(e, {
            sku: s,
            goods: i,
            multiSkuDecision: u,
            selectedSkuComb: n,
            skuTree: a,
            selectedNum: o,
            selectedSkuEntries: d,
            event: h,
          });
          var b = h.submitAction || e.submitAction;
          if (b === r.d.CUSTOM) return Promise.resolve({ eventName: "custom" });
          if (b === r.d.BREAK) return Promise.reject("break");
          var f = Object(c.c)({
            btn: e,
            sku: s,
            goods: i,
            selectedSkuComb: n,
            skuTree: a,
            selectedNum: o,
            selectedSkuEntries: d,
            event: h,
            extraData: k,
            messageValues: m,
            birthdayVal: S,
          });
          return b === r.d.SUBSCRIBE
            ? Promise.resolve({ eventName: "submit", data: f })
            : p(
                {
                  btn: e,
                  sku: s,
                  goods: i,
                  selectedSkuComb: n,
                  skuTree: a,
                  selectedNum: o,
                  selectedSkuEntries: d,
                  event: h,
                  extraData: k,
                  messageValues: m,
                  birthdayVal: S,
                  isSkuCombSelected: v,
                  selectedText: g,
                },
                f
              ).then(() => Promise.resolve({ eventName: "submit", data: f }));
        }
      },
      gLTC: function (e, t, s) {
        s.d(t, "e", function () {
          return l;
        }),
          s.d(t, "c", function () {
            return d;
          }),
          s.d(t, "f", function () {
            return h;
          }),
          s.d(t, "d", function () {
            return k;
          }),
          s.d(t, "b", function () {
            return m;
          }),
          s.d(t, "a", function () {
            return S;
          });
        var i = s("Fcif"),
          u = s("ONqW"),
          r = s("tS13"),
          n = s("gBZH"),
          a = s("Tr24"),
          o = s("TtQZ"),
          c = Object(u.a)();
        function l(e) {
          c.log({
            et: "view",
            ei: "show_price",
            en: "价格标签曝光",
            params: Object(i.a)({}, e, { component: "sku" }),
          });
        }
        function d(e) {
          c.log({
            et: "click",
            ei: "click_price",
            en: "价格标签点击",
            params: Object(i.a)({}, e, { component: "sku" }),
          });
        }
        function h(e, t) {
          c.log({
            et: "view",
            ei: "show_low_stock",
            en: "库存紧张标签曝光",
            params: Object(i.a)({}, e, { sku_type: t, component: "sku" }),
          });
        }
        function k(e, t, s, u, r) {
          var n,
            { id: a, title: o } = s,
            { selectedSkuValues: l, skuTree: d } = r,
            h = {
              num: t,
              goods_id: a,
              goods_name: o,
              sku_id: u,
              sku_name: (l || []).map((e) => {
                var t = d.find((t) => t.v.some((t) => t.id === e.id));
                return {
                  k: t.k,
                  k_id: t.kId,
                  k_s: t.kS,
                  v: e.name,
                  v_id: e.id,
                };
              }),
            };
          e < t
            ? ((n = h),
              c.log({
                et: "click",
                ei: "goods_detail_increase_goods_num",
                en: "商详增加商品数量",
                params: Object(i.a)({}, n),
              }))
            : e > t &&
              (function (e) {
                c.log({
                  et: "click",
                  ei: "goods_detail_decrease_goods_num",
                  en: "商详减少商品数量",
                  params: Object(i.a)({}, e),
                });
              })(h);
        }
        function m(e, t) {
          var {
              sku: s,
              goods: u,
              multiSkuDecision: l,
              selectedSkuComb: d,
              skuTree: h,
              selectedNum: k,
              selectedSkuEntries: m,
              event: S,
            } = t,
            v = (function (e, t, s) {
              var {
                  multiSkuDecision: u,
                  selectedSkuComb: r,
                  skuTree: n,
                  selectedNum: c,
                  selectedSkuEntries: l,
                  event: d,
                } = s,
                h = {
                  goods_id: null == t ? void 0 : t.id,
                  goods_name: null == t ? void 0 : t.title,
                  goods_num: c,
                  sku_id:
                    (null == r ? void 0 : r.id) ||
                    (null == r ? void 0 : r.skuId) ||
                    "",
                  sku_name: [],
                  activity_name: d.activityName,
                };
              if (e.noneSku) return h;
              var { hotSku: k, stockHotSku: m, skuDifferentialPrice: S } = u,
                v = 2,
                p = 2,
                g = 2;
              if (k) v = +k.s1 == +(null == r ? void 0 : r.s1) ? 0 : 1;
              else if (m) {
                var b,
                  f = null == (b = n[n.length - 1]) ? void 0 : b.kS;
                p = +m[f] == +(null == r ? void 0 : r[f]) ? 0 : 1;
              }
              return (
                S &&
                  (Object(a.b)(n, u)
                    ? (g = 0)
                    : n.find((e) => e.isShowPrice) && (g = 1)),
                Object(i.a)({}, h, {
                  isshow_hot: v,
                  isshow_low: p,
                  is_show: g,
                  sku_name: Object(o.b)(l, n),
                })
              );
            })(s, u, {
              multiSkuDecision: l,
              selectedSkuComb: d,
              skuTree: h,
              selectedNum: k,
              selectedSkuEntries: m,
              event: S,
            }),
            { skuScene: p, auth: g } = e;
          if (p && v) {
            var b,
              f = {
                et: "click",
                params: Object(i.a)({}, v, { component: "sku" }),
              };
            p === r.c.BUY
              ? (f = Object(i.a)({}, f, {
                  ei: "click_order",
                  en: "点击确认下单",
                }))
              : p === r.c.ADD_CART &&
                (f = Object(i.a)({}, f, {
                  ei: "click_add",
                  en: "点击确认加购",
                })),
              c.log(f),
              g &&
                g.authScene === n.a.POINTS_BUY &&
                ((b = v),
                c.log({
                  et: "click",
                  ei: "exchange_goods_by_score",
                  en: "积分兑换商品",
                  params: Object(i.a)({}, b),
                }));
          }
        }
        function S(e) {
          c.log({
            et: "custom",
            ei: "birthday_relation_net_msg",
            en: "生日关系网祝福语",
            params: Object(i.a)({}, e),
          });
        }
      },
      "tz+R": function (e, t, s) {
        s.r(t);
        var i = s("+I+c"),
          u = s("Fcif"),
          r = s("YeA1"),
          n = s("VmHG"),
          a = s("42tT"),
          o = s("Tewj"),
          c = s("xSgL"),
          l = s("dwfD"),
          d = s("w/BL"),
          h = s("yMpf"),
          k = s("aOlM"),
          m = s("BmOr"),
          S = ["skuBannerData"],
          v = {
            mixins: [a.a],
            data() {
              return Object(u.a)(
                {
                  show: !1,
                  sellingPointOpt: {},
                  display: {},
                  isOpened: !1,
                  supportSkuDirectOrder: !1,
                  themeVars: "",
                  goodsSkuData: {},
                  postage: {},
                  originPrice: 0,
                  isShowYzGuarantee: !1,
                  isChoosedCard: !1,
                  extraData: {},
                  estimatePriceData: {},
                  skuBannerData: {},
                },
                Object(n.d)(this, ["showSubmitBlock", "prepareIsReady"])
              );
            },
            logicData: () => ({
              goods: {},
              sku: {},
              event: {},
              skuConfig: {},
              pointsConfig: {},
              multiSkuDecision: {},
              stepperOpt: {},
            }),
            computed: {
              skuHeight: () => "80vh",
              customStyle() {
                return "height: " + this.skuHeight;
              },
              orderStepper() {
                return Object(u.a)({}, this.stepperOpt, {
                  showTitle: !1,
                  showQuotaText: !1,
                });
              },
              isMultiSkuGoods() {
                return this.sku.list && this.sku.list.length;
              },
              isRealShowYzGuarantee() {
                return this.isShowYzGuarantee && !this.isChoosedCard;
              },
              skuOrderBodyStyle() {
                return this.prepareIsReady
                  ? "padding-bottom: 97px"
                  : "padding-bottom: 61px";
              },
            },
            watch: {
              postage(e) {
                this.setExpressWaySelected(e);
              },
            },
            created() {
              Object.assign(this.ctx.data, Object(l.a)()),
                Object(n.b)(this, [
                  "setSkuHeight",
                  "setBookKey",
                  "setExpressWaySelected",
                  "setAddressBlockFixed",
                  "onDateTimeClick",
                  "handleSkuOrderShow",
                  "handleResetState",
                  "handlePointConfirm",
                  "handleSkuHide",
                ]),
                o.default.on("calculateSkuHeight", () => {
                  this.calculateSkuHeight();
                }),
                Object(r.b)(this, [
                  "skuConfig",
                  "pointsConfig",
                  "sellingPointOpt",
                  "multiSkuDecision",
                  "display",
                  "themeColors",
                  "goodsSkuData",
                  "supportSkuDirectOrder",
                  "themeVars",
                  "themeType",
                  "postage",
                  "isChoosedCard",
                ]),
                Object(r.b)(
                  this,
                  {
                    skuData: (e) => {
                      this.supportSkuDirectOrder && (this.sku = e);
                    },
                    goodsBaseInfo: (e) => {
                      (this.goods = e),
                        (this.originPrice = e.origin),
                        Object.assign(this.ctx.data, Object(c.a)(e));
                    },
                    yzGuarantee: (e) => {
                      this.isShowYzGuarantee = e;
                    },
                  },
                  { isSetData: !1 }
                ),
                Object(r.d)(this, {
                  "skuOrder:show": (e) => this.onSkuOrderShow(e),
                  "skuOrder:hide": () => this.onSkuOrderHide(),
                }),
                Object(r.e)(this, {
                  afterFetchShow: () => {
                    this.store.setLockState({ isLocked: !1 });
                  },
                  afterFetchShowError: () => {
                    this.store.setLockState({ isLocked: !0, type: "error" });
                  },
                  submitOrderAfterRisk: () => this.onSkuBtnPayAfterRisk(),
                  validateSkuComb: () => this.validate(),
                  handleEmptySku: () => {
                    var { skuId: e } = this.selectedSkuComb || {};
                    e
                      ? this.ctx.process.invoke("mutateState", (e) => {
                          (e.points.usePoints = !1), (e.points.available = !1);
                        })
                      : this.onSkuOrderHide(),
                      (this.selected = {}),
                      (this.selectedSkuComb = {}),
                      (this.selectedSkuValues = {}),
                      setTimeout(() => this.emitSelected(), 100);
                  },
                }),
                this.initOrderPopup();
            },
            destroyed() {
              o.default.off("calculateSkuHeight"),
                this.observer && this.observer.disconnect();
            },
            methods: {
              initApolloConfig() {
                Object(h.a)().then((e) => {
                  Object(d.h)(this.ctx, e);
                });
              },
              initOrderPopup() {
                this.initApolloConfig();
              },
              onSkuOrderShow(e) {
                (this.isInited = !1),
                  (this.event = e),
                  (this.show = !0),
                  this.handleSkuOrderShow(e),
                  this.startAddressObserver(),
                  this.emitSelected(),
                  this.disableBodyScroll(),
                  Object(d.l)(this.ctx.data.pageKey);
              },
              onSkuOrderHide() {
                this.store.toggleDiscountDetail(!1),
                  (this.show = !1),
                  this.enableBodyScroll();
              },
              emitPreview(e) {
                this.ctx.event.emit("sku:preview", e);
              },
              emitNumChange() {
                var {
                  selectedNum: e,
                  stepperMinLimit: t,
                  stepperMaxLimit: s,
                } = this.orderStepper || {};
                e < t
                  ? this.onStepperChange(t)
                  : e > s
                  ? this.onStepperChange(s)
                  : (this.getEstimateAndUmpData("num"),
                    o.default.trigger("sku:num-change", e));
              },
              getEstimateAndUmpData: Object(k.a)(function (e) {
                var { selectedSkuComb: t = null, goods: s, sku: r = {} } = this,
                  n = {};
                if (t) {
                  var a,
                    { skuId: o, oldPrice: c, price: l, id: d } = t,
                    { alias: h } = s,
                    { activityId: k = "", type: v } = r;
                  (n.estimatedPriceSkuId = o || d),
                    (null != (a = this.sku) && a.noneSku) ||
                      (n.priceWithProperties = c || l),
                    Object(m.a)(
                      Object(u.a)(
                        {
                          alias: h,
                          purchaseNum: this.orderStepper.selectedNum,
                          platformPage: 3,
                          activityType: v,
                          activityId: String(k),
                        },
                        n
                      ),
                      this.goods.origin
                    )
                      .then((t) => {
                        var { skuBannerData: s = {} } = t,
                          r = Object(i.a)(t, S),
                          n = Object(u.a)({}, r, { changeType: e });
                        (this.estimatePriceData = n), (this.skuBannerData = s);
                      })
                      .catch(() => {
                        (this.estimatePriceData = {}),
                          (this.skuBannerData = {});
                      });
                }
              }, 200),
              emitSelected() {
                var e, t;
                this.ctx.event.emit("skuOrder:selected", {
                  selectedSkuComb: this.selectedSkuComb,
                  selectedSkuValues: this.selectedSkuValues,
                  pluginsResult:
                    null == (e = this.extraData) ? void 0 : e.pluginsResult,
                }),
                  this.getEstimateAndUmpData("sku");
                var { stepperMinLimit: s, stepperLimit: i } = this.orderStepper;
                this.onSkuSelected({
                  selectedSkuComb: this.selectedSkuComb,
                  selectedSkuValues: this.selectedSkuValues,
                  noneSku: null == (t = this.sku) ? void 0 : t.noneSku,
                  quotaLimit: { stepperMinLimit: s, stepperMaxLimit: i },
                });
              },
              onClose() {
                this.onSkuOrderHide();
              },
              calculateSkuHeight() {
                return new Promise((e, t) => {
                  try {
                    this.createSelectorQuery()
                      .select(".sku-order-container")
                      .boundingClientRect((t) => {
                        (null == t ? void 0 : t.height) &&
                          this.setSkuHeight(null == t ? void 0 : t.height),
                          e(null == t ? void 0 : t.height);
                      })
                      .exec();
                  } catch (e) {
                    t(0);
                  }
                });
              },
              onSkuBtnPayAfterRisk() {
                this.store.doSubmit(!0);
              },
              onSkuSelected(e) {
                this.supportSkuDirectOrder &&
                  (this.store.onSkuDirectOrderUpdateSku(e),
                  null != e && e.selectedSkuComb
                    ? e.selectedSkuComb.id &&
                      (this.store.setBookKey(null),
                      this.triggerSubmit(!0),
                      (this.isInited = !0))
                    : this.store.noneSku ||
                      this.store.setLockState({ isLocked: !1 }));
              },
              onOpened() {
                if (!this.isOpened) {
                  this.isOpened = !0;
                  try {
                    var { mark: e } = this.ctx.hummer;
                    e.end("goods-sku-order-popup"),
                      e.end("non-goods-sku-order-popup");
                  } catch (e) {}
                }
              },
              startAddressObserver() {
                setTimeout(() => {
                  this.observer && this.observer.disconnect(),
                    (this.observer = this.createIntersectionObserver()),
                    this.observer
                      .relativeTo(".sku-order-body", { top: -12, bottom: -12 })
                      .observe(".is-address-block-sticky", (e) => {
                        var { intersectionRatio: t } = e;
                        this.setAddressBlockFixed(0 === t);
                      });
                }, 500);
              },
              triggerSubmit: Object(k.a)(function (e) {
                return (
                  void 0 === e && (e = !1),
                  this.validate({ noToast: e })
                    .then((e) => {
                      var t,
                        s,
                        { skuData: i } = e,
                        { selectedSkuComb: u, selectedNum: r } = i;
                      r > u.stockNum && (i.selectedNum = u.stockNum),
                        this.store.triggerTradeSubmit({
                          tradeData: i,
                          activityName:
                            null == (t = this.event) ? void 0 : t.activityName,
                          pluginsResult:
                            null == (s = this.extraData)
                              ? void 0
                              : s.pluginsResult,
                        });
                    })
                    .catch(() => {
                      this.handleResetState();
                    })
                );
              }, 16),
              handleMessageChange(e) {
                this.onMessageChange(e);
              },
              handleMessageBlur() {
                this.show && this.isInited && this.triggerSubmit(!0);
              },
              disableBodyScroll() {},
              enableBodyScroll() {},
              onExtraDataChange(e) {
                (this.extraData = e), this.triggerSubmit(!0);
              },
            },
          },
          p = s("9ZMt");
        t.default = p.default.component(v);
      },
    }
  )
);
