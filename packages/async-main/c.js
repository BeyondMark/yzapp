"use strict";
(exports.ids = [5]),
  (exports.modules = {
    "0Ckh": function (t, e, o) {
      o.d(e, "i", function () {
        return n;
      }),
        o.d(e, "d", function () {
          return a;
        }),
        o.d(e, "e", function () {
          return r;
        }),
        o.d(e, "j", function () {
          return i;
        }),
        o.d(e, "f", function () {
          return s;
        }),
        o.d(e, "a", function () {
          return c;
        }),
        o.d(e, "c", function () {
          return u;
        }),
        o.d(e, "g", function () {
          return p;
        }),
        o.d(e, "h", function () {
          return l;
        }),
        o.d(e, "b", function () {
          return d;
        });
      var n = {
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
        r = {
          1: "/pages/home/dashboard/index",
          "1-retail": "/pages-retail/home-shelf/index",
          2: "/packages/goods/cart/index",
          6: "/packages/usercenter/dashboard/index",
          "6-retail": "/packages/retail/usercenter/dashboard-v2/index",
        },
        i = {
          1: [
            /^(packages|pages)\/home\/dashboard/,
            /^packages\/(old-home|ext-home)\/dashboard/,
            /^packages\/showcase-template\/index/,
          ],
          3: [
            /^(packages|pages)\/home\/feature/,
            /^packages\/(old-home|ext-home)\/feature/,
            /^(packages|pages)\/home\/tab/,
            /^packages\/(old-home|ext-home)\/tab\/(one|two|three)/,
          ],
          8: [/^packages\/goods(:?-v\d+)?\//, /^pages\/goods\/detail/],
          9: [
            /^packages\/shop\/goods\/all/,
            /^packages\/shop\/goods\/group/,
            /^packages\/shop\/goods\/tag-list\/index/,
            /^packages\/goods-list\/tag\/index/,
            /^packages\/goods-list\/all\/index/,
          ],
        },
        s = { HOME: 1, FEATURE: 3, GOODS_DETAIL: 8, GOODS_GROUP: 9 },
        c = {
          ADD_CART: "component:sku:cart",
          PULL_DOWN: "home:refresh",
          SHARE: "share",
        },
        u = { 1: !0, 3: !0, 8: !0, 9: !1 },
        p = { 1: "share-feature", 3: "share-feature" },
        l = { 1: "homepage", 3: "micropage" },
        d = { GOODS_SHOWCASE: 10 };
    },
    "1bvV": function (t, e, o) {
      o.d(e, "a", function () {
        return a;
      }),
        o.d(e, "b", function () {
          return r;
        }),
        o.d(e, "c", function () {
          return i;
        });
      var n = getApp(),
        a = () =>
          n.requestUseCdn({
            origin: "h5",
            path: "/v3/im/api/setting/contact-mode",
            method: "GET",
          }),
        r = () =>
          wx.canIUse("openCustomerServiceChat")
            ? n.request({
                origin: "h5",
                path: "/v3/im/api/weixin-kf/weixin-kf-config.json",
                method: "GET",
              })
            : Promise.resolve(!1),
        i = (t) =>
          n.request({
            path: "/v3/im/api/weixin-kf/report-visited-mmp-error.json",
            method: "POST",
            withCredentials: !0,
            data: t,
          });
    },
    "1rIA": function (t, e, o) {
      var n, a;
      o.d(e, "i", function () {
        return r;
      }),
        o.d(e, "h", function () {
          return i;
        }),
        o.d(e, "n", function () {
          return s;
        }),
        o.d(e, "e", function () {
          return c;
        }),
        o.d(e, "f", function () {
          return u;
        }),
        o.d(e, "d", function () {
          return p;
        }),
        o.d(e, "b", function () {
          return l;
        }),
        o.d(e, "a", function () {
          return d;
        }),
        o.d(e, "c", function () {
          return h;
        }),
        o.d(e, "g", function () {
          return f;
        }),
        o.d(e, "l", function () {
          return g;
        }),
        o.d(e, "m", function () {
          return m;
        }),
        o.d(e, "k", function () {
          return v;
        }),
        o.d(e, "j", function () {
          return y;
        });
      var r = 280,
        i = 158,
        s = r / i,
        c = { width: 560, height: 316 },
        u = { width: 130, height: 130 },
        p = 0.5,
        l = 14,
        d = { NUMBER: -1, TENCENT: 0, SLIDE: 1, CLICK: 2 },
        h = { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 },
        f = { bigUrl: "", smallUrl: "", cy: 0 },
        g = {
          READY: "ready",
          FAILED: "failed",
          SUCCESS: "success",
          LOADING: "loading",
          LIMIT: "limit",
          ERROR: "error",
        },
        m =
          (((n = {})[g.READY] = "向右拖动滑块填充拼图"),
          (n[g.FAILED] = "验证失败"),
          (n[g.SUCCESS] = "验证成功"),
          (n[g.LOADING] = "加载中"),
          (n[g.LIMIT] = "失败过多，点此重试"),
          (n[g.ERROR] = "加载失败，请重试"),
          n),
        v =
          (((a = {})[g.READY] = "arrow"),
          (a[g.FAILED] = "cross"),
          (a[g.SUCCESS] = "success"),
          (a[g.LOADING] = "arrow"),
          (a[g.LIMIT] = "cross"),
          (a[g.ERROR] = "cross"),
          a),
        y = {
          SUCCESS: "success",
          FAILED: "failed",
          ERROR: "error",
          CANCEL: "cancel",
        };
    },
    "4k4N": function (t, e, o) {
      e.a = Behavior({
        properties: {
          themeClass: String,
          sku: Object,
          selectedSku: Object,
          selectedSkuComb: Object,
          extraData: Object,
        },
      });
    },
    "4nxs": function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.uniqueId = void 0),
        (e.uniqueId = function () {
          return Date.now() + "-" + Math.floor(1e4 * Math.random() + 1);
        });
    },
    "6K+Q": function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ProtocolBaseComponent = void 0);
      var n = (function () {
        function t() {}
        return (
          (t.prototype.setValue = function (t) {}),
          (t.prototype.invokeEvent = function (t, e) {}),
          (t.prototype.getData = function () {
            return {};
          }),
          (t.prototype.goPage = function (t) {}),
          (t.prototype.getEventParams = function (t) {
            return {};
          }),
          (t.prototype.safeLog = function (t) {}),
          t
        );
      })();
      e.ProtocolBaseComponent = n;
    },
    "6ZX2": function (t, e, o) {
      o.d(e, "a", function () {
        return s;
      });
      var n = Behavior({
        methods: {
          emit: function (t) {
            this.$emit(t.currentTarget.dataset.en, t.detail);
          },
          $emit: function (t, e, o) {
            this.triggerEvent(t, e, o);
          },
        },
      });
      function a(t, e) {
        return new Promise((o) => {
          t.setData(e, o);
        });
      }
      var r = Behavior({
        created() {
          if (this.$options) {
            var t = {},
              { computed: e } = this.$options(),
              o = Object.keys(e);
            this.calcComputed = () => {
              var n = {};
              return (
                o.forEach((o) => {
                  var a = e[o].call(this);
                  t[o] !== a && ((t[o] = a), (n[o] = a));
                }),
                n
              );
            };
          }
        },
        attached() {
          this.set();
        },
        methods: {
          set(t, e) {
            var o = [];
            return (
              t && o.push(a(this, t)),
              this.calcComputed && o.push(a(this, this.calcComputed())),
              Promise.all(o).then(
                (t) => (e && "function" == typeof e && e.call(this), t)
              )
            );
          },
        },
      });
      function i(t, e) {
        var { watch: o, computed: n } = t;
        if ((e.behaviors.push(r), o)) {
          var a = e.properties || {};
          Object.keys(o).forEach((t) => {
            if (t in a) {
              var e = a[t];
              (null !== e && "type" in e) || (e = { type: e }),
                (e.observer = o[t]),
                (a[t] = e);
            }
          }),
            (e.properties = a);
        }
        n &&
          ((e.methods = e.methods || {}),
          (e.methods.$options = () => t),
          e.properties &&
            (function (t) {
              t &&
                Object.keys(t).forEach((e) => {
                  var o = t[e];
                  (null !== o && "type" in o) || (o = { type: o });
                  var { observer: n } = o;
                  (o.observer = function () {
                    if (n) {
                      "string" == typeof n && (n = this[n]);
                      for (
                        var t = arguments.length, e = new Array(t), o = 0;
                        o < t;
                        o++
                      )
                        e[o] = arguments[o];
                      n.apply(this, e);
                    }
                    this.set();
                  }),
                    (t[e] = o);
                });
            })(e.properties));
      }
      function s(t) {
        void 0 === t && (t = {});
        var e,
          o,
          a,
          r = {};
        (e = t),
          (o = r),
          (a = {
            data: "data",
            props: "properties",
            methods: "methods",
            created: "attached",
          }),
          Object.keys(a).forEach((t) => {
            e[t] && (o[a[t]] = e[t]);
          }),
          (r.externalClasses = ["custom-class"]),
          (r.behaviors = [n]),
          i(t, r),
          Component(r);
      }
    },
    "85sJ": function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createTeeComponent = void 0);
      var n = o("bb6g"),
        a = n.__importDefault(o("9ZMt")),
        r = o("FyaD"),
        i = o("EbiH");
      e.createTeeComponent = function (t, e) {
        return (
          void 0 === e && (e = {}),
          delete t.__proto__.constructor,
          r.createComponent(
            t,
            n.__assign(
              {
                methods: n.__assign(
                  {
                    goPage: function (t) {
                      a.default.navigate({ url: t });
                    },
                  },
                  e.methods || {}
                ),
              },
              i.omit(e, "methods")
            )
          )
        );
      };
    },
    "8GJ+": function (t, e, o) {
      o.d(e, "b", function () {
        return a;
      }),
        o.d(e, "a", function () {
          return r;
        });
      var n = o("jA1y");
      var a = function (t) {
        wx.requestSubscribeMessage
          ? Object(n.c)({ path: "/wscump/salesman/im/getSubMsg.json" })
              .then((e) => {
                var o = !0;
                if (Array.isArray(e) && e.length) {
                  var a = this;
                  return (
                    wx.getSetting({
                      withSubscriptions: !0,
                      success(t) {
                        var { subscriptionsSetting: n = {} } = t,
                          { mainSwitch: r, itemSettings: i = {} } = n;
                        r &&
                          o &&
                          e.every((t) => !i[t]) &&
                          a.setYZData({ isShowGif: !0 });
                      },
                    }),
                    void (function (t) {
                      return new Promise((e) => {
                        wx.requestSubscribeMessage({
                          tmplIds: t,
                          success(t) {
                            "requestSubscribeMessage:ok" === t.errMsg
                              ? e(!0)
                              : e();
                          },
                          fail() {
                            e();
                          },
                        });
                      });
                    })(e).then((a) => {
                      (o = !1),
                        this.setYZData({ isShowGif: !1 }),
                        a &&
                          (function (t) {
                            Object(n.c)({
                              path: "/wscump/salesman/im/subscriptionCallback.json",
                              method: "POST",
                              data: {
                                scene: "salesmanOrder",
                                templateIdList: t,
                              },
                            });
                          })(e),
                        t();
                    })
                  );
                }
                t();
              })
              .catch(t)
          : t();
      };
      var r = function (t) {
        Object(n.c)({
          path: "/wscsalesman/common-api/assets/new-tax/getShopAndUserTaxInfo.json",
        })
          .then((e) => {
            wx.hideLoading();
            var o,
              {
                taxServiceState: n,
                userSigned: a,
                authDeadline: r,
                authDeadlineOver: i,
                shareAuth: s,
                mode: c,
              } = e;
            n && !a && 1 === s
              ? ((o =
                  1 === c
                    ? "根据《电商法》规定，个人收入需要缴纳个税，请先完成个人信息认证，否则获得的佣金或奖励不结算。"
                    : i
                    ? "由于商家开启了个税代缴服务，需要认证升级后才可使用，你还未完成信息认证，商家无法给你发放佣金或奖励。"
                    : "由于商家开启了个税代缴服务，需要认证升级后才可使用，请在 " +
                      r +
                      " 前完成认证升级，否则商家无法给你发放佣金或奖励。"),
                this.setYZData({ showTaxSign: !0, signText: o }))
              : t();
          })
          .catch(() => {
            wx.hideLoading(), t();
          });
      };
    },
    AIOl: function (t, e, o) {
      o.d(e, "a", function () {
        return h;
      }),
        o.d(e, "b", function () {
          return f;
        });
      var n,
        a,
        r = o("Fcif"),
        i = o("pfnQ"),
        s = o("xqQ2"),
        c = o("JhDH"),
        u = getApp(),
        p = { kdtId: u.getKdtId(), type: "weapp", buyerId: u.getBuyerId() },
        l = new s.a({ plat: { yai: "shop_guide_workbench_b", st: "weapp" } }),
        d = null == (n = u.logger.getGlobal()) ? void 0 : n.user;
      l.setUser(d),
        l.setEvent(
          Object(r.a)(
            {},
            null == (a = u.logger.getGlobal()) ? void 0 : a.event,
            { si: u.getKdtId() }
          )
        );
      var h = (t) => {
          try {
            i.a.monitor({
              appName: "wsc-h5-salesman",
              logIndex: "wsc_wap_salesman_share_track",
              topic: "front",
              extra: Object(r.a)({}, p, t.extra || {}),
            });
          } catch (t) {}
        },
        f = function (t, e) {
          void 0 === e && (e = {});
          var o = u.getKdtId(),
            { sl: n, salesman_type: a } = e,
            { params: i = {} } = t,
            s = o + "-" + n;
          if (
            ((t.params = Object(r.a)({}, i, e, { mark: s })), a === c.d.GUIDE)
          ) {
            var p, d;
            if (null == (p = l.getLogParams()) || !p.user.buyer_id)
              l.setUser(null == (d = u.logger.getGlobal()) ? void 0 : d.user);
            l.log(Object(r.a)({}, t, { durl: u.logger.durl }));
          }
          u.logger.log(t);
        };
    },
    BI6g: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createWxComponent = void 0);
      var n = o("bb6g"),
        a = o("EbiH");
      e.createWxComponent = function (t, e) {
        void 0 === e && (e = {});
        var o = n.__assign(n.__assign({}, t.props || {}), e.props || {});
        return {
          options: { multipleSlots: !0 },
          properties: Object.keys(o).reduce(function (t, e) {
            var n = o[e];
            return (
              (t[e] = {
                type: n.type,
                value: "function" == typeof n.default ? n.default() : n.default,
              }),
              t
            );
          }, {}),
          data: n.__assign(n.__assign({}, t.data), e.data || {}),
          observers: t.watch || {},
          methods: n.__assign(
            n.__assign(
              n.__assign(
                {},
                a.omit(t, [
                  "props",
                  "data",
                  "created",
                  "destroyed",
                  "mounted",
                  "watch",
                ])
              ),
              {
                setValue: function (t) {
                  this.setData(t);
                },
                getData: function () {
                  return this.data;
                },
                goPage: function (t) {
                  var e = t.currentTarget.dataset.url;
                  wx.navigateTo({
                    url:
                      "/pages/common/webview-page/index?src=" +
                      encodeURIComponent(e),
                    success: function () {},
                    error: function () {
                      wx.showToast({ icon: "none", title: "打开协议失败" });
                    },
                  });
                },
                invokeEvent: function (t, e) {
                  this.triggerEvent(t, e);
                },
                getEventParams: function (t) {
                  return t.detail;
                },
              }
            ),
            e.methods
          ),
          created: function () {
            t.created && t.created.call(this);
          },
          attached: function () {
            t.mounted && t.mounted.call(this);
          },
          detached: function () {
            t.destroyed && t.destroyed.call(this);
          },
        };
      };
    },
    Bx6h: function (t, e, o) {
      o.d(e, "a", function () {
        return n;
      });
      var n = {
        1: [/^(packages|pages)\/home\/dashboard/],
        2: [/^packages\/goods(-v\d+)*\/detail/, /^pages\/goods\/detail/],
      };
    },
    CMtL: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getAuthState =
          e.getWholeProtocolData =
          e.signProtocolBatch =
            void 0);
      var n = o("lfpY"),
        a = o("Sx60"),
        r = o("EyoS");
      (e.signProtocolBatch = function (t) {
        return t.length
          ? n.request({
              url: "/passport/api/protocol/batchSign.json",
              method: "POST",
              data: { ids: t },
            })
          : Promise.resolve();
      }),
        (e.getWholeProtocolData = function (t) {
          void 0 === t && (t = []);
          var e = a.formatProtocolCode(t);
          return n.request({
            url: "/passport/protocol/data.json",
            method: "GET",
            data: { protocolCode: e },
          });
        }),
        (e.getAuthState = function () {
          return r.resolveTeeAPI().then(function (t) {
            return t.getUserPrivacy();
          });
        });
    },
    CV91: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.protocolSign = void 0);
      var n = o("CMtL"),
        a = o("gyjr");
      e.protocolSign = function (t) {
        return 0 === t.length
          ? Promise.resolve()
          : n.signProtocolBatch(t).then(function () {
              a.clearProtocolCache();
            });
      };
    },
    Dcfi: function (t, e, o) {
      o.d(e, "b", function () {
        return l;
      });
      var n = o("Fcif"),
        a = o("0Ckh"),
        r = getApp(),
        i = r.getKdtId(),
        s = {},
        c = { 9: 0 },
        u = null,
        p = -1;
      function l() {
        return r
          .requestUseCdn({
            path: "/wscdeco/weapp/WeappAccount/getWeixinVideoInfo.json",
          })
          .then((t) => t || {})
          .catch(() => {});
      }
      function d(t) {
        return (
          void 0 === t && (t = {}),
          {
            isShareBlack: t.isShareBlack,
            mainFloatingNav: Object(n.a)({}, t.mainFloatingNav),
            subFloatingNavs: (t.subFloatingNavs || []).map((t) =>
              Object(n.a)({}, t)
            ),
          }
        );
      }
      e.a = {
        getNavData(t, e) {
          void 0 === e && (e = !1);
          var o = (function (t) {
              return (
                t === a.f.HOME || t === a.f.FEATURE || t === a.f.GOODS_DETAIL
              );
            })(t),
            n = r.getKdtId();
          return (
            n !== i &&
              (function (t) {
                (i = t), (u = null), (p = -1), (s = {}), (c = { 9: 0 });
              })(n),
            new Promise((n) => {
              !u || void 0 === s[t] || e || (!o && Date.now() - c[t] > 12e4)
                ? (function (t) {
                    return r
                      .requestUseCdn({
                        path: "/wscdeco/showcase-api/floating_nav.json",
                        data: { from: "weapp", page_type: t, v: 2 },
                      })
                      .then((t) => t || {})
                      .catch(() => {});
                  })(t).then((e) => {
                    o || (c[t] = Date.now()),
                      0 === e.value
                        ? ((s[t] = !1), n({}))
                        : ((s[t] = !0), n(d((u = e))));
                  })
                : !1 !== s[t]
                ? n(d(u))
                : n({});
            })
          );
        },
        getCartCount: (t) => (
          void 0 === t && (t = !1),
          new Promise((e) => {
            p < 0 || t
              ? r
                  .request({ path: "/wscshop/trade/cart/count.json" })
                  .then((t) => {
                    var { count: e } = t;
                    return e || 0;
                  })
                  .catch(() => {})
                  .then((t) => {
                    (p = t), e(t);
                  })
              : e(p);
          })
        ),
        addCartCount(t) {
          void 0 === t && (t = 1), (p += t);
        },
      };
    },
    DfWl: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ProtocolListComponent = void 0);
      var n = o("bb6g"),
        a = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.props = {
                protocols: {
                  type: Array,
                  default: function () {
                    return [];
                  },
                },
                customClass: {
                  type: String,
                  default: function () {
                    return "";
                  },
                },
              }),
              (e.data = {}),
              e
            );
          }
          return n.__extends(e, t), e;
        })(o("6K+Q").ProtocolBaseComponent);
      e.ProtocolListComponent = a;
    },
    E6qs: function (t, e, o) {
      o.d(e, "c", function () {
        return c;
      }),
        o.d(e, "i", function () {
          return u;
        }),
        o.d(e, "f", function () {
          return p;
        }),
        o.d(e, "h", function () {
          return g;
        }),
        o.d(e, "b", function () {
          return m;
        }),
        o.d(e, "e", function () {
          return v;
        }),
        o.d(e, "a", function () {
          return y;
        }),
        o.d(e, "j", function () {
          return b;
        }),
        o.d(e, "g", function () {
          return w;
        }),
        o.d(e, "k", function () {
          return d;
        }),
        o.d(e, "d", function () {
          return h;
        });
      var n = o("bb6g"),
        a = o("9ZMt"),
        r = o("SyLL"),
        i = o("1rIA");
      function s(t) {
        return Object(n.__awaiter)(this, void 0, void 0, function () {
          return Object(n.__generator)(this, function (e) {
            return [
              2,
              new Promise(function (e, o) {
                try {
                  setTimeout(function () {
                    e();
                  }, t);
                } catch (t) {
                  o(t);
                }
              }),
            ];
          });
        });
      }
      function c(t) {
        var e = t.vm,
          o = t.eventType,
          n = t.data;
        switch (o) {
          case i.j.SUCCESS:
            e.$emit(i.j.SUCCESS, n),
              "function" == typeof r.c.onSuccess && r.c.onSuccess(n);
            break;
          case i.j.FAILED:
            e.$emit(i.j.FAILED, n),
              "function" == typeof r.c.onFail && r.c.onFail(n);
            break;
          case i.j.ERROR:
            e.$emit(i.j.ERROR, n),
              "function" == typeof r.c.onError && r.c.onError(n);
            break;
          case i.j.CANCEL:
            e.$emit("close"),
              "function" == typeof r.c.onCancel && r.c.onCancel();
        }
      }
      function u(t) {
        var e = t.vm,
          o = t.onError;
        o && o(),
          c({ vm: e, eventType: i.j.FAILED }),
          e.delay(i.l.ERROR, function () {}, i.l.ERROR);
      }
      function p() {
        switch (a.default.getEnv()) {
          case "weapp":
            return wx;
          case "qq":
            return qq;
          case "ant":
            return my;
          case "xhs":
            return xhs;
          case "tt":
            return tt;
          case "ks":
            return ks;
          default:
            return window;
        }
      }
      var l = o("QxN7");
      function d(t) {
        l.cache.set(l.CACHE_BEHAVIOR_CRYPTO_INFO, { publicKey: t });
      }
      function h(t, e) {
        if (!t) return t;
        for (
          var o = l.cache.get(l.CACHE_BEHAVIOR_CRYPTO_INFO),
            a = "object" == typeof t ? JSON.stringify(t) : t,
            r = [],
            i = 0;
          i < (null == a ? void 0 : a.length);

        )
          r.push(a.slice(i, (i += 117)));
        return r.map(function (t) {
          return e.rsa.encrypt(Object(n.__assign)({ data: t }, o));
        });
      }
      function f(t) {
        return decodeURIComponent(t.split("").reverse().join(""));
      }
      var g = f(
          "nosj.tpo-nekot-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%tropssapF2%"
        ),
        m = f(
          "nosj.tpo-atad-ahctpac-roivaheb-kcehcF2%ahctpacF2%ipaF2%tropssapF2%"
        ),
        v = f("nosj.atad-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%tropssapF2%"),
        y = (function () {
          function t() {
            (this.userDataList = []), this.init();
          }
          return (
            (t.prototype.init = function () {
              this.userDataList = [];
            }),
            (t.prototype.move = function (t) {
              var e = t.x,
                o = t.y;
              this.userDataList.length > 300 ||
                this.userDataList.push({ x: e, y: o, t: Date.now() });
            }),
            (t.prototype.end = function (t) {
              var e = t.left,
                o = t.top;
              if (!(this.userDataList.length < 5)) {
                var n = [];
                return (
                  this.userDataList.reduce(function (t, a, r) {
                    return (
                      1 === r &&
                        n.push({
                          mx: Math.ceil(t.x - e),
                          my: Math.ceil(t.y - o),
                          ts: t.t,
                        }),
                      n.push({
                        mx: Math.ceil(a.x - t.x),
                        my: Math.ceil(a.y - t.y),
                        ts: Math.ceil(a.t - t.t),
                      }),
                      a
                    );
                  }),
                  this.init(),
                  n
                );
              }
              this.init();
            }),
            t
          );
        })();
      function b(t, e, o, a) {
        return (
          void 0 === o && (o = 0),
          Object(n.__awaiter)(this, void 0, void 0, function () {
            return Object(n.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return o ? [4, s(o)] : [3, 2];
                case 1:
                  n.sent(), (n.label = 2);
                case 2:
                  return (
                    l.platform
                      .selectBoundingClientRect(a, "#" + t)
                      .then(function (t) {
                        if (t && 0 !== t.length) {
                          var o = t[0] || {},
                            n = o.left,
                            a = o.right,
                            r = o.top,
                            i = o.bottom,
                            s = o.width,
                            c = o.height;
                          e({
                            left: n,
                            right: a,
                            top: r,
                            bottom: i,
                            width: s,
                            height: c,
                          });
                        }
                      }),
                    [2]
                  );
              }
            });
          })
        );
      }
      function w(t, e) {
        return new Promise(function (o) {
          if (t.detail) {
            var n = t.detail;
            o({ width: n.width, height: n.height });
          } else if (t.target) {
            var a = t.target;
            o({ width: a.width, height: a.height });
          } else o(e);
        });
      }
    },
    EbiH: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.concat = e.omit = void 0);
      var n = o("bb6g");
      (e.omit = function (t, e) {
        var o = {};
        for (var n in ((e = Array.prototype.concat(e)), t))
          e.indexOf(n) < 0 && (o[n] = t[n]);
        return o;
      }),
        (e.concat = function (t, e) {
          return (
            void 0 === t && (t = {}),
            void 0 === e && (e = {}),
            n.__assign(n.__assign({}, t), e)
          );
        });
    },
    Eivg: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = o("OT4g");
      Object.defineProperty(e, "safeLog", {
        enumerable: !0,
        get: function () {
          return n.safeLog;
        },
      });
    },
    EtsA: function (t, e, o) {
      o.d(e, "a", function () {
        return a;
      });
      var n = o("jA1y"),
        a = (t) =>
          Object(n.c)({ path: "/wscshop/weapp/getMpLive.json", data: t });
    },
    EyoS: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.resolveTeeAPI = void 0);
      var n = o("QxN7");
      e.resolveTeeAPI = function () {
        return new Promise(function (t, e) {
          var o = n.cache.get("CACHE_PASSPORT_TEE_API");
          if (o) return t(o);
          e("no_cache");
        });
      };
    },
    FyaD: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createComponent = void 0);
      var n = o("bb6g"),
        a = o("EbiH");
      e.createComponent = function (t, e) {
        return (
          void 0 === e && (e = {}),
          {
            props: n.__assign(n.__assign({}, t.props || {}), e.props || {}),
            data: function () {
              return n.__assign(n.__assign({}, t.data), e.data || {});
            },
            watch: n.__assign({}, t.watch || {}),
            methods: n.__assign(
              n.__assign(
                n.__assign(
                  {},
                  a.omit(t, [
                    "props",
                    "data",
                    "created",
                    "mounted",
                    "destroyed",
                    "watch",
                  ])
                ),
                e.methods || {}
              ),
              {
                setValue: function (t) {
                  var e = this;
                  Object.keys(t).forEach(function (o) {
                    e[o] = t[o];
                  });
                },
                getData: function () {
                  return this;
                },
                invokeEvent: function (t, e) {
                  this.$emit(t, e);
                },
                getEventParams: function (t) {
                  return t;
                },
              }
            ),
            created: function () {
              e.created && e.created(), t.created && t.created.call(this);
            },
            mounted: function () {
              e.mounted && e.mounted(), t.mounted && t.mounted.call(this);
            },
            destroyed: function () {
              e.destroyed && e.destroyed(),
                t.destroyed && t.destroyed.call(this);
            },
          }
        );
      };
    },
    HaEp: function (t, e, o) {
      var n = o("eijD"),
        a = o("Fcif"),
        r = o("8B9M"),
        i = o("a/Yq"),
        s = Object(r.a)(),
        c = function (t, e) {
          void 0 === t && (t = {});
          var o = Object(i.a)(e);
          return (
            (t = Object(a.a)(
              {
                config: { skipShopInfo: !0 },
                method: "POST",
                header: Object(a.a)(
                  { "content-type": "application/x-www-form-urlencoded" },
                  o.header
                ),
                origin: "uic",
                data: {},
                success: () => {},
                fail: () => {},
              },
              t
            )),
            s.request(t)
          );
        };
      function u() {
        return (u = Object(n.a)(function* (t, e, n, a) {
          var r = yield o
            .e("packages/async-main/chunk")
            .then(o.t.bind(null, "sbP3", 7));
          return (
            (t.password = r.aes.legacyEncrypt(t.password)),
            c(
              {
                origin: "uic",
                path: "/passport/weapp/login/password.json",
                data: t,
                success: (t) => {
                  e(t);
                },
                fail: n,
              },
              a
            )
          );
        })).apply(this, arguments);
      }
      e.a = {
        loginByPassword: function (t, e, o, n) {
          return u.apply(this, arguments);
        },
      };
    },
    JhDH: function (t, e, o) {
      o.d(e, "a", function () {
        return n;
      }),
        o.d(e, "b", function () {
          return a;
        }),
        o.d(e, "i", function () {
          return r;
        }),
        o.d(e, "d", function () {
          return s;
        }),
        o.d(e, "f", function () {
          return c;
        }),
        o.d(e, "c", function () {
          return i;
        }),
        o.d(e, "g", function () {
          return u;
        }),
        o.d(e, "e", function () {
          return l;
        }),
        o.d(e, "h", function () {
          return p;
        });
      var n = "https://img01.yzcdn.cn/weapp/wsc/4FKy95.png",
        a = "salesman-icon",
        r = "https://img01.yzcdn.cn/weapp/wsc/xJSlFGL.png",
        i = { Home: 1, Other: 3 },
        s = { GUIDE: 1, SALESMAN: 2 },
        c = { SHOW_PANEL: "SHOW_PANEL", DRAW_POSTER: "DRAW_POSTER" },
        u = {
          [i.Home]: [
            /^(packages|pages)\/home\/dashboard/,
            /^packages\/tee-home|ext-home\/dashboard/,
          ],
          [i.Other]: [
            /^(packages|pages)\/home\/feature/,
            /^packages\/tee-home|ext-home\/feature/,
            /^(packages|pages)\/home\/tab/,
            /^packages\/showcase-template\/index/,
            /^packages\/ext-home\/tab\/(one|two|three)/,
          ],
        },
        p = "showShareImageMenu:fail cancel",
        l = { [i.Home]: "homepage", [i.Other]: "micropage" };
    },
    NG5q: function (t, e, o) {
      var n = o("Fcif"),
        a = o("8B9M"),
        r = o("a/Yq"),
        i = Object(a.a)(),
        s = function (t, e) {
          void 0 === t && (t = {});
          var o = Object(r.a)(e);
          return (
            (t = Object(n.a)(
              {
                config: { skipShopInfo: !0 },
                method: "POST",
                header: Object(n.a)(
                  { "content-type": "application/x-www-form-urlencoded" },
                  o.header
                ),
                origin: "uic",
                data: {},
                success: () => {},
                fail: () => {},
              },
              t
            )),
            i.request(t)
          );
        };
      e.a = {
        fetchCode: function (t, e, o, a) {
          return s(
            {
              origin: "uic",
              pathname: "/passport/weapp/login/sms.json",
              path: "/passport/weapp/login/sms.json",
              data: Object(n.a)({ countryCode: "+86" }, t, {
                sessionId: i.getSessionId(),
              }),
              success: (t) => {
                e(t);
              },
              fail: o,
            },
            a
          );
        },
        loginBySms: function (t, e, o, n) {
          return s(
            {
              origin: "uic",
              pathname: "/passport/login.json",
              path: "/passport/login.json",
              data: t,
              success: (t) => {
                e(t);
              },
              fail: o,
            },
            n
          );
        },
      };
    },
    ORXP: function (t, e, o) {
      function n() {
        (this.onSuccess = function (t) {}),
          (this.onFail = function () {}),
          (this.onCancel = function () {}),
          (this.bizType = "");
      }
      function a(t, e) {
        var o = Object.getOwnPropertyNames(t.prototype);
        Object.keys(e).forEach((n) => {
          -1 === o.indexOf(n) && (t.prototype[n] = e[n]);
        });
      }
      o.r(e),
        (n.prototype.check = function (t) {
          var {
            onSuccess: e,
            onFail: o,
            onCancel: n,
            bizType: a,
            bizData: r = "",
          } = t;
          if ("function" != typeof e) throw Error("onSuccess 必须为一个方法");
          var i = this;
          if (
            ((this.onSuccess = function () {
              i.hideLoading(), e(i.token);
            }),
            o)
          ) {
            if ("function" != typeof o) throw Error("onFail 必须为一个方法");
            this.onFail = o;
          }
          if (n) {
            if ("function" != typeof n) throw Error("onCancel 必须为一个方法");
            this.onCancel = n;
          }
          if (void 0 === a) throw Error("业务线类型 bizType 为必传");
          (this.bizType = a),
            (this.bizData = r),
            this.getToken().then(
              function () {
                var t = this,
                  e = {
                    token: this.token,
                    onSuccess: this.onSuccess,
                    onCancel: this.onCancel,
                    bizType: this.bizType,
                    bizData: this.bizData,
                    onFail: function (o) {
                      if ((t.hideLoading(), o.captchaType))
                        switch (o.captchaType) {
                          case 1:
                            t.slideCaptcha.startVerify(e);
                            break;
                          case 2:
                            t.clickOrTouch.startVerify(e);
                            break;
                          case -1:
                            t.slideCaptcha.hide(),
                              t.numberCaptcha.startVerify(e);
                            break;
                          default:
                            t.errorTip("没有当前类型验证码");
                        }
                      else
                        t.slideCaptcha.hide(),
                          t.numberCaptcha.hide(),
                          t.errorTip(
                            "string" == typeof o ? o : "停留时间过长，请重试"
                          ),
                          t.onFail(o);
                    },
                  };
                this.token && this.clickOrTouch.startVerify(e);
              }.bind(this)
            );
        }),
        (n.prototype.getToken = function () {}),
        (n.prototype.errorTip = function () {});
      var r = "",
        i = "";
      function s(t, e) {
        return e.aes.encrypt({ data: JSON.stringify(t), iv: i, key: r });
      }
      function c(t) {
        return decodeURIComponent(t.split("").reverse().join(""));
      }
      var u = c("moc.nazuoy.tropssapF2%F2%A3%sptth");
      try {
        wx && Page && (u = c("tropssapF2%"));
      } catch (t) {}
      var p = u + c("nosj.2v-nekot-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%"),
        l = u + c("nosj.atad-ahctpac-roivaheb-kcehcF2%ahctpacF2%ipaF2%"),
        d = u + c("nosj.atad-ahctpac-roivaheb-tegF2%ahctpacF2%ipaF2%");
      function h() {
        n.prototype.constructor.call(this);
      }
      function f() {
        (this.token = ""),
          this.onSuccess,
          this.onFail,
          this.onCancel,
          (this.now = Date.now());
      }
      (h.prototype.getToken = function () {
        this.showLoading();
        var t = this.platformRequest({
          url: p,
          method: "GET",
          data: { bizType: this.bizType, version: "1.0" },
          withCredentials: !0,
        });
        return Promise.all([
          t,
          o.e("packages/async-main/chunk").then(o.t.bind(null, "sbP3", 7)),
        ]).then((t) => {
          var [e, o] = t;
          if (200 === e.statusCode && e.data) {
            var n = e.data,
              {
                code: a,
                msg: s,
                data: { token: c, randomStr: u = "" },
              } = n;
            if (0 === a && c) {
              var [p = "", l = ""] = u.split("").reverse().join("").split("@");
              return (
                (function (t, e, o) {
                  (r = o.utils.parse(t)), (i = o.utils.parse(e));
                })(p, l, o),
                Promise.resolve((this.token = c))
              );
            }
            (this.token = ""),
              this.errorTip(s || "token 获取失败"),
              this.hideLoading();
          }
        });
      }),
        a(h, n.prototype),
        (f.prototype.getPageExposureTime = function () {
          return { start: this.now, now: Date.now() };
        }),
        (f.prototype.startVerify = function () {}),
        (f.prototype.submitUserData = function () {});
      var g = f;
      function m() {
        g.prototype.constructor.call(this),
          (this.gyroscopeTrack = []),
          (this.speedTrack = []);
      }
      (m.prototype.handlerGyroscope = function (t) {
        var { x: e, y: o, z: n } = t;
        this.gyroscopeTrack.push({ x: e, y: o, z: n, t: Date.now() });
      }),
        (m.prototype.handlerSpeed = function (t) {
          var { x: e, y: o, z: n } = t;
          this.speedTrack.push({ x: e, y: o, z: n, t: Date.now() });
        }),
        (m.prototype.getAndClearGyroscopeTrack = function () {
          var t = this.gyroscopeTrack;
          return (this.gyroscopeTrack = []), t;
        }),
        (m.prototype.getAndClearSpeedTrack = function () {
          var t = this.speedTrack;
          return (this.speedTrack = []), t;
        }),
        (m.prototype.startRecordGyroscopeTrack = function () {}),
        (m.prototype.startRecordSpeedTrack = function () {});
      var v = m;
      function y() {
        g.prototype.constructor.call(this), (this.touchData = {});
      }
      (y.prototype.startRecordTouchStart = function (t) {
        for (var e = [], o = 0, n = t.touches.length; o < n; o++) {
          var a = t.touches[o];
          e.push({ x: a.pageX, y: a.pageY, force: a.force });
        }
        this.touchData.down = { touches: e, t: Date.now() };
      }),
        (y.prototype.startRecordTouchEnd = function (t) {
          for (var e = [], o = 0, n = t.changedTouches.length; o < n; o++) {
            var a = t.changedTouches[o];
            e.push({ x: a.pageX, y: a.pageY, force: a.force });
          }
          this.touchData.up = { touches: e, t: Date.now() };
        });
      var b = y,
        w = { TENCENT: 0, SLIDE: 1, CLICK: 2, NUMBER: -1 },
        _ = o("o8v2"),
        k = w;
      class O extends g {
        constructor(t) {
          super(),
            v.prototype.constructor.call(this),
            b.prototype.constructor.call(this),
            this.startRecordGyroscopeTrack(),
            this.startRecordSpeedTrack(),
            (t.onTouchStart = (t) => this.startRecordTouchStart(t)),
            (t.onTouchEnd = (t) => this.startRecordTouchEnd(t));
        }
        startVerify(t) {
          var { token: e, onSuccess: o, onFail: n, bizType: a, bizData: r } = t;
          (this.token = e),
            (this.onSuccess = o),
            (this.onFail = n),
            (this.bizType = a),
            (this.bizData = r);
          var i = {
            touchData: this.touchData,
            gyroscopeTrack: this.getAndClearGyroscopeTrack(),
            speedTrack: this.getAndClearSpeedTrack(),
            pageExposureTime: this.getPageExposureTime(),
          };
          this.submitUserData(i);
        }
        submitUserData(t) {
          o.e("packages/async-main/chunk")
            .then(o.t.bind(null, "sbP3", 7))
            .then((e) => {
              Object(_.a)({
                url: l,
                method: "POST",
                data: {
                  token: this.token,
                  bizType: this.bizType,
                  bizData: this.bizData,
                  captchaType: k.CLICK,
                  userBehaviorData: s(t, e),
                },
              }).then((t) => {
                if (200 === t.statusCode && t.data) {
                  var e = t.data,
                    { code: o, msg: n, data: a } = e;
                  if (0 === o) {
                    var { captchaType: r, success: i } = a;
                    i ? this.onSuccess() : this.onFail({ captchaType: 1 });
                  }
                }
              });
            });
        }
        startRecordGyroscopeTrack() {
          var t = this;
          wx.startGyroscope &&
            wx.startGyroscope({
              interval: "ui",
              success() {
                wx.onGyroscopeChange(t.handlerGyroscope.bind(t));
              },
            });
        }
        startRecordSpeedTrack() {
          var t = this;
          wx.startAccelerometer &&
            wx.startAccelerometer({
              interval: "ui",
              success() {
                wx.onAccelerometerChange(t.handlerSpeed.bind(t));
              },
            });
        }
      }
      a(O, Object.assign({}, v.prototype, b.prototype));
      var C = o("eijD");
      var P = class extends g {
          constructor(t) {
            var e, o, n;
            super(),
              (e = this),
              (this.initLeft = 14),
              (this.bg_W_H_Scale = 280 / 158),
              (this.component = t),
              this.initComAndEventHandler({
                complete:
                  ((n = Object(C.a)(function* (t) {
                    return yield e.submitUserData(t);
                  })),
                  function (t) {
                    return n.apply(this, arguments);
                  }),
                fail: () => this.onFail(),
                cancel: () => {
                  this.onCancel(), this.closeSlideCaptcha();
                },
                needCaptchaData:
                  ((o = Object(C.a)(function* () {
                    try {
                      e.slideViewData = yield e.refreshSlideCaptcha();
                    } catch (t) {}
                  })),
                  function () {
                    return o.apply(this, arguments);
                  }),
              });
          }
          initComAndEventHandler(t) {
            var { complete: e, fail: o, cancel: n, needCaptchaData: a } = t;
          }
          set status(t) {
            (this._status = t), this.setStatus(t);
          }
          set slideViewData(t) {}
          get status() {
            return this._status;
          }
          setStatus(t) {}
          closeSlideCaptcha() {
            this.hide();
          }
          hide() {}
          startVerify(t) {
            var { token: e, onSuccess: o, onFail: n } = t;
          }
          show(t) {}
          submitUserData(t) {
            return Object(C.a)(function* () {})();
          }
          refreshSlideCaptcha() {
            return Object(C.a)(function* () {})();
          }
        },
        S = w;
      class E extends P {
        constructor(t) {
          super(t);
        }
        startVerify(t) {
          var {
            token: e,
            onSuccess: o,
            onFail: n,
            onCancel: a,
            bizType: r,
            bizData: i,
          } = t;
          (this.token = e),
            (this.onSuccess = o),
            (this.onFail = n),
            (this.onCancel = a),
            (this.bizType = r),
            (this.bizData = i),
            this.show();
        }
        submitUserData(t) {
          var { userDataList: e, scale: n, left: a, top: r } = t;
          o.e("packages/async-main/chunk")
            .then(o.t.bind(null, "sbP3", 7))
            .then((t) => {
              this.platformRequest({
                url: l,
                method: "POST",
                data: {
                  token: this.token,
                  bizType: this.bizType,
                  bizData: this.bizData,
                  captchaType: S.SLIDE,
                  userBehaviorData: s(
                    {
                      cx: Math.ceil(a),
                      cy: Math.ceil(r),
                      scale: n,
                      slidingEvents: e,
                    },
                    t
                  ),
                },
              })
                .then((t) => {
                  if (200 === t.statusCode && t.data) {
                    var e = t.data,
                      { code: o, data: n, msg: a } = e;
                    0 === o && n.success
                      ? ((this.status = "success"),
                        this.onSuccess(),
                        setTimeout(() => {
                          this.hide();
                        }, 500))
                      : n
                      ? n.captchaType === S.SLIDE
                        ? n && n.needRefresh
                          ? (this.status = "limit")
                          : ((this.status = "failed"),
                            setTimeout(() => {
                              this.refreshSlideCaptcha().then((t) => {
                                this.slideViewData = t;
                              });
                            }, 500))
                        : this.onFail(n)
                      : this.onFail(a);
                  }
                })
                .catch(() => {
                  this.onFail("网络异常，请稍后重试"),
                    setTimeout(() => {
                      this.hide();
                    }, 500);
                });
            });
        }
        refreshSlideCaptcha() {
          return (
            (this.status = "loading"),
            new Promise((t, e) => {
              this.platformRequest({
                url: d,
                method: "GET",
                data: { token: this.token, captchaType: S.SLIDE },
              }).then((o) => {
                if (200 === o.statusCode && o.data) {
                  var n = o.data,
                    { code: a, data: r, msg: i } = n;
                  if (0 === a) {
                    var { captchaObtainInfoResult: s } = r;
                    t({
                      cy: s.cy,
                      bigUrl: s.bigUrl,
                      smallUrl: s.smallUrl,
                      token: s.token,
                    }),
                      setTimeout(() => {
                        this.status = "ready";
                      }, 400);
                  } else
                    void 0 !== r.captchaType
                      ? this.onFail(r)
                      : i && ((this.status = "exception"), e(i));
                }
              });
            })
          );
        }
      }
      class T extends E {
        constructor(t) {
          super(t);
        }
        initComAndEventHandler(t) {
          var { complete: e, fail: o, cancel: n, needCaptchaData: a } = t;
          (this.component.onComplete = e),
            (this.component.onFail = o),
            (this.component.onCancel = n),
            (this.component.onNeedCaptchaData = a);
        }
        platformRequest(t) {
          return void 0 === t && (t = {}), Object(_.a)(t);
        }
        set status(t) {
          this.component.setData({ status: t });
        }
        set slideViewData(t) {
          this.component.setSlideViewData(
            Object.assign(t, {
              initLeft: this.initLeft,
              bgWhScale: this.bg_W_H_Scale,
            })
          );
        }
        show() {
          this.component.show(),
            this.refreshSlideCaptcha().then((t) => {
              this.slideViewData = t;
            });
        }
        hide() {
          this.component.hide();
        }
      }
      var D = class extends g {
        constructor() {
          var t, e, o;
          super(),
            (t = this),
            this.initComAndEventHandler({
              complete:
                ((o = Object(C.a)(function* (e) {
                  return yield t.submitUserData(e);
                })),
                function (t) {
                  return o.apply(this, arguments);
                }),
              fail: () => this.onFail(),
              cancel: () => {
                this.onCancel(), this.closeNumberCaptcha();
              },
              needCaptchaData:
                ((e = Object(C.a)(function* () {
                  try {
                    t.imgBase64 = yield t.refreshNumberCaptcha();
                  } catch (t) {}
                })),
                function () {
                  return e.apply(this, arguments);
                }),
            });
        }
        initComAndEventHandler(t) {
          var { complete: e, fail: o, cancel: n, needCaptchaData: a } = t;
        }
        set imgBase64(t) {}
        closeNumberCaptcha() {
          this.hide();
        }
        hide() {}
        startVerify(t) {
          var { token: e, onSuccess: o, onFail: n } = t;
        }
        show(t) {}
        submitUserData(t) {
          return Object(C.a)(function* () {})();
        }
        refreshNumberCaptcha() {
          return Object(C.a)(function* () {})();
        }
      };
      class x extends D {
        startVerify(t) {
          var { token: e, onSuccess: o, onFail: n, onCancel: a } = t;
          (this.token = e),
            (this.onSuccess = o),
            (this.onFail = n),
            (this.onCancel = a),
            this.show();
        }
      }
      var A = w;
      class I extends x {
        constructor(t) {
          super(), (this.behavior = t);
        }
        initComAndEventHandler(t) {
          var { complete: e, fail: o, cancel: n, needCaptchaData: a } = t;
        }
        refreshNumberCaptcha() {
          var t = this.behavior.component,
            e = this;
          wx.request({
            url: d,
            method: "GET",
            data: { token: this.token, captchaType: A.NUMBER },
            success(o) {
              if (200 === o.statusCode && o.data) {
                var n = o.data,
                  { data: a, msg: r } = n;
                a.captchaType === A.NUMBER
                  ? (t.showNumber(), t.setData({ numberImg: a.imgBase64 }))
                  : e.onFail(a);
              }
            },
          });
        }
        submitUserData(t) {
          var e = this.behavior.component,
            o = this,
            n = () => {
              this.onSuccess(),
                setTimeout(() => {
                  this.hide();
                }, 500);
            };
          if (/^http/.test(e.data.numberImg)) return n();
          wx.request({
            url: l,
            method: "POST",
            data: {
              token: this.token,
              captchaType: A.NUMBER,
              userBehaviorData: t,
            },
            success(t) {
              if (200 === t.statusCode && t.data) {
                var e = t.data,
                  { code: a, data: r, msg: i } = e;
                0 === a && r.success
                  ? n()
                  : r
                  ? (o.behavior.errorTip("验证码校验失败，请重新输入"),
                    r.captchaType === A.NUMBER
                      ? setTimeout(() => {
                          o.refreshNumberCaptcha();
                        }, 500)
                      : o.onFail(r))
                  : o.onFail(i);
              }
            },
          });
        }
        show() {
          this.refreshNumberCaptcha();
        }
        hide() {
          this.behavior.component.handleClose();
        }
      }
      class j {
        constructor() {
          h.prototype.constructor.call(this), (this.initialized = !1);
        }
        platformRequest(t) {
          return void 0 === t && (t = {}), Object(_.a)(t);
        }
        showLoading() {
          wx.showLoading();
        }
        hideLoading() {
          wx.hideLoading();
        }
        errorTip(t) {
          wx.showToast({ title: t, icon: "none" });
        }
      }
      a(j, h.prototype);
      var L = new j(),
        R = function (t) {
          var {
            onSuccess: e,
            onFail: o,
            onCancel: n,
            bizType: a,
            bizData: r,
          } = t;
          L.slideCaptcha &&
            L.clickOrTouch &&
            L.check({
              bizType: a,
              bizData: r,
              onSuccess: e,
              onFail: o,
              onCancel: n,
            });
        };
      R.init = (t) => {
        if (!L.initialized) {
          var e;
          if (t) e = t.selectComponent("#behavior-verify");
          else {
            var o = getCurrentPages(),
              n = o.length ? o[o.length - 1] : null;
            if (!n) return;
            e = n.selectComponent("#behavior-verify");
          }
          if (e) {
            var a = e.selectComponent("#slide-captcha"),
              r = e.selectComponent("#number-captcha");
            (L.slideCaptcha = new T(a)),
              (L.numberCaptcha = new I({ component: r })),
              (L.clickOrTouch = new O(e)),
              (L.initialized = !0);
          }
        }
      };
      e.default = R;
    },
    OT4g: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.safeLog = void 0);
      var n = o("QxN7");
      Object.defineProperty(e, "safeLog", {
        enumerable: !0,
        get: function () {
          return n.safeLog;
        },
      });
    },
    PjiT: function (t, e, o) {
      e.a = { DEFAULT_DIALOG_ID: "__getPhoneNumber-login-combine-dialog" };
    },
    QQdI: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isYZ = void 0),
        (e.isYZ = function () {
          return /\.youzan\.com$/.test(window.location.host);
        });
    },
    ROCX: function (t, e, o) {
      o.d(e, "c", function () {
        return w;
      }),
        o.d(e, "h", function () {
          return v;
        }),
        o.d(e, "k", function () {
          return y;
        }),
        o.d(e, "l", function () {
          return _;
        }),
        o.d(e, "n", function () {
          return k;
        }),
        o.d(e, "g", function () {
          return O;
        }),
        o.d(e, "f", function () {
          return P;
        }),
        o.d(e, "i", function () {
          return S;
        }),
        o.d(e, "b", function () {
          return E;
        }),
        o.d(e, "e", function () {
          return C;
        }),
        o.d(e, "j", function () {
          return T;
        }),
        o.d(e, "d", function () {
          return D;
        }),
        o.d(e, "o", function () {
          return x;
        });
      var n = o("Fcif"),
        a = o("RY8z");
      o.d(e, "m", function () {
        return a.a;
      });
      var r = o("sTle"),
        i = o("jA1y"),
        s = o("VQj9");
      o.d(e, "a", function () {
        return s.a;
      });
      var c = o("WOkX"),
        u = o("ycnm"),
        p = o("AIOl"),
        l = o("JhDH"),
        d = getApp(),
        h = 6,
        f = 21,
        g = 14,
        m = {
          item_goods: f,
          feature_page: h,
          home_page: h,
          lottery: h,
          benefit_card: f,
        };
      function v(t) {
        return m[t] || g;
      }
      function y(t) {
        var e = [];
        return (
          t.forEach((t) => {
            Array.isArray(t)
              ? e.push(y(t))
              : t in u.i
              ? e.push(u.i[t])
              : e.push(t);
          }),
          (e = (function t(e, o) {
            void 0 === e && (e = []), void 0 === o && (o = []);
            var n = [];
            return (
              e.forEach((e) => {
                Array.isArray(e)
                  ? n.push(t(e, o))
                  : -1 === o.indexOf(e) && n.push(e);
              }),
              n
            );
          })(e, u.h))
        );
      }
      var b,
        w =
          ((b = 0),
          function t(e, o) {
            return (
              o ||
                ((o = e),
                (e = "/wscsalesman/poster-service/create-poster.json")),
              Object(i.c)({ path: e, query: o }).catch((a) =>
                0 === b
                  ? ((b = 1), t(e, Object(n.a)({}, o, { retry: b })))
                  : Promise.reject(a)
              )
            );
          });
      function _(t) {
        return new Promise((e, o) => {
          wx.downloadFile({
            url: t,
            success: (t) => {
              e(t.tempFilePath);
            },
            fail: (t) => {
              o(t);
            },
          });
        });
      }
      function k(t) {
        return new Promise((e, o) => {
          wx.saveImageToPhotosAlbum({ filePath: t, success: e, fail: o });
        });
      }
      function O() {
        var t = getCurrentPages() || [];
        return t[t.length - 1] || {};
      }
      function C(t, e) {
        void 0 === t && (t = {}), void 0 === e && (e = {});
        var o = e.goodsAlias || e.alias;
        o && (t.alias = o);
        var { goodsActivityInfo: n } = e;
        if (!n) return t;
        var a = t.activityId || n.activityId,
          r = t.type || n.activityType,
          i = n.activityAlias || e.activityAlias;
        if (a || r) {
          var s = r;
          "helpCut" === s || 21 === s
            ? ((t.activityType = "helpCut"),
              (t.umpType = "helpCut"),
              (t.activityId = a))
            : "seckill" === s || 6 === s
            ? ((t.umpType = "seckill"),
              (t.activityType = "seckill"),
              (t.umpAlias = i),
              (t.activityId = ""))
            : ((t.activityId = a), (t.activityType = r));
        }
        return t;
      }
      function P(t, e) {
        void 0 === e && (e = {});
        var o = C(e, this.data.goodsInfo);
        e.refUrl && delete e.refUrl;
        var a = Object(n.a)(
          {},
          e,
          { guestKdtId: d.getKdtId() },
          o,
          Object(c.c)({ sl: this.data.shareData.seller })
        );
        return Object(r.b)(t, a).catch((t) => {
          wx.showToast({
            title: t.message || t.msg || "获取二维码失败",
            icon: "none",
          });
        });
      }
      function S(t) {
        return new Promise((e) => {
          wx.getImageInfo({
            src: t,
            success: (t) => {
              e(t);
            },
          });
        });
      }
      function E(t) {
        if (!Array.isArray(t))
          throw new TypeError("Handlers stack must be an array!");
        for (var e of t)
          if ("function" != typeof e)
            throw new TypeError("Handler must be composed of functions!");
        return function (e) {
          var o = -1;
          return (function n(a) {
            if (a <= o)
              return Promise.reject(new Error("next() called multiple times"));
            o = a;
            var r = t[a];
            if ((a === t.length && (r = e), !r)) return Promise.resolve();
            try {
              return Promise.resolve(r(() => n(a + 1)));
            } catch (t) {
              return Promise.reject(t);
            }
          })(0);
        };
      }
      function T(t) {
        void 0 === t && (t = {});
        var e = [],
          o = {
            copy_0: "文案/链接复制失败",
            copy_1: "文案/链接已复制",
            material_0: "素材分享到动态失败",
            material_1: "素材已分享到动态",
            image_0: "图片保存到相册失败",
            image_1: "图片已保存到相册",
          };
        return (
          Object.keys(t).forEach((n) => {
            e.push({ type: n, state: t[n], text: o[n + "_" + t[n]] });
          }),
          e
        );
      }
      function D(t) {
        var e = [];
        return (
          t.forEach((t) => {
            Array.isArray(t) ? e.push(D(t)) : "zoom" !== t && e.push(t);
          }),
          e
        );
      }
      var x = (t, e, o) => {
        d.downloadFile({
          url: t,
          success: (t) => {
            wx.showShareImageMenu({
              path: t.tempFilePath,
              needShowEntrance: !0,
              entrancePath: e,
              success: () => {},
              fail: (t) => {
                Object(p.a)({
                  extra: { msg: "赚字微信图片分享-调用SDK方法失败", err: t },
                }),
                  (t && t.errMsg === l.h) || o();
              },
            });
          },
          fail: (t) => {
            Object(p.a)({
              extra: { msg: "赚字微信图片分享-图片下载失败", err: t },
            }),
              o();
          },
        });
      };
    },
    SdHa: function (t, e, o) {
      o.d(e, "a", function () {
        return r;
      });
      var n = o("a1Mm"),
        a = {};
      function r(t) {
        return a[t] || (a[t] = Object(n.a)(t, "!200x200.jpg")), a[t];
      }
    },
    Sx60: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.formatProtocolCode = void 0);
      var n = o("bb6g");
      e.formatProtocolCode = function (t) {
        return t ? n.__spreadArrays(t).sort().join(",") : "";
      };
    },
    SyLL: function (t, e, o) {
      o.d(e, "c", function () {
        return m;
      }),
        o.d(e, "b", function () {
          return v;
        }),
        o.d(e, "d", function () {
          return y;
        }),
        o.d(e, "a", function () {
          return b;
        });
      var n = o("E6qs"),
        a = o("bb6g"),
        r = (function () {
          function t() {
            this.now = Date.now();
          }
          return (
            (t.prototype.getPageExposureTime = function () {
              return { start: this.now, now: Date.now() };
            }),
            t
          );
        })(),
        i = (function () {
          function t() {
            (this.gyroscopeTrack = []), (this.speedTrack = []);
          }
          return (
            (t.prototype.handlerGyroscope = function (t) {
              var e = t.x,
                o = t.y,
                n = t.z;
              this.gyroscopeTrack.push({ x: e, y: o, z: n, t: Date.now() });
            }),
            (t.prototype.handlerSpeed = function (t) {
              var e = t.x,
                o = t.y,
                n = t.z;
              this.speedTrack.push({ x: e, y: o, z: n, t: Date.now() });
            }),
            (t.prototype.getAndClearGyroscopeTrack = function () {
              var t = this.gyroscopeTrack;
              return (this.gyroscopeTrack = []), t;
            }),
            (t.prototype.getAndClearSpeedTrack = function () {
              var t = this.speedTrack;
              return (this.speedTrack = []), t;
            }),
            (t.prototype.startRecordGyroscopeTrack = function () {}),
            (t.prototype.startRecordSpeedTrack = function () {}),
            t
          );
        })(),
        s = (function () {
          function t() {
            (this.clickAreaData = []),
              (this.mouseTrackData = []),
              (this.mouseData = {}),
              (this.clickAreaData = []);
          }
          return (
            (t.prototype.getAndClearMouseTrack = function () {
              if (
                !Array.isArray(this.mouseTrackData) ||
                0 === this.mouseTrackData.length
              )
                return [];
              var t = this.mouseTrackData.reduce(function (t, e, o) {
                if (0 === o) return [e];
                var n = t.slice(-1).pop();
                return Object(a.__spreadArrays)(t, [
                  {
                    x: Math.ceil(e.x - n.x),
                    y: Math.ceil(e.y - n.y),
                    t: Math.ceil(e.t - n.t),
                  },
                ]);
              }, []);
              return (this.mouseTrackData = []), t;
            }),
            (t.prototype.startRecordClickArea = function () {
              var t = this;
              window.addEventListener(
                "click",
                function (e) {
                  if (Array.isArray(e.path) && e.path.length > 0) {
                    for (var o = e.path, n = void 0, a = []; (n = o.pop()); )
                      "function" == typeof n.getBoundingClientRect &&
                        a.push(
                          JSON.parse(JSON.stringify(n.getBoundingClientRect()))
                        );
                    var r = window.innerHeight,
                      i = window.innerWidth;
                    a.push({
                      bottom: r,
                      height: r,
                      left: 0,
                      right: i,
                      top: 0,
                      width: i,
                      x: 0,
                      y: 0,
                    }),
                      (t.clickAreaData = a.reverse());
                  }
                },
                !0
              );
            }),
            (t.prototype.startRecordClick = function () {
              var t = this;
              window.addEventListener(
                "mousedown",
                function (e) {
                  t.mouseData.down = { x: e.pageX, y: e.pageY, t: Date.now() };
                },
                !0
              ),
                window.addEventListener(
                  "mouseup",
                  function (e) {
                    t.mouseData.up = { x: e.pageX, y: e.pageY, t: Date.now() };
                  },
                  !0
                );
            }),
            (t.prototype.startRecordMouseTrack = function () {
              var t = this;
              window.addEventListener(
                "mousemove",
                function (e) {
                  t.mouseTrackData.push({
                    x: e.pageX,
                    y: e.pageY,
                    t: Date.now(),
                  });
                },
                !0
              );
            }),
            (t.prototype.startRecordListener = function () {
              this.startRecordClickArea(),
                this.startRecordClick(),
                this.startRecordMouseTrack();
            }),
            t
          );
        })(),
        c = (function () {
          function t() {
            this.touchData = {};
          }
          return (
            (t.prototype.startRecordTouchStart = function (t) {
              var e = Array.prototype.slice.call(t.touches).map(function (t) {
                return { x: t.pageX, y: t.pageY, force: t.force };
              });
              this.touchData.down = { touches: e, t: Date.now() };
            }),
            (t.prototype.startRecordTouchEnd = function (t) {
              var e = Array.prototype.slice
                .call(t.changedTouches)
                .map(function (t) {
                  return { x: t.pageX, y: t.pageY, force: t.force };
                });
              this.touchData.up = { touches: e, t: Date.now() };
            }),
            t
          );
        })(),
        u = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return Object.assign(e, new i(), new s(), new c()), e;
          }
          return Object(a.__extends)(e, t), e;
        })(r),
        p = u,
        l = function (t) {
          Object.getOwnPropertyNames(t).forEach(function (e) {
            u.prototype[e] = t[e];
          });
        };
      l(i.prototype),
        l(s.prototype),
        l(c.prototype),
        (u.prototype.constructor = u);
      var d = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return e.startRecordGyroscopeTrack(), e.startRecordSpeedTrack(), e;
          }
          return (
            Object(a.__extends)(e, t),
            (e.prototype.startRecordGyroscopeTrack = function () {
              var t = this,
                e = Object(n.f)();
              e.startGyroscope &&
                e.startGyroscope({
                  interval: "ui",
                  success: function () {
                    e.onGyroscopeChange(function (e) {
                      var o = e.x,
                        n = e.y,
                        a = e.z;
                      return t.handlerGyroscope({ x: o, y: n, z: a });
                    });
                  },
                  fail: function () {},
                });
            }),
            (e.prototype.startRecordSpeedTrack = function () {
              var t = this,
                e = Object(n.f)();
              e.startAccelerometer &&
                e.startAccelerometer({
                  interval: "ui",
                  success: function () {
                    e.onAccelerometerChange(function (e) {
                      var o = e.x,
                        n = e.y,
                        a = e.z;
                      return t.handlerSpeed({ x: o, y: n, z: a });
                    });
                  },
                  fail: function () {},
                });
            }),
            (e.prototype.getUserBehaviorData = function () {
              return {
                tempTouchData: this.touchData,
                tempGyroscopeData: this.getAndClearGyroscopeTrack(),
                tempSpeedData: this.getAndClearSpeedTrack(),
                tempPageData: this.getPageExposureTime(),
              };
            }),
            e
          );
        })(p),
        h = o("QxN7"),
        f = o("9ZMt"),
        g = h.platform.authLogger.logSkynet,
        m = (function () {
          function t() {}
          return (
            (t.prototype.behaviorInit = function (t) {
              if (!t) throw Error("行为组件实例为必传");
              (this.comInstance = t),
                (this.drag = new n.a()),
                (this.clickOrTouch = new d());
            }),
            (t.prototype.behaviorVerify = function (t) {
              var e = t.bizType,
                o = t.bizData,
                n = t.onSuccess,
                a = t.onFail,
                r = t.onError,
                i = t.onCancel;
              if (void 0 === e) throw Error("业务线类型 bizType 为必传");
              if (
                (g("行为组件behaviorVerify调用：", { bizType: e, bizData: o }),
                !this.comInstance)
              )
                throw Error("业务线类型 bizType 为必传");
              (this.bizType = e),
                (this.bizData = o),
                (this.onSuccess = n),
                (this.onFail = a),
                (this.onError = r),
                (this.onCancel = i),
                this.comInstance.getToken();
            }),
            (t.prototype.behaviorHide = function () {
              this.comInstance.hide();
            }),
            (t.getInstance = function () {
              var e = f.default.getGlobal("behaviorInstance");
              return (
                e ||
                ((e = new t()), f.default.setGlobal("behaviorInstance", e), e)
              );
            }),
            t
          );
        })().getInstance();
      function v(t) {
        m.behaviorInit(t);
      }
      function y(t) {
        m.behaviorVerify(t);
      }
      function b() {
        m.behaviorHide();
      }
    },
    Syp2: function (t, e, o) {
      function n(t) {
        return t > 9 ? "" + t : "0" + t;
      }
      function a(t) {
        return t ? new Date(t.replace(/-/g, "/")).getTime() : null;
      }
      function r(t, e) {
        if ((void 0 === e && (e = "date"), !t)) return "";
        var o = new Date(t),
          a = o.getFullYear(),
          r = o.getMonth() + 1,
          i = o.getDate(),
          s = a + "-" + n(r) + "-" + n(i);
        if ("datetime" === e) {
          var c = o.getHours(),
            u = o.getMinutes();
          s += " " + n(c) + ":" + n(u);
        }
        return s;
      }
      o.d(e, "a", function () {
        return a;
      }),
        o.d(e, "b", function () {
          return r;
        });
    },
    WJU9: function (t, e, o) {
      o.d(e, "a", function () {
        return s;
      });
      var n = o("Fcif"),
        a = o("0Ckh"),
        r = [a.f.HOME, a.f.GOODS_DETAIL, a.f.GOODS_GROUP, a.f.FEATURE],
        i = getApp();
      class s {
        constructor() {
          this.iconList = [];
        }
        getExtraIconList(t) {
          return (
            (this.pageType = t),
            (this.iconList.length = 0),
            [this.getGoodsShowcaseIcon()]
          );
        }
        getGoodsShowcaseIcon() {
          return r.indexOf(this.pageType) > -1
            ? i
                .request({
                  path: "/wscstatcenter/recommend/float-goods.json",
                  data: { kdtId: i.getKdtId(), pageType: this.pageType },
                })
                .then((t) => {
                  var { iconData: e } = t || {};
                  return (
                    e &&
                      this.setIcon({
                        priority: a.b.GOODS_SHOWCASE,
                        detail: Object(n.a)({}, e, {
                          independent: !0,
                          navType: a.i.GOODS_SHOWCASE,
                          customClass: "goods-showcase-icon",
                        }),
                      }),
                    e
                  );
                })
                .catch((t) => t)
            : Promise.resolve();
        }
        processNavData(t) {
          var { mainFloatingNav: e, subFloatingNavs: o = [] } = t,
            n = o.find((t) => t.navType == a.i.WECHAT_VIDEO);
          if (
            ((o = o.filter((t) => t.navType != a.i.WECHAT_VIDEO)),
            this.iconList.length)
          ) {
            this.iconList.sort((t, e) => e.priority - t.priority);
            var r = this.iconList.map((t) => t.detail);
            o.unshift(...r),
              (e = e || {
                floatingMode: 1,
                foldedIconUrl:
                  "//img01.yzcdn.cn/public_files/2018/08/29/2e21a3be2d6815acc4bc915484733c78.png",
                unfoldedIconUrl:
                  "//img01.yzcdn.cn/public_files/2018/08/29/6256e71064c9f5ebe30bdd796957ee7a.png",
              });
          }
          return { liveNav: n, mainFloatingNav: e, subFloatingNavs: o };
        }
        setIcon(t) {
          void 0 === t && (t = {}), this.isValid(t) && this.iconList.push(t);
        }
        isValid(t) {
          if (
            (void 0 === t && (t = {}),
            "[object Object]" !== Object.prototype.toString.call(t))
          )
            throw new Error("添加的图标必须为一个对象类型");
          var { priority: e, detail: o } = t;
          if (void 0 === e || void 0 === o)
            throw new Error("添加的图标对象必须有优先级和详细信息");
          return !0;
        }
      }
    },
    WaS2: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ProtocolPopupComponent = e.popupProps = void 0);
      var n = o("bb6g"),
        a = o("QxN7"),
        r = o("CV91"),
        i = o("gyjr"),
        s = o("6K+Q"),
        c = n.__importDefault(o("rpEd")),
        u = a.platform.authLogger,
        p = a.hooks.protocolHook;
      e.popupProps = {
        code: {
          type: Array,
          default: function () {
            return [];
          },
        },
        theme: String,
        popupCustomStyle: { type: String, default: "" },
        contentCustomStyle: { type: String, default: "" },
        zIndex: { type: Number, default: 10100 },
        btnConfig: {
          type: Object,
          default: function () {
            return {
              agreeBtn: "",
              disagreeBtn: "",
              hideDisagree: !1,
              customStyle: "",
            };
          },
        },
        visible: { type: Boolean, default: !1 },
        controlled: { type: Boolean, default: !1 },
        ready: { type: Boolean, default: !1 },
        useNativeSlot: { type: Boolean, default: !1 },
        needSkipSigned: { type: Boolean, default: !0 },
        useUIComponentSlot: { type: Boolean, default: !1 },
        duration: { type: Number, default: 300 },
        source: {
          type: String,
          default: function () {
            return "@npm/protocol_" + Date.now();
          },
        },
        hooks: Object,
      };
      var l = (function (t) {
        function o() {
          var o = (null !== t && t.apply(this, arguments)) || this;
          return (
            (o.props = e.popupProps),
            (o.data = {
              loading: !1,
              sign: [],
              modify: [],
              protocols: [],
              actionClass: "",
              agreeBtnCls: "action__btn agree agree-block-preset",
              disagreeBtnCls: "action__btn disagree disagree-block-preset",
              show: !1,
              needPlatformPrivacyAuth: !1,
              agreeBtnId: "protocol-agree-btn_" + Date.now(),
              disagreeBtnId: "protocol-disagree-btn_" + Date.now(),
              protocolStatus: !0,
              color: "#679FFF26",
            }),
            (o.watch = {
              code: function () {
                this.getProtocolData();
              },
              theme: function () {
                this.updateStyle();
              },
              visible: function (t) {
                this.updateVisible(t);
              },
            }),
            o
          );
        }
        return (
          n.__extends(o, t),
          (o.prototype.created = function () {
            this.updateStyle(),
              this.getData().visible && this.updateVisible(!0);
          }),
          (o.prototype.destroyed = function () {
            this.getData().show && this.invoke().offsetVisibleCount(-1);
          }),
          (o.prototype.invoke = function () {
            return new c.default({ source: this.getData().source });
          }),
          (o.prototype.updateStyle = function () {
            var t = this.getData().theme || "#679FFF26",
              e = "#679FFF26" === t;
            this.setValue({
              color: t,
              agreeBtnCls: e
                ? "action__btn agree agree-block-preset"
                : "action__btn agree",
              disagreeBtnCls: e
                ? "action__btn disagree disagree-block-preset"
                : "action__btn disagree",
            });
          }),
          (o.prototype.getNeedPrivacyAuth = function () {
            var t = this;
            return a.platform.needPrivacyAuth().then(function (e) {
              t.setValue({ needPlatformPrivacyAuth: e });
            });
          }),
          (o.prototype.getProtocolData = function () {
            var t = this,
              e = this.getData(),
              o = e.code,
              n = e.btnConfig;
            return (
              this.setValue({
                actionClass: (null == n ? void 0 : n.hideDisagree)
                  ? "action"
                  : "action action__btn-multiple",
              }),
              i.getProtocolData(o).then(function (e) {
                var o = e.protocolData,
                  n = e.protocolSignContent,
                  a = e.protocolStatus,
                  r = [],
                  i = [];
                o.forEach(function (t) {
                  var e = t.recentHistoryAgreementSignInfo;
                  e && Object.keys(e).length ? i.push(t) : r.push(t);
                }),
                  t.setValue({
                    sign: r,
                    modify: i,
                    protocols: o,
                    protocolStatus: a,
                  }),
                  t.invokeEvent("refresh-protocol-data", {
                    sign: r,
                    modify: i,
                    protocols: o,
                    protocolSignContent: n,
                  });
              })
            );
          }),
          (o.prototype.updateVisible = function (t) {
            var e = this,
              o = this.getData().controlled;
            if (t) {
              var n = Promise.all([
                this.getNeedPrivacyAuth(),
                this.getProtocolData(),
              ]);
              o
                ? this.setValue({ show: !0 })
                : n.then(function () {
                    var t = e.getData(),
                      o = t.protocolStatus,
                      n = t.needSkipSigned,
                      a = t.protocols,
                      r = t.needPlatformPrivacyAuth,
                      i = !o || (!n && a.length) || r;
                    i ? e.setValue({ show: i }) : e.skip();
                  });
            } else this.hide();
          }),
          (o.prototype.beforeAgree = function () {
            var t = this.getData(),
              e = t.source,
              o = t.hooks;
            return a.hooks
              .executeHookAsync(
                function () {
                  return [null == o ? void 0 : o.protocolBeforeAgree]
                    .concat(p.beforeAgree.get())
                    .filter(Boolean);
                },
                [{ source: e }]
              )
              .catch(function (t) {
                throw (
                  (u.logAll({
                    errTitle: "beforeAgree执行异常",
                    errMsg: a.getErrorMsg(t),
                    err: t,
                  }),
                  t)
                );
              });
          }),
          (o.prototype.agree = function (t) {
            var e = this,
              o = this.getData(),
              n = o.sign,
              a = o.modify,
              i = o.useUIComponentSlot,
              s = o.controlled,
              c = function (t) {
                t && e.hide();
              },
              u = (t || {}).env;
            if (i && "wx" === u)
              return new Promise(function (t, o) {
                e.invokeEvent("agree", function (e) {
                  var n = e || {},
                    a = n.success,
                    r = void 0 === a || a,
                    i = n.error;
                  c(r), r ? t() : o(i);
                });
              });
            var p = n.concat(a);
            return r
              .protocolSign(
                p.map(function (t) {
                  return t.agreementTplId;
                })
              )
              .then(function () {
                return (
                  c(!s),
                  new Promise(function (t) {
                    e.invokeEvent("agree", {
                      callback: function () {
                        return t();
                      },
                    }),
                      s || t();
                  })
                );
              });
          }),
          (o.prototype.onAgree = function (t) {
            var e = this,
              o = this.getData(),
              n = o.loading,
              r = o.source,
              i = o.useUIComponentSlot,
              s = o.needPlatformPrivacyAuth,
              c = o.agreeBtnId;
            n ||
              (a.platform.canIUse(
                "button.open-type.agreePrivacyAuthorization"
              ) &&
                s &&
                !(null == t ? void 0 : t.weappProtocol)) ||
              (this.invoke().log(a.InvokeProtocolEvent.AGREE),
              this.setValue({ loading: !0 }),
              a.platform.resolvePrivacyAuth(c),
              this.beforeAgree()
                .then(function () {
                  return e.agree(t);
                })
                .catch(function (t) {
                  u.logAll({
                    errTitle: "账号协议签署异常",
                    errMsg: a.getErrorMsg(t),
                    err: t,
                    extra: { source: r, useUISlot: i },
                  });
                })
                .finally(function () {
                  e.setValue({ loading: !1 });
                }));
          }),
          (o.prototype.onPrivacyAgree = function () {
            this.onAgree({ weappProtocol: !0 });
          }),
          (o.prototype.onDisagree = function () {
            this.invoke().log(a.InvokeProtocolEvent.DISAGREE);
            var t = this.getData().disagreeBtnId;
            a.platform.rejectPrivacyAuth(t),
              this.invokeEvent("disagree"),
              this.hide();
          }),
          (o.prototype.skip = function () {
            this.invokeEvent("agree"), this.hide();
          }),
          (o.prototype.hide = function () {
            this.setValue({ show: !1 });
          }),
          (o.prototype.onPopupBeforeEnter = function () {
            this.invoke().offsetVisibleCount(1),
              this.getNeedPrivacyAuth(),
              a.platform.requirePrivacyAuth(),
              this.invokeEvent("popup-before-show");
          }),
          (o.prototype.onPopupEnter = function () {
            this.invoke().log(a.InvokeProtocolEvent.SHOW_AFTER),
              this.invokeEvent("protocol-popup-show");
          }),
          (o.prototype.onPopupBeforeLeave = function () {
            this.invoke().offsetVisibleCount(-1);
          }),
          (o.prototype.onPopupAfterLeave = function () {
            this.invoke().log(a.InvokeProtocolEvent.HIDE_AFTER),
              this.invokeEvent("popup-after-leave");
          }),
          (o.prototype.onClickOverlay = function () {
            var t = this.getData(),
              e = t.loading,
              o = t.btnConfig;
            e || (null == o ? void 0 : o.hideDisagree) || this.onDisagree();
          }),
          o
        );
      })(s.ProtocolBaseComponent);
      e.ProtocolPopupComponent = l;
    },
    Xm5j: function (t, e, o) {
      o.d(e, "b", function () {
        return r;
      }),
        o.d(e, "a", function () {
          return i;
        });
      var n = o("ROCX"),
        a = o("JhDH");
      function r(t) {
        return new Promise((e) => {
          var o = wx.createCanvasContext(a.b, this);
          Promise.all([Object(n.l)(a.a), Object(n.l)(t)]).then((t) => {
            o.drawImage(t[0], 0, 0, 300, 415),
              (o.fillStyle = "#333"),
              (o.font = "18px Arial"),
              (o.textAlign = "center"),
              o.fillText("发现一些好货，邀你一起看看", 150, 44),
              o.drawImage(t[1], 50, 125, 200, 200),
              (o.fillStyle = "#666"),
              (o.font = "14px Arial"),
              o.fillText("长按识别小程序码", 150, 347),
              o.draw(!1, () => {
                e();
              });
          });
        });
      }
      function i() {
        return new Promise((t, e) => {
          wx.canvasToTempFilePath(
            {
              canvasId: a.b,
              success: (e) => {
                t(e.tempFilePath);
              },
              fail: e,
              complete: () => {
                wx.hideLoading();
              },
            },
            this
          );
        });
      }
    },
    Ze2h: function (t, e, o) {
      var n = o("Fcif"),
        a = o("3mrM"),
        r = o("AIOl"),
        i = new a.a((t, e) => {
          var { logData: o, params: a = {} } = e;
          Object(r.b)(o, Object(n.a)({}, a, { time_difference: t }));
        });
      e.a = i;
    },
    bKR7: function (t, e, o) {
      o.d(e, "d", function () {
        return s;
      }),
        o.d(e, "a", function () {
          return c;
        }),
        o.d(e, "b", function () {
          return u;
        }),
        o.d(e, "c", function () {
          return p;
        });
      var n = o("bb6g"),
        a = o("QxN7"),
        r = o("1rIA"),
        i = o("E6qs");
      function s(t) {
        return Object(a.baseRequest)({
          path: i.h,
          origin: "uic",
          method: "GET",
          data: t,
          withCredentials: !0,
        });
      }
      function c(t) {
        return Object(a.baseRequest)({
          path: i.b,
          origin: "uic",
          method: "POST",
          data: Object(n.__assign)({ captchaType: r.a.CLICK }, t),
          withCredentials: !0,
        });
      }
      function u(t) {
        return Object(a.baseRequest)({
          path: i.b,
          origin: "uic",
          method: "POST",
          data: Object(n.__assign)({ captchaType: r.a.SLIDE }, t),
        });
      }
      function p(t) {
        return Object(a.baseRequest)({
          path: i.e,
          origin: "uic",
          method: "GET",
          data: Object(n.__assign)({ captchaType: r.a.SLIDE }, t),
          withCredentials: !0,
        });
      }
    },
    "ctd/": function (t, e, o) {
      o.d(e, "a", function () {
        return i;
      });
      var n = o("bb6g"),
        a = o("xqQ2"),
        r = (function (t) {
          function e(e) {
            var o = t.call(this, e) || this;
            return (
              (o.tracker = new a.a({
                beforeAppshow: function () {},
                beforeEnterpage: function () {},
                batch: !1,
                plat: { yai: "cashier" },
              })),
              o.tracker.appShow(),
              o.mergeParams({
                package_name: "zan-pay-weapp",
                uuid: o.tracker.getLogParams().user.uuid,
              }),
              o
            );
          }
          return Object(n.__extends)(e, t), e;
        })(o("aDHN").a);
      function i(t) {
        return new r(t);
      }
    },
    "dYp/": function (t, e, o) {
      o.d(e, "a", function () {
        return n;
      }),
        o.d(e, "f", function () {
          return a;
        }),
        o.d(e, "d", function () {
          return r;
        }),
        o.d(e, "e", function () {
          return i;
        }),
        o.d(e, "c", function () {
          return s;
        }),
        o.d(e, "b", function () {
          return c;
        });
      var n = { QUOTA_LIMIT: 0, STOCK_LIMIT: 1 },
        a = {
          id_no: "请填写身份证号",
          text: "请填写留言",
          tel: "请填写数字",
          email: "请填写邮箱",
          date: "请选择日期",
          time: "请选择时间",
          textarea: "请填写留言",
          mobile: "请填写手机号",
        },
        r = {
          id_no: "idcard",
          tel: "number",
          email: "text",
          date: "time",
          textarea: "textarea",
          mobile: "number",
        },
        i = 6,
        s = { date: "选择年月日", time: "选择时间", datetime: "选择日期时间" },
        c = { year: "年", month: "月", day: "日", hour: "时", minute: "分" };
    },
    gU5S: function (t, e, o) {
      function n(t) {
        setTimeout(() => {
          t();
        }, 1e3 / 30);
      }
      o.d(e, "a", function () {
        return n;
      });
    },
    gZDa: function (t, e, o) {
      o.d(e, "d", function () {
        return v;
      }),
        o.d(e, "b", function () {
          return b;
        }),
        o.d(e, "a", function () {
          return _;
        }),
        o.d(e, "e", function () {
          return k;
        }),
        o.d(e, "c", function () {
          return O;
        }),
        o.d(e, "f", function () {
          return P;
        });
      var n = o("Fcif"),
        a = o("2wjL"),
        r = o("Yt9W"),
        i = o("WOkX"),
        s = o("ROCX"),
        c = o("Ze2h"),
        u = o("JhDH"),
        p = o("ycnm"),
        l = o("8B9M"),
        d = o("a1Mm"),
        h = o("7sy2"),
        f = Object(l.a)(),
        g = { 598: 465.64, 557: 449.29, 545: 424.37, 505: 407.35 };
      function m(t) {
        var e = t.msg || "";
        wx.showToast({ title: e || "生成图片路径失败", icon: "none" });
      }
      function v(t) {
        var e,
          o,
          a =
            null == f || null == f.getYouZanYunSdk
              ? void 0
              : f.getYouZanYunSdk(),
          r = {
            ecloudMode: !1,
            beforeGenerateSalesmanGoodsPosterEvent: !!(null == a ||
            null == (e = a.page) ||
            null == (o = e.events)
              ? void 0
              : o.beforeGenerateSalesmanGoodsPosterEvent),
          };
        try {
          return (
            Object(h.b)({
              message: "赚字-生成海报-getPosterByYunExtension调用",
              detail: Object(n.a)({}, r),
            }),
            Promise.resolve([])
          );
        } catch (t) {
          return (
            Object(h.b)({
              message: "赚字-生成海报-getPosterByYunExtension调用报错",
              detail: Object(n.a)({ error: t }, r),
            }),
            Promise.resolve([])
          );
        }
      }
      function y(t, e, o) {
        return (
          void 0 === e && (e = !1),
          void 0 === o && (o = 0),
          f
            .request({
              path: "/wscgoods/weapp-poster/goods.json",
              data: Object(n.a)({ retry: o }, t, { noAuction: !0 }),
            })
            .catch((o) => (e ? y(t, !1, 1) : Promise.reject(o)))
        );
      }
      function b(t) {
        void 0 === t && (t = 0);
        var e = r.b.getDCPS(),
          o = f.getOfflineId(),
          { chainStoreInfo: c = {} } = f.getShopInfoSync(),
          { isMultiOnlineShop: u } = c,
          p = u ? f.getHQKdtId() : f.getKdtId(),
          { goodsInfo: l = {} } = this.data,
          { path: d } = l,
          h = d.split("?")[0],
          g = a.a.getAll(d);
        g.refUrl && delete g.refUrl,
          this.data.shareData &&
            (g = Object(n.a)(
              {},
              g,
              Object(i.c)({ sl: this.data.shareData.seller })
            )),
          (g = Object(s.e)(g, l));
        var m = Object(n.a)(
            {
              share_from: "poster",
              kdtId: String(p),
              page: h,
              guestKdtId: String(f.getKdtId()),
            },
            g,
            { dcPs: e, offlineId: o }
          ),
          { poster: v } = this.data;
        v && v.scene && (Object.assign(m, v.scene), delete v.scene);
        var y = Object(n.a)({}, g, {
          kdtId: p,
          scene: encodeURIComponent(JSON.stringify(m)),
          page: "pages/common/blank-page/index",
          sid: f.getSessionId(),
          alias: this.data.goodsInfo.alias,
          isSupportHideUserInfo: !0,
          share_cmpt: "poster",
          autoHeight: 1,
          goodsImgIndex: t,
        });
        return o && (y.offlineId = o), v && Object.assign(y, v), y;
      }
      function w() {
        for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
          e[o] = arguments[o];
        var n = b.call(this, ...e);
        return v()
          .then(
            (t) => (
              Object(h.b)({
                message: "赚字-生成海报-getPosterByYunExtension调用结果",
                detail: { res: t },
              }),
              t.length ? t[0] : y(n, !0)
            )
          )
          .then((t) => {
            if (!t.imgUrl) return Promise.reject("生成失败");
            var { shareData: e } = this.data;
            c.a.endRecordAndReportLog(u.f.DRAW_POSTER, {
              logData: p.b.drawPoster,
              params: { salesman_type: e.salesmanType },
            });
            var { height: o } = t;
            return (
              this.setYZData({ posterHeight: g[o] || o }), Object(d.a)(t.imgUrl)
            );
          })
          .catch((t) => {
            m(t);
          });
      }
      function _() {
        for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
          e[o] = arguments[o];
        return w.call(this, ...e);
      }
      function k(t) {
        return (
          wx.showLoading({ title: "保存中" }),
          Object(s.l)(t)
            .then((t) => {
              if (!t) throw new Error("图片下载失败");
              return (function t(e) {
                return Object(s.a)("scope.writePhotosAlbum")
                  .then(s.n.bind(this, e))
                  .then(() => {
                    wx.hideLoading(),
                      wx.showToast({ title: "保存成功", icon: "success" });
                  })
                  .catch(() => {
                    wx.hideLoading(),
                      wx.showModal({
                        content:
                          "需要同意将分享图片保存到相册，点击确定后跳转至设置页操作",
                        success: (o) => {
                          o.cancel ||
                            wx.openSetting({
                              success: (o) => {
                                var { authSetting: n } = o;
                                n["scope.writePhotosAlbum"] && t(e);
                              },
                            });
                        },
                      });
                  });
              })(t);
            })
            .catch((t) => {
              wx.hideLoading();
              var { errMsg: e = "" } = t || {};
              wx.showToast({ title: e, icon: "none" });
            })
        );
      }
      function O() {
        var { goodsInfo: t } = this.data,
          { path: e } = t,
          o = a.a.getAll(e);
        return (
          (o = Object(s.e)(o, t)),
          f
            .request({
              path: "/wscgoods/poster/goods-poster-info.json",
              data: o,
            })
            .then((t) => t)
        );
      }
      function C(t) {
        return Object(s.l)(t.pop()).then((e) => {
          if (!e) throw new Error("图片下载失败");
          return Object(s.a)("scope.writePhotosAlbum")
            .then(s.n.bind(this, e))
            .then(() => (t.length ? C.call(this, t) : { image: 1 }))
            .catch(() => ({ image: 0 }));
        });
      }
      function P() {
        var { originImgList: t } = this.data;
        return (
          wx.showLoading({ title: "保存中" }),
          new Promise((e) => {
            C.call(this, t)
              .then((t) => e(t))
              .catch((t) => e(t));
          })
        );
      }
    },
    gyjr: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.clearProtocolCache =
          e.updateProtocolCache =
          e.getProtocolStatus =
          e.getProtocolData =
            void 0);
      var n = o("QxN7"),
        a = o("CMtL"),
        r = o("p+la"),
        i = o("Sx60");
      (e.getProtocolData = function (t, e) {
        void 0 === t && (t = []);
        var o = (e || {}).ignoreCache,
          s = i.formatProtocolCode(t);
        if (!o) {
          var c = (n.cache.get(r.PROTOCOL_WHOLE_DATA) || {})[s];
          if (c) {
            if (c.data) return Promise.resolve(c.data);
            if (c.promise) return c.promise;
          }
        }
        var u = function (t, e) {
            var o;
            n.cache.setObj(
              r.PROTOCOL_WHOLE_DATA,
              (((o = {})[s] = { promise: e, data: t }), o)
            );
          },
          p = new Promise(function (e) {
            a.getWholeProtocolData(t)
              .then(function (t) {
                var o = {
                  protocolStatus: t.protocolStatus,
                  protocolCode: t.protocolCode,
                  protocolData: t.protocolData,
                  protocolSignContent:
                    t.protocolSignContent ||
                    '允许我们在必要场景下，合理使用你的个人信息，并充分保障你的合法权利。请你在使用前仔细查阅以下协议条款，点击"允许"即表示你已阅读并同意对应的协议内容。',
                };
                u(o), e(o);
              })
              .catch(function (t) {
                u(null),
                  e({
                    protocolStatus: !1,
                    protocolCode: [],
                    protocolData: [],
                    protocolSignContent:
                      '允许我们在必要场景下，合理使用你的个人信息，并充分保障你的合法权利。请你在使用前仔细查阅以下协议条款，点击"允许"即表示你已阅读并同意对应的协议内容。',
                  });
              });
          });
        return u(null, p), p;
      }),
        (e.getProtocolStatus = function (t) {
          return (
            void 0 === t && (t = []),
            e.getProtocolData(t).then(function (t) {
              return t.protocolStatus;
            })
          );
        }),
        (e.updateProtocolCache = function (t, e) {
          var o,
            a = i.formatProtocolCode(t);
          n.cache.setObj(
            r.PROTOCOL_WHOLE_DATA,
            (((o = {})[a] = { data: e }), o)
          );
        }),
        (e.clearProtocolCache = function () {
          n.cache.set(r.PROTOCOL_WHOLE_DATA, null);
        });
    },
    lfpY: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.request = void 0);
      var n = o("bb6g"),
        a = n.__importDefault(o("US/N"));
      o("QQdI");
      e.request = function (t) {
        var e = t.url,
          o = n.__rest(t, ["url"]);
        return a.default(
          n.__assign({ path: e, withCredentials: !0, origin: "uic" }, o)
        );
      };
    },
    o8v2: function (t, e, o) {
      o.d(e, "a", function () {
        return a;
      }),
        o.d(e, "b", function () {
          return r;
        });
      var n = getApp(),
        a = function (t) {
          return new Promise((e, o) => {
            n.request(
              Object.assign(t, {
                origin: "uic",
                path: t.url,
                success: (t) => {
                  e({
                    statusCode: 200,
                    data: {
                      code: 0,
                      data: void 0 !== t.value ? t.value : t,
                      msg: "ok",
                    },
                  });
                },
                fail: (t) => {
                  e({
                    statusCode: 200,
                    data: { code: t.code, data: t.res, msg: t.msg },
                  });
                },
              })
            );
          });
        },
        r = function () {
          var t = [];
          return {
            init() {
              t = [];
            },
            move(e) {
              if (!(t.length > 300)) {
                var { x: o, y: n } = e.detail;
                t.push({ x: o, y: n, t: Date.now() });
              }
            },
            end(e, o) {
              if (!(t.length < 5)) {
                var n = [];
                return (
                  t
                    .map((t) => {
                      var { x: n, y: a, t: r } = t;
                      return { x: n - e, y: a - o, t: r };
                    })
                    .reduce(
                      (t, e, o) => (
                        1 === o &&
                          n.push({
                            mx: Math.ceil(t.x),
                            my: Math.ceil(t.y),
                            ts: t.t,
                          }),
                        n.push({
                          mx: Math.ceil(e.x - t.x),
                          my: Math.ceil(e.y - t.y),
                          ts: Math.ceil(e.t - t.t),
                        }),
                        e
                      )
                    ),
                  this.init(),
                  n
                );
              }
              this.init();
            },
          };
        };
    },
    "oU/t": function (t, e, o) {
      function n(t) {
        var e = "";
        switch (t) {
          case 1:
            e = "每天";
            break;
          case 2:
            e = "每周";
            break;
          case 3:
            e = "每月";
            break;
          default:
            e = "";
        }
        return e;
      }
      function a(t) {
        var { isHotel: e = 0 } = t;
        return e ? "间*晚" : "件";
      }
      function r(t) {
        var { isPoints: e = 0 } = t;
        return e ? ["兑", "兑换"] : ["购", "购买"];
      }
      function i(t) {
        var { singleQuota: e = -1, isVirtualTicket: o, isHaitao: n } = t;
        return e && e > 0 ? e : o || n ? 100 : -1;
      }
      function s(t) {
        var {
            quotaPeriod: e,
            startSaleNum: o = 1,
            limitType: s,
            quotaUsed: c = 0,
            quota: u = 0,
            action: p,
          } = t,
          l = i(t),
          d = n(e),
          h = a(t),
          [f, g] = r(t);
        if ("minus" === p)
          return o > 1
            ? "该商品" + o + h + "起售哦"
            : "至少选择一" + h + "商品";
        if ("plus" === p) {
          if (0 === s) {
            if (l > 0 && u - c >= l) return "一次最多能" + g + l + h;
            var m = "该商品每人" + d + "限" + f + u + h;
            return c > 0 && (m += "，你之前已" + g + "了" + c + h + "。"), m;
          }
          return "该商品库存不足";
        }
        return "";
      }
      o.d(e, "a", function () {
        return s;
      });
    },
    "p+la": function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PROTOCOL_WHOLE_DATA =
          e.INJECT_PROTOCOL_GRAY =
          e.SHOP_USER_PRIVACY =
            void 0),
        (e.SHOP_USER_PRIVACY = "SHOP_USER_PRIVACY"),
        (e.INJECT_PROTOCOL_GRAY = "INJECT_PROTOCOL_GRAY"),
        (e.PROTOCOL_WHOLE_DATA = "PROTOCOL_WHOLE_DATA");
    },
    pNg0: function (t, e, o) {
      var n = function (t, e) {
        if (void 0 !== t)
          return t !== e && e
            ? (+e / 100).toFixed(2) + "-" + (+t / 100).toFixed(2)
            : "" + (+t / 100).toFixed(2);
      };
      e.a = function (t, e) {
        var o = t.goodsActivityInfo,
          a = void 0 === o ? {} : o,
          r = t.goodsPrice,
          i = void 0 === r ? {} : r,
          s = t.title,
          c = i.maxOriginPrice,
          u = i.minOriginPrice,
          p = i.maxPrice,
          l = i.minPrice,
          d = i.oldMaxPrice,
          h = i.oldMinPrice,
          f = i.originMaxPrice,
          g = i.originMinPrice,
          m = n(l),
          v = n(p, l),
          y = n(d || c || f || p, h || u || g || l),
          b = c && c !== p,
          w = a.activityName,
          _ = a.type,
          k = a.activityType,
          O = void 0 === k ? _ : k,
          C = ["customerDiscount"].indexOf(O || "") >= 0,
          P = (w || O || b) && !C,
          S = P
            ? "💰【活动价低至】" +
              m +
              "元 \n💰【非活动价】" +
              y +
              " 元 \n 👉 立刻去抢购："
            : "💰【售价】" + v + "元 \n 👉 购买链接：",
          E =
            (null == e ? void 0 : e.promoteText) ||
            (P ? "限时福利！超值优惠价！" + s : "为你发现了一个品质好货 " + s);
        return E.endsWith("\n") ? "" + E + S : E + "\n" + S;
      };
    },
    rpEd: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = o("bb6g"),
        a = n.__importDefault(o("Tewj")),
        r = o("QxN7"),
        i = o("CMtL"),
        s = o("4nxs"),
        c = r.platform.authLogger,
        u = (function () {
          function t(t) {
            var e = (t || {}).source,
              o = (function () {
                var t;
                try {
                  var e = getCurrentPages() || [];
                  t = e[e.length - 1] || {};
                } catch (t) {}
                var o = t || {};
                return (
                  (o.__protocolId = o.__protocolId || s.uniqueId()),
                  (o.__protocolStorage = o.__protocolStorage || {}),
                  o
                );
              })();
            (this.ctx = o),
              (this.id = o.__protocolId),
              (this.source = e),
              (this.offHandlers = []);
          }
          return (
            (t.prototype.getEventName = function (t) {
              return "PROTOCOL-EVENT_" + this.id + "_" + t;
            }),
            (t.prototype.init = function (t) {
              this.trigger(r.InvokeProtocolEvent.INIT, t);
            }),
            (t.prototype.auth = function (t) {
              var e = this;
              return new Promise(function (o, n) {
                i.getAuthState()
                  .catch(function (t) {
                    return { error: t };
                  })
                  .then(function (a) {
                    var i = a.error,
                      s = a.protocol,
                      u = t || {},
                      p = u.needSkipSigned,
                      l = void 0 === p || p,
                      d = u.timeout,
                      h = void 0 === d ? 15e3 : d,
                      f = e.getVisibleCount(),
                      g = { data: t, signed: s, visibleCount: f, error: i };
                    if ((e.log(r.InvokeProtocolEvent.AUTH, g), s && l))
                      return o();
                    var m,
                      v = !1,
                      y = function () {
                        !v && e.trigger(r.InvokeProtocolEvent.SHOW, t);
                      },
                      b = function (t, a) {
                        (v = !0),
                          clearTimeout(m),
                          e.removePlayback(r.InvokeProtocolEvent.SHOW, y),
                          t ? o() : n(a);
                      };
                    e.once(r.InvokeProtocolEvent.AGREE, function () {
                      b(!0);
                    }),
                      e.once(r.InvokeProtocolEvent.DISAGREE, function () {
                        b(!1, { errMsg: "user_deny" });
                      }),
                      f > 0 ||
                        (h > 0 &&
                          (m = setTimeout(function () {
                            b(!1, { errMsg: "auth_timeout" }),
                              c.logAll({
                                logName: "PROTOCOL_AUTH_TIMEOUT",
                                logData: g,
                              });
                          }, h)),
                        e.addPlayback(r.InvokeProtocolEvent.SHOW, y),
                        e.once(r.InvokeProtocolEvent.SHOW_BEFORE, function () {
                          clearTimeout(m),
                            e.removePlayback(r.InvokeProtocolEvent.SHOW, y);
                        }),
                        e.trigger(r.InvokeProtocolEvent.SHOW, t));
                  });
              });
            }),
            (t.prototype.close = function (t) {
              this.trigger(r.InvokeProtocolEvent.CLOSE, t);
            }),
            (t.prototype.setSource = function (t) {
              this.source = t;
            }),
            (t.prototype.trigger = function (t, e) {
              var o = n.__assign({ source: this.source }, e);
              a.default.trigger(this.getEventName(t), o);
            }),
            (t.prototype.on = function (t, e, o) {
              var n = this,
                r = o || {},
                i = r.sameSource,
                s = r.playback,
                c = function (t) {
                  var o = (t || {}).source;
                  (i && o && n.source && o !== n.source) || e(t);
                };
              a.default.on(this.getEventName(t), c),
                this.offHandlers.push(function () {
                  return a.default.off(n.getEventName(t), c);
                }),
                s &&
                  Promise.resolve().then(function () {
                    return n.runPlayback(t);
                  });
            }),
            (t.prototype.once = function (t, e) {
              var o = this;
              a.default.once(this.getEventName(t), e),
                this.offHandlers.push(function () {
                  return a.default.off(o.getEventName(t), e);
                });
            }),
            (t.prototype.offEvent = function (t, e) {
              a.default.off(this.getEventName(t), e);
            }),
            (t.prototype.off = function () {
              this.offHandlers.forEach(function (t) {
                return t();
              }),
                (this.offHandlers = []),
                this.log(r.InvokeProtocolEvent.DESTROYED);
            }),
            (t.prototype.log = function (t, e) {
              r.safeLog({
                et: "custom",
                ei: "passport_protocol_" + t,
                en: "账号协议授权组件:" + t,
                params: {
                  data: e,
                  env: r.teeEnv,
                  source: this.source,
                  component: "passport_protocol",
                },
              });
            }),
            (t.prototype.setCtxData = function (t, e) {
              this.ctx.__protocolStorage[t] = e;
            }),
            (t.prototype.getCtxData = function (t) {
              return this.ctx.__protocolStorage[t];
            }),
            (t.prototype.addPlayback = function (t, e) {
              var o,
                a = this.getCtxData("playbackMap") || {},
                r = a[t] || [];
              r.push(e),
                this.setCtxData(
                  "playbackMap",
                  n.__assign(n.__assign({}, a), (((o = {})[t] = r), o))
                );
            }),
            (t.prototype.removePlayback = function (t, e) {
              var o,
                a = this.getCtxData("playbackMap") || {},
                r = a[t] || [];
              (r = r.filter(function (t) {
                return t !== e;
              })),
                this.setCtxData(
                  "playbackMap",
                  n.__assign(n.__assign({}, a), (((o = {})[t] = r), o))
                );
            }),
            (t.prototype.runPlayback = function (t) {
              ((this.getCtxData("playbackMap") || {})[t] || []).forEach(
                function (t) {
                  return t();
                }
              );
            }),
            (t.prototype.getVisibleCount = function () {
              var t = this.getCtxData("visibleCount");
              return Number(t) || 0;
            }),
            (t.prototype.offsetVisibleCount = function (t) {
              var e = this.getVisibleCount(),
                o = Math.max(e + t, 0);
              this.setCtxData("visibleCount", o);
            }),
            t
          );
        })();
      e.default = u;
    },
    tTfU: function (t, e, o) {
      o.d(e, "a", function () {
        return i;
      });
      var n = o("lOyf"),
        a = Object(n.a)(),
        r = function (t, e) {
          for (var o = 0; o < t.length; ) {
            for (var n = t[o], a = 0; a < n.length; ) {
              if (n[a].alias === e) return [t.length - 1 - o, a];
              a++;
            }
            o++;
          }
          return [-1, -1];
        },
        i = (t) => {
          var e,
            { iconList: o, special: n } = t,
            i = r(o, "share"),
            s = r(o, "salesman"),
            c = r(o, "promote"),
            u =
              !(e = getCurrentPages()[0]) ||
              ("pages/home/dashboard/index" !== e.route &&
                "packages/home/dashboard/index" !== e.route)
                ? 0
                : 49;
          u = a ? u + 34 : u;
          var p = [
              {
                content:
                  "恭喜获得分享赚佣金权益，点击这里可以查看所有可推广商品和佣金",
                component: "downward-guide",
                imgUrl:
                  "https://img01.yzcdn.cn/upload_files/2020/11/24/Fs70rEBwimWwru83H1y-iQfZbOg1.png",
                arrowType:
                  s[1] > 2 ? "arrowViolentDown" : "arrowViolentLeftDown",
                bottom: 100 * s[1] + 104 + u + "px",
                imgStyle: {
                  left: 80 * s[0] + 2 + "px",
                  bottom: 100 * s[1] + u + 6 + "px",
                  height: "90px",
                  width: "90px",
                },
              },
            ],
            l = [
              {
                content: "分享给好友，可赚取佣金",
                component: "downward-guide",
                imgUrl:
                  "https://img01.yzcdn.cn/upload_files/2021/05/26/FpAMSN5m4y26ORqq-JR7MiCg9zN-.png",
                arrowType:
                  i[1] > 2 ? "arrowViolentDown" : "arrowViolentLeftDown",
                bottom: 100 * i[0] + 104 + u + "px",
                imgStyle: {
                  left: 80 * i[1] + 2 + "px",
                  bottom: 100 * i[0] + u + 6 + "px",
                  height: "90px",
                  width: "90px",
                },
              },
              {
                content: "点击这里可以查看所有可推广商品和可提现金额",
                component: "downward-guide",
                imgUrl:
                  "https://img01.yzcdn.cn/upload_files/2020/11/24/Fs70rEBwimWwru83H1y-iQfZbOg1.png",
                arrowType:
                  s[1] > 2 ? "arrowViolentDown" : "arrowViolentLeftDown",
                bottom: 100 * s[0] + 104 + u + "px",
                imgStyle: {
                  left: 80 * s[1] + 2 + "px",
                  bottom: 100 * s[0] + u + 6 + "px",
                  height: "90px",
                  width: "90px",
                },
              },
            ];
          return (
            c[0] >= 0 &&
              l.push({
                content: "点击这里可进入销售员专属推广页",
                component: "downward-guide",
                imgUrl:
                  "https://img01.yzcdn.cn/upload_files/2020/11/24/FvwfYwf8CaldPoZNfAOWBvA0yGXj.png",
                arrowType:
                  c[1] > 2 ? "arrowViolentDown" : "arrowViolentLeftDown",
                bottom: 100 * c[0] + 104 + u + "px",
                imgStyle: {
                  left: 80 * c[1] + 2 + "px",
                  bottom: 100 * c[0] + u + 6 + "px",
                  height: "90px",
                  width: "90px",
                },
              }),
            n ? l : p
          );
        };
    },
    uQM2: function (t, e, o) {
      var n = o("Fcif"),
        a = o("NERQ"),
        r = o("QxN7"),
        i = o("8B9M"),
        s = o("9ZMt"),
        c = () => {
          var t,
            e,
            o = {};
          try {
            o =
              s.default.$native.getStorageSync("_customer_latitude_cache") ||
              {};
          } catch (t) {}
          return null != (t = o) && t.lat && null != (e = o) && e.lng
            ? { lat: String(o.lat), lng: String(o.lng) }
            : {};
        },
        u = o("RfiI"),
        p = o("3Hke"),
        l = o("EFhr"),
        d = o("PjiT"),
        h = Object(i.a)(),
        { authLogger: f } = r.platform,
        g = (t) => "function" == typeof t;
      e.a = {
        changeLoginType(t, e) {
          this.setData({ accountLogin: !0 }),
            (this.successCallback = t),
            (this.failCallback = e);
        },
        showLoading(t) {
          void 0 === t && (t = ""), wx.showLoading({ title: t, mask: !0 });
        },
        hideLoading() {
          wx.hideLoading();
        },
        loginSuccess(t) {
          this.setData({ accountLogin: !1 }),
            g(this.successCallback) && this.successCallback(t.detail);
        },
        loginFail() {
          this.hideLoading(),
            this.setData({ accountLogin: !1 }),
            g(this.failCallback) && this.failCallback();
        },
        conflictDialog(t) {
          void 0 === t && (t = {});
          var { mobile: e } = t;
          if (!e)
            return wx.showToast({
              icon: "none",
              title: "授权获取手机号码失败，请重启小程序重新授权",
            });
          var o = [];
          o.push(e.substring(0, 3)), o.push("****"), o.push(e.substring(7));
          var n,
            r = "手机号" + o.join("") + "已与其他微信账号绑定";
          if (t.selectComponent) n = t.selectComponent;
          else {
            var i = getCurrentPages();
            n = (t.context || i[i.length - 1]).selectComponent(
              t.selector || "#account-wx-login"
            );
          }
          var s = {
            message: r,
            confirmButtonText: "继续登录",
            cancelButtonText: "换个手机号",
            context: n,
            selector: "#" + d.a.DEFAULT_DIALOG_ID,
          };
          a.a
            .confirm(s)
            .then(() => {
              this.confirmLogin(t);
            })
            .catch(() => {
              this.changeLoginType(t.success, t.fail),
                t.fail && "function" == typeof t.fail && t.fail();
            });
        },
        wxLogin(t) {
          var e = this;
          void 0 === t && (t = {}),
            (t = Object(n.a)(
              {
                before: () => {},
                success: () => {},
                fail: () => {},
                error: () => {},
                redirectUrl: "/packages/account/settings/index",
                context: null,
                bizDataMap: {},
              },
              t
            ));
          var { event: o, noMobileFallback: a } = t;
          if (!o) {
            var i = new Error("param event is required");
            throw (
              ("function" == typeof t.error && t.error(i),
              new Error("param event is required"))
            );
          }
          t.before && "function" == typeof t.before && t.before(),
            "auth-cmp" === t.source &&
              this.setData({ isFromAuthComponent: !0 });
          var s = function (t, e) {
              return (
                void 0 === e && (e = {}),
                wx.showToast(Object(n.a)({ title: t, icon: "none" }, e))
              );
            },
            d = (e) => "function" == typeof t.success && t.success(e);
          this.showLoading(),
            r.platform
              .nativeMobileCallback(o, { noMobileFallback: a })
              .then((e) => {
                var { detail: o } = e,
                  a = {
                    code: o.code,
                    encryptedData: o.encryptedData,
                    iv: o.iv,
                    appId: h.getAppId(),
                    sessionId: h.getSessionId(),
                    isUserAuthorize: t.isUserAuthorize,
                    bizDataMap: JSON.stringify(
                      Object(n.a)({}, c(), t.bizDataMap, {
                        from_params: Object(u.a)(),
                      })
                    ),
                  };
                this.showLoading("正在登录...");
                Object(l.a)(a, this)
                  .then((e) =>
                    h
                      .login()
                      .then(() => h.refreshUserAuthData({ kdtId: t.kdtId }))
                      .then(() => {
                        this.data.isFromAuthComponent ||
                          Object(r.emitUserAuthSuccess)({
                            authTypeList: [r.AuthType.MOBILE],
                            authPopTypeList: [r.AuthPopType.MOBILE],
                          }),
                          Object(p.a)().finally(() => {
                            this.hideLoading(),
                              s("登录成功", { icon: "success", mask: !0 }),
                              d({
                                mb: e.mobile,
                                authPopType: r.AuthPopType.MOBILE,
                                verifyType: 3,
                              });
                          });
                      })
                      .catch((t) => {
                        this.hideLoading(), s("登录失败");
                      })
                  )
                  .catch((e) => {
                    if (
                      (this.hideLoading(),
                      f.logAll({
                        logName: "授权-手机号登录失败",
                        logData: {
                          type: "native",
                          env: "weapp",
                          weapp: !0,
                          errMsg: Object(r.getErrorMsg)(e),
                          err: e,
                        },
                      }),
                      -9999 === e.code)
                    ) {
                      var { res: o } = e;
                      if (
                        o &&
                        o.data &&
                        (135200018 === o.data.code ||
                          135200019 === o.data.code) &&
                        o.data.mobile
                      )
                        return this.conflictDialog(
                          Object.assign(t, {
                            mobile: o.data.mobile,
                            countryCode: o.data.countryCode,
                          })
                        );
                    }
                    return 135000049 === e.code
                      ? (t.fail &&
                          "function" == typeof t.fail &&
                          t.fail({
                            error: "DECRYPT-ERROR",
                            msg: "数据解密失败，微信授权失败",
                          }),
                        h
                          .login()
                          .then(() => {
                            s("微信手机号授权失败，请重试");
                          })
                          .catch(() => {
                            s("微信手机号授权失败，请重试"),
                              h.logger.appError({
                                name: "wx-mobile-decryption",
                                level: "info",
                                message: "login-error-with-decryption",
                                detail: Object(n.a)({}, a),
                              });
                          }))
                      : (s(e.msg || "服务请求出错，请稍后再试"),
                        t.fail && "function" == typeof t.fail
                          ? t.fail({
                              error: "REQUEST-ERROR",
                              msg: e.msg || "服务请求出错，请稍后再试",
                            })
                          : void 0);
                  });
              })
              .catch((o) => {
                var {
                  detail: n,
                  disagree: a,
                  errType: i,
                  noMobileFallback: c,
                } = o;
                if ((this.hideLoading(), a))
                  t.fail({ error: "USER-DENY", msg: "微信授权失败" });
                else {
                  if (c) {
                    var u = i.noQuota
                      ? "手机号验证组件额度不足"
                      : Object(r.getErrorMsg)(n) ||
                        "手机号验证失败，请稍后重试";
                    return s(u), void t.fail({ msg: u });
                  }
                  this.changeLoginType(function () {
                    for (
                      var t = arguments.length, o = new Array(t), n = 0;
                      n < t;
                      n++
                    )
                      o[n] = arguments[n];
                    e.enterShopLogin().then(() => d(...o));
                  }, t.fail);
                }
              });
        },
        confirmLogin(t) {
          void 0 === t && (t = {});
          var { mobile: e } = t,
            { countryCode: o } = t,
            n = t.redirectUrl,
            a =
              "/packages/account/to-bind/index?mobile=" +
              e +
              "&countryCode=" +
              encodeURIComponent(o) +
              "&redirectUrl=" +
              encodeURIComponent(n);
          return wx.redirectTo({ url: a });
        },
        handleCloseAccountLogin() {
          this.triggerEvent("userClose");
        },
      };
    },
    x8Dq: function (t, e, o) {
      o.d(e, "a", function () {
        return n;
      });
      var n = Behavior({
        methods: {
          touchStart(t) {
            var e = t.touches[0];
            (this.direction = ""),
              (this.deltaX = 0),
              (this.deltaY = 0),
              (this.offsetX = 0),
              (this.offsetY = 0),
              (this.startX = e.clientX),
              (this.startY = e.clientY);
          },
          touchMove(t) {
            var e = t.touches[0];
            (this.deltaX = e.clientX - this.startX),
              (this.deltaY = e.clientY - this.startY),
              (this.offsetX = Math.abs(this.deltaX)),
              (this.offsetY = Math.abs(this.deltaY)),
              (this.direction =
                this.offsetX > this.offsetY
                  ? "horizontal"
                  : this.offsetX < this.offsetY
                  ? "vertical"
                  : "");
          },
        },
      });
    },
    xoic: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ProtocolComponent = void 0);
      var n = o("bb6g"),
        a = o("QxN7"),
        r = o("6K+Q"),
        i = o("WaS2"),
        s = n.__importDefault(o("rpEd")),
        c = (i.popupProps.ready, n.__rest(i.popupProps, ["ready"])),
        u = n.__assign(n.__assign({}, c), {
          kdtId: { type: Number, default: 0 },
        }),
        p = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.props = u),
              (e.data = {
                protocols: [],
                allProtocols: [],
                needSignProtocols: [],
                protocolSignContent: "",
                ready: !1,
              }),
              (e.watch = {
                needSkipSigned: function () {
                  var t = this.getData(),
                    e = t.allProtocols,
                    o = t.needSignProtocols;
                  this.setValue({ protocols: this.getProtocolsData(e, o) });
                },
                source: function (t) {
                  t && this.protocol.setSource(t);
                },
              }),
              e
            );
          }
          return (
            n.__extends(e, t),
            (e.prototype.created = function () {
              var t = this.getData().source || "@npm/protocol_" + Date.now();
              this.protocol = new s.default({ source: t });
            }),
            (e.prototype.destroyed = function () {
              this.protocol.off();
            }),
            (e.prototype.initData = function (t) {
              var e = this.getEventParams(t),
                o = e.sign,
                n = e.modify,
                a = e.protocols,
                r = e.protocolSignContent,
                i = o.concat(n);
              this.setValue({
                allProtocols: a,
                needSignProtocols: i,
                protocols: this.getProtocolsData(a, i),
                protocolSignContent: r,
                ready: !0,
              });
            }),
            (e.prototype.getProtocolsData = function (t, e) {
              return this.getData().needSkipSigned || e.length ? e : t;
            }),
            (e.prototype.onAgree = function (t) {
              this.flushEvent(
                a.InvokeProtocolEvent.AGREE,
                this.getEventParams(t)
              );
            }),
            (e.prototype.onDisagree = function () {
              this.flushEvent(a.InvokeProtocolEvent.DISAGREE);
            }),
            (e.prototype.onPopupEnter = function () {
              var t = { authType: "protocol", popupType: "youzan" };
              this.flushEvent(a.InvokeProtocolEvent.SHOW_AFTER, t),
                this.invokeEvent("auth-popup-show", t);
            }),
            (e.prototype.onPopupBeforeEnter = function () {
              this.flushEvent(a.InvokeProtocolEvent.SHOW_BEFORE);
            }),
            (e.prototype.onPopupAfterLeave = function () {
              this.flushEvent(a.InvokeProtocolEvent.CLOSE);
            }),
            (e.prototype.flushEvent = function (t, e) {
              this.invokeEvent(t, e), this.protocol.trigger(t, e);
            }),
            e
          );
        })(r.ProtocolBaseComponent);
      e.ProtocolComponent = p;
    },
    ycnm: function (t, e, o) {
      o.d(e, "d", function () {
        return n;
      }),
        o.d(e, "a", function () {
          return a;
        }),
        o.d(e, "g", function () {
          return r;
        }),
        o.d(e, "f", function () {
          return i;
        }),
        o.d(e, "e", function () {
          return s;
        }),
        o.d(e, "j", function () {
          return c;
        }),
        o.d(e, "h", function () {
          return u;
        }),
        o.d(e, "i", function () {
          return p;
        }),
        o.d(e, "b", function () {
          return d;
        }),
        o.d(e, "c", function () {
          return h;
        });
      var n = {
          default: {
            weapp: [
              ["share", "tuwenPoster", "code"],
              ["salesman", "material", "zoom"],
            ],
          },
          feature: {
            weapp: [
              ["share", "featurePoster", "code"],
              ["salesman", "material", "zoom"],
            ],
          },
          feature_page: {
            weapp: [
              ["share", "featurePoster", "code", "weappFeatureLink"],
              ["salesman", "material", "zoom"],
            ],
          },
          home_page: {
            weapp: [
              ["share", "featurePoster", "code", "weappHomeLink"],
              ["salesman", "material", "zoom"],
            ],
          },
          shop_note: {
            weapp: [
              ["share", "tuwenPoster", "code"],
              ["salesman", "material", "zoom"],
            ],
          },
          benefit_card: {
            weapp: [
              ["share", "tuwenPoster", "code"],
              ["salesman", "material", "zoom"],
            ],
          },
          salesman_coupon: {
            weapp: [
              ["share", "code"],
              ["salesman", "material"],
            ],
          },
          zone: {
            weapp: [
              ["share", "code", "zonePoster"],
              ["salesman", "material"],
            ],
          },
          salesman_goods: { weapp: ["code", "salesman", "material", "zoom"] },
          lottery: { weapp: [["share", "code"]] },
        },
        a = "guide_promote_goods",
        r = {
          default: {
            weapp: [
              ["share", "tuwenPoster", "code"],
              ["guide", "material"],
            ],
          },
          feature: {
            weapp: [
              ["share", "featurePoster", "code"],
              ["guide", "material"],
            ],
          },
          feature_page: {
            weapp: [
              ["share", "featurePoster", "weappFeatureLink", "code"],
              ["guide", "material"],
            ],
          },
          home_page: {
            weapp: [
              ["share", "featurePoster", "weappHomeLink", "code"],
              ["guide", "material"],
            ],
          },
          shop_note: {
            weapp: [
              ["share", "tuwenPoster", "code"],
              ["guide", "material"],
            ],
          },
          benefit_card: {
            weapp: [
              ["share", "tuwenPoster", "code"],
              ["guide", "material"],
            ],
          },
          salesman_coupon: {
            weapp: [
              ["share", "code"],
              ["guide", "material"],
            ],
          },
          zone: {
            weapp: [
              ["share", "code", "zonePoster"],
              ["guide", "material"],
            ],
          },
          salesman_goods: { weapp: ["code", "guide", "material"] },
          [a]: {
            weapp: [["share", "code", "weappLink", "guide", "guideMaterial"]],
          },
          lottery: { weapp: [["share", "code", "guide", "material"]] },
        },
        i = (t) => {
          var { shareData: e = {}, kdtId: o } = t,
            { salesmanName: n = "销售员", isShoppingGuide: a } = e;
          return {
            share: {
              alias: "share",
              title: "微信好友",
              openType: "share",
              hidden: !1,
              type: "share",
              iconUrl: "//b.yzcdn.cn/salesman/cube/share.png",
            },
            code: {
              alias: "code",
              title: "小程序码",
              hidden: !1,
              type: "poster",
              iconUrl: "//b.yzcdn.cn/salesman/cube/wecode.png",
            },
            tuwenPoster: {
              alias: "tuwenPoster",
              title: "分享海报",
              hidden: !1,
              iconUrl: "https://img01.yzcdn.cn/weapp/wsc/NdzsNJ.png",
            },
            featurePoster: {
              alias: "featurePoster",
              title: "分享海报",
              hidden: !1,
              iconUrl: "https://img01.yzcdn.cn/weapp/wsc/NdzsNJ.png",
            },
            goodsPoster: {
              alias: "goodsPoster",
              title: "分享海报",
              hidden: !1,
              type: "poster",
              iconUrl: "//b.yzcdn.cn/salesman/cube/poster.png",
            },
            zonePoster: {
              alias: "zonePoster",
              title: "空间海报",
              hidden: !1,
              type: "poster",
              iconUrl: "//b.yzcdn.cn/salesman/cube/poster.png",
            },
            promote: {
              alias: "promote",
              iconUrl: "//b.yzcdn.cn/salesman/cube/promoteicon.png",
              title: "专属推广页",
              type: "link",
            },
            salesman: {
              alias: "salesman",
              iconUrl: "//b.yzcdn.cn/salesman/cube/salesman.png",
              title: n + "中心",
              type: "link",
              weappUrl: "/packages/salesman/salesman-center/index",
            },
            guide: {
              alias: "guide",
              iconUrl: "//b.yzcdn.cn/salesman/cube/salesman.png",
              title: "导购工作台",
              type: "link",
              weappUrl:
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(
                  "https://h5.youzan.com/guide/center/home?kdt_id=" + o
                ),
            },
            guideMaterial: {
              alias: "guideMaterial",
              iconUrl: "//b.yzcdn.cn/salesman/cube/meterial.png",
              title: "素材中心",
              type: "link",
              weappUrl: "/packages/guide/zone/material/index",
            },
            material: {
              alias: "material",
              iconUrl: "//b.yzcdn.cn/salesman/cube/meterial.png",
              title: "素材中心",
              type: "link",
              weappUrl: "/packages/salesman/zone/material/index",
            },
            zoom: {
              alias: "zoom",
              iconUrl: "//b.yzcdn.cn/salesman/cube/zoom.png",
              title: "个人空间",
              type: "link",
              weappUrl: "/packages/salesman/zone/home/index",
            },
            center: {
              alias: "center",
              iconUrl: "//b.yzcdn.cn/salesman/cube/zoom.png",
              title: "个人中心",
              type: "link",
              weappUrl: "/packages/usercenter/dashboard/index",
            },
            weappLink: {
              alias: "weappLink",
              iconUrl:
                "//img01.yzcdn.cn/upload_files/2022/01/06/FtNIZW_b89uIYk0mwVXzy700WjDO.png",
              title: "小程序链接",
              type: "weappLink",
            },
            weappHomeLink: {
              alias: "weappHomeLink",
              iconUrl: "//b.yzcdn.cn/salesman/cube/weappHomeLink.png",
              title: a ? "小程序链接" : "复制链接",
              type: "weappHomeLink",
            },
            weappFeatureLink: {
              alias: "weappFeatureLink",
              iconUrl: "//b.yzcdn.cn/salesman/cube/weappHomeLink.png",
              title: "小程序链接",
              type: "weappFeatureLink",
            },
          };
        },
        s = ["zoom", "zoomPoster", "material", "promote"],
        c = ["promote"],
        u = ["salesman", "promote", "zoom"],
        p = { salesman: "guide", material: "guideMaterial" },
        l = (t) => ({
          et: "click",
          ei: "share",
          en: "分享",
          params: { share_type: "salesman", share_cmpt: t },
        }),
        d = {
          nativeCustom: l("native_custom"),
          poster: l("poster"),
          copylink: l("copylink"),
          copyWeappLink: l("copyWeappLink"),
          qrCode: l("qr_code"),
          miniprogram: l("miniprogram"),
          savepictures: l("savepictures"),
          showPanel: {
            et: "view",
            ei: "show_zhuanzi_panel",
            en: "点赚字，出现浮层",
            params: { version: "v2" },
          },
          drawPoster: {
            et: "view",
            ei: "draw_poster",
            en: "赚字海报绘制成功曝光",
            params: { version: "v2" },
          },
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
          clickPosterTab: {
            et: "click",
            ei: "poster_click",
            en: "生成海报tab点击",
          },
          clickLinkIcon: {
            et: "click",
            ei: "link_icon_click",
            en: "链接类型icon点击",
          },
        },
        h = "salesman_advance_personal_space_ability";
    },
  });
