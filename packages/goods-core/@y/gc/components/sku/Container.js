"use strict";
var r = require("~/r");
r(
  "/TU8",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "/TU8": function (e, t, s) {
      s.r(t);
      var i = s("Fcif"),
        u = s("42tT"),
        n = s("Bg0V"),
        r = s("fSlU"),
        a = s("gLTC"),
        o = {
          mixins: [u.a],
          props: {
            showRowSkeleton: { type: Boolean, default: !1 },
            show: { type: Boolean, default: !1 },
            showRowBlock: { type: Boolean, default: !0 },
            sku: { type: Object, default: () => ({}) },
            goods: { type: Object, default: () => ({}) },
            safeAreaInsetBottom: { type: Boolean, default: !0 },
            kdtId: Number,
            initialSku: { type: Object, default: () => ({}) },
            pointsConfig: { type: Object, default: () => ({}) },
            messageConfig: { type: Object, default: () => ({}) },
            multiSkuDecision: { type: Object, default: () => ({}) },
            skuConfig: { type: Object, default: () => ({}) },
            event: { type: Object, default: () => ({}) },
            extraData: { type: Object, default: () => ({}) },
            customStyle: { type: String, default: "" },
            baseConfig: { type: Object, default: () => ({}) },
            themeTag: { type: Object, default: () => ({ plain: !1 }) },
          },
          data: () => ({ showDatePicker: !1, skeletonInfo: {} }),
          mounted() {
            this.$emit("init");
          },
          destroyed() {
            this.clearSkuGlobalData && this.clearSkuGlobalData();
          },
          methods: {
            emitNumChange() {
              this.$emit("num-change", this.stepperOpt.selectedNum);
            },
            emitSelected() {
              var e;
              this.$emit("selected", {
                selectedSkuComb: this.selectedSkuComb,
                selectedSkuValues: this.selectedSkuValues,
                pluginsResult:
                  null == (e = this.extraData) ? void 0 : e.pluginsResult,
                headerOpt: this.headerOpt,
              });
            },
            emitPreview(e) {
              this.$emit("preview", e);
            },
            onVerLimit(e) {
              this.$emit("over-limit", e);
            },
            onDateTimeClick(e) {
              (this.pickerOpts = e), (this.showDatePicker = !0);
            },
            onSubmit(e) {
              var { birthdayInfo: t = {} } = this.sku;
              Object(r.a)(e, {
                sku: this.sku,
                goods: this.goods,
                multiSkuDecision: this.multiSkuDecision,
                selectedSkuComb: this.selectedSkuComb,
                skuTree: this.rowOpt.tree,
                selectedNum: this.stepperOpt.selectedNum,
                selectedSkuEntries: this.selectedSkuEntries,
                event: this.event,
                extraData: this.extraData,
                messageValues: this.messageValues,
                birthdayVal: Object(i.a)({}, this.birthdayVal, {
                  birthdayRelationNetOrderMark: !(
                    null == t || !t.customerRelation
                  ),
                }),
                isSkuCombSelected: this.isSkuCombSelected,
                selectedText: this.selectedText,
              }).then((e) => {
                var { eventName: t, data: s } = e;
                t &&
                  (this.birthdayVal &&
                    this.birthdayVal.key &&
                    Object(a.a)(Object(i.a)({}, this.birthdayVal, this.goods)),
                  this.$emit(t, s));
              });
            },
            onPickerCancel() {
              this.showDatePicker = !1;
            },
            onPickerConfirm(e) {
              var { type: t, index: s } = this.pickerOpts;
              "time" !== t && (e = Object(n.a)(new Date(e), t)),
                this.$refs.messages.onDateTimerPicker(s, {
                  detail: { value: e },
                }),
                this.onPickerCancel();
            },
            onUserAuthorizeShow(e) {
              this.$emit("user-authorize-show", e);
            },
          },
          ud: !0,
        },
        l = s("9ZMt");
      t.default = l.default.component(o);
    },
    "42tT": function (e, t, s) {
      var i = s("nKXO"),
        u = s.n(i),
        n = s("Fcif"),
        r = s("KEq0"),
        a = s.n(r),
        o = s("NHEX"),
        l = s.n(o),
        c = s("5Xe+"),
        d = s.n(c),
        m = s("Nvad");
      function k(e) {
        return function (t) {
          return Object.prototype.toString.call(t) === "[object " + e + "]";
        };
      }
      var h = {
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
              ((h.isPureObject(e) && h.isPureObject(t) && e.type !== t.type) ||
                (h.isString(e) && h.isString(t) && t !== e) ||
                (h.isString(t) && h.isPureObject(e) && t !== e.text) ||
                (h.isString(e) && h.isPureObject(t) && e !== t.text)) &&
                s.unshift(e);
            });
          }),
          s
        );
      }
      function v(e) {
        var { selectedSkuComb: t, sku: s, goods: i } = e,
          u = s.priceTags || s.tags || [],
          n = t || s,
          { priceTitle: r, notShowPriceTitle: a } = n,
          { priceTags: o = [] } = i || {};
        if (a) return [...o];
        var l = [];
        if (t && !t.noneSku) {
          if (Array.isArray(r)) l = [...S(u, r), ...r];
          else if (r) {
            l = [...S(u, [r]), r];
          } else l = u;
        } else l = u;
        return [...l, ...o];
      }
      var f = s("Tr24"),
        b = s("TtQZ"),
        p = s("dKdR"),
        g = s("cJj0");
      function y(e, t) {
        var s = (function (e, t) {
            var s = (null == e ? void 0 : e.limit) || {},
              { quotaCycle: i, startSaleNum: u } = s,
              { buyWayText: r, showPeriodText: a } = e;
            return Object(n.a)({}, s, {
              quotaPeriod: i || 0,
              startSaleNum: u || 1,
              buyWayText: r,
              showPeriodText: a,
              quota: t,
            });
          })(e, t),
          i = Object(p.b)(s),
          { hideQuotaText: u } = e;
        return u ? "" : i || "";
      }
      function x(e, t) {
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
          n = (function (e, t) {
            return t ? 0 : (null == e ? void 0 : e.quotaUsed) || 0;
          })(s, i),
          r = y(e, u),
          { stepperLimit: a, limitType: o } = (function (e, t, s) {
            var i = e - t,
              u = (function (e, t, s) {
                return e > 0 && e - t <= s;
              })(e, t, s);
            return {
              stepperLimit: u ? Math.max(0, i) : s,
              limitType: u ? g.b.QUOTA_LIMIT : g.b.STOCK_LIMIT,
            };
          })(u, n, t);
        return {
          quotaText: r,
          quota: u,
          quotaUsed: n,
          stepperLimit: a,
          limitType: o,
        };
      }
      var O = s("9ZMt"),
        T = s("tS13"),
        F = s("gBZH");
      function C(e, t, s) {
        var {
          authTypeList: i,
          authScene: u,
          accountUnionScene: n,
          skuScene: r,
        } = e;
        return t || (i || []).length > 0 || s ? "" : u || n || "";
      }
      function D(e, t, s) {
        return t ? [] : s ? ["mobile"] : e.authTypeList || [];
      }
      function j(e, t, s) {
        var { skuScene: i } = s,
          u = (null == e ? void 0 : e.isHaitao) && i !== T.c.ADD_CART,
          n = (function (e, t) {
            if ("qq" !== O.default.getEnv()) return !1;
            var { noNeedUnionScene: s } = e;
            if (void 0 !== s) return s;
            var { accountUnionScene: i } = t;
            return [F.a.ADD_CART, F.a.NORMAL_BUY].includes(i);
          })(t, s);
        return { authScene: C(s, n, u), authTypeList: D(s, n, u) };
      }
      function _(e, t, s) {
        var i = !Object(b.g)(null == t ? void 0 : t.tree),
          { picture: u } = e,
          {
            currentImage: n,
            selectedText: r,
            selectedSkuComb: o,
            pointsConfig: c,
            extraData: { view: k },
          } = s,
          { pricePrefix: h, priceSymbol: S = "￥", hideStock: f } = t,
          { showPrice: p, showOldPrice: g } = (function (e) {
            var { sku: t, selectedSkuComb: s, pointsConfig: i, view: u } = e,
              n = d()(t, [
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
                price: r,
                oldPrice: a,
                pointsPriceText: o,
                pointsPrice: l,
              } = s;
              n = { price: r, oldPrice: a, pointsPriceText: o, pointsPrice: l };
            }
            var { price: c = -1, showPriceRange: k } = u || {};
            return (
              -1 === c || k || Object.assign(n, u),
              Object(m.a)(n, null == i ? void 0 : i.name)
            );
          })({ sku: t, selectedSkuComb: o, pointsConfig: c, view: k }),
          y = l()(t, "stockUnit", "件"),
          x = l()(t, "stockThreshold", 50),
          O = o ? (null == o ? void 0 : o.stockNum) : t.stockNum;
        return {
          showImage: i,
          pricePrefix: h,
          priceSymbol: S,
          price: Object(m.b)(p),
          oldPrice: Object(m.b)(g),
          stockThreshold: x,
          stockNum: O,
          stockUnit: y,
          selectedText: r,
          hideStock:
            (null == k ? void 0 : k.hideStock) ||
            (null == o ? void 0 : o.hideStock) ||
            f,
          headerImage: a()(n || u, "small"),
          tags:
            (null == k ? void 0 : k.tags) ||
            v({ goods: e, sku: t, selectedSkuComb: o }),
          skuBannerData: null == k ? void 0 : k.skuBannerData,
        };
      }
      function N(e, t) {
        var { kdtId: s, skuConfig: i, event: u, selectedSkuComb: r } = t,
          { authAllowDeny: a, skuScene: o } = u,
          { stockRemindStatus: l, showStockLackReminder: c } = e,
          { authScene: m, authTypeList: k } = j(e, i, u);
        return {
          buttons: ((e) => {
            var {
                skuScene: t,
                buyText: s,
                addCartText: i,
                previewText: u,
                disableText: r,
                customBtnText: a,
                customBtnStyle: o,
                isCustomBtnDisabled: l,
                noNeedUnionScene: c,
                auth: d,
                selectedSkuComb: m,
                stockRemindStatus: k,
                showStockLackReminder: h,
              } = e,
              S = [],
              v = { noNeedUnionScene: c, auth: d, disable: !1 },
              f = Object(n.a)(
                {
                  primary: !0,
                  submitAction: T.d.TRADE_SUBMIT,
                  skuScene: T.c.BUY,
                  text: s || "立即购买",
                },
                v
              ),
              b = Object(n.a)(
                {
                  primary: !1,
                  submitAction: T.d.TRADE_SUBMIT,
                  skuScene: T.c.ADD_CART,
                  text: i || "加入购物车",
                },
                v
              );
            switch (
              (h &&
                0 === (null == m ? void 0 : m.stockNum) &&
                (t = T.c.SUBSCRIBE),
              t)
            ) {
              case T.c.ADD_CART:
                S = [b];
                break;
              case T.c.SEL_SKU:
                S = [b, f];
                break;
              case T.c.BUY:
                (f.text = s || "下一步"), (S = [f]);
                break;
              case T.c.DISABLE:
                (f.text = r || "此商品限制购买"),
                  (f.submitAction = T.d.BREAK),
                  (f.skuScene = T.c.CUSTOM),
                  (f.disable = !0),
                  (S = [f]);
                break;
              case T.c.PREVIEW_SKU:
                (f.text = u || "我知道了"),
                  (f.submitAction = T.d.BREAK),
                  (f.skuScene = T.c.CUSTOM),
                  (f.disable = !0),
                  (S = [f]);
                break;
              case T.c.SUBSCRIBE:
                var { id: p } = m,
                  g = k[p],
                  y = g ? "已提醒补货" : "缺货中，提醒商家补货";
                (f.text = y),
                  (f.submitAction = T.d.SUBSCRIBE),
                  (f.skuScene = T.c.SUBSCRIBE),
                  (f.disable = g),
                  (S = [f]);
                break;
              case T.c.CUSTOM:
                (f.text = a || "我知道了"),
                  (f.submitAction = T.d.CUSTOM),
                  (f.skuScene = T.c.CUSTOM),
                  (f.disable = l),
                  (f.customBtnStyle = o),
                  (S = [f]);
            }
            return S;
          })(
            Object(n.a)(
              {
                skuScene: o,
                auth: {
                  authStyle: g.a,
                  authTypeList: k,
                  authScene: m,
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
                stockRemindStatus: l,
                showStockLackReminder: c,
                selectedSkuComb: r,
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
                        (e) => ["date", "time", "datetime"].indexOf(e.type) > -1
                      ),
                  };
                })(this.sku, this.messageConfig)),
                (this.skeletonInfo =
                  ((t = this.sku),
                  (s = null == t ? void 0 : t.tree.length),
                  {
                    class:
                      "sku-row-skeleton--" +
                      ((i = Object(b.g)(null == t ? void 0 : t.tree))
                        ? NaN
                        : "normal"),
                    height: 89 * (s - 1) + (i ? 213 : 89) + "px",
                  })),
                (this.rowOpt = (function (e, t, s) {
                  var {
                      multiSkuDecision: i,
                      skuScene: u,
                      selected: n,
                      skuValue: r,
                    } = s,
                    {
                      tree: a,
                      list: o,
                      isShowOldPrice: l = !1,
                      activityInfo: c,
                      disableSoldoutSku: d = !0,
                    } = e,
                    { activityType: m } = c || {},
                    k = Object(f.a)({
                      tree: a,
                      multiSkuDecision: i,
                      list: o,
                      isShowOldPrice: l,
                      skuScene: u,
                      goods: t,
                      activityType: m,
                    });
                  return {
                    show: !(null == k || !k.length),
                    tree: k,
                    skuList: o,
                    disableSoldoutSku: d,
                    selectedSku: n,
                    multiSkuDecision: i,
                    skuScene: u,
                    activityType: m,
                    isShowOldPrice: l,
                  };
                })(this.sku, this.goods, {
                  multiSkuDecision: this.multiSkuDecision || {},
                  skuScene: null == (e = this.event) ? void 0 : e.skuScene,
                  selected: this.selected,
                  skuValue: this.skuValue,
                }));
              var n = Object(b.a)(this.sku, this.initialSku, this.selected);
              if (
                JSON.stringify(n) !== JSON.stringify(this.selected) ||
                this.sku.noneSku
              )
                return (this.selected = n), void this.onSelect({});
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
                    initialSku: n,
                    extraData: { view: r },
                    selectedSkuComb: a,
                    reset: o,
                  } = e,
                  { selectedNum: l } = n || {},
                  c =
                    (null == u || null == (t = u.limit)
                      ? void 0
                      : t.startSaleNum) || 1,
                  d =
                    (null == u || null == (s = u.limit)
                      ? void 0
                      : s.quotaCycle) || 0,
                  m = null != l ? l : c,
                  k = c < 1 ? 1 : c,
                  h = a ? (null == a ? void 0 : a.stockNum) : u.stockNum,
                  S = (null == r ? void 0 : r.stockNum) || h,
                  {
                    quotaText: v,
                    stepperLimit: f,
                    limitType: b,
                    quota: p,
                    quotaUsed: g,
                  } = x(u, S);
                return {
                  show: !0,
                  showTitle: !0,
                  showQuotaText: !0,
                  selectedNum: o ? m : i || m,
                  stepperMinLimit: k,
                  stepperLimit: f,
                  limitType: b,
                  quotaText: v,
                  startSaleNum: c,
                  quota: p,
                  quotaUsed: g,
                  customOverLimit: !0,
                  disableStepperInput: u.disableStepperInput,
                  stepperTitle:
                    (null == r ? void 0 : r.stepperTitle) || u.stepperTitle,
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
                (null == (t = this.baseConfig) ? void 0 : t.isShowSkuStepper) &&
                (this.stepperOpt.show = this.baseConfig.isShowSkuStepper);
          },
          updateSelectedText() {
            this.selectedText = (function (e) {
              var {
                  selectTextExtra: t,
                  selectedSkuValues: s,
                  selectedSkuComb: i,
                  selected: u,
                  sku: n,
                  extraData: { view: r },
                } = e,
                { selectValueList: a = [], unSelectNameList: o = [] } =
                  (null == r ? void 0 : r.selectTextExtra) || {},
                l = [...t.selectValueList, ...a],
                c = [...t.unSelectNameList, ...o];
              if (i && !c.length) {
                var d = [...s.map((e) => e.name || ""), ...l];
                return d.length ? "已选 " + d.join(" ") : "";
              }
              var m = ((null == n ? void 0 : n.tree) || [])
                .filter((e) => !u[e.kS])
                .map((e) => e.k)
                .concat(c);
              return m.length ? "请选择 " + m.join(" ") : "";
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
                isSkuCombSelected: n,
                selectedSkuComb: r,
                selectedSkuValues: a,
              } = Object(I.c)(e, {
                selected: this.selected,
                goods: this.goods,
                sku: this.sku,
              });
            (this.skuValue = e),
              (this.selected = s),
              i && (this.currentImage = i),
              (this.selectedSkuComb = r),
              (this.selectedSkuEntries = u),
              (this.isSkuCombSelected = n),
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
            O.default.setGlobal("_goodsCommonSkuList", []);
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
            O.default.setGlobal("_goodsCommonSkuList", t);
          },
        },
      };
    },
    "6us3": function (e, t, s) {
      s.d(t, "a", function () {
        return u;
      }),
        s.d(t, "b", function () {
          return n;
        });
      var i = s("Fcif");
      function u(e) {
        return (e || []).map((e) => {
          var t,
            { v: s } = e;
          if (e.largeImageMode) {
            var u = [],
              n = [];
            e.v.forEach((e, t) => {
              (Math.floor(t / 3) % 2 == 0 ? u : n).push(e);
            }),
              (s = [...u, ...n]),
              (t = u.length);
          }
          return Object(i.a)({}, e, { v: s, topLength: t });
        });
      }
      function n(e, t) {
        var s = (function (e) {
          var t = [],
            s = function (e) {
              var { v: s, kS: u, kId: n } = e;
              s &&
                s.forEach((e) => {
                  (e.previewImgUrl || e.imgUrl) &&
                    t.push(Object(i.a)({}, e, { ks: u, kId: n }));
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
          return l;
        }),
        s.d(t, "c", function () {
          return c;
        });
      var i = s("Fcif"),
        u = s("5Xe+"),
        n = s.n(u),
        r = s("TtQZ"),
        a = s("Bg0V");
      function o(e) {
        var { isSkuCombSelected: t, sku: s, selectedSkuEntries: u } = e;
        return t
          ? null != s && s.noneSku
            ? Object(i.a)(
                {},
                n()(s, ["price", "stockNum", "pointsPrice", "noneSku"]),
                { id: s.collectionId }
              )
            : Object(r.e)(s.list, u)
          : null;
      }
      function l(e, t) {
        var {
            couponId: s,
            pluginsResult: u,
            module: n,
            activityName: a,
            tradeData: o,
            alias: l,
          } = e,
          { selectedSkuEntries: c, skuTree: d } = t || {},
          m = Object(r.b)(c, d);
        return {
          submitAction: null == e ? void 0 : e.submitAction,
          skuScene: null == e ? void 0 : e.skuScene,
          activityName: a,
          skuData: o,
          alias: l,
          couponId: s,
          pluginsResult: u,
          module: n,
          extraParams: Object(i.a)({}, e, { skuNameForLog: m }),
        };
      }
      function c(e) {
        var {
            btn: t,
            sku: s,
            goods: i,
            selectedSkuComb: u,
            skuTree: n,
            selectedNum: r,
            selectedSkuEntries: o,
            event: c,
            extraData: d,
            messageValues: m,
            birthdayVal: k,
          } = e,
          h = c.submitAction || t.submitAction,
          S = t.skuScene || c.skuScene;
        return l(
          {
            couponId: s.couponId,
            pluginsResult: null == d ? void 0 : d.pluginsResult,
            module: null == c ? void 0 : c.module,
            activityName: null == c ? void 0 : c.activityName,
            submitAction: h,
            skuScene: S,
            alias: i.alias,
            tradeData: {
              goodsId: i.id,
              selectedSkuComb: u,
              messages: Object(a.c)(m),
              birthdayVal: k,
              selectedNum: r || 1,
              cartMessages: Object(a.b)(m, s.messages),
            },
          },
          { skuTree: n, selectedSkuEntries: o }
        );
      }
    },
    Bg0V: function (e, t, s) {
      s.d(t, "a", function () {
        return n;
      }),
        s.d(t, "c", function () {
          return r;
        }),
        s.d(t, "b", function () {
          return a;
        });
      var i = s("JijB"),
        u = s.n(i);
      function n(e, t) {
        return (
          void 0 === t && (t = "date"),
          e
            ? "datetime" === t
              ? u()(e, "YYYY-MM-DD HH:mm")
              : u()(e, "YYYY-MM-DD")
            : ""
        );
      }
      function r(e) {
        return e.reduce((e, t, s) => ((e["message_" + s] = t.value), e), {});
      }
      function a(e, t) {
        return e.reduce((e, s, i) => (t[i] && (e[t[i].name] = s.value), e), {});
      }
    },
    Tr24: function (e, t, s) {
      s.d(t, "b", function () {
        return u;
      }),
        s.d(t, "a", function () {
          return n;
        });
      s("Fcif"), s("gLTC"), s("lCVF");
      var i = s("6us3");
      var u = (e, t) => {
        var s = null == e ? void 0 : e.length,
          { s1NoAffectPrice: i, s2NoAffectPrice: u } = t;
        return 1 === s ? !i : 2 === s ? (i && !u) || (!i && u) : void 0;
      };
      function n(e) {
        var { tree: t = [], multiSkuDecision: s, skuScene: u } = e;
        return Object(i.a)(t);
      }
    },
    TtQZ: function (e, t, s) {
      s.d(t, "g", function () {
        return r;
      }),
        s.d(t, "e", function () {
          return a;
        }),
        s.d(t, "d", function () {
          return o;
        }),
        s.d(t, "h", function () {
          return l;
        }),
        s.d(t, "b", function () {
          return c;
        }),
        s.d(t, "c", function () {
          return d;
        }),
        s.d(t, "f", function () {
          return m;
        }),
        s.d(t, "a", function () {
          return k;
        });
      var i = s("Fcif"),
        u = s("xers"),
        n = s.n(u);
      function r(e) {
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
              var n = e.find((e) => e.kS === s);
              if (n && n.v) {
                var r = n.v.find((e) => e.id === +i[u]);
                r && ((r.skuKeyStr = n.kS), t.push(r));
              }
            }
            return t;
          }, []);
        },
        l = (e, t, s) => {
          if (0 === e.length) return !1;
          var { key: u, valueId: n } = s,
            r = Object(i.a)({}, t, { [u]: n }),
            a = Object.keys(r).filter((e) => "" !== r[e]),
            o = e.filter((e) => a.every((t) => String(r[t]) === String(e[t]))),
            l = o.reduce((e, t) => (e += t.stockNum), 0),
            c = o.some((e) => !0 !== e.customDisableSell);
          return l > 0 && c;
        },
        c = (e, t) =>
          ((null == e ? void 0 : e.keys) || []).map((s, i) => {
            var u = t.find((e) => e.kS === s),
              n = u.v.find((t) => t.id === e.values[i]);
            return {
              k_s: s,
              k: u.k,
              k_id: u.kId,
              v: null == n ? void 0 : n.name,
              v_id: null == n ? void 0 : n.id,
            };
          });
      function d(e) {
        return { keys: Object.keys(e), values: Object.values(e) };
      }
      function m(e) {
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
        if ((void 0 === t && (t = {}), s && !n()(s))) return s;
        var i = {};
        return (
          e.tree.forEach((s) => {
            for (var u = s.kS, n = 0, r = 0; r < s.v.length; r++) {
              var a = s.v[r].id;
              if (
                (l(e.list, i, { key: u, valueId: a }) && ((i[u] = a), (n += 1)),
                n > 1)
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
        n = function (e, t) {
          return void 0 === t
            ? e
            : "object" != typeof e || null === e
            ? t
            : (0, u.default)(e)
            ? ((s = i.__spreadArray([], e, !0)),
              "object" == typeof t &&
                Object.keys(t).forEach(function (e) {
                  s[e] = n(s[e], t[e]);
                }),
              s)
            : "object" != typeof t || null === t
            ? i.__assign(i.__assign({}, e), t)
            : ((s = i.__assign({}, e)),
              i
                .__spreadArray([], Object.keys(s).concat(Object.keys(t)), !0)
                .reduce(function (e, u) {
                  var r;
                  return i.__assign(
                    i.__assign({}, e),
                    (((r = {})[u] = n(s[u], t[u])), r)
                  );
                }, {}));
          var s;
        };
      t.default = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
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
            : n(e, t);
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
          return l;
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
      var n = { 0: "", 1: "每天", 2: "每周", 3: "每月", 4: "每单" };
      function r(e) {
        var { buyWayText: t = "购买" } = e;
        return t && "string" == typeof t ? [t.slice(0, 1), t] : ["购", "购买"];
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
            hideQuotaText: l = !1,
          } = e,
          c = [];
        o > 1 && c.push("" + o + u + "起售");
        var d = a(e),
          [m] = r(e),
          k = !l && n[i] ? n[i] : "";
        return (
          d > 0 && t - s >= d
            ? c.push("一次限" + m + d + u)
            : t > 0 && c.push(k + "限" + m + t + u),
          c.join("，")
        );
      }
      function l(e) {
        var {
          quota: t = 0,
          quotaUsed: s = 0,
          quotaCycle: u = 0,
          quotaUnit: o = "件",
          startSaleNum: l = 1,
          hideQuotaText: c = !1,
          limitType: d,
          action: m,
        } = e;
        if ("minus" === m)
          return l > 1
            ? "该商品" + l + o + "起售哦"
            : "至少选择一" + o + "商品";
        var k = a(e),
          [h, S] = r(e),
          v = (!c && n[u]) || "";
        if ("plus" === m) {
          if (0 === d) {
            if (k > 0 && t - s >= k) return "一次最多能" + S + k + o;
            var f =
              "该商品" + (u === i.order ? "" : "每人") + v + "限" + h + t + o;
            return s > 0 && (f += "，\n你之前已" + S + "了" + s + o + "。"), f;
          }
          return "该商品库存不足";
        }
        return "";
      }
    },
    fSlU: function (e, t, s) {
      s.d(t, "c", function () {
        return h;
      }),
        s.d(t, "b", function () {
          return S;
        }),
        s.d(t, "d", function () {
          return v;
        }),
        s.d(t, "e", function () {
          return f;
        }),
        s.d(t, "a", function () {
          return b;
        });
      var i = s("Fcif"),
        u = s("882d"),
        n = s("tS13"),
        r = s("AGZf"),
        a = s("6us3"),
        o = s("TtQZ"),
        l = s("9Eee"),
        c = s("gLTC");
      function d(e) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
          e
        );
      }
      function m(e) {
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
          messageValues: n,
          birthdayVal: r,
          messages: a,
          selectedNum: o,
          extraData: l,
        } = t;
        return new Promise((t, r) => {
          var c = { validate: !0, errorMsg: "" };
          if (
            (0 === o
              ? (c.errorMsg = "商品已经无法购买啦")
              : s
              ? s &&
                (c.errorMsg = (function (e) {
                  for (
                    var { messageValues: t, messages: s } = e, i = 0;
                    i < s.length;
                    i++
                  ) {
                    var { value: u = "" } = t[i] || {},
                      n = s[i];
                    if ("" === u) {
                      if (1 == +n.required)
                        return ("image" === n.type ? "上传" : "填写") + n.name;
                    } else {
                      if ("tel" === n.type && !/^\d+(\.\d+)?$/.test(u))
                        return "请填写正确的数字格式留言";
                      if ("mobile" === n.type && !m(u))
                        return "请输入正确的手机号";
                      if ("email" === n.type && !d(u))
                        return "请填写正确的邮箱";
                      if (
                        "id_no" === n.type &&
                        (u.length < 15 || u.length > 18)
                      )
                        return "请填写正确的身份证号码";
                    }
                  }
                })({ messageValues: n, messages: a }))
              : (c.errorMsg = u),
            c.errorMsg)
          )
            return (c.validate = !1), r(c);
          var k = Object.values((null == l ? void 0 : l.invalidMessage) || {});
          return k.length
            ? ((c.validate = !1), (c.errorMsg = k[0]), r(c))
            : t(
                Object(i.a)({}, e, {
                  pluginsResult: null == l ? void 0 : l.pluginsResult,
                })
              );
        });
      }
      function h(e, t) {
        var { selected: s, goods: u, sku: n } = t,
          { skuKeyStr: r, id: a, imgUrl: c, defaultSkuImg: d } = e,
          m = "";
        c && (m = d ? u.picture + "#" + a : c);
        var k = r ? Object(i.a)({}, s, { [r]: +s[r] === a ? "" : a }) : s,
          h = Object(o.c)(k),
          S = Object(o.f)({ sku: n, selectedSkuEntries: h }),
          v = Object(l.b)({
            isSkuCombSelected: S,
            sku: n,
            selectedSkuEntries: h,
          }),
          f = Object(o.d)(n.tree, h);
        if (!Object.keys(e).length) {
          var b = f.find((e) => !!e.imgUrl);
          b && !b.defaultSkuImg && (m = b.imgUrl);
        }
        return {
          selected: k,
          currentImage: m,
          selectedSkuEntries: h,
          isSkuCombSelected: S,
          selectedSkuComb: v,
          selectedSkuValues: f,
        };
      }
      function S(e, t) {
        var { goods: s, sku: i, currentImage: n } = t,
          { type: r, id: o } = e,
          l = {},
          { imageList: c, imageUrls: d } = Object(a.b)(i, s),
          { previewOnClickImage: m = !0 } = i;
        if ("header" === r) {
          var k = [s.picture, ...d],
            h = n || s.picture;
          (l.current = k.findIndex((e) => e === h)), (l.urls = k);
        } else (l.urls = [...d]), (l.current = c.findIndex((e) => e.id === o));
        if (!m) return (l.imageList = c), l;
        (l.zIndex = 5001), Object(u.d)(l);
      }
      function v(e, t) {
        var {
          selectedNum: s,
          goods: i,
          selectedSkuComb: u,
          sku: n,
          selectedSkuValues: r,
        } = t;
        Object(c.d)(
          s,
          e,
          i,
          (null == u ? void 0 : u.skuId) ||
            (null == n ? void 0 : n.collectionId),
          { selectedSkuValues: r, skuTree: n.tree }
        );
      }
      function f(e, t) {
        var {
            btn: s,
            sku: i,
            goods: u,
            selectedSkuComb: n,
            skuTree: a,
            selectedNum: o,
            selectedSkuEntries: c,
            event: d,
            extraData: m,
            messageValues: h,
            birthdayVal: S,
            isSkuCombSelected: v,
            selectedText: f,
            noToast: b = !1,
          } = e,
          p =
            t ||
            Object(l.c)({
              btn: s,
              sku: i,
              goods: u,
              selectedSkuComb: n,
              skuTree: a,
              selectedNum: o,
              selectedSkuEntries: c,
              event: d,
              extraData: m,
              messageValues: h,
              birthdayVal: S,
            }),
          { submitAction: g, skuScene: y } = p;
        return k(
          { submitAction: g, skuScene: y },
          {
            selectedNum: o,
            extraData: m,
            isSkuCombSelected: v,
            selectedText: f,
            messageValues: h,
            birthdayVal: S,
            messages: (null == i ? void 0 : i.messages) || [],
          }
        )
          .then(() => Promise.resolve(p))
          .catch((e) => {
            var { validate: t, errorMsg: s } = e;
            return (
              !t &&
                s &&
                (r.a.clear(), !b && Object(r.a)({ message: s, zIndex: 99999 })),
              Promise.reject({ validate: t, errorMsg: s })
            );
          });
      }
      function b(e, t) {
        var {
          sku: s,
          goods: i,
          multiSkuDecision: u,
          selectedSkuComb: r,
          skuTree: a,
          selectedNum: o,
          selectedSkuEntries: d,
          event: m,
          extraData: k,
          messageValues: h,
          birthdayVal: S,
          isSkuCombSelected: v,
          selectedText: b,
        } = t;
        Object(c.b)(e, {
          sku: s,
          goods: i,
          multiSkuDecision: u,
          selectedSkuComb: r,
          skuTree: a,
          selectedNum: o,
          selectedSkuEntries: d,
          event: m,
        });
        var p = m.submitAction || e.submitAction;
        if (p === n.d.CUSTOM) return Promise.resolve({ eventName: "custom" });
        if (p === n.d.BREAK) return Promise.reject("break");
        var g = Object(l.c)({
          btn: e,
          sku: s,
          goods: i,
          selectedSkuComb: r,
          skuTree: a,
          selectedNum: o,
          selectedSkuEntries: d,
          event: m,
          extraData: k,
          messageValues: h,
          birthdayVal: S,
        });
        return p === n.d.SUBSCRIBE
          ? Promise.resolve({ eventName: "submit", data: g })
          : f(
              {
                btn: e,
                sku: s,
                goods: i,
                selectedSkuComb: r,
                skuTree: a,
                selectedNum: o,
                selectedSkuEntries: d,
                event: m,
                extraData: k,
                messageValues: h,
                birthdayVal: S,
                isSkuCombSelected: v,
                selectedText: b,
              },
              g
            ).then(() => Promise.resolve({ eventName: "submit", data: g }));
      }
    },
    gLTC: function (e, t, s) {
      s.d(t, "e", function () {
        return c;
      }),
        s.d(t, "c", function () {
          return d;
        }),
        s.d(t, "f", function () {
          return m;
        }),
        s.d(t, "d", function () {
          return k;
        }),
        s.d(t, "b", function () {
          return h;
        }),
        s.d(t, "a", function () {
          return S;
        });
      var i = s("Fcif"),
        u = s("ONqW"),
        n = s("tS13"),
        r = s("gBZH"),
        a = s("Tr24"),
        o = s("TtQZ"),
        l = Object(u.a)();
      function c(e) {
        l.log({
          et: "view",
          ei: "show_price",
          en: "价格标签曝光",
          params: Object(i.a)({}, e, { component: "sku" }),
        });
      }
      function d(e) {
        l.log({
          et: "click",
          ei: "click_price",
          en: "价格标签点击",
          params: Object(i.a)({}, e, { component: "sku" }),
        });
      }
      function m(e, t) {
        l.log({
          et: "view",
          ei: "show_low_stock",
          en: "库存紧张标签曝光",
          params: Object(i.a)({}, e, { sku_type: t, component: "sku" }),
        });
      }
      function k(e, t, s, u, n) {
        var r,
          { id: a, title: o } = s,
          { selectedSkuValues: c, skuTree: d } = n,
          m = {
            num: t,
            goods_id: a,
            goods_name: o,
            sku_id: u,
            sku_name: (c || []).map((e) => {
              var t = d.find((t) => t.v.some((t) => t.id === e.id));
              return { k: t.k, k_id: t.kId, k_s: t.kS, v: e.name, v_id: e.id };
            }),
          };
        e < t
          ? ((r = m),
            l.log({
              et: "click",
              ei: "goods_detail_increase_goods_num",
              en: "商详增加商品数量",
              params: Object(i.a)({}, r),
            }))
          : e > t &&
            (function (e) {
              l.log({
                et: "click",
                ei: "goods_detail_decrease_goods_num",
                en: "商详减少商品数量",
                params: Object(i.a)({}, e),
              });
            })(m);
      }
      function h(e, t) {
        var {
            sku: s,
            goods: u,
            multiSkuDecision: c,
            selectedSkuComb: d,
            skuTree: m,
            selectedNum: k,
            selectedSkuEntries: h,
            event: S,
          } = t,
          v = (function (e, t, s) {
            var {
                multiSkuDecision: u,
                selectedSkuComb: n,
                skuTree: r,
                selectedNum: l,
                selectedSkuEntries: c,
                event: d,
              } = s,
              m = {
                goods_id: null == t ? void 0 : t.id,
                goods_name: null == t ? void 0 : t.title,
                goods_num: l,
                sku_id:
                  (null == n ? void 0 : n.id) ||
                  (null == n ? void 0 : n.skuId) ||
                  "",
                sku_name: [],
                activity_name: d.activityName,
              };
            if (e.noneSku) return m;
            var { hotSku: k, stockHotSku: h, skuDifferentialPrice: S } = u,
              v = 2,
              f = 2,
              b = 2;
            if (k) v = +k.s1 == +(null == n ? void 0 : n.s1) ? 0 : 1;
            else if (h) {
              var p,
                g = null == (p = r[r.length - 1]) ? void 0 : p.kS;
              f = +h[g] == +(null == n ? void 0 : n[g]) ? 0 : 1;
            }
            return (
              S &&
                (Object(a.b)(r, u)
                  ? (b = 0)
                  : r.find((e) => e.isShowPrice) && (b = 1)),
              Object(i.a)({}, m, {
                isshow_hot: v,
                isshow_low: f,
                is_show: b,
                sku_name: Object(o.b)(c, r),
              })
            );
          })(s, u, {
            multiSkuDecision: c,
            selectedSkuComb: d,
            skuTree: m,
            selectedNum: k,
            selectedSkuEntries: h,
            event: S,
          }),
          { skuScene: f, auth: b } = e;
        if (f && v) {
          var p,
            g = {
              et: "click",
              params: Object(i.a)({}, v, { component: "sku" }),
            };
          f === n.c.BUY
            ? (g = Object(i.a)({}, g, {
                ei: "click_order",
                en: "点击确认下单",
              }))
            : f === n.c.ADD_CART &&
              (g = Object(i.a)({}, g, { ei: "click_add", en: "点击确认加购" })),
            l.log(g),
            b &&
              b.authScene === r.a.POINTS_BUY &&
              ((p = v),
              l.log({
                et: "click",
                ei: "exchange_goods_by_score",
                en: "积分兑换商品",
                params: Object(i.a)({}, p),
              }));
        }
      }
      function S(e) {
        l.log({
          et: "custom",
          ei: "birthday_relation_net_msg",
          en: "生日关系网祝福语",
          params: Object(i.a)({}, e),
        });
      }
    },
  })
);
