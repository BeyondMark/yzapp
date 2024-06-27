"use strict";
var r = require("~/r");
r(
  "/MOJ",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/+Uc": function (e, t, a) {
        a.d(t, "b", function () {
          return o;
        }),
          a.d(t, "a", function () {
            return n;
          });
        var r = a("US/N"),
          s = a("Uol7");
        var i = null;
        function o() {
          return null == i
            ? Object(r.requestUseCdn)({
                origin: "cashier",
                withCredentials: !0,
                method: "GET",
                path: "/wsctrade/uic/address/getAllRegion.json",
                data: { showOversea: !0 },
                config: s.a,
              }).then(function (e) {
                return (i = e), e;
              })
            : Promise.resolve(i);
        }
        function n(e) {
          return (
            (e = String(e)),
            o().then(function (t) {
              var a = t.county_list,
                r = t.city_list,
                s = t.province_list[1e4 * Math.floor(e / 1e4)] || "",
                i = r[100 * Math.floor(e / 100)] || "",
                o = a[e] || "";
              return "9" === e[0]
                ? { country: i, province: o, areaCode: e }
                : { province: s, city: i, county: o, areaCode: e };
            })
          );
        }
      },
      "/MOJ": function (e, t, a) {
        a.r(t);
        var r = a("eijD"),
          s = a("Fcif"),
          i = a("9ZMt"),
          o = a("AGZf"),
          n = a("lgMb"),
          d = a("GFyo"),
          l = a("Sipi"),
          c = a("YeA1"),
          h = a("A4CD"),
          u = (a("2bgu"), a("/+Uc")),
          f = a("4kmb"),
          g = a("cO2P"),
          v = a("fiSk"),
          b = a("4GQ0"),
          m = a("UlHH"),
          p = a("B3iA"),
          A = a("RyxV"),
          y = a("Jcb6"),
          S = a("0Uhl"),
          D = a("YehF"),
          w = (a("rN0V"), ["false", "0"]),
          O = i.default.getApp(),
          j = {
            data: () => ({
              form: {},
              map: {},
              errorInfo: { areaCode: !1 },
              errorInfoMsg: {
                userName: "",
                areaCode: "",
                tel: "",
                addressDetail: "",
                houseNumber: "",
              },
              showAnalyzePopup: !1,
              isSaving: !1,
              areaList: {},
              forcePoiSelect: !1,
              isDeleting: !1,
              showArea: !1,
              areaLoading: !1,
              themeColors: {},
              themeCSS: "",
              parseAddress: () => Promise.reject(),
              showMarkerLabel: !0,
              canUseNav: !1,
              navBarInfo: {
                titleText: "",
                height: 0,
                paddingTop: 0,
                fontSizeSetting: 0,
                textWidth: 0,
                customIconStyle: "",
              },
              prevTitle: "",
              titleText: "",
              dataLoaded: !1,
              wechatAuthed: !1,
              aliAuthed: !1,
              qqAuthed: !1,
              isRetailWeapp: !1,
              isShowRetailDeliveryAddress: !1,
              fieldStyle: "line-height: 36px;align-items: center;",
              isRetailAdd: null,
              isCityForcePoiSelect: !1,
              isShowAnalyzeConfirmeDialog: !1,
              analyzeAddress: {},
              isAutoWxAnalyze: !0,
              isHiddenWxAnalyzeToast: !0,
            }),
            computed: {
              areaValue() {
                var { form: e } = this;
                return Object(h.b)(e.country, e.province, e.city, e.county);
              },
              areaPlaceholder: () => "选择省 / 市 / 区",
              addressLabelPlaceholder() {
                return this.isShowRetailDeliveryAddress
                  ? "选择收货地址"
                  : "请填写详细地址";
              },
              showPoiTips() {
                var {
                    forcePoiSelect: e,
                    form: t = {},
                    isShowRetailDeliveryAddress: a,
                    isRetailWeapp: r,
                  } = this,
                  s = e && !t.downgrade && 2 !== t.type;
                return r && a ? t.addressDetail && s : s;
              },
              poiTipsText() {
                return this.isShowRetailDeliveryAddress
                  ? "为了提高配送准确性，请点击补充地点信息"
                  : "点击定位进行地图选点，提高配送准确性";
              },
              showAreaField() {
                var {
                  isShowRetailDeliveryAddress: e,
                  form: { downgrade: t = !1 } = {},
                } = this;
                return !e || (e && t);
              },
              addressDetail() {
                var { isShowRetailDeliveryAddress: e, form: t } = this,
                  {
                    province: a = "",
                    city: r = "",
                    county: s = "",
                    addressDetail: i = "",
                  } = t || {},
                  o = [a, r, s, i].join("");
                return e ? o : i;
              },
              isShowPasteAddressDivider() {
                this.wechatAuthed;
                return !this.isCityForcePoiSelect;
              },
            },
            watch: {
              isShowAnalyzeConfirmeDialog(e) {
                this.triggerMarkerLabel(!e);
              },
            },
            created() {
              Object(c.b)(this, [
                "themeColors",
                "themeCSS",
                "isDirectPushRoute",
              ]),
                (this.parseAddress = g.a),
                (this.ADDRESS_TYPE = f.ADDRESS_TYPE);
              var { shopMetaInfo: e = {} } = O.getShopInfoSync() || {};
              (this.isRetailWeapp = Object(D.e)(e)),
                Object(c.d)(this, {
                  autoGetClipboardData: () => {
                    setTimeout(() => {
                      this.form.id ||
                        this.isShowRetailDeliveryAddress ||
                        !this.isAutoWxAnalyze ||
                        ((this.isHiddenWxAnalyzeToast = !0),
                        this.getClipboardDataForWx(),
                        Object(S.b)(this.ctx, {
                          ei: "intelligent_recognition_use",
                          en: "主动调用智能识别",
                        }));
                    }, 1e3);
                  },
                });
            },
            beforeMount() {
              var { isRetailAdd: e, isCityForcePoiSelect: t } =
                  this.$getPageQuery(),
                {
                  isShowRetailDeliveryAddress: a,
                  houseNumberRequired: r,
                  dbid: i,
                  orderScene: o,
                } = this.$getPageQuery();
              if (!i) {
                var n,
                  c =
                    (null == (n = this.ctx.lambdas) || null == n.getHashQuery
                      ? void 0
                      : n.getHashQuery()) || {};
                (i = c.dbid),
                  (o = c.orderScene),
                  (a = c.isShowRetailDeliveryAddress),
                  (r = c.houseNumberRequired);
              }
              (this.dbid = i), (this.orderScene = o);
              var h = {};
              r && !w.includes(r) && (h.houseNumber = !0),
                (this.validation = h),
                Object(S.c)(this.ctx);
              var f = this.ctx.lambdas.getDb(i) || {},
                { id: g, list: v = [], delta: b = 2 } = f,
                { forcePoiSelect: p = !1 } = f,
                A = v.find((e) => e.id === g) || {};
              (this.isCityForcePoiSelect = Boolean(+t)),
                (this.isShowRetailDeliveryAddress = a && p),
                (this.isRetailAdd = e),
                (this.validateItems = [
                  "userName",
                  "tel",
                  "areaCode",
                  "addressDetail",
                  "houseNumber",
                ]),
                this.isShowRetailDeliveryAddress &&
                  (this.validateItems = [
                    "userName",
                    "tel",
                    "addressDetail",
                    "houseNumber",
                  ]),
                Object(d.e)("_TRADE_ADDRESS_EDIT_ID"),
                (this.form = Object(s.a)({}, A, {
                  isDefault: Boolean(A.isDefault),
                })),
                (this.forcePoiSelect = p),
                (this.list = v),
                (this.delta = b),
                this.setTitle(g),
                this.ctx.lambdas.onEvent(
                  null == m.a ? void 0 : m.a.addressMap,
                  (e) => {
                    this.addressMapChange(e);
                  }
                ),
                Object(u.b)().then((e) => {
                  this.areaList = e;
                });
              try {
                var y = Object(l.b)("WECHAT_INVALID_ADDRESS");
                if (!y) return;
                (y = JSON.parse(y)),
                  Object(d.e)("WECHAT_INVALID_ADDRESS"),
                  (this.form = Object(s.a)({}, y));
              } catch (e) {}
            },
            mounted() {
              this.$nextTick(() => {
                this.dataLoaded = !0;
              });
            },
            destroyed() {
              Object(S.d)(this.ctx, this.orderScene),
                this.ctx.lambdas.offEvent(
                  null == m.a ? void 0 : m.a.addressMap
                );
            },
            methods: {
              getClipboardDataForWx() {
                wx.getClipboardData({
                  success: (e) => {
                    Object(S.b)(this.ctx, {
                      ei: "allow_clipboard",
                      en: "访问剪贴板成功",
                    }),
                      wx.showLoading({ title: "" }),
                      setTimeout(() => {
                        wx.hideLoading();
                      }, 250);
                    var t = e.data || "";
                    t
                      ? this.handleToAnalyze(t)
                      : (wx.hideLoading(),
                        this.onShowWxToast("未识别到内容，请先复制地址信息"));
                  },
                  fail: () => {
                    Object(S.b)(this.ctx, {
                      ei: "reject_clipboard",
                      en: "访问剪贴板失败",
                    });
                  },
                });
              },
              addressMapChange(e) {
                var { lat: t, lon: a, location: r } = e;
                this.form = Object(s.a)({}, this.form, e);
                var i = this.ctx.lambdas.baiduToGcj(a, t);
                this.map = Object(h.a)({
                  latitude: i.lat,
                  longitude: i.lng,
                  markerLabel: r,
                });
              },
              setTitle(e) {
                this.titleText = e ? "编辑地址" : "新增地址";
              },
              onCurrentLocationUse(e) {
                var t = this;
                return Object(r.a)(function* () {
                  var { gcjToBaidu: a } = t.ctx.lambdas,
                    {
                      ad_info: { adcode: r },
                      address: i,
                      address_component: { province: o, city: n, district: d },
                      formatted_addresses: { recommend: l },
                      location: { lat: c, lng: u },
                    } = e,
                    f = Object(s.a)({}, t.data.form, {
                      areaCode: r,
                      addressDetail: "" + i + l,
                      province: o,
                      city: n,
                      county: d,
                    }),
                    { lat: g, lon: v } = (yield Object(b.a)(f)) || {};
                  if (g && v) t.form = Object(s.a)({}, f, { lat: g, lon: v });
                  else {
                    var m = a(u, c);
                    t.form = Object(s.a)({}, f, { lat: m.lat, lon: m.lng });
                  }
                  t.map = Object(h.a)({
                    latitude: c,
                    longitude: u,
                    markerLabel: l,
                  });
                })();
              },
              onShowAnalyze() {
                (this.isHiddenWxAnalyzeToast = !1),
                  this.getClipboardDataForWx(),
                  Object(S.a)(this.ctx, {
                    ei: "paste_address_click",
                    en: "粘贴地址点击",
                  });
              },
              triggerMarkerLabel(e) {
                this.showMarkerLabel = e;
              },
              setCloseMarkerLabel() {
                this.triggerMarkerLabel(!1);
              },
              setShowMarkerLabel() {
                this.triggerMarkerLabel(!0);
              },
              onClickIcon() {
                var e = this;
                return Object(r.a)(function* () {
                  Object(S.f)(e.ctx);
                  var { lon: t, lat: a, city: r, addressDetail: s } = e.form;
                  (e.isAutoWxAnalyze = !1),
                    i.default.navigate({
                      url:
                        "/packages/trade-buy-subpage/order/address-map/index?lng=" +
                        (t || "") +
                        "&lat=" +
                        (a || "") +
                        "&forcePoiSelect=" +
                        +e.forcePoiSelect +
                        "&showPoiTips=" +
                        +e.showPoiTips +
                        "&city=" +
                        (r || "") +
                        "&addressDetail=" +
                        (s || ""),
                      type: "navigateTo",
                    });
                })();
              },
              onClickDetail() {
                this.onFocus("addressDetail");
                var {
                  forcePoiSelect: e,
                  form: t,
                  isShowRetailDeliveryAddress: a,
                } = this;
                ((e && !t.downgrade) || a) && this.onClickIcon();
              },
              handleCloseAnalyze() {
                Object(S.a)(this.ctx, {
                  ei: "not_fill_in_button_click",
                  en: "点击不填入按钮",
                });
              },
              handleCloseAnalyzeConfirmeDialog() {
                this.isShowAnalyzeConfirmeDialog = !1;
              },
              onParseAddress(e) {
                return e
                  ? ["省", "市", "区", "镇", "县"].reduce(
                      (t, a) => (e.includes(a) && (t += 1), t),
                      0
                    ) < 2
                    ? Promise.reject({
                        msg: "地址识别失败，请修改文本或者手动选择",
                      })
                    : new Promise((t, a) => {
                        this.parseAddress({ address: e })
                          .then((e) => {
                            var { areaCode: r, addressUpgradeModel: s = {} } =
                              e || {};
                            r
                              ? (s.newAddress &&
                                  this.onShowWxToast(
                                    "已按最新行政区域更新地址"
                                  ),
                                t(e))
                              : a({ msg: "行政区获取失败，请手动选择" });
                          })
                          .catch(function (e) {
                            void 0 === e && (e = {}),
                              a({ msg: e.msg || e.message });
                          });
                      })
                  : Promise.reject({ msg: "未识别到内容，请先复制地址信息" });
              },
              handleToAnalyze(e) {
                var t = this;
                this.onParseAddress(e)
                  .then(function (e) {
                    void 0 === e && (e = {}),
                      (t.analyzeAddress = {}),
                      Object(u.a)(e.areaCode).then((a) => {
                        (t.analyzeAddress = Object(s.a)(
                          { lon: "", lat: "" },
                          e,
                          a,
                          { type: 1 }
                        )),
                          (t.isShowAnalyzeConfirmeDialog = !0),
                          Object(S.g)(t.ctx, {
                            ei: "identify_results_show",
                            en: "识别结果弹窗曝光",
                          });
                      });
                  })
                  .catch(function (e) {
                    void 0 === e && (e = {});
                    var a = e.msg || "地址识别失败，请检查地址信息";
                    t.onShowWxToast(a);
                  });
              },
              handleUseAnalyze() {
                this.onClear(),
                  (this.form = Object(s.a)({}, this.analyzeAddress)),
                  this.validateAddress(),
                  this.onBlur("addressDetail"),
                  Object(S.a)(this.ctx, {
                    ei: "fill_in_button_click",
                    en: "点击填入按钮",
                  });
              },
              onShowWxToast(e) {
                this.isHiddenWxAnalyzeToast ||
                  setTimeout(() => {
                    wx.showToast({ title: e, icon: "none" });
                  }, 250);
              },
              onFocus(e) {
                (this.errorInfo[e] = !1), (this.errorInfoMsg[e] = "");
              },
              onBlur(e) {
                "addressDetail" === e &&
                  "weapp" === i.default.getEnv() &&
                  this.onChangeAddressDetail();
              },
              handleAddressSearch(e, t) {
                var [a] = this.ctx.process.invoke("searchAddress", {
                  keyword: t,
                  policy: 1,
                  region: e,
                  page_size: 20,
                  page_index: 1,
                });
                return a.then(function (e) {
                  var { data: t = [] } = void 0 === e ? {} : e;
                  return t.filter((e) => e.province && e.city)[0];
                });
              },
              handleQueryGeo(e) {
                var { city: t, addressDetail: a } = e;
                return this.handleAddressSearch(t, a)
                  .then((e) => {
                    if (!e) throw new Error("地址获取失败");
                    var {
                      province: t,
                      city: a,
                      district: r,
                      title: s,
                      location: i,
                    } = e;
                    return {
                      lat: null == i ? void 0 : i.lat,
                      lon: null == i ? void 0 : i.lng,
                      formattedAddress: t + a + r + s,
                    };
                  })
                  .catch(() => Object(b.a)(e));
              },
              onChangeAddressDetail() {
                var {
                  province: e,
                  city: t,
                  county: a,
                  addressDetail: r,
                } = this.form;
                var s = {};
                this.handleQueryGeo({
                  province: e,
                  city: t,
                  county: a,
                  addressDetail: r,
                })
                  .then((e) => {
                    var { lat: t, lon: a, formattedAddress: r } = e;
                    (s = Object(h.a)({
                      latitude: t,
                      longitude: a,
                      markerLabel: r,
                    })),
                      (this.map = s);
                  })
                  .catch((e) => {
                    this.map = s;
                  });
              },
              onChangeLabel(e) {
                this.form = Object(s.a)({}, this.form, { label: e.label });
              },
              handleInputForm(e, t) {
                var a,
                  { detail: r } = t;
                (a = "isDefault" === e ? r : r.value),
                  (this.form = Object(s.a)({}, this.form, { [e]: a })),
                  "addressDetail" === e && this.handleDetailChange(a);
              },
              handleFormClear(e) {
                setTimeout(() => {
                  this.form[e] = "";
                }, 50);
              },
              handleDetailChange() {
                var { form: e, ADDRESS_TYPE: t } = this;
                (e.lat = ""),
                  (e.lon = ""),
                  (e.type = null == t ? void 0 : t.INPUT),
                  (this.form = e);
              },
              handleDelete() {
                this.isDeleting = !0;
                var { triggerEvent: e } = this.ctx.lambdas;
                Object(v.a)(this.form.id)
                  .then(() => {
                    o.a.success("地址删除成功"),
                      null == e || e("address-delete", this.form.id),
                      (this.isDeleting = !1),
                      i.default.navigateBack();
                  })
                  .catch((e) => {
                    Object(n.b)(e, { message: "地址删除失败，请稍后重试" }),
                      (this.isDeleting = !1);
                  });
              },
              handleAreaCancel() {
                this.showArea = !1;
              },
              handleAreaShow() {
                var { forcePoiSelect: e, form: t } = this;
                !e || t.downgrade
                  ? (wx.hideKeyboard(),
                    (this.showArea = !0),
                    this.$refs.area.reset(this.form.areaCode))
                  : this.onClickIcon();
              },
              handleAreaConfirm(e) {
                var { values: t } = e;
                (t = t.filter((e) => !!e)).some((e) => !e.code)
                  ? Object(o.a)("请选择地区")
                  : ((this.showArea = !1),
                    (this.form = Object(s.a)({}, this.form, {
                      lon: "",
                      lat: "",
                      type: 1,
                    })),
                    this.assignAreaValues(),
                    this.validateAddress());
              },
              validateAddress() {
                var e,
                  t,
                  a,
                  r =
                    Object(y.d)(
                      this.form,
                      this.validation,
                      this.validateItems
                    ) || {},
                  { error: i } = r,
                  { isValid: o } = r,
                  n = String(null == (e = this.form) ? void 0 : e.areaCode);
                if (
                  ((null != (t = this.form) &&
                    null != (a = t.county) &&
                    a.length) ||
                  "9" === n[0]
                    ? ((i.errorInfo = Object(s.a)({}, i.errorInfo || {}, {
                        areaCode: !1,
                      })),
                      (this.errorInfoMsg.areaCode = ""))
                    : ((o = !1),
                      (i.errorInfo = Object(s.a)({}, i.errorInfo || {}, {
                        areaCode: !0,
                      })),
                      (this.errorInfoMsg.areaCode = "请补全所在地区信息")),
                  o)
                )
                  (this.errorInfo = {}), (this.errorInfoMsg = {});
                else {
                  this.errorInfo = i.errorInfo;
                  var d = Object.keys(i.errorInfo)[0];
                  this.errorInfoMsg[d] = i.msg;
                }
                return { isValid: o, error: i };
              },
              assignAreaValues() {
                var { area: e } = this.$refs;
                if (e) {
                  var t = e.getDetail();
                  this.form = Object(s.a)({}, this.form, {
                    areaCode: t.code,
                    country: t.country,
                    province: t.province,
                    city: t.city,
                    county: t.county,
                  });
                }
              },
              handleSave() {
                this.weappSave();
              },
              requestSaveAddress(e) {
                this.isSaving ||
                  ((this.isSaving = !0),
                  o.a.loading(),
                  Object(A.a)(e)
                    .then((t) => {
                      this.requestOver(e, t);
                    })
                    .catch((e) => {
                      throw (
                        (o.a.clear(),
                        (this.isSaving = !1),
                        Object(n.b)(e, { message: "地址保存失败，请稍后重试" }),
                        e)
                      );
                    }));
              },
              saveAddress(e, t, a) {
                var s = this;
                return Object(r.a)(function* () {
                  void 0 === t && (t = []), void 0 === a && (a = {});
                  var { isValid: r, error: i } =
                    Object(y.d)(e, a, s.validateItems) || {};
                  if (!r) throw i;
                  if (Object(y.a)(e)) return Object(A.a)(e);
                  if (e.lat && e.lon) return Object(A.a)(e);
                  try {
                    var { lat: o, lon: n } = (yield s.handleQueryGeo(e)) || {},
                      d = s.ctx.lambdas.gcjToBaidu(n, o);
                    (e.lon = d.lng), (e.lat = d.lat);
                  } catch (e) {}
                  return Object(A.a)(e);
                })();
              },
              weappSave() {
                if (!this.isSaving) {
                  var { isShowRetailDeliveryAddress: e, showPoiTips: t } = this;
                  if (e && t) Object(o.a)("请补充地点信息");
                  else {
                    (this.isSaving = !0), o.a.loading();
                    var { form: a } = this,
                      r = this.saveAddress(a, this.list, this.validation);
                    if (r)
                      r.then((e) => {
                        this.requestOver(a, e);
                      }).catch((e) => {
                        if (e.errorInfo && e.msg) {
                          o.a.clear(), (this.errorInfo = e.errorInfo);
                          var t = Object.keys(e.errorInfo)[0];
                          (this.errorInfoMsg[t] = e.msg),
                            (this.isSaving = !1),
                            (this.showMarkerLabel = !0),
                            Object(o.a)(e.msg);
                        } else
                          o.a.clear(),
                            (this.isSaving = !1),
                            (this.showMarkerLabel = !0),
                            Object(n.b)(e, {
                              message: "地址保存失败，请稍后重试",
                            });
                        var r = getApp();
                        r.logger &&
                          r.logger.appError({
                            name: "address-weapp-save-failed",
                            message: "微信小程序保存地址失败",
                            detail: {
                              address: a,
                              list: this.list,
                              validation: this.validation,
                              error: JSON.stringify(e),
                              stack: e.stack,
                            },
                          });
                      });
                    else {
                      (this.isSaving = !1),
                        (this.showMarkerLabel = !0),
                        Object(o.a)("地址保存失败，请稍后重试");
                      var s = getApp();
                      s.logger &&
                        s.logger.appError({
                          name: "address-weapp-save-failed",
                          message: "saveAddressPromise 方法是空的",
                          detail: {
                            list: this.list,
                            validation: this.validation,
                            error: {
                              saveAddressPromise:
                                Object.prototype.toString.call(r),
                            },
                          },
                        });
                    }
                  }
                }
              },
              requestOver(e, t) {
                var a,
                  r,
                  { delta: n = 2 } = this;
                o.a.clear();
                var c = e.id || t.value || t,
                  h = Object(s.a)({}, e, { id: c });
                this.isRetailAdd &&
                  i.default.setGlobal("addressSave:addSuccessId", c),
                  Object(S.e)(this.ctx, { address: h });
                var u =
                  Object(l.b)(null == p.a ? void 0 : p.a.addressDowngrade) ||
                  {};
                e.downgrade
                  ? ((u[c] = { expired: Date.now() + 2592e6 }),
                    Object(d.g)(null == p.a ? void 0 : p.a.addressDowngrade, u))
                  : null != u[c] &&
                    (delete u[c],
                    Object(d.g)(
                      null == p.a ? void 0 : p.a.addressDowngrade,
                      u
                    )),
                  (this.isSaving = !1),
                  (this.showMarkerLabel = !0),
                  this.setAddressIdStorage(c),
                  this.routerBack(n);
                try {
                  if (O.getYouZanYunSdk) {
                    var { scene: f } = i.default.getAppOptions();
                    O.getYouZanYunSdk().app.trigger("ecloud:address:select", [
                      e,
                      f,
                    ]);
                  }
                } catch (e) {}
                null == (a = (r = this.ctx.lambdas).triggerEvent) ||
                  a.call(r, "address-save", h);
              },
              setAddressIdStorage(e) {
                Object(l.b)("AUTO_SHOW_MODIFY_ADDRESS_POPUP") &&
                  Object(d.g)("_TRADE_ADDRESS_EDIT_ID", e);
              },
              routerBack(e) {
                i.default.navigateBack({ delta: e });
              },
              onPlatformAddressSave(e) {
                (this.isAutoWxAnalyze = !1),
                  (this.form = Object(s.a)({}, this.form, e)),
                  Object(y.c)(e, e.tel)
                    ? e.areaCode &&
                      e.province &&
                      e.city &&
                      e.county &&
                      (Object(y.a)(e) || (e.lat && e.lon))
                      ? (this.isShowRetailDeliveryAddress &&
                          this.showPoiTips) ||
                        (o.a.loading(),
                        Object(A.a)(e)
                          .then((t) => {
                            this.onBlur("addressDetail"),
                              this.requestOver(e, t);
                          })
                          .catch(() => {
                            o.a.clear();
                          }))
                      : Object(o.a)("当前地址不完整，请重新选择地址")
                    : Object(o.a)("请填写正确的手机号");
              },
              onClear() {
                this.form = {};
              },
            },
            ud: !0,
          };
        t.default = i.default.component(j);
      },
      "4GQ0": function (e, t, a) {
        a.d(t, "a", function () {
          return i;
        });
        var r = a("iKL5"),
          s = a("Uol7");
        function i(e) {
          var t = getApp();
          return new Promise(function (a, i) {
            t.carmen({
              api: "youzan.logistics.geo/1.0.0/get",
              data: {
                city: e.city,
                address: ""
                  .concat(e.province)
                  .concat(e.city)
                  .concat(e.county)
                  .concat(e.addressDetail),
              },
              config: s.a,
              method: "GET",
              success: function (e) {
                var t = e.lat,
                  s = e.lng,
                  i = e.formattedAddress,
                  o = Object(r.a)(s, t);
                a({ lat: o.lat, lon: o.lng, formattedAddress: i });
              },
              fail: i,
            });
          });
        }
      },
      "4kmb": function (e, t, a) {
        a.r(t),
          a.d(t, "ADDRESS_TYPE", function () {
            return r;
          }),
          a.d(t, "ADDRESS_SOURCE", function () {
            return s;
          }),
          a.d(t, "ADDRESS_POI_TYPE", function () {
            return i;
          });
        var r = { INPUT: 1, POI: 2 },
          s = { YOUZAN: 1, WECHAT: 2 },
          i = { QQ: 1, BAIDU: 2, AMAP: 3 };
      },
      Jcb6: function (e, t, a) {
        function r(e) {
          e = e.trim();
          var t = /^((\+86)|(86))?(1)\d{10}$/.test(e),
            a = /^0[0-9\-]{10,13}$/.test(e),
            r = /^((\+852)|(852))?(5|6|8|9)\d{7}$/.test(e),
            s = /^((\+886)|(886)|(0))?9\d{2}-?\d{3}-?\d{3}$/.test(e);
          return t || a || r || s;
        }
        function s(e) {
          return e && e.areaCode && "9" === e.areaCode[0];
        }
        function i(e, t) {
          return s(e) ? t && t.length <= 20 : r(t);
        }
        function o(e, t, a) {
          var r,
            s = String(e[t] || "").trim();
          switch (t) {
            case "userName":
              return s && s.length > 15
                ? "收货姓名不能超过 15 个字"
                : s
                ? ""
                : "请填写姓名";
            case "tel":
              return i(e, s) ? "" : "请填写正确的电话";
            case "areaCode":
              return ((null != e &&
                null !== (r = e.county) &&
                void 0 !== r &&
                r.length) ||
                "9" === s[0]) &&
                s
                ? ""
                : "请补全所在地区信息";
            case "addressDetail":
              return s ? "" : "请填写详细地址";
            case "postalCode":
              return s && !/^\d{6}$/.test(s) ? "邮政编码格式不正确" : "";
            case "houseNumber":
              return null != a && a.houseNumber
                ? s
                  ? ""
                  : "请填写门牌号"
                : "";
            default:
              return "";
          }
        }
        function n(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [
                    "userName",
                    "tel",
                    "areaCode",
                    "addressDetail",
                    "houseNumber",
                  ],
            r = { errorInfo: {}, msg: "" },
            s = a.every(function (a) {
              var s = o(e, a, t);
              return s && ((r.errorInfo[a] = !0), (r.msg = s)), !s;
            });
          return { isValid: s, error: r };
        }
        a.d(t, "b", function () {
          return r;
        }),
          a.d(t, "a", function () {
            return s;
          }),
          a.d(t, "c", function () {
            return i;
          }),
          a.d(t, "d", function () {
            return n;
          });
      },
      RyxV: function (e, t, a) {
        a.d(t, "a", function () {
          return i;
        });
        var r = a("US/N"),
          s = a("Uol7");
        function i(e) {
          var t = e.id ? "update" : "add";
          return Object(r.requestV2)({
            method: "POST",
            path: "/wsctrade/uic/address/".concat(t, "Address.json"),
            data: e,
            config: s.a,
            withCredentials: !0,
          })
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              throw ((e.msg = e.msg || "地址保存失败"), e);
            });
        }
      },
      UlHH: function (e, t, a) {
        t.a = {
          selfFetchCity: "self-fetch-city-change",
          addressSelect: "address-select",
          addressDelete: "address-delete",
          addressSave: "address-save",
          couponChange: "order-coupon-change",
          showExpressWay: "show-express-way",
          addressCity: "address-city-change",
          addressMap: "address-map-change",
          showContact: "show-contact",
          showSelfFetchShop: "show-self-fetch-shop",
          showSelfFetchTime: "show-self-fetch-time",
          showTradeRecharge: "show-trade-recharge",
          contactError: "contact-error",
          idcardError: "idcard-error",
          presaleDisagreeToast: "presale-disagree-toast",
          showIdcardPopup: "show-idcard-popup",
        };
      },
      Uol7: function (e, t, a) {
        a.d(t, "a", function () {
          return r;
        });
        var r = { skipKdtId: !0, skipShopInfo: !0 };
      },
      iKL5: function (e, t, a) {
        a.d(t, "a", function () {
          return r;
        });
        var r = function (e, t) {
          var a = (3e3 * Math.PI) / 180,
            r = e,
            s = t,
            i = Math.sqrt(r * r + s * s) + 2e-5 * Math.sin(s * a),
            o = Math.atan2(s, r) + 3e-6 * Math.cos(r * a);
          return {
            lng: (e = i * Math.cos(o) + 0.0065),
            lat: (t = i * Math.sin(o) + 0.006),
          };
        };
      },
    }
  )
);
