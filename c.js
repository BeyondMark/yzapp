"use strict";
(exports.ids = [1]),
  (exports.modules = {
    "+/eI": function (e, t) {
      e.exports = {
        p: "setSalesmanTradeData",
        li: "beforePageMount;pageDestroyed",
      };
    },
    "+165": function (e, t) {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    "+Iya": function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("Fcif"),
        a = n("0hwI"),
        o = function (e) {
          return (
            void 0 === e && (e = {}),
            a.a.get({
              url: "/wscdeco/tee/goodsByTagAlias.json",
              data: Object(r.a)({}, e, { isShowPeriod: 1 }),
            })
          );
        };
    },
    "+XBW": function (e, t) {
      e.exports = {
        d: "title;6;bizName;6;pageSize;6;kdtId;6;requestExtraParams;6;themeColors;4;themeCSS;4;offlineId;4;buyerId;4;layoutConfig;4;extraParams;4;isControlRecommendShow;4;enableShow;4;miniprogram;4;isSkyline;4",
        e: "loadSuccess",
        w: "Main;RecommendGoodsTitle",
        wc: "RecommendGoodsTitle",
        wd: "Main",
      };
    },
    "+fxQ": function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return s;
        });
      var r = n("YeA1"),
        { dmc: a } = Object(r.a)(),
        o = {
          REQUEST: "request",
          DOWNLOAD: "download",
          UPLOAD: "upload",
          WS_REQUEST: "wsRequest",
          WEBVIEW: "webview",
        },
        i = (e) => a.domain.readDomain(e).then((e) => "https://" + e.domain),
        s = function (e, t) {
          return (
            void 0 === t && (t = o.WEBVIEW),
            a.transformDomain(e, { priorityCache: !0, group: t })
          );
        };
    },
    "+pJB": function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("9Cpw"),
        a = n.n(r);
      class o {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      o.widgets = { Main: a() };
    },
    "+qgQ": function (e, t) {
      e.exports = {
        d: "userLevel;4;groupAlias;4;neededMoreStoreBalance;4;isWeixinCardEnabled;4;pageQuery;4;extraData;4",
        e: "sku:show",
        l: "",
        lc: "jumpToLink",
        p: "",
        pi: "reloadData",
      };
    },
    "+zL3": function (e, t) {
      e.exports = {
        d: "kdtId;4;buyerId;4;isShowStoreInfo;4;pageBgColor;4;miniprogram;4;pageStyleConfig;4",
        e: "fullguide:show",
        w: "Main",
        wd: "Main",
      };
    },
    "/3Ts": function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("Fcif"),
        a = (e, t) => {
          var n = JSON.parse(JSON.stringify(e));
          for (var a in t)
            e[a] && null === t[a]
              ? delete n[a]
              : (e[a] || (t[a] && t[a]._assign)) &&
                (delete t[a]._assign,
                (n[a] = Object(r.a)({}, e[a] || {}, t[a])));
          return n;
        };
    },
    "/MSb": function (e, t) {
      e.exports = {
        d: "topNavHeight;2;title;4;kdtId;4;imConfig;4;openCustomNav;4;navigationBarConfigData;4",
        e: "",
        el: "",
        w: "Main;NavigationBar",
        wd: "NavigationBar",
        lc: "checkIsHalfScreen;checkFromShowcase",
        cc: "MessageContactButton",
        li: "",
      };
    },
    "/pw/": function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n("LniI"),
        a = n.n(r),
        o = n("Rz+h");
      class i {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      (i.widgets = { Main: a.a }), (i.lambdas = { jumpToLink: o.a });
    },
    "03az": function (e, t, n) {
      n.d(t, "d", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return s;
        });
      function r(e) {
        return "[object String]" == Object.prototype.toString.call(e)
          ? new Date(e.replace(/-/g, "/"))
          : new Date(e);
      }
      function a(e, t) {
        var n = o(e),
          r = o(t);
        return Math.floor((r.getTime() - n.getTime()) / 864e5) + 1;
      }
      function o(e) {
        var t = r(e);
        return (
          t.setHours(0),
          t.setMinutes(0),
          t.setSeconds(0),
          t.setMilliseconds(0),
          t
        );
      }
      function i(e) {
        var t = e.getMonth() + 1;
        t = 1 === t.toString().length ? "0" + t : t;
        var n = e.getDate();
        return t + "月" + (n = 1 === n.toString().length ? "0" + n : n) + "日";
      }
      function s(e, t) {
        var n = {
          "M+": e.getMonth() + 1,
          "d+": e.getDate(),
          "h+": e.getHours(),
          "m+": e.getMinutes(),
          "s+": e.getSeconds(),
          "q+": Math.floor((e.getMonth() + 3) / 3),
          S: e.getMilliseconds(),
        };
        for (var r in (/(y+)/.test(t) &&
          (t = t.replace(
            RegExp.$1,
            (e.getFullYear() + "").substr(4 - RegExp.$1.length)
          )),
        n))
          new RegExp("(" + r + ")").test(t) &&
            (t = t.replace(
              RegExp.$1,
              1 == RegExp.$1.length
                ? n[r]
                : ("00" + n[r]).substr(("" + n[r]).length)
            ));
        return t;
      }
    },
    "0E+e": function (e, t) {
      e.exports = {
        d: "privacyWaybill;4;display;4;tradeTag;4",
        e: "",
        el: "",
        w: "TradeBuyPrivacyBill",
        wc: "",
        wd: "TradeBuyPrivacyBill",
        l: "",
        lc: "",
        p: "",
        pi: "setOrderPrivacyBill",
        c: "PrivacyBillRulePopup",
        cc: "PrivacyBillRulePopup",
      };
    },
    "0KRy": function (e, t, n) {
      var r = n("LSEb")(n("s3UK"), "Map");
      e.exports = r;
    },
    "0WZd": function (e, t, n) {
      function r(e) {
        return e ? 1 : 0;
      }
      function a(e) {
        return new Promise(function (t) {
          return setTimeout(function () {
            return t();
          }, e);
        });
      }
      function o(e, t) {
        return !(
          !Array.isArray(e) ||
          !Array.isArray(t) ||
          e.length !== t.length ||
          e.slice().sort().join("") !== t.slice().sort().join("")
        );
      }
      n.d(t, "d", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return s;
        });
      var i = n("QxN7");
      function s(e) {
        var t = e.allowDenyCustom,
          n = e.scene,
          r = e.authTypeList,
          a = e.authAllowDenyMap;
        return (
          !(r || []).includes(i.AuthType.PROTOCOL) &&
          (n
            ? (function (e) {
                var t = e.authTypeList,
                  n = e.authAllowDenyMap;
                if (!t || 0 === t.length) return !1;
                if (t.includes(i.AuthType.PROTOCOL)) return !1;
                var r = n || {};
                return 1 === t.length
                  ? !!r[t[0]]
                  : !(
                      2 !== t.length ||
                      !t.includes(i.AuthType.MOBILE) ||
                      !t.includes(i.AuthType.NICKNAME_AND_AVATAR)
                    ) && !(!r.mobile || !r.nicknameAndAvatar);
              })({ authTypeList: r, authAllowDenyMap: a })
            : !!t)
        );
      }
    },
    "0i4I": function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = Behavior({
          methods: {
            $emit() {
              this.triggerEvent(...arguments);
            },
            set(e, t) {
              return this.setData(e, t), new Promise((e) => wx.nextTick(e));
            },
            getRect(e, t) {
              return new Promise((n) => {
                wx.createSelectorQuery()
                  .in(this)
                  [t ? "selectAll" : "select"](e)
                  .boundingClientRect((e) => {
                    t && Array.isArray(e) && e.length && n(e), !t && e && n(e);
                  })
                  .exec();
              });
            },
          },
        }),
        a = {
          ancestor: {
            linked(e) {
              this.parent = e;
            },
            unlinked() {
              this.parent = null;
            },
          },
          descendant: {
            linked(e) {
              (this.children = this.children || []), this.children.push(e);
            },
            unlinked(e) {
              this.children = (this.children || []).filter((t) => t !== e);
            },
          },
        };
      function o(e) {
        void 0 === e && (e = {});
        var t,
          n,
          o,
          i = {};
        (t = e),
          (n = i),
          (o = {
            data: "data",
            props: "properties",
            mixins: "behaviors",
            methods: "methods",
            beforeCreate: "created",
            created: "attached",
            mounted: "ready",
            relations: "relations",
            destroyed: "detached",
            watch: "observers",
            classes: "externalClasses",
          }),
          Object.keys(o).forEach((e) => {
            t[e] && (n[o[e]] = t[e]);
          });
        var { relation: s } = e;
        s &&
          (function (e, t, n) {
            var {
                type: r,
                name: o,
                linked: i,
                unlinked: s,
                linkChanged: c,
              } = n,
              { beforeCreate: u, destroyed: d } = t;
            "descendant" === r &&
              ((e.created = function () {
                u && u.bind(this)(), (this.children = this.children || []);
              }),
              (e.detached = function () {
                (this.children = []), d && d.bind(this)();
              })),
              (e.relations = Object.assign(e.relations || {}, {
                ["../" + o + "/index"]: {
                  type: r,
                  linked(e) {
                    a[r].linked.bind(this)(e), i && i.bind(this)(e);
                  },
                  linkChanged(e) {
                    c && c.bind(this)(e);
                  },
                  unlinked(e) {
                    a[r].unlinked.bind(this)(e), s && s.bind(this)(e);
                  },
                },
              }));
          })(i, e, s),
          (i.externalClasses = i.externalClasses || []),
          i.externalClasses.push("custom-class"),
          (i.behaviors = i.behaviors || []),
          i.behaviors.push(r),
          e.field && i.behaviors.push("wx://form-field"),
          i.properties &&
            Object.keys(i.properties).forEach((e) => {
              Array.isArray(i.properties[e]) && (i.properties[e] = null);
            }),
          (i.options = { multipleSlots: !0, addGlobalClass: !0 }),
          Component(i);
      }
    },
    "0lqJ": function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("xih6");
      function a() {
        var e = getCurrentPages() || [],
          t = e[e.length - 1] || {},
          n = Object(r.a)(),
          a = getApp().globalData.tabbarOriginList,
          o = void 0 === a ? [] : a,
          i = n.findIndex(function (e) {
            return ("/" + t.route).startsWith(e);
          });
        return i === n.length - 1 && o.length ? o.length - 1 : i;
      }
    },
    "1F1z": function (e, t, n) {
      var r = n("jA1y"),
        a = n("taYb"),
        o = getApp(),
        i = {},
        s = {},
        c = Object.prototype.hasOwnProperty,
        u = !1,
        d = !0;
      function l(e, t) {
        void 0 === t && (t = {});
        var { useCache: n = !1, singleRequest: r = !0 } = t;
        return n && c.call(i, e)
          ? Promise.resolve(i[e])
          : new Promise((t, a) => {
              (u && r) ||
                ((u = !0),
                o.carmen({
                  api: "weapp.wsc.item.detail/1.0.0/get",
                  query: { alias: e, fans_type: o.getFansType() },
                  success: (r) => {
                    (u = !1), n && (i[e] = r), (r.dataVersion = "v1"), t(r);
                  },
                  fail: (e) => {
                    (u = !1), a(e.msg || "获取商品信息失败");
                  },
                }));
            });
      }
      t.a = {
        getSkuDataIron: function (e, t) {
          void 0 === t && (t = {});
          var { useCache: n = !1 } = t;
          return n && c.call(s, e)
            ? Promise.resolve(s[e])
            : o
                .request({
                  path: "v2/showcase/sku/skudata.json",
                  query: { alias: e, oid: o.getOfflineId() },
                })
                .then((t) => (n && (s[e] = t), t));
        },
        getSkuData: function (e, t) {
          if ((void 0 === t && (t = {}), !d)) return l(e, t);
          var { useCache: n = !1, singleRequest: s = !0, activityTypes: p } = t,
            { goodsIdForBirthday: h = "" } = t;
          return n && c.call(i, e)
            ? Promise.resolve(i[e])
            : u && s
            ? void 0
            : ((u = !0),
              r
                .c({
                  path: "/wscshop/sku/skudata.json",
                  data: {
                    alias: e,
                    fans_type: o.getFansType(),
                    offlineId: o.getOfflineId(),
                    bizScene: "goods_sku_component",
                    activityTypes: p,
                    isCombo: !0,
                    birthdayScene: "WEAAPP_DECORATE_GOODS",
                    goodsIdForBirthday: h,
                  },
                })
                .then(
                  (r) => (
                    (u = !1),
                    r && !1 === r.value
                      ? ((d = !1), l(e, t))
                      : (n && (i[e] = r),
                        (function (e, t) {
                          var n = {},
                            {
                              price: r,
                              quota: o,
                              quotaUsed: i,
                              itemDataModel: {
                                itemId: s,
                                isVirtual: c,
                                goodsType: u,
                                title: d,
                                startSaleNum: l,
                                pictures: p,
                                origin: h,
                                validityType: f,
                                startSoldTime: g,
                              },
                              preSaleExtraModel: v,
                              itemActivitySpuModels: m,
                              maxPrice: y,
                              minPrice: b,
                              option: { hideCart: _ = !1 } = {},
                            } = e,
                            S = {};
                          if (((n.sku = a.a.toSnakeCase(e, !1)), v)) {
                            var {
                              skuDepositModels: O = [],
                              deposit: w,
                              maxDeposit: P,
                              minDeposit: I,
                            } = v;
                            (S.extend = a.a.toSnakeCase(v)),
                              void 0 !== w &&
                                (S.deposit = { deposit: w, max: P, min: I });
                            var k = {};
                            O.reduce(
                              (e, t) => ((e[t.skuId] = t.deposit), e),
                              k
                            ),
                              n.sku.list.forEach(
                                (e) => (k[e.id] && (e.deposit = k[e.id]), e)
                              );
                          }
                          (n.sku = Object.assign(n.sku, S, {
                            goods_type: u,
                            max_price: y / 100 + "",
                            min_price: b / 100 + "",
                          })),
                            n.sku.list.forEach((e) => {
                              e.price = e.price / 100 + "";
                            }),
                            (n.brief = {
                              item_id: s,
                              title: d,
                              presale: v ? 1 : 0,
                              presale_info_new: n.sku.pre_sale_extra_model,
                              quota: o,
                              quota_used: i,
                              start_sale_num: l,
                              is_virtual: c,
                              picture: p,
                              alias: t,
                              price: r,
                              origin: h,
                              hide_shopcart: +_,
                              startSoldTime: g,
                            }),
                            3 == +c && (n.virtual = { validity_type: f });
                          if (m && m[0]) {
                            var {
                              type: C,
                              price: T,
                              minPrice: x,
                              maxPrice: j,
                              list: A = [],
                              oldPrice: E,
                              priceTitle: D,
                            } = m[0];
                            T !== E &&
                              (n.activity = {
                                goods_preference: {
                                  show_price: T,
                                  price_range: {
                                    min: x / 100 + "",
                                    max: j / 100 + "",
                                  },
                                  type: C,
                                  skus: A.reduce(
                                    (e, t) => (
                                      (e[t.id] = { price: t.price / 100 + "" }),
                                      e
                                    ),
                                    {}
                                  ),
                                  quota: o,
                                  quota_used: i,
                                  priceTitle: D,
                                },
                              });
                          }
                          return (
                            (n.components = [
                              { picture: p, type: "config", is_virtual: c },
                            ]),
                            (n.item_sale_prop_list = n.sku.item_sale_prop_list),
                            n
                          );
                        })(r, e))
                  )
                )
                .catch(
                  (e) => (
                    (u = !1),
                    o.logger.requestError({
                      name: "common-sku-error",
                      message: e.msg || "获取商品信息失败",
                      alert: "warn",
                      detail: e,
                    }),
                    Promise.reject(e.msg || "获取商品信息失败")
                  )
                ));
        },
        getActivity: function (e) {
          return o.request({
            path: "/wscshop/ump/activityInfo/activity.json",
            query: { goods_id: e },
          });
        },
      };
    },
    "1LD1": function (e, t, n) {
      var r;
      !(function (e) {
        (e.IOS = "ios"), (e.ANDROID = "android"), (e.UNKNOWN = "unknown");
      })(r || (r = {}));
    },
    "1nOt": function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("ONqW"),
        a = function (e) {
          void 0 === e && (e = {});
          var { freightInsurance: t, supportFreightInsurance: n } = e;
          Object(r.a)().log({
            et: "custom",
            ei: "view_freight_insurance_data",
            en: "包退运费时间",
            params: {
              freightInsurance: t,
              supportFreightInsurance: n,
              typeFreightInsurance: typeof t,
            },
          });
        };
    },
    "1qqj": function (e, t) {
      e.exports = {
        d: "openFloatGoods;2;kdtId;4;rootKdtId;4;goodsBaseInfo;4;themeVars;4;marketing;4;offlineId;4;shopBaseInfo;4;shopMpInfo;4;shopConfig;4;goodsMetaInfo;6;goodsActivity;4;serverStatus;4;umpActivity;4;staticConfig;4;pageFeature;4;multistore;4;buyerId;4;shopMetaInfo;4;hasGoodsShowcase;4;currentActivity;4;alias;4;explainVideoFullScreen;4",
        e: "sku:hide;saleReminderSuccess;sku:show;submit:act;wish:change;sku:show:to-submit;ORDER_PAY_PROMPT:open",
        el: "goodsSetupReady;page-container:scrollLocked;addCartCompleted;sku:show;sku:hide-after;follow:show;subscribe:show;floating:nav:update:position;btn:click;sku:submit;goods:showcase;question:show;stateChange;wecomBenefit:show;helpcutErr:show;qrcode:show",
        w: "UmpVisitGift;GiftPop;VisitGift;CouponItem;CouponList",
        wc: "UserAuthorizePopup;ProtocolPopup;PopContent;UmpVisitGift;SubscribePublic;GiftPop;VisitGift;CouponItem;CouponList;GoodsShowcase",
        wd: "GoodsPopupContainer",
        lc: "getUserInfo",
        p: "checkShowFollow",
        pi: "createOrUpdateIndependentIcon;requestWechatSubscribeMessagePush",
      };
    },
    "2Dtx": function (e, t, n) {
      function r(e) {
        if (!e) return "";
        var t = "";
        for (var n in e) {
          if (Object.prototype.hasOwnProperty.call(e, n))
            e[n] && (t += n + ":" + e[n] + ";");
        }
        return t;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    "2Pst": function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n("EYwr"),
        a = n.n(r),
        o = n("vXaX"),
        i = n.n(o);
      class s {
        constructor(e) {
          (this.ctx = e.ctx), this.ctx.process.define("showYZIm", (e) => {});
        }
      }
      (s.components = { MessageContactButton: a.a }),
        (s.widgets = { MessageContact: i.a });
    },
    "2bgu": function (e, t, n) {
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var r = n("9ZMt"),
        a = "https://h5.youzan.com";
      function o(e) {
        var t, n;
        (e.url = e.needPrefixDomain
          ? ((t = e.url),
            void 0 === n && (n = a),
            n &&
            !(function (e) {
              return 0 === e.indexOf("http") || 0 === e.indexOf("//");
            })(t)
              ? n + t
              : (t.startsWith("http://") &&
                  (t = t.replace("http://", "https://")),
                t))
          : e.url),
          r.default.navigate(e);
      }
      var i = { init: function () {} };
    },
    "31OO": function (e, t, n) {
      var r = n("Fcif"),
        a = n("+66q"),
        o = (e, t) => {
          var { activities: n } = t || {},
            a = (n || []).find((t) => t.type === e.type);
          return a
            ? Object(r.a)(
                {},
                a.activityInfo,
                { activityInfo: a.activityInfo },
                e
              )
            : e;
        },
        i = n("xyw3"),
        s = (e, t, n) =>
          t === n
            ? Object(i.a)(e).toYuan()
            : Object(i.a)(t).toYuan() + "-" + Object(i.a)(n).toYuan(),
        c =
          (a.f,
          {
            [a.a.HELPCUT]: (e) => {
              var { activityId: t } = e;
              return { type: a.a.HELPCUT, identification: t };
            },
            [a.a.INSOURCING_FISSION]: (e) => {
              var { umpAlias: t } = e;
              return { type: a.a.INSOURCING_FISSION, identification: t };
            },
            [a.a.LUCKYDRAW_GROUP]: (e) => {
              var { activityId: t } = e;
              return { type: a.a.LUCKYDRAW_GROUP, identification: t };
            },
            [a.a.SECKILL]: (e) => {
              var { umpAlias: t } = e;
              return { type: a.a.SECKILL, identification: t };
            },
          }),
        u = [a.j.SECKILL],
        d = (e, t, n, a, o, i) => {
          var s;
          s = i.umpSkuData;
          var c = Object.keys(s).reduce(
            (e, n) => (
              (e[n] = Object(r.a)(
                {},
                t.goods,
                s[n],
                u.includes(n) ? { disableSoldoutSku: !0 } : {}
              )),
              e
            ),
            t
          );
          return (
            o &&
              (c = ((e) => {
                var { goods: t = {} } = e,
                  { priceTags: n = [] } = t,
                  a = [...n, { text: "送礼" }];
                return Object(r.a)({}, e, {
                  gift: Object(r.a)({}, t, {
                    activityInfo: { activityType: 99999 },
                    priceTags: a,
                    tags: a,
                  }),
                });
              })(c)),
            c
          );
        };
      t.a = {
        state: {
          goodsActivity: {},
          umpActivity: null,
          alias: "",
          kdtId: 0,
          query: {},
          goodsBaseInfo: {},
          goodsEstimatePriceData: {},
          marketing: {},
          currentActivity: {},
        },
        getActions: (e) => ({
          setActivityInfoForPrice(e) {
            var { umpType: t } = e,
              n = c(t),
              r = n ? n(e) : {};
            this.setCtxData(r, "activityInfoForPrice");
          },
          setUmpShareIcon(t) {
            var n = (this.marketing.activities || []).find(
              (e) => e.type === a.a.SHARE_ENCOURAGE
            );
            return n
              ? (e.logger &&
                  e.logger.log({
                    et: "custom",
                    ei: "view_share_activity",
                    en: "分享有礼活动曝光",
                    params: { activityId: n.activityId },
                  }),
                Object(r.a)({}, t, {
                  color: "var(--ump-icon, #323233)",
                  icon: "point-gift",
                  wordStyle: "color: var(--ump-icon, #323233)",
                  animation: !0,
                }))
              : t;
          },
          parseUmpActivies(t) {
            try {
              var n,
                {
                  sku: i = {},
                  priceInfo: c = {},
                  activity: u = {},
                  marketing: l = {},
                  pageFeature: p = {},
                  ump: h,
                } = t,
                f = l.activities || [],
                g = ((e, t) => {
                  var n;
                  n = e.ump;
                  var {
                      umpActivity: r,
                      marketActivity: i,
                      promotionActivity: s,
                    } = n,
                    { currentActivity: c } = n,
                    u = ["seckill", "tuan", "fCode", "auction"];
                  return (
                    Object.keys(r).forEach((t) => {
                      var n = "ladderGroupOn" === t ? "groupOn" : t;
                      a.f.indexOf(t) > -1 &&
                        u.includes(n) &&
                        (e.pageFeature.showMultiStoreRecommend = !1);
                    }),
                    (c = o(c, e.marketing)),
                    Object.keys(i).forEach((t) => {
                      i[t] = o(i[t], e.marketing);
                    }),
                    {
                      umpActivity: r,
                      currentActivity: c,
                      marketActivity: i,
                      promotionActivity: s,
                    }
                  );
                })(t);
              this.goodsActivity = u;
              var v = [],
                { umpActivity: m, currentActivity: y = {} } = g;
              Object.getOwnPropertyNames(m).forEach((e) => {
                v.push(
                  ((e) => {
                    var {
                      type: t = "",
                      couponPreferenceModels: n = [],
                      id: r,
                      activityId: o,
                      alias: i,
                      activityAlias: s,
                    } = e;
                    switch (t) {
                      case a.a.COUPON:
                        return {
                          act_id: n.map((e) => e.id).join(","),
                          act_type: t,
                        };
                      default:
                        return { act_type: t, act_id: r || o || i || s || "" };
                    }
                  })(m[e])
                );
              }),
                e.logger.log({
                  et: "custom",
                  ei: "view_goods",
                  params: { ump_params: v },
                }),
                (n = h.isCoupon);
              var { showGiftBtn: b } = p,
                _ = d(0, i, 0, 0, b, h),
                S = ((e, t, n, o, i) => {
                  var { currentActivity: c = {} } = e,
                    {
                      type: u,
                      subType: d,
                      ladderPrice: l = {},
                      activityLeadInMembershipInfo: p,
                    } = c;
                  if (u === a.a.TIMELIMITED_DISCOUNT && !!p)
                    return Object(r.a)({}, n);
                  var h = d || u;
                  if (!h) return n;
                  var f = {},
                    g = "ladderGroupOn" === h;
                  if (g) {
                    var v = -1,
                      m = -1;
                    Object.keys(l).forEach((e) => {
                      l[e].forEach((e) => {
                        var { skuPrice: t } = e;
                        (v = v < 0 ? t : Math.min(v, t)),
                          (m = m < 0 ? t : Math.max(m, t));
                      });
                    }),
                      (f = { ladderMinPrice: v, ladderMaxPrice: m });
                  }
                  var y = t[h],
                    {
                      price: b,
                      minPrice: _,
                      maxPrice: S,
                      oldPrice: O,
                      oldMinPrice: w,
                      oldMaxPrice: P,
                      tags: I = [],
                      maxDepositPrice: k,
                      minDepositPrice: C,
                      startPrice: T,
                      stockNum: x,
                    } = y,
                    j = !!h && a.h.indexOf(h) > -1,
                    A =
                      n.hideStock ||
                      ["seckill", "helpCut", "auction"].indexOf(h) > -1,
                    E = Object(r.a)(
                      {
                        hideStock: A,
                        showPriceBlock:
                          !!(() => {
                            var { presale: e } = i || {};
                            if (!!e) {
                              var { preSaleEnd: t } = e,
                                { joinActivityStatus: n } = c;
                              return (
                                t < Date.now() && +n === a.d.NOT_PARTICIPATE
                              );
                            }
                            return !1;
                          })() || !j,
                        price: s(b, _, S),
                        minPrice: g ? f.ladderMinPrice : _,
                        maxPrice: g ? f.ladderMaxPrice : S,
                        originPrice: s(O, w, P),
                        depositPrice: s(C, C, k),
                        originMinPrice: w,
                        originMaxPrice: P,
                        oldMinPrice: w,
                        oldMaxPrice: P,
                        tags: h === a.a.FCODE ? [] : I,
                        startPrice: T,
                      },
                      f,
                      { stockNum: x }
                    ),
                    D = {};
                  return (
                    h === a.a.FCODE && ((D.soldNum = 0), (D.stockNum = 1)),
                    Object(r.a)({}, n, E, D)
                  );
                })(g, _, c, 0, u);
              (this.marketing = l), (this.currentActivity = y);
              var O = f.find((e) => e.type === a.a.FANS_BENEFIT),
                w = f.find((e) => e.type === a.a.WECOM_FANS_BENEFIT),
                P = f.find((e) => e.type === a.a.SHARE_ENCOURAGE);
              return (
                this.setCtxData(
                  Object(r.a)({}, g, {
                    fansBenefit: O,
                    wecomFansBenefit: w,
                    isGroupOn: y.type === a.a.GROUP_ON,
                    seActivity: P,
                    buttonUmpTimelimitModel:
                      this.marketing.buttonUmpTimelimitModel,
                    isCoupon: n,
                    isNotPresent: y.type !== a.a.PRESENT_EXCHANGE,
                    marketing: this.marketing,
                  })
                ),
                Object(r.a)({}, t, { umpActivityData: g, sku: _, priceInfo: S })
              );
            } catch (t) {
              throw (
                ((t.message =
                  ((I = "处理营销数据异常"),
                  (k = "parseUmpActivies"),
                  (C = t.message),
                  "goods-detail_ump_page-setup: " +
                    I +
                    ", " +
                    k +
                    ", " +
                    C.toString())),
                e.hummer && e.hummer.capture(t),
                t)
              );
            }
            var I, k, C;
          },
        }),
      };
    },
    "3Hke": function (e, t, n) {
      n.d(t, "a", function () {
        return u;
      });
      var r = n("SVbq"),
        a = n("mQXz"),
        o = n.n(a),
        i = n("w2Y9"),
        s = n.n(i),
        c = n("u8kV");
      function u() {
        var e = Object(c.d)(),
          t =
            "/" +
            encodeURIComponent(
              s.a.add(e.route, o()(e.options || {}, "subKdtId"))
            );
        return Object(r.m)({ redirectUrl: t });
      }
    },
    "3KXO": function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = function (e) {
          try {
            return e(["goods-detail", "trade-buy", "buy", "goods-detail_v2"]);
          } catch (e) {
            return [];
          }
        },
        a = function (e) {
          return r(e).some(function (e) {
            return e.hasDesignV1 || e.hasDesignV2;
          });
        },
        o = function (e) {
          return r(e)
            .map(function (e) {
              return (e.designAppsV1 || []).concat(e.designAppsV2 || []);
            })
            .flat();
        };
    },
    "3XjN": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        a = (r = n("O1uH")) && r.__esModule ? r : { default: r };
      var o = function (e, t) {
        return Array.isArray(e)
          ? 0 !== e.length
            ? (0, a.default)(e, t, function (e, t) {
                return e > t;
              })
            : void 0
          : e;
      };
      (t.default = o), (e.exports = t.default);
    },
    "3hrn": function (e, t) {},
    "3t/z": function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n("US/N"),
        a = n("tS13"),
        o = n("+66q");
      function i(e) {
        var { alias: t, kdtId: n, source: a } = e;
        return Promise.resolve(r).then((e) =>
          e.default({
            path: "/wscgoods/getCoupon.json",
            data: {
              alias: t,
              kdtId: n,
              source: a,
              requestId: t + "-" + new Date().getTime(),
            },
            withCredentials: !0,
          })
        );
      }
      function s(e, t) {
        var { skuId: n, kdtId: r, num: s, isAbleGetCoupons: c = !0 } = e,
          {
            isCoupon: u,
            umpActivity: d,
            isGroupOn: l,
            skuShowData: p,
            isGift: h,
            query: f,
            goodsEstimatePriceData: g,
          } = t,
          {
            activityType: v,
            activityAlias: m,
            activityId: y,
            activityCode: b,
          } = e,
          { num: _ } = g;
        o.f.indexOf(v) > -1 &&
          Object.assign(e.commonExtra, {
            activity_type: b || 0,
            activity_id: y,
            activity_alias: m,
          }),
          v === o.a.FCODE && (e.goodsExtra.fcode = f.f_code);
        var S = !h && l && p.skuScene === a.c.SEL_SKU,
          O = null,
          w = !1;
        if (null != g && g.estimatedPriceCoupon) {
          var { isHoldCoupon: P } = g.estimatedPriceCoupon;
          w = !P && s >= _ && s <= 4;
        }
        if (u && !S) {
          var {
            coupon: { couponPreferenceModels: I, couponSkuPrices: k },
          } = d;
          I.length && (O = I[0].alias);
          var C = {};
          (k || []).forEach((e) => {
            C[e.skuId] = {
              preferentialCoupon: e.useThresholdAndValueCopywriting,
              activityAlias: e.activityAlias,
            };
          }),
            C[n] && (O = C[n].activityAlias);
        } else if (w) {
          var { alias: T } = g.estimatedPriceCoupon;
          O = T;
        }
        return (
          h && ((e.commonExtra.order_type = 1), (e.activityType = 0)),
          O && c
            ? i({ alias: O, kdtId: r, source: "goods_details_auto_take" })
                .then(
                  () => (
                    (e.commonExtra.preToastDesc =
                      "已为你领取1张优惠券，下单享优惠"),
                    e
                  )
                )
                .catch(function (t) {
                  void 0 === t && (t = { msg: "领取失败" });
                  var { msg: n } = t;
                  return (e.commonExtra.preToastDesc = n), e;
                })
            : e
        );
      }
    },
    "3uds": function (e, t, n) {
      n.d(t, "d", function () {
        return r;
      }),
        n.d(t, "e", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return s;
        });
      var r = "showcase-container:pulldown-refresh",
        a = "showcase-container:reach-bottom",
        o = "showcase-container:page-show",
        i = "showcase-container:page-hide",
        s = ["hot_words_reference"];
    },
    "3vAz": function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return o;
        });
      var r = {
          timelimitedDiscount: "timelimitedDiscount",
          discountInvite: "discountInvite",
          discount: "discount",
          customerDiscount: "customerDiscount",
          groupOn: "groupOn",
          points: "points",
          luckyDrawGroup: "luckyDrawGroup",
          helpCut: "helpCut",
          tuan: "tuan",
          seckill: "seckill",
          auction: "auction",
          fCode: "fCode",
          present: "present",
          inSourcingFission: "inSourcingFission",
          presale: "presale",
        },
        a = {
          timelimitedDiscount: 0,
          groupOn: 2,
          ladderGroupOn: 2,
          customerDiscount: 1,
          discount: 1,
          deposit: 3,
          depositExpansion: 3,
          fullPresale: 3,
          coupon: 4,
          goods: 4,
        },
        o = {
          限时折扣:
            "https://img01.yzcdn.cn/public_files/1cc2801e6115af3436a32bbeabc5e9ec.png",
          第2件0元:
            "https://img01.yzcdn.cn/public_files/63e4b5cf4ae78487a826297c88dfff7f.png",
          第2件半价:
            "https://img01.yzcdn.cn/public_files/5719476db7b0ab18aeec5c9203f3a10c.png",
          秒杀: "https://img01.yzcdn.cn/upload_files/2024/05/09/FnR8qYHL0tdZcImf6DE8aSBK1F5G.png",
        };
    },
    "42EB": function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("Fcif");
      function a(e) {
        void 0 === e && (e = []),
          this.__webviewMsg || (this.__webviewMsg = {}),
          e
            .filter((e) => "object" == typeof e && e.type)
            .forEach((e) => {
              var { type: t, payload: n, config: a } = e;
              "object" != typeof (n = n || a || {}) && (n = { payload: n }),
                (this.__webviewMsg[t] = Object(r.a)(
                  {},
                  this.__webviewMsg[t] || {},
                  n
                ));
            });
      }
    },
    "49Kr": function (e, t, n) {
      var r = n("zHBu"),
        a = n("VlGz"),
        o =
          /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        i = /[\n\r\t]/g,
        s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        c = /:\d+$/,
        u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        d = /^[a-zA-Z]:/;
      function l(e) {
        return (e || "").toString().replace(o, "");
      }
      var p = [
          ["#", "hash"],
          ["?", "query"],
          function (e, t) {
            return g(t.protocol) ? e.replace(/\\/g, "/") : e;
          },
          ["/", "pathname"],
          ["@", "auth", 1],
          [NaN, "host", void 0, 1, 1],
          [/:(\d*)$/, "port", void 0, 1],
          [NaN, "hostname", void 0, 1, 1],
        ],
        h = { hash: 1, query: 1 };
      function f(e) {
        var t,
          n =
            ("undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : {}
            ).location || {},
          r = {},
          a = typeof (e = e || n);
        if ("blob:" === e.protocol) r = new m(unescape(e.pathname), {});
        else if ("string" === a) for (t in ((r = new m(e, {})), h)) delete r[t];
        else if ("object" === a) {
          for (t in e) t in h || (r[t] = e[t]);
          void 0 === r.slashes && (r.slashes = s.test(e.href));
        }
        return r;
      }
      function g(e) {
        return (
          "file:" === e ||
          "ftp:" === e ||
          "http:" === e ||
          "https:" === e ||
          "ws:" === e ||
          "wss:" === e
        );
      }
      function v(e, t) {
        (e = (e = l(e)).replace(i, "")), (t = t || {});
        var n,
          r = u.exec(e),
          a = r[1] ? r[1].toLowerCase() : "",
          o = !!r[2],
          s = !!r[3],
          c = 0;
        return (
          o
            ? s
              ? ((n = r[2] + r[3] + r[4]), (c = r[2].length + r[3].length))
              : ((n = r[2] + r[4]), (c = r[2].length))
            : s
            ? ((n = r[3] + r[4]), (c = r[3].length))
            : (n = r[4]),
          "file:" === a
            ? c >= 2 && (n = n.slice(2))
            : g(a)
            ? (n = r[4])
            : a
            ? o && (n = n.slice(2))
            : c >= 2 && g(t.protocol) && (n = r[4]),
          { protocol: a, slashes: o || g(a), slashesCount: c, rest: n }
        );
      }
      function m(e, t, n) {
        if (((e = (e = l(e)).replace(i, "")), !(this instanceof m)))
          return new m(e, t, n);
        var o,
          s,
          c,
          u,
          h,
          y,
          b = p.slice(),
          _ = typeof t,
          S = this,
          O = 0;
        for (
          "object" !== _ && "string" !== _ && ((n = t), (t = null)),
            n && "function" != typeof n && (n = a.parse),
            o = !(s = v(e || "", (t = f(t)))).protocol && !s.slashes,
            S.slashes = s.slashes || (o && t.slashes),
            S.protocol = s.protocol || t.protocol || "",
            e = s.rest,
            (("file:" === s.protocol && (2 !== s.slashesCount || d.test(e))) ||
              (!s.slashes &&
                (s.protocol || s.slashesCount < 2 || !g(S.protocol)))) &&
              (b[3] = [/(.*)/, "pathname"]);
          O < b.length;
          O++
        )
          "function" != typeof (u = b[O])
            ? ((c = u[0]),
              (y = u[1]),
              c != c
                ? (S[y] = e)
                : "string" == typeof c
                ? ~(h = "@" === c ? e.lastIndexOf(c) : e.indexOf(c)) &&
                  ("number" == typeof u[2]
                    ? ((S[y] = e.slice(0, h)), (e = e.slice(h + u[2])))
                    : ((S[y] = e.slice(h)), (e = e.slice(0, h))))
                : (h = c.exec(e)) && ((S[y] = h[1]), (e = e.slice(0, h.index))),
              (S[y] = S[y] || (o && u[3] && t[y]) || ""),
              u[4] && (S[y] = S[y].toLowerCase()))
            : (e = u(e, S));
        n && (S.query = n(S.query)),
          o &&
            t.slashes &&
            "/" !== S.pathname.charAt(0) &&
            ("" !== S.pathname || "" !== t.pathname) &&
            (S.pathname = (function (e, t) {
              if ("" === e) return t;
              for (
                var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")),
                  r = n.length,
                  a = n[r - 1],
                  o = !1,
                  i = 0;
                r--;

              )
                "." === n[r]
                  ? n.splice(r, 1)
                  : ".." === n[r]
                  ? (n.splice(r, 1), i++)
                  : i && (0 === r && (o = !0), n.splice(r, 1), i--);
              return (
                o && n.unshift(""),
                ("." !== a && ".." !== a) || n.push(""),
                n.join("/")
              );
            })(S.pathname, t.pathname)),
          "/" !== S.pathname.charAt(0) &&
            g(S.protocol) &&
            (S.pathname = "/" + S.pathname),
          r(S.port, S.protocol) || ((S.host = S.hostname), (S.port = "")),
          (S.username = S.password = ""),
          S.auth &&
            (~(h = S.auth.indexOf(":"))
              ? ((S.username = S.auth.slice(0, h)),
                (S.username = encodeURIComponent(
                  decodeURIComponent(S.username)
                )),
                (S.password = S.auth.slice(h + 1)),
                (S.password = encodeURIComponent(
                  decodeURIComponent(S.password)
                )))
              : (S.username = encodeURIComponent(decodeURIComponent(S.auth))),
            (S.auth = S.password ? S.username + ":" + S.password : S.username)),
          (S.origin =
            "file:" !== S.protocol && g(S.protocol) && S.host
              ? S.protocol + "//" + S.host
              : "null"),
          (S.href = S.toString());
      }
      (m.prototype = {
        set: function (e, t, n) {
          var o = this;
          switch (e) {
            case "query":
              "string" == typeof t && t.length && (t = (n || a.parse)(t)),
                (o[e] = t);
              break;
            case "port":
              (o[e] = t),
                r(t, o.protocol)
                  ? t && (o.host = o.hostname + ":" + t)
                  : ((o.host = o.hostname), (o[e] = ""));
              break;
            case "hostname":
              (o[e] = t), o.port && (t += ":" + o.port), (o.host = t);
              break;
            case "host":
              (o[e] = t),
                c.test(t)
                  ? ((t = t.split(":")),
                    (o.port = t.pop()),
                    (o.hostname = t.join(":")))
                  : ((o.hostname = t), (o.port = ""));
              break;
            case "protocol":
              (o.protocol = t.toLowerCase()), (o.slashes = !n);
              break;
            case "pathname":
            case "hash":
              if (t) {
                var i = "pathname" === e ? "/" : "#";
                o[e] = t.charAt(0) !== i ? i + t : t;
              } else o[e] = t;
              break;
            case "username":
            case "password":
              o[e] = encodeURIComponent(t);
              break;
            case "auth":
              var s = t.indexOf(":");
              ~s
                ? ((o.username = t.slice(0, s)),
                  (o.username = encodeURIComponent(
                    decodeURIComponent(o.username)
                  )),
                  (o.password = t.slice(s + 1)),
                  (o.password = encodeURIComponent(
                    decodeURIComponent(o.password)
                  )))
                : (o.username = encodeURIComponent(decodeURIComponent(t)));
          }
          for (var u = 0; u < p.length; u++) {
            var d = p[u];
            d[4] && (o[d[1]] = o[d[1]].toLowerCase());
          }
          return (
            (o.auth = o.password ? o.username + ":" + o.password : o.username),
            (o.origin =
              "file:" !== o.protocol && g(o.protocol) && o.host
                ? o.protocol + "//" + o.host
                : "null"),
            (o.href = o.toString()),
            o
          );
        },
        toString: function (e) {
          (e && "function" == typeof e) || (e = a.stringify);
          var t,
            n = this,
            r = n.host,
            o = n.protocol;
          o && ":" !== o.charAt(o.length - 1) && (o += ":");
          var i = o + ((n.protocol && n.slashes) || g(n.protocol) ? "//" : "");
          return (
            n.username
              ? ((i += n.username),
                n.password && (i += ":" + n.password),
                (i += "@"))
              : n.password
              ? ((i += ":" + n.password), (i += "@"))
              : "file:" !== n.protocol &&
                g(n.protocol) &&
                !r &&
                "/" !== n.pathname &&
                (i += "@"),
            (":" === r[r.length - 1] || (c.test(n.hostname) && !n.port)) &&
              (r += ":"),
            (i += r + n.pathname),
            (t = "object" == typeof n.query ? e(n.query) : n.query) &&
              (i += "?" !== t.charAt(0) ? "?" + t : t),
            n.hash && (i += n.hash),
            i
          );
        },
      }),
        (m.extractProtocol = v),
        (m.location = f),
        (m.trimLeft = l),
        (m.qs = a),
        (e.exports = m);
    },
    "4Kfr": function (e, t, n) {
      function r() {
        try {
          var e = getApp(),
            t = (null == getCurrentPages ? void 0 : getCurrentPages()) || [],
            n = t.length > 0 ? t[t.length - 1] : {},
            r = (null == n ? void 0 : n.options) || {};
          if (null != r && r.from_params)
            return (null == e ? void 0 : e.getBuyerId()) || "";
        } catch (e) {}
        return "";
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    "4XQZ": function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("wB7X"),
        a = {
          show: Boolean,
          title: String,
          message: String,
          useSlot: Boolean,
          className: String,
          customStyle: String,
          asyncClose: Boolean,
          messageAlign: String,
          overlayStyle: String,
          useTitleSlot: Boolean,
          showCancelButton: Boolean,
          closeOnClickOverlay: Boolean,
          confirmButtonOpenType: String,
          width: { type: null, default: 320 },
          zIndex: { type: Number, default: 2e3 },
          confirmButtonText: { type: String, default: "确认" },
          cancelButtonText: { type: String, default: "取消" },
          confirmButtonColor: { type: String, default: r.f },
          cancelButtonColor: { type: String, default: r.b },
          showConfirmButton: { type: Boolean, default: !0 },
          overlay: { type: Boolean, default: !0 },
          transition: { type: String, default: "scale" },
          isPageDefault: Boolean,
        };
    },
    "4a20": function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    "4cW6": function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        });
      n("bb6g"), n("Tewj");
      var r = n("Br49"),
        a = (r.a, r.c),
        o = r.b;
    },
    "4mhO": function (e, t) {
      e.exports = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
    },
    "5+rW": function (e, t, n) {
      var r = new RegExp("(%[a-f0-9]{2})|([^%]+?)", "gi"),
        a = new RegExp("(%[a-f0-9]{2})+", "gi");
      function o(e, t) {
        try {
          return [decodeURIComponent(e.join(""))];
        } catch (e) {}
        if (1 === e.length) return e;
        t = t || 1;
        var n = e.slice(0, t),
          r = e.slice(t);
        return Array.prototype.concat.call([], o(n), o(r));
      }
      function i(e) {
        try {
          return decodeURIComponent(e);
        } catch (a) {
          for (var t = e.match(r) || [], n = 1; n < t.length; n++)
            t = (e = o(t, n).join("")).match(r) || [];
          return e;
        }
      }
      e.exports = function (e) {
        if ("string" != typeof e)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof e +
              "`"
          );
        try {
          return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
        } catch (t) {
          return (function (e) {
            for (
              var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = a.exec(e);
              n;

            ) {
              try {
                t[n[0]] = decodeURIComponent(n[0]);
              } catch (e) {
                var r = i(n[0]);
                r !== n[0] && (t[n[0]] = r);
              }
              n = a.exec(e);
            }
            t["%C2"] = "�";
            for (var o = Object.keys(t), s = 0; s < o.length; s++) {
              var c = o[s];
              e = e.replace(new RegExp(c, "g"), t[c]);
            }
            return e;
          })(e);
        }
      };
    },
    "5HXs": function (e, t, n) {
      function r(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("string" == typeof e) return (t + e).trim();
        var n = Array.isArray(e)
          ? e
          : Object.keys(e).filter(function (t) {
              return e[t];
            });
        return n.reduce(function (e, n) {
          return "".concat(e ? "".concat(e, " ") : "").concat(t + n);
        }, "");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = function (e) {
        var t = e.prefix,
          n = void 0 === t ? "" : t,
          a = e.block,
          o = e.elementPrefix,
          i = void 0 === o ? "__" : o,
          s = e.modifierPrefix,
          c = void 0 === s ? "--" : s;
        return function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            s = "".concat(n).concat(a),
            u = e ? r(e, s + i) : "",
            d = t && !u ? " ".concat(r(t, s + c)) : "",
            l = t && u ? " ".concat(r(t, u + c)) : "",
            p = o ? " ".concat(r(o)) : "",
            h = e ? u + l : s + d;
          return (h + p).trim();
        };
      };
      (t.default = a), (e.exports = t.default);
    },
    "5JV4": function (e, t, n) {
      n.d(t, "a", function () {
        return d;
      });
      var r = n("9ZMt"),
        a = n("MLLI"),
        o = Object(a.b)(),
        i = {
          bottom: 58,
          height: 32,
          left: 278,
          right: 365,
          top: 26,
          width: 87,
        },
        s = { inited: !1, rectInfo: {} },
        c = () => {
          var e,
            { statusBarHeight: t = 20, system: n } = o,
            a = t + (/android/i.test(n) ? 48 : 44);
          try {
            e = r.default.$native.getMenuButtonBoundingClientRect();
          } catch (e) {}
          return (
            e || (e = Object.create(null)),
            (e.top = e.top || a),
            (s.rectInfo = e),
            (s.inited = !0),
            e
          );
        },
        u = Object.create(null);
      function d() {
        var { top: e, height: t } = u,
          { statusBarHeight: n = 20 } = o,
          r = e - n + 6 + t + n;
        return r <= 105 ? r : 105;
      }
      Object.keys(i).forEach((e) => {
        Object.defineProperty(u, e, {
          get() {
            if (!s.inited || (!s.rectInfo[e] && "canUseNav" !== e)) {
              var t = c()[e];
              return t || !1 === t ? t : (setTimeout(c, 300), i[e]);
            }
            return s.rectInfo[e];
          },
        });
      });
    },
    "5kn2": function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return H;
        }),
        n.d(t, "b", function () {
          return I;
        });
      var r,
        a,
        o,
        i,
        s = n("Y28S"),
        c = n("w2Y9"),
        u = n.n(c),
        d = n("9DIb"),
        l = n.n(d),
        p = n("tuFO"),
        h = n.n(p),
        f = function () {
          return (f =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        g = "salesman_advance_personal_space_ability",
        v = "/wscsalesman/salesman/shop/checkShopAbility.json",
        m = "/wscsalesman/bind-customer.json",
        y = "/wscump/salesman/share.json",
        b = function () {},
        _ = (function () {
          function e(e) {
            var t = e.kdtId,
              n = void 0 === t ? "" : t,
              r = e.rootKdtId,
              a = e.buyerId,
              o = e.guideBindSourceType,
              i = e.st,
              s = e.buildEnv,
              c = e.runEnv,
              u = e.path,
              d = e.query,
              l = void 0 === d ? {} : d,
              p = e.fromSeller,
              h = e.shareInfo,
              f = void 0 === h ? {} : h,
              g = e.goodsInfo,
              v = void 0 === g ? {} : g,
              m = e.shareData,
              y = void 0 === m ? {} : m,
              _ = e.rightsInfo,
              S = void 0 === _ ? {} : _,
              O = e.scenes,
              w = void 0 === O ? "" : O,
              P = e.smartTextData,
              I = e.nativeAjax,
              k =
                void 0 === I
                  ? function () {
                      return Promise.resolve();
                    }
                  : I,
              C = e.nativeAjaxUseCdn,
              T =
                void 0 === C
                  ? function () {
                      return Promise.resolve();
                    }
                  : C,
              x = e.nativeMonitor,
              j = void 0 === x ? b : x,
              A = e.nativeLogger,
              E = void 0 === A ? b : A,
              D = e.nativeNavigate,
              M = void 0 === D ? b : D,
              N = e.nativeYunExtension,
              L =
                void 0 === N
                  ? function () {
                      return Promise.resolve([]);
                    }
                  : N,
              R = e.h5UrlLogParams,
              B = void 0 === R ? {} : R,
              U = e.h5SetShareData,
              F = void 0 === U ? b : U,
              G = e.hasGuideMaterial,
              H = void 0 !== G && G,
              q = e.offlineId,
              z = void 0 === q ? "" : q;
            (this.kdtId = n),
              (this.rootKdtId = r || this.getKdtId()),
              (this.buyerId = a),
              (this.buildEnv = s),
              (this.st = i || l.st || 1),
              (this.guideBindSourceType = o || 14),
              (this.runEnv = c || s),
              (this.path = u),
              (this.query = l),
              (this.fromSeller = p || l.fromSeller || l.sl || l.sls),
              (this.shareInfo = f),
              (this.goodsInfo = v),
              (this.shareData = y),
              (this.rightsInfo = S),
              (this.scenes = w),
              (this.smartTextData = P),
              (this.nativeLogger = E),
              (this.nativeNavigate = M),
              (this.nativeYunExtension = L),
              (this.nativeAjax = k),
              (this.nativeAjaxUseCdn = T),
              (this.nativeMonitor = j),
              (this.h5UrlLogParams = B),
              (this.h5SetShareData = F),
              (this.hasGuideMaterial = H),
              (this.offlineId = z),
              (this.shopAbilities = {}),
              this.updateAbility(this.getKdtId());
          }
          return (
            (e.prototype.update = function (e, t) {
              "kdtId" === e && this.updateAbility(t), (this[e] = t);
            }),
            (e.prototype.batchUpdate = function (e) {
              var t = this;
              Object.keys(e).forEach(function (n) {
                "kdtId" === n && t.updateAbility(e[n]), (t[n] = e[n]);
              });
            }),
            (e.prototype.getKdtId = function () {
              return "function" == typeof this.kdtId
                ? this.kdtId()
                : this.kdtId;
            }),
            (e.prototype.getBuyerId = function () {
              return "function" == typeof this.buyerId
                ? this.buyerId()
                : this.buyerId;
            }),
            (e.prototype.monitor = function (e) {
              return (
                void 0 === e && (e = {}),
                this.nativeMonitor({
                  appName: "wsc-h5-salesman",
                  logIndex: "wsc_wap_salesman_share_track",
                  topic: "front",
                  extra: f(
                    {
                      kdtId: this.getKdtId(),
                      type: this.buildEnv,
                      buyerId: this.getBuyerId(),
                    },
                    e
                  ),
                })
              );
            }),
            (e.prototype.ajax = function (e) {
              return (e.url = e.path), this.nativeAjax(e);
            }),
            (e.prototype.navigate = function (e) {
              if ("web" === this.buildEnv) return this.nativeNavigate(e);
              var t = e.url,
                n = e.weappUrl,
                r = e.qqUrl,
                a = "";
              switch (!0) {
                case "weapp" === this.buildEnv:
                  a = n || t;
                  break;
                case "qq" === this.buildEnv:
                  a = r || t;
              }
              return this.nativeNavigate({ url: a });
            }),
            (e.prototype.updateAbility = function (e) {
              this.getKdtId() !== e && this.getShopAbility(e, g);
            }),
            (e.prototype.getShopAbility = function (e, t) {
              var n = this;
              if (e) {
                var r = {
                  data: { kdtId: e, abilityName: t },
                  method: "GET",
                  url: v,
                  path: v,
                };
                return this.nativeAjaxUseCdn(r)
                  .then(function (e) {
                    var r;
                    return (
                      n.update(
                        "shopAbilities",
                        f(f({}, n.shopAbilities), (((r = {})[t] = e.valid), r))
                      ),
                      Promise.resolve(e.valid)
                    );
                  })
                  .catch(function () {
                    return Promise.resolve(!1);
                  });
              }
            }),
            e
          );
        })(),
        S =
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        O = function () {
          return (O =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        w = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            S(t, e),
            (t.getCubeShow = function (e) {
              var t = e.share,
                n = e.freedomShare;
              return t || n;
            }),
            (t.prototype.handleLog = function (e, n) {
              if (
                (void 0 === e && (e = {}),
                void 0 === n && (n = {}),
                this.shareData && t.getCubeShow(this.shareData))
              ) {
                var r = this.scenes,
                  a = this.shareData,
                  o = this.getKdtId(),
                  i = this.goodsInfo || {},
                  s = i.id || i.goodsId || i.itemId,
                  c = (a || n).seller,
                  u = a || n,
                  d = u.sl,
                  l = u.salesmanType;
                c = c || d;
                var p = e.params,
                  h = o + "-" + c;
                (e.params = O(
                  O(
                    {
                      scenes: r,
                      sl: c,
                      mark: h,
                      goods_id: s,
                      salesman_type: l,
                    },
                    p
                  ),
                  n
                )),
                  this.nativeLogger(e);
              }
            }),
            (t.prototype.getH5GoodsUrl = function (e, t, n, r) {
              void 0 === n && (n = {}), void 0 === r && (r = !0);
              var a = "";
              if (
                ((e = e || this.goodsInfo),
                (t = t || this.shareData),
                r && window && window.location && window.location.href)
              )
                (a = window.location.href),
                  (a = u.a.remove(a, "sid")),
                  (a = u.a.remove(a, "isWeapp")),
                  (a = u.a.remove(a, "hide_buy_btn"));
              else if (e.alias) {
                var o = e.alias,
                  i = e.goodsActivityInfo || {},
                  c = i.activityType,
                  d = i.activityAlias,
                  l = i.type,
                  p = i.activityId;
                if (
                  ((a = h()(
                    "wscgoods/detail/" + o,
                    "h5",
                    this.getKdtId() || ""
                  )),
                  l || c)
                ) {
                  var f = {
                    ump_type: l || c,
                    ump_alias: d,
                    activityType: l || c,
                    activityId: p,
                  };
                  "seckill" === f.activityType && delete f.activityId,
                    (a = u.a.add(a, f));
                }
              }
              var g = O(
                O(
                  O(
                    {},
                    Object(s.c)({
                      sl: t.seller || "",
                      kdtId: this.getKdtId() || "",
                    })
                  ),
                  { sub_kdt_id: this.getKdtId() || t.dsKdtId }
                ),
                n
              );
              return u.a.add(a, g);
            }),
            (t.prototype.getWeappGoodsPath = function (e) {
              var t = e || {},
                n = t.activityType,
                r = void 0 === n ? 0 : n,
                a = t.activityAlias,
                o = void 0 === a ? "" : a,
                i = t.activityId,
                s = void 0 === i ? 0 : i,
                c = t.goodsAlias,
                u = void 0 === c ? "" : c,
                d = t.alias,
                l = { alias: u || (void 0 === d ? "" : d) };
              return (
                6 === r &&
                  (l = O(O({}, l), {
                    activityType: "seckill",
                    umpAlias: o,
                    umpType: "seckill",
                  })),
                21 === r &&
                  (l = O(O({}, l), { activityType: "helpCut", activityId: s })),
                { basePath: "packages/goods/detail/index", query: l }
              );
            }),
            (t.prototype.setShareOption = function (e, t) {
              if ("web" === this.buildEnv) {
                var n = O(O({}, this.shareInfo), e),
                  r = n.url;
                r ||
                  (r = this.goodsInfo.alias
                    ? this.getH5GoodsUrl()
                    : window.location.href),
                  (r = u.a.add(r, { st: this.st }));
                var a = {
                  link: (r = Object(s.a)({
                    url: r,
                    sl: this.shareData.seller,
                    kdtId: this.getKdtId(),
                    shareParams: this.h5UrlLogParams,
                  })),
                };
                if (
                  (n.title && (a.title = "[分享]" + n.title),
                  n.cover && ((a.cover = n.cover), (a.imgUrl = n.cover)),
                  n.desc && (a.desc = n.desc),
                  this.update("shareInfo", O(O({}, a), { url: r })),
                  !t)
                )
                  return;
                this.h5SetShareData(a);
              }
            }),
            t
          );
        })(_),
        P = function (e) {
          return {
            et: "click",
            ei: "share",
            en: "分享",
            params: { share_type: "salesman", share_cmpt: e },
          };
        },
        I = {
          nativeCustom: P("native_custom"),
          poster: P("poster"),
          copylink: P("copylink"),
          copyWeappLink: P("weapp_link"),
          qrCode: P("qr_code"),
          miniprogram: P("miniprogram"),
          savepictures: P("savepictures"),
          clickShare: {
            et: "click",
            ei: "sales_money",
            en: "点赚字",
            params: { version: "v2" },
          },
          salesMoneyView: {
            et: "view",
            ei: "salesmoney_view",
            en: "赚字曝光",
            params: { version: "v2" },
          },
        },
        k = ["salesman_coupon"],
        C = {
          Goods: "goods",
          BenefitCard: "benefit_card",
          ShopNote: "shop_note",
          Feature: "feature",
          FeaturePage: "feature_page",
          HomePage: "home_page",
          SalesmanZone: "zone",
          SalesmanGoods: "salesman_goods",
          SalesmanCoupon: "salesman_coupon",
        },
        T =
          (((a = {})[C.Goods] = "商品"),
          (a[C.Feature] = "微页面"),
          (a[C.FeaturePage] = "微页面"),
          (a[C.HomePage] = "首页"),
          a),
        x = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        j = function () {
          return (j =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        A = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            x(t, e),
            (t.prototype.bindRelation = function () {
              var e = this,
                t = this.fromSeller,
                n = this.st,
                r = this.guideBindSourceType,
                a = void 0 === r ? 14 : r,
                o = (this.query || {}).from_params;
              if (t) {
                this.monitor({
                  url: m,
                  path: this.path,
                  sellerFrom: t,
                  guideBindSourceType: a,
                  bindSourceType: n,
                });
                var i = function () {
                  return e.ajax({
                    path: m,
                    method: "POST",
                    data: {
                      sellerFrom: t,
                      guideBindSourceType: a,
                      bindSourceType: n,
                      fromParams: o,
                    },
                  });
                };
                return i().catch(i);
              }
              return Promise.resolve();
            }),
            (t.prototype.getShareData = function () {
              var e = this,
                t = { type: "NORMAL" };
              return (
                this.goodsInfo.id && (t.goodsId = this.goodsInfo.id),
                "web" === this.buildEnv &&
                  (t.redirectUrl = encodeURIComponent(window.location.href)),
                this.monitor({ path: this.path, url: y }),
                this.ajax({
                  path: y,
                  data: t,
                  config: { cache: !0, expire: 10 },
                }).then(function (t) {
                  var n = l()(t);
                  return (
                    (n.isShoppingGuide = 1 === n.salesmanType),
                    e.update("shareData", n),
                    k.includes(e.scenes) && e.update("kdtId", n.dsKdtId),
                    e.handleLog(I.salesMoneyView),
                    n
                  );
                })
              );
            }),
            (t.prototype.getSmartText = function (e) {
              var t = this;
              return this.ajax({
                path: "/wscsalesman/common-api/smart-text/getSmartText.json",
                method: "GET",
                data: e,
              }).then(function (e) {
                return t.update("smartTextData", e), e;
              });
            }),
            (t.prototype.getShareMoney = function (e, t, n) {
              var r = { goodsId: e },
                a = "/guide/salesman-cube/getShareMoney.json";
              t &&
                (r.rateShareList = t
                  .filter(function (e) {
                    return !!e.stockNum;
                  })
                  .map(function (e) {
                    return { skuId: e.id, price: e.price };
                  })),
                n &&
                  ((a = "/guide/goods/batchBudgetCommission.json"),
                  (r.budgetGoods = [
                    { goodsId: e, minPrice: n.minPrice, maxPrice: n.maxPrice },
                  ]));
              var o = this.shareData.salesmanType === i.Guide,
                s = o
                  ? a
                  : "/wscsalesman/share-icon/share-money/getShareMoney.json";
              return (
                o &&
                  this.shareInfo.shortLinkKdtId &&
                  (r.shareKdtId = this.shareInfo.shortLinkKdtId),
                this.ajax({
                  path: s,
                  method: "POST",
                  data: r,
                  contentType: "application/json",
                })
              );
            }),
            (t.prototype.getShareMoneyRange = function (e, t, n) {
              var r = { goodsId: e, showPoints: !0 };
              t &&
                (r.rateShareList = t
                  .filter(function (e) {
                    return !!e.stockNum;
                  })
                  .map(function (e) {
                    return { skuId: e.id, price: e.price };
                  })),
                n && (r = j(j({}, r), n));
              return this.ajax({
                path: "/wscsalesman/share-icon/share-money/getShareMoneyV2.json",
                method: "POST",
                data: r,
                contentType: "application/json",
              });
            }),
            (t.prototype.checkIconIsRecruitEntry = function (e) {
              return (
                void 0 === e && (e = function () {}),
                this.shareData.freedomShare
                  ? this.navigate({
                      url: h()(
                        "/wscump/salesman/tutorial?kdt_id=" + this.getKdtId(),
                        "h5",
                        this.getKdtId()
                      ),
                      weappUrl: "/packages/salesman/tutorial/index",
                    })
                  : e()
              );
            }),
            (t.prototype.subscribeMessage = function (e) {
              var t = this;
              if (
                (void 0 === e && (e = function () {}),
                "weapp" !== this.buildEnv || !wx.requestSubscribeMessage)
              )
                return e();
              this.ajax({ path: "/wscump/salesman/im/getSubMsg.json" })
                .then(function (n) {
                  if (Array.isArray(n) && n.length) {
                    ((r = n),
                    new Promise(function (e) {
                      wx.requestSubscribeMessage({
                        tmplIds: r,
                        success: function (t) {
                          "requestSubscribeMessage:ok" === t.errMsg
                            ? e(!0)
                            : e();
                        },
                        fail: function () {
                          e();
                        },
                      });
                    })).then(function (r) {
                      r &&
                        t.ajax({
                          path: "/wscump/salesman/im/subscriptionCallback.json",
                          method: "POST",
                          data: { scene: "salesmanOrder", templateIdList: n },
                        }),
                        e();
                    });
                  } else {
                    var r;
                    e();
                  }
                })
                .catch(e);
            }),
            (t.prototype.getTaxSignInfo = function () {
              return this.ajax({
                path: "/wscsalesman/common-api/assets/new-tax/getShopAndUserTaxInfo.json",
              });
            }),
            (t.prototype.getOpenAssistantData = function () {
              return this.ajax({
                path: "/wscsalesman/operation/salesman-aide/isNeedGuide.json",
                data: { isForCenter: !1 },
                method: "POST",
              });
            }),
            (t.prototype.getShopRights = function () {
              var e = this;
              return this.ajax({
                path: "/wscump/salesman/shop/checkShopRights.json",
              })
                .then(function (t) {
                  return e.update("rightsInfo", t), t;
                })
                .catch(function () {
                  return {};
                });
            }),
            (t.prototype.getNewBeginGuide = function () {
              return this.ajax({
                path: "/wscump/salesman/guide/is-success-guide.json",
                data: { type: 14 },
              });
            }),
            (t.prototype.completeNewBeginGuide = function () {
              return this.ajax({
                path: "/wscump/salesman/guide/add-success-guide.json",
                method: "POST",
                data: { type: 14 },
              });
            }),
            (t.prototype.publishMaterial = function (e) {
              return this.ajax({
                path: "/wscump/salesman/zone/publishMoments.json",
                method: "POST",
                data: e,
              })
                .then(function () {
                  return { material: 1 };
                })
                .catch(function () {
                  return { material: 0 };
                });
            }),
            (t.prototype.getShortUrl = function (e) {
              return this.ajax({
                path: "/wscshop/ump/salesman/short-url.json",
                data: { url: e },
              }).catch(function () {
                return e;
              });
            }),
            (t.prototype.getUrlWithSl = function (e) {
              var t = j(
                j(
                  {},
                  Object(s.c)({
                    sl: this.shareData.seller,
                    kdtId: this.getKdtId(),
                  })
                ),
                { sub_kdt_id: this.getKdtId() || this.shareData.dsKdtId }
              );
              return u.a.add(e, t);
            }),
            (t.prototype.getSlUrl = function (e) {
              var t = this.getUrlWithSl(e);
              return this.getShortUrl(t).catch(function () {
                return t;
              });
            }),
            (t.prototype.getShortLink = function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = {});
              var n = this.getShortLinkParams(e, t);
              return this.ajax({
                method: "POST",
                contentType: "application/json",
                data: n,
                path: "/wscsalesman/common-api/short-link/generateShortLink.json",
              });
            }),
            (t.prototype.getShortLinkParams = function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = {});
              var n = this,
                r = n.shareData,
                a = n.query,
                o = n.path,
                i = n.offlineId,
                c = n.scenes,
                d = this.getKdtId(),
                l = j(
                  j(
                    j({ offlineId: i }, a),
                    Object(s.c)({ sl: r.seller, kdtId: d })
                  ),
                  e
                );
              [C.HomePage, C.FeaturePage].includes(c) && (l.kdt_id = d);
              var p = u.a.add(o, l),
                h = T[c] || "商品";
              return j({ isPermanent: !1, pageTitle: h, pageUrl: p }, t);
            }),
            t
          );
        })(w),
        E = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        D = function () {
          return (D =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        M = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        N = "pages/common/blank-page/index",
        L = "pages/common/webview-page/index",
        R = "packages/goods/detail/index",
        B = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            E(t, e),
            (t.prototype.generateCodeJsonOrPosterJsonParams = function (e, n) {
              void 0 === e && (e = {}), void 0 === n && (n = {});
              var r = t.getAppSceneObj(
                  D(
                    {
                      kdtId: this.rootKdtId,
                      guestKdtId: this.getKdtId(),
                      page: this.path,
                      goodsInfo: this.goodsInfo,
                      sl: this.shareData.seller,
                      share_from: "poster",
                      offlineId: this.offlineId,
                    },
                    n
                  )
                ),
                a = r.sceneObj,
                o = r.formatGoodsInfo;
              return D(
                D(D({}, o), {
                  kdtId: this.rootKdtId,
                  page: this.path,
                  scene: encodeURIComponent(JSON.stringify(a)),
                }),
                e
              );
            }),
            (t.prototype.generateCreatePosterJsonParams = function (e, t) {
              var n = this.shareData;
              return D(
                {
                  page: "weapp" === this.runEnv ? N : this.path,
                  scene: JSON.stringify(
                    D(
                      D(
                        D(
                          {
                            kdtId: this.rootKdtId,
                            guestKdtId: this.getKdtId(),
                            page: this.path,
                          },
                          this.query
                        ),
                        Object(s.c)({ sl: n.seller, kdtId: this.getKdtId() })
                      ),
                      t
                    )
                  ),
                },
                e
              );
            }),
            (t.prototype.getCodeParams = function (e) {
              var t = this.goodsInfo;
              if ("qq" === this.runEnv)
                return "web" === this.buildEnv
                  ? this.generateCodeJsonOrPosterJsonParams(
                      { page: R },
                      { share_from: "qrcode", page: R }
                    )
                  : this.generateCodeJsonOrPosterJsonParams(
                      {},
                      { share_from: "qrcode" }
                    );
              if ("weapp" !== this.runEnv || !t || !t.weappUrl)
                return {
                  kdtId: this.rootKdtId,
                  isWeapp: "weapp" === this.runEnv ? 1 : 0,
                  url: e,
                };
              if ("weapp" === this.runEnv) {
                var n = t.weappUrl.split("?")[0] || R;
                return this.generateCodeJsonOrPosterJsonParams(
                  {
                    isWeapp: 1,
                    url: e,
                    weappUrl: "pages/common/blank-page/index",
                  },
                  { page: n, share_from: "qrcode" }
                );
              }
            }),
            (t.prototype.getZonePosterParams = function (e) {
              var t = e.salesmanAvatar,
                n = e.nickname,
                r = e.backgroundUrl;
              return this.generateCreatePosterJsonParams(
                {
                  type: "moment",
                  page: N,
                  avatar: t,
                  nickname: n,
                  backgroundImg: r,
                  width: 292,
                  height: 422,
                },
                { page: "packages/salesman/zone/home/index" }
              );
            }),
            (t.prototype.getGoodsPosterParams = function (e) {
              void 0 === e && (e = { params: {}, scene: {} });
              var t = this.goodsInfo.goodsAlias || this.goodsInfo.alias;
              if ("web" === this.buildEnv) {
                if ("weapp" === this.runEnv)
                  return this.generateCodeJsonOrPosterJsonParams(
                    D(
                      { qrCodeType: "weapp", isWeapp: 1, alias: t, page: N },
                      e.params
                    ),
                    D({ page: "/" + R, share_from: "poster" }, e.scene)
                  );
                if ("qq" === this.runEnv)
                  return this.generateCodeJsonOrPosterJsonParams(
                    D({ page: "/" + R, alias: t }, e.params),
                    D({ page: "/" + R, share_from: "poster" }, e.scene)
                  );
                var n = this.shareInfo.url,
                  r = this.generateCodeJsonOrPosterJsonParams(
                    D(
                      {
                        alias: t,
                        url: encodeURIComponent(
                          Object(s.a)({
                            url: n,
                            sl: this.shareData.seller,
                            st: 3,
                            kdtId: this.getKdtId(),
                          })
                        ),
                      },
                      e.params
                    )
                  );
                return delete r.scene, r;
              }
              return "weapp" === this.buildEnv
                ? this.generateCodeJsonOrPosterJsonParams(
                    D({ page: N, alias: t }, e.params),
                    D({ page: "/" + R, share_from: "poster" }, e.scene)
                  )
                : this.generateCodeJsonOrPosterJsonParams(
                    D(D({}, e.params), { alias: t }),
                    e.scene
                  );
            }),
            (t.prototype.getGoodsPosterInfo = function () {
              var e = this.goodsInfo,
                n = t.formatGoodsActivityParams(e);
              return this.ajax({
                path: "/wscgoods/poster/goods-poster-info.json",
                data: n,
                method: "GET",
              });
            }),
            (t.prototype.getGoodsPoster = function (e) {
              var t = this;
              void 0 === e && (e = { params: {}, scene: {} });
              var n = this.getGoodsPosterParams(e);
              return this.nativeYunExtension(n)
                .then(function (e) {
                  return e.length
                    ? e[0]
                    : t.ajax({
                        path: "/wscgoods/weapp-poster/goods.json",
                        data: n,
                        method: "GET",
                      });
                })
                .then(function (e) {
                  return e.imgUrl ? e : Promise.reject("生成失败");
                });
            }),
            (t.prototype.getCodeOrQrCode = function () {
              var e = this;
              if ("web" === this.buildEnv) {
                var t = this.shareInfo.url;
                return (
                  (t = u.a.add(t, { st: 1 })),
                  "web" === this.runEnv
                    ? (this.handleLog(I.qrCode),
                      (t = u.a.add(t, { share_cmpt: "qr_code" })))
                    : (this.handleLog(I.miniprogram),
                      (t = u.a.add(t, { share_cmpt: "miniprogram" }))),
                  this.getSlUrl(t).then(function (t) {
                    var n = e.getCodeParams(t);
                    return e.ajax({
                      path: "/wscump/salesman/poster/getCode.json",
                      data: n,
                    });
                  })
                );
              }
              this.handleLog(I.miniprogram);
              var n = this.generateCreatePosterJsonParams({
                type: "qrcode",
                width: 292,
                height: 292,
              });
              return this.createPosterRequest(n);
            }),
            (t.prototype.createPosterRequest = function (e) {
              return this.ajax({
                path: "/wscsalesman/poster-service/create-poster.json",
                data: e,
              });
            }),
            (t.prototype.getZoneCodePoster = function () {
              if ("web" === this.runEnv || "weapp" === this.runEnv) {
                this.handleLog(I.poster, { posterType: "zoomPoster" });
                var e = this.getZonePosterParams(this.rightsInfo);
                return this.createPosterRequest(e);
              }
              return Promise.resolve();
            }),
            (t.prototype.getTuwenPoster = function () {
              if (
                (this.handleLog(I.poster, { posterType: "tuwenPoster" }),
                "web" === this.buildEnv)
              ) {
                var e,
                  t = this.shareInfo.url;
                return (
                  (e =
                    "weapp" === this.runEnv
                      ? this.generateCreatePosterJsonParams(
                          { type: "tuwen", page: N },
                          { page: L, src: encodeURIComponent(t) }
                        )
                      : "qq" === this.runEnv
                      ? {
                          type: "tuwen",
                          page:
                            "pages/web-view/index?url=" + encodeURIComponent(t),
                          scene: JSON.stringify({ kdtId: this.getKdtId() }),
                        }
                      : { kdtId: this.getKdtId(), isWeapp: 0, url: t }),
                  this.createPosterRequest(e)
                );
              }
              var n = this.generateCreatePosterJsonParams({ type: "tuwen" });
              return this.createPosterRequest(n);
            }),
            (t.prototype.getFeaturePoster = function (e, t) {
              void 0 === e && (e = {}),
                void 0 === t && (t = {}),
                this.handleLog(I.poster, { posterType: "featurePoster" });
              var n = this.generateFeaturePosterParams(e, t);
              return this.ajax({
                path: "/wscshop/poster/feature.json",
                data: n,
              });
            }),
            (t.prototype.generateFeaturePosterParams = function (e, t) {
              var n;
              void 0 === e && (e = {}), void 0 === t && (t = {});
              var r = this.getKdtId();
              if ("weapp" === this.buildEnv)
                return D(
                  {
                    isV2: 1,
                    page: N,
                    pageType: "homepage",
                    kdtId: r,
                    scene: D(
                      D(
                        {
                          page: this.path,
                          guestKdtId: r,
                          kdtId: r,
                          alias:
                            null === (n = this.query) || void 0 === n
                              ? void 0
                              : n.alias,
                        },
                        Object(s.c)({ sl: this.shareData.seller, kdtId: r })
                      ),
                      t
                    ),
                  },
                  e
                );
              var a = Object(s.a)({
                  url: this.shareInfo.url,
                  sl: this.shareData.seller,
                  kdtId: this.getKdtId(),
                }),
                o = window._global.poster_info,
                i = (void 0 === o ? {} : o).more,
                c = void 0 === i ? {} : i;
              if ("weapp" === this.runEnv) {
                var d = c.alias || u.a.get("alias") || "";
                return D(
                  {
                    isV2: 1,
                    page: N,
                    pageType: c.pageType || "homepage",
                    qrCodeType: "weapp",
                    kdtId: r,
                    alias: d,
                    scene: encodeURIComponent(
                      JSON.stringify(
                        D(
                          D(
                            {
                              page: L,
                              kdtId: r,
                              guestKdtId: r,
                              src: encodeURIComponent(a),
                              alias: d,
                            },
                            Object(s.c)({
                              sl: this.shareData.seller,
                              kdtId: this.getKdtId(),
                            })
                          ),
                          t
                        )
                      )
                    ),
                  },
                  e
                );
              }
              return {
                kdtId: r,
                url: a,
                pageType: c.pageType || "homepage",
                alias: c.alias || "",
              };
            }),
            (t.getAppSceneObj = function (e) {
              var n = e.kdtId,
                r = e.guestKdtId,
                a = e.goodsInfo,
                o = e.page,
                i = e.sl,
                c = e.share_from,
                u = M(e, [
                  "kdtId",
                  "guestKdtId",
                  "goodsInfo",
                  "page",
                  "sl",
                  "share_from",
                ]),
                d = t.formatGoodsActivityParams(a);
              return {
                formatGoodsInfo: d,
                sceneObj: D(
                  D(
                    D(
                      { kdtId: n, guestKdtId: r || n, page: o, share_from: c },
                      u
                    ),
                    d
                  ),
                  Object(s.c)({ sl: i, kdtId: r })
                ),
              };
            }),
            (t.formatGoodsActivityParams = function (e) {
              var t = {},
                n = e.goodsAlias || e.alias;
              t.alias = n;
              var r = e.goodsActivityInfo;
              if (!r) return t;
              var a = r.activityId,
                o = r.type,
                i = r.activityType,
                s = void 0 === i ? o : i,
                c = r.activityAlias || e.activityAlias;
              return (
                (a || s) &&
                  ("helpCut" === s || 21 === s
                    ? ((t.activityType = "helpCut"),
                      (t.umpType = "helpCut"),
                      (t.activityId = a))
                    : 6 === s || "seckill" === s
                    ? ((t.umpType = "seckill"),
                      (t.activityType = "seckill"),
                      (t.umpAlias = c))
                    : "luckyDrawGroup" === o
                    ? ((t.activityId = a), (t.activityType = "luckyDrawGroup"))
                    : ((t.activityId = a), (t.activityType = s))),
                t
              );
            }),
            t
          );
        })(A),
        U = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        F = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            U(t, e),
            (t.prototype.checkHasGuideMaterial = function () {
              var e,
                t = this;
              return (
                (e =
                  "weapp" === this.buildEnv
                    ? Promise.resolve(!0)
                    : this.ajax({
                        path: "/guide/salesman-cube/hasGuideMaterial.json",
                      })).then(function (e) {
                  return t.update("hasGuideMaterial", e), e;
                }),
                e
              );
            }),
            t
          );
        })(B),
        G = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      !(function (e) {
        (e.weapp = "weapp"), (e.qq = "qq"), (e.web = "web");
      })(o || (o = {})),
        (function (e) {
          (e[(e.Guide = 1)] = "Guide"), (e[(e.Salesman = 2)] = "Salesman");
        })(i || (i = {}));
      var H = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          G(t, e),
          (t.getInstance = function (e) {
            return !t.instance && e && (t.instance = new t(e)), t.instance;
          }),
          (t.instance = null),
          t
        );
      })(F);
    },
    "5mDF": function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("9ME7"),
        a = n.n(r);
      class o {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      o.widgets = { GoodsShowcase: a() };
    },
    "5yT6": function (e, t) {
      e.exports = {
        d: "goodsBaseInfo;4;goodsPriceInfo;4;finalBigButtons;4;skuData;4;isNoStock;4;kdtId;4;pageVars;4",
        e: "clickBigButton;preview-image:updated-current",
        el: "preview-image",
        w: "Main;NormalCover",
        wc: "UserAuthorize",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    "6HL7": function (e, t) {
      e.exports = {
        d: "subscribeData;0;subscribeData;4",
        e: "",
        el: "",
        w: "",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "requestWechatSubscribeMessagePush",
        pi: "requestSubscribeMessagePush",
        c: "",
        cc: "SubscribeGuide",
      };
    },
    "6MKc": function (e, t, n) {
      n.d(t, "l", function () {
        return o;
      }),
        n.d(t, "j", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "m", function () {
          return c;
        }),
        n.d(t, "k", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "n", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "h", function () {
          return g;
        }),
        n.d(t, "i", function () {
          return v;
        });
      var r = n("6S0u"),
        a = n("ECkf");
      function o(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function i(e) {
        Object(a.e)()
          ? wx.nextTick(e)
          : setTimeout(() => {
              e();
            }, 1e3 / 30);
      }
      function s(e) {
        if (Object(r.b)(e))
          return (e = String(e)), Object(r.e)(e) ? e + "px" : e;
      }
      function c(e) {
        return setTimeout(() => {
          e();
        }, 1e3 / 30);
      }
      function u(e, t) {
        return Object(r.g)(e)
          ? Object.keys(e).reduce(
              (n, r) => (t.includes(r) || (n[r] = e[r]), n),
              {}
            )
          : {};
      }
      function d(e, t) {
        return new Promise((n) => {
          wx.createSelectorQuery()
            .in(e)
            .select(t)
            .boundingClientRect()
            .exec(function (e) {
              return void 0 === e && (e = []), n(e[0]);
            });
        });
      }
      function l(e, t) {
        return new Promise((n) => {
          wx.createSelectorQuery()
            .in(e)
            .selectAll(t)
            .boundingClientRect()
            .exec(function (e) {
              return void 0 === e && (e = []), n(e[0]);
            });
        });
      }
      function p(e, t) {
        Object(a.c)() ? e.groupSetData(t) : t();
      }
      function h(e) {
        return Object(r.h)(e) ? e : Promise.resolve(e);
      }
      n.d(t, "g", function () {
        return r.b;
      }),
        n.d(t, "e", function () {
          return a.f;
        });
      function f() {
        var e = getCurrentPages();
        return e[e.length - 1];
      }
      var g = ["mac", "windows"].includes(Object(a.f)().platform),
        v = "wxwork" === Object(a.f)().environment;
    },
    "6NLS": function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("BANk");
      function a(e, t) {
        void 0 === t && (t = {});
        var a = n("US/N").default;
        return (
          "string" == typeof t && (t = { fileType: t }),
          a({
            path: t.uploadToShop
              ? "/wscshop/token/shop-image-token.json"
              : "/wscshop/token/upload-image.json",
            data: { kdt_id: t.kdtId },
          }).then(function (n) {
            var a = n.token;
            return new Promise(function (n, o) {
              return Object(r.a)({
                url: "https://up.yzcdn.cn/",
                filePath: e,
                fileName: "file",
                fileType: t.fileType || "image",
                formData: { token: a, "x:skip_save": 1 },
                success: function (t) {
                  var r,
                    a = t.data;
                  if (200 != +t.statusCode) return o(new Error("上传文件失败"));
                  try {
                    r = JSON.parse(a);
                  } catch (e) {
                    return o(new Error("解析文件失败"));
                  }
                  if (!r || 0 !== r.code) return o(new Error("上传文件失败"));
                  (r.data.originFile = e), (r.data.success = !0), n(r.data);
                },
              });
            });
          })
        );
      }
    },
    "6i0Q": function (e, t, n) {
      var r = n("Fcif"),
        a = n("uhII"),
        o = {
          general: "general",
          "main-bg": "main-bg",
          "main-text": "main-text",
          "vice-bg": "vice-bg",
          "vice-text": "vice-text",
          "gradient-start": "start-bg",
          "gradient-end": "end-bg",
        },
        i = null;
      t.a = {
        getThemeType() {
          return this.getTheme().then((e) => e.type);
        },
        getTheme: () =>
          new Promise((e, t) => {
            if (!getApp) return e({ type: 0, colors: Object(r.a)({}, a.b) });
            getApp()
              .getShopTheme()
              .then((t) => {
                e(t);
              })
              .catch(() => t());
          }),
        getThemeColorWithType(e) {
          var t = o[e];
          return t ? (i ? i[t] : a.b[t]) : e;
        },
        getThemeColor(e) {
          return this.getTheme().then(
            (t) => ((i = t.colors), this.getThemeColorWithType(e))
          );
        },
        switchHexToRgb(e) {
          var t = 0,
            n = 0,
            r = 0,
            a = (e) => parseInt(e, 16);
          if (3 === (e = e.slice(1)).length || 6 === e.length)
            return (
              3 === e.length
                ? ((t = 17 * a(e[0])), (n = 17 * a(e[1])), (r = 17 * a(e[2])))
                : ((t = a(e[1]) + 16 * a(e[0])),
                  (n = a(e[3]) + 16 * a(e[2])),
                  (r = a(e[5]) + 16 * a(e[4]))),
              [t, n, r]
            );
        },
      };
    },
    "7/pW": function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      });
      var r = n("9mFz"),
        a = n("y293"),
        o = Behavior({
          properties: {
            rmId: { type: String },
            _rm: { type: Object },
            _rw: { type: Object },
          },
          attached() {
            var { rmId: e } = this.data;
            if (e) {
              var t = Object(a.a)(this)[
                  Symbol.for("vm")
                ].$root.aWrDjnqdPEch.getModuleContext(e, { onlyCtx: !1 }),
                n = t.hasOwnProperty("store") && !t.moduleId,
                r = n ? t.ctx : t;
              n && (this.store = t.store), (this.ctx = r);
            }
          },
          detached() {
            this.data.rmId &&
              (this.store && (this.store = null), (this.ctx = null));
          },
        }),
        i = Behavior({
          created() {
            (this._isRantaWeapp = !0), (this[r.a] = []);
          },
          detached() {
            this[r.a].forEach((e) => (null == e ? void 0 : e()));
          },
        });
      var s = n("u8kV"),
        c = function (e) {
          e.behaviors = e.behaviors || [];
          var t,
            n = new s.a();
          return (
            e.behaviors.push(n.getBehavior()),
            (t = e).behaviors || (t.behaviors = []),
            t.behaviors.push(i, o),
            Component(t)
          );
        };
    },
    "7IP4": function (e, t) {
      e.exports = function () {};
    },
    "7WUL": function (e, t, n) {
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return i;
        }),
        n.d(t, "f", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return c;
        });
      var r = [
          "offlinepage",
          "weapplink",
          "goods",
          "tag",
          "weappfeature",
          "feature",
          "homepage",
          "usercenter",
          "cart",
          "allgoods",
          "chat",
          "pointsstore",
          "coupon",
          "platform_coupon",
          "seckill",
          "zodiac",
          "paidcolumn",
          "paidcontent",
          "mypaidcontent",
          "paidlive",
          "shopnote",
          "calendar_checkin",
          "shopnote_detail",
          "allcourse",
          "course",
          "educourse",
          "allofflinecourse",
          "eduappointment",
          "course_group",
          "course_category",
          "edumoments",
          "hotellist",
          "recharge_center",
          "red-package",
          "member_code",
          "vipcenter",
          "mp_article",
          "marketing_page",
          "video_number",
          "video_number_dynamic",
          "goods_classify",
          "booking_mall",
          "express_mall",
        ],
        a = [
          "/pages/home/dashboard/index",
          "/pages/goods/cart/index",
          "/pages/usercenter/dashboard/index",
          "/pages-retail/usercenter/dashboard-v2/index",
        ],
        o = {
          SCAN_GO: "scan_order_way",
          FREE_GO: "free_order_way",
          SELF: "self_order_way",
          TAKEOUT: "takeout_order_way",
          SaleToday: "sale_today",
          SaleAdvance: "sale_advance",
          NEARBY_STORE: "nearby_store_way",
          SHELF_GOODS: "shelf_goods",
          SHELF_GROUP: "shelf_group",
          WX_SCAN_CODE: "wx_scan_code",
        },
        i = {
          [o.SELF]: 0,
          [o.SaleToday]: 0,
          [o.SaleAdvance]: 0,
          [o.TAKEOUT]: 1,
        },
        s = "packages/retail-shelf/shelf/index",
        c = {
          [o.SELF]: s + "?mode=0",
          [o.SaleToday]: s + "?mode=0&filter=1",
          [o.SaleAdvance]: s + "?mode=0&filter=2",
          [o.TAKEOUT]: s + "?mode=1",
        };
    },
    "7WjY": function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      });
      var r = {
        kdtId: 0,
        im: null,
        nav: {},
        vip: null,
        base: null,
        store: null,
        config: null,
        copyright: {
          isCustomized: !1,
          logo: "https://img01.yzcdn.cn/weapp/wsc/jda6QN.png",
        },
        theme: { themeClass: "th0", isFantasy: !1, themeFetched: !1, type: 0 },
        isMultiStore: !1,
        autoEntryStore: 0,
        soldOutRecommend: !1,
        openHideStore: 0,
        multiStoreSwitch: !1,
        hideTopBar: 0,
        hasBase: !1,
        logo: "",
        shop_name: "",
        shop_type: 0,
        kdt_id: 0,
        service: {},
        security: {},
        wechat_sync_shopping_list: 0,
        isServiceDue: !1,
        virtualGoodsCannotWePay: !1,
        offlineId: 0,
        chainStoreInfo: {},
        shop_business_isopen: !0,
        suspend_message: "",
      };
    },
    "7ayS": function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("iNgw"),
        a = n.n(r);
      class o {
        constructor(e) {
          var { ctx: t, wrapperType: n } = e;
          (this.ctx = t), (this.wrapperType = n);
        }
      }
      o.widgets = { Main: a() };
    },
    "7o+A": function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    "7sy2": function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "e", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "f", function () {
          return m;
        });
      var r = n("Fcif"),
        a = n("3tyi"),
        o = n("PZW/"),
        i = n("2wjL"),
        s = n("zMoS"),
        c = n("sbwY"),
        u = n("Y28S"),
        { state: d } = c.a;
      function l(e) {
        var t,
          n = Object(a.a)(e || {}, [
            "from_params",
            "IS_SALES",
            "NEW_SALES_KDTID",
            "NEW_SALES_ID",
          ]),
          r = getApp();
        if (!n.from_params) {
          var o,
            i,
            s = null == r || null == (o = r.logger) ? void 0 : o.getLogParams();
          n.from_params =
            (null == s || null == (i = s.context) ? void 0 : i.from_params) ||
            "";
        }
        n.from_params ||
          (n.from_params =
            (null == r || null == (t = r.globalData)
              ? void 0
              : t.from_params) || "");
        return n;
      }
      function p(e) {
        return null != e && e.path
          ? i.a.add(
              "/" + (null == e ? void 0 : e.path),
              (null == e ? void 0 : e.query) || {}
            )
          : "";
      }
      function h(e, t) {
        var {
          level: n = "info",
          message: a,
          detail: o = {},
          extra: i = {},
        } = e;
        void 0 === t && (t = {});
        try {
          var s,
            c,
            u,
            d,
            l = getApp(),
            h =
              (null == l || null == (s = l.logger) ? void 0 : s.getGlobal()) ||
              {};
          null == l ||
            null == (c = l.logger) ||
            null == c.appError ||
            c.appError({
              appName: "guide-b-h5",
              logIndex: "guide_b_log",
              name: "weapp",
              message: a,
              level: n,
              extra: Object(r.a)(
                {
                  sourceApp: "weapp",
                  userId:
                    (null == h || null == (u = h.user) ? void 0 : u.li) || "",
                  mobile:
                    (null == h || null == (d = h.user) ? void 0 : d.m) || "",
                },
                i
              ),
              detail: Object(r.a)({}, o, { url: p(t) }),
            });
        } catch (e) {}
      }
      function f(e, t) {
        try {
          var n;
          t = t || getApp();
          var a = Object(r.a)(
            {},
            (null == e ? void 0 : e.query) || {},
            (null == d || null == (n = d.sceneData) ? void 0 : n.pageData) || {}
          );
          Object(o.a)({ query: a, url: p(e), sourceApp: "weapp", appObj: t });
        } catch (t) {
          h(
            {
              level: "error",
              message: "关联关系上报_兜底catch",
              detail: { error: t },
            },
            e
          );
        }
      }
      var g = (e) => {
        var t,
          { query: n } =
            null == (t = wx) || null == t.getLaunchOptionsSync
              ? void 0
              : t.getLaunchOptionsSync(),
          a = getApp(),
          {
            from_params: o,
            IS_SALES: i,
            NEW_SALES_ID: s,
            NEW_SALES_KDTID: c,
          } = l(n);
        return a.request(
          Object(r.a)({}, e, {
            header: Object(r.a)({}, e.header, {
              "x-guide-biz-data":
                "from_params=" +
                o +
                ";is_sales=" +
                i +
                ";new_sales_kdtId=" +
                c +
                ";new_salesId=" +
                s,
            }),
          })
        );
      };
      function v(e) {
        return (
          !("" === (t = e) || null == t || "null" === t || "undefined" === t) &&
          /[^\s]+~[^\s]+/.test(e)
        );
        var t;
      }
      function m(e) {
        var t = "";
        try {
          var n = getApp(),
            a = null == n ? void 0 : n.logger,
            o = Object(s.a)(
              null == a ? void 0 : a.getLogParams(),
              "context.from_params",
              ""
            ),
            { from_params: c } = i.a.getAll(e) || {},
            d = /(sl|sales_id)~/.test(c);
          if (
            (h({
              message: "webview页更新小程序上下文数据_前置打点",
              detail: { h5Url: e },
              extra: {
                isValid: v(c),
                hasSL: d,
                fromParamsStrOfH5Query: c,
                fromParamsStrOfContext: o,
              },
            }),
            c !== o && v(c) && d)
          ) {
            var l = Object(u.d)(o || ""),
              p = Object(u.d)(c),
              f = Object(u.e)(Object(r.a)({}, l, p));
            h({
              message: "webview页更新小程序上下文数据_有有效from_params值",
              detail: {
                mergedFromParamsStr: f,
                fromPramsObjOfContext: l,
                fromPramsObjOfH5Query: p,
              },
            }),
              (t = f),
              null == a || a.setContext({ from_params: f }, 1);
          }
        } catch (e) {
          h({
            level: "error",
            message: "webview页更新小程序上下文数据_失败",
            detail: { error: e },
          });
        }
        return t;
      }
    },
    "7ueE": function (e, t) {
      e.exports = {
        wd: "Widget",
        p: "queryWechatSubscribeResult;requestSubscribeMessagePush;getTemplateByScene",
        c: "SubscribeGuide",
      };
    },
    "7xhV": function (e, t) {
      e.exports = {
        d: "contact;4",
        w: "MessageContact",
        wc: "UserAuthorize",
        wd: "MessageContact",
        lc: "getUserInfo",
        p: "showYZIm",
        c: "MessageContactButton",
      };
    },
    "7yS6": function (e, t, n) {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = ((r = n("HmHG")) && r.__esModule ? r : { default: r }).default;
      (t.default = a), (e.exports = t.default);
    },
    "82CI": function (e, t, n) {
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "d", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return i;
        });
      var r = 100,
        a = 30,
        o = 54,
        i = 16;
    },
    "87Y/": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          if ("string" != typeof e) return "";
          3 === (e = e.slice(1)).length &&
            (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
          return (
            "rgba(" +
            parseInt(e.slice(0, 2), 16) +
            "," +
            parseInt(e.slice(2, 4), 16) +
            "," +
            parseInt(e.slice(4, 6), 16) +
            "," +
            t +
            ")"
          );
        }),
        (e.exports = t.default);
    },
    "8B9M": function (e, t, n) {
      n("Fcif"), n("taYb");
      var r = n("QTc8"),
        a = n("jA1y"),
        o = n("2ktG"),
        i = () => {},
        s = {},
        c = {
          globalData: { shopInfo: { isMultiStore: !1 } },
          db: r.a,
          carmen: a.b,
          request: a.c,
          logger: { requestError: i, onError: i, getGlobal: i, appError: i },
          isSwitchTab: () => Promise.resolve(!1),
          updateYouzanUserInfo() {},
          getOfflineId() {
            var { shopInfo: e = {} } = s;
            return e.offlineId || 0;
          },
          getKdtId: () => s.kdtId || 0,
          getFansType: () => "",
          getSessionId() {
            var { token: e = {} } = s;
            return e.sessionId || "";
          },
          getShopConfigData: () =>
            new Promise((e) => {
              e({ show_buy_btn: !0, hide_shopping_cart: !1 });
            }),
          getShopInfo: () => Promise.resolve({}),
          getImData: () =>
            new Promise((e) => {
              e({});
            }),
          getUserInfo() {},
          getPointsName: () => Promise.resolve({ pointsName: "积分" }),
          getPoints: () =>
            Object(a.c)({ path: "wscump/integral/user_points.json" }),
        };
      (c.storage = Object(o.a)()),
        (t.a = function () {
          return getApp ? getApp() : c;
        });
    },
    "8Ggg": function (e, t, n) {
      function r(e) {
        return Math.sqrt(
          Math.pow(e[0].clientX - e[1].clientX, 2) +
            Math.pow(e[0].clientY - e[1].clientY, 2)
        );
      }
      function a(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function o() {
        var e = {
          startX: 0,
          startY: 0,
          deltaX: 0,
          deltaY: 0,
          offsetX: 0,
          offsetY: 0,
          direction: "",
          isVertical: null,
          isHorizontal: null,
          move: null,
          start: null,
          reset: null,
        };
        return (
          (e.isVertical = () => "vertical" === e.direction),
          (e.isHorizontal = () => "horizontal" === e.direction),
          (e.move = (t) => {
            var n,
              r,
              a = t.touches[0];
            (e.deltaX = a.clientX - e.startX),
              (e.deltaY = a.clientY - e.startY),
              (e.offsetX = Math.abs(e.deltaX)),
              (e.offsetY = Math.abs(e.deltaY)),
              e.direction ||
                (e.direction =
                  ((n = e.offsetX),
                  (r = e.offsetY),
                  n > r && n > 10
                    ? "horizontal"
                    : r > n && r > 10
                    ? "vertical"
                    : ""));
          }),
          (e.start = (t) => {
            e.reset(),
              (e.startX = t.touches[0].clientX),
              (e.startY = t.touches[0].clientY);
          }),
          (e.reset = () => {
            (e.deltaX = 0),
              (e.deltaY = 0),
              (e.offsetX = 0),
              (e.offsetY = 0),
              (e.direction = "");
          }),
          e
        );
      }
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return o;
        });
    },
    "8VmE": function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n.apply(this, arguments)
        );
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    "8v1J": function (e, t) {
      e.exports = {
        d: "pageStyleCSS;2;pageStyleConfig;2;themeIcon;4;themeCSS;4;appStyleConfig;4",
        wd: "Main",
        lc: "objectToCSS",
      };
    },
    "8zua": function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      });
      var r = { UNKNOWN: -1, GROW: 1, REGISTER: 2, CONSUME: 3, SAVING: 4 };
    },
    "9+N+": function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = n("9ZMt");
      function a(e) {
        r.default.$native.onError(e);
      }
      function o(e) {
        r.default.$native.offError(e);
      }
    },
    "9+gc": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new Date(),
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "day",
          r = t.getFullYear(),
          a = t.getMonth(),
          o = t.getDate();
        return new Date(
          "year" === n ? r + e : r,
          "month" === n ? a + e : a,
          "day" === n ? o + e : o
        );
      };
      (t.default = r), (e.exports = t.default);
    },
    "9Bnu": function (e, t, n) {
      t.a = () =>
        getApp()
          .resolveTeeAPI()
          .then((e) => e.getUserPrivacy());
    },
    "9DLJ": function (e, t, n) {
      n.d(t, "c", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "i", function () {
          return o;
        }),
        n.d(t, "k", function () {
          return s;
        }),
        n.d(t, "j", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "h", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return l;
        }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "f", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "l", function () {
          return g;
        });
      var r = {
          ACTIVE: "#f44",
          UNACTIVATED: "#969799",
          RESET_UNACTIVE: "#666",
        },
        a = { SHOP: "shop", CUSTOM: "custom" },
        o = { DEFAULT: 1, MAIN_ICON: 2, XUAN_FU: 3, MAIN_ICON_STYLE_TWO: 4 },
        i = "packages",
        s = {
          WSC: i + "/usercenter/dashboard/index",
          RETAIL: i + "/retail/usercenter/dashboard-v2/index",
        },
        c = /packages\/(retail\/)?usercenter\/dashboard(-v2)?\/index/,
        u = {
          OLD: i + "/shop/goods/all/index",
          NEW: i + "/goods-list/all/index",
        },
        d = { ["/" + u.OLD]: "AllGoodsList" },
        l = {
          TRANS: i + "/home/tab/one",
          EXT: i + "/ext-home/tab/one",
          OLD: i + "/old-home/tab/one",
        },
        p = {
          TRANS: i + "/home/tab/two",
          EXT: i + "/ext-home/tab/two",
          OLD: i + "/old-home/tab/two",
        },
        h = {
          TRANS: i + "/home/tab/three",
          EXT: i + "/ext-home/tab/three",
          OLD: i + "/old-home/tab/three",
        },
        f = {
          TRANS: i + "/home/dashboard/index",
          EXT: i + "/ext-home/dashboard/index",
          OLD: i + "/old-home/dashboard/index",
        },
        g = {
          TRANS: i + "/usercenter/dashboard/index",
          PAGE: "pages/usercenter/dashboard/index",
        };
    },
    "9DaQ": function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n("h+Rz"),
        a = n("DHu0"),
        o = n("AC3C");
      function i(e) {
        var t = e.phoneNumber;
        return "string" != typeof t
          ? Promise.reject(
              Object(o.a)({
                code: a.a.ParamsError,
                message: "phoneNumber类型出错",
              })
            )
          : r.a.makePhoneCall({ phoneNumber: t });
      }
    },
    "9KEa": function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = {
        inited: !1,
        isFetching: !1,
        systemInfo: {
          SDKVersion: "",
          batteryLevel: 100,
          benchmarkLevel: 1,
          brand: "",
          fontSizeSetting: 16,
          language: "zh",
          model: "",
          pixelRatio: 1,
          platform: "",
          screenHeight: 0,
          screenWidth: 0,
          statusBarHeight: 0,
          system: "",
          version: "",
          windowHeight: 0,
          windowWidth: 0,
        },
      };
      r.isFetching ||
        ((r.isFetching = !0),
        wx.getSystemInfo({
          success(e) {
            void 0 === e && (e = {}), (r.systemInfo = e), (r.inited = !0);
          },
          fail(e) {},
          complete() {
            r.isFetching = !1;
          },
        }));
      var a = Object.create(null);
      Object.keys(r.systemInfo).forEach((e) => {
        Object.defineProperty(a, e, {
          get: () =>
            r.inited
              ? r.systemInfo[e]
              : ((r.systemInfo = wx.getSystemInfoSync()),
                (r.inited = !0),
                r.systemInfo)[e],
        });
      }),
        Object.defineProperty(a, "isAndroid", {
          get: () => /android/i.test(a.system),
        }),
        Object.defineProperty(a, "isIphoneX", {
          get: () => /iphone x/i.test(a.model),
        }),
        (t.b = function (e) {
          return (
            void 0 === e && (e = !0),
            (r.inited && e) ||
              ((r.systemInfo = wx.getSystemInfoSync()), (r.inited = !0)),
            r.systemInfo
          );
        });
    },
    "9VdR": function (e, t, n) {
      n.r(t),
        n.d(t, "getClipboardData", function () {
          return r.a;
        }),
        n.d(t, "setClipboardData", function () {
          return r.b;
        }),
        n.d(t, "getSystemInfo", function () {
          return a.a;
        }),
        n.d(t, "getSystemInfoSync", function () {
          return a.b;
        }),
        n.d(t, "makePhoneCall", function () {
          return o.a;
        }),
        n.d(t, "getLaunchOptionsSync", function () {
          return i.a;
        }),
        n.d(t, "ScanType", function () {
          return u;
        }),
        n.d(t, "scanCode", function () {
          return d;
        }),
        n.d(t, "getPerformance", function () {
          return l.a;
        }),
        n.d(t, "chooseImage", function () {
          return p.b;
        }),
        n.d(t, "previewImage", function () {
          return p.d;
        }),
        n.d(t, "saveImageToPhotosAlbum", function () {
          return p.e;
        }),
        n.d(t, "detectWebpSupport", function () {
          return p.c;
        }),
        n.d(t, "checkCanWebp", function () {
          return p.a;
        }),
        n.d(t, "chooseVideo", function () {
          return h;
        }),
        n.d(t, "saveVideoToPhotosAlbum", function () {
          return f;
        }),
        n.d(t, "previewMedia", function () {
          return v;
        }),
        n.d(t, "createInnerAudioContext", function () {
          return _;
        }),
        n.d(t, "getAuthCode", function () {
          return S.a;
        }),
        n.d(t, "openAddress", function () {
          return O;
        }),
        n.d(t, "requestSubscribeMessage", function () {
          return w;
        }),
        n.d(t, "request", function () {
          return P.a;
        }),
        n.d(t, "uploadFile", function () {
          return I.a;
        }),
        n.d(t, "getNetworkType", function () {
          return k.a;
        }),
        n.d(t, "getShareInfo", function () {
          return C.a;
        }),
        n.d(t, "showShareMenu", function () {
          return C.f;
        }),
        n.d(t, "updateShareMenu", function () {
          return C.g;
        }),
        n.d(t, "hideShareMenu", function () {
          return C.b;
        }),
        n.d(t, "shareFileMessage", function () {
          return C.c;
        }),
        n.d(t, "shareVideoMessage", function () {
          return C.d;
        }),
        n.d(t, "showShareImageMenu", function () {
          return C.e;
        }),
        n.d(t, "stopPullDownRefresh", function () {
          return T.b;
        }),
        n.d(t, "startPullDownRefresh", function () {
          return T.a;
        }),
        n.d(t, "setNavigationBarTitle", function () {
          return x.b;
        }),
        n.d(t, "setNavigationBarColor", function () {
          return x.a;
        }),
        n.d(t, "pageScrollTo", function () {
          return j.a;
        }),
        n.d(t, "createIntersectionObserver", function () {
          return A.a;
        }),
        n.d(t, "getMenuButtonBoundingClientRect", function () {
          return E;
        }),
        n.d(t, "downloadFile", function () {
          return D;
        }),
        n.d(t, "disableAlertBeforeUnload", function () {
          return M;
        }),
        n.d(t, "enableAlertBeforeUnload", function () {
          return N;
        }),
        n.d(t, "getLocation", function () {
          return L.b;
        }),
        n.d(t, "chooseLocation", function () {
          return L.a;
        }),
        n.d(t, "getExtConfigSync", function () {
          return R.a;
        }),
        n.d(t, "setStorageSync", function () {
          return B.h;
        }),
        n.d(t, "getStorageSync", function () {
          return B.d;
        }),
        n.d(t, "removeStorageSync", function () {
          return B.f;
        }),
        n.d(t, "clearStorageSync", function () {
          return B.b;
        }),
        n.d(t, "setStorage", function () {
          return B.g;
        }),
        n.d(t, "getStorage", function () {
          return B.c;
        }),
        n.d(t, "removeStorage", function () {
          return B.e;
        }),
        n.d(t, "clearStorage", function () {
          return B.a;
        }),
        n.d(t, "onError", function () {
          return U.b;
        }),
        n.d(t, "offError", function () {
          return U.a;
        }),
        n.d(t, "onUnhandledRejection", function () {
          return F.b;
        }),
        n.d(t, "offUnhandledRejection", function () {
          return F.a;
        }),
        n.d(t, "onPageNotFound", function () {
          return G.b;
        }),
        n.d(t, "offPageNotFound", function () {
          return G.a;
        }),
        n.d(t, "on", function () {
          return q;
        }),
        n.d(t, "off", function () {
          return z;
        }),
        n.d(t, "openSetting", function () {
          return W;
        }),
        n.d(t, "navigateToMiniProgram", function () {
          return K;
        }),
        n.d(t, "navigateBackMiniProgram", function () {
          return Y;
        }),
        n.d(t, "openEmbeddedMiniProgram", function () {
          return V;
        }),
        n.d(t, "offEmbeddedMiniProgramHeightChange", function () {
          return X;
        }),
        n.d(t, "onEmbeddedMiniProgramHeightChange", function () {
          return J;
        });
      var r = n("Q56H"),
        a = n("MLLI"),
        o = n("9DaQ"),
        i = n("mM1a"),
        s = n("9ZMt"),
        c = n("h+Rz"),
        u = (function (e) {
          return (
            (e.barCode = "barCode"),
            (e.qrCode = "qrCode"),
            (e.datamatrix = "datamatrix"),
            (e.pdf417 = "pdf417"),
            e
          );
        })({});
      function d(e) {
        var t = e.scanType,
          n = c.a.scanCode;
        return (
          s.default &&
            s.default.getEnv &&
            "ant" === s.default.getEnv() &&
            ((t = (function (e) {
              var t;
              void 0 === e && (e = [u.barCode, u.qrCode]);
              var n =
                (((t = {})[u.datamatrix] = "dmCode"),
                (t[u.pdf417] = "pdf417Code"),
                t);
              return e.map(function (e) {
                return n[e] ? n[e] : e;
              });
            })(t)),
            (n = c.a.scan)),
          n({ scanType: t })
        );
      }
      var l = n("HSl3"),
        p = n("882d");
      function h(e) {
        return c.a.chooseVideo(e);
      }
      function f(e) {
        return c.a.saveVideoToPhotosAlbum(e);
      }
      var g = n("nibL");
      function v(e) {
        return (
          Object(g.a)(
            Array.isArray(e.sources),
            "previewMedia options.sources accept type `PreviewMediaSource[]`"
          ),
          c.a.previewMedia(e)
        );
      }
      var m = n("DHu0"),
        y = n("AC3C");
      function b(e) {
        switch (e) {
          case m.a.Media.SystemError:
            return "系统错误";
          case m.a.Media.NetworkError:
            return "网络错误";
          case m.a.Media.FileError:
            return "文件错误";
          case m.a.Media.FormatError:
            return "格式错误";
          default:
            return "未知错误";
        }
      }
      function _(e) {
        return c.a.createInnerAudioContext().then(function (t) {
          (t.src = e.src),
            (t.startTime = e.startTime || 0),
            (t.loop = e.loop || !1),
            (t.volume = e.volume || 1),
            (t.playbackRate = e.playbackRate || 1);
          var n = new Map(),
            r = t.onError,
            a = t.offError,
            o = t.destroy;
          return (
            (t.onError = function (e) {
              var a = function (t) {
                e(
                  (function (e) {
                    var t = m.a.Unknown;
                    return (
                      -1 !== e.errCode && (t = (e.errCode % 1e3) + 140),
                      Object(y.b)({ code: t, msg: b(t) })
                    );
                  })(t)
                );
              };
              n.set(e, a), r.call(t, a);
            }),
            (t.offError = function (e) {
              var r = n.get(e);
              a.call(t, r);
            }),
            (t.destroy = function () {
              n.clear(), o.call(t);
            }),
            t
          );
        });
      }
      var S = n("MVYo");
      function O() {
        return c.a.chooseAddress().then(function (e) {
          return {
            address: e.detailInfo,
            city: e.cityName,
            county: e.countyName,
            userName: e.userName,
            tel: e.telNumber,
            province: e.provinceName,
            areaCode: "",
            postalCode: e.postalCode,
          };
        });
      }
      function w(e) {
        return c.a.requestSubscribeMessage(e);
      }
      var P = n("akjn"),
        I = n("BANk"),
        k = n("Tr3L"),
        C = n("GRMa"),
        T = n("TO+A"),
        x = n("R2NP"),
        j = n("fChk"),
        A = n("Vnr7");
      function E() {
        return c.a.getMenuButtonBoundingClientRect();
      }
      function D(e) {
        return c.a.downloadFile(e);
      }
      function M() {
        return c.a.disableAlertBeforeUnload();
      }
      function N(e) {
        return c.a.enableAlertBeforeUnload(e);
      }
      var L = n("hcPn"),
        R = n("U0uK"),
        B = n("GFyo"),
        U = n("9+N+"),
        F = n("LHnf"),
        G = n("Xr+B"),
        H = n("pnMF");
      function q(e, t) {
        H.a.on(e, t);
      }
      function z(e, t) {
        H.a.off(e, t);
      }
      function W() {
        return c.a.openSetting();
      }
      function K(e) {
        return c.a.navigateToMiniProgram(e);
      }
      function Y(e) {
        return c.a.navigateBackMiniProgram(e);
      }
      function V(e) {
        return c.a.openEmbeddedMiniProgram(e);
      }
      function X(e) {
        return c.a.offEmbeddedMiniProgramHeightChange(e);
      }
      function J(e) {
        return c.a.onEmbeddedMiniProgramHeightChange(e);
      }
    },
    "9aHS": function (e, t) {
      e.exports = {
        d: "shop;4;themeColors;4;biz;4;quickMode;4;enableMultiplePay;4;origin;4;loginCheck;4",
        e: "cashier:pay:success;cashier:pay:fail;cashier:close;cashier:ready;cashier:opened",
        w: "",
        wc: "UserAuthorize",
        wd: "Main",
        lc: "getUserInfo",
        p: "startPay;queryPayChannels;doPay;requestOrderPayment;extPay",
        pi: "beforePay;onPaySuccessSync;onPayItemClick",
        cc: "UserAuthorizePopup",
      };
    },
    "9aUh": function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    AC3C: function (e, t, n) {
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return d;
        });
      var r = n("sQvh");
      var a = n("P+uj");
      function o() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function i(e, t, n) {
        return (i = o()
          ? Reflect.construct.bind()
          : function (e, t, n) {
              var a = [null];
              a.push.apply(a, t);
              var o = new (Function.bind.apply(e, a))();
              return n && Object(r.a)(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function s(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (s = function (e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return e;
          var n;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, o);
          }
          function o() {
            return i(e, arguments, Object(a.a)(this).constructor);
          }
          return (
            (o.prototype = Object.create(e.prototype, {
              constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            Object(r.a)(o, e)
          );
        })(e);
      }
      var c = (function (e) {
        var t, n;
        function a(t) {
          var n,
            r = t.code,
            a = t.msg;
          return (
            ((n = e.call(this, a) || this).code = void 0),
            (n.msg = void 0),
            (n.name = "TeeError"),
            (n.code = r),
            (n.msg = a),
            n
          );
        }
        return (
          (n = e),
          ((t = a).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          Object(r.a)(t, n),
          a
        );
      })(s(Error));
      function u(e) {
        return new c(e);
      }
      function d(e) {
        return {
          name: "TeeError",
          code: e.code,
          message: e.message,
          error_msg: e.message,
        };
      }
    },
    AfOI: function (e, t, n) {
      var r;
      n.d(t, "a", function () {
        return r;
      }),
        (function (e) {
          (e.NORMAL = "normal"), (e.SEPARATE = "separate");
        })(r || (r = {}));
    },
    AqAW: function (e, t, n) {
      var r = n("DXKY"),
        a = n("8B9M");
      function o() {
        var e = getCurrentPages() || [];
        return e.length ? e[e.length - 1].route : "";
      }
      t.a = {
        _isAppEvent: !0,
        on(e, t, n) {
          var i = Object(a.a)();
          ((n = n || this || {})._route = o()), r.a.on.apply(i, [e, t, n]);
        },
        once(e, t, n) {
          var i = Object(a.a)();
          ((n = n || this || {})._route = o()), r.a.once.apply(i, [e, t, n]);
        },
        off(e, t, n) {
          r.a.off.apply(Object(a.a)(), [e, t, n || this || {}]);
        },
        trigger() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          r.a.trigger.apply(Object(a.a)(), t);
        },
      };
    },
    B9LC: function (e, t, n) {
      var r = n("DXqK");
      function a(e, t) {
        (this.tid = null), (this.leftTime = 0);
        var n = Date.now();
        (t = t || {}),
          (this.isTimeList = Array.isArray(e)),
          (this.leftTime = e),
          (this.options = t),
          this.isTimeList
            ? this._walkTimeList(n, this.leftTime)
            : this._walkTime(n, this.leftTime);
      }
      (a.prototype = {
        stop() {
          clearTimeout(this.tid), (this.tid = null), (this.stopped = !0);
        },
        start() {
          if (!this.tid) {
            this.stopped = !1;
            var e = Date.now();
            this.isTimeList
              ? this._walkTimeList(e, this.leftTime)
              : this._walkTime(e, this.leftTime);
          }
        },
        setTime(e) {
          this.stop(),
            (this.leftTime = e),
            (this.isTimeList = Array.isArray(e)),
            this.start();
        },
        _walkTime(e, t) {
          t <= 0
            ? this.options.onEnd && this.options.onEnd()
            : this.stopped ||
              (this.tid = setTimeout(() => {
                var n = Date.now(),
                  a = t - (n - e),
                  o = Object(r.c)(a);
                this.options.onChange &&
                  this.options.onChange(o.data, o.strData),
                  (this.leftTime = a),
                  this._walkTime(n, this.leftTime);
              }, this.options.timeout || 500));
        },
        _walkTimeList(e, t) {
          if (
            (t.forEach((e, n) => {
              "number" == typeof e &&
                e <= 0 &&
                ("function" == typeof this.options.onEnd &&
                  this.options.onEnd(n),
                (t[n] = void 0));
            }),
            t.reduce((e, t) => e && void 0 === t, !0))
          )
            return this.stop();
          this.stopped ||
            (this.tid = setTimeout(() => {
              var n = Date.now(),
                a = t.map((t) => (void 0 === t ? t : t - (n - e))),
                o = a.map((e) => (void 0 === e ? {} : Object(r.c)(e)));
              "function" == typeof this.options.onChange &&
                this.options.onChange(
                  o.map((e) => e.data),
                  o.map((e) => e.strData)
                ),
                (this.leftTime = a),
                this._walkTimeList(n, this.leftTime);
            }, this.options.timeout || 500));
        },
      }),
        (t.a = a);
    },
    BAZ7: function (e, t) {
      e.exports = function (e, t, n) {
        for (var r = -1, a = null == e ? 0 : e.length; ++r < a; )
          if (n(t, e[r])) return !0;
        return !1;
      };
    },
    BILe: function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return i;
        });
      var r,
        a,
        o = n("QxN7");
      !(function (e) {
        (e.NONE = "none"),
          (e.PENDING = "pending"),
          (e.READY = "ready"),
          (e.ERROR = "error");
      })(r || (r = {})),
        (function (e) {
          (e.NATIVE = "native"), (e.YOUZAN = "youzan");
        })(a || (a = {}));
      var i = [
        o.AuthPopType.MOBILE,
        o.AuthPopType.PROTOCOL,
        o.AuthPopType.FILL_NICKNAME_AND_AVATAR,
        o.AuthPopType.YZ_AUTH,
        o.AuthPopType.FILL_YZ_AUTH,
      ];
    },
    BKUC: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = [
        "country",
        "province",
        "city",
        "county",
        "community",
        "addressDetail",
        "address_detail",
        "houseNumber",
      ];
      function a(e, t, n, a) {
        void 0 === t && (t = 0),
          void 0 === n && (n = r.length),
          void 0 === a && (a = "");
        var o = r.slice(t, n);
        return (
          e[o[1]] && e[o[1]] === e[o[2]] && o.splice(1, 1),
          "中国" === e[o[0]] && o.shift(0),
          o
            .filter((t) => e[t])
            .map((t) => e[t])
            .join(a)
        );
      }
    },
    BM4D: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        });
      var r = n("aOlM");
      function a() {
        return wx.getApiCategory
          ? wx.getApiCategory()
          : wx.getEnterOptionsSync
          ? wx.getEnterOptionsSync().apiCategory
          : "default";
      }
      function o() {
        return "embedded" === a();
      }
      function i(e) {
        var t = a(),
          n = Object(r.a)((n) => {
            t !== n && ((t = n), e(n));
          }, 500);
        wx.onApiCategoryChange &&
          wx.onApiCategoryChange((e) => {
            n(e.apiCategory);
          }),
          wx.onEmbeddedMiniProgramHeightChange &&
            wx.onEmbeddedMiniProgramHeightChange(() => {
              n(a());
            }),
          wx.onAppShow((e) => {
            n(e.apiCategory || a());
          });
      }
    },
    BXdv: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = "".concat(e);
          t || (t = 0);
          -1 === n.indexOf(".") && (n += ".");
          if (
            ((n += new Array(t + 1).join("0")),
            new RegExp(
              "^(-|\\+)?(\\d+(\\.\\d{0,".concat(t + 1, "})?)\\d*$")
            ).test(n))
          ) {
            var r = "0".concat(RegExp.$2),
              a = RegExp.$1,
              o = !0;
            if (RegExp.$3.length === t + 2) {
              var i = r.match(/\d/g);
              if (parseInt(i[i.length - 1], 10) > 4)
                for (
                  var s = i.length - 2;
                  s >= 0 &&
                  ((i[s] = "".concat(parseInt(i[s], 10) + 1)), "10" === i[s]);
                  s--
                )
                  (i[s] = "0"), (o = 1 !== s);
              r = i
                .join("")
                .replace(
                  new RegExp("(\\d+)(\\d{".concat(t, "})\\d$")),
                  "$1.$2"
                );
            }
            return o && (r = r.substr(1)), (a + r).replace(/\.$/, "");
          }
          return "".concat(e);
        }),
        (e.exports = t.default);
    },
    BaeO: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("Fcif");
      class a {
        constructor(e) {
          (this.getSalesmanTradeData = (e) => {
            var t, n;
            null != (t = this.query) &&
              t.paymentSuccessRedirect &&
              (e = Object(r.a)({}, e, {
                commonExtra: Object(r.a)({}, e.commonExtra, {
                  payment_success_redirect:
                    null == (n = this.query)
                      ? void 0
                      : n.paymentSuccessRedirect,
                }),
              }));
            return e;
          }),
            (this.ctx = e.ctx);
        }
        beforePageMount(e) {
          var { query: t } = e;
          (this.query = t),
            this.ctx.process.define(
              "setSalesmanTradeData",
              this.getSalesmanTradeData
            );
        }
        pageDestroyed() {
          this.ctx.process.undef(
            "setSalesmanTradeData",
            this.getSalesmanTradeData
          );
        }
      }
    },
    BmOr: function (e, t, n) {
      n.d(t, "a", function () {
        return d;
      });
      var r = n("US/N"),
        a = n("lCVF"),
        o = n.n(a),
        i = n("xers"),
        s = n.n(i),
        c = n("Nvad"),
        u = function () {
          return (u =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
      function d(e, t) {
        return ((n = e),
        Object(r.default)({
          path: "/wscgoods/activity-api/goods-estimated-price.json",
          data: n,
          method: "POST",
          withCredentials: !0,
        }))
          .then(function (e) {
            var n;
            if (s()(e)) return {};
            var r,
              a,
              i,
              d = e.timeLimitDiscountPromotion,
              l = e.customDiscountPromotion,
              p = e.buttonUmpText,
              h = e.totalOriginalPrice,
              f = e.discountAmountTag,
              g = e.recommendPromotionTagInfo,
              v = d ? o()(d.timeLimitDiscountPrice) : "",
              m = l ? o()(l.customDiscountPrice) : "",
              y = e.umpType,
              b = void 0 === y ? "" : y,
              _ = e.estimatedPrice,
              S = f,
              O = {},
              w = !1;
            S || t === _ || (S = p.promotionTag),
              S &&
                ((a = b),
                (O = {
                  containerStyle:
                    "display: inline-flex; align-items: center; height: 20px; padding: 0 var(--theme-goods-price-tag-padding, 6px); color: var(--ump-main-text, #fff); background: var(--ump-main-bg, #323233); border-radius:1rem;",
                  preText: (i = (r = S).replace(" ", "").split("¥"))[0] + "￥",
                  preStyle: "font-size: 12px;",
                  text: i[1].split("起")[0],
                  textStyle:
                    "font-size:16px;font-weight:var(--theme-common-price-font-weight, 600px);padding:0;position: relative;font-family: var(--price-font-family)",
                  sufText: r.indexOf("起") > -1 ? "起" : "",
                  sufStyle: "font-size: 12px; margin-left: 2px;",
                  type: a,
                  tagType: "estimatePrice",
                  umpType: "coupon",
                }),
                (w = S.indexOf("起") > -1));
            var P = u(u({}, e), {
              promotionDetailList:
                (null === (n = e.promotionDetailList) || void 0 === n
                  ? void 0
                  : n.map(function (e) {
                      return u(u({}, e), {
                        totalDecreaseAmount: o()(e.totalDecreaseAmount),
                        promotionPrice: o()(e.promotionPrice),
                      });
                    })) || [],
              totalPrice: v || m,
              buttonUmpText: p,
              tag: O,
              showQi: w,
            });
            return (
              _ && (P.estimatedPrice = Object(c.b)(o()(_))),
              h && (P.totalOriginalPrice = o()(h)),
              g &&
                (P.skuBannerData = {
                  activityInfo: g,
                  activityName: g.promotionTag,
                  activityDesc: g.activityDesc,
                }),
              P
            );
          })
          .catch(function () {
            return {};
          });
        var n;
      }
    },
    BoIy: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n("Fcif"),
        a = n("8B9M"),
        o = "iPhone-X" === Object(a.a)().deviceType ? 84 : 50;
      class i {
        constructor(e, t) {
          void 0 === e && (e = 30), void 0 === t && (t = 10);
          var n = getCurrentPages(),
            r = n[n.length - 1].__wxExparserNodeId__,
            a = i.instanceMap[r];
          if (a) return a;
          (this.id = r),
            (this.base = e),
            (this.gap = t),
            (this.iconMap = {}),
            (i.instanceMap[this.id] = this);
        }
        setBase(e) {
          return (this.base = e), this;
        }
        setGap(e) {
          return (this.gap = e), this;
        }
        setIcon(e, t) {
          void 0 === t && (t = {});
          var { __wxExparserNodeId__: n } = e;
          return (
            this.iconMap[n] &&
              ((t.priority = t.priority || this.iconMap[n].priority || 0),
              (t.height =
                0 === t.height ? 0 : t.height || this.iconMap[n].height),
              (t.cb = t.cb || this.iconMap[n].cb)),
            Object.keys(this.iconMap).some(
              (e) =>
                this.iconMap[e].priority === t.priority &&
                (delete this.iconMap[e], !0)
            ),
            (this.iconMap[n] = Object(r.a)({ ctx: e }, t)),
            Object.keys(this.iconMap)
              .sort(
                (e, t) => this.iconMap[t].priority - this.iconMap[e].priority
              )
              .reduce((e, n, r, a) => {
                var { ctx: o, priority: i, height: s, cb: c } = this.iconMap[n];
                return (
                  a.length > 1 &&
                    i <= t.priority &&
                    ("function" == typeof c
                      ? c.call(o, e)
                      : Array.isArray(c) &&
                        "function" == typeof c[0] &&
                        c[0].call(o, e)),
                  e + s + (s > 0 ? this.gap : 0)
                );
              }, o + this.base),
            this
          );
        }
        setAlone(e, t) {
          return (
            Object.keys(this.iconMap).forEach((n) => {
              var { ctx: r, cb: a } = this.iconMap[n];
              n !== e.__wxExparserNodeId__ &&
                Array.isArray(a) &&
                "function" == typeof a[1] &&
                a[1].call(r, t);
            }),
            this
          );
        }
        destroy(e) {
          var { __wxExparserNodeId__: t } = e;
          t &&
            (delete this.iconMap[t],
            0 === Object.keys(this.iconMap).length &&
              delete i.instanceMap[this.id]);
        }
      }
      i.instanceMap = {};
    },
    Br49: function (e, t, n) {
      var r, a, o, i;
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return i;
        }),
        (function (e) {
          (e.POPUP_TRIGGER = "user-authorize:popup-trigger"),
            (e.POPUP_CALLBACK = "user-authorize:popup-callback"),
            (e.USER_INFO_CHANGED = "passport-tee-auth-success");
        })(r || (r = {})),
        (function (e) {
          e.POPUP_SHOW = "popup-show";
        })(a || (a = {})),
        (function (e) {
          (e.POPUP_VISIBLE = "popup-visible"),
            (e.SHOW_TOAST = "toast"),
            (e.OPEN_WEBVIEW = "on-open-webview"),
            (e.POPUP_AUTH_SUCCESS = "success"),
            (e.POPUP_AUTH_FAIL = "fail"),
            (e.AUTH_POPUP_SHOW = "auth-popup-show"),
            (e.AUTH_STATUS_CHANGE = "auth-status-change");
        })(o || (o = {})),
        (function (e) {
          (e.MAIN = "main"), (e.POPUP = "popup");
        })(i || (i = {}));
    },
    BrFj: function (e, t, n) {
      n.d(t, "g", function () {
        return p;
      }),
        n.d(t, "f", function () {
          return h;
        }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "e", function () {
          return g;
        }),
        n.d(t, "d", function () {
          return m;
        }),
        n.d(t, "b", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return b;
        });
      var r = n("Fcif"),
        a = n("US/N"),
        o = n("9DIb"),
        i = n.n(o);
      function s() {
        return getApp({ allowDefault: !0 }) || {};
      }
      function c(e) {
        return new Promise((t) => {
          var n = s();
          e && n.prefetchCache ? t(delete n.prefetchCache[e]) : t(!1);
        });
      }
      function u(e) {
        var t,
          { prefetchKey: n, fallback: a } = e;
        return ((t = n),
        new Promise((e, n) => {
          var { prefetchCache: r } = s(),
            a = (r || {})[t];
          return a && a.value
            ? a.expiredAt < Date.now()
              ? n("cache is expired")
              : e(a.value)
            : n("no cache");
        }))
          .then((e) => (c(n), Object(r.a)({}, e, { __isPrefetched: !0 })))
          .catch((e) => (c(n), a()));
      }
      function d(e) {
        var t,
          n = e.subKdtId || e.sub_kdt_id || 0,
          {
            alias: a,
            umpAlias: o = "",
            umpType: s = "",
            type: c = "",
            activityType: u = "",
            activityId: d = "",
            oid: l = 0,
          } = i()(e);
        return Object(r.a)({}, e, {
          ump_alias: o,
          ump_type: s,
          activityId: d,
          activityType:
            ((t = u || c), ["share_goods", "new_goods"].includes(t) ? "" : t),
          alias: a,
          subKdtId: +n,
          oid: l,
          fullPresaleSupportCart: "true",
          platform: "weixin",
          client: "weapp",
          isGoodsWeappNative: 1,
          withoutSkuDirectOrder: "1",
          useNewSkuOrder: !0,
        });
      }
      var l = { listGoodsSalableStore: !1, hqStoreSearchService: !1 };
      function p(e) {
        return l.listGoodsSalableStore
          ? Promise.reject()
          : ((l.listGoodsSalableStore = !0),
            Object(a.default)({
              path: "/wscgoods/detail-api/list-goods-salable-store.json",
              data: e,
              method: "POST",
              withCredentials: !0,
            }));
      }
      var h = (e) =>
        Object(a.default)({
          method: "GET",
          path: "/wscshopcore/getPhysicalStoreList.json",
          data: e,
        });
      function f() {
        return Object(a.default)({
          method: "GET",
          path: "/wscshopcore/getStoreConfig.json",
        });
      }
      function g(e) {
        return Object(a.default)({
          path: "/v2/showcase/goods/retailSellingShops.json",
          data: { alias: e },
        });
      }
      var v = function (e, t) {
          void 0 === e && (e = {});
          var { goodsData: n } = e;
          "function" == typeof t && n && t(e);
        },
        m = (e, t) =>
          new Promise((n, r) => {
            (function (e) {
              var t = d(e);
              return Object(a.default)({
                path: "/wscgoods/tee-app/detail.json",
                data: t,
                withCredentials: !0,
                origin: "h5m",
                options: { useCdn: !0 },
              });
            })(e)
              .then(function (e) {
                if (
                  (void 0 === e && (e = {}),
                  v(e, t),
                  (function (e) {
                    void 0 === e && (e = {});
                    var { needRedirect: t, goodsData: n } = e;
                    return !(!t && n);
                  })(e))
                )
                  return n(e);
              })
              .catch((e) => {}),
              (function (e) {
                var t = () =>
                  Object(a.requestV2)({
                    path: "/wscgoods/tee-app/detail-v2.json",
                    data: d(e),
                    withCredentials: !0,
                  });
                return u({
                  prefetchKey: e.prefetchKey || "fetch:lanunch:goodsDetail",
                  fallback: t,
                }).then((e) => (e && e.goodsData ? e : t()));
              })(e)
                .then(function (e) {
                  void 0 === e && (e = {}), v(e, t), n(e);
                })
                .catch((e) => r(e));
          }),
        y = () =>
          Object(a.default)({
            path: "/wscgoods/detail-api/cart-count.json",
            withCredentials: !0,
          });
      function b(e) {
        return Object(a.requestUseCdn)({
          path: "/wscdeco/biz-component/list.json",
          data: e,
          withCredentials: !0,
        });
      }
    },
    BwoW: function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      var r = n("Y28S"),
        a = n("w2Y9"),
        o = n.n(a),
        i = n("US/N"),
        s = n("YeA1"),
        c = n("9ZMt"),
        u = n("zjWU"),
        d = function (e, t) {
          void 0 === t && (t = "error"),
            u.a.end({
              name: u.b.goods_detail,
              type: t,
              level: "error" === t ? "error" : "info",
              extra: { message: e },
            });
        },
        l = (e, t, n) => {
          var { msg: a, data: u = {}, message: l, deal: p } = e;
          if (p) return Promise.reject(e);
          "object" == typeof e && (e.deal = !0);
          var { NO_TRY: h } = e,
            f = a || l || u.msg || u.message || "",
            g = e.code || u.code,
            { showError: v = !0 } = u || {},
            m = !0;
          if (
            ((301010050 !== g && 5001001 !== g && 1001001 !== g) ||
              ((h = !0), (m = !1)),
            302 === g)
          ) {
            var { location: y } = u || {};
            (f = "Redirect to " + y), (v = !1);
            var { sl: b, sls: _ } = t,
              S = Object(r.c)({ sl: b, sls: _ });
            if (y) {
              var O = o.a.add(y, S);
              return (
                Object(s.a)().dmc.redirectTo(O),
                void d("特殊商品重定向", "finish")
              );
            }
            m = !1;
          }
          160900100 === g &&
            ((v = !1), (f = "多网点，需要跳转至网点选择"), (m = !1)),
            (429 !== g && 101302001 !== g && 101302002 !== g) ||
              ((f = "店铺太火爆啦，请稍后重试"), (m = !1)),
            m &&
              (function (e, t, n) {
                void 0 === e && (e = ""),
                  void 0 === t && (t = {}),
                  void 0 === n && (n = {});
                var { code: r = 0, message: a = "", stack: o = "" } = t,
                  s = JSON.stringify({
                    title: e,
                    extra: { code: r, message: a, stack: o, info: t, extra: n },
                  });
                Object(i.default)({
                  path: "/wscgoods/log",
                  method: "GET",
                  data: {
                    logtype: c.default.getEnv(),
                    msg: s,
                    timestamp: +new Date(),
                  },
                });
              })("ext-tee-wsc-goods::page-setup:error", e, { query: t }),
            e.isClientError && (f = "系统繁忙，请刷新重试"),
            d(
              h ? "商品不存在" : f || "系统繁忙，请刷新重试",
              h || g || !v ? "finish" : "error"
            );
          var w,
            P = {},
            I = (getCurrentPages() || []).length > 1,
            k = f || "系统繁忙，请刷新重试",
            C = h ? "进店逛逛" : "刷新";
          return (
            v &&
              m &&
              ((w = { name: "errorDialog", message: k, extra: e }),
              getApp().logger.requestError(w)),
            v &&
              wx.showModal({
                content: k,
                showCancel: I,
                cancelText: "返回",
                confirmText: C,
                confirmColor: "#EE0A24",
                cancelColor: "#323233",
                success(e) {
                  e.confirm
                    ? h
                      ? Object(s.a)().dmc.switchTab("Home", P)
                      : n()
                    : e.cancel && I && c.default.navigateBack();
                },
                fail() {
                  wx.showToast({ message: k });
                },
              }),
            Promise.reject(e)
          );
        };
    },
    C6tv: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return null !== e && ("object" == typeof e || "function" == typeof e);
        });
    },
    CBNg: function (e, t) {
      e.exports = {
        d: "retailLoading;2;coreReady;0;orderNo;2;orderNos;2;limitOrder;2;asyncOrder;2;orderCreation;2;state;2;contact;0;prepareData;0;confirmData;0;address;2;expressType;0;display;0;tradeTag;0;groupon;0;env;0;currentAddress;0;currentContact;0;selfFetchTime;0;receiveByGroupHeader;0;addressEditable;0;postage;0;goods;0;delivery;0;dine;2;pickUpWay;2;invoice;0;order;0;customerCards;0;unavailableCustomerCards;0;displayCard;0;displayFreeCard;0;orderCreated;0;showPoiPrompt;0;forcePoiSelect;0;shop;0;extra;0;valueCard;0;rechargeFreeOrderRule;0;periodBuy;0;memberCard;0;pointDeduction;0;pointsName;0;points;0;pay;0;fansBenefit;0;hasHaitaoGoods;0;idcard;0;ignoreIdBinding;0;storeGiftsInfo;0;dataLoaded;0;isChoosedCard;0;guaranteeOrderInfo;0;isOrderPage;0;guaranteeFreightBarPaddingConfig;0;useBeforePayData;0;guarantee;0;shopConfig;0;hotel;0;allMeetReduceActivities;0;showWxSubscribe;0;sellingPoint;0;appEnv;0;selfFetch;0;orderKeepApply;0;payAssetActivityTagDesc;0;shopStoredDiscountInfo;0;useStoredCustomerDiscount;0;useStoreBalancePayInFull;0;useStoredMemberCustomerDiscount;0;recommendDetaid;0;drugMessage;0;isPrescriptionDrugGoods;0;enableUseOrderBehaviorParam;0;enableUseUserAuthorize;0;isDrugShop;0;orderPaid;0;isScanCodeBuy;0;bookKey;0;payUmpDiscountMoney;0;totalPrice;0;isDepositPresale;0;prepayCardAvailable;0;prepayCardAvailableExclusion;0;prepayCardTotalAmount;0;couponDecrease;0;valueCardDecrease;0;prepayCardDecrease;0;couponDecreasedPhasePayment;0;finalPrice;0;finalNeedPayPrice;0;haitaoZeroOrder;0;orderFinalPrice;0;showDisplayCardPrice;0;balanceMkExclusion;0;isExistDiscountExcludePrePayCard;0;asyncOrderUnLimitCode;0;meituanCoupons;2;showPrepay;2;orderResult;0;umpBlockBase;0;grouponModel;4;couponModel;4;yzGuarantee;4;yzGuaranteeInfo;4;yzGuaranteeDocs;4;kdtId;4;presentData;4;themeColors;4;isTTVerifyScene;4;payRechargeInfo;4;orderedChosenCoupons;4;isRetailOrderScene;4",
        e: "onPrepareByBookKey;onCreateOrder;onConfirmOrder;follow:show;trade-buy-core:validate-effect",
        el: "trade-recharge:on-close;trade-recharge:on-select;recharge-free-order:on-confirm",
        w: "QueueMain",
        wc: "QueueMain",
        wd: "Main",
        l: "validateIdCard",
        lc: "",
        p: "mutateState;prepareByBookKey;createOrder;confirmOrder;createPrepay;switchAddressTab;setSelfFetch;selectContact;selectAddress;setNewContact;selectExpressType;setSelfFetchTime;setPeriodBuyChosenIndex;setPointDeductionUsed;setPointDeductionCost;setCustomCard;setDisplayCard;setOrderMessage;setOrderPrivacyBill;setInvoiceSubmit;setVerifyFail;updateAddress;addAddress;setAddressId;deleteAddress;setIdcard;setPrepayCardCheckStatus;setDisableStoredDiscount;setOrderForbidCoupon;setOrderForbidPreference;getDeliveryParam;updateAddressState;setDepositAgreement;fetchPromotion;modifyCacheOrder;setUmpActivity;setBestActivity;setIgnoreVirtualCoupon;handlePrepareDefaultError;saveContact;checkOrderPay;updateByCrossStoreSelfFetchCache;updateContactState;deleteContact;resetTradeBuyCore",
        pi: "genCreateParams;genConfirmParams;genPrepareByBookKeyParams;hook:afterPrepareByBookKey;hook:afterPrepareByBookKeyError;hook:beforeFetchShow;hook:afterFetchShow;hook:afterFetchShowError;hook:beforeCreateOrder;hook:afterCreateOrder;hook:afterCreateOrderError;hook:afterPrepay;confirmOrder;submitOrderAfterRisk;hook:beforeUpdateAddress;hook:mutateStateAfterFetch;handleAfterCreateOrderParallel;onExpressChanged;freeOrderJumpToResult;doRecharge;saveContact;showPrePayCardRecharge;onPaySuccess;submitOrder;createPrepay;setCustomCard;updateContactState",
        c: "",
        cc: "",
        li: "pageDestroyed",
      };
    },
    CR7H: function (e, t, n) {
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return u;
        });
      var r,
        a = n("bb6g"),
        o = n("oGZU"),
        i = function (e) {
          r = e;
        },
        s = function (e, t) {
          return Object(o.e)(
            e,
            Object(a.__assign)(Object(a.__assign)({}, t), {
              query: Object(a.__assign)(
                { kdt_id: r },
                null == t ? void 0 : t.query
              ),
            })
          );
        },
        c = function (e) {
          return (
            void 0 === e && (e = {}),
            s("/passport/api/authorize-dialog/user-auth.json", {
              method: "POST",
              data: Object(a.__assign)({ protocolVersion: 1 }, e),
            })
          );
        },
        u = function (e) {
          return (
            void 0 === e && (e = {}),
            Object(o.a)(Object(a.__assign)({ kdt_id: r }, e))
          );
        };
    },
    CzB4: function (e, t, n) {
      var r = n("w5ta"),
        a = n("RW/s"),
        o = n("0KRy");
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (o || a)(),
            string: new r(),
          });
      };
    },
    DHu0: function (e, t, n) {
      t.a = {
        ParamsError: 100,
        Timeout: 996,
        NoSupport: 997,
        Unknown: 998,
        Navigate: {},
        Device: {},
        Location: { Unsupport: 130, Timeout: 131 },
        Media: {
          InvalidVideoSelection: 140,
          SystemError: 141,
          NetworkError: 142,
          FileError: 143,
          FormatError: 144,
        },
        Network: {},
        View: {},
        Storage: {},
        Setting: {},
        Message: {},
        Share: {},
        Log: {},
        Event: {},
      };
    },
    DLzb: function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      });
      var r = (e, t) => {
        e.logger.setEvent({ params: { slg: t } }),
          e.logger.setContext({ slg: t }, t ? 30 : -1);
      };
    },
    DRK6: function (e, t) {},
    DXyM: function (e, t, n) {
      n.d(t, "a", function () {
        return u;
      });
      var r = n("+Y/m"),
        a = n.n(r),
        o = n("6iAT"),
        i = n.n(o),
        s = n("ucHI"),
        c = n.n(s);
      class u {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      u.widgets = { Main: a.a, EcardIntro: i(), CouponIntro: c() };
    },
    DZMJ: function (e, t, n) {
      var r = n("FEiO"),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return a.call(t, e) ? t[e] : void 0;
      };
    },
    E5w5: function (e, t, n) {
      var r;
      !(function (e) {
        (e.IOS = "ios"), (e.ANDROID = "android"), (e.UNKNOWN = "unknown");
      })(r || (r = {}));
    },
    Eagg: function (e, t, n) {
      n.d(t, "e", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return c;
        });
      n("eijD"), n("9KEa"), getApp();
      var r = {};
      function a() {
        if (r.scene) return r.scene;
        var { scene: e } =
          wx && wx.getEnterOptionsSync
            ? wx.getEnterOptionsSync() || {}
            : wx.getLaunchOptionsSync() || {};
        return (r.scene = e), r.scene;
      }
      function o() {
        var e = a();
        return [1177, 1176, 1175, 1195, 1208].includes(e);
      }
      function i() {
        return 1208 === a();
      }
      function s() {
        var e = a();
        return 1177 === e || 1176 === e;
      }
      wx &&
        (null == wx.onAppHide ||
          wx.onAppHide(() => {
            r = {};
          }));
      o();
      function c() {
        return 1195 === a();
      }
    },
    ErZi: function (e, t) {
      e.exports = {
        d: "",
        e: "",
        el: "",
        wd: "Widget",
        p: "getImSocketIns",
        pi: "",
      };
    },
    EzII: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = {};
        return e && 0 !== e.length && "string" == typeof t
          ? (e.forEach(function (e, a) {
              var o = n + a,
                i = t ? "".concat(t, "[").concat(o, "]") : o;
              r[i] = e;
            }),
            r)
          : r;
      };
      (t.default = r), (e.exports = t.default);
    },
    F6OL: function (e, t, n) {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = {
        compareVersions: ((r = n("NgLJ")) && r.__esModule ? r : { default: r })
          .default,
      };
      (t.default = a), (e.exports = t.default);
    },
    F6Qw: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("ABDU"),
        a = n.n(r);
      class o {
        constructor(e) {
          (this.ctx = e.ctx), (this.widget = a.a);
        }
      }
      o.widgets = { MainWidget: a() };
    },
    F9Sv: function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n("9KEa"),
        a = n("QLod"),
        o = 20;
      function i(e, t, n) {
        return Math.round((e * n) / t);
      }
      var s = function (e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        var { windowWidth: n } = Object(r.b)(),
          { supportCustomNav: s = !1 } = t,
          { detail: c = {}, touches: [u = {}] = [] } = e,
          d = c.x || u.pageX,
          l = c.y || u.pageY;
        if ("number" != typeof d || "number" != typeof l) return null;
        var p = Object(a.e)();
        if (s) {
          if (l <= p) return null;
          l -= p;
        }
        return { loc_x: i(d, n, o), loc_y: i(l, n, o) };
      };
    },
    FEiO: function (e, t, n) {
      var r = n("LSEb")(Object, "create");
      e.exports = r;
    },
    FWHJ: function (e, t) {
      e.exports = {
        d: "delivery;4;themeColors;4;themeCSS;4;themeTag;4;address;4;selfFetch;4;extra;4;kdtId;4;contact;4",
        e: "",
        el: "showDeliveryScopePopup;showTimePickerPopup",
        w: "TimePicker;ContactList;DeliveryScopePopup",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    FfeU: function (e, t) {
      var n =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global;
      e.exports = n;
    },
    GE03: function (e, t, n) {
      var r = n("xkFB"),
        a = n("4mhO"),
        o = n("4a20");
      function i(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
      }
      (i.prototype.add = i.prototype.push = a),
        (i.prototype.has = o),
        (e.exports = i);
    },
    GFa9: function (e, t, n) {
      var r = n("2wjL"),
        a = n("8B9M"),
        o = { navigate: i, redirect: s };
      function i(e) {
        void 0 === e && (e = {}),
          (getCurrentPages() || []).length >= 10 ? s(e) : wx.navigateTo(e);
      }
      function s(e) {
        void 0 === e && (e = {}), wx.redirectTo(e);
      }
      t.a = {
        switchTab: function (e, t) {
          void 0 === e && (e = {}), void 0 === t && (t = "navigate");
          var n = Object(a.a)(),
            r = o[t] || i;
          n.isSwitchTab(e.url).then((t) => {
            if (t) return wx.reLaunch(e);
            r(e);
          });
        },
        navigate: i,
        redirect: s,
        reLaunch: function (e) {
          void 0 === e && (e = {}), wx.reLaunch(e);
        },
        contactBack: function (e) {
          var { detail: t } = e;
          t.path && wx.navigateTo({ url: r.a.add(t.path, t.query) });
        },
        navigateWithBack: function (e) {
          var t = (function (e) {
            var t = -1,
              n = getCurrentPages() || [],
              a = n.findIndex((t) => {
                var { route: n, options: a } = t,
                  o = r.a.add(n, a);
                return o === e || "/" + o === e;
              });
            a > -1 && (t = n.length - a - 1);
            return t;
          })(e.url);
          if (t > -1) return wx.navigateBack({ delta: t });
          i(e);
        },
      };
    },
    GGNd: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("/XVY"),
        a = Object(r.a)({ tags: { default: () => [] }, type: { default: "" } });
    },
    GI0s: function (e, t, n) {
      var r = n("jgJv"),
        a = n("vMVM"),
        o = n("HLVI"),
        i = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : i && i in Object(e)
          ? a(e)
          : o(e);
      };
    },
    GRMa: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "g", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "e", function () {
          return d;
        });
      var r = n("h+Rz");
      function a(e) {
        return r.a.getShareInfo(e);
      }
      function o(e) {
        return r.a.showShareMenu(e);
      }
      function i(e) {
        return r.a.updateShareMenu(e);
      }
      function s(e) {
        return (
          void 0 === e && (e = ["shareAppMessage", "shareTimeline"]),
          r.a.hideShareMenu(e)
        );
      }
      function c(e) {
        return r.a.shareFileMessage(e);
      }
      function u(e) {
        return r.a.shareVideoMessage(e);
      }
      function d(e) {
        return r.a.showShareImageMenu(e);
      }
    },
    GUWE: function (e, t, n) {
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "c", function () {
          return l;
        });
      var r = n("Fcif"),
        a = n("ONqW"),
        o = n("NHEX"),
        i = n.n(o),
        s = n("noo5"),
        c = (n("BrFj"), n("hcPn"));
      var u = (e, t) =>
        t.needGetLocation
          ? Object(c.b)()
              .then((e) => {
                var { longitude: t, latitude: n } = e;
                return Promise.resolve({ lng: +t, lat: +n });
              })
              .catch(() => Promise.resolve({ lng: 0, lat: 0 }))
          : Promise.resolve({ lat: 0, lng: 0 });
      function d(e, t) {
        var { lng: n, lat: o } = t,
          {
            goodsData: s,
            shopData: c,
            pageParams: u,
            offlineData: d,
            shopMetaInfo: l,
          } = e,
          {
            alias: p,
            goods: { id: h },
            shopConfig: f = {},
            delivery: g = {},
          } = s,
          { kdtId: v } = c,
          { id: m } = d || {},
          { shopType: y, shopRole: b } = l,
          {
            supportExpress: _ = !0,
            supportLocalDelivery: S = !0,
            supportSelfFetch: O = !0,
          } = g,
          {
            hideShoppingCart: w = 0,
            freightInsurance: P = 1,
            isGift: I = 1,
            isWebImInGoods: k = 1,
            isWish: C = 1,
            showBuyBtn: T = 1,
            showShopBtn: x = 1,
            showWscWebIm: j = 1,
            scrmCreditDiyName: A = "{}",
            goodsActivityTagsPreposition: E = 1,
          } = f,
          D = {};
        try {
          D = JSON.parse(A);
        } catch (e) {}
        var { name: M = "积分" } = D,
          N = Object(r.a)({}, u, {
            alias: p,
            goodsId: h,
            kdtId: v,
            offlineId: m,
            stockNum: i()(s, "skuInfo.spuStock.stockNum", 0),
            supportExpress: _,
            supportLocalDelivery: S,
            supportSelfFetch: O,
            shopType: y,
            shopRole: b,
            pointsName: M,
            hideShoppingCart: w,
            freightInsurance: P,
            isGift: I,
            isWebImInGoods: k,
            isWish: C,
            showBuyBtn: T,
            showShopBtn: x,
            showWscWebIm: j,
            newcomerQueryType: "1",
            soldOutRecommendSwitch: i()(
              s,
              "shop.multiStore.setting.soldOutRecommendSwitch",
              !1
            ),
            isFastBuy: i()(s, "fastbuyFeature.isFastBuy", !1),
            buyBtnConfig: i()(s, "shopConfig.buyBtnConfig", ""),
            goodsActivityTagsPreposition: E,
            extra: {
              needUnstartActivityInfo: "true",
              fullPresaleSupportCart: "true",
            },
          }),
          { shareUserId: L, shareGroupId: R } = u || {};
        N.extra = Object(r.a)({}, N.extra, { shareUserId: L, shareGroupId: R });
        var B = Object(a.a)().getLogParams() || {},
          { scene: U } = B.context || {};
        1177 === U &&
          ((N.extra = { sceneId: String(U) }),
          d.status &&
            d.offlineSettings &&
            d.offlineSettings.separateStock &&
            (N.extra.independentStock = "1"));
        return Object(r.a)({}, N, { lng: n, lat: o });
      }
      function l(e, t) {
        return Promise.resolve()
          .then(() => u(e, t.offlineData))
          .then((e) => {
            var { lng: n, lat: a } = e;
            return ((e, t) => {
              var { lng: n = 0, lat: a = 0 } = t,
                { offlineData: o = {} } = e,
                i = d(e, { lng: n, lat: a });
              return Promise.resolve(e).then(function (t) {
                void 0 === t && (t = {});
                var c = (function (e, t) {
                    void 0 === e && (e = {});
                    var {
                      marketing: n,
                      pageFeature: r,
                      quotaUsed: a,
                      hasPurchaseRight: o,
                      haitaoTariffAmount: i = "",
                      salableStores: s,
                      soldNum: c,
                      spuStock: u,
                      skuStocks: d,
                      buyLimitType: l,
                      physicalStores: p,
                      buyLimitGuideInfo: h,
                      bosWorkFlow: f,
                      itemExtendInfo: g = {},
                      logistics: v,
                      wholesalerModel: m,
                    } = e;
                    return {
                      pageFeature: r,
                      goodsExtra: {
                        quotaUsed: a,
                        hasPurchaseRight: o,
                        haitaoTariffAmount: i,
                        pointsName: t,
                      },
                      buyLimitType: l,
                      salableStores: s,
                      soldNum: c,
                      spuStock: u,
                      skuStocks: d,
                      isFastBuy: !1,
                      marketing: n,
                      physicalStores: p,
                      buyLimitGuideInfo: h,
                      bosWorkFlow: f,
                      itemExtendInfo: g,
                      logistics: v,
                      wholesalerModel: m,
                    };
                  })(t, i.pointsName),
                  { lng: u, lat: d } = o.address || {},
                  l = Object(s.calculateDistance)(d, u, a, n);
                return (
                  (c.geoLocationData = { distance: l, lng: n, lat: a }),
                  (c.userGoodsStateParams = i),
                  Promise.resolve(Object(r.a)({}, e, c))
                );
              });
            })(t, { lng: n, lat: a });
          });
      }
    },
    "GXW/": function (e, t, n) {
      var r = n("Fcif"),
        a = n("lOd/"),
        o = n("OPDa"),
        i = n("x5Yp"),
        s = n("GrZP");
      t.a = Behavior({
        behaviors: [s.a],
        methods: {
          getComponentLoggerExtraParams(e) {
            return (
              void 0 === e && (e = {}),
              Object(i.a)(e) && (e = this.data.componentData),
              Object(a.a)(e)
            );
          },
          getComponentIndex() {
            var { componentData: e } = this.data,
              { componentIndex: t = 0 } = e;
            return t;
          },
          getComponentLoggerType(e) {
            return (
              void 0 === e && (e = ""),
              e || (e = this.data.componentData.type),
              Object(a.b)(e)
            );
          },
          getLoggerSpm: () => o.a.getPageSpmTypeId(),
          getPageRandomNumber: () => a.c,
          getBannerId(e) {
            return (
              void 0 === e && (e = 0),
              this.getLoggerSpm() +
                "~" +
                this.getComponentLoggerType() +
                "." +
                (this.getComponentIndex() + 1) +
                "~" +
                e +
                "~" +
                this.getPageRandomNumber()
            );
          },
          getCloudLoggerInfo(e) {
            var t = getCurrentPages(),
              { loggerParams: n, top: a, left: o, title: i } = e,
              { components_style_is_hotarea: s, item_type: c } = n || {},
              u = s ? { hotarea_top: a, hotarea_left: o } : {};
            return (
              "image_ad" === c && (u.image_title = i),
              Object(r.a)(
                { page_url: t[t.length - 1].route, img_url: e.imageUrl },
                u
              )
            );
          },
        },
      });
    },
    GYYO: function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      });
      var r = Behavior({
        properties: {
          url: String,
          linkType: { type: String, value: "navigateTo" },
        },
        methods: {
          jumpLink(e) {
            void 0 === e && (e = "url");
            var t = this.data[e];
            t &&
              ("navigateTo" === this.data.linkType &&
              getCurrentPages().length > 9
                ? wx.redirectTo({ url: t })
                : wx[this.data.linkType]({ url: t }));
          },
        },
      });
    },
    GrZP: function (e, t, n) {
      var r = n("XCh3");
      t.a = Behavior({
        methods: {
          ensureAppLogger(e, t) {
            if ("view" !== e || t.length) {
              var n = Object(r.b)(e, t);
              Object(r.a)(n);
            }
          },
        },
      });
    },
    "HC+1": function (e, t, n) {
      n.d(t, "b", function () {
        return U;
      }),
        n.d(t, "a", function () {
          return F;
        });
      var r = n("bb6g"),
        a = n("pn6R"),
        o = n.n(a),
        i = n("QxN7"),
        s = n("R4YI"),
        c = n("BILe"),
        u = n("CR7H"),
        d = n("mQt2"),
        l = i.platform.authLogger.logAll,
        p = function (e) {
          return Object(d.a)().then(function (t) {
            return t.getUserAuthData(e);
          });
        },
        h = function (e) {
          return Object(d.a)().then(function (t) {
            return t.getFallbackUserAuthData(e);
          });
        },
        f = function (e) {
          return Object(u.c)(Object(r.__assign)({ url: "" }, e)).catch(
            function (t) {
              throw (
                (l({
                  logName: "更新用户授权状态异常",
                  logData: Object(r.__assign)(Object(r.__assign)({}, e), {
                    errMsg: Object(i.getErrorMsg)(t),
                  }),
                }),
                t)
              );
            }
          );
        },
        g = n("eWMZ"),
        v = n("YeA1"),
        m = function (e) {
          var t = "授权组件初始化降级",
            n = Object(r.__assign)(Object(r.__assign)({}, e), {
              tee_env: i.teeEnv,
              component: "user_authorize",
            });
          !(function (e) {
            var t = (Object(v.a)() || {}).logger;
            "function" == typeof (null == t ? void 0 : t.log) && t.log(e);
          })({ ei: "user_authorize_demotion", et: "custom", en: t, params: n }),
            i.platform.authLogger.logSkynet(t, n);
        },
        y = n("bmpj"),
        b = i.platform.authLogger.logAll,
        _ = function (e) {
          var t = e.scene,
            n = e.authTypeList,
            r = e.kdtId,
            a = e.appId,
            o = e.ignoreCache,
            s = e.nativeAbility,
            c = e.needLatestNicknameAndAvatar,
            u = e.needUnionId,
            d = e.retryCount,
            l = void 0 === d ? 0 : d,
            f = e.comId,
            v = p({
              authTypeList: n,
              scene: t,
              kdtId: r,
              appId: a,
              nativeAbility: s,
              needLatestNicknameAndAvatar: c,
              needUnionId: u,
              ignoreCache: o,
            }),
            y = new Promise(function (e, t) {
              setTimeout(function () {
                return t("获取授权数据超时");
              }, g.b);
            });
          return Promise.race([v, y])
            .then(function (t) {
              return { authData: t, authOptions: e };
            })
            .catch(function (r) {
              var a = Object(i.getErrorMsg)(r);
              if (
                (b({
                  logName: "授权组件获取数据异常",
                  logData: {
                    errMsg: a,
                    error: r,
                    options: e,
                    retryCount: l,
                    comId: f,
                  },
                }),
                !(l >= 3))
              )
                throw r;
              return h({
                scene: t,
                authTypeList: n,
                needLatestNicknameAndAvatar: c,
                needUnionId: u,
              }).then(function (t) {
                return (
                  m({ reason: a, options: e }),
                  { authData: t, authOptions: e, downgrade: !0, error: r }
                );
              });
            })
            .catch(function (e) {
              throw e;
            });
        },
        S = function (e) {
          var t = e.authTypeList,
            n = e.hasAuth,
            r = e.scene,
            a = e.userDeny,
            o = e.bizDataMap,
            i = e.unionAuthType;
          return n
            ? Promise.resolve()
            : f(
                a
                  ? { denyList: t, scene: r }
                  : {
                      typeList: t,
                      unionAuthType: i,
                      bizDataMap: Object(y.a)(o),
                    }
              );
        },
        O = n("0WZd"),
        w = n("7yS6"),
        P = n.n(w),
        I = n("5Xe+"),
        k = n.n(I),
        C = i.platform.authLogger,
        T = C.logAuthClick,
        x = C.logAuthOne,
        j = C.logAuthEnd,
        A = C.logSkynet,
        E = P()(T, 3e3, { trailing: !0 }),
        D = {
          getLogParams: function (e) {
            var t = this.$_initData || {},
              n = t.authData || {},
              a = this.userInfo || {};
            try {
              var s = Object(r.__assign)(Object(r.__assign)({}, e), {
                eventTime: Date.now(),
                ctx: Object(r.__assign)(
                  Object(r.__assign)(
                    {},
                    k()(this, [
                      "buttonType",
                      "dialogType",
                      "authPopType",
                      "nativeAuthPopType",
                      "nativeAbility",
                      "supportFillNick",
                      "noMobileFallback",
                      "status",
                      "downgrade",
                      "authorizing",
                    ])
                  ),
                  {
                    cpnType: "tee",
                    privacy: this.authState,
                    authTypeList: this.userAuthList,
                    authPopTypeList: this.authList,
                    allowDenyMap: this.$_authAllowDenyMap,
                    retryCount: this.$_retryCount,
                    errMsg: Object(i.getErrorMsg)(this.$_error),
                  }
                ),
                biz: Object(r.__assign)(
                  Object(r.__assign)(
                    {},
                    k()(this, [
                      "kdtId",
                      "scene",
                      "authTypeList",
                      "allowDeny",
                      "disabled",
                      "bizDataMap",
                    ])
                  ),
                  {
                    cpnMode: this.type,
                    needUnionId: this.needGetUnionId,
                    needLatestNicknameAndAvatar:
                      this.needUpdateNicknameAndAvatar,
                  }
                ),
                userInfo: { uid: a.userId, login: Object(O.d)(a.hasLogin) },
                init: {
                  downgrade: t.downgrade,
                  errMsg: Object(i.getErrorMsg)(t.error),
                  privacy: n.authState,
                  customAuthData: n.customAuthData,
                  sceneAuthData: n.sceneAuthData,
                },
              });
              return o()(s);
            } catch (e) {
              return (
                A("授权日志转换异常", {
                  errMsg: Object(i.getErrorMsg)(e),
                  err: e,
                }),
                {}
              );
            }
          },
          logAuthClick: function (e) {
            var t = this.getLogParams(e);
            E(t);
          },
          logAuthOne: function (e) {
            var t;
            x(
              this.getLogParams({
                auth: {
                  cur: {
                    mobile: e.mobile,
                    authPopType: e.authPopType,
                    authTypeList: e.authTypeList,
                    authPopTypeList: e.authPopTypeList,
                    agree: Object(O.d)(e.agree),
                    allowDeny: Object(O.d)(e.allowDeny),
                    verifyType:
                      null !== (t = e.verifyType) && void 0 !== t
                        ? t
                        : i.MobileVerifyType.Unknown,
                  },
                  his: this.$_authHistory,
                },
              })
            );
          },
          logAuthEnd: function (e) {
            var t = (e || {}).success;
            j(this.getLogParams({ success: Object(O.d)(t) }));
          },
        },
        M = {
          execAuthOneAfterHooks: function (e) {
            var t = this,
              n = e.agree,
              r = e.authTypes,
              a = void 0 === r ? [] : r,
              o = {
                actionType: n
                  ? i.AuthActionType.Agree
                  : i.AuthActionType.Disagree,
                authTypeList: a,
                authState: this.authState,
                leftAuthTypeList: this.userAuthList.slice(0),
                pageUrl: Object(i.getPageURL)(),
              };
            return i.hooks
              .executeHookAsync(
                function () {
                  var e;
                  return [
                    null === (e = t.hooks) || void 0 === e
                      ? void 0
                      : e.authItemAfter,
                    i.hooks.authorizeHook.authItemAfter.get(),
                  ].filter(Boolean);
                },
                [o],
                !0
              )
              .then(function (e) {
                var t = e[0],
                  n = t;
                return (
                  Array.isArray(t) && t.length && (n = t[0]),
                  void 0 === n || !!n
                );
              })
              .catch(function (e) {
                return !1;
              });
          },
        },
        N = i.platform.authLogger.logAll,
        L = Object(r.__assign)(
          Object(r.__assign)(Object(r.__assign)({}, D), M),
          {
            handleBtnClick: function (e) {
              Object(s.b)(s.a.buttonClickAfter.get),
                this.logAuthClick({ btnDetail: e });
            },
            handleBtnDisabledClick: function (e) {
              var t = this,
                n = function (n) {
                  t.logAuthClick({ message: n, btnDetail: e });
                };
              n("授权组件按钮快速点击"),
                !this.authorizing &&
                  e.disabled &&
                  (this.status === c.a.ERROR &&
                    ((this.$_retryCount = this.$_retryCount + 1 || 1),
                    n("授权组件按钮点击重试"),
                    this.rerender({ source: "retry", ignoreCache: !0 })),
                  this.showToast({
                    message: "系统处理中，请稍后重试",
                    forbidClick: !0,
                  }));
            },
            rerender: function (e) {
              var t = this;
              if (!this.kdtId) return Promise.reject("unready");
              if (this.disabled)
                return (
                  (this.buttonType = -1),
                  (this.status = c.a.NONE),
                  Promise.reject("disabled")
                );
              Object(u.b)(this.kdtId);
              var n = e || {},
                r = n.source,
                a = n.nativeAbility,
                o = n.ignoreCache,
                s = void 0 !== o && o,
                d = Math.random();
              return (
                (this.$_renderSeq = d),
                (this.status = c.a.PENDING),
                this.fetchAuthData({ ignoreCache: s, nativeAbility: a })
                  .then(function (e) {
                    if (t.$_renderSeq === d) return t.renderAuthData(e);
                  })
                  .then(function (e) {
                    e && ((t.$_error = null), (t.status = c.a.READY));
                  })
                  .catch(function (e) {
                    throw (
                      ((t.status = c.a.ERROR),
                      (t.$_error = e),
                      N({
                        logName: "授权组件渲染异常",
                        logData: {
                          errMsg: Object(i.getErrorMsg)(e),
                          error: e,
                          comId: t.$_event.id,
                        },
                      }),
                      "retry" === r &&
                        t.showToast({
                          message: "授权初始化失败，请稍后重试",
                          forbidClick: !0,
                        }),
                      e)
                    );
                  })
              );
            },
            fetchAuthData: function (e) {
              var t = e || {},
                n = t.ignoreCache,
                r = t.nativeAbility;
              return _({
                ignoreCache: n,
                nativeAbility: r,
                kdtId: this.kdtId,
                appId: this.appId || Object(i.getAppId)(),
                scene: this.scene,
                authTypeList: this.authTypeList,
                needLatestNicknameAndAvatar: this.needUpdateNicknameAndAvatar,
                needUnionId: this.needGetUnionId,
                retryCount: this.$_retryCount,
                comId: this.$_event.id,
              });
            },
            renderAuthData: function (e) {
              var t = this,
                n = e.authData,
                r = e.downgrade,
                a = n.authPopType,
                i = n.authState,
                s = n.authTypeList,
                c = n.authPopTypeList,
                u = n.userInfo,
                d = n.platformConfig,
                l = n.authButtonType,
                p = n.authDialogType,
                h = n.sceneAuthData,
                f = n.nativeAuthPopType,
                g = n.nativeAbility,
                v = n.supportFillNickAvatar,
                m = n.randomNickList,
                y = n.noMobileFallback,
                b = (h || {}).authAllowDenyMap;
              return (
                (this.authPopType = a || ""),
                (this.buttonType = l || ""),
                (this.dialogType = p || ""),
                (this.authState = i),
                (this.userAuthList = s),
                (this.authList = c),
                (this.nativeAuthPopType = f || ""),
                (this.userInfo = u),
                (this.supportFillNick = v),
                (this.aNickList = m),
                (this.noMobileFallback = !!y),
                (this.config = d),
                (this.downgrade = r),
                (this.$_nativeAbility = g),
                (this.$_authAllowDenyMap = b),
                Promise.resolve()
                  .then(function () {
                    t.$_initData = o()(e);
                  })
                  .catch(function (e) {}),
                e
              );
            },
            updateAuth: function (e) {
              var t = e.authTypeList,
                n = e.unionAuthType,
                r = e.userDeny,
                a = e.hasAuth,
                o = e.bizDataMap;
              return S({
                scene: this.scene,
                authTypeList: t,
                unionAuthType: n,
                hasAuth: a,
                userDeny: r,
                bizDataMap: o,
              });
            },
            authNext: function (e) {
              var t = this,
                n = e.authPopType,
                r = e.authTypeList,
                a = e.agree,
                o = e.newRenderData.authData;
              return (
                0 === o.authTypeList.length &&
                  (this.logAuthEnd({ success: !0 }), this.success()),
                this.execAuthOneAfterHooks({ authTypes: r, agree: a }).then(
                  function (e) {
                    e && a && o.authPopType !== n && t.showPopup();
                  }
                )
              );
            },
            handleAuthStatusChange: function (e) {
              var t = (e || {}).authorizing;
              this.authorizing = t;
            },
            handleAuthorize: function (e) {
              var t = this,
                n = e || {},
                a = n.userAuthList,
                o = void 0 === a ? [] : a,
                s = n.type,
                c = n.popupType,
                u = n.unionAuthType,
                d = n.hasAuth,
                l = n.data,
                p = n.cb,
                h = n.onError,
                f = n.userDeny,
                g = n.allowDeny,
                v = l || {},
                m = v.mobile,
                y = v.verifyType,
                b = v.needMobileAuth,
                _ = !f,
                S = {
                  authPopType: s,
                  agree: _,
                  authTypeList: o,
                  allowDeny: g,
                  mobile: m,
                  verifyType: y,
                  needMobileAuth: b,
                },
                w = function (e) {
                  try {
                    p && p();
                  } catch (e) {}
                  return e;
                };
              if (!s) return w(), void this.success();
              var P = Array.isArray(s) ? s : [s];
              (this.authorizing = !0),
                this.updateAuth({
                  authTypeList: o,
                  unionAuthType: u,
                  userDeny: f,
                  hasAuth: d,
                  bizDataMap: this.bizDataMap,
                })
                  .then(function () {
                    if (
                      ((t.$_authHistory = (t.$_authHistory || []).concat(
                        s + "_" + Object(O.d)(_)
                      )),
                      t.logAuthOne(S),
                      _ && P.includes(i.AuthPopType.MOBILE))
                    )
                      return new Promise(function (e) {
                        t.$emit("on-login", function () {
                          return e();
                        });
                      });
                  })
                  .then(function () {
                    return t.fetchAuthData({ ignoreCache: !0 });
                  })
                  .then(w)
                  .then(function (e) {
                    return (
                      Promise.resolve().then(function () {
                        _ && t.exposeAuthPopupEvent(P, c, "auth-popup-allow"),
                          t.$_event.authSuccess({
                            authTypeList: o,
                            authPopTypeList: P,
                            scene: t.scene,
                            userDeny: f,
                          });
                      }),
                      e
                    );
                  })
                  .then(function (e) {
                    return Object(O.c)(200).then(function () {
                      return e;
                    });
                  })
                  .then(function (e) {
                    return (
                      t.renderAuthData(e),
                      t.authNext({
                        authPopType: s,
                        authTypeList: o,
                        agree: _,
                        newRenderData: e,
                      })
                    );
                  })
                  .catch(function (e) {
                    var n = Object(i.getErrorMsg)(e);
                    throw (
                      (N({
                        logName: "单项授权异常",
                        logData: Object(r.__assign)(Object(r.__assign)({}, S), {
                          errMsg: n,
                          err: e,
                        }),
                      }),
                      t.showToast({
                        message: "授权失败，" + (n || "请稍后重试"),
                      }),
                      h && h(e),
                      e)
                    );
                  })
                  .finally(function () {
                    t.authorizing = !1;
                  });
            },
          }
        ),
        R = n("pTxV"),
        B = {
          appId: String,
          customStyle: String,
          scene: String,
          authTypeList: { type: Array, value: [] },
          kdtId: Number,
          trigger: String,
          needUpdateNicknameAndAvatar: { type: Boolean, default: !1 },
          needGetUnionId: { type: Boolean, default: !1 },
          type: { type: String, default: R.UserAuthorizeType.NORMAL },
          zIndex: Number,
          desc: { type: String, default: void 0 },
          disabled: { type: Boolean, default: !1 },
          privacyProtocol: Object,
          userProtocol: Object,
          popupCustomStyle: String,
          allowDeny: Boolean,
          protocolSource: String,
          protocolIsCloudSlot: { type: Boolean, default: !1 },
          bizDataMap: Object,
          hooks: Object,
        },
        U = function (e) {
          return Object(r.__assign)(Object(r.__assign)({}, B), e);
        },
        F = function (e) {
          return Object(r.__assign)(Object(r.__assign)({}, L), e);
        };
    },
    HE1N: function (e, t, n) {
      var r = n("cm7J"),
        a = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : a.call(t, n, 1), --this.size, !0)
        );
      };
    },
    HLVI: function (e, t) {
      var n = Object.prototype.toString;
      e.exports = function (e) {
        return n.call(e);
      };
    },
    HbRL: function (e, t, n) {
      function r(e, t) {
        try {
          if (e === t || !e || !t) return 0;
          for (
            var n = e.split("."),
              r = t.split("."),
              a = n.length,
              o = r.length,
              i = 0,
              s = Math.min(a, o);
            i < s;
            i++
          ) {
            var c = parseInt(n[i], 10),
              u = parseInt(r[i], 10);
            if ((isNaN(c) && (c = 0), isNaN(u) && (u = 0), c !== u))
              return c > u ? 1 : -1;
          }
          return a > o ? 1 : a < o ? -1 : 0;
        } catch (e) {
          return -1;
        }
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    "HdG+": function (e, t) {
      e.exports = {
        d: "cloudDesignConfig;4",
        w: "ProtocolPopup;ProtocolContent;CloudProtocolContent",
        wc: "ProtocolContent;CloudProtocolContent",
        wd: "InjectProtocol",
        p: "invokeProtocolCloud",
        pi: "invokeAuthCloud",
      };
    },
    Hhx2: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "h", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "i", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "g", function () {
          return h;
        }),
        n.d(t, "f", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return g;
        });
      var r = n("Fcif"),
        a = n("taYb"),
        o = n("a1Mm"),
        i = function (e) {
          void 0 === e && (e = {});
          var t =
            (e = a.a.toCamelCase(e)).tree &&
            e.tree.map((e) => {
              var t = e.v.map((e) => ((e.imgUrl = Object(o.a)(e.imgUrl)), e));
              return Object(r.a)({}, e, { v: t });
            });
          return Object(r.a)({}, e, { tree: t });
        },
        s = function (e) {
          void 0 === e && (e = []);
          var t = {};
          return (
            e.forEach((e) => {
              t[e.kS] = e.v;
            }),
            t
          );
        },
        c = function (e, t) {
          void 0 === e && (e = []);
          var n = Object.keys(t).filter((e) => "" !== t[e]);
          return e.length === n.length;
        },
        u = function (e, t) {
          return (
            void 0 === e && (e = []),
            e.filter((e) =>
              Object.keys(t).every((n) => String(e[n]) === String(t[n]))
            )[0]
          );
        },
        d = function (e, t) {
          if ((void 0 === e && (e = []), 0 === e.length)) return [];
          var n = s(e);
          return Object.keys(t).reduce((e, r) => {
            var a = n[r],
              o = t[r];
            if ("" !== o) {
              var i = a.filter((e) => e.id === o)[0];
              i && e.push(i);
            }
            return e;
          }, []);
        },
        l = function (e, t, n) {
          void 0 === e && (e = []);
          var { key: a, valueId: o } = n,
            i = Object(r.a)({}, t || {}, { [a]: o }),
            s = Object.keys(i).filter((e) => "" !== i[e]);
          return (
            e
              .filter((e) => s.every((t) => String(i[t]) === String(e[t])))
              .reduce((e, t) => e + t.stockNum, 0) > 0
          );
        },
        p = (e, t) => {
          var n = [];
          return (
            (e || []).forEach((e) => {
              if (t[e.kId] && t[e.kId].length > 0) {
                var a = [];
                e.v.forEach((n) => {
                  t[e.kId].indexOf(n.id) > -1 && a.push(Object(r.a)({}, n));
                }),
                  n.push(Object(r.a)({}, e, { v: a }));
              }
            }),
            n
          );
        },
        h = (e, t) =>
          0 === e.length ||
          !e
            .filter((e) => {
              var { isNecessary: t } = e;
              return !1 !== t;
            })
            .some((e) => {
              var { kId: n } = e;
              return 0 === (t[n] || []).length;
            }),
        f = (e) => {
          var {
              skuTree: t = [],
              selectedSku: n,
              properties: r,
              selectedProp: a,
            } = e,
            o = t
              .filter((e) => !n[e.kS])
              .map((e) => {
                var { k: t } = e;
                return t;
              }),
            i = r
              .filter((e) => {
                var { isNecessary: t } = e;
                return !1 !== t;
              })
              .filter((e) => {
                var { kId: t } = e;
                return 0 === (a[t] || []).length;
              })
              .map((e) => {
                var { k: t } = e;
                return t;
              });
          return [...o, ...i].length > 0
            ? "请选择" + [...o, ...i].join("、")
            : "";
        };
      function g(e) {
        var { available_coupon_act_ids: t, availableCouponActIds: n } =
          e.option || {};
        return t && t.length ? t[0] : n && n.length ? n[0] : null;
      }
    },
    HmHG: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, n) {
          var r,
            a,
            o = n || {},
            i = o.leading,
            s = o.trailing,
            c = 0,
            u = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              (c = !1 === i ? 0 : new Date().getTime()),
                (r = null),
                e.apply(a, t),
                r || (a = null);
            },
            d = function () {
              for (var n = [], o = 0; o < arguments.length; o++)
                n[o] = arguments[o];
              var d = new Date().getTime();
              c || !1 !== i || (c = d);
              var l = t - (d - c);
              (a = this),
                l <= 0 || l > t
                  ? (r && clearTimeout(r),
                    (r = null),
                    (c = d),
                    e.apply(a, n),
                    r || (a = null))
                  : r ||
                    !1 === s ||
                    (r = setTimeout(function () {
                      return u.apply(a, n);
                    }, l));
            };
          return (
            (d.cancel = function () {
              r && clearTimeout(r), (c = 0), (r = null);
            }),
            d
          );
        });
    },
    IIov: function (e, t, n) {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = ((r = n("49Kr")) && r.__esModule ? r : { default: r }).default;
      (t.default = a), (e.exports = t.default);
    },
    IL7q: function (e, t, n) {
      var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      function i(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, s, c = i(e), u = 1; u < arguments.length; u++) {
              for (var d in (n = Object(arguments[u])))
                a.call(n, d) && (c[d] = n[d]);
              if (r) {
                s = r(n);
                for (var l = 0; l < s.length; l++)
                  o.call(n, s[l]) && (c[s[l]] = n[s[l]]);
              }
            }
            return c;
          };
    },
    J03g: function (e, t) {
      e.exports = {
        d: "themeColors;4;themeCSS;4;isDirectPushRoute;4",
        e: "",
        el: "",
        w: "Main",
        wc: "",
        wd: "Main",
        l: "",
        lc: "triggerEvent;getDb;onEventOnce",
        p: "",
        pi: "getLocation;hook:mutateListAfterFetch;autoEnterShop;setApplicationScene",
        c: "",
        cc: "",
      };
    },
    J8k1: function (e, t, n) {
      t.a = [
        "text",
        "title",
        "store",
        "search",
        "feature_video_search",
        "coupon",
        "cube_v3",
        "notice",
        "groupon",
        "points_goods",
        "goods",
        "goods_recommend",
        "tag_list_top",
        "tag_list_left",
        "ump_seckill",
      ];
    },
    J9xP: function (e, t, n) {
      var r = n("cm7J");
      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    JUQZ: function (e, t) {
      e.exports = {
        d: "kdtId;2;alias;2;offlineId;0;themeVars;2;themeColors;2;pageVars;2;pageParams;2;clientTemplate;2;serverStatus;2;env;2;pageSwitch;2;shopBaseInfo;2;shopConfig;2;shopMpInfo;2;shopMetaInfo;2;multistore;2;userState;2;buyConfig;2;openAppConfig;2;goodsBaseInfo;2;goodsPriceInfo;2;goodsMetaInfo;2;goodsCombineInfo;2;supplier;2;payWays;2;distribution;2;goodsDetail;2;activityInfo;2;goodsSkuData;2;pageFeature;2;marketActivity;2;memberActivity;2;promotionActivity;2;goodsActivity;2;query;2;buyerId;2;cpsConfigKey;2;goodsExtendInfo;2;retail;2;physicalStores;2;navigationText;2;userInfo;2;userGoodsStateParams;0;isHomePage;2;isTabPage;2;multiSkuDecision;2;marketing;0;logisticsTimeliness;2;isSupportSkuDirectOrder;2;isSupportEstimated;2;platform;2;userStateSupportSkuDirectOrder;2;featureSwitch;2;staticConfig;2;wholesalerModel;2;pointsConfig;0;umpActivity;0;currentActivity;0;isGroupOn;0;isCoupon;0;buttonUmpTimelimitModel;0;activityInfoForPrice;0;seActivity;0;isNotPresent;0;fansBenefit;0;wecomFansBenefit;0;buyLimitGuideInfo;2;cartCount;2;guaranteeData;2;voucherModelList;2;isGuideNeedPkgShareUrl;0;hasFinishLoad;2;skuDirectVersion;2;atmosphereDataTag;2;pageKey;2;oid;4;yunDesignConfig;4;cloudDesignConfig;4",
        e: "goodsSetupReady;goodsSetupInit",
        el: "page-container:scrollLocked",
        l: "checkFromChannelsOpenFlow;checkFromShowcase;checkIsChannels;checkIsHalfScreen;checkIsNeedSyncOrderScene;checkIsOpenByLiveBag;checkIsOpenByLiveGoodsShare;checkIsWxvideoLive",
        lc: "getPlatform;getUserInfo;hasLogin",
        p: "setShareIcon;updateCartCount;getGoodsDetail",
        pi: "autoEnterShop;updateBtnsUI;beforeRefreshCartCount;updateSupportSkuDirectOrder;tee-api:getLocation",
        li: "beforePageMount;onPullDownRefresh;beforePageCreate;pageDestroyed",
      };
    },
    JdrY: function (e, t, n) {
      n.d(t, "j", function () {
        return r;
      }),
        n.d(t, "e", function () {
          return a;
        }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "g", function () {
          return i;
        }),
        n.d(t, "l", function () {
          return s;
        }),
        n.d(t, "k", function () {
          return c;
        }),
        n.d(t, "h", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "i", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return f;
        });
      var r = {
          HOME: 1,
          CART: 2,
          WISH: 3,
          CONTACT: 4,
          SHARE: 5,
          USERCENTER: 6,
          BACK_TO_TOP: 7,
          SCAN: 8,
          GUANG_LIVE: 20,
          GOODS_SHOWCASE: 21,
          WECHAT_VIDEO: 22,
          CUSTOME: [101, 102, 103, 104, 105, 106, 107, 108, 109],
        },
        a = {
          1: "主页",
          2: "购物车",
          3: "心愿单",
          4: "客服",
          5: "分享",
          6: "个人中心",
          7: "顶部",
          8: "扫一扫",
        },
        o = {
          1: "/pages/home/dashboard/index",
          "1-retail": "/pages-retail/home-shelf/index",
          2: "/packages/goods/cart/index",
          6: "/packages/usercenter/dashboard/index",
          "6-retail": "/packages/retail/usercenter/dashboard-v2/index",
        },
        i = /\/(v2|wscshop)\/(showcase\/)?(goods|seckill)(\/adv)?/,
        s = /\/wscgoods\/wholesale_detail/,
        c = {
          1: [
            /^(packages|pages)\/home\/dashboard/,
            /^packages\/tee-home|ext-home\/dashboard/,
            /\/(v2|wscshop)\/(showcase\/)?(homepage|home)/,
          ],
          3: [
            /^(packages|pages)\/home\/feature/,
            /^packages\/tee-home|ext-home\/feature/,
            /^(packages|pages)\/home\/tab/,
            /^packages\/ext-home\/tab\/(one|two|three)/,
            /\/(v2|wscshop)\/(showcase\/)?feature(?!\/goods\/all)/,
          ],
          8: [
            /^pages\/goods\/detail/,
            /^packages\/goods(:?-v\d+)?\//,
            i,
            /\/wscgoods\/(detail|seckill)/,
            s,
            /\/pay\/wscgoods_order/,
          ],
          9: [
            /^packages\/shop\/goods\/all/,
            /^packages\/shop\/goods\/group/,
            /^packages\/goods-list\/tag/,
            /^packages\/goods-list\/all/,
            /^packages\/shop\/goods\/tag-list\/index/,
            /\/wscshop\/(tag|allgoods)/,
            /\/v2\/(showcase\/)?(tag|allgoods)/,
            /\/feature\/goods\/all/,
            /\/wscshop\/showcase\/tag/,
          ],
        },
        u = { HOME: 1, FEATURE: 3, GOODS_DETAIL: 8, GOODS_GROUP: 9 },
        d = {
          ADD_CART: "submit:act",
          PULL_DOWN: "home:refresh",
          SHARE: "share:show",
          SHOW_GOODS_CASE: "goods:showcase",
          PAGE_SCROLL: "page:scroll",
          CREATE_OR_UPDATE_INDEPENDENT_ICON:
            "create:or:update:inderendent:icon",
          UPDATE_ICON_POSITION: "floating:nav:update:position",
          SHOW_WISH_PANEL: "floating:nav:wish:show",
          WISH_STATE_CHANGE: "wish:state:change",
        },
        l = { 1: !0, 3: !0, 8: !0, 9: !1 },
        p = { 1: "homepage", 3: "micropage" },
        h = { GOODS_SHOWCASE: 10 },
        f = {
          iconUrl:
            "https://b.yzcdn.cn/public_files/53ad2c5a0f8d476e9a9ccf9fadff7710.png",
          independent: !0,
          navType: 5,
          order: 1,
          status: 1,
          title: "分享",
          isExtra: !0,
          isReplace: !0,
        };
    },
    JijB: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "YYYY:MM:DD";
          e || 0 === e || (e = new Date());
          if ("Invalid Date" === (e = new Date(e)).toString())
            throw new Error("Invalid Date");
          var n = function (e) {
              return ("00" + e).slice(-2);
            },
            r = {
              "YYYY|yyyy": e.getFullYear(),
              "YY|yy": e.getFullYear().toString().substr(2),
              MM: n(e.getMonth() + 1),
              M: e.getMonth() + 1,
              "DD|dd": n(e.getDate()),
              "D|d": e.getDate(),
              "HH|hh": n(e.getHours()),
              "H|h": e.getHours(),
              mm: n(e.getMinutes()),
              m: e.getMinutes(),
              ss: n(e.getSeconds()),
              s: e.getSeconds(),
            };
          return (
            Object.keys(r).forEach(function (e) {
              t = t.replace(new RegExp(e), r[e]);
            }),
            t
          );
        }),
        (e.exports = t.default);
    },
    JjL0: function (e, t) {},
    K3Aj: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n("MLLI"),
        a = n("hmrP"),
        o = n.n(a);
      function i() {
        var { windowWidth: e } = Object(r.b)(),
          t = Math.min(e, 540);
        return o.a.isMobile() ||
          (function () {
            var { model: e } = Object(r.b)();
            return o.a.isIPad() || /ipad/gi.test(e);
          })()
          ? e
          : t;
      }
      function s(e) {
        var t = document.createElement("a");
        (t.href = e),
          (t.style.display = "none"),
          document.body.appendChild(t),
          t.click(),
          document.body.removeChild(t);
      }
    },
    KQ2A: function (e, t, n) {
      n.d(t, "d", function () {
        return v;
      }),
        n.d(t, "c", function () {
          return y;
        }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "b", function () {
          return _;
        });
      var r = n("Fcif"),
        a = n("GFa9"),
        o = n("8B9M"),
        i = n("Yt9W"),
        s = n("jA1y"),
        c = n("2wjL"),
        u = Object(o.a)();
      function d(e) {
        var t = c.a.getAll() || {},
          n = Object(r.a)(
            {
              goods_id: e.goodsId,
              num: e.num,
              sku_id: e.skuId,
              price: e.price || 0,
              dc_ps: i.b.getDCPS(),
              qr: e.qr || "",
              tpps: t.tp_ps || "",
            },
            e.messages,
            {
              extensions: e.extensions || {},
              isInstallment: Boolean(e.isInstallment),
              propertyIds: e.propertyIds || [],
            }
          ),
          a = {
            kdt_id: e.kdtId || u.getKdtId(),
            postage: e.postage || 0,
            activity_alias: e.activityAlias,
            activity_id: e.activityId,
            activity_type: e.activityType,
            use_wxpay: e.useWxpay || 0,
            order_from: e.orderFrom || "",
            cloud_order_ext: e.cloudOrderExt || "",
            couponId: e.couponId,
          };
        "string" == typeof e.price &&
          e.price.indexOf(!1) &&
          (n.price = 100 * +e.price),
          e.isPoints &&
            ((n.points_price = e.pointsPrice), (n.price = e.remainPrice)),
          e.fcode && (n.fcode = e.fcode),
          "number" == typeof e.deliverTime && (n.deliver_time = e.deliverTime),
          e.gdtClickId && (n.gdt_id = e.gdtClickId),
          e.channelId && (n.channel_id = e.channelId);
        var o = e.storeId || u.getOfflineId();
        return (
          o && (a.store_id = o),
          e.umpStepPerson && (a.ladder_num = e.umpStepPerson),
          e.hotelGoods && (a.hotel_goods = e.hotelGoods),
          e.appointmentTime &&
            (a.card_goods = { appointment_time: e.appointmentTime }),
          e.orderType && (a.order_type = e.orderType),
          e.isPoints && (a.is_points = e.isPoints),
          e.from && (a.from = e.from),
          e.loginTicket && (a.loginTicket = e.loginTicket),
          e.paymentSuccessRedirect &&
            (a.payment_success_redirect = e.paymentSuccessRedirect),
          e.selectedInstallmentPeriod &&
            ((a.installmentRate = e.installmentRate),
            (a.selectedInstallmentPeriod = e.selectedInstallmentPeriod)),
          { goodsData: n, commonData: a }
        );
      }
      var l = "buyNow",
        p = "addCart";
      function h(e) {
        var { comboDetailModel: t, skuId: n, flag: r } = e,
          { comboGroupModels: a = [] } = t,
          o = {};
        o =
          1 !== a.length || a[0].skuId
            ? a.find((e) => e.skuId === n) || {}
            : a[0];
        var { comboSubItemModels: i = [], goodsComboGroupId: s = "" } = o;
        return {
          subComboList: i.reduce((e, t) => {
            if (0 === t.isDisplay) return e;
            var { skuRelatedModels: n = [], propModels: a = [] } = t,
              o = [],
              i = a.reduce((e, t) => {
                var { textModels: n } = t;
                return (
                  n.forEach((t) => {
                    e.push(t.id);
                  }),
                  e
                );
              }, []);
            return (
              n.forEach((e) => {
                var { combineNum: t, itemId: n, price: a, skuId: c } = e,
                  u = { goodsId: n, num: t, price: a, skuId: c };
                r === l && (u.groupId = s),
                  i.length && (u.propertyIds = i),
                  o.push(u);
              }),
              e.push(...o),
              e
            );
          }, []),
          goodsComboGroupId: s,
        };
      }
      var f = Object(o.a)(),
        g = { actName: "buy", et: "click", ei: "buy", en: "购买" };
      function v(e) {
        var t;
        void 0 === e && (e = {});
        var { et: n, ei: a, en: o } = g;
        return (
          f.logger &&
            f.logger.log({
              et: n,
              ei: a,
              en: o,
              params: {
                price: 100 * (e.price || 0),
                goods_id: e.goodsId,
                goods_name: null == (t = e.itemDataModel) ? void 0 : t.title,
                num: e.num,
                sku_id: e.skuId,
              },
              si: f.getKdtId(),
            }),
          y(
            (function (e) {
              var { goodsData: t, commonData: n } = d(e),
                { itemDataModel: a } = e,
                { comboMark: o = {}, comboDetailModel: i = {} } = a || {},
                { isCombo: s = !1, comboType: c = 0 } = o;
              if (s) {
                var u = h({ comboDetailModel: i, skuId: t.sku_id, flag: l }),
                  { subComboList: p = [] } = u;
                t.extra = { COMBO_INFO: { comboType: c, subComboList: p } };
              }
              var { birthdayInfo: f = {} } = e;
              return (
                t.extra || (t.extra = {}),
                (t.extra = Object.assign({}, t.extra, f)),
                { goodsList: [Object(r.a)({}, t)], extraData: n }
              );
            })(e)
          )
        );
      }
      function m(e, t) {
        var n = getCurrentPages().pop();
        return n && n[e] ? n[e](t) : Promise.resolve();
      }
      function y(e) {
        void 0 === e && (e = {});
        var { goodsList: t = [], extraData: n = {} } = e;
        if (t && 0 !== t.length) {
          var o = n.storeId || n.store_id || f.getOfflineId();
          return (
            o && (n.store_id = o),
            wx.showLoading(),
            (function (e) {
              void 0 === e && (e = {});
              var t = { success: !0 };
              if (e.couponId)
                return ((n = { id: e.couponId }),
                Object(s.c)({
                  path: "/wsctrade/order/detail/getVoucher.json",
                  method: "POST",
                  data: {
                    activityId: n.id,
                    bizName: "showcase",
                    source: "wap_showcase",
                  },
                }))
                  .then(() => t)
                  .catch(() => t);
              var n;
              return Promise.resolve(t);
            })(n)
              .then(() => m("beforeBuyEvent", Object(r.a)({}, t[0] || {})))
              .then(() =>
                Object(s.c)({
                  header: {
                    "content-type": "application/x-www-form-urlencoded",
                  },
                  path: "/wsctrade/order/goodsBook.json",
                  data: {
                    goodsList: JSON.stringify(t),
                    common: JSON.stringify(n),
                    biz_trace_point_ext: i.b.getTradeLog(),
                  },
                  method: "POST",
                })
              )
              .then((e) => {
                var { bookKey: r } = e;
                if (r) {
                  var o = "/packages/order/index?bookKey=" + r;
                  return (
                    n.orderFrom && (o += "&orderFrom=" + n.orderFrom),
                    m("afterBuyEvent", {
                      goodsList: t,
                      extraData: n,
                      url: o,
                      bookKey: r,
                    })
                      .then(
                        () => (
                          a.a.navigate({ url: o }),
                          wx.hideLoading(),
                          Promise.resolve()
                        )
                      )
                      .catch((e) => (wx.hideLoading(), Promise.reject(e)))
                  );
                }
                return wx.hideLoading(), Promise.reject();
              })
              .catch(function (e) {
                void 0 === e && (e = {}),
                  wx.hideLoading(),
                  !e.noToast &&
                    wx.showToast({
                      title: e.msg || e.message || "购买失败，重新试试",
                      icon: "none",
                      duration: 2e3,
                    });
              })
          );
        }
        wx.showToast({ title: "购买未选择商品", icon: "none", duration: 2e3 });
      }
      function b(e, t, n) {
        void 0 === t && (t = {}),
          f.logger &&
            f.logger.log({
              et: t.et || "click",
              ei: t.ei || "add_cart",
              en: t.en || "添加购物车",
              params: t.params || {
                goods_id: e.goodsId,
                num: e.num,
                sku_id: e.skuId,
              },
            });
        var a = (function (e) {
            var { goodsData: t, commonData: n } = d(e),
              a = Object(r.a)({}, t, n, {
                messages: JSON.stringify(e.cartMessages || []),
                biz_trace_point_ext: i.b.getTradeLog(),
                extensions: JSON.stringify(t.extensions),
                propertyIds: JSON.stringify(t.propertyIds),
              }),
              { comboDetailModel: o, comboMark: s } = e.itemDataModel || {};
            if (s && s.isCombo) {
              var { isCombo: c = !1, comboType: u = 0 } = s;
              if (c) {
                var { subComboList: l, goodsComboGroupId: f } = h({
                    comboDetailModel: o,
                    skuId: t.sku_id,
                    flag: p,
                  }),
                  g = [{ id: f, subComboList: l }];
                (a.comboType = u),
                  (a.isCombo = c),
                  (a.groupList = JSON.stringify(g));
              }
            }
            return (
              e.cartBizMarkDTO && (a.cartBizMarkDTO = e.cartBizMarkDTO || {}), a
            );
          })(e),
          { birthdayInfo: o = {} } = e;
        return (
          (a.extra = JSON.stringify(o)),
          Object(s.c)({
            path: "/wscshop/trade/cart/goods.json",
            header: {
              "content-type": n || "application/x-www-form-urlencoded",
            },
            data: a,
            method: "POST",
          })
        );
      }
      function _(e) {
        return Object(s.c)({
          path: "/wscgoods/detail-api/calculate-price.json",
          method: "POST",
          data: Object(r.a)({}, e, {
            itemSalePropList: JSON.stringify(e.itemSalePropList),
          }),
        });
      }
    },
    KhBQ: function (e, t, n) {
      n.d(t, "c", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "a", function () {
          return b;
        });
      var r = n("Fcif"),
        a = n("BrFj"),
        o = n("US/N"),
        i = n("2wjL"),
        s = n("KEq0"),
        c = n.n(s),
        u = n("5Xe+"),
        d = n.n(u),
        l = n("YeA1"),
        p = n("Sipi"),
        h = n("GFyo");
      function f() {
        var e = getCurrentPages();
        return "packages/goods/share/index" === e[e.length - 1].route;
      }
      function g(e, t) {
        var { needRedirect: n, redirectPath: a, metadata: o, goodsData: i } = t;
        return f()
          ? Promise.resolve(t)
          : n
          ? (Object(l.a)().dmc.redirectTo(a, Object(r.a)({}, e, o)),
            Promise.reject({
              msg: "商品后端重定向 ->" + a,
              data: { showError: !1 },
            }))
          : Promise.resolve(t);
      }
      function v(e, t, n) {
        var { shopMetaInfo: o = {} } = n || {},
          { kdtId: s } = o;
        if (
          (function (e) {
            var { shopMetaInfo: t = {} } = e || {};
            return !!t.isChainStore;
          })(n)
        ) {
          var c = Object(r.a)({}, t);
          return (
            delete c.shopAutoEnter,
            delete c.subKdtId,
            delete c.sub_kdt_id,
            (function (e, t) {
              var n = i.a.add(e.env.route, t);
              return e.dmc.route
                .createUrl("GoodsDetail", t)
                .then((e) => e.url)
                .catch(() => n);
            })(e, c).then((o) => {
              var [i] = e.process.invoke("autoEnterShop", t, {
                redirectUrl: o,
                forceKdtId: s,
              });
              return i.then((e) =>
                e && e !== s
                  ? Object(a.d)(Object(r.a)({}, c, { subKdtId: e }))
                  : Promise.resolve(n)
              );
            })
          );
        }
        return Promise.resolve(n);
      }
      function m(e, t) {
        var n = "goodsDetail-" + t,
          a = Object(p.b)(n),
          o = {};
        if (a) {
          var { title: i = "", image: s = {}, price: u = "" } = a;
          (e.data.goodsBaseInfo = {
            alias: t,
            title: i,
            pictures: [Object(r.a)({}, s, { url: c()(s.url, "!260x0.jpg") })],
            goodsPriceInfo: { showPriceBlock: !0, price: u },
          }),
            (o = { goodsPriceInfo: { showPriceBlock: !0, price: u } }),
            Object(h.e)(n);
        }
        Object(h.c)("goodsDetailRanta").then(function (n) {
          void 0 === n && (n = {});
          var a = {},
            i = n.data || null;
          if (i) {
            var {
              shopBaseInfo: s,
              theme: c,
              env: u,
              retail: l,
              kdtId: p,
              shopConfig: h,
              showTopBar: f,
            } = i;
            (a = {
              shopBaseInfo: s,
              shopConfig: h,
              theme: c,
              env: u,
              retail: l,
              kdtId: p,
              showTopBar: f,
            }),
              i[t] &&
                (o = Object(r.a)(
                  {},
                  o,
                  d()(i[t], ["goodsBaseInfo", "goodsMetaInfo", "distribution"])
                ));
          }
          Object.assign(e.data, a, o);
        });
      }
      function y(e) {
        Object(h.c)("goodsDetailRanta").then(function (t) {
          void 0 === t && (t = {});
          var {
              alias: n,
              kdtId: a,
              goodsBaseInfo: o,
              shopBaseInfo: i,
              shopConfig: s,
              goodsMetaInfo: c,
              theme: u,
              env: d,
              retail: l,
              distribution: p,
              showTopBar: f,
            } = e,
            g = Object(r.a)({}, t.data),
            { goodsRecord: v = [] } = g;
          ((g.shopBaseInfo = i),
          (g.shopConfig = s),
          (g.theme = u),
          (g.env = d),
          (g.retail = l),
          (g.kdtId = a),
          (g.showTopBar = f),
          (v = v.filter((e) => e !== n)).push(n),
          v.length > 10) && delete g[v.shift()];
          (g.goodsRecord = v),
            (g[n] = { goodsBaseInfo: o, goodsMetaInfo: c, distribution: p }),
            Object(h.g)("goodsDetailRanta", g);
        });
      }
      function b(e, t, n) {
        function r(e, t) {
          var { kdtId: r } = (e || {}).shopMetaInfo || {};
          r && Object(o.setKdtId)(r),
            e && e.goodsData && n instanceof Function && t(e);
        }
        return Object(a.d)(t)
          .then(function (e) {
            return void 0 === e && (e = {}), g(t, e);
          })
          .then((a) => (r(a, n), v(e, t, a)))
          .then((e) => {
            var { goodsData: t, shopMetaInfo: a = {} } = e || {},
              { isChainStore: o } = a;
            return t
              ? (o && r(e, n), Promise.resolve(e))
              : Promise.reject({ code: 301010050, msg: "商品不存在" });
          });
      }
    },
    LHcj: function (e, t, n) {
      n.d(t, "d", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return c;
        });
      var r = n("2ktG"),
        a = Object(r.a)(),
        o = {};
      function i(e, t) {
        o[e] = t;
      }
      function s(e) {
        return o[e];
      }
      function c(e) {
        delete o[e];
      }
    },
    LHnf: function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = n("9ZMt");
      function a(e) {
        r.default.$native.onUnhandledRejection(e);
      }
      function o(e) {
        r.default.$native.offUnhandledRejection(e);
      }
    },
    LSEb: function (e, t, n) {
      var r = n("Yzgk"),
        a = n("X/0h");
      e.exports = function (e, t) {
        var n = a(e, t);
        return r(n) ? n : void 0;
      };
    },
    LYai: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = function (e) {
        var t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
        };
        return "".concat(e).replace(/(&|<|>|"|')/g, function (e) {
          return t[e];
        });
      };
      (t.default = r), (e.exports = t.default);
    },
    LrYe: function (e, t, n) {
      t.a = {
        mounted() {
          this._onPageScroll();
        },
        methods: {
          _getCurrentPage() {
            if ("function" == typeof getCurrentPages) {
              var e = getCurrentPages();
              return e && e.length ? e[e.length - 1] || {} : null;
            }
          },
          _onPageScroll() {
            var e = this._getCurrentPage();
            if (e && e.onPageScroll) {
              if ("function" != typeof this.onPageScroll) return;
              var t = e.onPageScroll;
              e.onPageScroll = (n) => {
                t.call(e, n), this.onPageScroll(n);
              };
            }
          },
        },
      };
    },
    LvFB: function (e, t, n) {
      n.d(t, "a", function () {
        return d;
      });
      var r = n("Fcif"),
        a = n("lE6+"),
        o = n("0lqJ"),
        i = n("xRet");
      var s = n("vpHN");
      function c() {
        var e = getCurrentPages(),
          t = "";
        try {
          t = e[e.length - 1].__wxExparserNodeId__;
        } catch (e) {}
        return t;
      }
      var u = {
          "packages/usercenter/dashboard/index": "usercenter",
          "pages/home/tab/one": "h-t-1",
          "pages/home/tab/two": "h-t-2",
          "pages/home/tab/three": "h-t-3",
        },
        d = {
          data: { attachedPageId: "" },
          onLoad(e) {
            (this.containerOptions = e),
              this.setAttachedPageId(),
              this.onRantaPageAttached(),
              this.triggerRantaTabPageReady();
          },
          onShow() {
            var e, t;
            (this.getTabBar() &&
              this.getTabBar().setData({ selectedIndex: Object(o.a)() }),
            this.attachedPage) &&
              (null == (e = (t = this.attachedPage).onShow) || e.call(t));
          },
          onUnload() {
            var e, t;
            this.attachedPage &&
              (null == (e = (t = this.attachedPage).onUnload) || e.call(t));
          },
          onHide() {
            var e, t;
            this.attachedPage &&
              (null == (e = (t = this.attachedPage).onHide) || e.call(t));
          },
          onShareAppMessage(e) {
            var t, n;
            return this.attachedPage
              ? null == (t = (n = this.attachedPage).onShareAppMessage)
                ? void 0
                : t.call(n, e)
              : {};
          },
          onReachBottom() {
            var e, t;
            this.attachedPage &&
              (null == (e = (t = this.attachedPage).onReachBottom) ||
                e.call(t));
          },
          onPageScroll(e) {
            var t, n;
            this.attachedPage &&
              (null == (t = (n = this.attachedPage).onPageScroll) ||
                t.call(n, e));
          },
          onPullDownRefresh(e) {
            var t, n;
            this.attachedPage &&
              (null == (t = (n = this.attachedPage).onPullDownRefresh) ||
                t.call(n, e));
          },
          setAttachedPageId() {
            u[this.route] ||
              new Promise(function (e, t) {
                Object(a.a)().then(function (n) {
                  var r = Object(o.a)(),
                    a = n[r] || {},
                    s = a.routingType,
                    c = a.attachedId;
                  if (s === i.c && c) return e(c);
                  t(n[r]);
                });
              })
                .then((e) => {
                  this.setData({ attachedPageId: e });
                })
                .catch((e) => {
                  if ((delete getApp().globalData.tabBarParams, !e))
                    return wx.reLaunch({ url: "/pages/home/dashboard/index" });
                  var t = Object(s.b)(e);
                  wx.reLaunch({ url: "/" + t });
                });
          },
          triggerRantaTabPageReady() {
            u[this.route] && getApp().trigger("ranta-tab-page-ready-" + c());
          },
          onRantaPageAttached() {
            getApp().on("async-page-attached-" + c(), (e) => {
              var t,
                n,
                { rantaCtx: a } = e,
                { attachedPageId: o } = this.data;
              o || (o = u[this.route]),
                (this.attachedPage = this.selectComponent("#" + o));
              var i = { _route: this.route };
              null == a ||
                null == (t = a.env) ||
                null == (n = t.router) ||
                null == n.updateRoute ||
                n.updateRoute(this.route),
                Object.assign(this.attachedPage[Symbol.for("vm")], i);
              var { tabBarParams: s = {} } = getApp().globalData,
                c = s[o];
              if ("retail-shelf" === o) {
                var { tabbarOriginList: d = {} } = getApp().globalData,
                  l = d.find((e) => "retail-shelf" === e.attachedId),
                  { extra: p = {} } = l || {},
                  h =
                    wx.getStorageSync(
                      "ExtraArgsFromShopSelectToOriginalPage"
                    ) || {};
                wx.clearStorageSync("ExtraArgsFromShopSelectToOriginalPage"),
                  (c = Object(r.a)({}, p, c, h));
              }
              "feature" === o &&
                (c = Object(r.a)({}, this.containerOptions, c)),
                this.execPageLifeCycle(
                  this.attachedPage,
                  c || this.containerOptions
                ),
                delete getApp().globalData.tabBarParams;
            });
          },
          onTabPageAttached(e) {
            this.attachedPage = this.selectComponent("#" + e.currentTarget.id);
            var t = Object(r.a)(
              { route: this.route, __route__: this.route },
              this.attachedPage.__freeData__ || {}
            );
            Object.assign(this.attachedPage, t);
            var { tabBarParams: n = {} } = getApp().globalData,
              a = n[e.currentTarget.id];
            this.execPageLifeCycle(
              this.attachedPage,
              a || this.containerOptions
            ),
              delete getApp().globalData.tabBarParams;
          },
          execPageLifeCycle(e, t) {
            Object(a.a)().then((n) => {
              var r = getApp(),
                a = n[Object(o.a)()],
                { spm: i } = a || {};
              if (i) {
                var s = getCurrentPages(),
                  { route: c } = s[s.length - 1];
                r.logger.spmHelper.setMoreSpm({ [c]: i });
              }
              null == e.onLoad || e.onLoad(t || {}),
                null == e.onShow || e.onShow(),
                null == e.onReady || e.onReady();
            });
          },
        };
    },
    "M+mJ": function (e, t, n) {
      var r = n("DXKY"),
        { on: a, once: o, off: i, trigger: s } = r.a,
        c = { off: i, trigger: s };
      Object.assign(c, { on: a, once: o }), (t.a = c);
    },
    MJHg: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n("6MKc"),
        a = n("6S0u"),
        o = (e) => ({
          enter:
            "van-" +
            e +
            "-enter van-" +
            e +
            "-enter-active enter-class enter-active-class",
          "enter-to":
            "van-" +
            e +
            "-enter-to van-" +
            e +
            "-enter-active enter-to-class enter-active-class",
          leave:
            "van-" +
            e +
            "-leave van-" +
            e +
            "-leave-active leave-class leave-active-class",
          "leave-to":
            "van-" +
            e +
            "-leave-to van-" +
            e +
            "-leave-active leave-to-class leave-active-class",
        });
      function i(e) {
        return Behavior({
          properties: {
            customStyle: String,
            show: { type: Boolean, value: e, observer: "observeShow" },
            duration: { type: null, value: 300, observer: "observeDuration" },
            name: { type: String, value: "fade" },
          },
          data: { type: "", inited: !1, display: !1 },
          ready() {
            !0 === this.data.show && this.observeShow(!0, !1);
          },
          methods: {
            observeShow(e, t) {
              e !== t && (e ? this.enter() : this.leave());
            },
            enter() {
              this.enterFinishedPromise ||
                (this.enterFinishedPromise = new Promise((e) => {
                  var { duration: t, name: n } = this.data,
                    i = o(n),
                    s = Object(a.f)(t) ? t.enter : t;
                  "enter" !== this.status &&
                    ((this.status = "enter"),
                    this.$emit("before-enter"),
                    Object(r.m)(() => {
                      "enter" === this.status &&
                        (this.$emit("enter"),
                        this.setData({
                          inited: !0,
                          display: !0,
                          classes: i.enter,
                          currentDuration: s,
                        }),
                        Object(r.m)(() => {
                          "enter" === this.status &&
                            ((this.transitionEnded = !1),
                            this.setData({ classes: i["enter-to"] }),
                            e());
                        }));
                    }));
                }));
            },
            leave() {
              this.enterFinishedPromise &&
                this.enterFinishedPromise.then(() => {
                  if (this.data.display) {
                    var { duration: e, name: t } = this.data,
                      n = o(t),
                      i = Object(a.f)(e) ? e.leave : e;
                    (this.status = "leave"),
                      this.$emit("before-leave"),
                      Object(r.m)(() => {
                        "leave" === this.status &&
                          (this.$emit("leave"),
                          this.setData({
                            classes: n.leave,
                            currentDuration: i,
                          }),
                          Object(r.m)(() => {
                            "leave" === this.status &&
                              ((this.transitionEnded = !1),
                              setTimeout(() => {
                                this.onTransitionEnd(),
                                  (this.enterFinishedPromise = null);
                              }, i),
                              this.setData({ classes: n["leave-to"] }));
                          }));
                      });
                  }
                });
            },
            onTransitionEnd() {
              if (!this.transitionEnded) {
                (this.transitionEnded = !0), this.$emit("after-" + this.status);
                var { show: e, display: t } = this.data;
                !e && t && this.setData({ display: !1 });
              }
            },
          },
        });
      }
    },
    MiJW: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("Fcif");
      function a(e) {
        var { link: t = {} } = e,
          { query: n = {}, umpType: a, activityId: o } = t,
          i = {};
        return (
          a && o && (i = { activityId: o, umpType: a }),
          Object(r.a)({}, e, {
            link: Object(r.a)({}, t, { query: Object(r.a)({}, n, i) }),
          })
        );
      }
    },
    MjBJ: function (e, t) {
      e.exports = {
        d: "biz;0;quickMode;0;isPreCashierPay;0;excludePayTools;0;buyerPhone;0;buyerId;0;orderAmount;0;preCashierChannel;0;bizExt;0;isPriorUseChosen;0;tradeTag;4;shop;4;display;4;state;4;appId;4;useBeforePayData;4;prepareData;4;confirmData;4;order;4;orderFinalPrice;4;preferredPayChannel;6;goods;4;orderNo;4;periodBuy;4;isPeriodBuy;4;yzGuaranteeInfo;4;buyButtonClickTime;4",
        el: "cashier:pay:success;cashier:pay:fail;cashier:close;cashier:opened;cashier:change",
        w: "Installment;Main",
        wd: "Main",
        l: "",
        lc: "",
        p: "startPay;onPaySuccessSync;queryPayChannels;doPay;handlePayAfterCreateOrder;handleBeforePay;onPayItemClick",
        pi: "startPay;showSubscription;queryPayChannels;doPay;startPay_preCashier;mutateState",
      };
    },
    Mqxx: function (e, t, n) {
      n.d(t, "a", function () {
        return p;
      }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "f", function () {
          return f;
        }),
        n.d(t, "e", function () {
          return g;
        }),
        n.d(t, "b", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return _;
        });
      var r = n("Fcif"),
        a = n("z24M"),
        o = n("50K0"),
        i = n("SVbq"),
        s = {},
        c = "https://h5.youzan.com/";
      var u,
        d =
          ((u = wx.request),
          function (e) {
            return new Promise((t, n) => {
              var o =
                u &&
                u(
                  Object(r.a)({}, e || {}, {
                    header: {
                      "Extra-Data": JSON.stringify({
                        is_weapp: 1,
                        client: "weapp",
                        bizEnv: "wsc",
                        skip_sid: 1,
                        version: Object(a.a)("userVersion"),
                      }),
                    },
                    success(r) {
                      var a;
                      if (
                        429 === r.statusCode &&
                        e.url.includes("homepage-detail.json")
                      )
                        return wx.showModal({
                          content: "店铺太火爆啦，请稍后重试",
                          confirmText: "刷新",
                          cancelText: "关闭",
                          success: (e) => {
                            e.cancel && wx.exitMiniProgram(),
                              e.confirm && wx.restartMiniProgram();
                          },
                        });
                      0 ===
                      (null == r || null == (a = r.data) ? void 0 : a.code)
                        ? t(r.data.data)
                        : n({
                            data: null == r ? void 0 : r.data,
                            statusCode: r.statusCode,
                          });
                    },
                    reject: n,
                  })
                );
              o && o.then && o.catch && o.then(t, n);
            });
          });
      function l(e) {
        var { path: t, kdtId: n, hadEnterShop: r } = e;
        return d({
          url: c + "wscdeco/homepage-detail.json",
          data: {
            stage: 16,
            check_multi_store: 1,
            fetchSepHqStoreDetail: Object(i.z)() ? 1 : 0,
            close_chainstore_webview_limit: !0,
            check_old_home: 1,
            hadEnterShop: r,
            kdt_id: n || Object(a.a)("kdtId"),
            version_control: JSON.stringify({
              use_native_feature_page: 1,
              feature_page_path: t,
            }),
          },
        }).catch((e) => {
          429 === e.statusCode &&
            wx.showModal({
              content: "店铺太火爆啦，请稍后重试",
              confirmText: "刷新",
              cancelText: "关闭",
              success: (e) => {
                e.cancel && wx.exitMiniProgram(),
                  e.confirm && wx.restartMiniProgram();
              },
            });
        });
      }
      function p(e, t) {
        return t({
          path: "/wscdeco/brand-feature-detail.json",
          data: {
            stage: 16,
            hadEnterShop: !0,
            kdt_id: e,
            labelType: "usercenter,freeMemberCenter,payMemberCenter",
          },
        });
      }
      function h(e) {
        return o.a
          .getMiniappPrefetchData("homeFeature", {})
          .then((t) => {
            var n,
              { kdtId: r, homeDetailInfo: o } = e;
            if (o) return (o.needEnterShop = !1), o;
            if (!t || null == t || null == (n = t.components) || !n.length)
              return l(e).catch((e) =>
                Promise.reject({ type: "homeErr", err: e })
              );
            null != t && t.id && (t.isPreload = !0);
            var { shopMetaInfo: { kdtId: s } = {} } = t;
            return +s != +r
              ? l(e)
                  .then((e) => e)
                  .catch((e) => Promise.reject({ type: "homeErr", err: e }))
              : (+Object(a.a)("kdtId") != +s && (t.needEnterShop = !1),
                Object(i.k)("pho", t),
                t);
          })
          .catch(
            (t) => (
              Object(i.k)("pho", t),
              t && "homeErr" === t.type ? Promise.reject(t.err) : l(e)
            )
          );
      }
      var f = (e, t, n) => {
          var { pageData: a } = n,
            { guestKdtId: o, shopAutoEnter: i } = a || {},
            s = o || e;
          return Object(r.a)({}, t, { kdt_id: s, shopAutoEnter: i });
        },
        g = (e, t) => {
          var n = s[e.key];
          return n
            ? Promise.resolve(n)
            : d({ url: c + "v3/weapp/scene-code-v2.json", data: e }).then(
                (n) => {
                  var { pageData: r } = n;
                  return (s[e.key] = f(e.kdt_id, t, { pageData: r })), s[e.key];
                }
              );
        },
        v = { fetch: null, result: null };
      function m() {
        return d({
          url: c + "wscdeco/homepage-video-ad.json",
          data: { kdtId: Object(a.a)("kdtId") },
        }).then((e) => ((v.result = e), e));
      }
      function y() {
        return v.result
          ? Promise.resolve(v.result)
          : (v.fetch ||
              (v.fetch = o.a
                .getMiniappPrefetchData("homeAd")
                .then((e) =>
                  e ? ((v.result = e), e) : m().catch((e) => Promise.reject(e))
                )
                .catch((e) => m())),
            v.fetch);
      }
      function b() {
        var e = "global_custom_loading";
        return d({
          url: c + "wscshopcore/extension/configs.json",
          method: "POST",
          data: { keys: [e], kdtId: Object(a.a)("kdtId") },
        }).then((t) => {
          var n = t[e] || "{}",
            { open: r, resource: a } = JSON.parse(n);
          return r ? a : "";
        });
      }
      function _() {
        return new Promise((e) => {
          o.a
            .getMiniappPrefetchData("globalCustomLoading")
            .then((t) => {
              e(null == t ? b() : t);
            })
            .catch(() => {
              e(b());
            });
        });
      }
    },
    NURP: function (e, t) {
      e.exports = {
        d: "cpsConfigKey;4;kdtId;4;buyerId;4",
        w: "Main",
        wd: "Main",
      };
    },
    NV8i: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("RmQ0"),
        a = n.n(r);
      class o {
        constructor(e) {
          this.ctx = e.ctx;
        }
        beforePageMount(e) {
          var { query: t, route: n } = e;
        }
      }
      o.widgets = { Widget: a() };
    },
    NW04: function (e, t, n) {
      n.d(t, "c", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return i;
        });
      var r = n("US/N");
      n("9ZMt"), n("MLLI");
      function a(e) {
        return "object" != typeof e || null == e
          ? ""
          : Object.keys(e)
              .map(function (t) {
                var n = e[t];
                return "object" == typeof n
                  ? "--" +
                      t +
                      ": linear-gradient(to right, " +
                      n.start +
                      ", " +
                      n.end +
                      ")"
                  : "--" + t + ": " + n;
              })
              .join(";")
              .concat(";");
      }
      var o = a({
        general: "#f44",
        "main-bg": "#f44",
        "main-text": "#fff",
        "vice-bg": "#f85",
        "vice-text": "#fff",
        "start-bg": "#ff6060",
        "end-bg": "#f44",
      });
      function i(e) {
        var t = null == e ? {} : { kdt_id: e };
        return Object(r.default)({
          path: "/wscshop/shop/theme_and_colors.json",
          method: "GET",
          query: t,
        });
      }
    },
    NWgQ: function (e, t, n) {
      var r = n("X7EK"),
        a = n("IL7q"),
        o = n("5+rW");
      function i(e, t) {
        return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
      }
      function s(e) {
        var t = e.indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function c(e, t) {
        var n = (function (e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function (e, n, r) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n))
                      : (r[e] = n);
                };
              case "bracket":
                return function (e, n, r) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== r[e]
                        ? (r[e] = [].concat(r[e], n))
                        : (r[e] = [n])
                      : (r[e] = n);
                };
              default:
                return function (e, t, n) {
                  void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                };
            }
          })((t = a({ arrayFormat: "none" }, t))),
          r = Object.create(null);
        return "string" != typeof e
          ? r
          : (e = e.trim().replace(/^[?#&]/, ""))
          ? (e.split("&").forEach(function (e) {
              var t = e.replace(/\+/g, " ").split("="),
                a = t.shift(),
                i = t.length > 0 ? t.join("=") : void 0;
              (i = void 0 === i ? null : o(i)), n(o(a), i, r);
            }),
            Object.keys(r)
              .sort()
              .reduce(function (e, t) {
                var n = r[t];
                return (
                  Boolean(n) && "object" == typeof n && !Array.isArray(n)
                    ? (e[t] = (function e(t) {
                        return Array.isArray(t)
                          ? t.sort()
                          : "object" == typeof t
                          ? e(Object.keys(t))
                              .sort(function (e, t) {
                                return Number(e) - Number(t);
                              })
                              .map(function (e) {
                                return t[e];
                              })
                          : t;
                      })(n))
                    : (e[t] = n),
                  e
                );
              }, Object.create(null)))
          : r;
      }
      (t.extract = s),
        (t.parse = c),
        (t.stringify = function (e, t) {
          !1 ===
            (t = a({ encode: !0, strict: !0, arrayFormat: "none" }, t)).sort &&
            (t.sort = function () {});
          var n = (function (e) {
            switch (e.arrayFormat) {
              case "index":
                return function (t, n, r) {
                  return null === n
                    ? [i(t, e), "[", r, "]"].join("")
                    : [i(t, e), "[", i(r, e), "]=", i(n, e)].join("");
                };
              case "bracket":
                return function (t, n) {
                  return null === n
                    ? i(t, e)
                    : [i(t, e), "[]=", i(n, e)].join("");
                };
              default:
                return function (t, n) {
                  return null === n
                    ? i(t, e)
                    : [i(t, e), "=", i(n, e)].join("");
                };
            }
          })(t);
          return e
            ? Object.keys(e)
                .sort(t.sort)
                .map(function (r) {
                  var a = e[r];
                  if (void 0 === a) return "";
                  if (null === a) return i(r, t);
                  if (Array.isArray(a)) {
                    var o = [];
                    return (
                      a.slice().forEach(function (e) {
                        void 0 !== e && o.push(n(r, e, o.length));
                      }),
                      o.join("&")
                    );
                  }
                  return i(r, t) + "=" + i(a, t);
                })
                .filter(function (e) {
                  return e.length > 0;
                })
                .join("&")
            : "";
        }),
        (t.parseUrl = function (e, t) {
          return { url: e.split("?")[0] || "", query: c(s(e), t) };
        });
    },
    Na6L: function (e, t, n) {
      function r(e) {
        var t;
        if (e) t = e;
        else {
          var n = getCurrentPages();
          t = n[n.length - 1];
        }
        if (!t.__uniqueKey__) {
          var r = (function (e) {
            for (var t = 5381, n = e.length; n; )
              t = (33 * t) ^ e.charCodeAt(--n);
            return t >>> 0;
          })(t.route + JSON.stringify(t.options));
          t.__uniqueKey__ = r;
        }
        return t.__uniqueKey__;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    "NeL/": function (e, t, n) {
      function r(e, t) {
        var n = "../" + e + "/index";
        return {
          relations: {
            [n]: {
              type: "ancestor",
              linked() {
                t && t.call(this);
              },
              linkChanged() {
                t && t.call(this);
              },
              unlinked() {
                t && t.call(this);
              },
            },
          },
          mixin: Behavior({
            created() {
              Object.defineProperty(this, "parent", {
                get: () => this.getRelationNodes(n)[0],
              }),
                Object.defineProperty(this, "index", {
                  get: () => {
                    var e, t;
                    return null ===
                      (t =
                        null === (e = this.parent) || void 0 === e
                          ? void 0
                          : e.children) || void 0 === t
                      ? void 0
                      : t.indexOf(this);
                  },
                });
            },
          }),
        };
      }
      function a(e, t) {
        var n = "../" + e + "/index";
        return {
          relations: {
            [n]: {
              type: "descendant",
              linked(e) {
                t && t.call(this, e);
              },
              linkChanged(e) {
                t && t.call(this, e);
              },
              unlinked(e) {
                t && t.call(this, e);
              },
            },
          },
          mixin: Behavior({
            created() {
              Object.defineProperty(this, "children", {
                get: () => this.getRelationNodes(n) || [],
              });
            },
          }),
        };
      }
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        });
    },
    NgLJ: function (e, t, n) {
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.validateOperator = function (e) {
          if ("string" != typeof e)
            throw new TypeError(
              "Invalid operator type, expected string but got " + r(e)
            );
          if (-1 === a.indexOf(e))
            throw new TypeError(
              "Invalid operator, expected one of " + a.join("|")
            );
        }),
        (t.default = t.OperatorResMap = void 0);
      var a = [">", ">=", "=", "<", "<="];
      t.OperatorResMap = {
        ">": [1],
        ">=": [1, 0],
        "=": [0],
        "<=": [-1, 0],
        "<": [-1],
      };
      var o =
        /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
      function i(e) {
        var t,
          n,
          r = e.replace(/^v/, "").replace(/\+.*$/, ""),
          a = ((n = "-"), -1 === (t = r).indexOf(n) ? t.length : t.indexOf(n)),
          o = r.substring(0, a).split(".");
        return o.push(r.substring(a + 1)), o;
      }
      function s(e) {
        return isNaN(Number(e)) ? e : Number(e);
      }
      function c(e) {
        if ("string" != typeof e)
          throw new TypeError("Invalid argument expected string");
        if (!o.test(e))
          throw new Error(
            "Invalid argument not valid semver ('" + e + "' received)"
          );
      }
      var u = function (e, t) {
        [e, t].forEach(c);
        for (
          var n = i(e), r = i(t), a = 0;
          a < Math.max(n.length - 1, r.length - 1);
          a++
        ) {
          var o = parseInt(n[a] || "0", 10),
            u = parseInt(r[a] || "0", 10);
          if (o > u) return 1;
          if (u > o) return -1;
        }
        var d = n[n.length - 1],
          l = r[r.length - 1];
        if (d && l) {
          var p = d.split(".").map(s),
            h = l.split(".").map(s);
          for (a = 0; a < Math.max(p.length, h.length); a++) {
            if (
              void 0 === p[a] ||
              ("string" == typeof h[a] && "number" == typeof p[a])
            )
              return -1;
            if (
              void 0 === h[a] ||
              ("string" == typeof p[a] && "number" == typeof h[a])
            )
              return 1;
            if (p[a] > h[a]) return 1;
            if (h[a] > p[a]) return -1;
          }
        } else if (d || l) return d ? -1 : 1;
        return 0;
      };
      t.default = u;
    },
    Npz5: function (e, t) {
      e.exports = {
        d: "themeTag;4;yunDesignConfig;4;valueCard;4;display;4;pay;4;tradeTag;4;orderFinalPrice;4;prepayCardTotalAmount;4;prepayCardDecrease;4;prepayCardAvailable;4;prepayCardAvailableExclusion;4;themeColors;4;kdtId;4;payAssetActivityTagDesc;4;shopStoredDiscountInfo;4;useStoredCustomerDiscount;4;recommendDetaid;4;goods;4;shop;4;pointDeduction;4;pointsName;4;orderCreated;4;points;4;fansBenefit;4;themeCSS;4;customerCards;4;unavailableCustomerCards;4;displayCard;4;currentAddress;4;displayFreeCard;4;plusBuy;4;order;4;orderCreation;4;couponModel;4;isInCouponOverWhitelist;4;offlineId;4;state;4;postageModel;4;dataLoaded;4;useStoredMemberCustomerDiscount;4;useStoreBalancePayInFull;4;hasHaitaoGoods;4;postage;4;isExistDiscountExcludePrePayCard;4;meituanCoupons;6",
        e: "sku:afterSubmit;showCouponList;postagetool:show;reward:show;toggleMembershipDialog",
        el: "submit:act;showCouponList;postagetool:show;postagetool:limitInfo;postagetool:unavailableItem;lifecycle:pageShow;toggleMembershipDialog",
        w: "TradeBuyUmpBlock;BaseBlock;ExtraFees;PrepayCardCell;FansCell;ActivityCell;ActivityDialog;PlusBuy;PlusBuySwipe;PlusBuySwipeItem;PlusBuyCard;CouponCell;CouponItem;CouponList;Postagetool;PostagetoolTip;PostagetoolCard;FansDialog;CouponListPopupBottom;CouponContainer;MembershipCell;PointCell;PointDeductionCell;MeituanCell;MembershipDialog;PrepayCardPopup;PointDeductionPopup;PointWarnPopup;AgreeDetailPopup;DisplayCard",
        wc: "BaseBlock;ExtraFees;PrepaidRecommend;RechargeList;UserAuthorize;Price;PlusBuyCard;PlusBuySwipe;PlusBuySwipeItem;PostagetoolCard;FansDialog;PlusBuy;FansCell;PrepayCardCell;CouponListPopupBottom;CouponContainer;CouponItem;MembershipCell;PointCell;PointDeductionCell;CouponCell;MeituanCell;PointWarnPopup;AgreeDetailPopup;DisplayCard;ActivityCell",
        wd: "Main",
        p: "closeValueCard;openValueCard;selectCustomerCard;toggleCouponListPopup",
        pi: "closeValueCard;setPrepayCardCheckStatus;confirmOrder;setOrderForbidCoupon;setOrderForbidPreference;setDisableStoredDiscount;setPointDeductionUsed;setCustomCard;setDisplayCard;switchPlusBuyGoodsProcess;switchGoods;addAllGoods;fetchSkuData;addCouponProcess;setCouponChosenIdProcess;exchangeCouponPromise;getAddsOnePageDetail;calcPostage;modifyCacheOrder;resetPostageTool;savePostageTool;setUmpActivity;mutateState;openValueCard;setIgnoreVirtualCoupon;showPrePayCardRecharge;setSelfFetch;setSkuInfo",
        c: "",
        cc: "UserAuthorizePopup",
      };
    },
    O1uH: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        a = (r = n("NHEX")) && r.__esModule ? r : { default: r };
      var o = function (e, t, n) {
        var r,
          o,
          i = function (e) {
            return e;
          };
        i =
          "string" == typeof t
            ? function (e) {
                return (0, a.default)(e, t, null);
              }
            : t;
        for (var s = 0; s < e.length; s++) {
          var c = e[s],
            u = i(c);
          null == u ||
            isNaN(+u) ||
            (void 0 !== o ? n(u, o) && ((r = c), (o = u)) : ((o = u), (r = c)));
        }
        return r;
      };
      (t.default = o), (e.exports = t.default);
    },
    O8mO: function (e, t) {
      e.exports = {
        d: "goodsAttributes;2;goodsCombineInfoBizSku;0;offlineId;4;themeVars;4;containerStyle;6;multistore;6;kdtId;6;shopConfig;6;pointsConfig;6;themeTag;6;goods;4;sku;4;skuConfig;4",
        e: "sku:preview;sku:hide;submit:act",
        el: "sku:show;sku:addCart;sku:afterAddCart;sku:afterBuy;sku:independentShow;time:clickSkuButton",
        w: "Main",
        wc: "",
        wd: "Main",
        p: "sku:selectData;beforeFormatSku",
        pi: "sku:beforeAddCartAsync;sku:beforeBuyAsync;sku:afterBuyAsync;sku:selectData",
      };
    },
    OF9M: function (e, t) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      };
    },
    "OMz+": function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = n("xih6");
      function a(e) {
        if (!e) return !1;
        var t = "/" + e.replace(/^\//, "");
        return Object(r.a)().some((e) => t.startsWith(e));
      }
      function o() {
        var e = getCurrentPages() || [];
        return a("/" + (e[e.length - 1] || {}).route);
      }
    },
    ONTz: function (e, t) {
      e.exports = {
        d: "payChannels;4;payWaysData;6;kdtId;4;sku;4;goods;4;showCouponTips;4;supportSkuDirectOrder;4",
        e: "sku:hide;payWaysData:update;installment:selected",
        el: "sku:num-change;sku:selected;cashier:change",
        w: "Main;SubmitNotice",
        wd: "Main",
        p: "installment:update;installment:validate;setPayWayData",
      };
    },
    OPDa: function (e, t, n) {
      var r =
        (wx.spm ||
          (wx.spm = {
            initSpm() {
              var e = getApp().logger;
              e && e.spmHelper.initSpm();
            },
            getPageSpmTypeId() {
              var e = getApp().logger;
              return e && e.spmHelper.gettCurrentPageSpm();
            },
            setCurrentSpm(e, t, n, r) {
              void 0 === r && (r = []);
              var a = getApp().logger;
              return a && a.spmHelper.setCurrentSpm(e, t, n, r);
            },
            getSpm() {
              var e = getApp().logger;
              return e && e.spmHelper.getSpm();
            },
            removePageSpm() {
              var e = getApp().logger;
              return e && e.spmHelper.removePageSpm();
            },
          }),
        wx.spm);
      t.a = r;
    },
    OgbJ: function (e, t) {
      e.exports = {
        d: "",
        e: "",
        el: "",
        w: "",
        wc: "",
        wd: "Main",
        l: "jumpToLink",
        lc: "",
        p: "jumpToLink",
        pi: "",
        c: "",
        cc: "",
      };
    },
    OhfJ: function (e, t) {
      e.exports = {
        d: "",
        e: "",
        el: "",
        w: "Main",
        wc: "",
        wd: "Main",
        l: "",
        lc: "triggerEvent",
        p: "",
        pi: "getLocation",
        c: "",
        cc: "",
      };
    },
    "P+uj": function (e, t, n) {
      function r(e) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    PHxc: function (e, t, n) {
      var r = n("cm7J");
      e.exports = function (e, t) {
        var n = this.__data__,
          a = r(n, e);
        return a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t), this;
      };
    },
    POYE: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n("Fcif"),
        a = {
          hqHomeToOtherHome: !1,
          cacheKdtId: {},
          cacheNavConfig: {},
          isWxProxyDone: !1,
          isProxyUpdateKdtId: !1,
          proxyUpdateEmitFunc: [],
          lastOnlineKdtId: null,
          proxyWxJumpPadding: !1,
          onAppRoutePadding: !1,
          blockEnterShopType: !1,
          isEnterWbViewPage: !1,
          switchShopRangeCache: {},
          hideUrl: "",
          tabbarNavCacheMap: {},
        },
        o = (e) => JSON.parse(JSON.stringify(e)),
        i = o(a),
        s = () => {
          var { tabbarNavCacheMap: e } = a;
          a = Object(r.a)({}, o(i), { tabbarNavCacheMap: e });
        };
    },
    PYDc: function (e, t, n) {
      var r = n("FEiO");
      e.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    Pv1N: function (e, t, n) {
      var r = n("XS2z");
      n.d(t, "UserAuthorizeType", function () {
        return r.a;
      });
      n("1LD1"), n("nHpP"), n("DRK6"), n("3hrn"), n("PzrG");
    },
    Pz1p: function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = n("MLLI");
      function a() {
        var e = Object(r.b)().model.replace(/\s/g, "-"),
          t = !1;
        return (
          /iPhone SE/i.test(e) ||
            (t =
              /iphone-x|iPhone11|iPhone13|iPhone12(?!,8>)|iPhone14|iPhone15|iPhone16|iPhone17|iPhone-14|iPhone-12/i.test(
                e
              )),
          t
        );
      }
      function o() {
        var e = Object(r.b)(),
          t = e.platform.toLowerCase(),
          n = parseFloat(e.system.replace(/[a-zA-Z]/g, ""));
        return "ios" === t && n > 17;
      }
    },
    PzrG: function (e, t) {},
    Q4pQ: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n("Fcif"),
        a = n("q3MX"),
        o = n("ONqW"),
        i = (e) => {
          try {
            var t = Object(o.a)(),
              { kdt_id: n, from_params: i, sl: s } = e,
              c = t.getLogParams(),
              { event: u, context: d } = c,
              { sl: l, from_params: p } = d,
              h = (() => {
                var e,
                  t,
                  n = Object(a.b)({
                    yai: "shop_guide_workbench_b",
                    app: "ext-tee-wsc-goods",
                    requestUrl: "https://tj1.youzan.com/v3/js/log",
                  }),
                  r = Object(o.a)();
                return (
                  n.setEvent(null == (e = r.getLogParams()) ? void 0 : e.event),
                  n.setUser(null == (t = r.getLogParams()) ? void 0 : t.user),
                  n
                );
              })();
            (s || i || l || p) &&
              h.log(
                Object(r.a)({}, u, {
                  si: n,
                  et: "view",
                  ei: "customer_visit_with_sl",
                  en: "客户访问带导购标页面",
                  params: {
                    sl: s,
                    fromParams: i,
                    ctxSl: l,
                    ctxFromParams: p,
                    bizChannel: "goods",
                  },
                })
              );
          } catch (e) {}
        };
    },
    Q56H: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var r = n("h+Rz");
      function a() {
        return r.a.getClipboardData();
      }
      function o(e) {
        return r.a.setClipboardData({ data: e });
      }
    },
    QFll: function (e, t, n) {
      n.d(t, "c", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return o;
        });
      var r = {
          WSC: "packages/usercenter/dashboard/index",
          RETAIL: "packages/retail/usercenter/dashboard-v2/index",
        },
        a = /packages\/(retail\/)?usercenter\/dashboard(-v2)?\/index/,
        o = {
          OLD: "packages/shop/goods/all/index",
          NEW: "packages/goods-list/all/index",
        };
      o.OLD;
    },
    QLod: function (e, t, n) {
      n.d(t, "h", function () {
        return w;
      }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return y;
        }),
        n.d(t, "a", function () {
          return P;
        }),
        n.d(t, "e", function () {
          return I;
        }),
        n.d(t, "d", function () {
          return j;
        }),
        n.d(t, "g", function () {
          return x;
        }),
        n.d(t, "f", function () {
          return C;
        });
      n("Fcif");
      var r = n("Sd3C"),
        a = n("BM4D"),
        o = n("9KEa"),
        i = n("z2TJ"),
        s = "packages",
        c = "pages",
        u = "home/tab/one",
        d = "home/tab/two",
        l = "home/tab/three",
        p = s + "/shop/levelcenter",
        h = "home/dashboard/index",
        f = "usercenter/dashboard/index",
        g = "goods/detail/index",
        v = "home/feature/index",
        m = {
          NEW_FEATURE_ROUTE: s + "/" + v,
          TAB_ONE_ROUTE: s + "/" + u,
          TAB_TWO_ROUTE: s + "/" + d,
          TAB_THREE_ROUTE: s + "/" + l,
          NEW_HOMEPAGE_ROUTE: s + "/" + h,
          APP_FEATURE_ROUTE: c + "/" + v,
          APP_TAB_ONE_ROUTE: c + "/" + u,
          APP_TAB_TWO_ROUTE: c + "/" + d,
          APP_TAB_THREE_ROUTE: c + "/" + l,
          APP_HOMEPAGE_ROUTE: c + "/" + h,
          OLD_GOODS_ROUTE: c + "/goods/",
          GOODS_DETAIL_TOUTE: c + "/" + g,
          KQ_GOODS_DETAIL: s + "/" + g,
          NEW_GOODS_ROUTE: s + "/goods/",
          TEMPLATE_ROUTE: s + "/showcase-template/index",
          RETAIL_HOME: "pages-retail/home-shelf/index",
          EXT_NEW_MARKETING_PAGE_ROUTE: s + "/ext-marketing-page/index",
          USERCENTER_ROUTE: c + "/" + f,
          PACKAGES_USERCENTER_ROUTE: s + "/" + f,
          SHOPNOTE_DETAIL_ROUTE: s + "/shop/shopnote/detail/index",
        },
        y = [p + "/free/index", p + "/plus/index"],
        b = Object.keys(m),
        _ = {
          bottom: 58,
          height: 32,
          left: 278,
          right: 365,
          top: 26,
          width: 87,
          canUseNav: !0,
        },
        S = { inited: !1, rectInfo: {}, enterEmbedded: !1 },
        O = () => {
          var e,
            { statusBarHeight: t = 20, SDKVersion: n, isAndroid: r } = o.a,
            s = t + (r ? 48 : 44);
          Object(a.a)() && (s = 6);
          try {
            e = wx.getMenuButtonBoundingClientRect();
          } catch (e) {}
          return (
            e || (e = Object.create(null)),
            n && (e.canUseNav = Object(i.a)("2.5.2", n) < 1),
            (e.top = e.top || s),
            (S.rectInfo = e),
            (S.inited = !0),
            e
          );
        },
        w = () => {
          var e = Object(a.a)();
          if (S.enterEmbedded && !e) return (S.enterEmbedded = !1), void O();
          !S.enterEmbedded && e && ((S.enterEmbedded = !0), O());
        },
        P = Object.create(null);
      Object.keys(_).forEach((e) => {
        Object.defineProperty(P, e, {
          get() {
            if (!S.inited || (!S.rectInfo[e] && "canUseNav" !== e)) {
              var t = O()[e];
              return t || !1 === t ? t : (setTimeout(O, 300), _[e]);
            }
            return S.rectInfo[e];
          },
        });
      });
      var I = function (e) {
          void 0 === e && (e = !0);
          var { top: t, height: n, canUseNav: r } = P,
            a = e ? o.a : wx.getSystemInfoSync(),
            { statusBarHeight: i = 20 } = a,
            s = t - i + 6 + n + i;
          return r ? (s <= 105 ? s : 105) : 0;
        },
        k = (e) => null == e,
        C = (e) => {
          var t;
          if (!k(e)) return e - 44;
          var n =
            null == (t = wx.getSystemInfoSync()) ? void 0 : t.statusBarHeight;
          return k(n) ? 20 : n;
        },
        T = [],
        x = (e) => T.find((t) => t.route.indexOf(e)),
        j = function (e) {
          if ((void 0 === e && (e = ""), !e)) {
            var t = Object(r.b)();
            e = t.route;
          }
          return b.some((t) => e.indexOf(m[t]) > -1);
        };
    },
    QNh1: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("DBeL"),
        a = n.n(r);
      class o {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      o.widgets = { Widget: a() };
    },
    QNtA: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(n("UdN6")),
        a = o(n("eX/V"));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "default",
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "zh";
        if (((t = t || "default"), e instanceof Date)) return e;
        if ("number" == typeof e) return new Date(e);
        var o = r.default.parse(e, t, "string" == typeof n ? a.default[n] : n);
        return o || null;
      };
      (t.default = i), (e.exports = t.default);
    },
    QSkc: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = function (e) {
        return e >= 0 && e < 10 ? "0".concat(e) : String(e);
      };
      (t.default = r), (e.exports = t.default);
    },
    QTc8: function (e, t, n) {
      var r = {},
        a = 1;
      t.a = {
        set(e) {
          var t = "db_" + a++;
          return (r[t] = e), t;
        },
        delete(e) {
          delete r[e];
        },
        get(e, t) {
          void 0 === t && (t = !0);
          var n = r[e];
          return t && delete r[e], n;
        },
      };
    },
    QlcU: function (e, t, n) {
      n.d(t, "j", function () {
        return r;
      }),
        n.d(t, "i", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "g", function () {
          return i;
        }),
        n.d(t, "h", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "b", function () {
          return f;
        });
      var r = { new: 1, old: 0 },
        a = { show: 1, hidden: 0 },
        o = { default: 1, custom: 2 },
        i = {
          WeiXin: "WeiXin",
          WeiXinGroup: "WeiXinGroup",
          WecomGroup: "wecomGroup",
        },
        s = {
          [i.WeiXin]: "member",
          [i.WeiXinGroup]: "group",
          [i.WecomGroup]: "wecom-group",
        },
        c = "https://img01.yzcdn.cn",
        u = c + "/weapp/wsc/4RYyjww.png",
        d = {
          member: c + "/weapp/wsc/1c9OGo.png",
          group: u,
          wecomGroup: u,
          official: c + "/weapp/wsc/UJ60enB.png",
        },
        l = {
          member: "添加微信",
          group: "加入微信群",
          wecomGroup: "加入企业微信群",
          official: "关注公众号",
        },
        p = {
          member: "点击" + l.member,
          group: "点击" + l.group,
          wecomGroup: "点击" + l.wecomGroup,
          official: "点击" + l.official,
        },
        h = "/packages/home/dashboard/index",
        f = c + "/weapp/wsc/1fxuP9X.png";
    },
    R18q: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        });
      var r = n("Oq22"),
        a = n("Qzzd"),
        o = {
          init: () => o,
          mark: r.a,
          setEnv: a.c,
          setExtra: a.d,
          addTrack: () => {},
          capture: a.b,
          captureEvent: () => {},
          captureXhr: () => {},
          addProcessor: () => 0,
          removeProcessor: () => {},
          addFilter: () => 0,
          removeFilter: () => {},
          addCaptor: () => 0,
          removeCaptor: () => {},
          setPageGroup: () => {},
          setOptions: a.e,
          markRendered: () => {},
        },
        i = () => {};
    },
    R2NP: function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = n("h+Rz");
      function a(e) {
        return r.a.setNavigationBarTitle({ title: e });
      }
      function o(e) {
        return r.a.setNavigationBarColor(e);
      }
    },
    R4YI: function (e, t, n) {
      n.d(t, "a", function () {
        return _;
      }),
        n.d(t, "b", function () {
          return O;
        });
      var r,
        a,
        o,
        i,
        s,
        c,
        u,
        d,
        l = n("3tAa");
      (r = Object(l.a)("getAppTokenHook", void 0))[0],
        r[1],
        (a = Object(l.a)("checkLoginGlobalHook", void 0))[0],
        a[1],
        (o = Object(l.a)("teeLoginFailHook", void 0))[0],
        o[1],
        (i = Object(l.a)("beforeYouzanLoginHook", void 0))[0],
        i[1],
        (s = Object(l.a)("youzanLoginFailHook", void 0))[0],
        s[1];
      function p(e, t) {
        var n = Object(l.a)(e, t);
        return { get: n[0], set: n[1] };
      }
      !(function (e) {
        (e.NativeMobile = "mobile_n"),
          (e.NativeNickAvatar = "nick_n"),
          (e.YZButton = "yz");
      })(c || (c = {})),
        (function (e) {
          (e.YZMobile = "mobile_yz"),
            (e.YZProtocol = "protocol_yz"),
            (e.YZAuth = "auth_yz"),
            (e.YZUserInfo = "info_yz"),
            (e.YZExternal = "external_yz");
        })(u || (u = {})),
        (function (e) {
          e[(e.External = 1)] = "External";
        })(d || (d = {}));
      var h;
      !(function (e) {
        (e[(e.Unknown = -1)] = "Unknown"),
          (e[(e.Password = 0)] = "Password"),
          (e[(e.Sms = 1)] = "Sms"),
          (e[(e.Yz = 2)] = "Yz"),
          (e[(e.Weapp = 3)] = "Weapp"),
          (e[(e.AppSdk = 4)] = "AppSdk");
      })(h || (h = {}));
      var f,
        g,
        v,
        m,
        y,
        b,
        _ = {
          mobileChange: p("mobileChangeHook"),
          authItemAfter: p("authOneAfterHook"),
          buttonClickAfter: p("authBtnClickAfterHook"),
          popupShowAfter: p("authPopupShowAfterHook"),
        },
        S =
          ((f = "protocolBeforeAgreeHook"),
          (v = Object(l.a)(f, g)),
          (m = v[0]),
          (y = v[1]),
          (b = function () {
            return m() || [];
          }),
          function (e, t, n) {
            try {
              if (!e) return n;
              var r = e();
              if (!r) return n;
              var a = t || [];
              return Array.isArray(r)
                ? Promise.all(
                    r.map(function (e) {
                      return e.apply(void 0, a);
                    })
                  )
                : r.apply(void 0, a);
            } catch (e) {}
            return n;
          }),
        O = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return Promise.resolve().then(function () {
            return S.apply(void 0, e);
          });
        };
    },
    RSyW: function (e, t, n) {
      var r = n("Fcif"),
        a = n("NHEX"),
        o = n.n(a),
        i = n("lCVF"),
        s = n.n(i),
        c = n("sXPE");
      t.a = {
        state: { points: null, buyLimitGuideInfo: {}, shopConfig: {} },
        getActions: () => ({
          formatSku(e, t) {
            var n = t.goods,
              a = c.g.reduce((t, a) => {
                var o = e[a];
                return (
                  o &&
                    (t[a] = Object(r.a)(
                      {},
                      n,
                      (function (e, t) {
                        var {
                            discount: n,
                            spuPrice: {
                              price: a,
                              pointsPrice: o,
                              pointsPriceText: i,
                            },
                            skuPrices: s,
                            skuStocks: u,
                            activityInfo: d,
                            type: l,
                            quotaNum: p,
                            quotaUsed: h,
                            spuStock: f = {},
                            totalNum: g = t.stockNum,
                          } = e,
                          v = 1 / 0,
                          m = 0,
                          y = 1 / 0,
                          b = 0,
                          _ = 0,
                          S = {};
                        s.length > 0 &&
                          (s.forEach((e) => {
                            if (e.recommendedPrice) {
                              if (
                                ((e.isVipPriceAdvantage =
                                  e.recommendedPrice < e.price),
                                e.isVipPriceAdvantage)
                              ) {
                                var t = e.price - e.recommendedPrice;
                                (y = Math.min(y, t)), (b = Math.max(b, t));
                              }
                              0 === _ && (_ = e.isVipPriceAdvantage),
                                (_ = _ && e.isVipPriceAdvantage);
                            }
                            S[e.skuId] = Object(r.a)({}, e);
                          }),
                          (u || []).forEach((e) => {
                            Object.assign(S[e.skuId], e);
                          })),
                          (t.list || []).length ||
                            ((v = Math.min(v, a)), (m = Math.max(m, a)));
                        var O = (t.list || []).map((e) => {
                            var n = Object(r.a)({}, e, S[e.skuId] || {}, {
                              oldPrice: e.price,
                            });
                            return (
                              (t.stockNum > 0 && 0 === n.stockNum) ||
                                ((v = Math.min(v, n.price)),
                                (m = Math.max(m, n.price))),
                              n
                            );
                          }),
                          w = [...(t.priceTags || [])],
                          P = c.e[l];
                        w.push({ text: P, type: l });
                        var I = Object(r.a)({}, t.limit);
                        return (
                          p &&
                            ((I.quota = p),
                            (I.quotaUsed = h),
                            (I.quotaCycle = 0)),
                          Object(r.a)({ stockNum: g }, f, {
                            discount: n,
                            price: a || v || 0,
                            pointsPrice: o,
                            pointsPriceText: i,
                            minPrice: v,
                            maxPrice: m,
                            oldPrice: t.price,
                            oldMinPrice: t.minPrice,
                            oldMaxPrice: t.maxPrice,
                            list: O,
                            priceTags: w,
                            limit: I,
                            activityInfo: d,
                            minVipSavedPrice: y,
                            maxVipSavedPrice: b,
                            isAllVipPriceAdvantage: _,
                          })
                        );
                      })(o, n),
                      { useCustomTags: !1 }
                    )),
                  t
                );
              }, t);
            if (a[c.f.POINTS]) {
              var o = a[c.f.POINTS];
              (o.showPeriodText = !1),
                (o.buyWayText = "兑换"),
                o.limit && (o.limit.startSaleNum = 1);
            }
            return a;
          },
          formatPriceInfo(e, t) {
            var n = { tags: t.tags || [] },
              a = e[c.f.DISCOUNT];
            if (a) {
              var {
                minPrice: o,
                maxPrice: i,
                oldMinPrice: u,
                oldMaxPrice: d,
                priceTags: l,
                pointsPriceText: p,
              } = a;
              Object.assign(n, {
                price: s()({ min: o, max: i }, "-"),
                minPrice: o,
                maxPrice: i,
                oldPrice: s()({ min: u, max: d }, "-"),
                oldMinPrice: u,
                oldMaxPrice: d,
                pointsPriceText: p,
                tags: l.filter(
                  (e) =>
                    [c.a.CUSTOMER_DISCOUNT, c.a.GOODS_SCAN].indexOf(e.type) > -1
                ),
              });
            }
            if (e[c.f.POINTS]) {
              var { pointsPriceText: h } = e[c.f.POINTS];
              Object.assign(n, { pointsPriceText: h });
            }
            return Object(r.a)({}, t, n);
          },
          parseMemeberActivies(e) {
            var {
                marketing: t,
                sku: n,
                priceInfo: a,
                buyLimitGuideInfo: i = {},
              } = e,
              s = (function (e) {
                var { activities: t, orderActivity: n } = e || {},
                  r = {},
                  { code: a = 0, alias: o = "", id: i = 0, type: s } = n || {};
                return (
                  (t || []).forEach((e) => {
                    n &&
                      s === e.type &&
                      (e.activityInfo = {
                        activityType: a,
                        activityAlias: o,
                        activityId: i,
                      });
                    var t = e.recommendedPriceModel || {};
                    switch (e.type) {
                      case c.a.CUSTOMER_DISCOUNT:
                        1 != +e.discount && (r[c.f.DISCOUNT] = e),
                          1 === t.recommendedStatus &&
                            (r[c.f.DISCOUNT_INVITE] = e);
                        break;
                      case c.a.GOODS_SCAN:
                        r[c.f.DISCOUNT] = e;
                        break;
                      case c.a.POINTS:
                        e.activityInfo ||
                          (e.activityInfo = {
                            activityAlias: "",
                            activityId: e.id,
                            activityType: 5,
                          }),
                          (r[c.f.POINTS] = e);
                        break;
                      case c.a.SCRM_CARRIER:
                        r[c.a.SCRM_CARRIER] = e;
                    }
                  }),
                  r
                );
              })(t),
              u = this.formatSku(s, n),
              d = this.formatPriceInfo(u, a),
              { supportItemProps: l } = e;
            return (
              (this.points = !!o()(s, c.f.POINTS, null)),
              (this.buyLimitGuideInfo = i),
              this.points && (l = !1),
              this.setCtxData(s, "memberActivity"),
              this.setCtxData(i, "buyLimitGuideInfo"),
              Object(r.a)({}, e, {
                sku: u,
                priceInfo: d,
                supportItemProps: l,
                memberActivity: s,
                buyLimitGuideInfo: i,
              })
            );
          },
          setPointsConfig() {
            this.setCtxData(this.shopConfig.pointsConfig, "pointsConfig");
          },
        }),
      };
    },
    "RW/s": function (e, t, n) {
      var r = n("iOq2"),
        a = n("HE1N"),
        o = n("VZJX"),
        i = n("J9xP"),
        s = n("PHxc");
      function c(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = a),
        (c.prototype.get = o),
        (c.prototype.has = i),
        (c.prototype.set = s),
        (e.exports = c);
    },
    RY8z: function (e, t, n) {
      var r = n("GFa9");
      t.a = r.a;
    },
    Rl7e: function (e, t) {
      e.exports = {
        d: "",
        e: "",
        el: "",
        l: "getScene;checkIsHalfScreen;checkIsChannels;checkIsChannelsAsync;checkFromShowcase;checkFromChannelsLive;checkIsOpenByLiveBag;checkIsOpenByLiveGoodsShare;checkIsWxvideoLive;checkFromChannelsOpenFlow;checkIsNeedSyncOrderScene;checkIsOpenedWxV3;getTradeModuleStatus;checkBeforeAddOrderPromise;checkFromFullScreenSceneAsync",
        lc: "",
        p: "setShareIcon",
        pi: "",
        li: "onAppShow",
      };
    },
    Rm8A: function (e, t, n) {
      var r = n("bb6g"),
        a = n("9ZMt"),
        o = n("QxN7"),
        i = n("Tewj"),
        s = n("DXKY"),
        c = n("Xdhg"),
        u = n("pTxV"),
        d = o.platform.authLogger,
        l = ["weapp", "ks", "tt"],
        p = (function () {
          function e(e, t) {
            (this.path = e),
              (this.isSeparated = t),
              (this.offEventHandler = []),
              this.init();
          }
          return (
            (e.prototype.init = function () {
              var e = c.a.register(u.EventRegisterType.MAIN, this.path);
              e && (this.id = e);
            }),
            (e.prototype.setCallback = function (e) {
              this.callbackMap = e;
            }),
            (e.prototype.onAuthSync = function (e) {
              var t = Object(o.onUserAuthSync)(e);
              this.offEventHandler.push(t);
            }),
            (e.prototype.onAuthSuccess = function (e) {
              var t = this,
                n = Object(o.onUserAuthSuccess)(function (n) {
                  n.__comId !== t.id && e(n);
                });
              if (
                (this.offEventHandler.push(n),
                l.indexOf(a.default.getEnv()) > -1)
              ) {
                var r = "account:user-authorize:native-auth-success",
                  i = function (t) {
                    d.logSkynet("触发已废弃事件", { eventName: r, params: t }),
                      e(t);
                  };
                s.a.on(r, i),
                  this.offEventHandler.push(function () {
                    return s.a.off(r, i);
                  });
              }
            }),
            (e.prototype.onUserInfoChanged = function (e) {
              i.default.on(u.EventName.USER_INFO_CHANGED, e),
                this.offEventHandler.push(function () {
                  return i.default.off(u.EventName.USER_INFO_CHANGED, e);
                });
            }),
            (e.prototype.onLoginEndEvent = function (e) {
              var t = function (t) {
                !t.cache && e();
              };
              i.default.on(o.TEE_LOGIN_END_EVENT, t),
                this.offEventHandler.push(function () {
                  return i.default.off(o.TEE_LOGIN_END_EVENT, t);
                });
            }),
            (e.prototype.offEvent = function () {
              this.offEventHandler.forEach(function (e) {
                return e();
              }),
                (this.offEventHandler = []);
            }),
            (e.prototype.callPopup = function (e, t) {
              if (this.isSeparated) {
                var n = c.a.getLatestPopupId(t, this.path);
                i.default.trigger(u.EventName.POPUP_TRIGGER, {
                  type: u.EventPopupTriggerTypes.POPUP_SHOW,
                  data: e,
                  mainId: this.id,
                  callback: this.callbackMap,
                  popupId: n,
                });
              }
            }),
            (e.prototype.authSuccess = function (e) {
              Object(o.emitUserAuthSuccess)(
                Object(r.__assign)(Object(r.__assign)({}, e), {
                  __comId: this.id,
                })
              );
            }),
            e
          );
        })();
      t.a = p;
    },
    RqPZ: function (e, t, n) {
      var r = n("GI0s"),
        a = n("9aUh");
      e.exports = function (e) {
        if (!a(e)) return !1;
        var t = r(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    "Rz+h": function (e, t, n) {
      n.d(t, "a", function () {
        return z;
      });
      var r,
        a,
        o,
        i,
        s,
        c = n("+I+c"),
        u = n("Fcif"),
        d = n("9ZMt"),
        l = n("xers"),
        p = n.n(l),
        h = n("w2Y9"),
        f = n.n(h),
        g = n("tuFO"),
        v = n.n(g);
      function m(e) {
        return Object.keys(e)
          .reduce(function (t, n) {
            return (
              e[n] &&
                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n])),
              t
            );
          }, [])
          .join("&");
      }
      !(function (e) {
        (e.WSC = "wsc"), (e.LS = "ls"), (e.FX = "fx");
      })(r || (r = {})),
        (function (e) {
          e.GOODS = "goods";
        })(a || (a = {})),
        (function (e) {
          (e.INDEX = "index"), (e.CONVERSATIONS = "conversations");
        })(o || (o = {})),
        (function (e) {
          (e.CPS = "cps"), (e.BRAND = "brand");
        })(i || (i = {})),
        (function (e) {
          (e.IM = "im"), (e.LAYER = "layer");
        })(s || (s = {}));
      var y = "/",
        b = "/conversations";
      function _() {
        var e, t;
        if ("undefined" == typeof document) return "https://h5.youzan.com";
        var n =
          null ===
            (t =
              null === (e = document) || void 0 === e ? void 0 : e.location) ||
          void 0 === t
            ? void 0
            : t.origin;
        return n &&
          (/h5.youzan.com/.test(n) ||
            /shop[0-9]{6}[0-9]*(-[0-9]{2}){0,1}\.youzan\.com/.test(n))
          ? n
          : n && /shop[0-9]{6}[0-9]*(-[0-9]{2}){0,1}\.m\.youzan\.com/.test(n)
          ? n.replace(/\.m\.youzan\.com/, function () {
              return ".youzan.com";
            })
          : "https://h5.youzan.com";
      }
      var S = "packages/retail-shelf/shelf/index",
        O = {
          SCAN_GO: "scan_order_way",
          FREE_GO: "free_order_way",
          SELF: "self_order_way",
          TAKEOUT: "takeout_order_way",
          NEARBY_STORE: "nearby_store_way",
          SHELF_GOODS: "shelf_goods",
          SHELF_GROUP: "shelf_group",
          WX_SCAN_CODE: "wx_scan_code",
          SaleToday: "sale_today",
          SaleAdvance: "sale_advance",
          TABLE_BOOKING: "tableBooking",
        },
        w = {
          [O.SELF]: 0,
          [O.SaleToday]: 0,
          [O.SaleAdvance]: 0,
          [O.TAKEOUT]: 1,
        },
        P = {
          [O.SELF]: S + "?mode=0",
          [O.SaleToday]: S + "?mode=0&filter=1",
          [O.SaleAdvance]: S + "?mode=0&filter=2",
          [O.TAKEOUT]: S + "?mode=1",
        },
        I = n("US/N"),
        k = n("tmLU"),
        C = n("Oq22"),
        T = n("AGZf"),
        x = (n("4jn8"), n("2wjL")),
        j = n("ONqW"),
        A = d.default.getApp();
      function E(e) {
        var t = A.getKdtId();
        Object(k.c)({
          navigatePath: "retail-shelf",
          navigateCb: (n) => {
            setTimeout(() => {
              C.a.start("retail_shelf_init_" + A.globalData.shelfParams.mode),
                C.a.start("retail_shelf_config");
              var r = "/" + e + "&prefetchKey=" + n + "&prefetchKdtId=" + t;
              d.default.$native.navigateTo({ url: r });
            }, 150);
          },
          prefetchCb: () => {
            var t,
              { mode: n, filter: r } = x.a.getAll(e) || {};
            return 0 !== n || r
              ? Promise.reject()
              : ((t = { mode: n }),
                Object(I.default)({
                  path: "retail/h5/miniprogram/shelf-config/getFirstLevelConfigs",
                  method: "POST",
                  data: Object(u.a)({}, t, {
                    useSwitch: "v2",
                    supportUnavailableGoods: 2,
                  }),
                }));
          },
        });
      }
      var D = function (e, t) {
          void 0 === t && (t = {}),
            d.default.$native.navigateTo({ url: f.a.add(e, t) });
        },
        M = (e, t, n) => {
          d.default.$native.getSetting({
            success: (r) => {
              var a = r.authSetting["scope.userLocation"];
              if (void 0 === a || !0 === a)
                d.default.$native.getLocation({
                  type: "gcj02",
                  fail: () => {
                    null != t &&
                      t.handleShowAuthDialog &&
                      t.handleShowAuthDialog();
                  },
                  success: (t) => {
                    if (n) return D(e, t);
                    E(e);
                  },
                });
              else if (!1 === a) {
                if (n) return D(e);
                E(e);
              }
            },
          });
        },
        N = (e, t) => {
          var { linkType: n, linkUrl: r } = e;
          [O.SELF, O.TAKEOUT, O.SaleToday, O.SaleAdvance].includes(n)
            ? ((A.globalData.shelfParams = { mode: w[n] }), M(P[n], t))
            : [O.SCAN_GO, O.FREE_GO].includes(n)
            ? (C.a.start("scan_order_decorate"),
              d.default.navigate({ url: "/" + r }))
            : [O.SHELF_GOODS, O.SHELF_GROUP].includes(n)
            ? ((e) => {
                var { linkId: t, linkType: n, alias: r, extraData: a = {} } = e,
                  o = "shelf_goods" === n,
                  i = ((e, t, n) =>
                    e && t && n ? (t.includes(1) && n.includes(1) ? 0 : 1) : 0)(
                    o,
                    a[o ? "groupSupportDeliveryType" : "deliveryType"],
                    o ? a.goodSupportDeliveryType : [1, 2, 3]
                  ),
                  s = { mode: i };
                (A.globalData.shelfParams = { mode: i }),
                  "shelf_goods" === n &&
                    Object.assign(s, {
                      fromShared: 1,
                      sharedGoodsIdProp: t,
                      sharedGoodsAliasProp: r,
                    }),
                  M(f.a.add(S, s));
              })(e)
            : n === O.WX_SCAN_CODE
            ? (Object(j.a)().log({
                et: "custom",
                ei: "click_wx_scan_code",
                en: "点击扫一扫链接",
              }),
              wx.scanCode({
                success: (e) => {
                  e.path
                    ? (Object(T.a)({
                        type: "success",
                        message: "识别成功，正在跳转",
                        duration: 0,
                      }),
                      wx.navigateTo({
                        url: "/" + e.path,
                        complete: () => {
                          T.a.clear();
                        },
                      }))
                    : T.a.fail("仅能扫此商家桌码/店铺码哦");
                },
                fail: () => {
                  T.a.error("识别失败");
                },
              }))
            : n === O.TABLE_BOOKING && M(r, t, !0);
        },
        L = n("SVbq"),
        R = (e) => {
          var { videoDynamicParams: t, linkTitle: n } = e;
          return Object(u.a)({}, t, {
            image_url: null == e ? void 0 : e.imageUrl,
            link_title: n,
          });
        },
        B = n("YeA1"),
        U = ["type"],
        F = [
          "/pages/home/dashboard/index",
          "/pages/goods/cart/index",
          "/pages/usercenter/dashboard/index",
          "/pages-retail/usercenter/dashboard-v2/index",
        ];
      var G = 1,
        H = 2,
        q = (e, t) => {
          "web" === d.default.getEnv()
            ? t && d.default.navigate({ url: t })
            : e && d.default.navigate({ url: e });
        },
        z = function (e, t) {
          void 0 === t && (t = {});
          var n,
            { dmc: a } = Object(B.a)(),
            { type: i = "" } = e,
            l = "",
            h = !1,
            {
              alias: g,
              linkType: S = "",
              linkId: w = "",
              linkUrl: P = "",
              linkTitle: k = "",
              extraData: C = {},
              query: x = {},
              goodsAlias: A,
            } = e,
            {
              kdtId: E,
              banner_id: D,
              imageUrl: M,
              goodsPreloadOpt: z,
              title: W,
            } = t,
            K = { kdt_id: E },
            Y = {};
          if ((D && (Y.banner_id = D), "chat" === (i = S || i))) {
            if ("web" === d.default.getEnv() && t) {
              var V = (function (e) {
                var t = void 0 === e ? { kdtId: "" } : e,
                  n = t.channel,
                  a = void 0 === n ? r.WSC : n,
                  i = t.version,
                  c = void 0 === i ? 2 : i,
                  u = t.origin,
                  d = void 0 === u ? "" : u,
                  l = t.kdtId,
                  p = t.pageType,
                  h = t.alias,
                  f = void 0 === h ? "" : h,
                  g = t.fromSource,
                  v = t.target,
                  S = void 0 === v ? o.INDEX : v,
                  O = t.clientKdtId,
                  w = t.fromChannel,
                  P = void 0 === w ? "" : w,
                  I = t.mod,
                  k = void 0 === I ? s.IM : I,
                  C = t.biz,
                  T = void 0 === C ? "" : C,
                  x = Number(new Date()),
                  j = { c: a, v: c, o: d, fc: P, biz: T, kdt_id: l };
                if (
                  ("goods" === p
                    ? Object.assign(j, { type: p, alias: f })
                    : "fx" === a && Object.assign(j, { my_kdt_id: O || "" }),
                  g)
                ) {
                  g.site_id = g.site_id || void 0;
                  var A = (function () {
                    try {
                      return JSON.stringify(g);
                    } catch (e) {
                      return "";
                    }
                  })();
                  Object.assign(j, { fs: A });
                }
                var E = { id: l, t: x },
                  D = "";
                switch (S) {
                  case o.CONVERSATIONS:
                    D = b;
                    break;
                  case o.INDEX:
                  default:
                    D = y;
                }
                switch (k) {
                  case s.LAYER:
                    var M = "/v3/im/index/layer?" + m(j) + "#" + D + "?" + m(E);
                    return _() + M;
                  case s.IM:
                  default:
                    M = "/v3/im/index?" + m(j) + "#" + D + "?" + m(E);
                    return _() + M;
                }
              })(t);
              V && d.default.navigate({ url: f.a.add(V, Y) });
            }
          } else if ("homepage" === i)
            a.switchTab("Home", Object(u.a)({}, Y, K)).catch(() => {
              a.navigate("Home", Object(u.a)({}, Y, K));
            });
          else if ("goods" === i && g) {
            var { image: X = {}, price: J = "" } = z || {};
            a.navigate("GoodsDetail", Object(u.a)({ alias: g }, x, Y), {
              bizParams: {
                alias: g,
                image: { url: M || X.url, width: X.width, height: X.height },
                title: W,
                price: J,
              },
            });
          } else if ("feature" === i && g) {
            var $ = getApp(),
              Z =
                (n = getCurrentPages()).length > 0 ? n[n.length - 1].route : "";
            if (!$.isChainStoreSync() || !Object(L.y)(Z))
              return void a.navigate("Feature", Object(u.a)({ alias: g }, Y));
            var { enterConfig: Q = {}, featureSource: ee, kdtId: te } = C,
              { mode: ne } = Q;
            if ($.featureJump({ bannerIdOpt: Y, alias: g, enterConfig: Q }))
              return;
            if (!ne) {
              if (ee === G)
                return void a.navigate(
                  "Feature",
                  Object(u.a)({ alias: g, kdtId: te }, Y)
                );
              if (ee === H) {
                var re = Object(u.a)({ alias: g }, Y);
                return (
                  Object(L.y)(Z) && (re.shopAutoEnter = 4),
                  void a.navigate("Feature", re)
                );
              }
            }
            a.navigate("Feature", Object(u.a)({ alias: g }, Y));
          } else if ("tag" === i) {
            var ae = g ? { alias: g } : f.a.getAll(P);
            ae.alias &&
              a.navigate(
                "GoodsTag",
                Object(u.a)({ alias: ae.alias, title: k }, Y)
              );
          } else if ("cart" === i)
            a.switchTab("Cart", Object(u.a)({}, Y, K)).catch(() => {
              a.navigate("Cart", Object(u.a)({}, Y, K));
            });
          else if ("usercenter" === i)
            a.switchTab("Usercenter", Object(u.a)({}, Y, K)).catch(() => {
              a.navigate("Usercenter", Object(u.a)({}, Y, K));
            });
          else if ("shopnote" === i)
            a.switchTab("Shopnote", Object(u.a)({}, Y, K)).catch(() => {
              a.navigate("Shopnote", Object(u.a)({}, Y, K));
            });
          else if ("allgoods" === i)
            a.navigate("AllGoodsList", Object(u.a)({ title: k }, Y));
          else if ("coupon" === i)
            "web" === d.default.getEnv() && P
              ? q("", "" + P)
              : a.navigate(
                  "CouponDetail",
                  Object(u.a)(
                    {
                      id: e.link_id || e.linkId,
                      type:
                        7 === (e.coupon_type || e.couponType)
                          ? "promocard"
                          : "",
                    },
                    Y
                  )
                );
          else if ("point_card" === i)
            q(
              "/packages/pointstore/goods-details/index?goods_id=" +
                e.pointGoodsId +
                "&" +
                D +
                "=" +
                D,
              P
            );
          else if ("pointsstore" === i)
            a.navigate("PointGoodsList", Object(u.a)({}, Y, K));
          else if ("seckill" === i)
            "web" === d.default.getEnv() && P
              ? q("", "" + P)
              : "web" === d.default.getEnv()
              ? a.navigate(
                  "Seckill",
                  Object(u.a)(
                    {
                      alias: A,
                      ump_alias: g,
                      ump_type: "seckill",
                      activityType: "seckill",
                    },
                    x,
                    K
                  )
                )
              : a.navigate(
                  "Seckill",
                  Object(u.a)({ alias: g }, A ? { goodsAlias: A } : {}, Y)
                );
          else if ("bargain" === i)
            a.navigate(
              "GoodsDetail",
              Object(u.a)(
                {
                  alias: g,
                  umpType: e.umpType || "",
                  activityId: e.activityId,
                },
                Y
              )
            );
          else if ("paidcolumn" === i)
            a.navigate("PaidContentColumn", Object(u.a)({ alias: g }, Y));
          else if ("paidcontent" === i)
            a.navigate("PaidContentContent", Object(u.a)({ alias: g }, Y));
          else if ("mypaidcontent" === i)
            a.navigate("PaidContentList", Object(u.a)({}, Y, K));
          else if ("paidlive" === i)
            a.navigate("PaidContentLive", Object(u.a)({ alias: g }, Y));
          else if ("allcourse" === i)
            a.navigate("EduGoodsList", Object(u.a)({}, Y, K));
          else if (
            "course" === i ||
            "educourse" === i ||
            "allofflinecourse" === i ||
            "eduappointment" === i ||
            "course_group" === i ||
            "course_category" === i ||
            "edumoments" === i
          ) {
            if ("web" === d.default.getEnv()) q("", P);
            else {
              var oe = P.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5");
              a.navigate("EduWebview", Object(u.a)({ targetUrl: oe }, Y));
            }
          } else if ("link" === i) {
            var { linkUrl: ie } = e;
            "web" === d.default.getEnv() && ie && q("", ie),
              ie &&
                /mp.weixin.qq.com\/s/.test(ie) &&
                a.navigate("CommonWebview", Object(u.a)({ src: ie }, Y));
          } else if ("weapplink" === i && "1" === C.linkType) {
            "/" !== (l = C.myWeappLink)[0] && (l = "/" + l);
            var se = l.split("?")[0];
            if (
              (F.indexOf(se) > -1 && (h = !0),
              0 ===
                (l = f.a.remove(l, "shopAutoEnter")).indexOf(
                  "/pages/common/blank-page/index"
                ))
            ) {
              var ce = f.a.getAll(l);
              if (ce.weappSharePath) {
                var ue = decodeURIComponent(ce.weappSharePath);
                (ue = f.a.remove(ue, "shopAutoEnter")),
                  (ce.weappSharePath = ue),
                  (l = f.a.add("/pages/common/blank-page/index", ce));
              }
            }
            if (!p()(t) && !h) {
              var { banner_id: de } = t;
              l = f.a.add(l, { banner_id: de });
            }
            d.default.navigate({ url: l }).catch(() => {
              d.default.$native.reLaunch({ url: l });
            });
          } else if ("weapplink" === i && "2" === C.linkType) {
            getApp().logger.skynetLog({
              appName: "wsc",
              message: "跳转其他小程序",
              detail: Object(u.a)({}, C),
            }),
              +C.useShortLink || +C.use_short_link
                ? d.default.$native.navigateToMiniProgram({
                    shortLink: C.shortLink || C.short_link,
                  })
                : d.default.$native.navigateToMiniProgram({
                    appId: C.otherWeappAppid || C.other_weapp_appid,
                    path: C.otherWeappLink || C.other_weapp_link,
                  });
          } else if ("calendar_checkin" === i)
            a.navigate("Checkin", Object(u.a)({}, K, Y));
          else if (["guaguale", "wheel", "zodiac", "crazyguess"].includes(i)) {
            var le = P || "",
              pe = "";
            le.includes("lottery") && (pe = "LuckyLottery"),
              le.includes("cards") && (pe = "Cards"),
              le.includes("zodiac") && (pe = "Zodiac"),
              le.includes("crazy") && (pe = "CrazyGuess"),
              pe && a.navigate(pe, Object(u.a)({ alias: g }, Y));
          } else if ("shopnote_detail" === i)
            a.navigate("ShopnoteDetail", Object(u.a)({ noteAlias: g }, Y));
          else if ("mp_article" === i)
            a.navigate("MpArticle", Object(u.a)({ noteAlias: g }, Y));
          else if (
            "hotellist" === i ||
            "recharge_center" === i ||
            "point_coupon" === i ||
            "room_typelist" === i ||
            "combolist" === i
          )
            "web" === d.default.getEnv()
              ? q("", P)
              : a.navigate("CommonWebview", Object(u.a)({ src: P }, Y));
          else if ("period_list" === i)
            a.navigate("PeriodBuyList", Object(u.a)({}, K, Y));
          else if ("point_store" === i)
            a.navigate("PointGoodsList", Object(u.a)({}, K, Y));
          else if (
            "groupon" === i ||
            "collector_card" === i ||
            "gift_card" === i
          )
            P && d.default.navigate({ url: P });
          else if ("weapp_marketing_page" === i || "marketing_page" === i)
            a.navigate(
              "MarketingPage",
              Object(u.a)({}, K, Y, { id: C.id || "" })
            );
          else if ("survey" === i || "guaguale" === i || "history" === i)
            q("", P);
          else if ("video_number" === i) {
            var he = d.default.$native.getStorageSync("channelsLiveInfo") || "";
            if (!he) return;
            var { feedId: fe, nonceId: ge } = JSON.parse(he);
            d.default.$native.openChannelsLive &&
              d.default.$native.openChannelsLive({
                feedId: fe,
                nonceId: ge,
                finderUserName: w,
              });
          } else if ("social_fans" === i) {
            var { qrcode: ve } = e,
              me = v()(
                f.a.add("/v3/message/live-qrcode/member", {
                  kdtId: E,
                  activitiesId: ve,
                }),
                "h5",
                E
              );
            d.default.$native.navigateTo({
              url:
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(me),
            });
          } else if ("weapp_web_link" === i)
            q(f.a.add(P, Y), f.a.add(P, Object(u.a)({}, K, Y)));
          else {
            if ("red-package" === i)
              return d.default.$native.showRedPackage({ url: P }), {};
            if ("member_code" === i)
              d.default.$native.navigateTo({
                url: "/packages/member-code/index",
              });
            else if ("vipcenter" === i)
              d.default.$native.navigateTo({
                url: "/packages/shop/levelcenter/free/index",
              });
            else if ("category" === i) q("", f.a.add(P, Object(u.a)({}, K, Y)));
            else if ("pay_vipcenter" === i)
              d.default.$native.navigateTo({
                url: "/packages/shop/levelcenter/plus/index",
              });
            else if ("shop_ranking_list" === i) {
              var { tabType: ye } = e;
              if (ye) {
                var be = v()(
                  f.a.add("/wscshop/showcase/shop-ranking-list", { type: ye }),
                  "h5",
                  E
                );
                d.default.$native.navigateTo({
                  url:
                    "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(be),
                });
              }
            } else if ("video_number_dynamic" === i) {
              var {} = e,
                _e = Object(c.a)(e.videoDynamicParams, U);
              ((e) => {
                var t = R(e);
                Object(j.a)().log({
                  et: "click",
                  ei: "wxvideo_video_click",
                  en: "视频号动态点击",
                  params: t,
                });
              })(e),
                d.default.$native.openChannelsActivity &&
                  d.default.$native.openChannelsActivity(
                    Object(u.a)({}, _e, {
                      success: () => {
                        ((e) => {
                          var t = R(e);
                          Object(j.a)().log({
                            et: "custom",
                            ei: "wxvideo_video_jump_success",
                            en: "视频号动态跳转成功",
                            params: t,
                          });
                        })(e);
                      },
                      fail: (t) => {
                        ((e, t) => {
                          var n = R(e);
                          Object(j.a)().log({
                            et: "custom",
                            ei: "wxvideo_video_jump_fail",
                            en: "视频号动态跳转失败",
                            params: Object(u.a)({}, n, {
                              error_msg: null == t ? void 0 : t.errMsg,
                            }),
                          });
                        })(e, t);
                      },
                    })
                  );
            } else if ("storelist" === i || "nearby_store_way" === i)
              d.default.$native.navigateTo({
                url: "/packages/shop/physical-store/index",
              });
            else if ("goods_classify" === i)
              a.navigate("CommonWebview", Object(u.a)({ src: P }, Y));
            else if (Object.values(O).includes(i)) {
              var { context: Se } = t;
              N(e, Se);
            } else
              ["booking_mall", "express_mall"].includes(i) &&
                Object(I.default)({
                  method: "GET",
                  path: "wscdeco/decorate-api/getMallFeatureByType.json",
                  data: { type: i },
                }).then((e) => {
                  var { alias: t } = e;
                  t
                    ? a.navigate("Feature", { alias: t })
                    : Object(T.a)("未启用相关微页面");
                });
          }
        };
    },
    Sd3C: function (e, t, n) {
      n.d(t, "d", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return d;
        });
      var r = n("2wjL"),
        a = n("WLNV"),
        o = n("+fxQ"),
        i = {
          cashier: "https://cashier.youzan.com",
          uic: "https://uic.youzan.com",
          carmen: "https://open.youzan.com",
          h5: "https://h5.youzan.com",
          h5m: "https://h5.m.youzan.com",
          trade: "https://trade.youzan.com",
          qiniu: "https://img01.yzcdn.cn",
          money: "https://money.youzan.com",
          guang: "https://g.youzan.com",
          baymax: "https://open.youzan.com/bifrost",
        },
        s = { origin: "carmen", pathname: "", query: {} };
      var c = (e) => (
          ((e) => /^http:\/\//.test(e))(e) &&
            (e = e.replace("http://", "https://")),
          e
        ),
        u = () => {
          var e = getCurrentPages() || [];
          return e[e.length - 1] || {};
        },
        d = function (e) {
          void 0 === e && (e = {});
          var { withSlash: t, withQuery: n } = e,
            { route: a, options: o = {} } = u();
          if (!a) return "";
          var i = a;
          return t && (i = "/" + i), n && (i = r.a.add(i, o)), i;
        };
      t.a = function (e) {
        var t = ((e = Object(a.a)({}, s, e)).pathname || "").startsWith("/");
        return Object(o.b)(e.origin)
          .then((t) => t || i[e.origin])
          .catch(() => i[e.origin])
          .then((n) => {
            var a = n + (t ? "" : "/") + e.pathname;
            return r.a.add(a, e.query);
          });
      };
    },
    Shdd: function (e, t, n) {
      n.d(t, "c", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return c;
        });
      var r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        a = function (e, t, n, r) {
          return new (n || (n = Promise))(function (a, o) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, s);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        o = function (e, t) {
          var n,
            r,
            a,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (a =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                        !(a = a.call(r, o[1])).done)
                    )
                      return a;
                    switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((a = i.trys),
                          (a = a.length > 0 && a[a.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < a[1]) {
                          (i.label = a[1]), (a = o);
                          break;
                        }
                        if (a && i.label < a[2]) {
                          (i.label = a[2]), i.ops.push(o);
                          break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = t.call(e, i);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = a = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        },
        i = function (e, t) {
          return (
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            {
              state: r(r({}, e.state), t.state),
              getters: r(r({}, e.getters), t.getters),
              getActions: function (n) {
                var a, o;
                return r(
                  r(
                    r(
                      r({}, null == e ? void 0 : e.actions),
                      null == t ? void 0 : t.actions
                    ),
                    null === (a = null == e ? void 0 : e.getActions) ||
                      void 0 === a
                      ? void 0
                      : a.call(e, n)
                  ),
                  null === (o = null == t ? void 0 : t.getActions) ||
                    void 0 === o
                    ? void 0
                    : o.call(t, n)
                );
              },
            }
          );
        },
        s = function (e, t, n) {
          return t.reduce(function (t, n) {
            return a(void 0, void 0, void 0, function () {
              var r;
              return o(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, t];
                  case 1:
                    return (r = a.sent()), [2, n.bind(e)(r)];
                }
              });
            });
          }, Promise.resolve(n));
        },
        c = function (e, t, n) {
          return function (a) {
            return (
              void 0 === a && (a = {}),
              new Promise(function (o) {
                e.createSelectorQuery()
                  .select(t)
                  .boundingClientRect()
                  .exec(function (e) {
                    var t,
                      i = e[0] ? e[0].top : 0;
                    o(r(r({}, a), (((t = {})[n] = i), t)));
                  });
              })
            );
          };
        };
    },
    Sm4f: function (e, t) {
      e.exports = { d: "shopCertConfig;0;isWsc;0", w: "Main", wd: "Main" };
    },
    T6h7: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        a = (r = n("ZxyO")) && r.__esModule ? r : { default: r };
      var o = function (e, t) {
        return (
          (e = new a.default(e)),
          (t = new a.default(t)),
          parseFloat(e.minus(t).toFixed())
        );
      };
      (t.default = o), (e.exports = t.default);
    },
    "TO+A": function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = n("h+Rz");
      function a() {
        return r.a.stopPullDownRefresh();
      }
      function o() {
        return r.a.startPullDownRefresh();
      }
    },
    TOEM: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("/XVY"),
        a = Object(r.a)({
          btnName: { default: "" },
          qrcode: { default: 0 },
          isH5Support: { default: !1 },
          isWeappContactSupport: { default: !1 },
          isWeappSupport: { default: !1 },
          customLogo: { default: "" },
          title: { default: "" },
          scene: { default: "" },
          bgColor: { default: "" },
          logo: { default: "" },
          subType: { default: 1 },
          desc: { default: "" },
          type: { default: "" },
          headImageUrl: { default: "" },
          qrCodeUrl: { default: "" },
          imgOpt: { default: {} },
          cardBg: { default: "" },
          isFillet: { default: "1" },
          pagePadding: { default: 0 },
          componentVersion: { default: "0" },
          logoType: { default: "1" },
        });
    },
    Tr3L: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("h+Rz");
      function a() {
        return r.a.getNetworkType();
      }
    },
    TzfB: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("ECkf"),
        a = Behavior({
          externalClasses: ["hover-class"],
          properties: {
            id: String,
            buttonId: String,
            lang: String,
            businessId: Number,
            sessionFrom: String,
            sendMessageTitle: String,
            sendMessagePath: String,
            sendMessageImg: String,
            showMessageCard: Boolean,
            appParameter: String,
            ariaLabel: String,
            openType: String,
            getUserProfileDesc: String,
          },
          data: { canIUseGetUserProfile: Object(r.b)() },
          methods: {
            onGetUserInfo(e) {
              this.triggerEvent("getuserinfo", e.detail);
            },
            onContact(e) {
              this.triggerEvent("contact", e.detail);
            },
            onGetPhoneNumber(e) {
              this.triggerEvent("getphonenumber", e.detail);
            },
            onGetRealTimePhoneNumber(e) {
              this.triggerEvent("getrealtimephonenumber", e.detail);
            },
            onError(e) {
              this.triggerEvent("error", e.detail);
            },
            onLaunchApp(e) {
              this.triggerEvent("launchapp", e.detail);
            },
            onOpenSetting(e) {
              this.triggerEvent("opensetting", e.detail);
            },
            onAgreePrivacyAuthorization(e) {
              this.triggerEvent("agreeprivacyauthorization", e.detail);
            },
            onChooseAvatar(e) {
              this.triggerEvent("chooseavatar", e.detail);
            },
          },
        });
    },
    UL3R: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("Fcif"),
        a = n("svh/");
      function o(e) {
        void 0 === e && (e = {});
        var t = e.mapData || {};
        return (
          e.getters && (t = Object(r.a)({}, t, Object(a.f)(e.getters))),
          e.state && (t = Object(r.a)({}, t, Object(a.h)(e.state))),
          (e.mapData = t),
          e
        );
      }
    },
    VZJX: function (e, t, n) {
      var r = n("cm7J");
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    VbZR: function (e, t) {
      e.exports = function (e) {
        return e != e;
      };
    },
    VdoR: function (e, t, n) {
      var r = n("Pv5g"),
        a = Object(r.a)({ appName: "wsc", logIndex: "new_wsc_weapp_log" });
      t.a = a;
    },
    VfJb: function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      });
      var r,
        a = n("w2Y9"),
        o = n.n(a);
      !(function (e) {
        (e.FreightInsurance = "freightInsurance"),
          (e.FreightInsurancePro = "freightInsurancePro"),
          (e.SupportQuickRefund = "supportQuickRefund"),
          (e.IsExpiredAutoRefund = "isExpiredAutoRefund"),
          (e.SupportUnconditionalReturn = "supportUnconditionalReturn"),
          (e.SupportBarter = "supportBarter"),
          (e.SupplierDirect = "supplierDirect"),
          (e.HaitaoTaxContains = "haitaoTaxContains"),
          (e.PhysicalStore = "physicalStore"),
          (e.CashOnDelivery = "cashOnDelivery"),
          (e.HaitaoTaxExtraPays = "haitaoTaxExtraPays"),
          (e.TaxFreeExpress = "taxFreeExpress"),
          (e.OverseaDirectMail = "overseaDirectMail"),
          (e.UnsupportRefund = "unsupportRefund"),
          (e.UnsupportRefundNoReason = "unsupportRefundNoReason"),
          (e.SupportExpress = "supportExpress"),
          (e.SupportSelfFetch = "supportSelfFetch"),
          (e.SupportLocalDelivery = "supportLocalDelivery"),
          (e.IsSecuredTransactions = "isSecuredTransactions"),
          (e.IsSecuredTransactionsKuaishou = "isSecuredTransactionsKuaishou"),
          (e.AfterSalesFromShop = "afterSalesFromShop"),
          (e.PayShopDirectly = "payShopDirectly"),
          (e.HaitaoShopCert = "haitaoShopCert"),
          (e.HaitaoPersonalLimit = "haitaoPersonalLimit");
      })(r || (r = {}));
      var i = [
          {
            key: r.FreightInsurance,
            show: function (e) {
              var t = e.shopConfig;
              return 1 === Number(t.supportFreightInsurance);
            },
          },
          {
            key: r.FreightInsurancePro,
            show: function (e) {
              var t = e.shopConfig;
              return 2 === Number(t.supportFreightInsurance);
            },
          },
          {
            key: r.SupportQuickRefund,
            show: function (e) {
              return e.goodsBaseInfo.supportQuickRefund;
            },
          },
          {
            key: r.IsExpiredAutoRefund,
            show: function (e) {
              var t;
              return null === (t = e.goodsActivity.virtualTicket) ||
                void 0 === t
                ? void 0
                : t.isExpiredAutoRefund;
            },
          },
          {
            key: r.SupportBarter,
            show: function (e) {
              var t;
              return (
                1 ===
                (null === (t = e.goodsBaseInfo.barterModel) || void 0 === t
                  ? void 0
                  : t.isSupportBarter)
              );
            },
          },
          {
            key: r.SupportUnconditionalReturn,
            show: function (e) {
              return e.goodsBaseInfo.supportUnconditionalReturn;
            },
          },
          {
            key: r.SupplierDirect,
            show: function (e) {
              var t,
                n = e.goodsBaseInfo,
                r = e.staticConfig;
              return (
                n.fxTradeMode ===
                (null === (t = null == r ? void 0 : r.fxMode) || void 0 === t
                  ? void 0
                  : t.PROMOTION)
              );
            },
            parser: function (e) {
              var t,
                n = e.goodsBaseInfo,
                r =
                  null === (t = e.staticConfig.certUrlMap) || void 0 === t
                    ? void 0
                    : t.shopInfo;
              return r
                ? {
                    url: o.a.add(r, {
                      kdt_id: n.supplierKdtId,
                      show: "supplier",
                      no_footer: 1,
                      no_btn: 1,
                    }),
                  }
                : null;
            },
          },
          {
            key: r.HaitaoTaxContains,
            show: function (e) {
              var t = e.goodsBaseInfo,
                n = e.goodsActivity;
              return t.isHaitao && n.haitao && 0 !== n.haitao.tariffRule;
            },
          },
          {
            key: r.PhysicalStore,
            show: function (e) {
              var t = e.shopConfig,
                n = e.env;
              return t.hasPhysicalStore && !n.isNewHopeKdt;
            },
          },
          {
            key: r.CashOnDelivery,
            show: function (e) {
              return e.payWays.cashOnDelivery;
            },
          },
          {
            key: r.HaitaoTaxExtraPays,
            show: function (e) {
              var t = e.goodsBaseInfo,
                n = e.goodsActivity;
              return t.isHaitao && n.haitao && 0 === n.haitao.tariffRule;
            },
          },
          {
            key: r.TaxFreeExpress,
            show: function (e) {
              var t;
              return (
                1210 ===
                (null === (t = e.goodsActivity.haitao) || void 0 === t
                  ? void 0
                  : t.haiTaoTradeMode)
              );
            },
          },
          {
            key: r.OverseaDirectMail,
            show: function (e) {
              var t;
              return (
                9610 ===
                (null === (t = e.goodsActivity.haitao) || void 0 === t
                  ? void 0
                  : t.haiTaoTradeMode)
              );
            },
          },
          {
            key: r.UnsupportRefund,
            show: function (e) {
              var t;
              return !(null === (t = e.goodsMetaInfo.refund) || void 0 === t
                ? void 0
                : t.isSupport);
            },
          },
          {
            key: r.UnsupportRefundNoReason,
            show: function (e) {
              var t = e.goodsBaseInfo,
                n = e.goodsActivity;
              return (t.isHaitao && n.haitao) || t.isPrescriptionCategory;
            },
          },
          {
            key: r.SupportExpress,
            show: function (e) {
              return e.distribution.supportExpress;
            },
            parser: function (e) {
              var t = e.distribution,
                n = t.expressFee,
                r = "免运费" === n ? n : "运费：" + n;
              return (
                t.expressPayMode &&
                  (r = "为运费到付，运费最终以物流公司计算为准"),
                { desc: "可选择快递发货配送上门，本商品" + r + "。" }
              );
            },
          },
          {
            key: r.SupportSelfFetch,
            show: function (e) {
              return e.distribution.supportSelfFetch;
            },
          },
          {
            key: r.SupportLocalDelivery,
            show: function (e) {
              return e.distribution.supportLocalDelivery;
            },
            parser: function (e) {
              var t = e.distribution;
              return {
                desc:
                  "可选择同城配送并预约送达时间" +
                  (t.localDeliveryFee
                    ? "，本商品运费：" + t.localDeliveryFee
                    : "") +
                  "。",
              };
            },
          },
          {
            key: r.IsSecuredTransactions,
            show: function (e) {
              var t = e.shopConfig,
                n = e.env;
              return t.isSecuredTransactions && "kuaishou" !== n.platform;
            },
          },
          {
            key: r.IsSecuredTransactionsKuaishou,
            show: function (e) {
              var t = e.shopConfig,
                n = e.env;
              return t.isSecuredTransactions && "kuaishou" === n.platform;
            },
          },
          {
            key: r.AfterSalesFromShop,
            show: function (e) {
              return !e.shopConfig.isSecuredTransactions;
            },
          },
          {
            key: r.PayShopDirectly,
            show: function (e) {
              return !e.shopConfig.isSecuredTransactions;
            },
          },
          {
            key: r.HaitaoShopCert,
            show: function (e) {
              var t = e.goodsBaseInfo,
                n = e.goodsActivity;
              return t.isHaitao && n.haitao;
            },
          },
          {
            key: r.HaitaoPersonalLimit,
            show: function (e) {
              var t = e.goodsBaseInfo,
                n = e.goodsActivity;
              return t.isHaitao && n.haitao;
            },
          },
        ],
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
      function c(e) {
        return i.reduce(function (t, n) {
          var r = n.key,
            a = n.show,
            o = n.parser;
          if (!a || ("function" == typeof a && !a(e))) return t;
          var i = e.staticConfig.serviceTagMap,
            c = (void 0 === i ? {} : i)[r],
            u = o ? o(e) : c;
          return (u || c) && t.push(s(s({}, c), u)), t;
        }, []);
      }
    },
    Vg0o: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = h(n("QSkc")),
        a = h(n("5HXs")),
        o = h(n("LYai")),
        i = h(n("vgDv")),
        s = h(n("e2Yn")),
        c = h(n("OK7I")),
        u = h(n("9DIb")),
        d = h(n("w4n3")),
        l = h(n("cWxX")),
        p = h(n("s0cO"));
      function h(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = {
        addZero: r.default,
        bem: a.default,
        escape: o.default,
        unescape: i.default,
        getLength: s.default,
        makeRandomString: c.default,
        mapKeysToCamelCase: u.default,
        mapKeysToSnakeCase: d.default,
        toCamelCase: l.default,
        toSnakeCase: p.default,
      };
      (t.default = f), (e.exports = t.default);
    },
    VlGz: function (e, t, n) {
      var r = Object.prototype.hasOwnProperty;
      function a(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (e) {
          return null;
        }
      }
      function o(e) {
        try {
          return encodeURIComponent(e);
        } catch (e) {
          return null;
        }
      }
      (t.stringify = function (e, t) {
        t = t || "";
        var n,
          a,
          i = [];
        for (a in ("string" != typeof t && (t = "?"), e))
          if (r.call(e, a)) {
            if (
              ((n = e[a]) || (null != n && !isNaN(n)) || (n = ""),
              (a = o(a)),
              (n = o(n)),
              null === a || null === n)
            )
              continue;
            i.push(a + "=" + n);
          }
        return i.length ? t + i.join("&") : "";
      }),
        (t.parse = function (e) {
          for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; (t = n.exec(e)); ) {
            var o = a(t[1]),
              i = a(t[2]);
            null === o || null === i || o in r || (r[o] = i);
          }
          return r;
        });
    },
    VmCB: function (e, t, n) {
      n.d(t, "a", function () {
        return y;
      });
      var r,
        a,
        o = n("Fcif"),
        i = n("9DIb"),
        s = n.n(i),
        c = n("NHEX"),
        u = n.n(c),
        d = 0,
        l = 1,
        p = (((r = {})[d] = "全款预售"), (r[l] = "定金预售"), r),
        h = (((a = {})[d] = "fullPresale"), (a[l] = "deposit"), a),
        f = n("KEq0"),
        g = n.n(f);
      var v = {
        price: 0,
        oldPrice: 0,
        priceTitle: "",
        notShowPriceTitle: !1,
        soldNum: 0,
        stockNum: 0,
      };
      function m(e) {
        return (
          void 0 === e && (e = []),
          e.reduce((e, t) => Object(o.a)({}, e, { [t.skuId]: t }), {})
        );
      }
      function y(e, t, n) {
        void 0 === n && (n = {});
        var r = u()(e, "staticData.goodsData", {}),
          a = u()(t, "showDefaultCartText"),
          { skuInfo: i, goods: c } = r,
          d = u()(c, "periodBuyExtra", null),
          f = (function (e, t, n) {
            void 0 === e && (e = {}), void 0 === t && (t = null);
            var {
                props: r = [],
                messages: a = [],
                skus: i = [],
                hideStock: c = !1,
                birthdayInfo: d = {},
              } = e,
              l = [],
              p = r.map(
                (e) => (
                  (e.v = e.v.map((e) => {
                    var { imgUrl: t } = e;
                    return t && (t = g()(t)), Object(o.a)({}, e, { imgUrl: t });
                  })),
                  e
                )
              ),
              h = Object(o.a)({}, v, {
                hideStock: c,
                tree: p,
                list: l,
                messages: a,
                birthdayInfo: d,
              }),
              f = m(e.skuPrices),
              y = m(e.skuStocks);
            if (
              (n.isDisplaySkuPicture &&
                p.length > 0 &&
                (p[0].largeImageMode = !0),
              t)
            ) {
              var b = m(t.skuPrices),
                _ = m(t.skuStocks);
              (l = i.map((e) => {
                var { skuId: t } = e,
                  n = f[t].price,
                  r = _[t];
                r && r.disable && (r = Object(o.a)({}, r, { stockNum: 0 }));
                var a = b[t];
                return (
                  a &&
                    a.price > 0 &&
                    (a = Object(o.a)({}, a, {
                      notShowPriceTitle: a.price >= n,
                    })),
                  Object(o.a)({}, v, e, { oldPrice: n }, a, r, { id: t })
                );
              })),
                (h = Object(o.a)({}, h, t.spuStock, t.spuPrice, {
                  collectionId: u()(t, "spuStock.skuId", 0),
                  collectionPrice: u()(t, "spuPrice.price", 0),
                  oldPrice: u()(e, "spuPrice.price", 0),
                  list: l,
                }));
            } else
              (l = i.map((e) => {
                var { skuId: t } = e;
                return Object(o.a)({}, v, e, { oldPrice: 0 }, f[t], y[t], {
                  id: t,
                });
              })),
                (h = Object(o.a)({}, h, e.spuStock, e.spuPrice, {
                  collectionId: u()(e, "spuStock.skuId", 0),
                  collectionPrice: u()(e, "spuPrice.price", 0),
                  list: l,
                }));
            var S = 1 / 0,
              O = 0,
              w = 1 / 0,
              P = 0,
              I = 0 === h.list.length;
            return (
              I
                ? ((h.collectionPrice = S = O = h.price),
                  (w = P = h.oldPrice || 0))
                : ((h.stockNum = h.list.reduce(
                    (e, t) => e + (t.stockNum || 0),
                    0
                  )),
                  h.list.forEach((e) => {
                    e.disable ||
                      (h.stockNum > 0 && 0 === e.stockNum) ||
                      ((S = Math.min(S, e.price)),
                      (O = Math.max(O, e.price)),
                      (w = Math.min(w, e.oldPrice)),
                      (P = Math.max(P, e.oldPrice)));
                  }),
                  (h.price = S || O || 0),
                  (h.oldPrice = w || P || 0)),
              (h.price = h.price || S || O || 0),
              isFinite(P) || (P = 0),
              (h.oldPrice = h.oldPrice || w || P || 0),
              s()(
                Object(o.a)({}, h, {
                  noneSku: I,
                  minPrice: S,
                  maxPrice: O,
                  oldMinPrice: w,
                  oldMaxPrice: P,
                  previewOnClickImage: !1,
                })
              )
            );
          })(i, null, c),
          y = (function (e, t) {
            return (
              void 0 === t && (t = {}),
              {
                quota: e.quota || 0,
                quotaUsed: (t.goodsExtra || {}).quotaUsed || e.quotaUsed || 0,
                singleQuota:
                  e.isHaitao || e.isVirtualTicket || e.isVirtualCoupon
                    ? 100
                    : 0,
                quotaCycle: e.quotaCycle,
                startSaleNum: e.startSaleNum || 1,
              }
            );
          })(c, n);
        if (
          ((f.limit = y),
          (f.stepperTitle = d ? "每期配送数量" : a ? "购买数量" : "数量"),
          c.preSaleInfo)
        ) {
          var { preSaleType: b } = c.preSaleInfo,
            _ = p[b],
            S = h[b];
          if (((f.priceTags = [{ text: _, type: S }]), b === l)) {
            var O = (function (e, t) {
              var { price: n, minPrice: r, maxPrice: a, list: i } = t,
                {
                  deposit: s,
                  minDeposit: c,
                  maxDeposit: u,
                  skuDepositModels: d,
                } = e;
              if (d && d.length) {
                var l = d.reduce(
                  (e, t) => Object(o.a)({}, e, { [t.skuId]: t.deposit }),
                  {}
                );
                i.forEach((e) => {
                  e.price = l[e.skuId];
                });
              }
              return {
                price: s || c || u || 0,
                minPrice: c || s,
                maxPrice: u || s,
                oldPrice: n,
                oldMinPrice: r,
                oldMaxPrice: a,
                list: i,
                pricePrefix: "定金",
              };
            })(c.preSaleInfo, f);
            Object.assign(f, O);
          }
        }
        return { goods: f };
      }
    },
    Vnr7: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("9ZMt");
      function a(e, t) {
        return r.default.$native.createIntersectionObserver(e, t);
      }
    },
    W3qh: function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n("3lAQ"),
        a = n.n(r),
        o = n("F0jR"),
        i = n.n(o);
      class s {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      s.widgets = { Main: a(), SubmitNotice: i() };
    },
    WNIS: function (e, t, n) {
      n.d(t, "j", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "e", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "i", function () {
          return c;
        }),
        n.d(t, "h", function () {
          return u;
        }),
        n.d(t, "l", function () {
          return d;
        }),
        n.d(t, "k", function () {
          return l;
        }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "f", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return f;
        });
      var r = { NUM: 1, DISCOUNT: 2, EXCHANGE: 3, BUY_PRESENT: 4, EXPRESS: 5 },
        a = { FIXED: 1, ASSIGNED: 2, RANDOM: 3, NOASSIGNED: 4 },
        o = { Valid: 1, Used: 2, Expired: 3, Invalid: 4, Locked: 5 },
        i = { Code: "code", Card: "card", Thirdparty: "thirdparty" },
        s = { Normal: 0, Code: 1, Thirdparty: 2 },
        c = { Birthday: 1, MemberDay: 2, Festival: 3 },
        u = {
          NotStart: 0,
          InProgress: 1,
          Terminated: 2,
          ActivePause: 3,
          AbnormalPause: 4,
          Finished: 5,
        },
        d = "scene-market-subscribe",
        l = "cimWeMiniProMsg",
        p = "points-expire-subscribe",
        h = "maCrmMiniProPoint",
        f = {
          homeOrFeature: "homeOrFeature",
          memberCenterClick: "memberCenterClick",
          levelGuide: "levelGuide",
        };
    },
    WOkX: function (e, t, n) {
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return c;
        });
      var r = n("Y28S"),
        a = getApp(),
        o = () => (a = a || getApp()).getKdtId(),
        i = (e) => {
          var { sl: t, sls: n, oldFromParamsData: a = {} } = e,
            i = o();
          return Object(r.b)({ sl: t, sls: n, oldFromParamsData: a, kdtId: i });
        },
        s = (e) => {
          var { sl: t, sls: n, oldFromParamsData: a } = e,
            i = o();
          return Object(r.c)({ sl: t, sls: n, oldFromParamsData: a, kdtId: i });
        };
      function c(e) {
        var { url: t, sl: n, sls: a } = e,
          i = o();
        return Object(r.a)({ url: t, sl: n, sls: a, kdtId: i });
      }
    },
    WQRT: function (e, t, n) {
      n.d(t, "c", function () {
        return i;
      }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return d;
        });
      var r = n("NHEX"),
        a = n.n(r),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
      function i(e) {
        var t = a()(e, "goods.id", 0),
          n = a()(e, "goods.postage", 0);
        return {
          goodsId: t,
          kdtId: a()(e, "shop.kdtId", 0),
          storeId: a()(e, "shop.multistore.id", 0),
          storeName: a()(e, "shop.multistore.name", 0),
          postage: "string" != typeof n ? n : 0,
        };
      }
      function s(e) {
        var t = e.selectedNum,
          n = void 0 === t ? 0 : t,
          r = e.selectedSkuComb,
          a = void 0 === r ? { id: 0, price: 0 } : r,
          i = e.messages,
          s = void 0 === i ? {} : i,
          c = e.cartMessages,
          u = void 0 === c ? {} : c,
          d = e.birthdayVal,
          l = void 0 === d ? {} : d,
          p = a.id,
          h = void 0 === p ? 0 : p,
          f = a.price,
          g = void 0 === f ? 0 : f;
        return o(o({}, a), {
          skuId: h,
          num: n,
          price: g,
          messages: s,
          cartMessages: u,
          birthdayRelation: {
            BIRTHDAY_RELATION_NET_ORDER_MARK: l.birthdayRelationNetOrderMark,
            RELATION_BLESSING: l.text,
            RELATION_TYPE_ID: l.key,
            RELATION_TYPE_NAME: l.name,
          },
        });
      }
      function c(e) {
        var t = o(
            o(
              {
                goods_id: e.goodsId,
                num: e.num,
                sku_id: e.skuId,
                price: e.price || 0,
                extra: e.birthdayRelation,
              },
              e.messages
            ),
            e.goodsExtra
          ),
          n = o(
            {
              kdt_id: e.kdtId,
              store_id: e.storeId || 0,
              store_name: e.storeName || "",
              postage: e.postage || 0,
              activity_alias: e.activityAlias || "",
              activity_id: e.activityId || 0,
              activity_type: e.activityType || 0,
              use_wxpay: e.useWxpay || 0,
              from: e.from || "",
            },
            e.commonExtra
          );
        return e.from && (n.from = e.from), { goodsData: t, commonData: n };
      }
      function u(e) {
        var t = c(e),
          n = t.goodsData,
          r = t.commonData,
          a = n.propertyIds;
        a && (n.propertyIds = JSON.stringify(a));
        var i = [];
        return (
          Object.keys(e.cartMessages).forEach(function (t) {
            i.push(e.cartMessages[t]);
          }),
          o(o(o({}, n), r), {
            messages: JSON.stringify(i),
            extra: JSON.stringify(n.extra || {}),
          })
        );
      }
      function d(e) {
        var t = c(e),
          n = t.goodsData,
          r = t.commonData,
          a = { goodsList: JSON.stringify([n]), common: JSON.stringify(r) };
        return (
          e.extra && (a.extra = JSON.stringify(e.extra)),
          e.cloudExtension && (a.cloudExtension = e.cloudExtension),
          a
        );
      }
    },
    WjON: function (e, t, n) {
      var r = n("zcvR");
      e.exports = function (e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    WlwD: function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      var r = n("Tewj"),
        a = n("ML4D"),
        o = n.n(a),
        i = n("JdrY"),
        s = n("n0bX"),
        c = n.n(s),
        u = n("gKWa"),
        d = n.n(u);
      class l {
        constructor(e) {
          (this.ctx = e.ctx),
            (this.widget = o.a),
            (this.ctx.data.random = Math.random());
        }
        onPullDownRefresh() {
          r.default.trigger(i.a.PULL_DOWN);
        }
        onPageScroll(e) {
          r.default.trigger(i.a.PAGE_SCROLL, e);
        }
      }
      l.widgets = { Main: o(), FloatingNavBg: c(), SubItem: d() };
    },
    Wnk8: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n("1pB4"),
        a = (e) => ({
          enter:
            "vt-" +
            e +
            "-enter vt-" +
            e +
            "-enter-active enter-class enter-active-class",
          "enter-to":
            "vt-" +
            e +
            "-enter-to vt-" +
            e +
            "-enter-active enter-to-class enter-active-class",
          leave:
            "vt-" +
            e +
            "-leave vt-" +
            e +
            "-leave-active leave-class leave-active-class",
          "leave-to":
            "vt-" +
            e +
            "-leave-to vt-" +
            e +
            "-leave-active leave-to-class leave-active-class",
        }),
        o = () => new Promise((e) => setTimeout(e, 1e3 / 30)),
        i = function (e, t) {
          return (
            void 0 === t && (t = "name"),
            {
              props: {
                customStyle: String,
                show: { type: Boolean, default: e },
                duration: { type: null, default: 300 },
                name: { type: String, default: "fade" },
                enterIsSleep: { type: Boolean, default: !0 },
              },
              watch: {
                show(e, t) {
                  e !== t && (e ? this.enter() : this.leave());
                },
              },
              mounted() {
                this.show ? this.enter() : this.leave();
              },
              data() {
                return { inited: !1, classes: "", style: this._getStyle() };
              },
              logicData: () => ({
                display: !1,
                currentDuration: 0,
                transitionEnded: !1,
              }),
              created() {
                ["duration", "status", "display", "customStyle"].forEach(
                  (e) => {
                    this.$watch(e, () => {
                      this.style = this._getStyle();
                    });
                  }
                );
              },
              methods: {
                _getStyle() {
                  var { duration: e } = this,
                    t = Object(r.f)(e)
                      ? "enter" === this.status
                        ? e.enter
                        : e.leave
                      : e;
                  return (
                    "\n          -webkit-transition-duration: " +
                    t +
                    "ms;\n          transition-duration: " +
                    t +
                    "ms;\n          " +
                    (this.display ? "" : "display: none;") +
                    "\n          " +
                    this.customStyle +
                    "\n        "
                  );
                },
                enter() {
                  var e = this[t],
                    n = a(e);
                  (this.status = "enter"),
                    this.$emit("before-enter"),
                    (this.enterIsSleep
                      ? Promise.resolve().then(o)
                      : Promise.resolve()
                    )
                      .then(() => {
                        if (
                          (this.checkStatus("enter"),
                          this.$emit("enter"),
                          (this.inited = !0),
                          (this.display = !0),
                          (this.classes = n.enter),
                          this.enterIsSleep)
                        )
                          return o();
                      })
                      .then(() => {
                        this.checkStatus("enter"),
                          (this.transitionEnded = !1),
                          setTimeout(() => this.onTransitionEnd()),
                          (this.classes = n["enter-to"]);
                      })
                      .catch(() => {});
                },
                leave() {
                  if (this.display) {
                    var { duration: e } = this,
                      n = this[t],
                      i = a(n),
                      s = Object(r.f)(e) ? e.leave : e;
                    (this.status = "leave"),
                      this.$emit("before-leave"),
                      Promise.resolve()
                        .then(o)
                        .then(() => {
                          this.checkStatus("leave"),
                            this.$emit("leave"),
                            (this.classes = i.leave);
                        })
                        .then(o)
                        .then(() => {
                          this.checkStatus("leave"),
                            (this.transitionEnded = !1),
                            setTimeout(() => this.onTransitionEnd(), s),
                            (this.classes = i["leave-to"]);
                        })
                        .catch(() => {});
                  }
                },
                checkStatus(e) {
                  if (e !== this.status)
                    throw new Error("incongruent status: " + e);
                },
                onTransitionEnd() {
                  if (!this.transitionEnded) {
                    (this.transitionEnded = !0),
                      this.$emit("after-" + this.status);
                    var { show: e, display: t } = this;
                    !e && t && (this.display = !1);
                  }
                },
              },
            }
          );
        };
    },
    "X/0h": function (e, t) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    X3j9: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("Fcif"),
        a = n("noo5");
      function o(e, t, n, o) {
        var i,
          { geoLocationData: s, salableStores: c = [] } = t,
          {
            status: u,
            id: d,
            name: l,
            hideStore: p,
            openMultiStoreSwitch: h = 0,
          } = e,
          { city: f = "", district: g = "", address: v = "" } = e.address || {};
        return (
          n && (n.showMultiStoreRecommend = !!d && !o.goods.stockNum),
          {
            id: d,
            name: l,
            address: "" + f + g + v,
            isMultiStoreEnabled: !!u,
            openMultiStoreSwitch: h,
            hideStore: p,
            distance: s.distance || 0,
            salableStores:
              ((i = c),
              i && i.length > 0
                ? i.map((e) =>
                    Object(r.a)({}, e, {
                      query: { oid: e.id },
                      distance: Object(a.formatDistance)(e.distance),
                    })
                  )
                : []),
          }
        );
      }
    },
    X7EK: function (e, t, n) {
      e.exports = function (e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      };
    },
    "X9+V": function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "b", function () {
          return u;
        });
      var r = n("Fcif"),
        a = n("YnUx"),
        o = n.n(a);
      function i(e, t, n) {
        if (
          (void 0 === t && (t = 2),
          void 0 === n && (n = !1),
          "number" != typeof e)
        )
          return "";
        var r = (e / 100).toFixed(t);
        return n ? parseFloat(r) : r;
      }
      var s = function (e, t) {
          return (
            void 0 === t && (t = "~"), o()(e) ? i(e.min) + t + i(e.max) : i(e)
          );
        },
        c = function (e, t) {
          return (
            void 0 === t && (t = {}),
            void 0 !== e.isStarted && !1 === e.isStarted
              ? {}
              : Object(r.a)({}, t, {
                  quota: e.quota || 0,
                  quotaUsed: e.quotaUsed || 0,
                  quotaCycle: e.quotaCycle || 0,
                })
          );
        };
      function u(e) {
        var { umpActivity: t } = e;
        return Object.keys(t).indexOf("coupon") > -1;
      }
    },
    XCh3: function (e, t, n) {
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var r = n("8B9M"),
        a = Object(r.a)(),
        o = (e, t) => {
          var n = {};
          switch (e) {
            case "view":
              n = {
                et: "view",
                ei: "view",
                en: "商品曝光",
                params: { view_objs: t },
              };
              break;
            case "open_goods":
              n = {
                et: "click",
                ei: "open_goods",
                en: "打开商品详情",
                params: t,
              };
              break;
            case "click_buy":
              n = { et: "click", ei: "click_buy", en: "点击购买", params: t };
              break;
            case "click_content":
              n = {
                et: "click",
                ei: "click_content",
                en: "组件点击",
                params: t,
              };
              break;
            case "logger":
              n = t;
          }
          return n;
        },
        i = (e) => {
          a.logger.log(e);
        };
    },
    XMVD: function (e, t) {
      e.exports = {
        d: "displayData;4;orderData;4;themeColors;4;orderFinalPrice;4;shopConfig;4;goods;4;pointDeduction;4;coupon;4;shop;4;pay;4;order;4;orderKeepApply;4;display;4;orderPaid;4;titleText;4;isRetailWeappScene;4",
        e: "",
        el: "openOrderKeep;closeOrderKeep",
        w: "PresentGoods;Price;OrderKeepDialog;OrderKeepNavigator;OrderKeep;TradeCarousel",
        wc: "Price;OrderKeepDialog;TradeCarousel",
        wd: "Main",
        l: "getTradeBuyPageData;getTradeBuyPreFetchQuery",
        lc: "hexToRgb",
        p: "navigateToTradeBuy",
        pi: "navigateToTradeBuy",
        c: "",
        cc: "",
        li: "pageDestroyed",
      };
    },
    XNep: function (e, t) {
      e.exports = {
        d: "preferredPayChannel;2;prePayFilteredChannels;2;prePayInstalment;2;prePaySelected;2;computedHeight;2;prePayShowList;2;prePayShowPayPasser;2;prePayPass;2;amount;4;biz;4;mobile;4;traceId;4;themeColors;4;excludePayChannels;4;bizExt;4;viewportMargins;4",
        e: "cashier:change;cashier:pay:success;cashier:pay:fail;cashier:viewport:in;cashier:viewport:out;cashier:ready;onPrePayChannelChange;onPrePayCloseList;onPrePayPassForget;onPrePayPassUpdate;onPrePayPassCheck;onPrePayPassClose",
        el: "onPrePayChannelChange;onPrePayCloseList;onPrePayPassForget;onPrePayPassUpdate;onPrePayPassCheck;onPrePayPassClose",
        w: "SingleRow;CellGroup;SingleRowChannelListPopup;SingleRowPayPasser",
        wc: "",
        p: "pay;requestOrderPayment",
        pi: "onPaySuccessSync;getIsSyncOrder;onPayItemClick",
      };
    },
    XS2z: function (e, t, n) {
      var r;
      n.d(t, "a", function () {
        return r;
      }),
        (function (e) {
          (e.NORMAL = "normal"), (e.SEPARATE = "separate");
        })(r || (r = {}));
    },
    XXCu: function (e, t) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    Xdhg: function (e, t, n) {
      var r = n("Br49"),
        a = "__userAuthorizePopups";
      t.a = {
        register: function (e, t, n) {
          var o =
            t +
            "%" +
            e +
            "%" +
            Date.now() +
            "%" +
            Math.floor(1e4 * Math.random() + 1);
          if (e === r.d.POPUP && n) {
            if (((n[a] = n[a] || []), n[a].length > 0)) return "";
            n[a].push(o);
          }
          return o;
        },
        remove: function (e, t, n) {
          try {
            if (e === r.d.POPUP && Array.isArray(n[a])) {
              var o = n[a].indexOf(t);
              n[a].splice(o, 1);
            }
            return t;
          } catch (e) {
            return !1;
          }
        },
        getLatestPopupId: function (e, t) {
          var n = e[a];
          if (Array.isArray(n)) return n[n.length - 1];
        },
      };
    },
    Xq7Z: function (e, t, n) {
      n.d(t, "k", function () {
        return r;
      }),
        n.d(t, "j", function () {
          return a;
        }),
        n.d(t, "g", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "m", function () {
          return u;
        }),
        n.d(t, "i", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return l;
        }),
        n.d(t, "h", function () {
          return h;
        }),
        n.d(t, "b", function () {
          return f;
        }),
        n.d(t, "d", function () {
          return g;
        }),
        n.d(t, "l", function () {
          return v;
        });
      var r = {
          0: "card",
          1: "waterfall",
          2: "simple",
          3: "promotion",
          4: "multi",
          5: "card2",
          6: "points",
          7: "card-shadow",
          8: "tag-left",
        },
        a = {
          CARD: 0,
          WATERFALL: 1,
          SIMPLE: 2,
          PROMOTION: 3,
          MULTI: 4,
          CARD2: 5,
          POINTS: 6,
          CARD_SHADOW: 7,
          TAG_LEFT: 8,
        },
        o = {
          0: "big",
          1: "small",
          2: "hybrid",
          3: "list",
          5: "three",
          6: "swipe",
        },
        i = {
          BIG: 0,
          SMALL: 1,
          HYBRID: 2,
          LIST: 3,
          MULTI: 4,
          THREE: 5,
          SWIPE: 6,
        },
        s = { 0: "new-arrival", 1: "hot-sale", 2: "new", 3: "hot" },
        c = { 0: "3:2", 1: "1:1", 2: "3:4", 3: "16:9" },
        u = { 1: "normal", 2: "bold" },
        d = { 1: "rect", 2: "circle" },
        l = { SMALL: "small", BIG: "big" },
        p = "https://img01.yzcdn.cn/public_files/2018/08/20",
        h = {
          COLUMN: p + "/d5b6ccfc9383b976fc02a88f43f49ef2.png",
          TEXT: p + "/b24699aee714351838f730cdb59de84a.png",
          AUDIO: p + "/e05ef730df7b6fb43844b908734a9fc0.png",
          VIDEO: p + "/0bfab52c6a9c77b58ca686567479b4ab.png",
          LIVE: p + "/aac3b43a16195809ab479746236a457c.png",
        },
        f = { COLUMN: "", TEXT: "", AUDIO: "", VIDEO: "", LIVE: "" },
        g = { READ: "免费试读", LISTEN: "免费试听", WATCH: "免费试看" },
        v = "https://img01.yzcdn.cn/weapp/wsc/lPgl6z.png";
    },
    "Xr+B": function (e, t, n) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r = n("9ZMt");
      function a(e) {
        r.default.$native.onPageNotFound(e);
      }
      function o(e) {
        r.default.$native.offPageNotFound(e);
      }
    },
    Y0JT: function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n("COAg"),
        a = n.n(r),
        o = n("vmqh"),
        i = n.n(o);
      class s {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      s.widgets = { Main: a(), NavigationBar: i() };
    },
    Y2PO: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        a = (r = n("O1uH")) && r.__esModule ? r : { default: r };
      var o = function (e, t) {
        return Array.isArray(e)
          ? 0 !== e.length
            ? (0, a.default)(e, t, function (e, t) {
                return e < t;
              })
            : void 0
          : e;
      };
      (t.default = o), (e.exports = t.default);
    },
    Y7pJ: function (e, t) {
      e.exports = {
        d: "containerStyle;2;pointsConfig;2;rootKdtId;6;kdtId;6;featureComponents;6;extraData;4;imSourceDetail;6;alias;6;shopInfo;6;buyerId;6;shopConfig;6;themeColors;6;isTabPage;6;isHomePage;6;appId;6;isMultiStore;6;featureHotUpdate;6;renderMode;6;soldOutGoodsFlag;6;isUserCenter;6",
        e: "sku:show",
        w: "ShowcaseContainer",
        wc: "RetailShelfBanner;RetailShelfEntry;RetailShelfOrderPool;RetailShelfMemberCard;RetailShelfCustomerAsset;RetailShelfStoreCard;DecorateComponent",
        wd: "ShowcaseContainer",
        lc: "getUserInfo;jumpToLink",
        p: "",
        pi: "requestWechatSubscribeMessagePush",
        cc: "MessageContactButton",
        li: "onPullDownRefresh;onReachBottom;onPageShow;onPageHide",
      };
    },
    Y7y7: function (e, t) {
      e.exports = {
        d: "",
        e: "",
        el: "",
        w: "",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
        li: "beforePageCreate;pageDestroyed",
      };
    },
    YJBp: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("042e"),
        a = n.n(r);
      class o {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      o.widgets = { Main: a() };
    },
    Yfvy: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var r = {};
      var a = (e) => r[e] || [],
        o = (e, t) => ({});
    },
    YnUx: function (e, t, n) {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = ((r = n("C6tv")) && r.__esModule ? r : { default: r }).default;
      (t.default = a), (e.exports = t.default);
    },
    "Yof+": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, n) {
          if (!e) return;
          if (e.length === +e.length)
            for (var r = 0, a = e.length; r < a; r++) t.call(n, e[r], r, e);
          else
            for (var o = Object.keys(e), i = 0, s = o.length; i < s; i++)
              t.call(n, e[o[i]], o[i], e);
        }),
        (e.exports = t.default);
    },
    Yt9W: function (t, n, r) {
      r.d(n, "e", function () {
        return g;
      }),
        r.d(n, "c", function () {
          return v;
        }),
        r.d(n, "a", function () {
          return m;
        }),
        r.d(n, "h", function () {
          return y;
        }),
        r.d(n, "g", function () {
          return b;
        }),
        r.d(n, "d", function () {
          return _;
        }),
        r.d(n, "f", function () {
          return S;
        });
      var a = r("Fcif"),
        o = r("2wjL"),
        i = r("2ktG"),
        s = r("xqQ2");
      function c(t, n) {
        void 0 === n && (n = "");
        try {
          t();
        } catch (t) {
          var r = getApp() || {},
            { logger: a = {} } = r;
          a.onError &&
            a.onError({
              name: "log 打点报错",
              message: e.msg || e.message || "",
              detail: { msg: n },
            });
        }
      }
      class u extends s.a {
        addSessionParams() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          c(() => super.addSessionParams(...t), "addSessionParams error");
        }
        setBizInfo() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          c(() => super.setBizInfo(...t), "setBizInfo error");
        }
        appShow() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          c(() => super.appShow(...t), "appShow error");
        }
        appHide() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          c(() => super.appHide(...t), "appHide error");
        }
        pageShow() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          c(() => super.pageShow(...t), "pageShow error");
        }
        pageHide() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          c(() => super.pageHide(...t), "pageHide error");
        }
        log() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          c(() => super.log(...t), "log error");
        }
        performance() {}
        updateSession() {}
      }
      var d = u,
        l = r("OPDa"),
        p = r("wfgx"),
        { getSpm: h } = p.a,
        f = function () {
          return Object(i.a)({}).get("logv3:dc_ps") || "";
        };
      function g(e) {
        var t = getApp();
        t.logger.pageHide({ id: e }), (t.logger.pageEvent.params = {});
      }
      function v(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = getApp());
        var n = t.globalData.adData || {},
          r = t.globalData.loggerData || {};
        (t.globalData.adData = {
          gdtVid: e.gdt_vid || n.gdtVid || "",
          qzGdt: e.qz_gdt || n.qzGdt || "",
          weixinadinfo: e.weixinadinfo || n.weixinadinfo || "",
          sceneType: e.scene_type || n.sceneType || "",
        }),
          (t.globalData.loggerData = {
            chan_id: e.chan_id || r.chan_id || "",
            room_id: e.room_id || r.room_id || "",
          });
      }
      function m() {
        var e = getApp();
        e && (e.globalData.loggerData = {});
      }
      var y = function (e, t) {
          void 0 === t && (t = getApp());
          var n = t.getKdtId() || "",
            r = t.getMobile() || "",
            o = t.getBuyerId() || "",
            i = t.getToken() || {},
            {
              openId: s = "",
              yzUserId: c = "",
              userId: u = "",
              platformFansId: d = "",
              unionId: l = "",
            } = i,
            p = o || c || u,
            h = u,
            f = d;
          e.setBizInfo({ mobile: r, userId: p, kdtId: n });
          var g = t.globalData.adData || {},
            v = t.globalData.loggerData || {},
            m = {
              union_id: l,
              yz_uid: p,
              buyerId: o,
              buyer_id: o,
              open_id: s,
              fans_id: h,
              yz_fans_id: f,
            };
          e.setPageParams(
            Object(a.a)(
              { oid: t.getOfflineId(), hq_kdt_id: t.getHQKdtId() },
              m,
              {
                chan_id: v.chan_id,
                room_id: v.room_id,
                weixinadinfo: g.weixinadinfo,
              }
            )
          ),
            e.setUser(Object(a.a)({}, m));
        },
        b = (e, t) => {
          if (t) {
            t.params || (t.params = {});
            try {
              var n = e.getAppId(),
                { apiCategory: r, referrerInfo: a } = wx.getEnterOptionsSync(),
                { appId: o } = a || {};
              Object.assign(t.params, { appId: n, appMode: r, srcAppId: o });
            } catch (e) {}
          }
        };
      function _(e, t, n, r, o, i) {
        void 0 === n && (n = {});
        var s = getApp();
        l.a.setCurrentSpm(e, t, r, o),
          n && n.en && (s.logger.setPageName(n.en), delete n.en);
        var c = !1;
        if (o && o.length) {
          var u = o[o.length - 1];
          u._isNewlyOpen || ((c = !0), (u._isNewlyOpen = !0));
        }
        y(s.logger),
          s.logger.setPageParams(
            Object(a.a)({}, n, {
              is_newly_open: c,
              is_retail: s.globalData.isRetailApp,
            })
          ),
          s.logger.pageShow({ id: t }, i);
      }
      function S(e, t) {
        (t = t || {}),
          getApp().logger.appError({
            message: e,
            detail: Object(a.a)({}, t, { spm: h() }),
          });
      }
      (d.processShareData = function (e) {
        void 0 === e && (e = {});
        var t = getApp(),
          n = f(),
          r = e.path || "/packages/home/dashboard/index",
          i = {};
        return (
          o.a.getAll(r).kdt_id || (i.kdt_id = t.getKdtId()),
          n && (i.dc_ps = n),
          t.getShopInfoSync().isMultiStore &&
            (r = o.a.add(r, { offlineId: t.getOfflineId() })),
          (r = o.a.add(r, i)),
          Object(a.a)({}, e, { path: r })
        );
      }),
        (d.getDCPS = f),
        (d.getTradeLog = function (e) {
          void 0 === e && (e = {});
          var t = getApp().logger.getGlobal() || {},
            n = t.user || {},
            r = t.context || {},
            o = t.plat || {};
          return JSON.stringify(
            Object(a.a)(
              {},
              r,
              o,
              { platform: "weapp", uuid: n.uuid, userId: n.li || "" },
              e
            )
          );
        });
      n.b = d;
    },
    Yzgk: function (e, t, n) {
      var r = n("RqPZ"),
        a = n("zc1V"),
        o = n("9aUh"),
        i = n("bE7W"),
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        u = Object.prototype,
        d = c.toString,
        l = u.hasOwnProperty,
        p = RegExp(
          "^" +
            d
              .call(l)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!o(e) || a(e)) && (r(e) ? p : s).test(i(e));
      };
    },
    ZIOE: function (e, t, n) {
      n.r(t),
        n.d(t, "getShopInfoParams", function () {
          return P;
        }),
        n.d(t, "fetchLaunchJsonCallback", function () {
          return I;
        }),
        n.d(t, "getKdtId", function () {
          return k;
        }),
        n.d(t, "updateKdtId", function () {
          return C;
        }),
        n.d(t, "setShopInfo", function () {
          return T;
        }),
        n.d(t, "getShopTheme", function () {
          return A;
        }),
        n.d(t, "getHiddenPowerBy", function () {
          return E;
        }),
        n.d(t, "getShopConfigData", function () {
          return D;
        }),
        n.d(t, "getCopyright", function () {
          return M;
        }),
        n.d(t, "getNavConfigSync", function () {
          return N;
        }),
        n.d(t, "getNavConfig", function () {
          return L;
        }),
        n.d(t, "getShopInfo", function () {
          return B;
        }),
        n.d(t, "waitForEnterShop", function () {
          return U;
        }),
        n.d(t, "getShopInfoSync", function () {
          return F;
        }),
        n.d(t, "getShopConfigDataSync", function () {
          return G;
        }),
        n.d(t, "getOfflineId", function () {
          return H;
        }),
        n.d(t, "getOfflineSeparatePrice", function () {
          return q;
        }),
        n.d(t, "setOfflineId", function () {
          return z;
        }),
        n.d(t, "getHQKdtId", function () {
          return W;
        }),
        n.d(t, "getCryptoInfo", function () {
          return K;
        });
      var r = n("eijD"),
        a = n("Fcif"),
        o = n("uhII"),
        i = o.a,
        s = n("jA1y"),
        c = n("qHGj"),
        u = n("zMoS"),
        d = n("DXKY"),
        l = n("taYb"),
        p = n("x5Yp"),
        h = n("/duV"),
        f = n("sbwY"),
        g = n("7WjY"),
        v = n("rBuL"),
        m = n("LHcj"),
        y = n("lRMv"),
        b = n("bBDD"),
        _ = n("f9/1"),
        S = n("SVbq"),
        { state: O, commit: w } = f.a;
      function P() {
        return {
          weapp_type: O.config.weappType,
          share_offline_id: Object(m.a)("current_share_offline_id") || "",
          not_enter_shop: "1",
          global_theme_version: 1,
        };
      }
      function I(e) {
        void 0 === e && (e = {});
        var {
            fromCache: t,
            cacheData: n = {},
            enable_http2: r = !1,
            enable_cdn: o = !1,
            mall_shop_config_data: i,
          } = e,
          s = getApp();
        return (
          s &&
            s.globalData &&
            ((s.globalData.enableHttp2 = r),
            (s.globalData.enableCdn = o),
            (s.globalData.mall_shop_config_data = i)),
          t &&
            n.refreshPromise.then((e) => {
              var { shop_meta_info: t = {} } = e,
                n = 2 == +Object(u.a)(O, "shop.shopMetaInfo.shop_role", null);
              if (!+k() || !n || +k() === t.kdt_id || 1 !== t.shop_role)
                return e;
            }),
          Object(a.a)({}, e, { _fromCache: t })
        );
      }
      function k() {
        return Object(h.c)() || Object(u.a)(O, "shop.kdtId", null);
      }
      function C(e, t, n) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = !1),
          void 0 === n && (n = {}),
          +e > 0)
        )
          return Object(h.q)(e, Object(a.a)({}, n, { force: t }));
      }
      function T(e) {
        return (
          void 0 === e && (e = {}),
          w("UPDATE_SHOP_DATA", e),
          Object(_.getEnterCacheConfig)("isProxyUpdateKdtId") ||
            d.a.trigger("shop:info:change", e),
          O.shop
        );
      }
      function x(e) {
        return () =>
          new Promise((t) => {
            var n = O.shop[e] || {};
            O.shop.hasBase && 0 !== Object.keys(n).length
              ? t(O.shop[e])
              : d.a.once("shop:" + e + ":resolved", () => t(O.shop[e]));
          });
      }
      Object(h.f)({
        request: function () {
          var e = P(),
            t = { skipShopInfo: !0, cache: !0, needRefresh: !0, expire: 30 };
          return (function e(t, n) {
            void 0 === n && (n = 3);
            return t().catch((r) => (n > 0 ? e(t, n - 1) : Promise.reject(r)));
          })(() =>
            s.c({
              path: "wscshop/weapp/launch.json",
              data: Object(a.a)({}, e, { need_cnd: !0 }),
              config: t,
            })
          )
            .then(function (e) {
              return void 0 === e && (e = {}), I(e);
            })
            .catch(
              (e) => (d.a.trigger("shop:info:fetch:fail"), Promise.reject(e))
            );
        },
        pick: (e) => {
          var { type: t, colors: n } = e.shop_theme_data;
          return {
            shop: l.a.toCamelCase(
              Object(a.a)({}, e.shop_meta_info, {
                logo: Object(u.a)(e, "shop_info.logo"),
              })
            ),
            multiStore: l.a.toCamelCase(e.offline_data),
            theme: { type: t, colors: n || o.b },
          };
        },
        onShopInfoChange: (e, t, n) =>
          ((e, t) => {
            var { isFromBlankPageOrOnLaunch: n = !1 } = t;
            Object(_.createChainStoreEvent)();
            var { _fromCache: r } = e,
              s = {},
              {
                shop_info: c = {},
                offline_data: u = {},
                copyright_data: l = {},
                mall_shop_config_data: p = {},
                business_data: h,
                is_hide_power_by: f,
                is_stop_we_pay_for_vitual: v,
                shop_theme_data: m = {},
                shop_meta_info: y,
                shop_business_config: b = {},
                shop_nav_data: S = {},
                crypto_info: w = {},
              } = e;
            (s.isMultiStore = u.is_multi_store),
              (s.autoEntryStore = u.auto_entry_store),
              (s.soldOutRecommend = u.sold_out_recommend),
              (s.offlineSeparatePrice = u.offline_separate_price),
              (s.openHideStore = +e.mall_shop_config_data.open_hide_store),
              (s.multiStoreSwitch =
                1 == +e.mall_shop_config_data.open_multi_store_switch),
              (s.isDecorateFollowHq =
                0 == +e.mall_shop_config_data.subshop_decorate_independent),
              (s.hideTopBar = +e.mall_shop_config_data.hide_top_bar),
              (s.hasBase = !0),
              (s.nav = S.data || {}),
              Object.assign(s, c),
              (s.base = Object(a.a)({}, c)),
              (s.isServiceDue =
                c.service && "WEAPP_AVAILABLE" !== c.service.status),
              (s.security = {}),
              (s.security.joined = 0 != +c.security.joined),
              (s.virtualGoodsCannotWePay = v),
              Object.assign(O.shop, s),
              (s.copyright = Object(a.a)({}, O.shop.copyright || {}, {
                isCustomized: !!l.is_logo_customized,
                isWeixinSelfHoldPay: e.is_weixin_self_hold_pay,
                hideFooter: l.hide_footer,
                hideQuickEntry: l.hide_quick_entry,
                hideLogo: l.hide_logo,
                hidePoweredBy: l.hide_powered_by || f,
              })),
              s.copyright.isCustomized &&
                (s.copyright.logo = l.customized_logo || g.a.copyright.logo),
              (s.config = p),
              (s.shop_business_isopen = b.is_open),
              (s.suspend_message = b.next_open_time_note || b.suspend_message),
              (s.im =
                h.status < 0
                  ? {}
                  : { businessId: h.business_id, areaCode: h.area_code }),
              (s.vip = { isBigShop: f }),
              (s.cryptoInfo = w);
            var P = i[m.type] || "th0";
            (s.theme = {
              themeClass: P,
              isFantasy: "th11" === P,
              themeFetched: !0,
              type: m.type,
              colors: m.colors || o.b,
            }),
              (s.shopMetaInfo = y);
            var I = Object(_.setChainStoreInfo)({
              shopMetaInfo: y,
              shopInfo: c,
              isFromBlankPageOrOnLaunch: n,
            });
            function k() {
              d.a.trigger("app:multi:store:resolved", {
                store: u,
                fromCache: r,
              }),
                d.a.trigger("app:chain:store:resolved", {
                  shopMetaInfo: y,
                  shopInfo: c,
                  isFromBlankPageOrOnLaunch: n,
                }),
                d.a.trigger("shop:copyright:resolved", s.copyright),
                d.a.trigger("shop:nav:resolved", s.nav),
                d.a.trigger("shop:config:resolved", s.config),
                d.a.trigger("shop:im:resolved", s.config),
                d.a.trigger("shop:vip:resolved", s.vip),
                d.a.trigger("shop:theme:resolved", s.theme),
                d.a.trigger("shop:info:change", s),
                d.a.trigger("shop:info:fetch:success");
            }
            return (
              T(Object(a.a)({}, s, I)),
              Object(_.getEnterCacheConfig)("isProxyUpdateKdtId")
                ? Object(_.cacheProxyUpdateEmit)(k)
                : k(),
              s
            );
          })(t, n),
        onKdtIdChange: (e, t) =>
          (function (e, t) {
            (e = +e),
              Object(v.b)(),
              e &&
                (e !== +t
                  ? (Object(v.c)(e),
                    w("UPDATE_SHOP_DATA", { kdtId: e }),
                    s.f({ kdtId: e }),
                    d.a.trigger("shop:kdt_id:change", e))
                  : s.f({ offlineId: H(), kdtId: e }));
          })(e, t),
      });
      var j = (e) => {
          if (!e) return {};
          if (!S.x) return e;
          var t = Object(_.getEnterCacheConfig)("tabbarNavCacheMap");
          return (
            Object(_.forceUseHqTabbar)() &&
              (e.list = l.a
                .toSnakeCase(t[Object(h.e)()].navList)
                .map(
                  (e) => (
                    (e.page_path = e.page_path.includes("home/feature/index")
                      ? e.page_path
                      : e.page_path.replace(/^\/|(\?.*)$/g, "")),
                    e
                  )
                )),
            e
          );
        },
        A = x("theme"),
        E = x("vip"),
        D = x("config"),
        M = x("copyright"),
        N = (function () {
          var e = Object(r.a)(function* () {
            var e = yield x("nav");
            return j(e);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        L = () => {
          var { nav: e } = O.shop;
          return j(e);
        };
      function R(e, t) {
        return (
          void 0 === t && (t = {}),
          new Promise((n) => {
            if (Object(c.d)(t)) n(e.shop);
            else if (Object(c.c)(t)) {
              var { needEnterShop: r } = Object(b.j)(t);
              Object(y.j)("getShopInfo").then((t) => {
                t && r
                  ? getApp().once("app:chainstore:kdtid:update", () =>
                      n(e.shop)
                    )
                  : n(e.shop);
              });
            } else n(e.shop);
          })
        );
      }
      var B = () =>
        new Promise((e) => {
          var { shopMetaInfo: t, hasBase: n } = O.shop || {};
          n
            ? e(R(O, t))
            : d.a.once("shop:info:fetch:success", () => {
                var { shopMetaInfo: t } = O.shop || {};
                e(R(O, t));
              });
        });
      function U() {
        return new Promise((e) => {
          B().then((t) => {
            1 != +Object(u.a)(t, "shopMetaInfo.shop_role")
              ? e(t)
              : getApp().once("app:chainstore:kdtid:update", () => {
                  e(O.shop);
                });
          });
        });
      }
      function F() {
        return Object(p.a)(O.shop)
          ? { base: {}, security: {}, nav: {} }
          : O.shop;
      }
      function G() {
        return Object(u.a)(O, "shop.config", {});
      }
      function H() {
        return Object(h.d)() || Object(u.a)(O, "shop.offlineId", "");
      }
      function q() {
        return Object(u.a)(O, "shop.offlineSeparatePrice", 0);
      }
      function z() {}
      function W() {
        return null;
      }
      var K = () => O.shop.cryptoInfo || {};
    },
    Zf9w: function (e, t, n) {
      n.d(t, "m", function () {
        return c;
      }),
        n.d(t, "g", function () {
          return l;
        }),
        n.d(t, "e", function () {
          return u;
        }),
        n.d(t, "f", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "i", function () {
          return f;
        }),
        n.d(t, "j", function () {
          return g;
        }),
        n.d(t, "l", function () {
          return v;
        }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return m;
        }),
        n.d(t, "h", function () {
          return y;
        }),
        n.d(t, "k", function () {
          return T;
        }),
        n.d(t, "n", function () {
          return k;
        }),
        n.d(t, "a", function () {
          return j;
        });
      var r,
        a = n("9ZMt"),
        o = n("MLLI"),
        i = a.default.getEnv(),
        s = {};
      function c() {
        var e, t;
        if (s.scene) return s.scene;
        var n =
            (null == (e = a.default.$native)
              ? void 0
              : e.getEnterOptionsSync) ||
            (null == (t = a.default.$native) ? void 0 : t.getLaunchOptionsSync),
          { scene: r } = n ? n() : {};
        return (s.scene = r), s.scene;
      }
      function u() {
        var e = c();
        return [1177, 1176, 1175, 1195, 1208].indexOf(e) > -1;
      }
      function d() {
        var e = c();
        return Promise.resolve([1177, 1176, 1175, 1195, 1208].indexOf(e) > -1);
      }
      function l() {
        if ("weapp" === i) {
          var { statusBarHeight: e, platform: t } = Object(o.b)();
          return (0 === e || u()) && /(ios|android|devtools)/i.test(t);
        }
        return !1;
      }
      function p() {
        return 1195 === c();
      }
      function h() {
        return 1177 === c();
      }
      function f() {
        var e = c();
        return 1177 === e || 1176 === e;
      }
      function g() {
        return 1208 === c();
      }
      function v(e) {
        var t = c(),
          { from_source: n } = e;
        return (
          (l() || [1177, 1176, 1175, 1195, 1208].includes(t)) &&
          "wechatChannel" === n
        );
      }
      function m() {
        return !0;
      }
      function y(e) {
        return new Promise((t) =>
          t("TRUE" === (null == e ? void 0 : e.TRADE_MODULE_ORDER) || d())
        );
      }
      null == (r = a.default.$native) ||
        null == r.onAppHide ||
        r.onAppHide(() => {
          s = {};
        });
      var b,
        _ = n("eijD"),
        S = n("US/N"),
        O = () =>
          Object(S.default)({
            path: "/wscwxvideo/trade-module/weapp-trade-module-status.json",
          }),
        w = n("8mzt");
      function P(e, t) {
        (t = t || {}),
          w.a.log({
            appName: "wsc",
            logIndex: "new_wsc_weapp_log",
            level: "info",
            name: "[weapp]-wxvideo-" + e,
            message: JSON.stringify(t),
          });
      }
      var I = {};
      function k(e) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = Object(_.a)(function* (e) {
          if ((void 0 === e && (e = !0), e && null != I.tradeModuleStatus))
            return I.tradeModuleStatus;
          var t = yield O();
          return (I.tradeModuleStatus = t), I.tradeModuleStatus;
        })).apply(this, arguments);
      }
      function T() {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = Object(_.a)(function* () {
          return (yield k()).WEAPP_TRADE_MODULE_V3_IS_ENABLE;
        })).apply(this, arguments);
      }
      null == (b = a.default.$native) ||
        null == b.onAppHide ||
        b.onAppHide(() => {
          I = {};
        });
      var j = () =>
        new Promise((e, t) => {
          var n, r;
          return null != (n = I) && n.checkBeforeAddOrderResult
            ? e(null == (r = I) ? void 0 : r.checkBeforeAddOrderResult)
            : a.default.$native.checkBeforeAddOrder
            ? a.default.$native.checkBeforeAddOrder({
                success(t) {
                  var n;
                  (I.checkBeforeAddOrderResult = null == t ? void 0 : t.data),
                    e(null == t ? void 0 : t.data),
                    (null != t && null != (n = t.data) && n.traceId) ||
                      P(
                        "交易组件下单--调用wx.checkBeforeAddOrder未返回traceId参数",
                        t
                      );
                },
                fail(e) {
                  P("交易组件下单--调用wx.checkBeforeAddOrder失败", e), t(e);
                },
              })
            : (P(
                "交易组件下单--基础库版本不够无法调用wx.checkBeforeAddOrder",
                {}
              ),
              void t({}));
        });
    },
    aBIM: function (e, t, n) {
      var r = n("zcvR");
      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    aCmY: function (e, t) {
      e.exports = function (e, t, n, r) {
        for (var a = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < a; )
          if (t(e[o], o, e)) return o;
        return -1;
      };
    },
    b2OE: function (e, t, n) {
      var r = n("LSEb")(n("s3UK"), "Set");
      e.exports = r;
    },
    b4An: function (e, t, n) {
      n.d(t, "a", function () {
        return c;
      });
      var r = n("qYBx"),
        a = {
          base: "https://www.youzan.com",
          bbs: "https://bbs.youzan.com",
          cdn: "https://b.yzcdn.cn/",
          wap: "https://h5.youzan.com/v2",
          imgqn: "https://img01.yzcdn.cn",
          uic: "https://uic.youzan.com",
          trade: "https://trade.koudaitong.com",
          trade_youzan: "https://trade.youzan.com",
          im: "https://b-im.youzan.com",
          www: "https://www.youzan.com/v2",
          store: "https://store.youzan.com",
          shop: "http://detail.youzan.com",
          shop_wap: "https://shop255245.youzan.com/v2",
          h5: "https://h5.youzan.com",
          passport: "https://passport.youzan.com",
          renzheng: "https://renzheng.youzan.com/online",
          finance: "https://finance.youzan.com",
          guang: "https://h5.guang.com",
        },
        o = /(h5|wap)(\.youzan\.com)/,
        i = /(shop[^.]+)(\.youzan\.com)/,
        s = [40461684];
      function c(e, t, n, c) {
        void 0 === c && (c = {});
        var u = r.f.full(e, t, a) || "",
          d = c,
          l = d.notReplaceDomain,
          p = void 0 !== l && l,
          h = d.ignoreReplaceCheck,
          f = void 0 !== h && h,
          g = d.staticPageReg,
          v = void 0 === g ? [] : g,
          m = d.staticPageUrlMiddle,
          y = void 0 === m ? "" : m;
        return (
          f ||
            ("undefined" != typeof window &&
              r.a.ua.isMiniProgramWebview() &&
              (p = !0),
            s.indexOf(+n) > -1 && (p = !0)),
          +n >= 0 &&
            "string" == typeof u &&
            !p &&
            (u = u.replace(o, function (e, t, r) {
              return "shop" + (Number(n) + 192168) + r;
            })),
          y &&
            i.test(u) &&
            v.some(function (e) {
              return ((t = e),
              "[object RegExp]" === Object.prototype.toString.call(t)
                ? t
                : new RegExp(t)).test(u);
              var t;
            }) &&
            (u = u.replace(i, function (e, t, n) {
              return "" + t + y + n;
            })),
          u
        );
      }
    },
    bAmA: function (e, t, n) {
      var r = n("i/JN");
      e.exports = function (e) {
        return e && e.length ? r(e) : [];
      };
    },
    bBDD: function (e, t, n) {
      n.d(t, "h", function () {
        return h;
      }),
        n.d(t, "g", function () {
          return f;
        }),
        n.d(t, "f", function () {
          return g;
        }),
        n.d(t, "e", function () {
          return v;
        }),
        n.d(t, "i", function () {
          return m;
        }),
        n.d(t, "a", function () {
          return y;
        }),
        n.d(t, "b", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return _;
        }),
        n.d(t, "j", function () {
          return O;
        }),
        n.d(t, "d", function () {
          return I;
        });
      var r = n("Fcif"),
        a = n("eijD"),
        o = n("taYb"),
        i = n("YehF"),
        s = n("qHGj"),
        c = n("2xJD"),
        u = n("lRMv"),
        d = n("POYE"),
        l = n("wYCQ");
      function p(e) {
        return Object(i.c)(e) && !Object(i.d)(e);
      }
      function h(e) {
        return Object(i.c)(e) || Object(s.d)(e);
      }
      function f(e) {
        return !Object(s.d)(e);
      }
      function g(e) {
        return Object(c.a)(e);
      }
      function v(e) {
        return Object(s.b)(e);
      }
      function m(e) {
        return 1 === e.shop_role;
      }
      function y() {
        var e = getCurrentPages();
        if (0 === e.length) {
          var { path: t, query: n } = wx.getLaunchOptionsSync();
          return { path: t, query: n };
        }
        var { route: r, options: a } = e[e.length - 1];
        return "pages/common/blank-page/index" === r
          ? (getApp().globalData || {}).enterShopInfo
          : { path: r, query: a };
      }
      function b() {
        var { path: e = "", query: t = "" } = y() || {},
          n = o.a.toCamelCase(t);
        return {
          route: e.replace(/^pages(-|\/)/, "packages/"),
          camelQuery: n,
          path: e,
          query: t,
        };
      }
      function _() {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = Object(a.a)(function* () {
          return (yield Object(u.k)())[u.b.ignoreConfig] || {};
        })).apply(this, arguments);
      }
      function O(e, t, n) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = Object(a.a)(function* (e, t, n) {
          void 0 === e && (e = {}), void 0 === n && (n = !1);
          var { route: r, camelQuery: a, path: o, query: i } = b(),
            s = yield _(),
            { globalEnterStoreIgnore: c = [] } = s,
            u = c.includes(t || r),
            d = a.umpAlias && a.umpType;
          return {
            needEnterShop:
              (n || !Object(l.g)("proxyWxJumpPadding")) &&
              !p(e) &&
              f(e) &&
              !u &&
              !d,
            path: o,
            query: i,
            route: r,
          };
        })).apply(this, arguments);
      }
      function P() {
        return (P = Object(a.a)(function* (e) {
          try {
            var [t, n] = yield Promise.all([_(), Object(u.k)()]),
              {
                webviewList: a = [],
                designEnterStoreIgnore: o = [],
                onRouteIgnoreCheck: i = [],
              } = t;
            if (n[u.b.loadIdCheck]) {
              var s = { routeIgnore: i.includes(e), loadIdCheck: !0 };
              return a.includes(e)
                ? Object(r.a)({}, s, { type: "webview" })
                : o.includes(e)
                ? Object(r.a)({}, s, { type: "design" })
                : s;
            }
          } catch (e) {}
          return { loadIdCheck: !1 };
        })).apply(this, arguments);
      }
      function I(e) {
        return (function (e) {
          return P.apply(this, arguments);
        })(e).then(
          (t) =>
            !!t.type &&
            ((d.a.blockEnterShopType = t.type),
            Object(u.f)({
              text: "[wx] 阻塞" + t.type + "页面触发全局进店, url:" + e,
            }),
            "webview" === t.type && u.t.set("_is_init_enter_shop_", !0),
            !0)
        );
      }
    },
    bE7W: function (e, t) {
      var n = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return n.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
    },
    bIWf: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("OhE7"),
        a = n.n(r);
      class o {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      o.components = { SubscribeGuide: a() };
    },
    bSoS: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("AYC7"),
        a = n.n(r);
      class o {}
      o.widgets = { Main: a.a };
    },
    bdYe: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        a = (r = n("ZxyO")) && r.__esModule ? r : { default: r };
      var o = function (e, t) {
        return (
          (e = new a.default(e)),
          (t = new a.default(t)),
          parseFloat(e.div(t).toFixed())
        );
      };
      (t.default = o), (e.exports = t.default);
    },
    "beL+": function (e, t) {
      e.exports = {
        d: "salesmanShareData;0;shareInfo;6;goodsPriceInfo;6;currentActivity;4;goodsBaseInfo;4;goodsSkuData;4;shopBaseInfo;4;themeVars;4;customOptionListConfig;4;offlineId;4;isGuideNeedPkgShareUrl;4",
        e: "share:query;share:optionMenu;salesman:popup:close;salesman:popup:show",
        el: "floating:nav:update:position;salesman:get:feature:alias;salesman:share:popup:query;salesman:share:popup:optionMenu;salesman:share:popup:close;salesman:share:popup:show;salesman:check:isHalfScreen",
        w: "Widget",
        wc: "SalesmanSharePopup",
        wd: "Widget",
        lc: "checkIsHalfScreen;getUserInfo",
        p: "setShareInfo",
        pi: "createOrUpdateIndependentIcon;beforeGenerateSalesmanGoodsPosterEvent;setNativeYunExtension;getFeatureAlias;getCurrentPageType;getSharePath;setFeatureAlias;setSalesmanSharePopupShareInfo;initSalesmanShareData;initSalesmanSharePageInfo;setUserInfo",
        li: "beforePageMount",
      };
    },
    bmpj: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var r = n("bb6g"),
        a = n("9ZMt"),
        o = n("qYBx");
      function i(e) {
        var t,
          n,
          i,
          s =
            (null == e ? void 0 : e.from_params) ||
            (function () {
              var e,
                t = "",
                n = a.default.getApp() || {};
              if (
                !(t =
                  (a.default.getAppOptions() || {}).query.from_params || "") &&
                (null === (e = n.logger) || void 0 === e
                  ? void 0
                  : e.getLogParams)
              ) {
                var r = n.logger.getLogParams();
                t = (r && o.d.get(r, "context.from_params")) || "";
              }
              return (
                t || (t = (n.globalData && n.globalData.from_params) || ""), t
              );
            })();
        return Object(r.__assign)(
          Object(r.__assign)(
            Object(r.__assign)(
              {},
              (i =
                (null === (n = (t = a.default.$native).getStorageSync) ||
                void 0 === n
                  ? void 0
                  : n.call(t, "_customer_latitude_cache")) || {}).lat && i.lng
                ? { lat: String(i.lat), lng: String(i.lng) }
                : {}
            ),
            e
          ),
          { from_params: s }
        );
      }
    },
    bs6A: function (e, t, n) {
      t.a = {
        mounted() {
          this._initPullDownRefresh();
        },
        methods: {
          _getCurrentPage() {
            if ("function" == typeof getCurrentPages) {
              var e = getCurrentPages();
              return e && e.length ? e[e.length - 1] || {} : null;
            }
          },
          _initPullDownRefresh() {
            var e = this._getCurrentPage();
            if (e && e.onPullDownRefresh) {
              if ("function" != typeof this.onPullDownRefresh) return;
              var t = e.onPullDownRefresh;
              e.onPullDownRefresh = (n) => {
                t.call(e, n), this.onPullDownRefresh();
              };
            }
          },
        },
      };
    },
    "bsB/": function (e, t, n) {
      n.d(t, "b", function () {
        return d;
      }),
        n.d(t, "a", function () {
          return l;
        }),
        n.d(t, "e", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return f;
        });
      var r = n("Fcif"),
        a = n("hHpg"),
        o = n("KDJo"),
        i = n("eCH0"),
        s = getApp(),
        c = "/wscump/common/",
        u = function (e) {
          return s.request({
            path: c + "get-template.json",
            query: { scene: e },
          });
        };
      function d(e) {
        var {
            templateIdList: t = [],
            scene: n = "",
            needAlwaysToast: r = !1,
            successCallBack: o = null,
            rejectCallBack: u = null,
            failCallBack: d = null,
            showCallBack: l = null,
            closeCallBack: p = null,
            logParam: h = {},
          } = e,
          f = Object.keys(h).length > 0;
        t.length > 0
          ? Object(i.d)({
              templates: t,
              onSuccess: (e) => {
                for (var r in e)
                  if ("errMsg" !== r && "reject" === e[r]) {
                    u && u();
                    break;
                  }
                var { acceptTemplateIdList: i = [] } = (function (e) {
                  void 0 === e && (e = {});
                  var t = [];
                  try {
                    for (var n in e)
                      "errMsg" !== n && "accept" === e[n] && t.push(n);
                  } catch (e) {}
                  return { acceptTemplateIdList: t };
                })(e);
                if (i.length)
                  return (
                    f &&
                      s.logger.log({
                        et: "click",
                        ei: "allow_msg_subscribe",
                        en: "允许订阅小程序消息",
                        params: h,
                      }),
                    (function (e) {
                      var { scene: t = "", templateIdList: n = [] } = e;
                      return s.request({
                        path: c + "subscription-callback.json",
                        query: { scene: t, templateIdList: JSON.stringify(n) },
                      });
                    })({ scene: n, templateIdList: i })
                      .then(function (e) {
                        var { value: t = !1 } = void 0 === e ? {} : e;
                        t ? o && o(i) : Object(a.a)("授权失败");
                      })
                      .catch(() => {
                        Object(a.a)("授权失败");
                      })
                  );
                wx
                  .getSetting({ withSubscriptions: !0 })
                  .then((e) => {
                    var { mainSwitch: n, itemSettings: r } =
                        e.subscriptionsSetting,
                      a = t.every((e) => r && "reject" === r[e.templateId]);
                    !n || a ? d && d() : p && p();
                  })
                  .catch(() => {
                    p && p();
                  }),
                  f &&
                    s.logger.log({
                      et: "click",
                      ei: "refuse_msg_subscribe",
                      en: "拒绝订阅小程序消息",
                      params: h,
                    });
              },
              onFail: () => {
                d && d();
              },
              onShowTips: () => {
                r &&
                  Object(a.a)({
                    duration: 3e3,
                    position: "top",
                    message:
                      "勾选“总是保持以上选择”后，点击“允许”，即可长期获取签到提醒。",
                  }),
                  f &&
                    s.logger.log({
                      et: "click",
                      ei: "msg_subscribe_view",
                      en: "小程序订阅消息弹窗曝光",
                      params: h,
                    }),
                  l && l();
              },
              onCloseTips: () => {
                p && p();
              },
            })
          : p && p();
      }
      function l(e) {
        var { scene: t = "", pageId: n = null } = e;
        return Promise.all([
          s.request({
            path: "/wscdeco/im/common/is-shop-not-in-black-list.json",
          }),
          s.getShopInfo(),
        ]).then((e) => {
          var [{ value: r }, { shopInfo: a = {} }] = e;
          return Object(o.c)(a) && r && null !== n
            ? Promise.all([u(t), Object(i.c)(n)]).then((e) => {
                var [{ templateIdList: t = [] }, { templateList: n = [] }] = e;
                return [...t.map((e) => ({ templateId: e })), ...n];
              })
            : u(t).then((e) => {
                var { templateIdList: t } = e;
                return t.map((e) => ({ templateId: e }));
              });
        });
      }
      function p(e) {
        e.needAlwaysToast && wx.showLoading(),
          l({ scene: e.scene, pageId: e.pageId })
            .then((t) => {
              wx.hideLoading(), d(Object(r.a)({ templateIdList: t }, e));
            })
            .catch((e) => {
              e.msg && wx.showToast({ title: e.msg, icon: "none" });
            });
      }
      function h(e) {
        var { scene: t = "" } = e;
        return new Promise((e) => {
          s.request({ path: c + "is-auth-for-push.json", query: { scene: t } })
            .then((t) => {
              t && e(t.value);
            })
            .catch((e) => {
              e && wx.showToast({ title: e, icon: "none" });
            });
        });
      }
      function f() {
        return new Promise((e) => {
          s.request({ path: c + "is-subscription-msg-available.json" })
            .then((t) => {
              t && e(t.value);
            })
            .catch((e) => {
              e && wx.showToast({ title: e, icon: "none" });
            });
        });
      }
    },
    c4zd: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var r = n("US/N");
      function a(e) {
        return (
          void 0 === e && (e = "cashier"),
          function (t) {
            var n = t.origin,
              a = t.method,
              o = t.path,
              i = t.data,
              s = {
                origin: n || e,
                method: a,
                path: "/" + o,
                data: i,
                withCredentials: !0,
              };
            return Object(r.default)(s);
          }
        );
      }
      var o = a();
    },
    caDb: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("nSh/"),
        a = n.n(r);
      class o {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      o.widgets = { Widget: a() };
    },
    cm7J: function (e, t, n) {
      var r = n("dIZa");
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    czXk: function (e, t) {
      e.exports = {
        d: "",
        e: "",
        el: "",
        w: "",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    d6Vr: function (e, t, n) {
      var r = n("s3UK")["__core-js_shared__"];
      e.exports = r;
    },
    dAi7: function (e, t, n) {
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return v;
        });
      var r = n("Fcif"),
        a = n("jA1y"),
        o = n("z24M"),
        i = n("J8k1"),
        s = n("50K0"),
        c = "/wscuser/membercenter/";
      function u(e) {
        return a.c({
          path: c + "init-data.json",
          method: "get",
          data: Object(r.a)({}, e, {
            currentKdtId: e.onlineKdtId,
            needConsumptionAboveCoupon: 1,
          }),
          query: { kdt_id: e.kdtId },
        });
      }
      function d(e) {
        return a.c({
          path: c + "global.json",
          method: "get",
          data: Object(r.a)({}, e, { adaptorComponents: i.a.join(",") }),
          query: { kdt_id: e.kdtId },
        });
      }
      function l(e) {
        return Promise.all([d(e), u(e)]);
      }
      function p(e) {
        var t = Object(o.a)() || {};
        if (!e.isChainStoreSync() && t.kdtId && t.userVersion)
          return l({
            kdtId: t.kdtId,
            version: t.userVersion,
            onlineKdtId: t.kdtId,
          });
      }
      function h(e) {
        return a.c({
          path: c + "user-center-config.json",
          method: "get",
          data: { kdtId: e, platform: 2 },
        });
      }
      function f(e) {
        return a.c({
          path: c + "contact.json",
          method: "get",
          data: { kdt_id: e },
        });
      }
      function g(e, t, n) {
        (function (e) {
          return a.c({
            path: "/wscdeco/brand-feature-detail.json",
            method: "get",
            data: {
              stage: 16,
              hadEnterShop: !0,
              kdt_id: e,
              labelType: "usercenter,freeMemberCenter,payMemberCenter",
            },
          });
        })(t).then((t) => {
          var { usercenter: r } = t,
            a = !!r;
          e.globalData.ucTempType = a ? 1 : n;
        });
      }
      function v(e, t) {
        if (e.isChainStoreSync()) {
          var n = e.getHQKdtId() || t;
          return (
            s.a.getMiniappPrefetchData("retailTemplate").then((t) => {
              g(e, n, t);
            }),
            e.waitForEnterShop().then(() =>
              (function (e) {
                var { kdtId: t } = e;
                return Promise.all([
                  a.c({
                    path: "/retail/h5/user/memberInfo.json",
                    method: "get",
                  }),
                  h(t),
                  f(t),
                ]);
              })({ kdtId: e.getKdtId() })
            )
          );
        }
      }
    },
    dIZa: function (e, t) {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    "dMZ+": function (e, t) {
      e.exports = {
        d: "shareData;2;goods;4;kdtId;4;offlineId;4;shopMetaInfo;4;goodsPriceInfo;4;env;4;shopConfig;4;currentActivity;4;seActivity;4",
        e: "share:close;page-container:scrollLocked;share:setPageShareParams",
        el: "goodsSetupInit;share:show;share:query;share:item;share:pop;share:optionMenu;share:setPageShareParams;updateShareData",
        w: "Widget;ActionItem;SharePop",
        wc: "UserAuthorize;ActionItem;SharePop",
        wd: "Widget",
        lc: "getAuthType;hasLogin",
        pi: "setShareInfo;setShareActions",
        li: "onShareAppMessage;onShareTimeline",
      };
    },
    dO0t: function (e, t) {},
    dWkE: function (e, t, n) {
      var r = n("umDW");
      n.d(t, "b", function () {
        return r.b;
      }),
        (t.a = r.a);
    },
    dsC0: function (e, t, n) {
      n.d(t, "e", function () {
        return f;
      }),
        n.d(t, "h", function () {
          return v;
        }),
        n.d(t, "n", function () {
          return m;
        }),
        n.d(t, "g", function () {
          return _;
        }),
        n.d(t, "b", function () {
          return S;
        }),
        n.d(t, "o", function () {
          return w;
        }),
        n.d(t, "i", function () {
          return P;
        }),
        n.d(t, "k", function () {
          return k.a;
        }),
        n.d(t, "l", function () {
          return I;
        }),
        n.d(t, "d", function () {
          return E;
        }),
        n.d(t, "c", function () {
          return D;
        }),
        n.d(t, "p", function () {
          return L;
        }),
        n.d(t, "m", function () {
          return R;
        }),
        n.d(t, "q", function () {
          return B;
        }),
        n.d(t, "a", function () {
          return U;
        }),
        n.d(t, "j", function () {
          return F;
        }),
        n.d(t, "f", function () {
          return G;
        });
      var r = n("Fcif"),
        a = n("9DIb"),
        o = n.n(a),
        i = n("mQXz"),
        s = n.n(i),
        c = n("w2Y9"),
        u = n.n(c),
        d = n("KEq0"),
        l = n.n(d),
        p = n("NHEX"),
        h = n.n(p);
      function f(e, t) {
        var { type: n, goods: a } = e,
          {
            umpAlias: i = "",
            umpType: c = "",
            activityId: d = "",
            activityType: p = "",
          } = o()(t),
          f = s()(t, [
            "ump_alias",
            "ump_type",
            "access_token",
            "app_id",
            "prefetchKey",
          ]),
          g = (function (e) {
            return (
              void 0 === e && (e = {}), u.a.add("/pages/goods/detail/index", e)
            );
          })(
            Object(r.a)({}, f, {
              umpType: c,
              umpAlias: i,
              activityId: d,
              activityType: p,
              alias: a.alias,
            })
          ),
          v = h()(e, "fastbuyFeature.isFastBuy", !1),
          m = h()(e, "fastbuyFeature.showGoodsShopSign", !0);
        return Object(r.a)({}, a, {
          type: n,
          path: g,
          picture: l()(h()(a, "pictures.0.url", "")),
          pictures: a.pictures || [],
          video: a.video || {},
          explainVideo: a.explainVideo || {},
          sellPoint: a.sellPoint || "",
          isOutlink: 0 === a.buyWay,
          outlinkUrl: a.buyUrl,
          isHaitao: a.isHaitao || a.isHaiTao,
          isMedicine: a.isOtcCategory || a.isPrescriptionCategory,
          isFastBuy: v,
          verifyStatus: a.verifyStatus || 2,
          showGoodsShopSign: m,
        });
      }
      var g = n("Nvad");
      function v(e, t, n, r) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          void 0 === r && (r = {});
        var a = t.goods,
          {
            minPrice: o,
            maxPrice: i,
            stockNum: s,
            hideStock: c,
            oldMaxPrice: u,
            oldMinPrice: d,
            priceTags: l = [],
          } = a,
          { showPrice: p, showOldPrice: h } = Object(g.a)(a),
          { goods: f } = e,
          { isDeposit: v, isEnd: m } = n.presale || {},
          { soldNum: y } = r,
          b = "";
        return (
          v && (b = "定金"),
          {
            showPriceBlock: !0,
            showOriginPrice: !0,
            showBanner: v && !m,
            price: p,
            oldPrice: h,
            priceLabel: b,
            oldMinPrice: d,
            oldMaxPrice: u,
            minPrice: o,
            maxPrice: i,
            stockNum: s,
            hideStock: c,
            soldNum: null === y ? f.soldNum : y,
            tags: [...l],
          }
        );
      }
      function m(e, t) {
        return Object(r.a)({}, e, {
          name: e.shopName,
          city: e.city || "",
          province: e.province || "",
          address: e.address || "",
          rootKdtId: t.rootKdtId,
          phone: e.phone || "",
        });
      }
      var y = n("zMoS"),
        b = n("9ZMt");
      function _(e, t) {
        var { goods: n, shopConfig: r } = e,
          { goodsExtra: a = {}, pageFeature: o = {}, soldNum: i = null } = t,
          { hasPurchaseRight: s = !0, isGoodsCollected: c = !1 } = a,
          u = Object(y.a)(n, "refundModel", {}),
          d = b.default.getEnv(),
          l = "weapp" === d || "web" === d,
          { localDelivery: p = 1, goodsSupplyReminder: h } = r,
          f = Object(y.a)(n, "ecardExtra", null),
          g = Object(y.a)(n, "periodBuyExtra", null),
          { itemType: v, isDisplay: m } = n,
          _ = !0;
        (0 == +p || f || g || n.isHaitao || +n.isInstallment || n.isCatering) &&
          (_ = !1);
        var S = l && 1 == +h && "FENXIAO" !== v && 1 === m,
          O = {
            isGoodsCollected: c,
            isSupportFCode: Object(y.a)(o, "extra.supportFCode", !1),
            limitBuy: !s,
            supportItemProps: _,
            refund: {
              isSupport: Object(y.a)(u, "isSupportRefund", 1),
              type: u.refundType,
              interval: u.periodMillSeconds,
            },
            showStockLackReminder: S,
          };
        return i && (O.soldNum = i), O;
      }
      function S(e, t) {
        var { delivery: n } = e,
          { customerPostageFree: a } = t,
          o = Object(y.a)(n, "postage.desc", "");
        return (
          a && a.isCustomerPostage && (o = "免运费"),
          Object(r.a)({}, n, {
            postage: o,
            expressFee: Object(y.a)(n, "express.desc", ""),
            localDeliveryFee: Object(y.a)(n, "localDelivery.desc", ""),
            expressPayMode: Object(y.a)(n, "postage.expressPayMode"),
          })
        );
      }
      var O = (e) => JSON.parse(e || "{}");
      function w(e) {
        var t = "web" === b.default.getEnv(),
          n = Object(r.a)({}, e, {
            isShowBuyBtn: e.showBuyBtn,
            isYouzanSecured: e.isYouzanSecured,
            isSecuredTransactions: e.isSecuredTransactions,
            showRecommendGoods: t ? e.goodsRecommend : e.goodsRecommendForWeapp,
            showBuyRecord: e.buyRecord,
            showCustomerReviews: e.customerReviews,
            evaluationMemberLabel: e.evaluationMemberLabel || 0,
            showBuyerShows: Boolean(e.buyerShow),
            showPersonalRecommendGoods: e.personalRecommendWindowGoods,
            isSimplifiedWsc: e.isSimplifiedWsc,
            supportFreightInsurance: e.freightInsurance,
            hideShoppingCart: e.hideShoppingCart,
            hasPhysicalStore: e.teamPhysical,
            isWeixinPayOrigin: 1 == +e.weixinPayOrigin,
            principalCertType: e.principalCertType || 0,
            brandCertType: e.brandCertType || 0,
            goodsDetailBuyRecord: e.goodsDetailBuyRecord || "",
            goodsDetailBuyRecordMin: +e.goodsDetailBuyRecordMin,
            goodsDetailSales: e.goodsDetailSales || null,
            buyBtnConfig: e.buyBtnConfig || null,
            webImInGoodsConfig: e.webImInGoodsConfig || null,
            shopOperateDurationYears: e.shopOperateDurationYears || 0,
            shopOperateDurationTagSwitch: e.shopOperateDurationTagSwitch || 0,
            weixinTransactionSecured: e.weixinTransactionSecured,
            goodsSalesReminder: e.goodsSalesReminder,
            goodsSupplyReminder: e.goodsSupplyReminder,
            goodsVideoDanmakuSwitch: 1 == +e.goodsVideoDanmakuSwitch,
          }),
          a = O(e.goodsTradeMarquee);
        (a.type = (a.type || "")
          .split(",")
          .filter((e) => !["", void 0].includes(e))
          .map((e) => +e)),
          (n.goodsTradeMarquee = a);
        var { open: o } = O(e.goodsRecommendForYou);
        n.openRecommendForYou = o;
        var { default: i, label: s } = O(e.customCartName);
        return (
          (n.showDefaultCartText = !+i),
          (n.cartText = (s || "").substr(0, 4)),
          (n.goodsFavorableRate = O(e.goodsFavorableRate)),
          (n.pointsConfig = O(e.scrmCreditDiyName)),
          n
        );
      }
      function P(e) {
        var { goods: t, shopConfig: n } = e,
          r = Object(y.a)(t, "youzanGuaranteeModel", {});
        return {
          on: r.youzanGuarantee || 0,
          style: n.guaranteeShowStyleType,
          desc: r.guaranteedComponents || [],
        };
      }
      function I(e) {
        var { pageFeature: t = {} } = e;
        return Object(r.a)({}, t, {
          showBuyBtn: t.showBuyButton,
          showCartBtn: t.showCartButton,
          showPointsBtn: t.showPointsButton,
          showForbidBuyBtn: t.showForbidBuyButton,
          showGiftBtn: t.showGiftButton,
          showMiniShopBtn: t.showMiniShopButton,
          showMiniCartBtn: t.showMiniCartButton,
          showMiniPointsBtn: t.showMiniPointsButton,
          showShareBtn: t.showShareButton,
          showImBtn: t.showImButton,
        });
      }
      var k = n("X3j9"),
        C = n("q29p"),
        T = n.n(C);
      function x(e, t) {
        var { haoTaoItemExtra: n = {}, isHaitao: a } = e,
          o = h()(t, "haitaoTariffAmount", "");
        if (a && n) {
          var i = o || n.tariffAmount;
          return Object(r.a)({}, n, { tariffAmount: i });
        }
        return null;
      }
      function j(e, t) {
        var n = e.ecardExtra || {};
        if (!e.ecardExtra) return null;
        var { ecardRules: a, ecardInstructions: o } = (function (e, t) {
            if (!e) return {};
            var n = e || {},
              r = n.validityType,
              a = n.effectiveType,
              o = n.effectiveDelayHours,
              i = n.itemValidityDay,
              s = n.itemValidityStart,
              c = n.itemValidityEnd,
              u = n.holidaysAvailable,
              d = n.instructions,
              l = [],
              p = [
                "永久有效",
                i + "天内使用有效",
                T()(s, "YYYY年MM月DD日") +
                  " - " +
                  T()(c, "YYYY年MM月DD日") +
                  "内使用有效",
                "在所选使用日期内当天有效",
              ];
            l.push(p[r] || "");
            var h = ["立即生效", o + "小时后生效", "次日生效"];
            l.push(h[a] ? "购买后" + h[a] : ""),
              l.push("节假日" + (0 === u ? "不" : "") + "可用");
            var f = t.isSupport,
              g = t.type,
              v = t.interval;
            if (f) {
              if (0 === g) l.push("未使用卡券随时可申请退款");
              else if (1 === g) {
                var m = Math.floor(v / 24 / 60 / 60 / 1e3),
                  y = v % 864e5,
                  b = Math.floor(y / 60 / 60 / 1e3),
                  _ = m ? m + "天" : "",
                  S = b ? b + "小时" : "";
                l.push("未使用卡券在过期前" + (_ + S) + "随时可以申请退款");
              }
            } else l.push("不支持申请退款");
            d && l.push(d || "");
            var O = l.slice(),
              w = O.pop(),
              P = O.join("，");
            return {
              ecardRules: l,
              ecardInstructions: w ? [P, "其他说明：" + w] : [P],
            };
          })(n, t.refund),
          { itemPreOrderTime: i } = n,
          s = (i || "").split("-"),
          c = s[0] || "",
          u = s[1] || "";
        return Object(r.a)({}, n, {
          isPriceCalendar: 3 === n.validityType,
          ecardRules: a,
          ecardInstructions: o,
          itemPreOrderTxt: c
            ? (0 == +c ? "当天" : "前" + c + "天") + " " + u
            : "",
          itemPreOrderModel: c ? { day: c, time: u } : null,
        });
      }
      function A(e) {
        var t = h()(e, "periodBuyExtra", null);
        return t
          ? {
              description: t.description,
              period: t.period,
              deliveryTimeList: t.deliverTime,
              periodSku: t.skuExtras,
              deliverTimeId: "1",
            }
          : null;
      }
      function E(e, t, n, r) {
        var { goods: a } = e,
          { goodsExtra: o, marketing: i, ump: s = {} } = t,
          { outerActivities: c = [] } = i || {};
        return {
          presale: s.presale,
          waitToSold: s.waitToSold,
          haitao: x(a, o),
          virtualCoupon: a.couponGoodsExtraModel,
          virtualTicket: j(a, n),
          periodbuy: A(a),
          enjoyBuy: c.length,
        };
      }
      function D(e) {
        var {
            displayData: t = {},
            platform: n = "",
            pageParams: a,
            platformSpecialUI: o,
          } = e,
          {
            dangerousPlatform: i = [],
            hideRankingPlatform: s = [],
            hideShareIcon: c = [],
          } = o || {};
        return Object(r.a)({}, t, {
          platform: n,
          showSku: "true" === a.showsku,
          isDangerous: i.indexOf(n) > -1,
          hideShareIcon: c.indexOf(n) > -1,
          hideRanking: s.indexOf(n) > -1,
          isMobile: !0,
        });
      }
      var M = n("NW04"),
        N = Object(M.c)({ "price-font-family": "Avenir" });
      function L(e) {
        var { theme: t } = e;
        return t
          ? {
              themeColors: t.colors,
              themeVars: Object(M.c)(t.colors),
              pageVars: N,
            }
          : { themeColors: null, themeVars: M.a, pageVars: N };
      }
      function R(e) {
        var { goods: t, shopConfig: n } = e;
        return {
          cashOnDelivery: !t.isVirtual && +n.codPay,
          isInstallment: t.isInstallment,
          isFreeInterest: t.freeInterest,
          isPriorUse: n.priorUse,
        };
      }
      function B(e) {
        if ((void 0 === e && (e = []), !Array.isArray(e) || !e.length))
          return {};
        var t = {};
        return (
          e.forEach((e) => {
            t[e.type] = e;
          }),
          t
        );
      }
      function U(e) {
        void 0 === e && (e = {});
        var { appConfig: t } = e,
          n = { appConfig: null, appEngineConfig: null };
        return t && (n.appConfig = t), n;
      }
      function F(e) {
        var { logistics: t } = e || {};
        return (t || {}).logisticsTimelinessInfo || {};
      }
      function G(e) {
        var { goods: t } = e,
          { comboDetailModel: n, comboMark: a = {} } = t;
        return a.isCombo ? Object(r.a)({}, n, a) : { isCombo: !1 };
      }
    },
    dst7: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          ([].slice.call(arguments, 1) || []).forEach(function (t) {
            if (t) for (var n in t) e[n] = t[n];
          }),
          e
        );
      };
      (t.default = r), (e.exports = t.default);
    },
    e2Yn: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = function (e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n = 0,
            r = 0;
          r < e.length;
          r++
        ) {
          var a = e.charCodeAt(r);
          (a >= 1 && a <= 126) || (a >= 65376 && a <= 65439) ? n++ : (n += t);
        }
        return n;
      };
      (t.default = r), (e.exports = t.default);
    },
    eCH0: function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "e", function () {
          return y;
        });
      var r = { SIGN: "RLQD_NEW", COUPON: "coupon_notice_scene" },
        a = n("jA1y");
      function o(e) {
        return Object(a.c)({
          path: "/v3/message/wechat-push/query-wechat-subscribe-result.json",
          method: "POST",
          withCredentials: !0,
          data: { pageId: e },
        });
      }
      function i(e) {
        return Object(a.c)({
          path: "/v3/message/wechat-push/template.json",
          method: "GET",
          withCredentials: !0,
          data: { scene: e },
        });
      }
      var s = n("Fcif"),
        c = n("+I+c"),
        u = n("QxN7"),
        d = ["level", "detail"],
        l = getApp();
      function p(e, t, n) {
        var r = n || {},
          { level: a, detail: o } = r,
          i = Object(c.a)(r, d),
          p = Object(u.getErrorMsg)(t);
        l.logger.skynetLog({
          message: "[消息订阅] " + e + (p ? "：" + p : ""),
          level: a,
          extra: { bizName: "消息订阅", logName: e, logMsg: p },
          detail: Object(s.a)({}, t, i, o),
        });
      }
      function h(e) {
        var t, n, r, o;
        void 0 === e && (e = {});
        var i =
            null == (t = e.templates) ||
            null ==
              (n = t.map((e) => ("string" == typeof e ? { templateId: e } : e)))
              ? void 0
              : n.filter((e) => (null == e ? void 0 : e.templateId)),
          s = i.map((e) => e.templateId).slice(0, 3);
        if (!wx.canIUse("requestSubscribeMessage")) {
          return (
            p("当前小程序基础库不支持订阅"),
            null == e.onFail ||
              e.onFail({
                errCode: "UNSUPPORTED",
                errMsg: "当前小程序基础库不支持订阅",
              }),
            void (null == e.onComplete || e.onComplete())
          );
        }
        if (!Array.isArray(s) || !s.length) {
          return (
            p("templates列表为空"),
            null == e.onFail ||
              e.onFail({ errCode: "NO_TEMPLATE", errMsg: "templates列表为空" }),
            void (null == e.onComplete || e.onComplete())
          );
        }
        var c = getApp(),
          u = null;
        null != (r = c.globalData.subscribeConf) &&
          r.mainSwitch &&
          (u = setTimeout(() => {
            null == e.onShowTips || e.onShowTips();
          }, 800)),
          p("开始订阅", { templateIds: s }),
          null == (o = c.logger) ||
            o.log({
              et: "view",
              ei: "show_subscribe",
              en: "唤起授权",
              params: { component: "subscribe_push" },
            });
        var {
          subscribePos: d,
          subscribeSource: l,
          deliveryWay: h,
        } = e.onSelfLog || {};
        wx.requestSubscribeMessage({
          tmplIds: s,
          success: (t) => {
            p("订阅成功", { res: t, templateIds: s });
            var n,
              r,
              o = s.some((e) => "accept" === t[e]);
            if (o) {
              e.noToast ||
                wx.showToast({ title: "订阅通知成功", icon: "success" });
              var u,
                f = i.filter(
                  (e) =>
                    "accept" === t[null == e ? void 0 : e.templateId] &&
                    (null == e ? void 0 : e.subscribeTemplateId)
                );
              if (f.length)
                (n = f),
                  Object(a.c)({
                    path: "/v3/message/wechat-push/subscribe-callback.json",
                    method: "POST",
                    withCredentials: !0,
                    data: { templateList: n },
                  }),
                  null == (u = c.logger) ||
                    u.log({
                      et: "click",
                      ei: "click_subscribe",
                      en: "点击订阅",
                      params: { component: "subscribe_push" },
                    });
            }
            d &&
              (null == (r = c.logger) ||
                r.log({
                  et: "click",
                  ei: (o ? "accept" : "reject") + "_msg_subscribe",
                  en: (o ? "接受" : "拒绝") + "授权订阅小程序消息",
                  params: {
                    subscribe_pos: d,
                    subscribe_source: l,
                    delivery_way: h,
                  },
                }));
            null == e.onSuccess || e.onSuccess(t);
          },
          fail: (t) => {
            p("订阅失败", t, { templateIds: s });
            var n,
              r = "订阅微信通知失败 " + (t.errCode || "");
            t.errMsg && t.errMsg.indexOf("switched off") > -1
              ? (r = "请在小程序设置中允许订阅消息")
              : 20001 === (null == t ? void 0 : t.errCode) &&
                (p("删除失效模板", t, { templateIds: s }),
                (n = s),
                Object(a.c)({
                  path: "/v3/message/wechat-push/callback-remove-unused-template.json",
                  method: "POST",
                  withCredentials: !0,
                  data: { wechatTemplateIdList: n },
                })),
              e.noToast || wx.showToast({ title: r, icon: "none" }),
              null == e.onFail || e.onFail(t);
          },
          complete: () => {
            u && clearTimeout(u),
              null == e.onCloseTips || e.onCloseTips(),
              null == e.onComplete || e.onComplete();
          },
        });
      }
      var f = n("KDJo"),
        g = n("2xJD"),
        v = n("YehF"),
        m = getApp();
      function y(e) {
        var t,
          {
            pageId: n,
            scene: r,
            subscribePage: o,
            subscribeType: i,
            authorizationType: s,
            windowType: c,
            options: u,
            supportRetail: d = !0,
            noToast: l = !0,
          } = e,
          { next: y } = u || {},
          b = m.globalData.hasSubscribedByApp || 0;
        if (b && b >= 3) return p("次数超过阈值", { times: b }), void y();
        Object(a.c)({
          path: "/wscdeco/shop/get-shop-meta-info-by-kdtId.json",
          data: t,
        })
          .then((e) => {
            var t = Object(f.e)(e) && !Object(g.c)(e),
              _ = d && (Object(v.f)(e) || Object(v.g)(e) || Object(v.b)(e));
            return t || _
              ? (n || (t && (n = 3), _ && (n = 5)),
                n && r
                  ? Object(a.c)({
                      path: "/wscdeco/im/common/is-subscription-in-white-list.json",
                      data: {},
                    }).then((e) => {
                      if (!!!e.value) return p("非白名单"), void y();
                      var t = {
                        pageId: n,
                        scene: r,
                        windowType: c,
                        authorizationType: s,
                      };
                      return (function (e) {
                        return (
                          void 0 === e && (e = {}),
                          Object(a.c)({
                            path: "/wscdeco/im/common/get-template.json",
                            data: e,
                          })
                        );
                      })(t)
                        .catch(
                          (e) => (
                            p("查询模板失败", e, {
                              level: "warn",
                              detail: { params: t },
                            }),
                            []
                          )
                        )
                        .then((e) =>
                          Array.isArray(e) && e.length
                            ? new Promise((t, r) => {
                                var {
                                  onSuccess: d,
                                  onFail: p,
                                  onComplete: f,
                                  onShowTips: g,
                                  onCloseTips: v,
                                } = u;
                                h({
                                  pageId: n,
                                  templates: e,
                                  noToast: l,
                                  onSuccess: (e) => {
                                    var n, r;
                                    (d && d(),
                                    !0 ===
                                      Object.values(e).some(
                                        (e) => "accept" === e
                                      ))
                                      ? (((e) => {
                                          Object(a.c)({
                                            path: "/wscdeco/im/common/add-authorize-log.json",
                                            data: e,
                                            method: "post",
                                          });
                                        })({ authorizationType: s }),
                                        null == (n = m.logger) ||
                                          n.log({
                                            et: "click",
                                            ei: "allow_msg_subscribe",
                                            en: "允许订阅小程序消息",
                                            params: {
                                              subscribe_page: o,
                                              subscribe_type: i,
                                            },
                                          }),
                                        t())
                                      : null == (r = m.logger) ||
                                        r.log({
                                          et: "click",
                                          ei: "refuse_msg_subscribe",
                                          en: "拒绝订阅小程序消息",
                                          params: {
                                            subscribe_page: o,
                                            subscribe_type: i,
                                          },
                                        });
                                  },
                                  onFail: (e) => {
                                    p && p(), r(e);
                                  },
                                  onComplete: () => {
                                    f && f();
                                  },
                                  onShowTips: () => {
                                    var e, t;
                                    g && g(),
                                      (t = b + 1),
                                      (m.globalData.hasSubscribedByApp = t),
                                      ((e) => {
                                        Object(a.c)({
                                          path: "/wscdeco/im/common/add-user-behavior.json",
                                          data: e,
                                          method: "post",
                                        });
                                      })({ windowType: c }),
                                      null == (e = m.logger) ||
                                        e.log({
                                          et: "click",
                                          ei: "msg_subscribe_view",
                                          en: "小程序订阅消息弹窗曝光",
                                          params: {
                                            subscribe_page: o,
                                            subscribe_type: i,
                                          },
                                        });
                                  },
                                  onCloseTips: () => {
                                    v && v();
                                  },
                                });
                              })
                            : (p("模板为空"), void y())
                        );
                    })
                  : (p("参数不正确"), void y()))
              : (p("店铺类型不支持"), void y());
          })
          .catch((e) => {
            throw (p("未知异常", e), e);
          });
      }
    },
    eWMZ: function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return o;
        });
      var r = "+86",
        a = 1e4,
        o =
          "https://www.youzan.com/intro/rule/detail?alias=14nykbyyf&pageType=rules";
    },
    eiGO: function (e, t) {
      e.exports = {
        d: "biz;0;quickMode;0;payRechargeInfo;2;giftPackSelected;2;giftPackSelectedGiftPacks;2;giftSelectedGiftPackIndex;2;themeColors;4;kdtId;4;showRechargeFreeOrder;4;rechargeFreeOrderRule;4;recommendDetaid;4;showPrepay;4;valueCard;4;balanceMkExclusion;4;useStoredMemberCustomerDiscount;4;useStoreBalancePayInFull;4;pay;4;valueCardDecrease;4;miniprogram;4;display;4",
        e: "recharge-free-order:on-close;recharge-free-order:on-confirm;trade-recharge:on-close;trade-recharge:on-select;onGiftPackClose;onGiftPackRecharge;onSelectGiftPack;toggleGiftPack",
        el: "cashier:pay:prepaid:success;cashier:pay:prepaid:fail;cashier:pay:prepaid:close;onGiftPackClose;onGiftPackRecharge;onSelectGiftPack;toggleGiftPack",
        w: "PrepaidRecommendMain;PrepaidRecommend;RechargeList;RechargeListFree;RechargeListRecommend;RechargeGiftPack",
        wc: "RechargeListFree;RechargeListRecommend",
        wd: "Main",
        l: "",
        lc: "getUserInfo",
        p: "prepaidCommonPay;freeOrderJumpToResult;freeOrderGetStatus;doRecharge;showPrePayCardRecharge",
        pi: "prepaidCommonPay;prepaidStartPay;fetchShow;confirmOrder;setOrderForbidCoupon;setOrderForbidPreference;getCreateOrderParam;mutateState;prepaidCommonPay",
        c: "",
        cc: "",
      };
    },
    exMg: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        a = (r = n("ZxyO")) && r.__esModule ? r : { default: r };
      var o = function (e, t) {
        return (
          (e = new a.default(e)),
          (t = new a.default(t)),
          parseFloat(e.times(t).toFixed())
        );
      };
      (t.default = o), (e.exports = t.default);
    },
    f6Yk: function (e, t, n) {
      n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return p;
        });
      var r = n("Fcif"),
        a = n("9ZMt"),
        o = (n("cWxX"), n("s0cO")),
        i = n.n(o),
        s = n("GFyo"),
        c = n("Sipi"),
        u = "cookie",
        d = "query",
        l = {
          atr_uuid: { transType: u },
          yzk_ex: { transType: u },
          pageType: { transType: d },
          tui_platform: { transType: d },
          tui_click: { transType: d },
          wecom_uuid: { transType: d },
          fromSource: { transType: d },
        };
      function p(e) {
        return (
          void 0 === e && (e = {}),
          Object(s.c)("cpsGrowthCookie").then((t) => {
            var { data: n } = t;
            return Object(s.g)("cpsGrowthCookie", Object(r.a)({}, n || {}, e));
          })
        );
      }
      function h(e) {
        var t = "";
        switch (l[e] ? l[e].transType : null) {
          case u:
            t = (function (e) {
              var t = "";
              try {
                var { [e]: n } = Object(c.b)("cpsGrowthCookie") || {};
                t = n || "";
              } catch (e) {}
              return t;
            })(e);
            break;
          case d:
            t = (function (e) {
              var { query: t } = a.default.getAppOptions() || {};
              return t[e] || "";
            })(e);
        }
        return t;
      }
      function f(e) {
        var t = {},
          n = e || l;
        return (
          Object.keys(n).forEach((e) => {
            t[i()(e)] = h(e);
          }),
          t
        );
      }
    },
    "f9/1": function (e, t, n) {
      n.r(t),
        n.d(t, "setSwitchShopRangeCache", function () {
          return _.s;
        }),
        n.d(t, "forceUseHqTabbar", function () {
          return _.e;
        }),
        n.d(t, "forceShowHome", function () {
          return _.d;
        }),
        n.d(t, "getEnterCacheConfig", function () {
          return _.g;
        }),
        n.d(t, "getWxPage", function () {
          return _.i;
        }),
        n.d(t, "setEnterCacheConfig", function () {
          return _.q;
        }),
        n.d(t, "cacheProxyUpdateEmit", function () {
          return _.a;
        }),
        n.d(t, "isHqEnterShop", function () {
          return _.k;
        }),
        n.d(t, "isWxProxyDone", function () {
          return _.n;
        }),
        n.d(t, "isProxyUpdateKdtId", function () {
          return _.m;
        }),
        n.d(t, "notUpdateKdtIdInChain", function () {
          return _.o;
        }),
        n.d(t, "featureJump", function () {
          return w;
        }),
        n.d(t, "getCurrentPageOption", function () {
          return T;
        }),
        n.d(t, "updateChainStoreInfo", function () {
          return x;
        }),
        n.d(t, "isChainStoreSync", function () {
          return j;
        }),
        n.d(t, "setChainStoreInfo", function () {
          return A;
        }),
        n.d(t, "getHQKdtId", function () {
          return D;
        }),
        n.d(t, "isShopHq", function () {
          return M;
        }),
        n.d(t, "setIsReLaunch", function () {
          return N;
        }),
        n.d(t, "checkReLaunchShopSelect", function () {
          return L;
        }),
        n.d(t, "redirectToMemberShopWhenAuthorize", function () {
          return B;
        }),
        n.d(t, "createChainStoreEvent", function () {
          return U;
        }),
        n.d(t, "checkSpecialShopDZ", function () {
          return F;
        });
      var r = n("Fcif"),
        a = n("DXKY"),
        o = n("Tewj"),
        i = n("zMoS"),
        s = n("2wjL"),
        c = n("jA1y"),
        u = n("qHGj"),
        d = n("YehF"),
        l = n("2xJD"),
        p = n("UyoQ"),
        h = n("lRMv"),
        f = n("sbwY"),
        g = n("ZIOE"),
        v = n("rBuL"),
        m = n("/duV"),
        y = n("bBDD"),
        b = n("SVbq"),
        _ = n("wYCQ"),
        S =
          (n("+I+c"),
          n("eijD"),
          n("xih6"),
          n("POYE"),
          "/pages/home/feature/index"),
        O = function (e, t) {
          return (
            void 0 === t && (t = "navigateTo"),
            Object(b.o)(
              { redirectUrl: encodeURIComponent(e) },
              { redirectType: t }
            )
          );
        };
      function w(e) {
        void 0 === e && (e = {});
        var {
            enterConfig: t,
            bannerIdOpt: n,
            alias: a,
            callback: o,
            jumpType: i = "navigateTo",
          } = e,
          { mode: c, kdtIdList: u } = t;
        if (!t) return !1;
        if (
          (c && Object(b.C)({ sceneId: b.e.FEATURE, sceneSource: "CUSTOM" }),
          c === b.f.Enter)
        ) {
          var d = Object(r.a)({ alias: a }, n);
          return (
            (d.shopAutoEnter = 4), o && o(), wx[i]({ url: s.a.add(S, d) }), !0
          );
        }
        if (c === b.f.Assign && +u[0] != +Object(m.c)())
          return (
            o && o(),
            wx[i]({
              url: s.a.add(S, Object(r.a)({ alias: a, kdtId: u[0] }, n)),
            }),
            !0
          );
        if (c === b.f.Select) {
          var l = Object(_.s)({ enterConfig: t }),
            p = Object(r.a)({ alias: a }, n, { enterShopId: l });
          return o && o(), O(s.a.add(S, p), i), !0;
        }
      }
      var { state: P } = f.a,
        I = !1,
        k = "packages",
        C = () => {
          var e = "/" + k + "/home/dashboard/index",
            t = getCurrentPages();
          if (t.length > 0) {
            var { route: n, options: r = {} } = t[t.length - 1];
            e = s.a.add("/" + n, r);
          }
          return encodeURIComponent(e);
        };
      function T() {
        var e = getCurrentPages();
        if (0 === e.length) {
          var { path: t, query: n } = wx.getLaunchOptionsSync();
          return { path: t, query: n };
        }
        var { route: r, options: a } = e[e.length - 1];
        return "pages/common/blank-page/index" === r
          ? (getApp().globalData || {}).enterShopInfo
          : { path: r, query: a };
      }
      function x() {
        var { shopMetaInfo: e = {} } = P.shop;
        Object(y.g)(e) &&
          (Object(y.i)(e) ||
            getApp().trigger("app:chainstore:kdtid:update", {
              kdtId: e.kdt_id,
            }),
          getApp().trigger("app:chainstore:change:update", {
            kdtId: e.kdt_id,
          }));
      }
      function j() {
        var { shopMetaInfo: e = {} } = P.shop;
        return Object.keys(e).length ? Object(u.b)(e) : Object(h.r)();
      }
      function A(e) {
        var { shopMetaInfo: t, shopInfo: n } = e,
          a = {
            isRetailShop: Object(d.e)(t),
            isRootShop: Object(y.i)(t),
            isChainStore: Object(y.e)(t),
            isMultiOnlineShop: Object(y.g)(t),
            isEduChainStore: Object(y.f)(t),
            isOnline: t.online_shop_open,
            isEduShop: Object(l.c)(t),
            isUnitedHqStore: !1,
            isPureOffineShop: Object(y.h)(t),
          };
        return (
          a.isChainStore &&
            a.isOnline &&
            Object(_.q)("lastOnlineKdtId", t.kdt_id),
          {
            chainStoreInfo: Object(r.a)(
              {
                showBtn: !!t.show_retail_switch_btn,
                showUserLocation: t.show_user_location,
                onlineShopVisitModel: t.online_shop_visit_model,
                logo: n.logo,
                name: t.shop_name,
                rootKdtId: t.root_kdt_id,
              },
              a
            ),
            shopType: a,
          }
        );
      }
      function E(e) {
        var { shopMetaInfo: t, isFromBlankPageOrOnLaunch: n } = e,
          { route: a } = Object(y.b)();
        Promise.all([Object(y.j)(t), Object(y.d)(a)])
          .then((e) => {
            var [t, a] = e,
              { needEnterShop: o, path: i, query: c } = t;
            if (o) {
              if (a) return;
              var u = s.a.add("/" + i, c);
              Object(h.g)(
                n
                  ? Object(r.a)({}, c, { redirectUrl: u, logTag: "global" })
                  : { redirectUrl: u, logTag: "global" }
              ).then((e) => {
                e && getApp().dontUpdateKdtIdByServer();
              });
            } else
              Object(h.j)("updateChainStoreInfo").then((e) => {
                if (e) {
                  var { shopMetaInfo: t = {}, shopInfo: n } =
                    getApp().getShopInfoSync();
                  x();
                }
              });
          })
          .catch(() => {
            Object(h.f)({ err: "[wx] 全局进店处理失败" });
          });
      }
      function D() {
        var { shop: e } = P;
        return (
          Object(i.a)(e, "chainStoreInfo.rootKdtId") ||
          e.kdt_id ||
          Object(m.e)() ||
          null
        );
      }
      function M() {
        return !!Object(h.r)() && Object(m.c)() === D();
      }
      function N(e) {
        I = e;
      }
      function L() {
        I &&
          ((I = !0),
          wx.reLaunch({
            url:
              "/" +
              k +
              "/shop-select/chain-store/shopselect/index?dbKey=location&from=new&redirectUrl=" +
              C(),
          }));
      }
      var R = "";
      function B(e) {
        var t = +Object(v.b)();
        -1 !== [90957577, 54731005, 42865412].indexOf(t) &&
          e.on("app:token:success", (e) => {
            var { yzUserId: t } = e;
            if ((R || (R = t), R !== t)) {
              R = t;
              var n = +Object(g.getKdtId)();
              c.c({ path: "/wscshop/weapp/getMemberStore.json" }).then((e) => {
                var { kdtId: t, shopMetaInfo: r } = e;
                if (t && +t !== n && Object(p.a)(r)) {
                  var o = decodeURIComponent(C());
                  (o = s.a.add(o, { subKdtId: t })),
                    (o = s.a.remove(o, "shopAutoEnter")),
                    Object(g.updateKdtId)(t, !1, {
                      mark: "[chain-store.js]redirectToMemberShopWhenAuthorize",
                    }),
                    a.a.once(
                      "shop:info:fetch:success",
                      () => {
                        wx.reLaunch({ url: o });
                      },
                      this
                    );
                }
              });
            }
          });
      }
      function U() {
        a.a.off("app:chain:store:resolved", E),
          a.a.on("app:chain:store:resolved", E);
      }
      function F() {
        return [19171281].includes(+Object(m.c)());
      }
      o.default.on(b.d.a_enter_c, x),
        o.default.on(b.d.shop_c, g.fetchLaunchJsonCallback);
    },
    f9uZ: function (e, t, n) {
      n.d(t, "a", function () {
        return m;
      });
      var r = n("o2c2"),
        a = n.n(r),
        o = n("sBTC"),
        i = n.n(o),
        s = n("0Iet"),
        c = n.n(s),
        u = n("wyd1"),
        d = n.n(u),
        l = n("cgff"),
        p = n.n(l),
        h = n("ciSm"),
        f = n.n(h),
        g = n("kFjz"),
        v = n.n(g);
      class m {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      m.widgets = {
        Main: d.a,
        PrepaidRecommend: a(),
        PrepaidRecommendMain: i(),
        RechargeList: c(),
        RechargeListFree: p(),
        RechargeListRecommend: f(),
        RechargeGiftPack: v(),
      };
    },
    fChk: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      });
      var r = n("h+Rz");
      function a(e) {
        return r.a.pageScrollTo(e);
      }
    },
    fNGs: function (e, t, n) {
      var r = n("Qcor"),
        a = n.n(r);
      class o {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      (o.widgets = { Main: a() }), (t.a = o);
    },
    fZnw: function (e, t, n) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return i;
        });
      var r = n("Fcif");
      function a(e) {
        return function (t) {
          return new Promise((n, a) => {
            e.call(e, Object(r.a)({}, t, { success: n, fail: a }));
          });
        };
      }
      var o = (e) =>
        function (t, n) {
          return (
            void 0 === n && (n = {}),
            new Promise((a, o) =>
              e(Object(r.a)({}, t, { success: a, fail: o }), n)
            )
          );
        };
      function i(e, t) {
        if ((void 0 === t && (t = {}), !/^wx\./.test(e)))
          throw new Error("promisifyCall 仅支持 wx 的接口调用");
        var n = e.substr(3);
        if (!wx[n]) throw new Error("不存在 " + e + " API");
        return new Promise((e, a) => {
          wx[n](
            Object(r.a)({}, t, {
              success(n) {
                t.success && t.success(n), t.complete && t.complete(n), e(n);
              },
              fail(e) {
                t.fail && t.fail(e), t.complete && t.complete(e), a(e);
              },
            })
          );
        });
      }
    },
    fmSs: function (e, t, n) {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = ((r = n("URSu")) && r.__esModule ? r : { default: r }).default;
      (t.default = a), (e.exports = t.default);
    },
    gBZH: function (e, t, n) {
      n.d(t, "a", function () {
        return r;
      });
      var r = {
        ADD_CART: "add_shopping_car",
        NORMAL_BUY: "click_buy_now",
        GROUP_BUY: "together_group_purchase",
        GET_COUPON: "get_coupon",
        GET_DISCOUNT: "get_discount_code",
        SIGN_IN: "click_sign_in",
        POINTS_BUY: "points_exchange",
      };
    },
    gKCo: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        });
      var r = n("Fcif"),
        a = n("dsC0");
      function o(e, t) {
        var {
            goodsData: n,
            pageParams: o,
            shopData: i,
            shopMetaInfo: s,
            staticConfig: c,
          } = e,
          u = Object(a.g)(n, {}),
          { price: d } = Object(a.h)(n, t),
          l = Object.freeze({
            showPriceBlock: !0,
            showOriginPrice: !0,
            price: d,
          });
        return {
          goodsBaseInfo: Object(r.a)(
            { firstRenderPriceInfo: l },
            Object(a.e)(n, o)
          ),
          shopConfig: Object(a.o)(n.shopConfig),
          shopData: i,
          alias: n.alias,
          kdtId: i.kdtId,
          isSupportEstimated: n.isSupportEstimated || !1,
          distribution: Object(a.b)(n, {}),
          goodsMetaInfo: u,
          staticConfig: c,
          shopBaseInfo: Object(a.n)(Object(r.a)({}, n.shop, i), s),
        };
      }
      function i(e) {
        var {
            staticData: t,
            asyncGoodsData: n,
            goodsSkuData: o,
            activitySkuData: i,
            serverStatus: s,
          } = e,
          {
            goodsData: c,
            shopMetaInfo: u,
            offlineData: d,
            shopData: l,
            isOwnerTeam: p = !1,
            featureSwitch: h = {},
            apolloSwitch: f,
          } = t,
          { mpAccount: g } = l,
          v = { buyLimitType: n.buyLimitType, bosWorkFlow: n.bosWorkFlow },
          m = Object(a.g)(c, n),
          y = Object(a.b)(c, n),
          b = Object(a.i)(c),
          _ = (c.goods || {}).youzanGuaranteeModelV2,
          S = Object(a.l)(n),
          O = Object(a.q)(c.extendModelList),
          w = Object(a.k)(d, n, S, o),
          P = Object(a.d)(c, n, m, s),
          I = Object(a.h)(c, o, P, n),
          k = Object(a.c)(t),
          C = Object(a.p)(t),
          T = Object(a.m)(c),
          x = Object(a.a)(t),
          j = Object(a.j)(n),
          A = { logined: !0, isAdmin: p };
        return Object(r.a)(
          {
            shopMpInfo: g,
            goodsSkuData: o,
            activitySkuData: i,
            goodsMetaInfo: m,
            goodsPriceInfo: I,
            distribution: y,
            guarantee: b,
            guaranteeData: _,
            pageFeature: S,
            offlineId: w.id || 0,
            multistore: w,
            goodsActivity: P,
            env: k,
            pageSwitch: f,
          },
          C,
          {
            payWays: T,
            serverStatus: s,
            buyConfig: v,
            goodsExtendInfo: O,
            physicalStores: n.physicalStores,
            openAppConfig: x,
            userState: A,
            shopMetaInfo: u,
            logisticsTimeliness: j,
            featureSwitch: h,
          }
        );
      }
    },
    gNlG: function (e, t, n) {
      var r = n("DXKY"),
        a = n("hTAu");
      t.a = Behavior({
        methods: {
          setPageScrollControlSubscribe(e, t) {
            var n = Object(a.a)();
            return r.a.on("onPageScroll" + n, e, t), n;
          },
          delPageScrollControlSubscribe(e, t, n) {
            void 0 === n && (n = Object(a.a)()),
              r.a.off("onPageScroll" + n, e, t);
          },
        },
      });
    },
    h4Sw: function (e, t, n) {
      t.a = {
        cacheKey: { addressDowngrade: "address_downgrade" },
        eventKey: {
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
        },
        phaseStatus: {
          WAIT_PAY: "待付款",
          WAIT_PAY_START: "未开始",
          PAID: "已付",
          CLOSE: "已关闭",
          SUCCESS: "已完成",
        },
        freightInsuranceTag: { NONE: "0", SELF: "1", FREE: "2" },
        groupon: { forbidReceive: 0, optionalReceive: 1, forceReceive: 2 },
        activityMap: {
          3: "降价拍",
          4: "拼团",
          6: "秒杀",
          8: "赠品",
          10: "会员折扣",
          11: "限时折扣",
          23: "抽奖团",
          24: "换购",
          26: "拼团",
        },
        shopStock: { default: 0, full: 1, none: 2, part: 3 },
        umpBenefitChannelType: { subscription: 118, wechatWork: 119 },
        appointmentType: { regular: 1, instant: 2 },
      };
    },
    hDMN: function (e, t, n) {
      n.d(t, "a", function () {
        return s;
      });
      var r = n("6U3b"),
        a = n.n(r),
        o = n("8S+i"),
        i = n.n(o);
      class s {
        constructor(e) {
          var { ctx: t, totalPageNum: n, useLoadMore: r } = e;
          (this.ctx = t), (this.totalPageNum = n), (this.useLoadMore = r);
        }
      }
      s.widgets = { Main: a(), RecommendGoodsTitle: i() };
    },
    hTAu: function (e, t, n) {
      function r(e) {
        var t;
        if (e) t = e;
        else {
          var n = getCurrentPages();
          t = n[n.length - 1];
        }
        if (!t.__uniqueKey__) {
          var r = (function (e) {
            for (var t = 5381, n = e.length; n; )
              t = (33 * t) ^ e.charCodeAt(--n);
            return t >>> 0;
          })(t.route + JSON.stringify(t.options));
          t.__uniqueKey__ = r;
        }
        return t.__uniqueKey__;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    "i/JN": function (e, t, n) {
      var r = n("GE03"),
        a = n("l3+0"),
        o = n("BAZ7"),
        i = n("+165"),
        s = n("pZIW"),
        c = n("OF9M");
      e.exports = function (e, t, n) {
        var u = -1,
          d = a,
          l = e.length,
          p = !0,
          h = [],
          f = h;
        if (n) (p = !1), (d = o);
        else if (l >= 200) {
          var g = t ? null : s(e);
          if (g) return c(g);
          (p = !1), (d = i), (f = new r());
        } else f = t ? [] : h;
        e: for (; ++u < l; ) {
          var v = e[u],
            m = t ? t(v) : v;
          if (((v = n || 0 !== v ? v : 0), p && m == m)) {
            for (var y = f.length; y--; ) if (f[y] === m) continue e;
            t && f.push(m), h.push(v);
          } else d(f, m, n) || (f !== h && f.push(m), h.push(v));
        }
        return h;
      };
    },
    i0JV: function (e, t, n) {
      var r = n("FEiO"),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : a.call(t, e);
      };
    },
    iIKO: function (e, t, n) {
      n.d(t, "a", function () {
        return o;
      });
      var r = n("ubH4"),
        a = n.n(r);
      class o {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      o.widgets = { Main: a() };
    },
    iOq2: function (e, t) {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    jA1y: function (e, t, n) {
      n.d(t, "f", function () {
        return D;
      }),
        n.d(t, "g", function () {
          return M;
        }),
        n.d(t, "e", function () {
          return N;
        }),
        n.d(t, "c", function () {
          return L;
        }),
        n.d(t, "d", function () {
          return R;
        }),
        n.d(t, "b", function () {
          return B;
        }),
        n.d(t, "a", function () {
          return U;
        });
      var r = n("eijD"),
        a = n("Fcif"),
        o = n("DXKY"),
        i = n("WLNV"),
        s = n("taYb"),
        c = n("Sd3C"),
        u = n("8B9M"),
        d = n("z24M"),
        l = n("aOlM"),
        p = n("2wjL"),
        h = n("7sy2");
      function f(e, t) {
        return (
          void 0 === t && (t = {}),
          p.a
            .add(e, t)
            .replace(/^http(s)?:\/\/[^/]*\//, "storage://")
            .replace(/access_token=([^&]*)/, "")
            .replace(/app_id=([^&]*)/, "")
        );
      }
      function g(e) {
        var t = getApp();
        if (t && t.logger) {
          var n = t.logger.getLogParams(),
            { user: r, context: a } = n,
            o = null == a ? void 0 : a.from_params;
          Object(h.c)(o) && (e.from_params = o),
            r.uuid && ((e.uuid = r.uuid), (e.ftime = r.ftime));
        }
      }
      var v = {
          inited: !1,
          cacheKeySet: new Set(),
          cacheKeyMap: Object.create(null),
          cacheStorage: {},
        },
        m = Object(l.a)(() => {
          wx.setStorage({
            key: "request-cache",
            data: { cacheKeyMap: v.cacheKeyMap, cacheStorage: v.cacheStorage },
          });
        }, 1e3),
        y = () => {
          if (!v.inited) {
            v.inited = !0;
            var e = Object.create(null);
            try {
              e = wx.getStorageSync("request-cache") || {};
            } catch (e) {}
            var { cacheKeyMap: t = {}, cacheStorage: n = {} } = e,
              r = +new Date() / 1e3;
            Object.keys(t).forEach((e) => {
              var a = t[e].expireTime - r;
              a > 0 && _(e, n[e], a);
            });
          }
        };
      function b(e) {
        v.cacheKeySet.delete(e),
          delete v.cacheKeyMap[e],
          delete v.cacheStorage[e];
      }
      function _(e, t, n) {
        void 0 === n && (n = 86400);
        var r = +new Date() / 1e3;
        v.cacheKeySet.add(e),
          (v.cacheKeyMap[e] = { key: e, createTime: r, expireTime: r + n }),
          (v.cacheStorage[e] = t);
      }
      function S(e, t) {
        var { url: n, data: r } = e;
        void 0 === t && (t = null), y();
        var a = f(n, r);
        if (v.cacheKeySet.has(a)) {
          var o = +new Date() / 1e3,
            i = v.cacheStorage[a];
          if (i) {
            if ("number" == typeof t && o < v.cacheKeyMap[a].createTime + t)
              return O(i);
            if ("number" != typeof t && o < v.cacheKeyMap[a].expireTime)
              return O(i);
          }
          b(a);
        }
        return null;
      }
      function O(e) {
        return "object" == typeof e ? JSON.parse(JSON.stringify(e)) : e;
      }
      var w = n("R18q"),
        P = n("US/N"),
        I = { config: {}, method: "GET", header: {} },
        k = {
          origin: "carmen",
          header: { "content-type": "application/x-www-form-urlencoded" },
        },
        C = { origin: "h5", header: { "content-type": "application/json" } },
        T = {
          origin: "baymax",
          header: { "content-type": "application/x-www-form-urlencoded" },
        },
        x = {
          appId: "",
          version: "",
          kdtId: "",
          offlineId: "",
          accessToken: "",
          sessionId: "",
          hasShop: !1,
          hasToken: !1,
        },
        j = [],
        A = [],
        E = [];
      function D(e) {
        var { offlineId: t, kdtId: n } = e;
        "offlineId" in e && (x.offlineId = t),
          (x.hasShop = !0),
          n &&
            (function (e) {
              void 0 === e && (e = ""), (x.kdtId = e), (x.hasKdtId = !!e);
              for (var t = A.shift(); t; ) t(), (t = A.shift());
            })(n);
        for (var r = E.shift(); r; ) r(), (r = E.shift());
      }
      function M(e) {
        (e = s.a.toCamelCase(e)),
          (x.hasToken = !0),
          (x.tokenTime = Date.now()),
          (x.accessToken = e.accessToken),
          (x.sessionId = e.sessionId);
        for (var t = j.shift(); t; ) t(), (t = j.shift());
      }
      function N(e) {
        void 0 === e && (e = {}),
          (x = Object(a.a)({}, x, e)),
          Object(P.setRequestDep)(x);
      }
      function L(e) {
        return G((e = Object(i.a)({}, C, e)));
      }
      function R(e) {
        return L((e = Object(i.a)({}, e, { config: { useCdn: !0 } })));
      }
      function B(e) {
        if (!(e = F((e = Object(i.a)({}, k, e)))).api)
          throw new Error("Carmen 接口必须提供 api");
        return (e.path = ("/api/oauthentry/" + e.api).replace("//", "/")), G(e);
      }
      function U(e) {
        if (!(e = F((e = Object(i.a)({}, T, e)))).api)
          throw new Error("彩虹桥接口必须提供 api");
        return (e.path = ("/api/" + e.api).replace("//", "/")), G(e);
      }
      function F(e) {
        void 0 === e && (e = {});
        var t = (t) =>
            Object(a.a)({}, e, {
              query: Object(a.a)({}, e.query, { retail_source: t }),
            }),
          n = (Object(u.a)() || {}).globalData || {},
          r = Object(d.a)("userVersion");
        switch (n.scene) {
          case 1:
            return t("MINAPP-SCAN-" + (r = r || "3.8.0"));
          case 2:
            return t("MINAPP-FREE-" + (r = r || "3.12.0"));
          case 3:
            return t("MINAPP-SHELF-" + (r = r || "1.0.0"));
          default:
            return e;
        }
      }
      function G(e) {
        return (
          (e = Object(i.a)({}, I, e)),
          new Promise((t, n) => {
            var { success: r, fail: a, complete: o } = e;
            (e.success = (e) => {
              try {
                r ? r(e) && t(e) : t(e), o && o(e);
              } catch (e) {}
            }),
              (e.fail = (e) => {
                a ? a(e) && n(e) : n(e), o && o(e);
              }),
              z(e.config, () =>
                (function (e) {
                  return q.apply(this, arguments);
                })(e)
              );
          })
        );
      }
      function H(e) {
        return (t, n) =>
          new Promise((t, n) => {
            var r = Object(u.a)(),
              o = r && r.globalData && r.globalData.enableHttp2;
            wx.request(
              Object(a.a)({}, e, {
                success: (e) => t(e),
                fail: (e) => n(e),
                enableHttp2: o,
                complete: (t) => {
                  try {
                    w.a.captureXhr({
                      statusCode: t.statusCode || 0,
                      method: e.method,
                      url: e.url,
                      params: e.data,
                    });
                  } catch (e) {
                    var n = Object(u.a)();
                    n.logger &&
                      n.logger.appError({
                        name: "hummer_sdk_error",
                        message: e.message,
                        detail: {},
                      });
                  }
                },
              })
            );
          })
            .catch(
              (function (e, t, n) {
                return (t) => {
                  var r = t.res || t.message || t || {},
                    a = ("carmen" === e.origin ? r.error_response : r) || {};
                  if (
                    (o.a.trigger("request:api:fail", {
                      requestOptions: e,
                      response: a,
                    }),
                    n)
                  ) {
                    var i =
                      a.errMsg ||
                      a.msg ||
                      a.message ||
                      "接口调用失败，请稍后重试";
                    e.fail({ code: a.code || -9999, msg: i, res: a });
                  }
                  return Promise.reject("请求失败");
                };
              })(e, 0, n)
            )
            .then(
              (function (e, t, n) {
                return (r) => {
                  var i = (function (e, t) {
                      var n = t;
                      if ("string" === e.dataType && "string" == typeof t)
                        try {
                          n = JSON.parse(t);
                        } catch (e) {
                          var r = t
                            .toString()
                            .replace(
                              /[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                              ""
                            );
                          try {
                            n = JSON.parse(r);
                          } catch (e) {}
                        }
                      return n;
                    })(e, r.data),
                    s = {
                      code: r.code || -9999,
                      msg: r.errMsg || r.msg || "服务器请求失败，请稍后重试",
                      res: i,
                    };
                  if (200 !== r.statusCode)
                    return (
                      o.a.trigger("request:server:fail", {
                        requestOptions: e,
                        response: r,
                      }),
                      n && e.fail(s),
                      Promise.reject(s)
                    );
                  r = i;
                  var c = "carmen" === e.origin,
                    u = "baymax" === e.origin;
                  if (
                    (function (e) {
                      void 0 === e && (e = {});
                      var t = 0 === e.code,
                        n = !0 === e.success;
                      return (
                        (void 0 !== e.response && !e.error_response) || t || n
                      );
                    })(r)
                  ) {
                    var d = c ? r.response : r.data;
                    "object" != typeof d && (d = { value: d }),
                      t &&
                        (function (e, t) {
                          var { url: n, data: r, expire: a = 86400 } = e;
                          y();
                          var o = f(n, r);
                          if (v.cacheKeySet.size > 25) {
                            var i = [...v.cacheKeySet].map(
                              (e) => v.cacheKeyMap[e]
                            );
                            i.sort((e, t) => e.expireTime - t.expireTime);
                            for (
                              var s = v.cacheKeySet.size - 25,
                                c = +new Date() / 1e3,
                                u = 0;
                              u < i.length;
                              u += 1
                            ) {
                              var d = i[u];
                              if ((b(d.key), u > s && d.expireTime > c)) break;
                            }
                          }
                          _(o, O(t), a), m();
                        })(
                          Object(a.a)({}, e, {
                            expire: e._options.config.expire,
                          }),
                          d
                        );
                    try {
                      n && e.success(d);
                    } catch (t) {
                      o.a.trigger("request:business:fail", {
                        requestOptions: e,
                        response: r,
                        error: t,
                      });
                    }
                    return d;
                  }
                  return (
                    c && (r = r.error_response),
                    u &&
                      (r.gw_err_resp
                        ? (((r = r.gw_err_resp).code = r.err_code),
                          (r.msg = r.err_msg))
                        : (r.msg = r.message)),
                    -1 === r.code ||
                    ((40010 === r.code || 40009 === r.code) && c) ||
                    4205 === r.code
                      ? new Promise((r, a) => {
                          function i() {
                            n && e.fail(s), a();
                          }
                          function c() {
                            o.a.off("auth:token:fail", i),
                              K(e._options).then((a) => {
                                var o = H((e = a));
                                r(o(t, n));
                              });
                          }
                          if (
                            (o.a.once("auth:token:fail", i),
                            x.hasToken && e.requestTime < x.tokenTime)
                          )
                            return z(e._options.config, c);
                          x.hasToken &&
                            (o.a.trigger("auth:login"),
                            (x.hasKdtId = !1),
                            (x.hasToken = !1),
                            (x.hasShop = !1)),
                            z(e._options.config, c);
                        }).catch((e) => {})
                      : (o.a.trigger("request:code:fail", {
                          requestOptions: e,
                          response: r,
                        }),
                        (s.code = r.code),
                        (s.msg = r.msg),
                        n && e.fail(s),
                        Promise.reject(s))
                  );
                };
              })(e, t, n)
            );
      }
      function q() {
        return (q = Object(r.a)(function* (e) {
          void 0 === e && (e = {});
          var t = yield K(e),
            { success: n } = e,
            r = H(t);
          if ((e.config || (e.config = {}), e.config.cache)) {
            var o = S(t, e.config.expire);
            if (t.method && "GET" !== t.method) return r(!1, !0);
            if (e.config.forceRefreshCache || !o) return r(!0, !0);
            if ((o && (o.fromCache = !0), e.config.needRefresh && o))
              return n(
                Object(a.a)({}, o, {
                  cacheData: { refresh: !0, refreshPromise: r(!0, !1) },
                })
              );
            n(o);
          } else r(!1, !0);
        })).apply(this, arguments);
      }
      function z(e, t) {
        var n = () => {
            if (!e.skipKdtId && !x.hasKdtId) return W(A, t, e);
            t();
          },
          r = () => {
            if (!e.skipShopInfo && !x.hasShop) return W(E, n, e);
            n();
          },
          a = () => {
            if (!e.skipToken && !x.hasToken) return W(j, r, e);
            r();
          };
        "low" === e.priority ? setTimeout(() => a(), 800) : a();
      }
      function W(e, t, n) {
        void 0 === n && (n = {}),
          "high" === n.priority ? e.unshift(t) : e.push(t);
      }
      function K(e) {
        var {
            method: t,
            query: o = {},
            path: i,
            success: s,
            fail: d,
            dataType: l = "string",
          } = e,
          { data: p = {}, origin: h, header: f = {} } = e,
          { noQuery: v, noStoreId: m, skipToken: y, useCdn: b } = e.config;
        if (!h) throw new Error("所有请求必须指定 origin:", i);
        m || (o.store_id = x.offlineId || ""),
          v ||
            ((o.app_id = x.appId),
            (o.kdt_id = o.kdt_id || o.kdtId || x.kdtId || ""),
            (o.access_token = x.accessToken || ""));
        var _ = {
          is_weapp: 1,
          sid: x.sessionId,
          version: x.version,
          client: "weapp",
          bizEnv: "wsc",
        };
        y && (_.skip_sid = 1), g(_);
        try {
          var S = getApp();
          S &&
            S.globalData &&
            S.globalData.enableCdn &&
            b &&
            ((f = Object(a.a)({}, f)),
            delete _.sid,
            delete _.uuid,
            delete o.access_token,
            "h5" === h && (h = "h5m"));
        } catch (e) {}
        try {
          if (/^\/(wscaccount|passport)/.test(i) && !f["page-path"]) {
            var O,
              w = getCurrentPages(),
              P = null == (O = w[w.length - 1]) ? void 0 : O.route;
            f["page-path"] = P;
          }
        } catch (e) {}
        return (
          (f["Extra-Data"] = JSON.stringify(_)),
          Object(c.a)({ origin: h, pathname: i, query: o }).then(
            (function () {
              var a = Object(r.a)(function* (r) {
                var a = Object(u.a)() || {},
                  { key: o, apis: i = [] } = a.getCryptoInfo() || {},
                  [c] = r.split("?");
                if (i.indexOf(c) > -1 && o) {
                  var { encryptedData: g, encryptedRSAKey: v } =
                    yield (function (e, t) {
                      return n
                        .e("packages/async-main/chunk")
                        .then(n.t.bind(null, "sbP3", 7))
                        .then((n) => {
                          var { key: r, iv: a } = n.utils.generateKeyAndIv();
                          return {
                            encryptedData: n.aes.encrypt({
                              data: JSON.stringify(e),
                              key: r,
                              iv: a,
                            }),
                            encryptedRSAKey: n.rsa.encrypt({
                              data: r + ":" + a,
                              publicKey: t,
                            }),
                          };
                        });
                    })(p, o);
                  (f["x-auth-token"] = v), (p = { encryptedData: g });
                }
                return {
                  origin: h,
                  _options: e,
                  requestTime: Date.now(),
                  url: r,
                  data: p,
                  header: f,
                  method: (t || "GET").toUpperCase(),
                  success: s,
                  fail: d,
                  dataType: l,
                };
              });
              return function (e) {
                return a.apply(this, arguments);
              };
            })()
          )
        );
      }
      P.beforeHooks.add((e) => {
        var t = JSON.parse(e.header["Extra-Data"] || "{}");
        return g(t), (e.header["Extra-Data"] = JSON.stringify(t)), !0;
      });
    },
    jgJv: function (e, t, n) {
      var r = n("s3UK").Symbol;
      e.exports = r;
    },
    kFi4: function (e, t, n) {
      n.d(t, "e", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return c;
        });
      var r = "#ee0a24",
        a = "#1989fa",
        o = "#fff",
        i = "#07c160",
        s = "#323233",
        c = "#969799";
    },
    kOiO: function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      var r = n("1Bjr"),
        a = n.n(r),
        o = n("iO9C"),
        i = n.n(o),
        s = n("WJHR"),
        c = n.n(s),
        u = n("7Cf/"),
        d = n.n(u);
      class l {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      l.widgets = {
        WechatAddress: a(),
        WxAddress: i(),
        AliAddress: c(),
        XhsAddress: d(),
      };
    },
    kWwd: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        a = (r = n("ZxyO")) && r.__esModule ? r : { default: r };
      var o = function (e, t) {
        return (
          (e = new a.default(e)),
          (t = new a.default(t)),
          parseFloat(e.plus(t).toFixed())
        );
      };
      (t.default = o), (e.exports = t.default);
    },
    kYFR: function (e, t) {
      e.exports = {
        d: "couponIntroDetail;0;goodsBaseInfo;4;goodsActivity;4;goodsSkuData;4;goodsMetaInfo;4",
        e: "",
        el: "hideVirtualTicketIntro",
        w: "EcardIntro;CouponIntro",
        wc: "EcardIntro;CouponIntro",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        c