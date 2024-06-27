"use strict";
(exports.ids = [0]),
  (exports.modules = {
    "+66q": function (t, e, n) {
      n.d(e, "j", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "g", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "h", function () {
          return c;
        }),
        n.d(e, "l", function () {
          return s;
        }),
        n.d(e, "k", function () {
          return f;
        }),
        n.d(e, "i", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "e", function () {
          return p;
        }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return v;
        });
      var r = n("Fcif"),
        o = {
          GOODS_SCAN: "goodsScan",
          TIMELIMITED_DISCOUNT: "timelimitedDiscount",
          GROUP_ON: "groupOn",
          LADDER_GROUP_ON: "ladderGroupOn",
          LUCKYDRAW_GROUP: "luckyDrawGroup",
          HELPCUT: "helpCut",
          CASH_BACK: "cashBack",
          CASHBACK_PRO: "cashbackPro",
          TUAN: "tuan",
          SECKILL: "seckill",
          AUCTION: "auction",
          FCODE: "fCode",
          PRESENT_EXCHANGE: "presentExchange",
          INSOURCING_FISSION: "inSourcingFission",
          DEPOSIT_EXPANSION: "depositExpansion",
          HELP_DEPOSIT_EXPANSION: "helpDepositExpansion",
          SHARE_ENCOURAGE: "shareEncourage",
          LIMITED_SECKILL: "limitedSeckill",
          FANS_BENEFIT: "fansBenefit",
          WECOM_FANS_BENEFIT: "wecomFansBenefit",
          PRODUCT_LAUNCH: "productLaunch",
          ESTIMATA_PRICE: "estimatePrice",
          CARRIAGE_DISCOUNT: "carriageDiscount",
          PACKAGE_BUY: "packageBuy",
          PLUS_BUY: "plusBuy",
          BALE: "bale",
          SECOND_HALF_DISCOUNT: "secondHalfDiscount",
          MEET_REDUCE: "meetReduce",
          MEET_SEND: "meetSend",
        },
        i = Object(r.a)(
          {
            DISCOUNT: "discount",
            DISCOUNT_INVITE: "discountInvite",
            CUSTOMER_DISCOUNT: "customerDiscount",
            POINTS: "pointsExchange",
            PRESALE: "presale",
            COUPON: "coupon",
          },
          o
        ),
        a = Object(r.a)({}, o, {
          SUPPLIER_MEET_REDUCE: "supplierMeetReduce",
          PRESENT: "present",
          POSTAGE: "postage",
        }),
        u = [
          i.TIMELIMITED_DISCOUNT,
          i.GROUP_ON,
          i.LADDER_GROUP_ON,
          i.SECKILL,
          i.DEPOSIT_EXPANSION,
          i.HELP_DEPOSIT_EXPANSION,
          i.PRESENT_EXCHANGE,
          i.HELPCUT,
          i.LUCKYDRAW_GROUP,
          i.TUAN,
          i.INSOURCING_FISSION,
          i.FCODE,
          i.AUCTION,
          i.LIMITED_SECKILL,
          i.PRODUCT_LAUNCH,
        ],
        c = [
          i.TIMELIMITED_DISCOUNT,
          i.GROUP_ON,
          i.LADDER_GROUP_ON,
          i.SECKILL,
          i.DEPOSIT_EXPANSION,
          i.HELP_DEPOSIT_EXPANSION,
          i.HELPCUT,
          i.LUCKYDRAW_GROUP,
          i.TUAN,
          i.INSOURCING_FISSION,
          i.AUCTION,
          i.LIMITED_SECKILL,
          i.PRODUCT_LAUNCH,
        ],
        s = {
          [i.TIMELIMITED_DISCOUNT]: "限时价",
          [i.GROUP_ON]: "拼团价",
          [i.LADDER_GROUP_ON]: "拼团价",
          [i.HELPCUT]: "砍价享",
          [i.SECKILL]: "秒杀价",
          [i.AUCTION]: "降价拍",
          [i.TUAN]: "团购价",
          [i.LUCKYDRAW_GROUP]: "0元抽奖",
          [i.PRESENT_EXCHANGE]: "赠品",
          [i.INSOURCING_FISSION]: "内购价",
          [i.FCODE]: "F码",
          [i.LIMITED_SECKILL]: "限时秒杀",
        },
        f = {
          [i.TIMELIMITED_DISCOUNT]: "限时券后￥",
          [i.GROUP_ON]: "拼团券后￥",
          [i.LADDER_GROUP_ON]: "拼团券后￥",
          [i.CUSTOMER_DISCOUNT]: "会员券后￥",
          deposit: "预售券后￥",
          fullPresale: "预售券后￥",
          [i.DEPOSIT_EXPANSION]: "预售券后￥",
        },
        l =
          (i.DEPOSIT_EXPANSION,
          i.DISCOUNT,
          i.DISCOUNT_INVITE,
          i.SECKILL,
          i.AUCTION,
          i.DEPOSIT_EXPANSION,
          i.HELP_DEPOSIT_EXPANSION,
          {
            UMP_GO_2_DETAIL: "UMP_GO_2_DETAIL",
            UMP_SHOW_QUESTION: "UMP_SHOW_QUESTION",
            ORDER_SECKILL: "ORDER_SECKILL",
            UMP_GO_2_WEBVIEW: "UMP_GO_2_WEBVIEW",
            START_CUT: "START_CUT",
            UMP_SHOW_SHARE: "UMP_SHOW_SHARE",
            SHOW_IN_SOURCING_FISSION_COUPON: "SHOW_IN_SOURCING_FISSION_COUPON",
            PRODUCT_LAUNCH_RESERVATION: "PRODUCT_LAUNCH_RESERVATION",
          }),
        d = { NOT_PARTICIPATE: 0, HELPING: 1, BALANCE_PAYMENT: 2, END: 3 },
        p = [3, 4],
        h = "立即购买",
        v = "查看详情";
    },
    "+I+c": function (t, e, n) {
      function r(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "+Ky8": function (t, e, n) {
      var r;
      n.d(e, "a", function () {
        return r;
      }),
        (function (t) {
          (t.WEB = "web"), (t.XHS = "xhs");
        })(r || (r = {}));
    },
    "/12o": function (t, e, n) {
      n.r(e);
      var r = n("Mp2s");
      n.d(e, "get", function () {
        return r.a;
      });
      var o = n("AHKF");
      n.d(e, "isArray", function () {
        return o.a;
      });
      var i = n("8Mry");
      n.d(e, "isPlainObject", function () {
        return i.a;
      });
    },
    "/QeK": function (t, e, n) {
      n.d(e, "a", function () {
        return N;
      });
      var r = {};
      n.r(r),
        n.d(r, "isCloudDesigned", function () {
          return _;
        });
      var o = n("bb6g"),
        i = {
          theme: "#3C76FF",
          banner:
            "https://b.yzcdn.cn/public_files/ef7552cf08110b87268e14c6b9a31f49.png",
          checkIconUrl: "/public_files/dce3dfe9dfcf2e9589abe08302f6216a.png",
          name: "",
          source: 0,
          authType: "",
          accountType: void 0,
          getPhoneNumber: !0,
          mobileAuditKey: "",
          showYzLoginAfaterChannel: !1,
        },
        a = n("9ZMt"),
        u = n("MLLI"),
        c = n("GFyo"),
        s = { setStorage: c.g, getStorage: c.c },
        f = n("kSnQ"),
        l = {
          queryMobileAudit: function () {
            var t = this;
            return new Promise(function (e, n) {
              var r = t.config,
                o = r.accountType,
                i = r.mobileAuditKey;
              return r.getPhoneNumber
                ? o && i
                  ? void (function (t) {
                      return Object(f.a)({
                        method: "GET",
                        origin: "uic",
                        path: "/passport/general/audit/result.json",
                        data: t,
                        config: {},
                        withCredentials: !0,
                      });
                    })({ accountType: o, auditKey: i })
                      .then(function (t) {
                        t && 2 === t.auditStatus ? e() : n();
                      })
                      .catch(n)
                  : e()
                : n();
            });
          },
        },
        d = {
          login: n("MVYo").a,
          checkSession: function () {
            return new Promise(function (t, e) {
              a.default.$native.checkSession({ success: t, fail: e });
            });
          },
          hasLogin: function () {
            return Promise.resolve(!0);
          },
        },
        p = n("Y6Ef"),
        h = {
          nativeMobileCallback: function (t, e) {
            var n = (t && t.detail) || {},
              r = (e || {}).noMobileFallback;
            return new Promise(function (t, e) {
              var o = !(!n.code && !n.encryptedData),
                i =
                  /deny|cancel|未绑定手机|not authorize|小程序获取权限失败/i.test(
                    n.errMsg || ""
                  );
              if (
                (Object(p.a)({
                  path: "/passport/mobile/native/callback.json",
                  data: {
                    detail: n,
                    success: o,
                    disagree: i,
                    env: a.default.getEnv(),
                    extra: { noMobileFallback: r },
                  },
                  method: "POST",
                  origin: "uic",
                  withCredentials: !0,
                }),
                o)
              )
                return t({ detail: n });
              var u = { noQuota: 1400001 === n.errno };
              e({ detail: n, disagree: i, errType: u, noMobileFallback: r });
            });
          },
        },
        v = {
          getAuthType: function () {
            return this.getConfig("authType");
          },
          getHostApp: function () {
            return Promise.resolve("");
          },
          getAclValue: function (t) {
            return Promise.resolve("");
          },
          getGlobalValue: function (t) {
            return Promise.resolve();
          },
        },
        g = {
          needPrivacyAuth: function () {
            return Promise.resolve(!1);
          },
          onNeedPrivacyAuth: function () {},
          requirePrivacyAuth: function () {},
          resolvePrivacyAuth: function () {},
          rejectPrivacyAuth: function () {},
        },
        m = n("Z054");
      function _() {
        return !1;
      }
      var y = Object(o.__assign)(
          Object(o.__assign)(
            Object(o.__assign)(
              Object(o.__assign)(
                Object(o.__assign)(
                  Object(o.__assign)(
                    Object(o.__assign)(Object(o.__assign)({}, d), s),
                    l
                  ),
                  h
                ),
                v
              ),
              r
            ),
            g
          ),
          {
            authLogger: m.authLogger,
            getUserInfo: a.default.$native.getUserInfo,
            getSystemInfoSync: u.b,
            canIUse: function (t) {
              var e = a.default.$native[t];
              return e && "function" == typeof e;
            },
            checkInSinglePage: function () {
              return !1;
            },
            selectBoundingClientRect: function (t, e) {
              return new Promise(function (n) {
                t.createSelectorQuery().select(e).boundingClientRect().exec(n);
              });
            },
          }
        ),
        b = Object(o.__assign)(Object(o.__assign)({ config: i }, y), {
          getConfig: function (t) {
            var e = this.config;
            return e
              ? Promise.resolve(t ? e[t] : e)
              : Promise.resolve(t ? "" : {});
          },
        }),
        O = n("U0uK"),
        w = {};
      try {
        w = Object(O.a)() || {};
      } catch (t) {}
      var E = {
          theme: "#679FFF26",
          banner:
            "https://img01.yzcdn.cn/upload_files/2023/07/03/FtFv4zB9O7vAuHxsgdLpP0uSRHBF.png",
          name: "",
          authType: "weapp",
          source: 2,
          getPhoneNumber: !w.transactionWeappFlag,
        },
        S = n("mM1a"),
        j = n("GjIH"),
        A = n("fLr7"),
        T = Object(j.a)(A.i, new Set()),
        P = Object(j.a)(A.e);
      function k(t) {
        return a.default.$native.canIUse(t);
      }
      var I,
        x = function (t) {
          if (!(t || {}).ignoreCache) {
            var e = P.get();
            if (e) {
              if (e.data) return Promise.resolve(e.data.needPrivacyAuth);
              if (e.promise) return e.promise;
            }
          }
          var n = new Promise(function (t, e) {
              k("getPrivacySetting")
                ? a.default.$native.getPrivacySetting({
                    success: function (e) {
                      t(e.needAuthorization);
                    },
                    fail: function (t) {
                      e(t);
                    },
                  })
                : t(!1);
            }),
            r = new Promise(function (t, e) {
              setTimeout(function () {
                e("getPrivacySetting timeout");
              }, 3e3);
            }),
            o = Promise.race([r, n])
              .then(function (t) {
                return (
                  P.set({ promise: null, data: { needPrivacyAuth: t } }), t
                );
              })
              .catch(function (t) {
                return (
                  P.set(null),
                  m.authLogger.logAll({
                    errTitle: "Call needPrivacyAuth error",
                    errMsg: Object(f.d)(t),
                    err: t,
                  }),
                  !1
                );
              });
          return P.set({ promise: o, data: null }), o;
        },
        C = {
          canIUse: k,
          getUserInfo: function (t) {
            return new Promise(function (e, n) {
              var r = a.default.$native;
              if (r.getUserProfile)
                return r.getUserProfile(
                  Object(o.__assign)(Object(o.__assign)({}, t), {
                    success: function (t) {
                      (t.encryptedData = void 0), (t.iv = void 0), e(t);
                    },
                    fail: n,
                  })
                );
              r.authorize({
                scope: "scope.userInfo",
                success: function () {
                  r.getUserInfo({ withCredentials: !0, success: e, fail: n });
                },
                fail: n,
              });
            });
          },
          checkInSinglePage: function () {
            var t = Object(S.a)();
            return -1 !== [1154].indexOf(t.scene);
          },
          needPrivacyAuth: x,
          onNeedPrivacyAuth: function (t) {
            k("onNeedPrivacyAuthorization") &&
              a.default.$native.onNeedPrivacyAuthorization(function (e, n) {
                var r = T.get();
                r.add(e),
                  T.set(r),
                  "function" == typeof t && t({ eventInfo: n });
              });
          },
          requirePrivacyAuth: function (t) {
            if (k("requirePrivacyAuthorize")) {
              var e = (t || {}).ignoreCache;
              x({ ignoreCache: e }).then(function (t) {
                t && a.default.$native.requirePrivacyAuthorize();
              });
            }
          },
          resolvePrivacyAuth: function (t) {
            var e = T.get();
            e.forEach(function (e) {
              e({ buttonId: t, event: "agree" });
            }),
              e.clear(),
              T.set(e),
              x({ ignoreCache: !0 });
          },
          rejectPrivacyAuth: function (t) {
            var e = T.get();
            e.forEach(function (e) {
              e({ buttonId: t, event: "disagree" });
            }),
              e.clear(),
              T.set(e);
          },
        },
        D = Object(o.__assign)({ config: E }, C),
        N =
          ((I = Object(o.__assign)(Object(o.__assign)({}, b.config), D.config)),
          Object(o.__assign)(Object(o.__assign)(Object(o.__assign)({}, b), D), {
            config: I,
          }));
    },
    "/Wb3": function (t, e) {},
    "/XVY": function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return a;
        });
      var r = n("Fcif"),
        o = (t, e, n, r) => {
          void 0 !== e &&
            (void 0 === r &&
              (r = "function" == typeof e.default ? e.default() : e.default),
            (t[n] = r));
        },
        i = (t, e) => {
          if (e._isOptDesc) {
            var n = {};
            for (var r in t)
              if (Object.prototype.hasOwnProperty.call(t, r)) {
                var i = e[r],
                  a = t[r];
                if (/Opt$/.test(r)) n[r] = a;
                else {
                  if (!i) continue;
                  i._isOptDesc ? (n[r] = a) : o(n, i, r, a);
                }
              }
            for (var u in e)
              Object.prototype.hasOwnProperty.call(e, u) &&
                "_isOptDesc" !== u &&
                void 0 === n[u] &&
                (e[u]._isOptDesc ? (n[u] = {}) : o(n, e[u], u, void 0));
            return n;
          }
        },
        a = (t) => Object(r.a)({}, t, { _isOptDesc: !0 });
    },
    "/duV": function (t, e, n) {
      n.d(e, "c", function () {
        return y;
      }),
        n.d(e, "e", function () {
          return b;
        }),
        n.d(e, "q", function () {
          return O;
        }),
        n.d(e, "h", function () {
          return w;
        }),
        n.d(e, "a", function () {
          return j;
        }),
        n.d(e, "p", function () {
          return p;
        }),
        n.d(e, "m", function () {
          return m;
        }),
        n.d(e, "j", function () {
          return _;
        }),
        n.d(e, "f", function () {
          return A;
        }),
        n.d(e, "o", function () {
          return L;
        }),
        n.d(e, "d", function () {
          return M;
        }),
        n.d(e, "n", function () {
          return R;
        }),
        n.d(e, "k", function () {
          return U;
        }),
        n.d(e, "l", function () {
          return F;
        }),
        n.d(e, "r", function () {
          return q;
        }),
        n.d(e, "b", function () {
          return K;
        }),
        n.d(e, "g", function () {
          return z;
        }),
        n.d(e, "i", function () {
          return W;
        });
      var r = n("Sh92"),
        o = n("bb6g"),
        i = n("US/N"),
        a = n("9ZMt"),
        u = a.default.getEnv(),
        c = "weapp" === u,
        s = "/wscshopcore/extension/shop-info.json",
        f = {};
      function l(t, e, n) {
        var o = r.b.get("_shop_info_cbs_key_");
        o &&
          o.forEach(function (r) {
            try {
              r(t, e, n);
            } catch (t) {}
          });
      }
      var d = function () {
        return r.b.get("_shop_info_key_", {});
      };
      function p(t, e) {
        void 0 === t && (t = y()), (t = +t);
        var n = r.b.get("_init_key_", {}).pick,
          o = d(),
          i = n ? n(e) : e;
        (o[t] = { origin: e, data: i }), r.b.set("_shop_info_key_", o);
      }
      var h,
        v = [];
      function g(t) {
        v.length &&
          (v.forEach(function (e) {
            e && e(t);
          }),
          (v.length = 0));
      }
      function m(t, e) {
        if ((void 0 === t && (t = y()), void 0 === e && (e = {}), !t))
          return new Promise(function (t) {
            v.push(t);
          });
        var n = d()[t];
        if (n) {
          var a = n.data,
            c = n.origin;
          return e.formUpdateKdtId && l(a, c, e), g(a), Promise.resolve(a);
        }
        var p = r.b.get("_shop_info_promise_key_", {});
        if (!p[t]) {
          var h = r.b.get("_init_key_", {}),
            m = h.request,
            _ = h.pick,
            O = void 0;
          if ("web" === u && Object(r.k)() === t && !e.force) {
            var w = Object(r.o)();
            w.shop && (O = Promise.resolve(w));
          }
          O ||
            (O = m
              ? m()
              : (function (t) {
                  var e = f,
                    n = {
                      path: s,
                      data: Object(o.__assign)(Object(o.__assign)({}, e), t),
                    };
                  return Object(i.default)(n);
                })({ kdtId: t })),
            (p[t] = O.then(function (n) {
              var o = _ ? _(n) : n,
                i = d();
              return (
                (i[t] = { origin: n, data: o }),
                r.b.set("_shop_info_key_", i),
                e.force || "weapp" !== u || t === y() || t !== b()
                  ? (l(o, n, e), g(o), o)
                  : o
              );
            }));
        }
        return r.b.set("_shop_info_promise_key_", p), p[t];
      }
      function _(t) {
        if ("function" == typeof t) {
          var e = r.b.get("_shop_info_cbs_key_", []);
          e.push(t), r.b.set("_shop_info_cbs_key_", e);
        }
      }
      !(function (t) {
        t.WEB = "web";
      })(h || (h = {}));
      function y() {
        return (
          r.b.get("_kdt_id_", 0) ||
            u !== h.WEB ||
            r.b.set("_kdt_id_", Object(r.k)()),
          r.b.get("_kdt_id_", 0)
        );
      }
      function b() {
        return (
          r.b.get("_root_kdt_id_") || r.b.set("_root_kdt_id_", Object(r.n)()),
          r.b.get("_root_kdt_id_", 0)
        );
      }
      function O(t, e) {
        if ((void 0 === e && (e = { force: !1 }), !(+t > 0)))
          return Promise.reject(new Error("kdtId 不合法"));
        t = +t;
        var n = y();
        if (((e.formUpdateKdtId = !0), !e.force)) {
          if (n && t !== n && t === b()) return m(n, e);
          n === t && (e.formUpdateKdtId = !1);
        }
        !(function (t, e, n) {
          if ((void 0 === n && (n = {}), +t != +e))
            new Promise(function (o, i) {
              try {
                if (c)
                  Object(r.e)()({
                    et: "custom",
                    ei: "weapp_update_kdt_id",
                    en: "店铺kdtId更新",
                    params: {
                      preKdtId: +t,
                      targetKdtId: +e,
                      ext: n,
                      time: Date.now(),
                    },
                  });
                o(!0);
              } catch (t) {
                i(t);
              }
            });
        })(n, t, e),
          Object(i.setRequestDep)({ kdtId: t });
        var o = r.b.get("_kdt_id_cbs_");
        return (
          o &&
            o.forEach(function (r) {
              try {
                r(t, n, e);
              } catch (t) {}
            }),
          r.b.set("_kdt_id_", t),
          m(t, e)
        );
      }
      function w(t) {
        if ("function" != typeof t) return -1;
        var e = r.b.get("_kdt_id_cbs_") || [],
          n = e.push(t);
        return r.b.set("_kdt_id_cbs_", e), n;
      }
      var E = "/wscshopcore/extension/";
      var S = 6e4;
      function j(t, e) {
        void 0 === e && (e = !0);
        var n = y();
        if (!Array.isArray(t))
          return Promise.reject(new Error("keys 需要为 string[] 或者 string"));
        var o = {},
          a = [],
          u = Date.now(),
          c = r.b.get("_shop_conf_key_", {});
        return (
          e && c[n]
            ? t.forEach(function (t) {
                var e = c[n][t];
                e && u - e.time < S ? (o[t] = e.value) : a.push(t);
              })
            : (a = t),
          (function (t, e) {
            return Object(i.default)({
              path: E + "configs.json",
              method: "POST",
              query: { kdt_id: e },
              data: { keys: t },
            });
          })(a, n).then(function (t) {
            if (!t) return o;
            var e = Date.now();
            return (
              Object.keys(t).forEach(function (r) {
                c[n] || (c[n] = {}),
                  (c[n][r] = { value: t[r], time: e }),
                  (o[r] = t[r]);
              }),
              r.b.set("_shop_conf_key_", c),
              o
            );
          })
        );
      }
      function A(t) {
        void 0 === t && (t = {}),
          r.b.get("_init_key_") ||
            (r.b.set("_init_key_", t),
            Object(r.j)(t.onKdtIdChange) && w(t.onKdtIdChange),
            Object(r.j)(t.onShopInfoChange) && _(t.onShopInfoChange));
      }
      var T = "/wscshopcore/multi-store/";
      function P(t, e, n) {
        return Object(i.default)({
          path: T + "read-offlineId-by-position.json",
          query: { lat: e, lng: n, kdt_id: t },
        });
      }
      var k = "packages",
        I = [
          k + "/shop/multi-store/index/index",
          k + "/shop/multi-store/search/index",
          "pages/common/blank-page/index",
          k + "/ump/carve-coupon/index",
          /packages\/tangshi\//,
          /packages\/groupbuying\//,
          "pages/account/login/index",
        ],
        x = a.default.getEnv(),
        C = 0,
        D = 1,
        N = 2;
      function L(t) {
        if (!(+t > 0)) return Promise.reject("offlineId 必须为合法数字");
        var e,
          n,
          o = y();
        return t === M()
          ? F(o, t)
          : (Object(i.setRequestDep)({ offlineId: t }),
            (e = t),
            (n = r.b.get("_on_offline_change", [])) &&
              n.forEach(function (t) {
                try {
                  t(e);
                } catch (t) {}
              }),
            r.b.set("_offline_id_key_", t),
            q(N),
            R(o, t),
            F(o, t).then(function (t) {
              return t;
            }));
      }
      function M() {
        return (
          r.b.get("_offline_id_key_", 0) ||
            x !== h.WEB ||
            r.b.set("_offline_id_key_", Object(r.m)()),
          r.b.get("_offline_id_key_", 0)
        );
      }
      function R(t, e) {
        return (function (t, e) {
          return Object(i.default)({
            path: T + "write-offline-id-by-buyer.json",
            query: { offlineId: t, kdt_id: e },
          });
        })(e, t);
      }
      function U() {
        return r.b.get("_multi_store_location_");
      }
      function H(t) {
        r.b.set("_multi_store_location_", t);
      }
      function F(t, e) {
        var n = r.b.get("_offline_data_key", {});
        if (n[e]) return Promise.resolve(n[e]);
        var o = r.b.get("_offline_data_promise_key", {});
        if (!o[e]) {
          var a =
            "web" === x && Object(r.m)() === e
              ? Promise.resolve(Object(r.l)())
              : (function (t, e) {
                  return Object(i.default)({
                    path: T + "info-core.json",
                    query: { offlineId: e, kdt_id: t },
                  });
                })(t, e);
          o[e] = a.then(function (t) {
            return (
              (t.logo = t.logo || (t.images ? t.images[0] : "")),
              (n[e] = t),
              r.b.set("_offline_data_key", n, 60),
              t
            );
          });
        }
        return r.b.set("_offline_data_promise_key", o, 60), o[e];
      }
      function G() {
        return r.b.get("_is_enter_multi_", C);
      }
      function q(t) {
        r.b.set("_is_enter_multi_", t);
      }
      function K(t, e) {
        var n = void 0 === e ? {} : e,
          r = n.select,
          o = n.position,
          i = n.type;
        return (
          !!t &&
          !(t.indexOf("retail") > -1) &&
          !I.some(function (e) {
            return e === t || (e.test && e.test(t));
          }) &&
          void m().then(function (t) {
            var e = t.multiStore;
            return (
              G() !== D &&
              (e.isMultiStore && !M()
                ? (q(D),
                  e.openHideStore
                    ? a.default.navigate({
                        url:
                          o ||
                          "/packages/shop/multi-store/select-poi/index/index",
                        type: i,
                      })
                    : a.default.navigate({
                        url: r || "/packages/shop/multi-store/index/index",
                        type: i,
                      }))
                : void 0)
            );
          })
        );
      }
      function B(t, e) {
        return Object(r.i)({ latitude: t, longitude: e }).then(function (t) {
          var e = t.poi ? t.poi.location.lat : t.location.latitude,
            n = t.poi ? t.poi.location.lng : t.location.longitude;
          return (
            H({ latitude: e, longitude: n }),
            P(y(), e, n).then(function (e) {
              var n, r;
              return (
                (null === (n = t.poi) || void 0 === n ? void 0 : n.address) &&
                  (function (t, e, n) {
                    Object(i.default)({
                      path: T + "write-poi.json",
                      query: { kdt_id: t, offlineId: e, address: n },
                    });
                  })(
                    y(),
                    e,
                    null === (r = t.poi) || void 0 === r ? void 0 : r.address
                  ),
                e
              );
            })
          );
        });
      }
      function z(t) {
        var e = (void 0 === t ? {} : t).targetOfflineId;
        return e
          ? Promise.resolve(e)
          : m().then(function (t) {
              var e = t.multiStore;
              if (!e.isMultiStore)
                return Promise.reject("非多网点，无需再走进店");
              if (!e.autoEntryStore) return Promise.resolve(0);
              if ((q(D), 1 === e.autoEntryStore && e.offlineId))
                return e.offlineId;
              var n = y();
              return Object(r.h)().then(
                function (t) {
                  var r = t.latitude,
                    o = t.longitude;
                  return (
                    H({ latitude: r, longitude: o }),
                    e.isMultiStore && e.openHideStore ? B(r, o) : P(n, r, o)
                  );
                },
                function (t) {
                  return e.isMultiStore && e.openHideStore
                    ? (function (t) {
                        return Object(i.default)({
                          path: T + "read-poi-by-ip.json",
                          query: { kdt_id: t },
                        });
                      })(n).then(function (t) {
                        return t && t.lat && t.lng
                          ? B(t.lat, t.lng)
                          : (q(C), 0);
                      })
                    : (q(C), 0);
                }
              );
            });
      }
      function W(t) {
        if ("function" == typeof t) {
          var e = r.b.get("_on_offline_change", []);
          e.push(t), r.b.set("_on_offline_change", e);
        }
      }
    },
    "/ftW": function (t, e, n) {
      var r = n("2ktG");
      e.a = Object(r.a)();
    },
    "/ieh": function (t, e, n) {
      var r = Object.prototype.hasOwnProperty,
        o = "~";
      function i() {}
      function a(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function u(t, e, n, r, i) {
        if ("function" != typeof n)
          throw new TypeError("The listener must be a function");
        var u = new a(n, r || t, i),
          c = o ? o + e : e;
        return (
          t._events[c]
            ? t._events[c].fn
              ? (t._events[c] = [t._events[c], u])
              : t._events[c].push(u)
            : ((t._events[c] = u), t._eventsCount++),
          t
        );
      }
      function c(t, e) {
        0 == --t._eventsCount ? (t._events = new i()) : delete t._events[e];
      }
      function s() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (o = !1)),
        (s.prototype.eventNames = function () {
          var t,
            e,
            n = [];
          if (0 === this._eventsCount) return n;
          for (e in (t = this._events))
            r.call(t, e) && n.push(o ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (s.prototype.listeners = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, i = n.length, a = new Array(i); r < i; r++)
            a[r] = n[r].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (s.prototype.emit = function (t, e, n, r, i, a) {
          var u = o ? o + t : t;
          if (!this._events[u]) return !1;
          var c,
            s,
            f = this._events[u],
            l = arguments.length;
          if (f.fn) {
            switch ((f.once && this.removeListener(t, f.fn, void 0, !0), l)) {
              case 1:
                return f.fn.call(f.context), !0;
              case 2:
                return f.fn.call(f.context, e), !0;
              case 3:
                return f.fn.call(f.context, e, n), !0;
              case 4:
                return f.fn.call(f.context, e, n, r), !0;
              case 5:
                return f.fn.call(f.context, e, n, r, i), !0;
              case 6:
                return f.fn.call(f.context, e, n, r, i, a), !0;
            }
            for (s = 1, c = new Array(l - 1); s < l; s++)
              c[s - 1] = arguments[s];
            f.fn.apply(f.context, c);
          } else {
            var d,
              p = f.length;
            for (s = 0; s < p; s++)
              switch (
                (f[s].once && this.removeListener(t, f[s].fn, void 0, !0), l)
              ) {
                case 1:
                  f[s].fn.call(f[s].context);
                  break;
                case 2:
                  f[s].fn.call(f[s].context, e);
                  break;
                case 3:
                  f[s].fn.call(f[s].context, e, n);
                  break;
                case 4:
                  f[s].fn.call(f[s].context, e, n, r);
                  break;
                default:
                  if (!c)
                    for (d = 1, c = new Array(l - 1); d < l; d++)
                      c[d - 1] = arguments[d];
                  f[s].fn.apply(f[s].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (t, e, n) {
          return u(this, t, e, n, !1);
        }),
        (s.prototype.once = function (t, e, n) {
          return u(this, t, e, n, !0);
        }),
        (s.prototype.removeListener = function (t, e, n, r) {
          var i = o ? o + t : t;
          if (!this._events[i]) return this;
          if (!e) return c(this, i), this;
          var a = this._events[i];
          if (a.fn)
            a.fn !== e ||
              (r && !a.once) ||
              (n && a.context !== n) ||
              c(this, i);
          else {
            for (var u = 0, s = [], f = a.length; u < f; u++)
              (a[u].fn !== e ||
                (r && !a[u].once) ||
                (n && a[u].context !== n)) &&
                s.push(a[u]);
            s.length
              ? (this._events[i] = 1 === s.length ? s[0] : s)
              : c(this, i);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = o ? o + t : t), this._events[e] && c(this, e))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = o),
        (s.EventEmitter = s),
        (t.exports = s);
    },
    "0+Ak": function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return o;
        });
      n("tuFO"), n("w2Y9");
      var r;
      function o(t) {
        var e = t.type,
          n = void 0 === e ? r.DEFAULT : e;
        return { shopAutoEnter: r[n] ? n : r.DEFAULT };
      }
      !(function (t) {
        (t[(t.DEFAULT = 1)] = "DEFAULT"), (t[(t.DIRECT = 2)] = "DIRECT");
      })(r || (r = {}));
    },
    "0hwI": function (t, e, n) {
      var r = n("Fcif"),
        o = n("US/N");
      class i {
        ajax(t) {
          var { url: e, data: n, errorMsg: i = "", query: a } = t,
            { header: u = {} } = t;
          return (
            (u = Object(r.a)({ "content-type": "application/json" }, u)),
            new Promise((c, s) =>
              Object(o.default)(
                Object(r.a)({ origin: "h5" }, t, {
                  path: e,
                  header: u,
                  data: n,
                  query: a,
                  withCredentials: !0,
                })
              )
                .then((t) => c(t))
                .catch(function (t) {
                  return (
                    void 0 === t && (t = {}),
                    /request:/.test(t.msg || "") &&
                      (t = Object(r.a)({}, t, { msg: "网络错误" })),
                    302 === t.code
                      ? s(t)
                      : s(t.msg || "string" == typeof t ? t : i)
                  );
                })
            )
          );
        }
        jsonp(t) {
          return this.ajax(Object(r.a)({ dataType: "jsonp" }, t));
        }
      }
      ["get", "post"].forEach((t) => {
        i.prototype[t] = function (e) {
          return this.ajax(Object(r.a)({ method: t }, e));
        };
      }),
        (e.a = new i());
    },
    "12/8": function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r,
        o = (r = n("rMcU")) && r.__esModule ? r : { default: r };
      var i = function (t) {
        return (
          (t = t || new Date()) instanceof Date ||
            ("number" == typeof t && (0, o.default)(t) && (t = new Date(t)),
            "string" == typeof t &&
              ((0, o.default)(t) || (t = t.replace(/-/g, "/")),
              (0, o.default)(t) && (t = new Date(t)))),
          t
        );
      };
      (e.default = i), (t.exports = e.default);
    },
    "13Jo": function (t, e) {},
    "1Uvd": function (t, e, n) {
      function r(t) {
        var e = "",
          n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        t = t || 10;
        for (var r = 0; r < t; r++)
          e += n.charAt(Math.floor(Math.random() * n.length));
        return e;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "1pB4": function (t, e, n) {
      function r(t) {
        return "function" == typeof t;
      }
      function o(t) {
        return "string" == typeof t;
      }
      function i(t) {
        return (
          (function (t) {
            return null !== t && "object" == typeof t && !Array.isArray(t);
          })(t) &&
          r(t.then) &&
          r(t.catch)
        );
      }
      function a(t) {
        return null != t;
      }
      function u(t) {
        var e = typeof t;
        return null !== t && ("object" === e || "function" === e);
      }
      function c(t) {
        return /^\d+(\.\d+)?$/.test(t);
      }
      function s(t) {
        return "boolean" == typeof t;
      }
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "h", function () {
          return o;
        }),
        n.d(e, "g", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return l;
        }),
        n.d(e, "i", function () {
          return d;
        });
      var f = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
      function l(t) {
        return f.test(t);
      }
      function d(t) {
        return a(t) && !isNaN(new Date(t).getTime());
      }
    },
    "1r5D": function (t, e, n) {
      n.d(e, "f", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "k", function () {
          return i;
        }),
        n.d(e, "i", function () {
          return a;
        }),
        n.d(e, "g", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return c;
        }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "h", function () {
          return f;
        }),
        n.d(e, "j", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "b", function () {
          return g;
        });
      var r = function (t) {
          return null !== t && "object" == typeof t;
        },
        o = (t, e) => {
          if (!r(t)) throw Error("forEachValue 第一个参数接受一个对象");
          if ("function" != typeof e)
            throw Error("forEachValue 第二个参数接受一个函数");
          Object.keys(t).forEach((n) => e(t[n], n));
        };
      function i(t, e) {
        if (!r(t)) throw Error("reduceValue 第一个参数接受一个对象");
        if ("function" != typeof e)
          throw Error("reduceValue 第二个参数接受一个函数");
        return Object.keys(t).reduce((n, r) => {
          var o = e(r, t[r]);
          return o && (n[r] = o), n;
        }, {});
      }
      function a(t) {
        return Array.isArray(t)
          ? t.map((t) => ({ key: t, val: t }))
          : Object.keys(t).map((e) => ({ key: e, val: t[e] }));
      }
      var u = function (t) {
          return (
            !!t &&
            ("object" == typeof t || "function" == typeof t) &&
            t.constructor &&
            "Promise" === t.constructor.name &&
            "function" == typeof t.then
          );
        },
        c = function (t, e, n) {
          Object.defineProperty(t, e, { enumerable: !1, value: n });
        },
        s = function (t) {
          return (
            (!t && 0 !== t) ||
            null === t ||
            (Array.isArray(t) && 0 === t.length) ||
            ("object" == typeof t && 0 === Object.keys(t).length)
          );
        },
        f = () => {};
      function l(t) {
        return t.split(/[\.\[]/).map((t) => t.replace("]", ""));
      }
      function d(t, e) {
        var n = t;
        for (var r of l(e)) {
          if ("" === r) return n;
          if (!n || !(r in n)) return;
          n = n[r];
        }
        return n;
      }
      var p = Array.isArray,
        h = Object.keys,
        v = Object.prototype.hasOwnProperty;
      function g(t, e) {
        if (t === e) return !0;
        if (t && e && "object" == typeof t && "object" == typeof e) {
          var n,
            r,
            o,
            i = p(t),
            a = p(e);
          if (i && a) {
            if ((r = t.length) != e.length) return !1;
            for (n = r; 0 != n--; ) if (!g(t[n], e[n])) return !1;
            return !0;
          }
          if (i != a) return !1;
          var u = t instanceof Date,
            c = e instanceof Date;
          if (u != c) return !1;
          if (u && c) return t.getTime() == e.getTime();
          var s = t instanceof RegExp,
            f = e instanceof RegExp;
          if (s != f) return !1;
          if (s && f) return t.toString() == e.toString();
          var l = h(t);
          if ((r = l.length) !== h(e).length) return !1;
          for (n = r; 0 != n--; ) if (!v.call(e, l[n])) return !1;
          for (n = r; 0 != n--; ) if (!g(t[(o = l[n])], e[o])) return !1;
          return !0;
        }
        return t != t && e != e;
      }
    },
    "2CfL": function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = function (t) {
        this.ctx = t.ctx;
      };
    },
    "2ktG": function (t, e, n) {
      e.a = function (t) {
        return (
          void 0 === t && (t = {}),
          {
            set(e, n, r) {
              var o = (r = r || {}).expire || 7;
              try {
                wx.setStorageSync(e, {
                  value: n,
                  version: t.VERSION || "",
                  expire: Date.now() + 24 * o * 3600 * 1e3,
                });
              } catch (t) {}
            },
            setAsync(e, n, r) {
              void 0 === r && (r = {});
              var { expire: o = 7 } = r;
              return new Promise((r, i) => {
                wx.setStorage({
                  key: e,
                  data: {
                    value: n,
                    version: t.VERSION || "",
                    expire: Date.now() + 24 * o * 3600 * 1e3,
                  },
                  success: r,
                  fail: i,
                });
              });
            },
            get(t) {
              try {
                var e = wx.getStorageSync(t);
                if (e.expire > Date.now()) return e.value;
                wx.removeStorage({ key: t });
              } catch (t) {}
            },
            getAsync: (t) =>
              new Promise((e, n) => {
                wx.getStorage({
                  key: t,
                  success(n) {
                    var { data: r = {} } = n,
                      { expire: o = "", value: i = "" } = r;
                    o > Date.now()
                      ? e(i)
                      : (e(""), wx.removeStorage({ key: t }));
                  },
                  fail: n,
                });
              }),
            remove(t) {
              try {
                wx.removeStorageSync(t);
              } catch (t) {}
            },
            removeAsync: (t) =>
              new Promise((e, n) => {
                wx.removeStorage({ key: t, success: e, fail: n });
              }),
            clear() {
              try {
                wx.clearStorageSync();
              } catch (t) {}
            },
            clearAsync: () =>
              new Promise((t, e) => {
                wx.clearStorage({ success: t, fail: e });
              }),
          }
        );
      };
    },
    "2wjL": function (t, e, n) {
      function r(t) {
        void 0 === t && (t = "");
        var e = t.split("#")[0].split("?"),
          n = {};
        return (
          e[1] &&
            e[1].split("&").forEach((t) => {
              var e = t.split("=");
              n[e[0]] = e.slice(1).join("=");
            }),
          n
        );
      }
      e.a = {
        add: function (t, e, n) {
          if (
            (void 0 === n && (n = !1),
            !t || 0 === t.length || 0 === t.trim().indexOf("javascript"))
          )
            return "";
          var o = t.split("#"),
            i = o[0].split("?"),
            a = r(t);
          return (
            Object.keys(e).forEach((t) => {
              a[t.trim()] = n ? encodeURIComponent(e[t]) : e[t];
            }),
            (t =
              i[0] +
              ((t) => {
                var e = "";
                for (var n in t)
                  "" !== t[n] && (e += n.trim() + "=" + t[n] + "&");
                return e ? "?" + e.slice(0, e.length - 1) : "";
              })(a)),
            o[1] ? (t += "#" + o[1]) : t
          );
        },
        remove: function (t, e) {
          var n = t.split("?");
          if (n.length >= 2) {
            for (
              var r = encodeURIComponent(e) + "=",
                o = n[1].split("&"),
                i = (o = o.reduce((t, e) => t.concat(e.split(";")), [])).length;
              i-- > 0;

            )
              -1 !== o[i].lastIndexOf(r, 0) && o.splice(i, 1);
            return (t = n[0] + "?" + o.join("&"));
          }
          return t;
        },
        getAll: r,
      };
    },
    "2xJD": function (t, e, n) {
      n.d(e, "c", function () {
        return d;
      }),
        n.d(e, "d", function () {
          return p;
        }),
        n.d(e, "a", function () {
          return v;
        }),
        n.d(e, "b", function () {
          return g;
        });
      var r = n("O5ul"),
        o = n("KDJo"),
        i = n("4J1Q"),
        a = n("DoqY"),
        u = n("qHGj"),
        c = n("9hl2"),
        s = n("UyoQ"),
        f = n("YehF"),
        l = n("ZsCx");
      function d(t) {
        return (Object(o.d)(t) && Object(l.a)(t)) || g(t);
      }
      d(r.a);
      function p(t) {
        return d(t) && Object(u.d)(t);
      }
      p(r.a);
      var h;
      d((h = r.a)) && (Object(i.b)(h, "saasSolution"), a.c.EDU_WKT);
      !(function (t) {
        d(t) && Object(u.c)(t);
      })(r.a);
      !(function (t) {
        d(t) && Object(u.a)(t);
      })(r.a);
      function v(t) {
        return d(t) && !Object(u.d)(t);
      }
      v(r.a);
      function g(t) {
        return (
          Object(l.a)(t) &&
          Object(f.e)(t) &&
          Object(i.b)(t, "saasSolution") === a.c.RETAIL_MINIMALIST
        );
      }
      g(r.a);
      !(function (t) {
        g(t) && Object(u.c)(t);
      })(r.a);
      !(function (t) {
        g(t) && Object(u.a)(t);
      })(r.a);
      !(function (t) {
        g(t) && Object(c.b)(t);
      })(r.a);
      !(function (t) {
        g(t) && Object(s.a)(t);
      })(r.a);
    },
    "3tAa": function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n("9ZMt");
      function o(t, e) {
        return (
          void 0 === r.default.getGlobal(t) && r.default.setGlobal(t, e),
          [
            function () {
              return r.default.getGlobal(t);
            },
            function (e) {
              return r.default.setGlobal(t, e);
            },
          ]
        );
      }
    },
    "3tyi": function (t, e, n) {
      var r = n("JQZX");
      e.a = function (t) {
        var e = {},
          n = Array.prototype.concat.apply(
            Array.prototype,
            Array.prototype.slice.call(arguments, 1)
          );
        return (
          Object(r.a)(n, function (n) {
            n in t && (e[n] = t[n]);
          }),
          e
        );
      };
    },
    "4J1Q": function (t, e, n) {
      function r(t, e, n) {
        for (
          var r = (e + "").split("."),
            o = r.length,
            i = 0,
            a = t === Object(t) ? t : void 0;
          null != a && i < o;

        )
          a = a[r[i++]];
        return i && i === o && void 0 !== a ? a : n;
      }
      function o(t, e) {
        var n,
          r = t || {};
        return null != r[e]
          ? r[e]
          : r[
              ((n = e),
              void 0 === n && (n = ""),
              n.replace(/[A-Z]/g, function (t) {
                return "_" + t.toLowerCase();
              }))
            ];
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return o;
        });
    },
    "4jn8": function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return a;
        });
      var r = n("lE6+"),
        o = n("WMGV");
      function i(t, e) {
        var n = e.success,
          r = e.fail,
          i = e.useFail;
        (e.useFail = void 0 !== i && i),
          Object(o.a)(t, e, function (t, e, o) {
            var i;
            e && (getApp().globalData.tabBarParams = (((i = {})[e] = o), i));
            wx.switchTab({
              url: t,
              success: function () {
                "function" == typeof n && n();
              },
              fail: function () {
                "function" == typeof r &&
                  (delete getApp().globalData.tabBarParams, r());
              },
            });
          });
      }
      function a(t) {
        t.fail;
        Object(r.a)().then(function (e) {
          i(e, t);
        });
      }
    },
    "5+FR": function (t, e, n) {
      n.d(e, "c", function () {
        return a;
      }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return s;
        });
      var r = n("BZkp"),
        [o, i] = Object(r.l)("vant-tee/dialog", []);
      function a(t) {
        i([...o(), t]);
      }
      function u(t) {
        i(o().filter((e) => e !== t));
      }
      function c() {
        return (Object(r.e)() || {}).$vt_dialog_vm;
      }
      function s(t) {
        var e = Object(r.e)() || {};
        Object.defineProperty(e, "$vt_dialog_vm", {
          configurable: !0,
          enumerable: !1,
          get: () => t,
        });
      }
    },
    "50K0": function (t, e, n) {
      n.d(e, "a", function () {
        return r;
      });
      var r = {};
      n.r(r),
        n.d(r, "initPrefetchEvent", function () {
          return y;
        }),
        n.d(r, "getMiniappPrefetchRawData", function () {
          return b;
        }),
        n.d(r, "getMiniappPrefetchData", function () {
          return O;
        }),
        n.d(r, "clearMiniappPrefetchData", function () {
          return w;
        });
      var o = n("9ZMt"),
        i = n("Fcif"),
        a = n("GFyo"),
        u = n("ONqW"),
        c = "YZ_REQ_FAIL",
        s = "EXPIRED",
        f = "NOT_FOUND",
        l = "CLEARED",
        d = "FILTERED",
        p = "ERROR",
        h = "SUCCESS";
      function v(t) {
        if (t) {
          var e = t.fetchedData,
            n = JSON.parse(e),
            r = n.code,
            o = n.data;
          if (0 === r) return o;
        }
      }
      function g() {
        var t,
          e = o.default.getGlobal("__PREFETCH_DATA");
        return e
          ? Promise.resolve(e)
          : ((t = "pre"),
            o.default.$native.getBackgroundFetchData
              ? new Promise(function (e, n) {
                  o.default.$native.getBackgroundFetchData({
                    fetchType: t,
                    success: e,
                    fail: n,
                  });
                })
              : Promise.resolve(void 0)).then(function (t) {
              var e = v(t);
              return e && o.default.setGlobal("__PREFETCH_DATA", e), e;
            });
      }
      function m() {
        return Object(a.c)("__PREFETCH_CLEAR_MARKE").then(function (t) {
          return t.data;
        });
      }
      function _(t, e) {
        var n = Object(u.a)();
        n && n.log({ et: "custom", ei: t, params: e });
      }
      function y() {
        return ((t = "pre"),
        o.default.$native.onBackgroundFetchData
          ? new Promise(function (e) {
              o.default.$native.onBackgroundFetchData(function (n) {
                n.fetchType === t && (_("weapp_prefetch_init"), e(n));
              });
            })
          : Promise.resolve(void 0)).then(function (t) {
          var e = v(t);
          return e && o.default.setGlobal("__PREFETCH_DATA", e), e;
        });
        var t;
      }
      function b(t, e) {
        var n;
        return g()
          .then(function (r) {
            if (r) {
              var o = r.fetchData,
                i = void 0 === o ? {} : o,
                a = r.bizEnv,
                u = r.kdtId,
                p = r.serverTimestamp,
                v = r.version,
                g = i[t] || {},
                _ = g.expire,
                y = g.data,
                b = g.query,
                O = Date.now();
              if (!y || O - p >= _) n = y ? s : f;
              else {
                var w, E;
                if (
                  !e ||
                  ((w = e),
                  (E = { kdtId: u, bizEnv: a, version: v }),
                  Object.keys(w).every(function (t) {
                    return !w[t] || w[t] === E[t];
                  }))
                )
                  return (function (t) {
                    return m()
                      .then(function (e) {
                        return !!e && !!e[t];
                      })
                      .catch(function () {
                        return !1;
                      });
                  })(t).then(function (t) {
                    return (
                      (n = t ? l : h),
                      t
                        ? void 0
                        : {
                            fetchedData: y,
                            fetchedQuery: b,
                            bizEnv: a,
                            kdtId: u,
                            serverTimestamp: p,
                            version: v,
                          }
                    );
                  });
                n = d;
              }
            } else n = c;
          })
          .catch(function (e) {
            (n = p),
              e &&
                _("weapp_prefetch_statistics_error", {
                  status: n,
                  bizName: t,
                  error: e,
                });
          })
          .then(function (e) {
            return _("weapp_prefetch_statistics", { status: n, bizName: t }), e;
          });
      }
      function O(t, e) {
        return b(t, e).then(function (t) {
          return null == t ? void 0 : t.fetchedData;
        });
      }
      function w(t) {
        return (function (t) {
          return m()
            .catch(function () {
              return {};
            })
            .then(function (e) {
              var n;
              return (
                void 0 === e && (e = {}),
                Object(a.g)(
                  "__PREFETCH_CLEAR_MARKE",
                  Object(i.a)({}, e, (((n = {})[t] = !0), n))
                )
              );
            });
        })(t);
      }
      n("sRXO");
    },
    "5D5Y": function (t, e, n) {},
    "5Xe+": function (t, e, n) {
      var r;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = ((r = n("8xMm")) && r.__esModule ? r : { default: r }).default;
      (e.default = o), (t.exports = e.default);
    },
    "6S0u": function (t, e, n) {
      function r(t) {
        return "function" == typeof t;
      }
      function o(t) {
        return null !== t && "object" == typeof t && !Array.isArray(t);
      }
      function i(t) {
        return o(t) && r(t.then) && r(t.catch);
      }
      function a(t) {
        return null != t;
      }
      function u(t) {
        var e = typeof t;
        return null !== t && ("object" === e || "function" === e);
      }
      function c(t) {
        return /^\d+(\.\d+)?$/.test(t);
      }
      function s(t) {
        return "boolean" == typeof t;
      }
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "g", function () {
          return o;
        }),
        n.d(e, "h", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "i", function () {
          return p;
        });
      var f = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
        l = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;
      function d(t) {
        return f.test(t);
      }
      function p(t) {
        return l.test(t);
      }
    },
    "6UHP": function (t, e, n) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.isObjectLike = void 0);
      var o = (function (t) {
        if (t && t.__esModule) return t;
        if (null === t || ("object" !== r(t) && "function" != typeof t))
          return { default: t };
        var e = i();
        if (e && e.has(t)) return e.get(t);
        var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in t)
          if (Object.prototype.hasOwnProperty.call(t, a)) {
            var u = o ? Object.getOwnPropertyDescriptor(t, a) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(n, a, u)
              : (n[a] = t[a]);
          }
        (n.default = t), e && e.set(t, n);
        return n;
      })(n("kSEF"));
      function i() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return (
          (i = function () {
            return t;
          }),
          t
        );
      }
      var a = o.isObjectLike;
      e.isObjectLike = a;
      var u = o.default;
      e.default = u;
    },
    "7OPm": function (t, e, n) {
      n.r(e);
      var r = n("/Wb3");
      for (var o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      var i = n("mSE4");
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
    },
    "882d": function (t, e, n) {
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "d", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return p;
        });
      var r = n("Fcif"),
        o = n("h+Rz"),
        i = n("nibL"),
        a = n("MLLI"),
        u = n("Sipi");
      var c = { canwebp: Object(u.b)("canwebp") };
      function s(t) {
        return o.a.chooseImage(t).then(function (t) {
          return { tempFilePaths: t.tempFilePaths, tempFiles: t.tempFiles };
        });
      }
      function f(t) {
        return (
          Object(i.a)(
            Array.isArray(t.urls),
            "previewImage options.urls accept type `string[]`"
          ),
          o.a.previewImage(
            Object(r.a)({}, t, { current: t.urls[t.current || 0] })
          )
        );
      }
      function l(t) {
        return o.a.saveImageToPhotosAlbum({
          filePath: "string" == typeof t ? t : t.filePath,
        });
      }
      function d() {
        var t = !1;
        try {
          var e,
            n = Object(a.b)(),
            r = n.platform,
            o = n.system,
            i = (null == (e = /[0-9.]*$/.exec(o)) ? void 0 : e[0]) || "",
            u =
              "ios" === r &&
              !!i &&
              (function (t, e) {
                for (
                  var n = t.split("."),
                    r = e.split("."),
                    o = Math.max(n.length, r.length);
                  n.length < o;

                )
                  n.push("0");
                for (; r.length < o; ) r.push("0");
                for (var i = 0; i < o; i++) {
                  var a = parseInt(n[i], 10),
                    u = parseInt(r[i], 10);
                  if (a > u) return 1;
                  if (a < u) return -1;
                }
                return 0;
              })(i, "14.0") >= 0;
          t = "devtools" === r || "android" === r || u;
        } catch (t) {}
        return t;
      }
      function p() {
        var t = !1;
        try {
          var e = c.canwebp;
          e
            ? (t = "ok" === e)
            : ((t = d()),
              (c.canwebp = t ? "ok" : "no"),
              Object(u.d)("canwebp", c.canwebp));
        } catch (t) {}
        return t;
      }
    },
    "8Mry": function (t, e, n) {
      var r = Function.prototype,
        o = Object.prototype,
        i = r.toString,
        a = o.hasOwnProperty,
        u = o.toString,
        c = i.call(Object);
      e.a = function (t) {
        if (
          !(function (t) {
            return null !== t && "object" == typeof t;
          })(t) ||
          "[object Object]" !== u.call(t)
        )
          return !1;
        var e = Object.getPrototypeOf(Object(t));
        if (null === e) return !0;
        var n = a.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && i.call(n) === c;
      };
    },
    "8mzt": function (t, e, n) {
      var r = Object.prototype;
      var o = function (t) {
        return function (e, n) {
          var o,
            i,
            a = [];
          (o = (function (t, e) {
            void 0 === t && (t = "log");
            var n = {};
            return (
              "log" === t
                ? (n = {
                    app: e.appName || "TEST_APP",
                    log_index: e.logIndex || "TEST_LOG_INDEX",
                    level: e.level || "info",
                    tag:
                      (e.name || "undefined error name") +
                      ": " +
                      (e.message || "undefined error message"),
                  })
                : "monitor" === t &&
                  (n = {
                    app: e.appName || "TEST_APP",
                    log_index: e.logIndex || "TEST_LOG_INDEX",
                    topic: e.topic || "TEST_TOPIC",
                  }),
              (n.detail = JSON.stringify(e.detail)),
              n
            );
          })(e, n)),
            (i = function (t, e) {
              a.push(e + "=" + encodeURIComponent(t));
            }),
            Object.keys(o).forEach(function (t) {
              r.hasOwnProperty.call(o, t) && i(o[t], t);
            }),
            wx.request({
              url: t,
              method: "POST",
              header: { "Content-Type": "application/x-www-form-urlencoded" },
              data: a.join("&"),
            });
        };
      };
      function i(t) {
        return (
          void 0 === t && (t = !0),
          getCurrentPages().map(function (e) {
            var n = e ? e.route : "",
              r = n;
            if (t && e && e.options) {
              var o = e.options,
                i = void 0 === o ? [] : o;
              (r = n + "?"),
                Object.keys(i).forEach(function (t) {
                  r += t + "=" + i[t] + "&";
                }),
                (r = r.substring(0, r.length - 1));
            }
            return r;
          })
        );
      }
      function a(t) {
        void 0 === t && (t = !0);
        var e = getCurrentPages(),
          n = e[e.length - 1];
        if (!n) return "";
        if (t) {
          var r = n.options,
            o = void 0 === r ? [] : r,
            i = n.route + "?";
          return (
            Object.keys(o).forEach(function (t) {
              i += t + "=" + o[t] + "&";
            }),
            (i = i.substring(0, i.length - 1))
          );
        }
        return n.route;
      }
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var c = {},
        s = (function () {
          var t = wx.getSystemInfoSync();
          return {
            systemName: t.system,
            systemModel: t.model,
            systemBrand: t.model,
            wxVersion: t.version,
            SDKVersion: t.SDKVersion,
            currentPath: a(),
          };
        })();
      (c.dispatcher = o("https://tj.youzan.com/probe")),
        (c.paasLog = c.log =
          function (t) {
            "function" == typeof c.dispatcher &&
              c.dispatcher("log", {
                appName: t.appName || c.appName,
                logIndex: t.logIndex || c.logIndex,
                name: t.name || "error_type",
                message: t.message || "error_message",
                level: t.level || t.alert || "info",
                detail: u(
                  u({}, t.detail),
                  {},
                  {
                    extra: u(
                      u(
                        u({}, s),
                        {},
                        { currentPath: a(!1), currentRoute: a() },
                        c.extraData
                      ),
                      t.extra
                    ),
                    history: i(),
                  }
                ),
              });
          }),
        (c.monitorLog = c.monitor =
          function (t) {
            "function" == typeof c.dispatcher &&
              c.dispatcher("monitor", {
                appName: t.appName || c.appName,
                logIndex: t.logIndex || c.logIndex,
                topic: t.topic || "undefine_topic",
                detail: u(
                  u({}, t.detail),
                  {},
                  { extra: u(u(u({}, s), c.extraData), t.extra), history: i() }
                ),
              });
          }),
        (c.config = function (t) {
          var e = t || {},
            n = e.reportUrl || "https://tj.youzan.com/probe";
          (c.appName = e.appName),
            (c.logIndex = e.logIndex),
            (c.extraData = u(u({}, c.extraData || {}), e.extra || {})),
            (c.dispatcher = o(n));
        });
      var f = c;
      e.a = f;
    },
    "8xMm": function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e) {
          if ((void 0 === e && (e = []), "object" != typeof t || null === t))
            return t;
          var n = {};
          return (
            "string" == typeof e && (e = [e]),
            Array.isArray(e)
              ? (e.forEach(function (e) {
                  n[e] = t[e];
                }),
                n)
              : t
          );
        });
    },
    "9DIb": function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = a(n("6UHP")),
        o = a(n("ajWA")),
        i = a(n("cWxX"));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = function t(e) {
        var n,
          a =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if ((0, o.default)(e) && e.length > 0) n = [];
        else {
          if (!((0, r.default)(e) && Object.keys(e).length > 0)) return e;
          n = {};
        }
        for (var u = Object.keys(e), c = u.length, s = 0; s < c; s++) {
          var f = u[s],
            l = e[f];
          a && (l = t(l));
          var d = "string" == typeof f ? (0, i.default)(f) : f;
          n[d] = l;
        }
        return n;
      };
      (e.default = u), (t.exports = e.default);
    },
    "9ZMt": function (t, e, n) {
      n.r(e);
      var r = {};
      n.r(r),
        n.d(r, "useTpx", function () {
          return f;
        }),
        n.d(r, "useTvw", function () {
          return l;
        });
      var o = {};
      n.r(o),
        n.d(o, "install", function () {
          return it;
        });
      var i = Object.create(null);
      function a() {
        return (
          i.$native._teeglobal || (i.$native._teeglobal = Object.create(null)),
          i.$native._teeglobal
        );
      }
      var u = Symbol.for("$native"),
        c = Symbol.for("vm"),
        s = n("Fcif");
      function f(t) {
        return 1 * t + "px";
      }
      function l(t) {
        return "h5" === i.getEnv() ? t / 10 + "vw" : 0.75 * t + "rpx";
      }
      function d(t) {
        var e = a()._memory_;
        return e ? e[t] : void 0;
      }
      var p = () => d("APP_INSTANCE");
      var h = n("/ieh");
      function v(t) {
        return t;
      }
      var g = v,
        m = new (n.n(h).a)(),
        _ = ["errorHandler", "ui", "navigate", "navigateBack"],
        y = (t, e) => {
          var n = t[e];
          if ("function" == typeof n) {
            t[e] = function () {
              for (
                var r = arguments.length, o = new Array(r), i = 0;
                i < r;
                i++
              )
                o[i] = arguments[i];
              var a = o[0];
              if (!_.includes(a)) {
                var u = a + " 事件，未在允许列表中，请先添加";
                return g(u), t;
              }
              return "emit" === e
                ? (setTimeout(() => {
                    n.call(t, ...o);
                  }),
                  t)
                : n.call(t, ...o);
            };
          }
        };
      y(m, "on"), y(m, "off"), y(m, "once"), y(m, "emit");
      var b = m;
      function O(t, e, n) {
        if ("undefined" == typeof console) throw t;
      }
      function w(t, e, n) {
        if (b.listenerCount("errorHandler") > 0)
          try {
            return void b.emit("errorHandler", t, e, n);
          } catch (t) {
            O(t);
          }
        O(t);
      }
      function E(t, e, n) {
        if (e)
          for (var r = e; (r = r.$parent); ) {
            var o = r.$options.errorCaptured;
            if (o)
              for (var i = 0; i < o.length; i++)
                try {
                  if (!1 === o[i].call(r, t, e, n)) return;
                } catch (t) {
                  w(t, r, "errorCaptured hook");
                }
          }
        w(t, e, n);
      }
      function S(t) {
        return "function" == typeof t && /native code/.test(t.toString());
      }
      function j() {
        var t,
          e,
          n,
          r,
          o,
          i,
          a = arguments[0] || {},
          u = 1,
          { length: c } = arguments,
          s = !1;
        for (
          "boolean" == typeof a && ((s = a), (a = arguments[u] || {}), u++),
            "object" != typeof a && "function" != typeof a && (a = {}),
            u === c && ((a = this), u--);
          u < c;
          u++
        )
          if ((t = arguments[u]))
            for (e in t)
              (n = a[e]),
                a !== (r = t[e]) &&
                  (s && r && (U(r) || (o = Array.isArray(r)))
                    ? (o
                        ? ((o = !1), (i = n && Array.isArray(n) ? n : []))
                        : (i = n && U(n) ? n : {}),
                      (a[e] = j(s, i, r)))
                    : (a[e] = r));
        return a;
      }
      function A(t, e) {
        return (
          void 0 === e && (e = !0),
          D(t) ? j(e, [], t) : "" + t == "null" ? t : U(t) ? j(e, {}, t) : t
        );
      }
      (i.getEnv = function () {
        return i.platform;
      }),
        (i.mixin = function (t) {
          a().mixin = (a().mixin || []).concat(t);
        }),
        (i.style = r),
        (i.getGlobal = d),
        (i.setGlobal = function (t, e) {
          var n = a();
          (n._memory_ = n._memory_ || {}), (n._memory_[t] = e);
        }),
        (i.getApp = p),
        (i.getAppOptions = () => {
          var { options: t = {} } = p() || {},
            { path: e = "", query: n = {}, scene: r = "" } = t;
          return { path: e, query: n, scene: r };
        }),
        (i.onError = (t) => {
          b.on("errorHandler", t);
        }),
        (i.offError = (t) => {
          b.off("errorHandler", t);
        }),
        (i.on = (t, e) => {
          m.on(t, e);
        }),
        (i.off = (t, e) => {
          m.off(t, e);
        });
      var T = function (t, e) {
          void 0 === e && (e = !1);
          var n = {};
          return (
            t.split("&").forEach((t) => {
              var r = t.indexOf("=");
              if (!(r <= 0)) {
                var o = t.substr(0, r).trim(),
                  i = t.substr(r + 1).trim();
                if (
                  ((i = e ? decodeURIComponent(i) : i),
                  "[" === o[r - 2] && "]" === o[r - 1])
                ) {
                  if (!(o = o.substr(0, r - 2).trim())) return;
                  n[o] || (n[o] = []), n[o].push(i);
                } else n[o] = i;
              }
            }),
            n
          );
        },
        P = function (t, e) {
          if ((void 0 === e && (e = !1), null === t || "object" != typeof t))
            return "";
          var n = [];
          return (
            Object.keys(t).forEach((r) => {
              var o = t[r],
                i = r.trim();
              void 0 !== o &&
                (Array.isArray(o)
                  ? o.forEach((t) => {
                      (t = e ? encodeURIComponent(t) : t),
                        n.push(i + "[]=" + t);
                    })
                  : ((o = e ? encodeURIComponent(o) : o), n.push(i + "=" + o)));
            }),
            n.join("&")
          );
        },
        k = (t) => {
          if ("" === (t = t.trim()) || "javascript" === t.substr(0, 10))
            return { hashArray: [] };
          var e = t.split("#"),
            n = e[0].split("?");
          return { hashArray: e, paraArray: n };
        };
      function I(t, e) {
        if (t && t.length) {
          var n = t.indexOf(e);
          if (n > -1) return t.splice(n, 1);
        }
      }
      function x(t, e, n, r) {
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !!r,
          writable: !0,
          configurable: !0,
        });
      }
      var C = /[^\w.$]/;
      var D = Array.isArray,
        N = (t) => "function" == typeof t;
      function L(t) {
        return null !== t && "object" == typeof t;
      }
      var M = L,
        R = Object.prototype.toString;
      function U(t) {
        return "[object Object]" === R.call(t);
      }
      var { hasOwnProperty: H } = Object.prototype;
      function F(t, e) {
        return H.call(t, e);
      }
      function G(t) {
        var e = parseFloat(String(t));
        return e >= 0 && Math.floor(e) === e && isFinite(t);
      }
      function q(t, e) {
        void 0 === e && (e = !1);
        var n = (t = t.trim().replace(/[\s_-](\w)/g, function (t, e) {
          return e.toUpperCase();
        }))[0];
        return (
          e
            ? (t = n.toUpperCase() + t.substr(1))
            : n === n.toUpperCase() && (t = n.toLowerCase() + t.substr(1)),
          t
        );
      }
      function K(t, e) {
        if (t)
          return Array.isArray(t)
            ? t.forEach((t, n) => e(n, t))
            : void Object.keys(t).forEach((n) => e(n, t[n]));
      }
      var B = [String, Number, Boolean, Object, Array, Function, null],
        z = new Set(B),
        W = new Map();
      function Y(t, e) {
        return { type: z.has(t) ? t : null, default: e };
      }
      W.set(String, ""),
        W.set(Number, 0),
        W.set(Object, {}),
        W.set(Boolean, !1),
        W.set(Array, []),
        W.set(null, null);
      var $ = [
        {
          usingScope: ["page", "component"],
          methods: {
            createWebViewContext: function (t) {
              return rt.emitHook("createWebViewContext", this, t);
            },
          },
        },
        {
          usingScope: ["page"],
          data: () => ({ _pageStyle: "", _pageStyleObj: {} }),
          created() {
            this.$root.setPageStyle = this._setPageStyle;
          },
          computed: {
            _pageStyleStr() {
              return Object.keys(this._pageStyleObj).reduce(
                (t, e) => (t += e + ":" + this._pageStyleObj[e] + ";"),
                ""
              );
            },
          },
          methods: {
            _setPageStyle(t) {
              if ("string" == typeof t) {
                var e = "";
                this._pageStyle.endsWith(";") || (e = ";"),
                  (this._pageStyle = this._pageStyle + e + t);
              } else
                this._pageStyleObj = Object(s.a)({}, this._pageStyleObj, t);
            },
          },
        },
      ];
      function V(t, e, n, r) {
        var o;
        (r = Object(s.a)({ mixinGlobal: !0 }, r || {})).mixinGlobal &&
          (t.mixins = $.concat(a().mixin || []).concat(t.mixins || []));
        var { mixinScope: u } = r;
        u &&
          (t.mixins =
            null === (o = t.mixins) || void 0 === o
              ? void 0
              : o.filter((t) => {
                  var e;
                  return (
                    !t.usingScope ||
                    (null === (e = t.usingScope) || void 0 === e
                      ? void 0
                      : e.includes(u))
                  );
                }));
        var { mixins: c = [] } = t,
          f = Object.keys(n);
        K(c, (t, o) => {
          V(o, e, n, Object(s.a)({}, r, { mixinGlobal: !1 }));
        }),
          K(t, (t, r) => {
            if (
              "ud" === t ||
              "mixins" === t ||
              ("usingScope" === t && Array.isArray(r) && r.includes(u))
            );
            else if ("methods" === t)
              (e[t] = e[t] || {}), Object.assign(e[t], r);
            else if (-1 !== ["props", "computed", "watch"].indexOf(t))
              "props" === t &&
                (r = (function (t) {
                  var e = "web" === i.getEnv();
                  if (D(t))
                    return t.reduce((t, e) => ((t[e] = Y(null, null)), t), {});
                  if (M(t)) {
                    var n = {};
                    return (
                      Object.keys(t).forEach((r) => {
                        var o = t[r];
                        if (
                          (Array.isArray(o) || !o
                            ? (n[r] = Y(o, null))
                            : "object" == typeof o
                            ? (n[r] = Y(
                                o.type,
                                "function" == typeof o.default
                                  ? o.default()
                                  : "default" in o
                                  ? o.default
                                  : W.get(o.type)
                              ))
                            : z.has(o)
                            ? (n[r] = Y(o, W.get(o)))
                            : (n[r] = Y(o, null)),
                          e)
                        ) {
                          var i = n[r].default;
                          n[r].type !== Function && (n[r].default = () => i);
                        }
                      }),
                      n
                    );
                  }
                  return {};
                })(r)),
                (n[t] = n[t] || (Array.isArray(r) ? [] : {})),
                Object.assign(n[t], r);
            else if (-1 !== ["provide", "inject"].indexOf(t)) n[t] = r;
            else {
              if (-1 !== f.indexOf(t)) return n[t].push(r);
              e[t] = r;
            }
          });
      }
      var J = [
          "beforeCreate",
          "created",
          "onShow",
          "onHide",
          "beforeMount",
          "mounted",
          "destroyed",
        ],
        Z = {
          beforeCreate: "beforePageCreate",
          created: "pageCreated",
          onShow: "pageShow",
          onHide: "pageHide",
          beforeMount: "beforePageMount",
          mounted: "pageMounted",
          destroyed: "pageDestroyed",
        };
      function Q(t, e) {
        if (!t) throw new Error(e);
      }
      var X = Object(s.a)({}, Z, {
        parsePageQuery: "parsePageQuery",
        componentMountedBeforeCreateError: "componentMountedBeforeCreateError",
      });
      function tt(t, e, n) {
        function r() {
          try {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return t.apply(this, r);
          } catch (t) {
            if (!n) return;
            if (n) throw t;
          }
        }
        return void 0 === e && (e = !1), void 0 === n && (n = !0), e ? r() : r;
      }
      var et = {
        app: {
          teeLifecycle: ["onLaunch", "onShow", "onHide"],
          hooks: {
            onLaunch: "appLaunch",
            onShow: "appShow",
            onHide: "appHide",
          },
        },
        page: { teeLifecycle: J, hooks: Z },
        component: {
          teeLifecycle: [
            "beforeCreate",
            "created",
            "beforeMount",
            "mounted",
            "destroyed",
          ],
          hooks: {
            beforeCreate: "beforeComponentCreate",
            created: "componentCreated",
            beforeMount: "beforeComponentMount",
            mounted: "componentMounted",
            destroyed: "componentDestroyed",
          },
        },
      };
      function nt(t, e, n) {
        var { teeLifecycle: r, hooks: o } = et[n];
        return (n, i) => {
          var a = {};
          K(r, (n, r) => {
            var u = e[n];
            (a[u] = a[u] || []),
              a[u].push(
                (function (t, e, n, r) {
                  return function (o) {
                    tt(() => {
                      t.emitHook("pre" + q(n, !0), this, {
                        options: o,
                        runtimes: r,
                      });
                    }, !0);
                    var i = this[c];
                    if ("mounted" !== e || i) {
                      if ("beforeMount" === e) {
                        if (!i)
                          return t.emitHook(
                            X.componentMountedBeforeCreateError,
                            this,
                            this
                          );
                        i._page &&
                          ((o = t.emitHook(X.parsePageQuery, null, o) || o),
                          (i._pageQuery = o));
                      }
                      var { vm: a } = i;
                      tt(() => {
                        n && t.emitHook(n, a, { $native: this });
                      }, !0);
                      var u = r[e];
                      Q(u, e + " 运行时状态异常，应该为一个数组"),
                        u.forEach((t) => tt(t).call(a, o)),
                        "app" !== a.$scope && a.$emit("hook:" + e, o);
                    }
                  };
                })(t, r, o[r], i)
              );
          }),
            Object.keys(a).forEach((t) => {
              var e = a[t];
              n[t] = function (t) {
                e.forEach((e) => "function" == typeof e && e.call(this, t));
              };
            });
        };
      }
      var rt = new (class {
          constructor(t) {
            (this.hooks = new Map()), (this.coders = []), (this.tee = t);
          }
          set(t, e) {
            this[t] = e;
          }
          get(t) {
            return (function (t, e) {
              var n = t;
              for (var r of (function (t) {
                return t.split(/[.[]/).map((t) => t.replace("]", ""));
              })(e)) {
                if ("" === r) return n;
                if (!n || !(r in n)) return;
                n = n[r];
              }
              return n;
            })(this, t);
          }
          addHooks(t, e) {
            K(e, (t, e) => {
              var n = this.hooks.get(t) || [];
              n.push(e), this.hooks.set(t, n);
            });
          }
          addCoder(t, e) {
            this.coders.push(e);
          }
          createApp(t, e) {
            Q("function" == typeof t, "插件 'constructors.App' 配置错误");
            var n = nt(this, e, "app");
            return (e) => {
              Q("object" == typeof e, "code 必须是 Object");
              var r = {},
                o = { onLaunch: [], onHide: [], onShow: [] };
              return (
                V(e, r, o, { mixinScope: "app" }),
                (o.methods = r.methods),
                n(r, o),
                this.coders.forEach((t) => t(r, o, { scope: "app" })),
                t(r)
              );
            };
          }
          createPage(t, e) {
            Q("function" == typeof t, "插件 'constructors.Page' 配置错误"),
              Q(J.length === e.length, "插件 lifeCycle page 字段不符合规范");
            var n = nt(this, e, "page");
            return (e) => {
              Q("object" == typeof e, "code 必须是 Object");
              var r = {},
                o = {
                  data: [],
                  logicData: [],
                  beforeCreate: [],
                  created: [],
                  onHide: [],
                  onShow: [],
                  beforeMount: [],
                  mounted: [],
                  destroyed: [],
                };
              return (
                Q(!r.onLoad, "Tee 不支持 onLoad，方法需要定义在 methods 中"),
                V(e, r, o, { mixinScope: "page" }),
                (o.methods = r.methods),
                delete o.props,
                n(r, o),
                this.coders.forEach((t) => t(r, o, { scope: "page" }, e)),
                t(Object(s.a)({}, r))
              );
            };
          }
          createComponent(t, e) {
            Q("function" == typeof t, "插件 'constructors.Component' 配置错误");
            var n = nt(this, e, "component");
            return (e) => {
              Q("object" == typeof e, "code 必须是 Object");
              var r = {},
                o = {
                  data: [],
                  logicData: [],
                  created: [],
                  beforeCreate: [],
                  beforeMount: [],
                  mounted: [],
                  destroyed: [],
                };
              if (
                (V(e, r, o, { mixinScope: "component" }),
                (o.methods = r.methods),
                (o.name = r.name),
                n(r, o),
                o.props)
              ) {
                var { key: i, parser: a } =
                  this.get("platformConfig.properties") || {};
                r[i || "props"] = "function" == typeof a ? a(o.props) : o.props;
              }
              return (
                this.coders.forEach((t) => t(r, o, { scope: "component" }, e)),
                t(r)
              );
            };
          }
          emitHook(t, e, n) {
            if (this.hooks.has(t))
              for (
                var r, o = [...(this.hooks.get(t) || [])];
                (r = null == o ? void 0 : o.pop());

              ) {
                var i = r.call(e, n);
                i && (n = i);
              }
            return n;
          }
        })(i),
        ot = [
          "request",
          "getStorage",
          "setStorage",
          "getExtConfig",
          "openAddress",
        ];
      function it(t) {
        (t.navigate = function (e) {
          var { url: n, type: r, query: o } = e,
            i = t.$native;
          if ((r || (r = "navigateTo"), "string" != typeof n))
            return Promise.reject(new Error("url accept a string"));
          if (
            (function (t) {
              return /^http[s]:\/\//.test(t);
            })(n)
          ) {
            var a = (function (t) {
              try {
                var e =
                  { webviewPath: "pages/common/webview-page/index" } || {};
                return t ? e[t] : e;
              } catch (e) {
                return t ? void 0 : {};
              }
            })("webviewPath");
            if (!a)
              throw new Error(
                "webviewPath in tee.config.js is required, but got undefined."
              );
            o &&
              (n = (function (t, e, n) {
                void 0 === n && (n = !0);
                var { hashArray: r, paraArray: o } = k(t);
                if (!o) return t;
                if (o[1]) {
                  var i = Object(s.a)({}, T(o[1], !0), e);
                  o[1] = P(i, n);
                } else o.push(P(e, n));
                var a = o.join("?");
                return r[1] && (a += "#" + r[1]), a;
              })(n, o, !0)),
              (n = a + "?url=" + encodeURIComponent(n));
          }
          var u = n.startsWith("/") ? "" : "/";
          return i[r]
            ? new Promise((t, e) => {
                b.emit("navigate", { url: n, type: r }),
                  i[r]({ url: "" + u + n, success: t, fail: e });
              })
            : Promise.reject(new Error("Can't find " + r));
        }),
          (t.redirectTo = function (e) {
            return t.navigate({ url: e, type: "redirectTo" });
          }),
          (t.navigateBack = function (e) {
            return (
              void 0 === e && (e = 1),
              b.emit("navigateBack", { delta: e }),
              t.$native.navigateBack({ delta: e }),
              Promise.resolve()
            );
          });
      }
      var at = [];
      function ut(t) {
        if (t.installed) return this;
        var e = t.install || t;
        if (N(e)) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          e.apply(t, [this].concat(r));
        }
        t.installed = 1;
      }
      var ct = 0;
      class st {
        constructor() {
          (this.id = ct++), (this.subs = []);
        }
        addSub(t) {
          this.subs.push(t);
        }
        removeSub(t) {
          I(this.subs, t);
        }
        depend() {
          st.target && st.target.addDep(this);
        }
        notify() {
          for (var t = this.subs.slice(), e = 0; e < t.length; e++)
            t[e].update();
        }
      }
      st.target = null;
      var ft = [];
      var lt = (t, e) =>
          "number" == typeof t ? e + "[" + t + "]" : e + "." + t,
        dt = (t) => (L(t) && F(t, "__ob__") ? t.__ob__.op : null);
      class pt {
        constructor(t, e, n) {
          if (((this.ob = e), n)) {
            var { combinePathKeys: r, combinePathMap: o } = vt(
              t,
              n.pathKeys,
              n.pathMap
            );
            (this.pathKeys = r), (this.pathMap = o);
          } else (this.pathKeys = null), (this.pathMap = null);
        }
        traverseOp(t, e, n, r) {
          for (
            var { combinePathMap: o, combinePathKeys: i } = vt(t, e, n),
              a = [],
              u = {},
              c = !1,
              s = 0;
            s < i.length;
            s++
          ) {
            var f = r(o[i[s]], this);
            f && ((c = !0), a.push(f.path), (u[f.path] = f));
          }
          if (c) {
            var { value: l } = this.ob;
            if (Array.isArray(l))
              for (var d = 0; d < l.length; d++) {
                var p = dt(l[d]);
                p && p.traverseOp(d, a, u, r);
              }
            else
              for (var h = Object.keys(l), v = 0; v < h.length; v++) {
                var g = h[v],
                  m = dt(l[g]);
                m && m.traverseOp(g, a, u, r);
              }
          }
        }
        addPath(t) {
          this.pathKeys.push(t.path), (this.pathMap[t.path] = t);
        }
        delPath(t) {
          I(this.pathKeys, t), delete this.pathMap[t];
        }
      }
      function ht(t, e, n) {
        e.traverseOp(t, n.pathKeys, n.pathMap, function (t, e) {
          return e.delPath(t.path), t;
        });
      }
      function vt(t, e, n) {
        if (n && e) {
          for (var r = [], o = {}, i = 0; i < e.length; i++) {
            var a = lt(t, n[e[i]].path);
            r.push(a), (o[a] = { key: t, root: n[e[i]].root, path: a });
          }
          return { combinePathKeys: r, combinePathMap: o };
        }
        return {
          combinePathKeys: [t],
          combinePathMap: { [t]: { key: t, root: t, path: t } },
        };
      }
      var gt = Array.prototype,
        mt = Object.create(gt);
      function _t(t, e, n) {
        L(e) && F(e, "__ob__") && ht(t, e.__ob__.op, n.__ob__.op);
      }
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
        (t) => {
          var e = gt[t];
          x(mt, t, function () {
            var n = this,
              r = n.length;
            if (r > 0)
              switch (t) {
                case "pop":
                  _t(r - 1, n[r - 1], n);
                  break;
                case "shift":
                  _t(0, n[0], n);
                  break;
                case "splice":
                case "sort":
                case "reverse":
                  for (var o = 0; o < n.length; o++) _t(o, n[o], n);
              }
            for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
              a[u] = arguments[u];
            var c = e.apply(n, a),
              s = n.__ob__,
              { vm: f } = s;
            if (f.$dirty)
              if ("push" === t) {
                var l = s.value.length - 1;
                f.$dirty.set(s.op, l, s.value[l]);
              } else f.$dirty.set(s.op, null, s.value);
            return s.observeArray(s.value), s.dep.notify(), c;
          });
        }
      );
      var yt = new Set();
      function bt(t) {
        !(function t(e, n) {
          var r,
            o,
            i = Array.isArray(e);
          if ((!i && !L(e)) || Object.isFrozen(e)) return;
          if (e.__ob__) {
            var a = e.__ob__.dep.id;
            if (n.has(a)) return;
            n.add(a);
          }
          if (i) for (r = e.length; r--; ) t(e[r], n);
          else for (o = Object.keys(e), r = o.length; r--; ) t(e[o[r]], n);
        })(t, yt),
          yt.clear();
      }
      var Ot,
        wt,
        Et = [],
        St = !1;
      function jt() {
        St = !1;
        var t = Et.slice(0);
        Et.length = 0;
        for (var e = 0; e < t.length; e++) t[e]();
      }
      var At = !1;
      if (
        ((wt =
          "undefined" != typeof setImmediate && S(setImmediate)
            ? () => {
                setImmediate(jt);
              }
            : () => {
                setTimeout(jt, 0);
              }),
        "undefined" != typeof Promise && S(Promise))
      ) {
        var Tt = Promise.resolve();
        Ot = () => {
          Tt.then(jt);
        };
      } else Ot = wt;
      function Pt(t, e) {
        var n;
        if (
          (Et.push(() => {
            if (t)
              try {
                t.call(e);
              } catch (t) {
                E(t, e, "nextTick");
              }
            else n && n(e);
          }),
          St || ((St = !0), At ? wt() : Ot()),
          !t && "undefined" != typeof Promise)
        )
          return new Promise((t) => {
            n = t;
          });
      }
      var kt = new Map(),
        It = new Map();
      function xt(t) {
        var e = It.get(t) || [];
        if ((e.shift(), !e.length)) {
          var n = kt.get(t) || [],
            r = n.slice(0);
          n.length = 0;
          for (var o = 0; o < r.length; o++) r[o]();
        }
      }
      function Ct(t) {
        var e = xt.bind(null, t);
        return It.has(t) || It.set(t, []), (It.get(t) || []).push(1), e;
      }
      function Dt(t, e) {
        (e = e || this),
          Promise.resolve().then(() => {
            var n;
            (n = e), Lt.includes(n._watcher) ? Nt.call(this, t, e) : Pt(t, e);
          });
      }
      function Nt(t, e) {
        var n;
        if (
          ((e = e || this),
          kt.has(e) || kt.set(e, []),
          (kt.get(e) || []).push(() => {
            if (t)
              try {
                t.call(e);
              } catch (t) {
                E(t, e, "nextTick");
              }
            else n && n(e);
          }),
          !t && "undefined" != typeof Promise)
        )
          return new Promise((t) => {
            n = t;
          });
      }
      var Lt = [],
        Mt = [],
        Rt = {},
        Ut = !1,
        Ht = !1,
        Ft = 0;
      function Gt(t) {
        var e, n;
        void 0 === t && (t = 0),
          (Ht = !0),
          0 === t && Lt.sort((t, e) => t.id - e.id);
        var r = [];
        for (0 === t && (Ft = 0); Ft < Lt.length; Ft++)
          (e = Lt[Ft]) && e.isRenderWatcher
            ? r.push(e)
            : ((n = e.id),
              (Rt[n] = null),
              tt(
                () => {
                  e.run();
                },
                !0,
                !1
              ));
        r.length &&
          r.forEach((t) => {
            (Rt[t.id] = null),
              tt(
                () => {
                  t.run();
                },
                !0,
                !1
              );
          }),
          Lt.slice(Ft).length
            ? Gt(t + 1)
            : ((Ft = Lt.length = Mt.length = 0), (Rt = {}), (Ut = Ht = !1));
      }
      var qt = 0;
      class Kt {
        constructor(t, e, n, r, o) {
          if (
            ((this.key = ""),
            (this.vm = t),
            o && (t._watcher = this),
            t._watchers.push(this),
            r
              ? ((this.deep = !!r.deep),
                (this.user = !!r.user),
                (this.lazy = !!r.lazy),
                (this.sync = !!r.sync),
                (this.before = r.before))
              : (this.deep = this.user = this.lazy = this.sync = !1),
            (this.cb = n),
            (this.id = ++qt),
            (this.active = !0),
            (this.dirty = this.lazy),
            (this.deps = []),
            (this.newDeps = []),
            (this.depIds = new Set()),
            (this.newDepIds = new Set()),
            (this.isRenderWatcher = !!o),
            (this.expression = ""),
            "function" == typeof e)
          )
            this.getter = e;
          else {
            var i = (function (t) {
              if (!C.test(t)) {
                var e = t.split(".");
                return function (t) {
                  for (var n = 0; n < e.length; n++) {
                    if (!t) return;
                    t = t[e[n]];
                  }
                  return t;
                };
              }
            })(e);
            (this.getter = i || v), this.getter || (this.getter = v);
          }
          this.value = this.lazy ? void 0 : this.get();
        }
        get() {
          var t, e;
          (t = this), st.target && ft.push(st.target), (st.target = t);
          var { vm: n } = this;
          try {
            e = this.getter.call(n, n);
          } catch (t) {
            if (!this.user) throw t;
            E(t, n, 'getter for watcher "' + this.expression + '"');
          } finally {
            this.deep && bt(e),
              (st.target = ft.pop()),
              this.isRenderWatcher || this.cleanupDeps();
          }
          return e;
        }
        addDep(t) {
          var { id: e } = t;
          this.newDepIds.has(e) ||
            (this.newDepIds.add(e),
            this.newDeps.push(t),
            this.depIds.has(e) || t.addSub(this));
        }
        cleanupDeps() {
          for (var t = this.deps.length; t--; ) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this);
          }
          var n = this.depIds;
          (this.depIds = this.newDepIds),
            (this.newDepIds = n),
            this.newDepIds.clear(),
            (n = this.deps),
            (this.deps = this.newDeps),
            (this.newDeps = n),
            (this.newDeps.length = 0);
        }
        update() {
          this.lazy
            ? (this.dirty = !0)
            : this.sync
            ? this.run()
            : (function (t) {
                var { id: e } = t;
                if (null == Rt[e]) {
                  if (((Rt[e] = !0), Ht)) {
                    for (var n = Lt.length - 1; n > Ft && Lt[n].id > t.id; )
                      n--;
                    Lt.splice(n + 1, 0, t);
                  } else Lt.push(t);
                  Ut || ((Ut = !0), Pt(Gt));
                }
              })(this);
        }
        run() {
          if (this.active) {
            var t = this.get();
            if (t !== this.value || L(t) || this.deep) {
              var e = this.value;
              if (((this.value = t), this.user))
                try {
                  this.cb.call(this.vm, t, e);
                } catch (t) {
                  E(
                    t,
                    this.vm,
                    'callback for watcher "' + this.expression + '"'
                  );
                }
              else this.cb.call(this.vm, t, e);
            }
          }
        }
        evaluate() {
          if (((this.value = this.get()), this.vm.$dirty)) {
            var t =
              this._computedWatchers && this._computedWatchers[this.key]
                ? this.vm._computedWatchers[this.key].value
                : this.value;
            this.vm.$dirty.push(this.key, this.key, t, this.value);
          }
          return (this.dirty = !1), this.value;
        }
        depend() {
          if (st.target)
            for (var t = this.deps.length; t--; ) this.deps[t].depend();
        }
        teardown() {
          if (this.active) {
            this.vm._isBeingDestroyed || I(this.vm._watchers, this);
            for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
            for (var e = this.newDeps.length; e--; )
              this.newDeps[e].removeSub(this);
            (this.newDeps = []),
              (this.deps = []),
              this.newDepIds.clear(),
              this.depIds.clear(),
              (this.active = !1);
          }
        }
      }
      class Bt {
        constructor(t) {
          this.reset(),
            (this.type = t || "path"),
            (this._keys = {}),
            (this._path = {}),
            (this._length = 0);
        }
        push(t, e, n, r) {
          void 0 !== r &&
            ((this._keys[t] = n), (this._path[e] = r), this._length++);
        }
        pop() {
          var t = Object.create(null);
          return (
            "path" === this.type
              ? (t = this._path)
              : "key" === this.type && (t = this._keys),
            this.reset(),
            t
          );
        }
        get(t) {
          return "path" === t ? this._path : this._keys;
        }
        set(t, e, n) {
          var r, o;
          if (null != e) {
            var { combinePathKeys: i, combinePathMap: a } = vt(
              e,
              t.pathKeys,
              t.pathMap
            );
            (o = i), (r = a);
          } else (o = t.pathKeys), (r = t.pathMap);
          var { root: u, path: c } = r[o[0]] || {};
          this.push(u, c, u === c ? n : t.ob.vm[u], n);
        }
        reset() {
          return (this._keys = {}), (this._path = {}), (this._length = 0), this;
        }
        length() {
          return this._length;
        }
      }
      function zt(t) {
        return Object.prototype.toString.call(t);
      }
      var Wt = function (t, e, n, r, o) {
        if ((void 0 === r && (r = ""), void 0 === o && (o = !1), t !== e)) {
          var i = zt(t),
            a = zt(e);
          if ("[object Function]" === i)
            return (n.data[r] = t), void (n.isChange = !0);
          if (
            a === i &&
            (("[object Array]" === i && t.length >= e.length) ||
              "[object Object]" === i)
          ) {
            var u = { data: {}, isChange: !1, hasSplitKey: !1 },
              c = Object.keys(t),
              s = Object.keys(e);
            if (s.some((t) => -1 === c.indexOf(t)) && !o) {
              var f = r ? { [r]: A(t) } : A(t);
              return Object.assign(n.data, f), void (n.isChange = !0);
            }
            var l = c.filter((n) => {
              var r = t[n],
                o = e[n],
                a = s.indexOf(n);
              return (
                -1 !== a && s.splice(a, 1),
                r !== o &&
                  (Wt(r, o, u, "[object Array]" === i ? "[" + n + "]" : n),
                  u.isChange)
              );
            });
            if (!l.length) return void (n.isChange = !1);
            var d =
                (c.length === l.length && !u.hasSplitKey) ||
                (s.length > 0 && !o),
              p = d
                ? r
                  ? { [r]: A(t) }
                  : A(t)
                : (function (t, e, n) {
                    return (
                      void 0 === n && (n = !1),
                      Array.isArray(t)
                        ? { [e]: t }
                        : Object.keys(t).reduce(
                            (r, o) => (
                              (r[e + (e && !n ? "." : "") + o] = t[o]), r
                            ),
                            {}
                          )
                    );
                  })(u.data, r, "[object Array]" === i);
            return (
              Object.assign(n.data, p),
              (n.isChange = !0),
              void (n.hasSplitKey = n.hasSplitKey || !d)
            );
          }
          (n.data[r] = A(t)), (n.isChange = !0);
        } else n.isChange = !1;
      };
      function Yt(t, e) {
        var n = { data: {} };
        return (
          (function (t, e) {
            "[object Object]" === zt(t) &&
              Object.keys(t).forEach((n) => {
                if (/\w+\.\w+/g.test(n) && -1 === n.indexOf("[")) {
                  var r = n.split("."),
                    o = r.pop() || "",
                    i = t,
                    a = e;
                  r.forEach((t) => {
                    if (void 0 !== i[t] && "[object Object]" !== zt(i[t]))
                      throw new Error("数据冲突");
                    var e = (a && a[t]) || {},
                      n = Object(s.a)({}, e);
                    (i[t] = n), (i = n), (a = e);
                  }),
                    (i[o] = t[n]),
                    delete t[n];
                }
              });
          })(t, e),
          Wt(t, e, n, "", !0),
          n.data
        );
      }
      var $t = ["_watcher", "_computedWatchers"],
        Vt = ["_watchers"],
        Jt = Object.create(null),
        Zt = [];
      var Qt = 0;
      class Xt {
        constructor() {
          (this.data = {}),
            (this.props = {}),
            (this._watchers = []),
            (this.$events = {}),
            (this._computedWatchers = {}),
            (this.$dirty = new Bt("path")),
            (this.$refs = {}),
            (this.$id = Qt++),
            (this._isDestroyed = !1),
            (this.$nextTick = Dt),
            (this.context = {});
        }
        $set(t, e, n) {
          return ue(this, t, e, n);
        }
        $delete(t, e) {
          return ce(t, e);
        }
        $on(t, e) {
          return (
            (this.$events[t] = this.$events[t] || []),
            this.$events[t].push(e),
            this
          );
        }
        $once(t, e) {
          var n = this,
            r = function () {
              for (
                var o = arguments.length, i = new Array(o), a = 0;
                a < o;
                a++
              )
                i[a] = arguments[a];
              e.apply(n, i), n.$off(t, r);
            };
          return this.$on(t, r), this;
        }
        $off(t, e) {
          if (!t) return (this.$events = Object.create(null)), this;
          if (!this.$events[t]) return this;
          if (!e) return (this.$events[t] = []), this;
          if (e) {
            var n = this.$events[t];
            if (!n.length) return;
            for (var r = n.length; r--; ) {
              if (n[r] === e) {
                n.splice(r, 1);
                break;
              }
            }
          }
          return this;
        }
        $emit(t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          this._isDestroyed ||
            ([...(this.$events[t] || [])].forEach((e) => {
              if ("function" == typeof e)
                try {
                  e.apply(this, n);
                } catch (e) {
                  E(e, this, 'event handler for "' + t + '"');
                }
            }),
            this.triggerEvent(t, ...n));
        }
        _nativeCreated(t) {
          (this.triggerEvent = function (e) {
            for (
              var n = rt.get("platformConfig.event.triggerEvent") || v,
                r = arguments.length,
                o = new Array(r > 1 ? r - 1 : 0),
                i = 1;
              i < r;
              i++
            )
              o[i - 1] = arguments[i];
            n.call(Object(s.a)({}, this, { $native: t }), e, ...o);
          }),
            (this.$getPageQuery = function () {
              var e, n;
              return (
                (null ===
                  (n =
                    null === (e = t[c]) || void 0 === e ? void 0 : e.$root) ||
                void 0 === n
                  ? void 0
                  : n._pageQuery) || {}
              );
            }),
            (this.$getPageRoute = function () {
              var e, n;
              return (
                (null ===
                  (n =
                    null === (e = t[c]) || void 0 === e ? void 0 : e.$root) ||
                void 0 === n
                  ? void 0
                  : n._route) || {}
              );
            }),
            Object.defineProperty(this, "context", {
              get() {
                var e, n;
                return null ===
                  (n =
                    null === (e = t[c]) || void 0 === e ? void 0 : e.$root) ||
                  void 0 === n
                  ? void 0
                  : n.context;
              },
              set(e) {
                var n;
                (
                  (null === (n = t[c]) || void 0 === n ? void 0 : n.$root) || {
                    context: null,
                  }
                ).context = e;
              },
              configurable: !0,
            }),
            Object.defineProperty(this, "$is", {
              get: () => t.is || t.route,
              configurable: !0,
            }),
            Object.defineProperty(this, "$root", {
              get: () => t[c].$root,
              configurable: !0,
            }),
            Object.defineProperty(this, "_$native", {
              get: () => t,
              configurable: !0,
            });
          var e = (function (t, e, n) {
            void 0 === n && (n = 20);
            var r = {},
              o = Date.now(),
              i = null,
              a = [];
            function u() {
              if ((i && clearTimeout(i), (i = null), !e.hasDestroyed)) {
                (o = Date.now()), (i = null);
                var n = [...a],
                  u = r;
                (r = {}), (a = []);
                var c = Yt(u, Object(s.a)({}, e.data, e.props || {}));
                if (!Object.keys(c).length) return n.forEach((e) => e.call(t));
                e.setData &&
                  e.setData(c, () => {
                    n.forEach((e) => e.call(t));
                  });
              }
            }
            return function (t, c) {
              void 0 === c && (c = {});
              var s = Date.now();
              if (
                (c.cb && a.push(c.cb),
                Object.assign(r, t),
                c.immediate || e.hasMounted)
              )
                return u();
              s - o > n ? u() : i || (i = setTimeout(u, n));
            };
          })(this, t, 20);
          Object.defineProperty(this, "setData", {
            get: () => e,
            configurable: !0,
          });
        }
        $watch(t, e, n) {
          if (Array.isArray(e)) {
            var r = e.map((e) => this.$watch(t, e));
            return function () {
              r.forEach((t) => t && t());
            };
          }
          if (U(e)) {
            var { handler: o } = e;
            return (
              (n = e),
              "string" == typeof o && (o = this[o]),
              this.$watch(t, o, n)
            );
          }
          if ("string" == typeof e) {
            if (!this[e])
              return E(
                new Error("vm can't find " + e + " method."),
                this,
                "watch"
              );
            e = this[e];
          }
          (n = n || {}).user = !0;
          var i = new Kt(this, t, e, n);
          return (
            n.immediate && e.call(this, i.value),
            function () {
              i.teardown();
            }
          );
        }
        $forceUpdate() {
          this._watcher && this._watcher.update();
        }
        _nativeDestory() {
          setTimeout(() => {
            var t;
            this.$destory(),
              (t = this),
              It.delete(t),
              (function (t) {
                kt.has(t) && kt.delete(t);
              })(this),
              (this.$refs = Object.create(null));
          });
        }
        $destory() {
          var t = this;
          if (!t._isBeingDestroyed) {
            (t._isBeingDestroyed = !0), t._watcher && t._watcher.teardown();
            for (var e = t._watchers.length; e--; ) t._watchers[e].teardown();
            !(function (t) {
              $t.forEach((e) => {
                t[e] = Jt;
              }),
                Vt.forEach((e) => {
                  t[e] = Zt;
                });
            })(t),
              (t._isDestroyed = !0),
              t.$off();
          }
        }
      }
      var te = Object.getOwnPropertyNames(mt),
        ee = !0;
      class ne {
        constructor(t) {
          var { vm: e, key: n, value: r, parent: o } = t;
          ((this.value = r),
          (this.dep = new st()),
          (this.vmCount = 0),
          (this.vm = e),
          (this.op = new pt(n, this, o && o.__ob__ && o.__ob__.op)),
          x(r, "__ob__", this),
          Array.isArray(r))
            ? (((function () {
                var t = !1;
                if ("__proto__" in {}) {
                  var e = () => {},
                    n = [];
                  (n.__proto__ = { push: e }), (t = e === n.push);
                }
                return t;
              })()
                ? re
                : oe)(r, mt, te),
              this.observeArray(r))
            : this.walk(r);
        }
        walk(t) {
          for (var e = Object.keys(t), n = 0; n < e.length; n++)
            ae({ vm: this.vm, obj: t, key: e[n], value: t[e[n]], parent: t });
        }
        observeArray(t) {
          for (var e = 0, n = t.length; e < n; e++)
            ie({ vm: this.vm, key: e, value: t[e], parent: t });
        }
      }
      function re(t, e) {
        t.__proto__ = e;
      }
      function oe(t, e, n) {
        for (var r = 0, o = n.length; r < o; r++) {
          var i = n[r];
          x(t, i, e[i]);
        }
      }
      function ie(t) {
        var { vm: e, key: n, value: r, parent: o, root: i } = t;
        if (L(r) && !(r instanceof Xt)) {
          var a;
          if (F(r, "__ob__") && r.__ob__ instanceof ne) {
            a = r.__ob__;
            var { op: u } = a;
            !(function (t, e, n) {
              e.traverseOp(t, n.pathKeys, n.pathMap, function (t, e) {
                if (e.pathMap && !(t.path in e.pathMap)) return e.addPath(t), t;
                return null;
              });
            })(n, u, o && o.__ob__ && o.__ob__.op);
          } else
            ee &&
              (Array.isArray(r) || U(r)) &&
              Object.isExtensible(r) &&
              !r._isVue &&
              (a = new ne({ vm: e, key: n, value: r, parent: o }));
          return i && a && a.vmCount++, a;
        }
      }
      function ae(t) {
        var {
            vm: e,
            obj: n,
            key: r,
            value: o,
            parent: i,
            customSetter: a,
            shallow: u,
          } = t,
          c = new st(),
          s = Object.getOwnPropertyDescriptor(n, r);
        if (!s || !1 !== s.configurable) {
          var f = s && s.get;
          f || 2 !== arguments.length || (o = n[r]);
          var l = s && s.set,
            d = !u && ie({ vm: e, key: r, value: o, parent: n });
          Object.defineProperty(n, r, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var t = f ? f.call(n) : o;
              return (
                st.target &&
                  (c.depend(),
                  d && (d.dep.depend(), Array.isArray(t) && se(t))),
                t
              );
            },
            set: function (t) {
              var a = f ? f.call(n) : o;
              t === a ||
                (t != t && a != a) ||
                (L(o) &&
                  F(o, "__ob__") &&
                  ht(r, o.__ob__.op, i && i.__ob__ && i.__ob__.op),
                l ? l.call(n, t) : (o = t),
                e && e.$dirty && e.$dirty.set(n.__ob__.op, r, t),
                (d = !u && ie({ vm: e, key: r, value: t, parent: i })),
                c.notify());
            },
          });
        }
      }
      function ue(t, e, n, r) {
        if (Array.isArray(e) && G(n))
          return (e.length = Math.max(e.length, n)), e.splice(n, 1, r), r;
        if (n in e && !(n in Object.prototype)) return (e[n] = r), r;
        var o = e.__ob__;
        return e._isVue || (o && o.vmCount)
          ? r
          : o
          ? (L(e[n]) && F(e[n], "__ob__") && ht(n, e[n].__ob__.op, o.op),
            ae({ vm: t, obj: o.value, key: n, value: r, parent: o.value }),
            t && t.$dirty && F(e, "__ob__") && t.$dirty.set(e.__ob__.op, n, r),
            o.dep.notify(),
            r)
          : ((e[n] = r), r);
      }
      function ce(t, e) {
        if (Array.isArray(t) && G(e)) t.splice(e, 1);
        else {
          var n = t.__ob__;
          t._isVue ||
            (n && n.vmCount) ||
            (F(t, e) && ((t[e] = null), delete t[e], n && n.dep.notify()));
        }
      }
      function se(t) {
        for (var e, n = 0, r = t.length; n < r; n++)
          (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(),
            Array.isArray(e) && se(e);
      }
      var fe = { enumerable: !0, configurable: !0, get: v, set: v };
      function le(t, e, n) {
        (fe.get = function () {
          return this[e][n];
        }),
          (fe.set = function (t) {
            this[e][n] = t;
          }),
          Object.defineProperty(t, n, fe);
      }
      function de(t) {
        return function () {
          var e = this._computedWatchers && this._computedWatchers[t];
          if (e)
            return (
              (e.key = t),
              e.dirty && e.evaluate(),
              st.target && e.depend(),
              e.value
            );
        };
      }
      var pe = Object.prototype.toString,
        he = (t) => pe.call(t),
        ve = (t) => null !== t && "object" == typeof t;
      function ge(t, e) {
        if (!ve(t)) return t;
        if ((e = e || new Set()).has(t)) return t;
        if ((e.add(t), Array.isArray(t)))
          for (var n = 0; n < t.length; n++) ge(t[n], e);
        else if (
          "[object Set]" === he(t) ||
          ((t) => "[object Map]" === he(t))(t)
        )
          t.forEach((t) => {
            ge(t, e);
          });
        else if (ve(t))
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && ge(t[r], e);
        return t;
      }
      function me(t, e) {
        return Object.keys(e).reduce(
          (n, r) => (t.includes(r) ? n : Object(s.a)({}, n, { [r]: e[r] })),
          {}
        );
      }
      function _e(t, e) {
        var n = {};
        return (
          K(
            (function (t) {
              var e = {};
              return Array.isArray(t)
                ? t.reduce((t, e) => ((t[e] = { from: e }), t), e)
                : Object.keys(t).reduce((e, n) => {
                    var r = t[n];
                    return (
                      (e[n] = r),
                      (e[n] =
                        "string" == typeof r
                          ? { from: r }
                          : { from: r.from ? r.from : n, default: r.default }),
                      e
                    );
                  }, e);
            })(e),
            (e, r) => {
              if ("__ob__" !== e) {
                for (var o = r.from, i = t; i; ) {
                  var { vm: a } = i;
                  if (a._provided && F(a._provided, o))
                    return void (n[e] = a._provided[o]);
                  i = i.$parent;
                }
                if (r.default) {
                  var u = r.default;
                  n[e] = "function" == typeof u ? u.call(t.vm) : u;
                } else g('Injection "' + e + '" not found', t.vm);
              }
            }
          ),
          n
        );
      }
      class ye {
        constructor(t) {
          (this._page = !1),
            (this._pageQuery = {}),
            (this._route = ""),
            (this.$children = []),
            (this.context = {}),
            (this._runtimes = t),
            (this.vm = new Xt()),
            (this.id =
              "actuator__" +
              (function (t) {
                void 0 === t && (t = 10);
                for (
                  var e = t,
                    n = "",
                    r =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    o = 0;
                  o < e;
                  o++
                )
                  n += r.charAt(Math.floor(Math.random() * r.length));
                return n;
              })() +
              "__" +
              ++ye.idNum),
            t.name && (this.vm._name = t.name);
        }
        beforeCreateInvoke() {
          this.vm._nativeCreated(this[u]),
            this._runtimes.methods && this.mergeMethods(this._runtimes.methods);
        }
        create() {
          var { vm: t } = this;
          !this._page && t.$emit("_init", this),
            (function (t, e) {
              if (e) {
                var n = _e(t, e);
                Object.keys(n).forEach((e) => {
                  ae({ vm: t.vm, obj: t.vm, key: e, value: n[e], parent: "" });
                });
              }
            })(this, this._runtimes.inject),
            (function (t, e) {
              var { vm: n } = t;
              if (((n.props = {}), e)) {
                var { key: r } = rt.get("platformConfig.properties"),
                  o = t[u],
                  i = o[r];
                K(i, (t, r) => {
                  t in e &&
                    ((n.props[t] = null !== r ? r : e[t].default),
                    le(n, "props", t));
                }),
                  ie({ vm: n, key: "", value: n.props, root: !0 }),
                  Object.defineProperty(o, r, {
                    get: () => i,
                    set(t) {
                      K(t, (t, e) => {
                        e !== i[t] &&
                          t in n.props &&
                          ((n.props[t] = e), (i[t] = e));
                      });
                    },
                    configurable: !0,
                  }),
                  K(i, (t, e) => {
                    Object.defineProperty(i, t, {
                      get: () => e,
                      set(r) {
                        (e = r), (n.props[t] = e);
                      },
                      configurable: !0,
                    });
                  });
              }
            })(this, this._runtimes.props);
          var e = be.call(this, "data"),
            n = be.call(this, "logicData");
          !(function (t, e) {
            e || (e = {});
            var n = A(e);
            (t.data = n),
              Object.keys(n).forEach((e) => {
                le(t, "data", e);
              }),
              ie({ vm: t, key: "", value: n, parent: "", root: !0 }),
              t.setData(Object(s.a)({}, e), { immediate: !0 });
          })(t, e),
            (function (t, e) {
              e || (e = {});
              var n = A(e);
              (t.logicData = n),
                Object.keys(n).forEach((e) => {
                  le(t, "logicData", e);
                }),
                ie({ vm: t, key: "", value: n, parent: "", root: !0 });
            })(t, n),
            (function (t, e) {
              if (e) {
                var n = (t._computedWatchers = Object.create(null)),
                  r = { lazy: !0 };
                Object.keys(e).forEach((o) => {
                  var i = e[o],
                    a = "object" == typeof i ? i.get : i;
                  (n[o] = new Kt(t, a || v, v, r)),
                    "function" == typeof i
                      ? ((fe.get = de(o)), (fe.set = v))
                      : ((fe.get = !1 !== i.cache ? de(o) : i.get),
                        (fe.set = i.set)),
                    Object.defineProperty(t, o, fe);
                });
              }
            })(t, this._runtimes.computed),
            (function (t, e) {
              e &&
                Object.keys(e).forEach((n) => {
                  t.$watch(n, e[n]);
                });
            })(t, this._runtimes.watch),
            (function (t, e, n, r) {
              var { vm: o } = t;
              o._init = !1;
              var i = null;
              new Kt(
                o,
                tt(function () {
                  if (
                    (o._init || e.forEach((t) => ge(o[t])),
                    o.$dirty.length() || i)
                  ) {
                    var t = o.$dirty.get("key");
                    n.forEach((t) => o[t]);
                    var a = o.$dirty.pop();
                    if ((Object.keys(t).forEach((t) => ge(o[t])), a || i))
                      if (o._init) {
                        if (i) {
                          var u = Object.assign(i, a || {});
                          o.setData(me(r, u), { cb: Ct(o) }), (i = null);
                        } else o.setData(me(r, a), { cb: Ct(o) });
                      } else null === i && (i = {}), Object.assign(i, a);
                  }
                  o._init = !0;
                }),
                v,
                null,
                !0
              );
            })(
              this,
              Object.keys(t.data)
                .concat(Object.keys(t.props))
                .concat(Object.keys(t._computedWatchers || {})),
              Object.keys(t._computedWatchers || {}),
              Object.keys(t.logicData)
            ),
            (function (t, e) {
              e && (t._provided = "function" == typeof e ? e.call(t) : e);
            })(t, this._runtimes.provide);
        }
        mergeMethods(t) {
          K(t, (t, e) => {
            if (this.vm[t])
              throw new Error(t + " 已经被定义，不能使用该标识符作为方法名");
            this.vm[t] = tt(e).bind(this.vm);
          });
        }
        get nativeInstance() {
          return this[u];
        }
        static getActuator(t) {
          return t[c];
        }
        static beforeCreate() {}
        static mounted() {
          var t = ye.getActuator(this);
          t && ((this.hasMounted = !0), t.vm.$forceUpdate());
        }
        static destroyed() {
          var t = ye.getActuator(this);
          (this.hasDestroyed = !0),
            setTimeout(() => {
              var { vm: e } = this[c];
              delete ye.actuatorMap[t.id],
                e._nativeDestory(),
                (function (t) {
                  var { key: e } = rt.get("platformConfig.properties"),
                    n = t[e];
                  K(n, (t) => delete n[t]), delete t[e];
                })(this),
                delete this[c],
                [u, "vm", "$root", "$children", "$parent", "context"].forEach(
                  (e) => {
                    delete t[e];
                  }
                );
            });
        }
      }
      function be(t) {
        var e = {};
        return (
          K(this._runtimes[t], (t, n) => {
            "function" != typeof n && (n = () => n),
              tt(() => {
                Object.assign(e, n.call(this.vm));
              }, !0);
          }),
          e
        );
      }
      (ye.actuatorMap = {}), (ye.idNum = 0);
      var Oe = [
        {
          usingScope: ["page", "component"],
          methods: {
            _tic: function (t) {
              var e,
                { normalizeEvent: n = v } = rt.get("platformConfig.event"),
                { detail: r } = n(t),
                { dataset: o } = t.currentTarget || t.target,
                { ref: i } = o;
              e = "string" == typeof r ? ye.actuatorMap[r] : r;
              var a = this[c],
                { vm: u } = a;
              if (u)
                return (
                  a.$children.push(e),
                  i &&
                    (u.$refs[i] &&
                      g(
                        'duplicate ref "' +
                          i +
                          '" will be covered by the last instance.\n',
                        u
                      ),
                    (u.$refs[i] = e.vm)),
                  (e.$parent = a),
                  (e.$root = a.$root),
                  u
                );
            },
          },
        },
        {
          usingScope: ["page", "component"],
          methods: {
            _p: function (t) {
              var e, n, r, o;
              if (
                !this.hasDestroyed &&
                "object" == typeof t &&
                Object.prototype.hasOwnProperty.call(t, "type")
              ) {
                var { normalizeEvent: i = v } = rt.get("platformConfig.event"),
                  a = i(t),
                  u = this[c].vm;
                u && (u.origin = this);
                var s = q(a.type),
                  { dataset: f } = a.currentTarget || a.target,
                  { modelId: l } = f,
                  d = f.t || f.tedd,
                  { en: p, args: h = [] } = d[s];
                if ((l && (u[l] = a.detail.value), p && N(u[p]))) {
                  var g = [...h],
                    _ = A(a, !0),
                    y = f.t ? "t" : "tedd";
                  (null === (e = _.currentTarget) || void 0 === e
                    ? void 0
                    : e.dataset) &&
                    (null === (n = _.currentTarget) || void 0 === n
                      ? void 0
                      : n.dataset[y]) &&
                    delete _.currentTarget.dataset[y],
                    (null === (r = _.target) || void 0 === r
                      ? void 0
                      : r.dataset) &&
                      (null === (o = _.target) || void 0 === o
                        ? void 0
                        : o.dataset[y]) &&
                      delete _.target.dataset[y],
                    g.length
                      ? g.push(_)
                      : a.custom
                      ? g.push(_.detail, _)
                      : g.push(_),
                    m.emit("ui", { type: s, args: g.slice(0, -1), event: _ });
                  var b = g[0];
                  return b && b.__isShadow__
                    ? u[p].call(u, ...g.reverse())
                    : u[p].call(u, ...g);
                }
              }
            },
          },
        },
      ];
      class we {
        constructor(t) {
          this.executor = new ye(t);
        }
        static onLaunch(t, e) {
          var { executor: n } = new we(e);
          (this[c] = n),
            (n[u] = this),
            (n.vm = this),
            (n.vm.$scope = "app"),
            (n.vm.options = t),
            i.setGlobal("APP_INSTANCE", n.vm);
        }
        static onShow(t) {
          var e = ye.getActuator(this);
          (e.vm.options = t), i.setGlobal("APP_INSTANCE", e.vm);
        }
      }
      var Ee = [
        "onPullDownRefresh",
        "onReachBottom",
        "onShareAppMessage",
        "onPageScroll",
        "onTabItemTap",
        "onShareTimeline",
      ];
      class Se extends ye {
        constructor(t) {
          super(t),
            (this._page = !0),
            (this._runtimes = t),
            (this.$root = this),
            (this.$parent = void 0),
            (this.vm.$scope = "page");
        }
        bindNativePageApi() {
          var { nativeInstance: t } = this;
          (this._route = t.route),
            Ee.forEach((e) => {
              t[e] && (t[e] = t[e].bind(this.vm));
            });
        }
        addPageRootClickHandle() {
          this.vm._tprc = (t) => {
            this.vm.$emit("rootClick", t);
          };
        }
        static beforeCreate(t) {
          var e = new Se(t);
          (this[c] = e),
            (e[u] = this),
            e.beforeCreateInvoke(),
            e.addPageRootClickHandle(),
            e.bindNativePageApi();
        }
        static created() {
          ye.getActuator(this).create();
        }
      }
      class je extends ye {
        constructor(t) {
          super(t),
            (this._page = !1),
            (this._runtimes = t),
            (this.vm.$scope = "component");
        }
        static beforeCreate(t) {
          var e = new je(t);
          (this[c] = e), (e[u] = this), e.beforeCreateInvoke();
        }
        static created() {
          ye.getActuator(this).create();
        }
      }
      !(function (t, e) {
        if (-1 !== at.indexOf(t))
          throw new Error("已经存在名为 " + t + " 的插件");
        at.push(t);
        var { polyfill: n, hooks: r, transformCode: o } = e(i);
        n &&
          (ot.forEach((t) => {
            if (n[t]) throw new Error("插件注册的API不能与平台API冲突");
          }),
          Object.assign(i, n || {})),
          r && rt.addHooks(t, r),
          o && rt.addCoder(t, o);
      })("mini-platform", function (t) {
        return {
          hooks: {
            preAppLaunch(t) {
              we.onLaunch.call(this, t.options, t.runtimes);
            },
            preAppShow(t) {
              we.onShow.call(this, t.options);
            },
            preBeforePageCreate(t) {
              Se.beforeCreate.call(this, t.runtimes);
            },
            prePageCreated() {
              Se.created.call(this);
            },
            prePageMounted() {
              Se.mounted.call(this);
            },
            prePageDestroyed() {
              Se.destroyed.call(this);
            },
            preBeforeComponentCreate(t) {
              je.beforeCreate.call(this, t.runtimes);
            },
            preComponentCreated() {
              je.created.call(this);
            },
            preComponentMounted() {
              Se.mounted.call(this);
            },
            preComponentDestroyed() {
              Se.destroyed.call(this);
            },
          },
        };
      });
      var Ae = wx;
      var Te = {
          request: Ae.request,
          getStorage: Ae.getStorage,
          setStorage: Ae.setStorage,
          getExtConfig: Ae.getExtConfigSync,
          openAddress: function () {
            return new Promise((t, e) => {
              Ae.chooseAddress({
                success(e) {
                  t({
                    address: e.detailInfo,
                    city: e.cityName,
                    county: e.countyName,
                    userName: e.userName,
                    tel: e.telNumber,
                    province: e.provinceName,
                    areaCode: "",
                    postalCode: e.postalCode,
                  });
                },
                fail: e,
              });
            });
          },
        },
        Pe = Symbol.for("custom"),
        ke = {
          app: ["onLaunch", "onShow", "onHide"],
          page: [
            "attached",
            "attached",
            "onShow",
            "onHide",
            "onLoad",
            "ready",
            "onUnload",
          ],
          component: ["attached", "attached", "ready", "ready", "detached"],
        },
        Ie = {
          App: () => App,
          Page: () => Component,
          Component: () => Component,
        };
      function xe(t, e) {
        t[e] ? (this[e] = t[e].bind(t)) : g(e + " 在当前平台不存在");
      }
      var Ce = {
          key: "properties",
          parser: (t) =>
            Object.keys(t).reduce(
              (e, n) => ((e[n] = { type: null, value: t[n].default }), e),
              {}
            ),
        },
        De = {
          normalizeEvent(t) {
            var e,
              n,
              r = L(t.detail) && !0 === t.detail[Pe];
            return (
              r
                ? ((t.custom = r), (t.detail = t.detail.payload))
                : (t.loc = {
                    pageX:
                      null === (e = null == t ? void 0 : t.detail) ||
                      void 0 === e
                        ? void 0
                        : e.x,
                    pageY:
                      null === (n = null == t ? void 0 : t.detail) ||
                      void 0 === n
                        ? void 0
                        : n.y,
                  }),
              t
            );
          },
          triggerEvent(t, e, n) {
            var { $native: r } = this;
            "click" === t && (t = "tap"),
              r.triggerEvent(t, { [Pe]: !0, payload: e }, n);
          },
        },
        Ne = (t) => {
          var { pageFuncList: e = [], componentFuncList: n = [] } = t;
          return {
            parsePageQuery: (t) =>
              Object.keys(t).reduce(
                (e, n) => ((e[n] = decodeURIComponent(t[n])), e),
                {}
              ),
            beforePageCreate(t) {
              var { $native: n } = t;
              e.forEach((t) => {
                xe.call(this, n, t);
              });
            },
            componentCreated(t) {
              var { $native: e } = t;
              n.forEach((t) => {
                xe.call(this, e, t);
              });
            },
          };
        };
      function Le(t, e, n, r) {
        void 0 === n && (n = {});
        var { externalClasses: o } = t;
        try {
          (null == r ? void 0 : r.ud) &&
            (null == r ? void 0 : r.data) &&
            (t.data = Object(s.a)({}, t.data, r.data()));
        } catch (t) {}
        if (Array.isArray(o)) {
          var { data: i } = e;
          null == i || i.push(() => o.reduce((t, e) => ((t[q(e)] = e), t), {}));
        }
        if ("app" !== n.scope) {
          if ("page" === n.scope) {
            var a = (t.methods = t.methods || {});
            (a.onLoad = t.onLoad),
              (a.onShow = t.onShow),
              (a.onHide = t.onHide),
              (a.onUnload = t.onUnload);
          }
          (t.options = t.options || {}), (t.options.multipleSlots = !0);
        } else Object.assign(t, t.methods);
      }
      var Me = {
        pageFuncList: [
          "createIntersectionObserver",
          "setUpdatePerformanceListener",
        ],
        componentFuncList: [
          "createIntersectionObserver",
          "setUpdatePerformanceListener",
          "createSelectorQuery",
        ],
      };
      !(function (t, e) {
        if (-1 !== at.indexOf(t))
          throw new Error("已经存在名为 " + t + " 的插件");
        if (i.platform)
          throw new Error("已经存在名为 " + i.platform + " 的平台插件");
        var n = e(i),
          {
            platform: r,
            nativeApis: o,
            polyfill: a,
            constructors: u,
            lifeCycle: c,
            hooks: f,
            transformCode: l,
          } = n;
        if (
          (rt.set(
            "platformConfig",
            Object(s.a)({ properties: { key: "props" }, event: {} }, n)
          ),
          Q(o, "nativeApis 字段必须提供"),
          (i.platform = r),
          (i.$native = o),
          !a)
        )
          throw new Error("平台必须提供: " + ot + " 这些 API 的实现");
        ot.forEach((t) => {
          if (!a[t]) throw new Error("平台需要实现 " + t + " API");
        }),
          Object.assign(i, a || {}),
          Q(!!u, "平台插件必须提供 constructors 字段"),
          Q(!!c, "平台插件必须提供 lifeCycle 字段"),
          (i.app = rt.createApp(u.App(), c.app)),
          (i.page = rt.createPage(u.Page(), c.page)),
          (i.component = rt.createComponent(u.Component(), c.component)),
          f && rt.addHooks(t, f),
          l && rt.addCoder(t, l),
          at.push(t);
      })("weapp", function () {
        return {
          platform: "weapp",
          polyfill: Te,
          nativeApis: Ae,
          lifeCycle: ke,
          constructors: Ie,
          properties: Object(s.a)({}, Ce),
          event: Object(s.a)({}, De),
          hooks: Object(s.a)({}, Ne(Me)),
          transformCode: Le,
        };
      });
      e.default = (function () {
        (i.use = ut), (i.config = Object.create(null));
        var t = (function () {
          if (!i.platform)
            throw new Error("请使用 registerPlatform 注册平台插件");
          return (
            i.use(o),
            (i.requirePlugin =
              "function" == typeof requirePlugin
                ? requirePlugin
                : function () {}),
            i.requirePlugin.async ||
              (i.requirePlugin.async = function (t) {
                return Promise.resolve(i.requirePlugin(t));
              }),
            i
          );
        })();
        return (
          Oe.forEach((e) => t.mixin(e)),
          (t.set = ue.bind(t, void 0)),
          (t.delete = ce),
          (t.observe = ie),
          t
        );
      })();
    },
    "9hl2": function (t, e, n) {
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n("4J1Q"),
        o = n("DoqY"),
        i = n("O5ul"),
        a = n("gYYP"),
        u = n("Zu4f"),
        c = n("UyoQ");
      function s(t) {
        return Object(r.b)(t, "shopRole") === o.b.PARTNER;
      }
      s(i.a);
      var f;
      s((f = i.a)) && Object(a.b)(f);
      !(function (t) {
        s(t) && Object(a.a)(t);
      })(i.a);
      function l(t) {
        return Object(c.a)(t) && Object(u.a)(t);
      }
      l(i.a);
    },
    "9mDI": function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getRoot = function () {
          if ("undefined" != typeof window) return window;
          return { localStorage: null };
        }),
        (e.getStorage = function (t) {
          if ("undefined" != typeof window)
            return window.localStorage.getItem(t);
          if ("undefined" != typeof wx && wx.getStorageSync)
            return wx.getStorageSync(t);
          return null;
        }),
        (e.setStorage = function (t, e) {
          if ("undefined" != typeof window)
            return window.localStorage.setItem(t, e);
          if ("undefined" != typeof wx && wx.setStorageSync)
            return wx.setStorageSync(t, e);
          return null;
        });
    },
    "9mFz": function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "f", function () {
          return i;
        }),
        n.d(e, "g", function () {
          return a;
        }),
        n.d(e, "h", function () {
          return l;
        });
      var r = n("bb6g"),
        o = "_ranta_unlisteners";
      function i(t, e) {
        var n;
        (t[o] = t[o] || []),
          t.$once
            ? t.$once("hook:destroyed", function () {
                e.forEach(function (t) {
                  return t();
                });
              })
            : (n = t[o]).push.apply(n, e);
      }
      function a(t, e, n) {
        t._isRantaWeapp && !(null == n ? void 0 : n.setSelf)
          ? t.setYZData
            ? t.setYZData(e)
            : t.setData(e)
          : Object.assign(t, e);
      }
      var u = function (t, e, n) {
          if (!t.ctx)
            throw new Error("mapData 参数 this 上缺少必要的属性: ctx ");
          var r = n || {},
            o = r.callback,
            u = r.isActiveWhenBack,
            c = r.isSetData,
            s = void 0 === c || c,
            f = [];
          (f = Array.isArray(e)
            ? e.map(function (e) {
                var n;
                return null === (n = t.ctx) || void 0 === n
                  ? void 0
                  : n.watch(
                      e,
                      function (n) {
                        var r;
                        s && a(t, (((r = {})[e] = n), r)),
                          null == o || o.bind(t)(e, n);
                      },
                      { isActiveWhenBack: u }
                    );
              })
            : Object.keys(e).map(function (n) {
                var r;
                return null === (r = t.ctx) || void 0 === r
                  ? void 0
                  : r.watch(
                      n,
                      function (r) {
                        var o, i;
                        s && a(t, (((o = {})[n] = r), o)),
                          null === (i = e[n]) ||
                            void 0 === i ||
                            i.bind(t)(r, n);
                      },
                      { isActiveWhenBack: u }
                    );
              })),
            i(t, f);
        },
        c = function (t, e, n) {
          var o = n.callback,
            i = n.isActiveWhenBack,
            a = n.isOnce,
            c = void 0 !== a && a,
            s = n.isSetData,
            f = void 0 === s || s;
          if (!t.ctx)
            throw new Error("mapDataAll 参数 this 上缺少必要的属性: ctx ");
          var l = {},
            d = !1,
            p = e.length;
          u(t, e, {
            callback: function (e, n) {
              (l[e] = n),
                Object.keys(l).length !== p ||
                  (c && d) ||
                  ((d = !0), o.bind(t)(Object(r.__assign)({}, l)));
            },
            isActiveWhenBack: i,
            isSetData: f,
          });
        };
      Symbol.for("module/meta");
      var s = function (t, e) {
          if (!t.ctx)
            throw new Error("mapEvent 参数 this 上缺少必要的属性: ctx ");
          var n = [];
          Object.keys(e).forEach(function (r) {
            var o,
              i = e[r];
            i instanceof Function &&
              (null === (o = t.ctx) || void 0 === o || o.event.listen(r, i),
              n.push(function () {
                var e;
                return null === (e = t.ctx) || void 0 === e
                  ? void 0
                  : e.event.remove(r, i);
              }));
          }),
            i(t, n);
        },
        f = Symbol.for("module/event"),
        l =
          (Symbol.for("module/hook"),
          function () {
            return f;
          }),
        d = function (t, e) {
          if (!t.ctx)
            throw new Error("mapProcess 参数 this 上缺少必要的属性: ctx ");
          var n = [];
          Object.keys(e).forEach(function (r) {
            var o,
              i = e[r];
            i instanceof Function &&
              (null === (o = t.ctx) || void 0 === o || o.process.define(r, i),
              n.push(function () {
                var e;
                return null === (e = t.ctx) || void 0 === e
                  ? void 0
                  : e.process.undef(r, i);
              }));
          }),
            i(t, n);
        };
    },
    AGZf: function (t, e, n) {
      var r = n("Fcif"),
        o = n("9ZMt"),
        i = n("1pB4"),
        a = n("e8xm"),
        u = {
          type: "text",
          mask: !1,
          message: "",
          show: !0,
          zIndex: "var(--van-toast-zIndex, 1000)",
          duration: 2e3,
          position: "middle",
          forbidClick: !1,
          loadingType: "circular",
        },
        c = [],
        s = Object(r.a)({}, u);
      function f(t) {
        return void 0 === t && (t = ""), Object(i.f)(t) ? t : { message: t };
      }
      var l = (t) => {
          var e = Object(r.a)({}, s, f(t)),
            { __vanToastArray: n = [] } = o.default.$native,
            i = t.ref || Object(a.b)();
          if ((i || (i = n[n.length - 1]), i))
            return (
              (i.clear = () => {
                i.setDataWithProps({ show: !1 }), e.onClose && e.onClose();
              }),
              delete e.ref,
              c.push(i),
              i.setDataWithProps(e),
              clearTimeout(i.timer),
              e.duration > 0 &&
                (i.timer = setTimeout(() => {
                  i.clear(), (c = c.filter((t) => t !== i));
                }, e.duration)),
              i
            );
        },
        d = (t) => (e) => l(Object(r.a)({ type: t }, f(e)));
      (l.loading = d("loading")),
        (l.success = d("success")),
        (l.fail = d("fail")),
        (l.clear = () => {
          c.forEach((t) => {
            t.clear();
          }),
            (c = []);
        }),
        (l.setDefaultOptions = (t) => {
          Object.assign(s, t);
        }),
        (l.resetDefaultOptions = () => {
          s = Object(r.a)({}, u);
        }),
        (e.a = l);
    },
    AHKF: function (t, e, n) {
      var r = Array.isArray;
      e.a = r;
    },
    AXNr: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var r = n("2wjL");
      function o() {
        var t = "";
        try {
          var e = getCurrentPages();
          t = e[e.length - 1].route;
        } catch (t) {}
        return t;
      }
      function i() {
        var t = "";
        try {
          var e = getCurrentPages(),
            n = e[e.length - 1];
          t = r.a.add(n.route, n.options || {});
        } catch (t) {}
        return t;
      }
    },
    B5ln: function (t, e, n) {
      n.r(e);
      var r = n("c514");
      n.d(e, "AuthType", function () {
        return r.c;
      }),
        n.d(e, "EAuthorizeItems", function () {
          return r.d;
        }),
        n.d(e, "AuthPopType", function () {
          return r.b;
        }),
        n.d(e, "EAuthorizePopupType", function () {
          return r.e;
        }),
        n.d(e, "AuthActionType", function () {
          return r.a;
        });
      var o = n("NotG");
      n.d(e, "EResolveAction", function () {
        return o.a;
      });
      var i = n("equh");
      for (var a in i)
        [
          "default",
          "AuthType",
          "EAuthorizeItems",
          "AuthPopType",
          "EAuthorizePopupType",
          "AuthActionType",
          "EResolveAction",
        ].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      var u = n("mMP1");
      n.d(e, "UserGender", function () {
        return u.a;
      });
      var c = n("I9eD");
      for (var a in c)
        [
          "default",
          "AuthType",
          "EAuthorizeItems",
          "AuthPopType",
          "EAuthorizePopupType",
          "AuthActionType",
          "EResolveAction",
          "UserGender",
        ].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(a);
    },
    BANk: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("Fcif"),
        o = n("9ZMt");
      function i(t) {
        return o.default.$native.uploadFile(
          Object(r.a)({}, t, {
            name: t.fileName,
            success: function (e) {
              void 0 === e && (e = { data: "", statusCode: "" }),
                t.success &&
                  t.success(
                    Object(r.a)({}, e, { statusCode: String(e.statusCode) })
                  );
            },
          })
        );
      }
    },
    BCRw: function (t, e, n) {
      var r = n("e+GP").default;
      function o() {
        (t.exports = o =
          function () {
            return e;
          }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
        var e = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          u = "function" == typeof Symbol ? Symbol : {},
          c = u.iterator || "@@iterator",
          s = u.asyncIterator || "@@asyncIterator",
          f = u.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function d(t, e, n, r) {
          var o = e && e.prototype instanceof v ? e : v,
            i = Object.create(o.prototype),
            u = new P(r || []);
          return a(i, "_invoke", { value: S(t, n, u) }), i;
        }
        function p(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = d;
        var h = {};
        function v() {}
        function g() {}
        function m() {}
        var _ = {};
        l(_, c, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(k([])));
        b && b !== n && i.call(b, c) && (_ = b);
        var O = (m.prototype = v.prototype = Object.create(_));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          var n;
          a(this, "_invoke", {
            value: function (o, a) {
              function u() {
                return new e(function (n, u) {
                  !(function n(o, a, u, c) {
                    var s = p(t[o], t, a);
                    if ("throw" !== s.type) {
                      var f = s.arg,
                        l = f.value;
                      return l && "object" == r(l) && i.call(l, "__await")
                        ? e.resolve(l.__await).then(
                            function (t) {
                              n("next", t, u, c);
                            },
                            function (t) {
                              n("throw", t, u, c);
                            }
                          )
                        : e.resolve(l).then(
                            function (t) {
                              (f.value = t), u(f);
                            },
                            function (t) {
                              return n("throw", t, u, c);
                            }
                          );
                    }
                    c(s.arg);
                  })(o, a, n, u);
                });
              }
              return (n = n ? n.then(u, u) : u());
            },
          });
        }
        function S(t, e, n) {
          var r = "suspendedStart";
          return function (o, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === o) throw i;
              return I();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var u = j(a, n);
                if (u) {
                  if (u === h) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var c = p(t, e, n);
              if ("normal" === c.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), c.arg === h)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              "throw" === c.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
            }
          };
        }
        function j(t, e) {
          var n = e.method,
            r = t.iterator[n];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                j(t, e),
                "throw" === e.method)) ||
                ("return" !== n &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              h
            );
          var o = p(r, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), h
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              h);
        }
        function A(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function T(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(A, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[c];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                r = function e() {
                  for (; ++n < t.length; )
                    if (i.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (r.next = r);
            }
          }
          return { next: I };
        }
        function I() {
          return { value: void 0, done: !0 };
        }
        return (
          (g.prototype = m),
          a(O, "constructor", { value: m, configurable: !0 }),
          a(m, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(m, f, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), l(t, f, "GeneratorFunction")),
              (t.prototype = Object.create(O)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          w(E.prototype),
          l(E.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(d(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          w(O),
          l(O, f, "Generator"),
          l(O, c, function () {
            return this;
          }),
          l(O, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = k),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(T),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    i.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var u = i.call(o, "catchLoc"),
                    c = i.call(o, "finallyLoc");
                  if (u && c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), T(n), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    T(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          e
        );
      }
      (t.exports = o),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    BSAF: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n("bb6g"),
        o = function (t, e) {
          void 0 === e && (e = !1);
          var n = {};
          return (
            t.split("&").forEach(function (t) {
              var r = t.indexOf("=");
              if (!(r <= 0)) {
                var o = t.substr(0, r).trim(),
                  i = t.substr(r + 1).trim();
                if (
                  ((i = e ? decodeURIComponent(i) : i),
                  "[" === o[r - 2] && "]" === o[r - 1])
                ) {
                  if (!(o = o.substr(0, r - 2).trim())) return;
                  n[o] || (n[o] = []), n[o].push(i);
                } else n[o] = i;
              }
            }),
            n
          );
        },
        i = function (t, e) {
          if ((void 0 === e && (e = !1), null === t || "object" != typeof t))
            return "";
          var n = [];
          return (
            Object.keys(t).forEach(function (r) {
              var o = t[r],
                i = r.trim();
              void 0 !== o &&
                (Array.isArray(o)
                  ? o.forEach(function (t) {
                      (t = e ? encodeURIComponent(t) : t),
                        n.push("".concat(i, "[]=").concat(t));
                    })
                  : ((o = e ? encodeURIComponent(o) : o),
                    n.push("".concat(i, "=").concat(o))));
            }),
            n.join("&")
          );
        },
        a = function (t) {
          if (
            "" === (t = "".concat(t).trim()) ||
            "javascript" === t.substr(0, 10)
          )
            return { hashArray: [] };
          var e = t.split("#"),
            n = e[0].split("?");
          return { hashArray: e, paraArray: (n = "" === n[1] ? [n[0]] : n) };
        };
      function u(t, e) {
        void 0 === t && (t = ""), void 0 === e && (e = !1);
        var n = a(t).paraArray;
        return (n && o(n[1] || "", e)) || {};
      }
      var c = {
        add: function (t, e, n) {
          void 0 === n && (n = !0);
          var u = a(t),
            c = u.hashArray,
            s = u.paraArray;
          if (!s) return t;
          if (s[1]) {
            var f = r.__assign(r.__assign({}, o(s[1], !0)), e);
            s[1] = i(f, n);
          } else s.push(i(e, n));
          var l = s.join("?");
          return c[1] && (l += "#".concat(c[1])), l;
        },
        remove: function (t, e) {
          var n = a(t),
            r = n.hashArray,
            o = n.paraArray;
          if (!o) return t;
          o[1] &&
            (o[1] = (function (t, e) {
              for (var n = t.indexOf(e), r = "", o = 0; n >= 0; ) {
                if (
                  ((r += t.substring(o, n)), 0 === (o = t.indexOf("&", n) + 1))
                )
                  return r.substr(0, Math.max(r.length - 1, 0));
                n = t.indexOf(e, o);
              }
              return (r += t.substr(o));
            })(o[1], "".concat(e, "=")));
          var i = o.join("?");
          return r[1] && (i += "#".concat(r[1])), i;
        },
        get: function (t, e, n) {
          return (
            void 0 === n && (n = !0),
            e ||
              "undefined" == typeof window ||
              (e = (window.location && window.location.href) || ""),
            u(e, n)[t]
          );
        },
        getAll: u,
      };
      e.default = c;
    },
    BZkp: function (t, e, n) {
      n.d(e, "h", function () {
        return i;
      }),
        n.d(e, "j", function () {
          return a;
        }),
        n.d(e, "g", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "c", function () {
          return f;
        }),
        n.d(e, "k", function () {
          return l;
        }),
        n.d(e, "i", function () {
          return d;
        }),
        n.d(e, "l", function () {
          return p;
        }),
        n.d(e, "f", function () {
          return h;
        }),
        n.d(e, "d", function () {
          return v;
        }),
        n.d(e, "e", function () {
          return g;
        });
      var r = n("9ZMt"),
        o = n("1pB4");
      function i(t) {
        return ("00" + t).slice(-2);
      }
      function a(t, e, n) {
        return Math.min(Math.max(t, e), n);
      }
      function u(t) {
        setTimeout(() => {
          t();
        }, 1e3 / 30);
      }
      function c(t) {
        if (Object(o.b)(t))
          return (t = String(t)), Object(o.e)(t) ? t + "px" : t;
      }
      function s(t, e) {
        var n = Math.pow(10, 10);
        return Math.round((t + e) * n) / n;
      }
      function f(t, e) {
        return String(t) === String(e);
      }
      function l(t) {
        return Object.keys(t)
          .map((e) => {
            return (
              ((n = e)
                ? n.replace(
                    /[A-Z]/g,
                    (t, e) => (0 === e ? "" : "-") + t[0].toLowerCase()
                  )
                : "") +
              ": " +
              t[e]
            );
            var n;
          })
          .join(";");
      }
      function d(t, e) {
        return e.reduce((e, n) => ((e[n] = t[n]), e), {});
      }
      function p(t, e) {
        return (
          void 0 === r.default.getGlobal(t) && r.default.setGlobal(t, e),
          [() => r.default.getGlobal(t), (e) => r.default.setGlobal(t, e)]
        );
      }
      function h(t, e) {
        return new Promise((n) => {
          t.createSelectorQuery()
            .select(e)
            .boundingClientRect()
            .exec(function (t) {
              return void 0 === t && (t = []), n(t[0] || []);
            });
        });
      }
      function v(t, e, n) {
        return new Promise((r) => {
          var o = 0,
            i = () => {
              t.createSelectorQuery()
                .selectAll(e, n)
                .boundingClientRect()
                .exec(function (t) {
                  void 0 === t && (t = []);
                  var e = t[0] || [];
                  if (!e.length && o < 3) return o++, i();
                  r(e);
                });
            };
          i();
        });
      }
      function g() {
        var t = getCurrentPages();
        return t[t.length - 1];
      }
    },
    Btea: function (t, e, n) {
      n.r(e),
        n.d(e, "storage", function () {
          return r;
        }),
        n.d(e, "getExtConfigByKey", function () {
          return g;
        }),
        n.d(e, "useGlobal", function () {
          return m.a;
        }),
        n.d(e, "externalClassesMixin", function () {
          return _.a;
        });
      var r = {};
      n.r(r),
        n.d(r, "remove", function () {
          return u;
        }),
        n.d(r, "removeAsync", function () {
          return c;
        }),
        n.d(r, "set", function () {
          return s;
        }),
        n.d(r, "setAsync", function () {
          return f;
        }),
        n.d(r, "get", function () {
          return l;
        }),
        n.d(r, "getAsync", function () {
          return d;
        });
      var o = n("Sipi"),
        i = n("GFyo");
      function a(t) {
        return void 0 === t && (t = 7), Date.now() + 24 * t * 3600 * 1e3;
      }
      function u(t) {
        try {
          Object(o.c)(t);
        } catch (t) {}
      }
      function c(t) {
        return Object(i.e)(t);
      }
      function s(t, e, n) {
        void 0 === n && (n = {});
        try {
          return Object(o.d)(t, { value: e, expire: a(n.expire) });
        } catch (t) {}
      }
      function f(t, e, n) {
        return (
          void 0 === n && (n = {}),
          Object(i.g)(t, { value: e, expire: a(n.expire) })
        );
      }
      function l(t) {
        try {
          var e = Object(o.b)(t);
          if (!e) return;
          if (e.expire > Date.now()) return e.value;
          c(t);
        } catch (t) {}
      }
      function d(t) {
        return Object(i.c)(t).then(function (e) {
          var n = e.data;
          if (n) {
            var r = n.expire,
              o = n.value,
              i = void 0 === o ? "" : o;
            if (r > Date.now()) return i;
            c(t);
          }
        });
      }
      var p = n("U0uK"),
        h = n("o5pj"),
        v = {};
      function g(t) {
        try {
          return (
            Object(h.b)(v) && p.a && (v = Object(p.a)()),
            t ? Object(h.a)(v, t) : v
          );
        } catch (t) {
          return {};
        }
      }
      var m = n("3tAa"),
        _ = n("n6zP");
    },
    By4c: function (t, e, n) {
      var r = n("qTUJ"),
        o = [
          "onLaunch",
          "onLoad",
          "onReady",
          "onShow",
          "onHide",
          "onError",
          "onUnload",
          "onPullDownRefresh",
          "onReachBottom",
          "onPageScroll",
        ],
        i = (t) => "__$" + t;
      e.a = function (t) {
        void 0 === t && (t = {});
        var { life: e = o, exclude: n = [] } = t,
          a = n.concat(o.map(i));
        if (!Array.isArray(e) || !Array.isArray(n))
          throw new Error("Invalid Extend Config");
        var u = e.filter((t) => o.indexOf(t) >= 0);
        return function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1;
            o < e;
            o++
          )
            n[o - 1] = arguments[o];
          return (
            n.forEach((e) => {
              e &&
                Object.keys(e).forEach((n) => {
                  var o = e[n];
                  if (!(a.indexOf(n) >= 0))
                    if (u.indexOf(n) >= 0 && "function" == typeof o) {
                      var c = i(n);
                      t[c] ||
                        ((t[c] = []),
                        t[n] && t[c].push(t[n]),
                        (t[n] = function (e) {
                          "onLaunch" === n || ("onShow" === n && e)
                            ? (e.query = Object(r.a)(e.query))
                            : "onLoad" === n &&
                              ((e = Object(r.a)(e)), (this.options = e || {})),
                            t[c].forEach((t) => t.apply(this, [e]));
                        })),
                        e[c] ? t[c].push(...e[c]) : t[c].push(o);
                    } else t[n] = o;
                });
            }),
            t
          );
        };
      };
    },
    CKld: function (t, e, n) {
      var r = n("bb6g"),
        o = n("9ZMt"),
        i = "__PASSPORT_TEE_";
      e.a = {
        init: function (t, e, n) {
          return (
            void 0 === n && (n = {}),
            o.default.setGlobal(i + t, {
              data: e,
              time: Date.now(),
              expire: n.expire,
            }),
            e
          );
        },
        get: function (t, e, n) {
          void 0 === n && (n = {});
          var r = o.default.getGlobal(i + t) || {},
            a = r.data,
            u = r.time,
            c = r.expire;
          return u ? (c && Date.now() - u > c ? e : a) : this.init(t, e, n);
        },
        set: function (t, e, n) {
          void 0 === n && (n = {});
          var r = { data: e, time: Date.now() };
          n.expire && (r.expire = n.expire), o.default.setGlobal(i + t, r);
        },
        setObj: function (t, e, n) {
          var a;
          void 0 === n && (n = {});
          var u = o.default.getGlobal(i + t);
          this.set(
            t,
            Object(r.__assign)(
              Object(r.__assign)(
                {},
                null !== (a = null == u ? void 0 : u.data) && void 0 !== a
                  ? a
                  : {}
              ),
              e
            ),
            n
          );
        },
      };
    },
    DEHM: function (t, e, n) {
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "g", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "h", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return s;
        }),
        n.d(e, "f", function () {
          return f;
        });
      var r = "getAppTokenHook",
        o = "checkLoginGlobalHook",
        i = "teeLoginFailHook",
        a = "beforeYouzanLoginHook",
        u = "youzanLoginFailHook",
        c = "mobileChangeHook",
        s = "authOneAfterHook",
        f = "protocolBeforeAgreeHook";
    },
    DXKY: function (t, e, n) {
      var r = /\s+/,
        o = function (t, e, n, o) {
          if (!n) return !0;
          if ("object" == typeof n) {
            for (var i in n) t[e](...[i, n[i]].concat(o));
            return !1;
          }
          if (r.test(n)) {
            for (var a = n.split(r), u = 0, c = a.length; u < c; u++)
              t[e](...[a[u]].concat(o));
            return !1;
          }
          return !0;
        },
        i = function (t) {
          try {
            t();
          } catch (t) {}
        },
        a = function (t, e) {
          var n,
            r = -1,
            o = t.length,
            a = e[0],
            u = e[1],
            c = e[2];
          switch (e.length) {
            case 0:
              for (; ++r < o; )
                i(function () {
                  (n = t[r]).callback.call(n.ctx);
                });
              return;
            case 1:
              for (; ++r < o; )
                i(function () {
                  (n = t[r]).callback.call(n.ctx, a);
                });
              return;
            case 2:
              for (; ++r < o; )
                i(function () {
                  (n = t[r]).callback.call(n.ctx, a, u);
                });
              return;
            case 3:
              for (; ++r < o; )
                i(function () {
                  (n = t[r]).callback.call(n.ctx, a, u, c);
                });
              return;
            default:
              for (; ++r < o; )
                i(function () {
                  (n = t[r]).callback.apply(n.ctx, e);
                });
          }
        },
        u = {
          on(t, e, n) {
            return o(this, "on", t, [e, n]) && e
              ? (this._events || (this._events = {}),
                (this._events[t] || (this._events[t] = [])).push({
                  callback: e,
                  context: n,
                  ctx: n || {},
                }),
                this)
              : this;
          },
          once(t, e, n) {
            if (!o(this, "once", t, [e, n]) || !e) return this;
            var r,
              i,
              a,
              u = this,
              c =
                ((r = function () {
                  u.off(t, c), e.apply(this, arguments);
                }),
                (a = !1),
                function () {
                  return (
                    a || ((a = !0), (i = r.apply(this, arguments)), (r = null)),
                    i
                  );
                });
            return (c._callback = e), this.on(t, c, n);
          },
          off(t, e, n) {
            var r, i, a, u, c, s, f, l;
            if (!this._events || !o(this, "off", t, [e, n])) return this;
            if (!t && !e && !n) return (this._events = {}), this;
            for (
              c = 0, s = (u = t ? [t] : Object.keys(this._events)).length;
              c < s;
              c++
            )
              if (((t = u[c]), (a = this._events[t]))) {
                if (((this._events[t] = r = []), e || n))
                  for (f = 0, l = a.length; f < l; f++)
                    (i = a[f]),
                      ((e && e !== i.callback && e !== i.callback._callback) ||
                        (n && n !== i.context)) &&
                        r.push(i);
                r.length || delete this._events[t];
              }
            return this;
          },
          trigger(t) {
            if (!this._events) return this;
            var e = [].slice.call(arguments, 1);
            if (!o(this, "trigger", t, e)) return this;
            var n = this._events[t],
              r = this._events.all;
            return n && a(n, e), r && a(r, arguments), this;
          },
        };
      e.a = u;
    },
    DXqK: function (t, e, n) {
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "d", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return c;
        });
      function r(t) {
        return (t = t < 10 ? "0" + t : "" + t);
      }
      function o(t) {
        t = t > 0 ? t : 0;
        var e = Math.floor(t / 1e3),
          n = e,
          r = Math.floor(n / 86400);
        n = e - 86400 * r;
        var o = Math.floor(n / 3600);
        n -= 3600 * o;
        var i = Math.floor(n / 60),
          u = (n -= 60 * i),
          c = Math.floor((t % 1e3) / 100);
        return {
          data: {
            day: r,
            hour: o,
            minute: i,
            second: u,
            hundredMilliseconds: c,
          },
          strData: {
            day: r + "",
            hour: a(o),
            minute: a(i),
            second: a(u),
            hundredMilliseconds: "" + c,
          },
        };
      }
      function i(t, e) {
        if (
          (void 0 === e && (e = "YYYY:MM:DD"),
          t || 0 === t || (t = new Date()),
          "Invalid Date" === (t = new Date(t)).toString())
        )
          throw new Error("Invalid Date");
        var n = (t) => ("00" + t).slice(-2),
          r = {
            "YYYY|yyyy": t.getFullYear(),
            "YY|yy": t.getFullYear().toString().substr(2),
            MM: n(t.getMonth() + 1),
            M: t.getMonth() + 1,
            "DD|dd": n(t.getDate()),
            "D|d": t.getDate(),
            "HH|hh": n(t.getHours()),
            "H|h": t.getHours(),
            mm: n(t.getMinutes()),
            m: t.getMinutes(),
            ss: n(t.getSeconds()),
            s: t.getSeconds(),
          };
        return (
          Object.keys(r).forEach((t) => {
            e = e.replace(new RegExp(t), r[t]);
          }),
          e
        );
      }
      function a(t) {
        return t > 9 ? "" + t : "0" + t;
      }
      function u(t) {
        if (!(t < 0)) {
          var e = o(t).data,
            n = [];
          return (
            e.day && n.push({ value: e.day, unit: "天" }),
            n.push({ value: r(e.hour), unit: "时" }),
            n.push({ value: r(e.minute), unit: "分" }),
            n.push({ value: r(e.second), unit: "秒" }),
            (n.toTimeString = () =>
              [r(e.hour), r(e.minute), r(e.second)].join(":")),
            (n.toString = () =>
              n.reduce((t, e) => {
                var { value: n, unit: r } = e;
                return (t += n + r);
              }, "")),
            (n.toDateString = () =>
              [
                e.day,
                "天",
                r(e.hour),
                "小时",
                r(e.minute),
                "分",
                r(e.second),
                "秒",
              ].join(" ")),
            n
          );
        }
      }
      function c(t, e, n) {
        void 0 === e && (e = new Date()), void 0 === n && (n = "day");
        var r = e.getFullYear(),
          o = e.getMonth(),
          i = e.getDate();
        return new Date(
          "year" === n ? r + t : r,
          "month" === n ? o + t : o,
          "day" === n ? i + t : i
        );
      }
      e.b = {
        formatDayWithZero: r,
        formatMonthWithZero: function (t) {
          return (t = t + 1 < 10 ? "0" + (t + 1) : "" + (t + 1));
        },
        format: o,
        moment: i,
        getTomorrow: function () {
          var t = Date.now() + 864e5,
            e = new Date(t).getFullYear(),
            n = new Date(t).getMonth() + 1,
            r = new Date(t).getDate();
          return (t = new Date(e + "-" + n + "-" + r).getTime());
        },
      };
    },
    DoqY: function (t, e, n) {
      var r, o, i, a, u, c, s, f, l, d;
      n.d(e, "e", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return c;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return l;
        }),
        (function (t) {
          (t.TRY = "try"),
            (t.VAILD = "valid"),
            (t.PROTECT = "protect"),
            (t.PAUSE = "pause"),
            (t.CLOSE = "close"),
            (t.DELETE = "delete"),
            (t.PREPARE = "prepare"),
            (t.INVALID = "invalid");
        })(r || (r = {})),
        (function (t) {
          (t.BIG_CUSTOMER = "100"),
            (t.KUAI_SHOU = "50"),
            (t.NORMAL = "0"),
            (t.XHW = "-10");
        })(o || (o = {})),
        (function (t) {
          (t[(t.OPEN = 1)] = "OPEN"), (t[(t.REST = 0)] = "REST");
        })(i || (i = {})),
        (function (t) {
          (t[(t.WSC = 0)] = "WSC"),
            (t[(t.W_X_D = 1)] = "W_X_D"),
            (t[(t.A_X_D = 2)] = "A_X_D"),
            (t[(t.PF = 3)] = "PF"),
            (t[(t.PF_MALL = 4)] = "PF_MALL"),
            (t[(t.CATERING = 5)] = "CATERING"),
            (t[(t.BEAUTY = 6)] = "BEAUTY"),
            (t[(t.RETAIL = 7)] = "RETAIL"),
            (t[(t.CASHIER = 8)] = "CASHIER"),
            (t[(t.WSC_CASHIER = 9)] = "WSC_CASHIER"),
            (t[(t.HQ_CENTER = 10)] = "HQ_CENTER"),
            (t[(t.WAREHOUSE = 11)] = "WAREHOUSE"),
            (t[(t.PLATFORM_SUPPLIER = 12)] = "PLATFORM_SUPPLIER"),
            (t[(t.EXTERNAL_SHOP = 13)] = "EXTERNAL_SHOP"),
            (t[(t.SUPPLIER = 14)] = "SUPPLIER"),
            (t[(t.INTERNATIONAL_SHOP = 15)] = "INTERNATIONAL_SHOP"),
            (t[(t.QI_WEI = 16)] = "QI_WEI"),
            (t[(t.GUANG = 17)] = "GUANG"),
            (t[(t.SP = 18)] = "SP"),
            (t[(t.PH = 19)] = "PH"),
            (t[(t.GUANG_CPS = 20)] = "GUANG_CPS"),
            (t[(t.COMMON = 99)] = "COMMON");
        })(a || (a = {})),
        (function (t) {
          (t[(t.SINGLE_STORE = 0)] = "SINGLE_STORE"),
            (t[(t.HQ = 1)] = "HQ"),
            (t[(t.BRANCH = 2)] = "BRANCH"),
            (t[(t.WAREHOUSE = 3)] = "WAREHOUSE"),
            (t[(t.PARTNER = 4)] = "PARTNER"),
            (t[(t.THIRD_STORE = 5)] = "THIRD_STORE"),
            (t[(t.FX_SHRED = 6)] = "FX_SHRED"),
            (t[(t.FRONT_WAREHOUSE = 7)] = "FRONT_WAREHOUSE"),
            (t[(t.THIRD_OFFLINE_STORE = 9)] = "THIRD_OFFLINE_STORE"),
            (t[(t.PHYSICAL_OFFLINE_STORE = 10)] = "PHYSICAL_OFFLINE_STORE");
        })(u || (u = {})),
        (function (t) {
          (t[(t.DIRECT_STORE = 1)] = "DIRECT_STORE"),
            (t[(t.JOIN_STORE = 2)] = "JOIN_STORE"),
            (t[(t.STOCK_STORE = 3)] = "STOCK_STORE"),
            (t[(t.PARTNER = 4)] = "PARTNER");
        })(c || (c = {})),
        (function (t) {
          (t[(t.RETAIL_SINGLE = 1)] = "RETAIL_SINGLE"),
            (t[(t.RETAIL_CHAIN = 2)] = "RETAIL_CHAIN"),
            (t[(t.RETAIL_MINIMALIST = 7003)] = "RETAIL_MINIMALIST"),
            (t[(t.EDU_WKT = 2001)] = "EDU_WKT");
        })(s || (s = {})),
        (function (t) {
          (t[(t.RETAIL_CHAIN_OFFLINE = 1)] = "RETAIL_CHAIN_OFFLINE"),
            (t[(t.RETAIL_CHAIN_AREA = 2)] = "RETAIL_CHAIN_AREA");
        })(f || (f = {})),
        (function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.EDU = 1)] = "EDU"),
            (t[(t.HOTEL = 2)] = "HOTEL");
        })(l || (l = {})),
        (function (t) {
          (t.STORE = "store"),
            (t.ONLINE_SHOP = "onlineShop"),
            (t.SUPPLIER_SHOP = "supplierShop"),
            (t.WAREHOUSE = "warehouse"),
            (t.FRONT_WAREHOUSE = "frontWarehouse");
        })(d || (d = {}));
      var p;
      new Map([
        [d.STORE, "门店"],
        [d.ONLINE_SHOP, "区域网店"],
        [d.SUPPLIER_SHOP, "供货商"],
        [d.WAREHOUSE, "仓库"],
        [d.FRONT_WAREHOUSE, "前置仓"],
      ]);
      !(function (t) {
        (t[(t.ONLINE = 0)] = "ONLINE"),
          (t[(t.OFFLINE = 1)] = "OFFLINE"),
          (t[(t.MEI_TUAN = 200)] = "MEI_TUAN"),
          (t[(t.E_LE_ME = 201)] = "E_LE_ME"),
          (t[(t.MULTI_PLATFORM_KUAI_SHOU = 301)] = "MULTI_PLATFORM_KUAI_SHOU"),
          (t[(t.MULTI_PLATFORM_DOU_YIN = 302)] = "MULTI_PLATFORM_DOU_YIN"),
          (t[(t.DOU_YIN = 400)] = "DOU_YIN"),
          (t[(t.TENCENT_HUI_JU = 501)] = "TENCENT_HUI_JU"),
          (t[(t.RED_BOOK = 600)] = "RED_BOOK"),
          (t[(t.TMALL = 701)] = "TMALL"),
          (t[(t.JD = 702)] = "JD");
      })(p || (p = {}));
      new Map([
        [p.ONLINE, "网店渠道"],
        [p.OFFLINE, "门店渠道"],
        [p.MEI_TUAN, "美团外卖"],
        [p.E_LE_ME, "饿了么外卖"],
        [p.MULTI_PLATFORM_KUAI_SHOU, "多平台快手渠道"],
        [p.MULTI_PLATFORM_DOU_YIN, "多平台抖音渠道"],
        [p.DOU_YIN, "抖音"],
        [p.TENCENT_HUI_JU, "腾讯惠聚"],
        [p.RED_BOOK, "小红书"],
        [p.TMALL, "天猫"],
        [p.JD, "京东"],
      ]);
    },
    ECkf: function (t, e, n) {
      var r;
      function o() {
        return null == r && (r = wx.getSystemInfoSync()), r;
      }
      function i(t) {
        return (
          (function (t, e) {
            (t = t.split(".")), (e = e.split("."));
            for (var n = Math.max(t.length, e.length); t.length < n; )
              t.push("0");
            for (; e.length < n; ) e.push("0");
            for (var r = 0; r < n; r++) {
              var o = parseInt(t[r], 10),
                i = parseInt(e[r], 10);
              if (o > i) return 1;
              if (o < i) return -1;
            }
            return 0;
          })(o().SDKVersion, t) >= 0
        );
      }
      function a() {
        return i("2.9.3");
      }
      function u() {
        return i("2.10.3");
      }
      function c() {
        return i("2.4.0");
      }
      function s() {
        try {
          return wx.canIUse("nextTick");
        } catch (t) {
          return i("2.7.1");
        }
      }
      function f() {
        return !!wx.getUserProfile;
      }
      n.d(e, "f", function () {
        return o;
      }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return f;
        });
    },
    EqB2: function (t, e, n) {
      var r = n("/XVY");
      e.a = function (t) {
        var { optDesc: e } = void 0 === t ? {} : t;
        return {
          props: { _opt: Object },
          computed: {
            opt() {
              return Object(r.b)(this._opt, e || {});
            },
          },
        };
      };
    },
    Eu17: function (t, e, n) {
      var r, o;
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        (function (t) {
          (t.AUTH_ONE = "auth_comp_result"),
            (t.AUTH_END = "auth_comp_finish"),
            (t.AUTH_BTN_CLICK = "auth_btn_click"),
            (t.NATIVE_MOBILE_CLICK = "native_mobile_click"),
            (t.ACCOUNT_COMMON = "account_common");
        })(r || (r = {})),
        (function (t) {
          (t.TRACK = "track"), (t.SKYNET = "skynet");
        })(o || (o = {}));
    },
    FA1P: function (t, e, n) {
      var r = n("1r5D"),
        o = Array.prototype,
        i = Object.create(o);
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
        (t) => {
          var e = o[t];
          Object(r.a)(i, t, function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            var i,
              a = e.apply(this, r),
              u = this.__ob__;
            switch (t) {
              case "push":
              case "unshift":
                i = r;
                break;
              case "splice":
                i = r.slice(2);
            }
            return i && u.observeArray(this), a;
          });
        }
      );
      var a = i,
        u = n("OEy0"),
        c = Object.getOwnPropertyNames(a);
      class s {
        constructor(t, e, n) {
          var { get: r, set: o } = void 0 === n ? {} : n;
          (this.enumerable = !0),
            (this.configurable = !0),
            (this.dep = new u.a()),
            (this._key = e),
            (this._value = t),
            (this._setter = o),
            (this._getter = r),
            (this.get = this.get.bind(this)),
            (this.set = this.set.bind(this)),
            this.observe(t);
        }
        get() {
          return (
            u.a.target && this.dep.depend(),
            this._getter ? this._getter() : this._value
          );
        }
        set(t) {
          Object(r.b)(t, this._value) ||
            (this._setter ? this._setter(t) : this.observe(t),
            this.dep.notify());
        }
        observe(t) {
          if (Array.isArray(t))
            return (
              (this._value = []),
              void (this.attachArrayProps(this._value) && this.observeArray(t))
            );
          if (Object(r.f)(t) && !Object(r.e)(t)) {
            var e = {};
            Object(r.a)(e, "__ob__", this),
              Object.keys(t).forEach((n) => {
                "function" != typeof t[n] && f(e, n, t[n]);
              }),
              (this._value = e);
          } else this._value = t;
        }
        observeArray(t) {
          t.forEach((t, e) => {
            f(this._value, e, t);
          }),
            this.dep.notify();
        }
        attachArrayProps(t) {
          return (
            Object(r.a)(t, "__ob__", this),
            c.forEach((e) => {
              Object(r.a)(t, e, a[e]);
            }),
            t
          );
        }
      }
      function f(t, e, n) {
        var r = Object.getOwnPropertyDescriptor(t, e);
        if (!r || !1 !== r.configurable) {
          var o = new s(n, e, r);
          return Object.defineProperty(t, e, o), o;
        }
      }
      e.a = f;
    },
    Fcif: function (t, e, n) {
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    FsGU: function (t, e, n) {
      var r, o;
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        (function (t) {
          (t[(t.UN_SIGN = 0)] = "UN_SIGN"),
            (t[(t.SIGN = 1)] = "SIGN"),
            (t[(t.FREEZE = 2)] = "FREEZE"),
            (t[(t.INVALID = 3)] = "INVALID");
        })(r || (r = {})),
        (function (t) {
          (t.INIT = "init"),
            (t.AUTH = "auth"),
            (t.SHOW = "show"),
            (t.SHOW_BEFORE = "show-before"),
            (t.SHOW_AFTER = "show-after"),
            (t.CLOSE = "close"),
            (t.HIDE_AFTER = "hide-after"),
            (t.AGREE = "agree"),
            (t.DISAGREE = "disagree"),
            (t.DESTROYED = "destroyed");
        })(o || (o = {}));
    },
    GFyo: function (t, e, n) {
      n.d(e, "g", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n("h+Rz"),
        o = n("Sipi");
      function i(t, e) {
        return r.a.setStorage({ key: t, data: e });
      }
      function a(t) {
        return r.a
          .getStorage({ key: t })
          .then(function (t) {
            return t;
          })
          .catch(function (t) {
            return t && t.errMsg && -1 !== t.errMsg.indexOf("data not found")
              ? { data: null }
              : Promise.reject(t);
          });
      }
      function u(t) {
        return r.a.removeStorage({ key: t });
      }
      function c() {
        return r.a.clearStorage();
      }
      n.d(e, "b", function () {
        return o.a;
      }),
        n.d(e, "d", function () {
          return o.b;
        }),
        n.d(e, "f", function () {
          return o.c;
        }),
        n.d(e, "h", function () {
          return o.d;
        });
    },
    GjIH: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return i;
        });
      var r = n("3tAa");
      function o(t, e) {
        var n = Object(r.a)(t, e);
        return { get: n[0], set: n[1] };
      }
      function i(t, e) {
        var n = Object(r.a)(t, e),
          o = n[0],
          i = n[1],
          a = function () {
            return o() || [];
          };
        return {
          get: a,
          add: function (t) {
            i(a().concat(t));
          },
          remove: function (t) {
            i(
              a().filter(function (e) {
                return e !== t;
              })
            );
          },
        };
      }
    },
    HSl3: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n("9ZMt");
      function o() {
        return r.default.$native.getPerformance();
      }
    },
    HnuB: function (t, e, n) {
      n.r(e);
      var r = n("oYRf");
      for (var o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      var i = n("7OPm");
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      var a = n("+Ky8");
      n.d(e, "TeeEnvEnum", function () {
        return a.a;
      });
      var u = n("FsGU");
      n.d(e, "SIGN_STATE", function () {
        return u.b;
      }),
        n.d(e, "InvokeProtocolEvent", function () {
          return u.a;
        });
      var c = n("B5ln");
      for (var o in c)
        ["default", "TeeEnvEnum", "SIGN_STATE", "InvokeProtocolEvent"].indexOf(
          o
        ) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(o);
      var s = n("ceQz");
      for (var o in s)
        ["default", "TeeEnvEnum", "SIGN_STATE", "InvokeProtocolEvent"].indexOf(
          o
        ) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return s[t];
            });
          })(o);
      var f = n("kKb7");
      for (var o in f)
        ["default", "TeeEnvEnum", "SIGN_STATE", "InvokeProtocolEvent"].indexOf(
          o
        ) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return f[t];
            });
          })(o);
    },
    I9eD: function (t, e) {},
    Ix7h: function (t, e, n) {
      e.a = function (t, e, n) {
        var r,
          o,
          i,
          a = 0;
        n || (n = {});
        var u = function () {
            (a = !1 === n.leading ? 0 : new Date().getTime()),
              (r = null),
              t.apply(o, i),
              r || (o = i = null);
          },
          c = function () {
            var c = new Date().getTime();
            a || !1 !== n.leading || (a = c);
            var s = e - (c - a);
            (o = this),
              (i = arguments),
              s <= 0 || s > e
                ? (r && (clearTimeout(r), (r = null)),
                  (a = c),
                  t.apply(o, i),
                  r || (o = i = null))
                : r || !1 === n.trailing || (r = setTimeout(u, s));
          };
        return (
          (c.cancel = function () {
            clearTimeout(r), (a = 0), (r = null);
          }),
          c
        );
      };
    },
    J1LG: function (t, e, n) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    JLxb: function (t, e, n) {
      var r = n("8Mry"),
        o = n("AHKF"),
        i = n("gXaT");
      e.a = function t(e, n) {
        var a;
        if ((void 0 === n && (n = !0), Object(o.a)(e) && e.length > 0)) a = [];
        else {
          if (!(Object(r.a)(e) && Object.keys(e).length > 0)) return e;
          a = {};
        }
        for (var u = Object.keys(e), c = u.length, s = 0; s < c; s++) {
          var f = u[s],
            l = e[f];
          n && (l = t(l)), (a["string" == typeof f ? Object(i.a)(f) : f] = l);
        }
        return a;
      };
    },
    JQZX: function (t, e, n) {
      e.a = function (t, e, n) {
        if (null != t)
          if (t.length === +t.length)
            for (var r = 0, o = t.length; r < o; r++) e.call(n, t[r], r, t);
          else
            for (var i = Object.keys(t), a = 0, u = i.length; a < u; a++)
              e.call(n, t[i[a]], i[a], t);
      };
    },
    KDJo: function (t, e, n) {
      n.d(e, "d", function () {
        return c;
      }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "f", function () {
          return h;
        }),
        n.d(e, "b", function () {
          return v;
        }),
        n.d(e, "c", function () {
          return g;
        }),
        n.d(e, "a", function () {
          return y;
        });
      var r = n("O5ul"),
        o = n("4J1Q"),
        i = n("qHGj"),
        a = n("DoqY"),
        u = [a.e.WSC, a.e.A_X_D, a.e.WSC_CASHIER];
      function c(t) {
        return -1 !== u.indexOf(Object(o.b)(t, "shopType"));
      }
      c(r.a);
      function s(t) {
        return c(t) && Object(i.d)(t);
      }
      s(r.a);
      function f(t) {
        return c(t) && Object(i.c)(t);
      }
      var l = f(r.a);
      function d(t) {
        return c(t) && Object(i.a)(t);
      }
      var p = d(r.a);
      var h = l || p;
      function v(t) {
        return c(t) && Object(o.b)(t, "shopTopic") !== a.d.EDU;
      }
      v(r.a);
      function g(t) {
        return v(t) && Object(i.d)(t);
      }
      g(r.a);
      function m(t) {
        return v(t) && Object(i.c)(t);
      }
      m(r.a);
      function _(t) {
        return v(t) && Object(i.a)(t);
      }
      _(r.a);
      function y(t) {
        return m(t) || _(t);
      }
    },
    KEq0: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = n("qHJ6"),
        o = n("9mDI"),
        i = n("QsG0");
      var a = function (t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!t) return "";
        if (t.match(/^data:/i)) return t;
        if (!n.imgcdn && !n.imgqn) {
          var a = (0, o.getRoot)(),
            u = (a._global && a._global.url) || r.GLOBAL_URL;
          n.imgcdn = u.imgqn || u.imgcdn;
        }
        var c = n.imgcdn || n.imgqn || "https://img01.yzcdn.cn",
          s = [
            /^(https?:)?\/\/imgqn.koudaitong.com/,
            /^(https?:)?\/\/kdt-img.koudaitong.com/,
            /^(https?:)?\/\/img01.yzcdn.cn/,
            /^(https?:)?\/\/dn-kdt-img.qbox.me/,
          ];
        e = (0, i.ruleAdapter)(t, e);
        for (var f = 0; f < s.length; f++) t = t.replace(s[f], c);
        if (
          (t = (t = t.replace(
            /^http:\/\/img(\d+).yzcdn.cn/,
            "https://img$1.yzcdn.cn/"
          )).replace(
            "imgqntest.koudaitong.com",
            "dn-kdt-img-test.qbox.me"
          )).match(/^(https?:)?\/\//i)
        ) {
          if (
            !(
              t.match(c) ||
              t.match(/img(\d*)\.yzcdn\.cn/) ||
              t.match("dn-kdt-img-test.qbox.me")
            )
          )
            return t;
          t.match("!") || (t = "".concat(t).concat(e));
        } else t = "".concat(c, "/").concat(t).concat(e);
        return !1 !== n.toWebp && (t = (0, i.urlAdaptor)(t, n)), t;
      };
      (e.default = a), (t.exports = e.default);
    },
    KoBN: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("U0uK"),
        o = {};
      function i(t) {
        if (0 === Object.keys(o).length)
          try {
            var e = Object(r.a)();
            e && Object.assign(o, e);
          } catch (t) {}
        return t ? o[t] : o;
      }
    },
    KrsW: function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return r;
        });
      var r = {};
      n.r(r),
        n.d(r, "getResponseImage", function () {
          return l;
        }),
        n.d(r, "cdnImage", function () {
          return d;
        }),
        n.d(r, "upload", function () {
          return h;
        }),
        n.d(r, "multiUpload", function () {
          return v;
        });
      var o = n("Btea"),
        i = n("MLLI"),
        a = "https://img01.yzcdn.cn";
      var u = [
        /^(https?:)?\/\/imgqn.koudaitong.com/,
        /^(https?:)?\/\/kdt-img.koudaitong.com/,
        /^(https?:)?\/\/img\.yzcdn\.cn/,
        /^(https?:)?\/\/img01.yzcdn.cn/,
        /^(https?:)?\/\/dn-kdt-img.qbox.me/,
      ];
      var c =
          /\.([^.!]+)!([0-9]{1,4})x([0-9]{1,4})q?([0-9]{0,2}|100)?(\+2x)?\..+/,
        s = /([^.!]+)\?watermark\/.*\/$/;
      function f(t, e) {
        void 0 === e && (e = {});
        var n,
          r = "devtools" === (n = Object(i.b)().platform) || "android" === n,
          o = 1,
          a = t.match(c),
          u = e.clip ? "1" : "2",
          f = e.blur ? "imageMogr2/blur/" + e.blur + "x" + e.blur + "|" : "";
        if (a && a.length >= 4) {
          var l,
            d = a[1].match(s),
            p = !1;
          d && d.length ? ((l = d[1]), (p = !0)) : (l = a[1]);
          var h = l;
          "gif" === l
            ? (h = "gif")
            : r
            ? (h = "webp")
            : "webp" === l && (h = "jpg"),
            "+2x" === a[5] && (o = 2);
          var v =
              f +
              "imageView2/" +
              u +
              "/w/" +
              parseInt(a[2], 10) * o +
              "/h/" +
              parseInt(a[3], 10) * o +
              "/q/" +
              (a[4] || 75) +
              "/format/" +
              h,
            g = p ? "|" : "?";
          t = "" + (t.replace(c, ".") + a[1]) + g + v;
        } else
          t = (function (t, e) {
            var n = /(\?imageView2\/\d\/w\/\d+\/h\/\d+\/q\/\d+\/format\/)(\w+)/,
              r = t;
            if (n.test(t)) {
              var o,
                i = null == (o = t.match(n)) ? void 0 : o[2];
              e
                ? "gif" !== i && "webp" !== i && (r = t.replace(n, "$1webp"))
                : "webp" === i && (r = t.replace(n, "$1jpg"));
            }
            return r;
          })(t, r);
        return t;
      }
      function l(t, e, n) {
        var r = e,
          o = n,
          i = t.width / t.height,
          a = 0,
          u = 0;
        return (
          r / o < i
            ? (a = (o - (n = (e = r) / i)) / 2 + a)
            : (u = (r - (e = (n = o) * i)) / 2 + u),
          { top: a, left: u, width: e, height: n }
        );
      }
      function d(t, e, n) {
        if (
          (void 0 === e && (e = ""),
          void 0 === n && (n = {}),
          !t || t.match(/^data:/i))
        )
          return t;
        if (
          (u.forEach(function (e) {
            t = t.replace(e, a);
          }),
          t.match(/^(https?:)?\/\//i))
        ) {
          if (
            (!t.match(a) && !t.match("dn-kdt-img-test.qbox.me")) ||
            t.match("!")
          )
            return t;
          t = "" + t + e;
        } else t = a + "/" + t + e;
        return f(t, n);
      }
      var p = n("BANk");
      function h(t, e) {
        void 0 === e && (e = {});
        var r = n("US/N").default;
        return (
          "string" == typeof e && (e = { fileType: e }),
          r({
            path: e.uploadToShop
              ? "/wscshop/token/shop-image-token.json"
              : "/wscshop/token/upload-image.json",
            data: { kdt_id: e.kdtId },
          }).then(function (n) {
            var r = n.token;
            return new Promise(function (n, o) {
              return Object(p.a)({
                url: "https://up.yzcdn.cn/",
                filePath: t,
                fileName: "file",
                fileType: e.fileType || "image",
                formData: { token: r, "x:skip_save": 1 },
                success: function (e) {
                  var r,
                    i = e.data;
                  if (200 != +e.statusCode) return o(new Error("上传文件失败"));
                  try {
                    r = JSON.parse(i);
                  } catch (t) {
                    return o(new Error("解析文件失败"));
                  }
                  if (!r || 0 !== r.code) return o(new Error("上传文件失败"));
                  (r.data.originFile = t), (r.data.success = !0), n(r.data);
                },
                fail: function () {
                  return o(new Error("上传文件失败"));
                },
              });
            });
          })
        );
      }
      function v(t, e) {
        return Promise.all(
          t.map(function (t) {
            return h(t, e).catch(function (e) {
              return { originFile: t, reason: e, success: !1 };
            });
          })
        );
      }
    },
    LAxz: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n("9ZMt"),
        o = (function () {
          function t(t) {
            (this.CACHE_KEY = "__shop_core__tee"),
              (this.CACHE_KEY = t || this.CACHE_KEY);
          }
          return (
            (t.prototype.clear = function () {
              r.default.setGlobal(this.CACHE_KEY, {});
            }),
            (t.prototype.get = function (t, e) {
              var n = r.default.getGlobal(this.CACHE_KEY) || {},
                o = n[t];
              if (o) {
                if (!o.expire || Date.now() - o.time < 1e3 * o.expire)
                  return o.data;
                (n[t] = void 0), r.default.setGlobal(this.CACHE_KEY, n);
              }
              return e;
            }),
            (t.prototype.set = function (t, e, n) {
              var o = r.default.getGlobal(this.CACHE_KEY) || {};
              return (
                (o[t] = { data: e, expire: n, time: Date.now() }),
                r.default.setGlobal(this.CACHE_KEY, o),
                this
              );
            }),
            t
          );
        })();
      e.b = new o();
    },
    MLLI: function (t, e, n) {
      n.d(e, "a", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return l;
        });
      var r = n("Fcif"),
        o = n("9ZMt"),
        i = n("WWpR"),
        a = n("h+Rz"),
        u = [
          "pixelRatio",
          "windowWidth",
          "windowHeight",
          "screenWidth",
          "screenHeight",
          "platform",
          "statusBarHeight",
          "brand",
          "model",
          "system",
          "version",
          "SDKVersion",
          "fontSizeSetting",
        ];
      function c(t) {
        var e;
        return (
          (t.platform = null == (e = t.platform) ? void 0 : e.toLowerCase()), t
        );
      }
      var s = {};
      function f() {
        return s.getSystemInfo
          ? Promise.resolve(s.getSystemInfo)
          : a.a.getSystemInfo().then(function (t) {
              var e = o.default.$native.canIUse("getWindowInfo")
                ? o.default.$native.getWindowInfo()
                : {};
              return (
                (s.getSystemInfo = c(Object(i.a)(Object(r.a)({}, t, e), u))),
                s.getSystemInfo
              );
            });
      }
      function l() {
        if (s.getSystemInfoSync) return s.getSystemInfoSync;
        var t = o.default.$native.getSystemInfoSync(),
          e = o.default.$native.canIUse("getWindowInfo")
            ? o.default.$native.getWindowInfo()
            : {};
        return (
          (s.getSystemInfoSync = c(Object(i.a)(Object(r.a)({}, t, e), u))),
          s.getSystemInfoSync
        );
      }
    },
    MVYo: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      });
      var r = n("h+Rz");
      function o() {
        return r.a.login();
      }
    },
    Moet: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = function (t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
      (e.default = r), (t.exports = e.default);
    },
    Mp2s: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g;
      function i(t) {
        return null != t;
      }
      function a(t, e, n) {
        if ((void 0 === n && (n = ""), !t)) return n;
        var a = (function (t) {
            var e = [];
            return (
              46 === t.charCodeAt(0) && e.push(""),
              t.replace(r, function (t, n, r, i) {
                e.push(r ? i.replace(o, "$1") : n || t);
              }),
              e
            );
          })(e),
          u = t;
        return (
          a.forEach(function (t) {
            u = i(u) && i(u[t]) ? u[t] : void 0;
          }),
          i(u) ? u : n
        );
      }
    },
    NHEX: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.getType = e.isDef = void 0);
      var r = i(n("yOJ5")),
        o = i(n("U5GS"));
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var a = r.default;
      e.isDef = a;
      e.getType = function (t) {
        var e = Object.prototype.toString.call(t);
        return e.substring(8, e.length - 1);
      };
      var u = o.default;
      e.default = u;
    },
    NotG: function (t, e, n) {
      var r;
      n.d(e, "a", function () {
        return r;
      }),
        (function (t) {
          (t.RETRY = "manual-retry"), (t.AUTORETRY = "auto-retry");
        })(r || (r = {}));
    },
    NthX: function (t, e, n) {
      var r = n("BCRw")();
      t.exports = r;
      try {
        regeneratorRuntime = r;
      } catch (t) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function("r", "regeneratorRuntime = r")(r);
      }
    },
    Nvad: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return a;
        });
      var r = n("lCVF"),
        o = n.n(r);
      function i(t) {
        if (!t) return t;
        var e = String(t),
          n = /-?\d+(,\d+)?(\.\d+)?/,
          r = new RegExp(n.source + "|" + /\D+/.source, "g"),
          o = e.match(r);
        if (o) {
          var i = o.map(function (t) {
            var e = t;
            if (
              (n.test(t) && (e = e.replaceAll(",", "")),
              !isNaN(Number(e)) && " " !== e)
            ) {
              var r = parseFloat(e);
              return String(r % 1 == 0 ? parseInt(e, 10) : r);
            }
            return t;
          });
          return 1 === i.length ? i[0] : i.join("");
        }
        return t;
      }
      function a(t, e) {
        void 0 === t && (t = {}), void 0 === e && (e = "积分");
        var n = t.pointsPriceText,
          r = void 0 === n ? "" : n,
          i = t.price,
          a = void 0 === i ? 0 : i,
          u = t.minPrice,
          c = void 0 === u ? -1 : u,
          s = t.maxPrice,
          f = void 0 === s ? -1 : s,
          l = t.pointsPrice,
          d = void 0 === l ? -1 : l,
          p = t.oldPrice,
          h = void 0 === p ? 0 : p,
          v = t.oldMinPrice,
          g = void 0 === v ? -1 : v,
          m = t.oldMaxPrice,
          _ = void 0 === m ? -1 : m,
          y = t.priceRangeTypeStart,
          b = void 0 !== y && y,
          O = "",
          w = "";
        return (
          r
            ? (O = r)
            : d > 0
            ? ((O = "" + d + e), a > 0 && (O = O + "+￥" + o()(a)))
            : (O =
                f > c && c >= 0
                  ? b
                    ? o()(c) + "起"
                    : "" + o()({ min: c, max: f }, "-")
                  : "" + o()(a)),
          h > a || g > c
            ? _ > g
              ? (w = "" + o()({ min: g, max: _ }, "-"))
              : h > 0 && (w = "" + o()(h))
            : (w = ""),
          { showPrice: O, showOldPrice: w }
        );
      }
    },
    O5ul: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n("4J1Q"),
        o =
          ("object" == typeof window &&
            (Object(r.a)(window, "_global.business") || window._global)) ||
          {},
        i = o.shop_info || o.shopInfo || {},
        a = o.shopMetaInfo || i || {};
      Object(r.b)(a, "shopType"), Object(r.b)(a, "shopRole");
    },
    OEy0: function (t, e, n) {
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return u;
        });
      var r = 0;
      class o {
        constructor() {
          (this.subs = new Set()), (this.id = r++);
        }
        addSub(t) {
          this.subs.add(t);
        }
        removeSub(t) {
          this.subs.delete(t);
        }
        depend() {
          o.target.addDep(this);
        }
        notify() {
          this.subs.forEach((t) => t.update()),
            this.subs.forEach((t) => t.done());
        }
      }
      o.target = null;
      var i = [];
      function a(t) {
        o.target && i.push(o.target), (o.target = t);
      }
      function u() {
        o.target = i.pop();
      }
    },
    OHwi: function (t, e) {},
    OK7I: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = function () {
        for (
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 10,
            e = "",
            n =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            r = 0;
          r < t;
          r++
        )
          e += n.charAt(Math.floor(Math.random() * n.length));
        return e;
      };
      (e.default = r), (t.exports = e.default);
    },
    ONqW: function (t, e, n) {
      n.d(e, "a", function () {
        return u;
      });
      var r = n("Fcif"),
        o = n("9ZMt"),
        i = function (t, e) {
          for (var n, r = e.split("."), o = 0; o < r.length; o++) n = t[r[o]];
          return n;
        },
        a = function (t) {
          return function () {
            var e = o.default.getGlobal("logger");
            if (e) {
              var n = i(e, t);
              if (n) return n.apply(null, [...arguments]);
            }
          };
        };
      function u() {
        return [
          "setEvent",
          "setContext",
          "setPlat",
          "setEnv",
          "setUser",
          "log",
          "getLogParams",
          "getPageSpm",
          "getSpm",
          "setMoreSpm",
          "enterpage",
          "leavepage",
          "setCurrentSpm",
        ].reduce((t, e) => Object(r.a)({}, t, { [e]: a(e) }), {});
      }
    },
    Oq22: function (t, e, n) {
      n.d(e, "a", function () {
        return T;
      });
      var r = n("MLLI"),
        o = n("HSl3"),
        i = n("kU95"),
        a = n("jakC"),
        u = n("bb6g"),
        c = n("9ZMt"),
        s = { onHide: "onAppHide" },
        f = {};
      var l = Object(u.__assign)(
        { usingScope: ["app"] },
        ["onHide"].reduce(function (t, e) {
          return (
            (t[e] = function () {
              try {
                (t = f[s[e]]) &&
                  t.length &&
                  t.forEach(function (t) {
                    t();
                  });
              } catch (t) {}
              var t;
            }),
            t
          );
        }, {})
      );
      c.default.mixin(l);
      var d = n("Qzzd");
      var p,
        h,
        v =
          ((p = c.default.getGlobal),
          (h = c.default.setGlobal),
          !p("mark-map") && h("mark-map", new Map()),
          p("mark-map"));
      function g(t) {
        return t ? v.get(t) : v;
      }
      function m(t, e) {
        return v.set(t, e);
      }
      function _(t) {
        return t ? v.has(t) && v.delete(t) : v.clear();
      }
      function y() {
        v.clear();
      }
      var b = {
          al: "appLaunch",
          rt: "route",
          cus: "custom",
          fr: "firstRender",
          fp: "firstPaint",
          fcp: "firstContentfulPaint",
          lcp: "largestContentfulPaint",
          dp: "downloadPackage",
          es: "evaluateScript",
        },
        O = { reportRouteRules: {}, tagMerge: {}, enable: !0 },
        w = Object(r.b)().SDKVersion || "2.24.0",
        E = Object(i.a)(w, "2.24.0") < 0;
      function S(t) {
        var e = t.tag,
          n = t.scene,
          r = t.extra;
        try {
          var o = Date.now();
          setTimeout(function () {
            var t,
              i = Object(a.a)() || {},
              u = i._path,
              c = void 0 === u ? "" : u,
              s = { pn: e };
            Object.keys(b).forEach(function (t) {
              if ("al" !== t) {
                var e = g(b[t]);
                e && (s[t] = e);
              }
            });
            var f = { level: "info", type: "per", extra: r || {}, per: s };
            if (e || n) {
              var l = O.reportRouteRules[e];
              if (!((l && !l.includes(c)) || E)) {
                var p,
                  h = o;
                if (
                  (n === b.rt &&
                    (h =
                      (null === (t = s.rt) || void 0 === t
                        ? void 0
                        : t.startTime) || o),
                  n === b.al || n === b.cus)
                ) {
                  n === b.cus && (n = e);
                  var v = g(n || e) || {};
                  if (((h = v.startTime || o), n === b.al)) {
                    var m = O.tagMerge[e] || [];
                    if (!v.startTime) return;
                    if (
                      !(v.path || "").includes(c) &&
                      !m.includes(v.path || "")
                    )
                      return;
                    f.per.al = v;
                  }
                }
                (p = Math.ceil(o - h)) <= 0 ||
                  ((f.baseTime = h),
                  (f.per.df = p),
                  (i.url = c),
                  (f.route = i),
                  !(null == r ? void 0 : r.checkLog) || r.checkLog(f)
                    ? (y(),
                      Object(d.a)().then(function (t) {
                        t.captureEvent(f);
                      }))
                    : y());
              }
            }
          }, 2500);
        } catch (t) {}
      }
      var j,
        A,
        T = {
          start: function (t, e) {
            m(t, { startTime: e || Date.now() });
          },
          end: function (t, e, n) {
            void 0 === e && (e = b.cus),
              O.enable && S({ tag: t, extra: n, scene: e });
          },
          log: function (t) {
            var e = t.tag,
              n = t.scene,
              r = t.extra;
            n.includes(b.al) && g(b.al)
              ? S({ tag: e, extra: r, scene: b.al })
              : n.includes(b.rt) && S({ tag: e, extra: r, scene: b.rt });
          },
          delete: function (t) {
            g(t) && _(t);
          },
          setConfig: function (t) {
            return Object.assign(O, t), O;
          },
          get: function (t) {
            return g(t);
          },
        };
      function P(t) {
        t.getEntries().forEach(function (t) {
          return (function (t, e) {
            e.duration ||
              (e.duration = Date.now() - (e.startTime || Date.now()));
            var n = Object.keys(b).find(function (e) {
              return b[e] === t;
            });
            if (n) {
              var r = e;
              if (
                (("dp" !== n && "es" !== n) || (r = (g(t) || []).concat(e)),
                "al" === n && !g(b.al))
              ) {
                var o = r.startTime;
                r.startTime = o;
              }
              m(t, r);
            }
          })(t.name, t);
        });
      }
      (T.onPerfObserver = P),
        Object(o.a)()
          .createObserver(P)
          .observe({
            entryTypes: ["navigation", "render", "loadPackage", "script"],
          }),
        (A = function () {
          _();
        }),
        f[(j = "onAppHide")] || (f[j] = []),
        f[j].push(A);
    },
    PKOW: function (t, e, n) {
      n.d(e, "b", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "f", function () {
          return S;
        }),
        n.d(e, "d", function () {
          return w;
        }),
        n.d(e, "e", function () {
          return O;
        });
      var r,
        o,
        i = n("mK0O"),
        a = n("2wjL"),
        u = n("4jn8");
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                Object(i.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var f = "useNewRantaCache",
        l = {
          DETAIL: "detail",
          PAID: "paid",
          CART: "cart",
          ORDER: "order",
          PAY: "pay",
          ADDRESS_EDIT: "address_edit",
          ORDER_LIST: "order_list",
        },
        d =
          ((r = {}),
          Object(i.a)(r, l.PAID, "useWeappRantaTeePaidV2"),
          Object(i.a)(r, l.CART, "useWeappRantaTeeCartV2"),
          Object(i.a)(r, l.PAY, "useWeappRantaTeePayV2"),
          Object(i.a)(r, l.ORDER_LIST, "useWeappRantaTeeOrderList"),
          r),
        p = { NAVIGATE: "navigate", REDIRECT: "redirect" },
        h =
          ((o = {}),
          Object(i.a)(o, l.PAID, {
            NEW: "packages/paid/pay-result/success/index",
            OLD: "packages/order/paid-v1/index",
            TRANS: "packages/order/paid/index",
          }),
          Object(i.a)(o, l.CART, {
            NEW: "packages/trade-cart/cart/index",
            OLD: "packages/trade/cart-v1/index",
            TRANS: "packages/goods/cart/index",
          }),
          Object(i.a)(o, l.DETAIL, {
            NEW: "packages/trade/order-detail/index",
            OLD: "packages/trade/order-detail-v1/index",
            TRANS: "packages/trade/order/result/index",
          }),
          Object(i.a)(o, l.ORDER, {
            NEW: "packages/trade-buy/order/buy/index",
            OLD: "packages/order-native/index",
            TRANS: "trade-buy",
          }),
          Object(i.a)(o, l.PAY, {
            NEW: "packages/trade-pay/pay/index",
            OLD: "packages/order-native/index",
            TRANS: "trade-pay",
          }),
          Object(i.a)(o, l.ADDRESS_EDIT, {
            NEW: "packages/trade-buy-subpage/order/address-edit/index",
            OLD: "packages/order-native/address-edit/index",
            TRANS: "address-edit",
          }),
          Object(i.a)(o, l.ORDER_LIST, {
            NEW: "packages/trade/order-list/index",
            OLD: "packages/trade/order/list/index",
            TRANS: "order-list",
          }),
          o),
        v = Object(i.a)({}, l.PAID, [
          "/packages/paid/pay-result/success/index",
          "/packages/paid/pay-result/wait/index",
          "/packages/paid/pay-result/auction/index",
          "/packages/paid/pay-result/oversale/index",
        ]),
        g = {
          navigate: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = getCurrentPages() || [];
            e.length >= 10 ? wx.redirectTo(t) : wx.navigateTo(t);
          },
          redirect: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            wx.redirectTo(t);
          },
        };
      function m(t) {
        return Object.keys(t).map(function (e) {
          return t[e];
        });
      }
      function _() {
        var t = getCurrentPages() || [];
        return t[t.length - 1] || {};
      }
      function y(t) {
        return t.startsWith("/") ? t : "/".concat(t);
      }
      function b(t, e, n) {
        var r = m(h[n]).map(function (t) {
            return y(t);
          }),
          o = y(t),
          i = y(e);
        return r.indexOf(o) > -1 && r.indexOf(i) > -1;
      }
      function O() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.isPreFetch,
          n = void 0 !== e && e;
        return new Promise(function (t, e) {
          var r = null;
          try {
            r = getApp();
          } catch (t) {}
          return !r && n
            ? e()
            : r[f]
            ? t(r[f])
            : (!n && wx.showLoading(),
              void getApp()
                .request({
                  path: "/wsctrade/rantashunt/getWeappShuntConfig.json",
                  data: { config: d },
                  method: "POST",
                })
                .then(function (e) {
                  var n,
                    o = s(
                      s({}, e),
                      {},
                      ((n = {}),
                      Object(i.a)(n, l.DETAIL, !0),
                      Object(i.a)(n, l.ADDRESS_EDIT, !0),
                      Object(i.a)(n, l.ORDER, !0),
                      n)
                    );
                  r && (r[f] = o), t(o), wx.hideLoading();
                })
                .catch(function () {
                  e(), wx.hideLoading();
                }));
        });
      }
      function w() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = h[e],
          r = m(n).map(function (t) {
            return y(t);
          });
        return r.indexOf(t) > -1;
      }
      function E(t, e, n, r, o) {
        var i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          c = h[r],
          s = c[n ? "NEW" : "OLD"],
          f = _(),
          d = f.route,
          p = f.options,
          m = void 0 === p ? {} : p,
          O = y(s),
          w = {};
        if (
          (b(d, O, r) ? Object.assign(w, m, t) : (w = t),
          s !== d && s === h[l.CART].NEW)
        )
          return Object(u.a)({
            path: "/pages/goods/cart/index",
            query: w,
            fail: function () {
              g[o]({ url: a.a.add(O, w) });
            },
          });
        if (e && i) {
          var E = v[r],
            S = y(d);
          if (E.indexOf(S) > -1 && E.indexOf(O) > -1) return;
        }
        (e && O === y(d)) || g[o]({ url: a.a.add(O, w) });
      }
      function S(t) {
        var e = t.pageType,
          n = void 0 === e ? "" : e,
          r = t.query,
          o = void 0 === r ? {} : r,
          u = t.url,
          c = void 0 === u ? "" : u,
          f = t.type,
          d = void 0 === f ? p.NAVIGATE : f,
          v = t.fromRantaPage,
          g = void 0 !== v && v,
          m = t.isMultiStatus,
          _ = void 0 !== m && m,
          y = null;
        try {
          y = getApp();
        } catch (t) {}
        if (y) {
          var b = s(s({}, a.a.getAll(c) || {}), o);
          if (y.ecloudMode) {
            var w, S;
            if (
              n === l.CART &&
              "NO_DROP" ===
                (null === (w = y) ||
                void 0 === w ||
                null === (S = w.tradePageType) ||
                void 0 === S
                  ? void 0
                  : S.cartPageType)
            )
              return void O()
                .then(
                  function (t) {
                    return t.cart_by_customer;
                  },
                  function () {
                    return !1;
                  }
                )
                .then(function (t) {
                  E(b, g, t, n, d, _);
                });
            var j = (function (t) {
              var e,
                n = t.path,
                r = null;
              try {
                r = getApp();
              } catch (t) {}
              if (r) {
                var o = r.tradePageType,
                  a = o.payResultPageType,
                  u = void 0 === a ? "RANTA" : a,
                  c = o.cartPageType,
                  s = void 0 === c ? "RANTA" : c,
                  f = o.orderDetailPageType,
                  d = void 0 === f ? "RANTA" : f,
                  p = o.tradeBuyPageType,
                  v = void 0 === p ? "RANTA" : p,
                  g = o.tradePayPageType,
                  m = void 0 === g ? "RANTA" : g,
                  _ = o.orderListPageType,
                  y = void 0 === _ ? "RANTA" : _;
                return (
                  ((e = {}),
                  Object(i.a)(e, h[l.PAID].TRANS, "RANTA" === u),
                  Object(i.a)(e, h[l.CART].TRANS, "RANTA" === s),
                  Object(i.a)(e, h[l.DETAIL].TRANS, "RANTA" === d),
                  Object(i.a)(e, h[l.ORDER].TRANS, "RANTA" === v),
                  Object(i.a)(e, h[l.PAY].TRANS, "RANTA" === m),
                  Object(i.a)(e, h[l.ADDRESS_EDIT].TRANS, "RANTA" === v),
                  Object(i.a)(e, h[l.ORDER_LIST].TRANS, "RANTA" === y),
                  e)[n] || !1
                );
              }
            })({ path: h[n].TRANS });
            return E(b, g, j, n, d, _);
          }
          O()
            .then(
              function (t) {
                return t[n];
              },
              function () {
                return n === l.DETAIL;
              }
            )
            .then(function (t) {
              E(b, g, t, n, d, _);
            });
        }
      }
      setTimeout(function () {
        O({ isPreFetch: !0 });
      }, 5e3);
    },
    "PZW/": function (t, e, n) {
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "a", function () {
          return p;
        });
      var r = n("bb6g"),
        o = [
          "sl",
          "sales_id",
          "daogouId",
          "guide_short_code",
          "task_short_code",
        ];
      n("Ph7b");
      function i(t) {
        return (
          !!(function (t) {
            return null == t;
          })(t) ||
          "undefined" === t ||
          "null" === t
        );
      }
      function a(t) {
        for (var e, n = 0; n < t.length; n++) {
          var r = t[n];
          if (!i(r) && r) {
            e = r;
            break;
          }
        }
        return e;
      }
      function u(t) {
        try {
          var e = t || {},
            n = e.sl,
            r = e.sales_id,
            o = e.daogouId,
            u = e.from_params,
            c = e.guide_short_code,
            s = e.task_short_code,
            f = e.NEW_SALES_ID,
            l =
              ((y = {}),
              "string" != typeof (_ = u || "") ||
                null == _ ||
                _.split("!")
                  .map(function (t) {
                    return null == t ? void 0 : t.split("~");
                  })
                  .forEach(function (t) {
                    var e = t[0],
                      n = t[1];
                    e && n && !i(n) && (y[e] = n);
                  }),
              y),
            d = l.sl,
            p = l.sales_id,
            h = l.daogouId,
            v = l.guide_short_code,
            g = l.task_short_code,
            m = l.NEW_SALES_ID;
          return {
            sl: a([n, d]),
            sales_id: a([r, f, p, m]),
            daogouId: a([o, h]),
            guide_short_code: a([c, v]),
            task_short_code: a([s, g]),
          };
        } catch (t) {
          return {};
        }
        var _, y;
      }
      function c(t) {
        return o.every(function (e) {
          var n = (t || {})[e];
          return i(n) || !n;
        });
      }
      function s(t) {
        var e, n, o, i, a;
        try {
          var u = t || {},
            c = u.level,
            s = void 0 === c ? "info" : c,
            f = u.message,
            l = u.detail,
            d = void 0 === l ? {} : l,
            p = u.extra,
            h = void 0 === p ? {} : p,
            v = u.options,
            g = v || {},
            m = g.logMsgPrefix,
            _ = g.sourceApp,
            y = (null == v ? void 0 : v.app) || getApp(),
            b =
              (null === (e = null == y ? void 0 : y.logger) || void 0 === e
                ? void 0
                : e.getGlobal()) || {};
          null ===
            (o =
              null === (n = null == y ? void 0 : y.logger) || void 0 === n
                ? void 0
                : n.appError) ||
            void 0 === o ||
            o.call(n, {
              appName: "guide-b-h5",
              logIndex: "guide_b_log",
              name: "weapp",
              message: "".concat(m || "").concat(f),
              level: s,
              extra: Object(r.__assign)(
                {
                  sourceApp: _ || "weapp_default",
                  userId:
                    (null === (i = null == b ? void 0 : b.user) || void 0 === i
                      ? void 0
                      : i.li) || "",
                  mobile:
                    (null === (a = null == b ? void 0 : b.user) || void 0 === a
                      ? void 0
                      : a.m) || "",
                },
                h
              ),
              detail: d,
            });
        } catch (t) {}
      }
      function f(t) {
        try {
          wx.removeStorage({
            key: "guide_report_params",
            fail: function () {
              wx.removeStorage({
                key: "guide_report_params",
                fail: function (e) {
                  s({
                    level: "error",
                    message: "关联关系上报_清除缓存失败 removeStorage",
                    detail: { error: e },
                    options: t,
                  });
                },
              });
            },
          });
        } catch (e) {
          s({
            level: "error",
            message: "关联关系上报_清除缓存失败 catch",
            detail: { error: e },
            options: t,
          });
        }
      }
      function l(t) {
        var e,
          n,
          o,
          i = t || {},
          a = i.app,
          u = i.sourceApp,
          c = i.relationParams,
          d = i.url,
          p = i.count,
          h = i.isFromCache,
          v =
            null ===
              (n =
                null === (e = null == a ? void 0 : a.logger) || void 0 === e
                  ? void 0
                  : e.getLogParams) || void 0 === n
              ? void 0
              : n.call(e);
        null == a ||
          a
            .request({
              path: "/guide/writeGuideParamTag.json",
              method: "POST",
              contentType: "application/json",
              data: {
                queryParam: c,
                sourceApp: u || "weapp_default",
                url: d,
                yzUid:
                  null === (o = null == v ? void 0 : v.user) || void 0 === o
                    ? void 0
                    : o.yz_uid,
              },
              withCredentials: !0,
            })
            .then(function () {
              f(t);
            })
            .catch(function (e) {
              p < 2
                ? l(
                    Object(r.__assign)(Object(r.__assign)({}, t), {
                      count: p + 1,
                    })
                  )
                : (s({
                    level: "error",
                    message: "关联关系上报_接口调用报错 ".concat(
                      h ? "缓存上报" : ""
                    ),
                    detail: { error: e, relationParams: c },
                    options: t,
                  }),
                  h ||
                    (function (t) {
                      var e = (t || {}).relationParams;
                      try {
                        var n = Object(r.__assign)(Object(r.__assign)({}, e), {
                          writeTime: new Date().getTime(),
                        });
                        wx.setStorage({
                          key: "guide_report_params",
                          data: n,
                          fail: function () {
                            wx.setStorage({
                              key: "guide_report_params",
                              data: n,
                              fail: function (e) {
                                s({
                                  level: "error",
                                  message:
                                    "关联关系上报_设置缓存失败 setStorage",
                                  detail: { error: e },
                                  options: t,
                                });
                              },
                            });
                          },
                        });
                      } catch (e) {
                        s({
                          level: "error",
                          message: "关联关系上报_设置缓存失败 catch",
                          detail: { error: e },
                          options: t,
                        });
                      }
                    })(t));
            });
      }
      function d(t) {
        var e = t || {},
          n = e.relationParams,
          o = e.isFromCache;
        s({
          message: "关联关系上报_接口调用参数 ".concat(o ? "缓存上报" : ""),
          detail: { relationParams: n },
          options: t,
        }),
          l(Object(r.__assign)(Object(r.__assign)({}, t), { count: 0 }));
      }
      function p(t) {
        var e, n;
        try {
          var o = t || {},
            i = o.query,
            a = o.url,
            l = o.appObj,
            p = o.logMsgPrefix,
            h = Object(r.__rest)(o, ["query", "url", "appObj", "logMsgPrefix"]),
            v = l || getApp(),
            g = null == t ? void 0 : t.sourceApp;
          if (
            ((e = u(i)),
            (n = Object(r.__assign)(Object(r.__assign)({}, h), {
              relationParams: e,
              url: a,
              app: v,
              sourceApp: g,
              logMsgPrefix: p || "",
            })),
            c(e))
          )
            return void new Promise(function (t, e) {
              try {
                wx.getStorage({
                  key: "guide_report_params",
                  success: function (e) {
                    t(e);
                  },
                  fail: function () {
                    wx.getStorage({
                      key: "guide_report_params",
                      success: function (e) {
                        t(e);
                      },
                      fail: function (n) {
                        var r;
                        if (
                          (null === (r = null == n ? void 0 : n.errMsg) ||
                          void 0 === r
                            ? void 0
                            : r.indexOf("data not found")) > -1
                        )
                          return t({});
                        e(n);
                      },
                    });
                  },
                });
              } catch (t) {
                e(t);
              }
            })
              .then(function (t) {
                if (null == t ? void 0 : t.data) {
                  var e = (null == t ? void 0 : t.data) || {},
                    o = e.writeTime,
                    i = Object(r.__rest)(e, ["writeTime"]),
                    a = !1;
                  if (o) a = new Date().getTime() - o <= 6e4;
                  a && !c(i)
                    ? d(
                        Object(r.__assign)(Object(r.__assign)({}, n), {
                          relationParams: i,
                          isFromCache: !0,
                        })
                      )
                    : f(n);
                }
              })
              .catch(function (t) {
                s({
                  level: "error",
                  message: "关联关系上报_获取缓存失败 catch",
                  detail: { error: t },
                  options: n,
                });
              });
          d(Object(r.__assign)(Object(r.__assign)({}, n), { isFromCache: !1 }));
        } catch (t) {
          s({
            level: "error",
            message: "关联关系上报_处理报错",
            detail: { error: t, relationParams: e },
            options: n,
          });
        }
      }
    },
    Ph7b: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r,
        o = (r = n("tuFO")) && r.__esModule ? r : { default: r };
      var i = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return function (e, n, r) {
          return (
            (r = void 0 === r ? 0 : r),
            (0, o.default)(e, n, r, {
              notReplaceDomain: t.isWeapp || t.isSwanApp || t.isQQApp,
              staticPageReg: t.staticPageReg || [],
              staticPageUrlMiddle: t.staticPageUrlMiddle || "",
            })
          );
        };
      };
      (e.default = i), (t.exports = e.default);
    },
    Pv5g: function (t, e, n) {
      n.d(e, "b", function () {
        return d;
      }),
        n.d(e, "a", function () {
          return v;
        });
      var r,
        o,
        i,
        a = n("bb6g"),
        u = n("8mzt");
      function c() {
        try {
          return getApp();
        } catch (t) {
          return {};
        }
      }
      function s(t) {
        return [
          function () {
            return (function (t) {
              var e = c();
              return e.__BIZ_MONITOR_DATA && e.__BIZ_MONITOR_DATA[t];
            })(t);
          },
          function (e) {
            return (function (t, e) {
              var n = c();
              n.__BIZ_MONITOR_DATA || (n.__BIZ_MONITOR_DATA = {}),
                (n.__BIZ_MONITOR_DATA[t] = e);
            })(t, e);
          },
        ];
      }
      !(function (t) {
        (t.Start = "start"),
          (t.Error = "error"),
          (t.Timeout = "timeout"),
          (t.Finish = "finish");
      })(i || (i = {}));
      var f,
        l =
          (((r = {})[i.Start] = "开始"),
          (r[i.Error] = "错误"),
          (r[i.Timeout] = "超时"),
          (r[i.Finish] = "成功"),
          r);
      !(function (t) {
        (t.Start = "start"), (t.End = "end");
      })(f || (f = {}));
      var d = {
          buy_now: "web-monitor-logger-buy-now",
          buy_now_from_sku: "web-monitor-logger-buy-now-from-sku",
          add_cart: "web-monitor-logger-add-cart",
          create_order: "web-monitor-logger-create-order",
          goods_detail: "web-monitor-logger-goods-detail",
          sku_popup_open: "web-monitor-logger-sku-popup-open",
          do_pay: "web-monitor-logger-do-pay",
        },
        p =
          (((o = {})[d.buy_now] = "立即购买流程"),
          (o[d.buy_now_from_sku] = "sku确认流程"),
          (o[d.add_cart] = "加入购物车流程"),
          (o[d.create_order] = "提交订单流程"),
          (o[d.goods_detail] = "商品详情页渲染流程"),
          (o[d.sku_popup_open] = "sku面板弹出流程"),
          (o[d.do_pay] = "支付流程"),
          o),
        h = (function () {
          function t(t) {
            var e = this;
            (this.start = function (t) {
              var n = t.name,
                r = void 0 === n ? "" : n,
                o = t.level,
                u = void 0 === o ? "info" : o,
                c = t.message,
                s = t.extra,
                l = t.tags,
                d = t.timeout,
                p = void 0 === d ? 3 : d;
              e.keyList.has(r) ||
                (e.logger.log(
                  Object(a.__assign)(Object(a.__assign)({}, t), {
                    level: u,
                    name: "[".concat(f.Start, "]").concat(r),
                    extra: e.genTags(r, i.Start, { extra: s, tags: l }),
                    message: c || e.genMsg(r, i.Start),
                  })
                ),
                e.keyList.add(r),
                e.triggerTime(t, p));
            }),
              (this.end = function (t) {
                var n = t.name,
                  r = void 0 === n ? "" : n,
                  o = t.type,
                  u = void 0 === o ? i.Finish : o,
                  c = t.message,
                  s = void 0 === c ? "" : c,
                  l = t.detail,
                  d = t.extra,
                  p = t.tags,
                  h = t.level,
                  v = void 0 === h ? "info" : h,
                  g = t.isPageHide;
                if (void 0 !== g && g)
                  return (
                    e.keyList.forEach(function (t) {
                      e.logger.log({
                        name: "[".concat(f.End, "]").concat(t),
                        level: v,
                        type: "info",
                        extra: e.genTags(r, u, { extra: d, tags: p }),
                        message: s || e.genMsg(r, u),
                        detail: Object(a.__assign)(
                          Object(a.__assign)({}, e.genDetail(l)),
                          { message: "当前页面隐藏或关闭" }
                        ),
                      });
                    }),
                    (e.keyList = new Set()),
                    void e.clearTimer()
                  );
                e.keyList.has(r) &&
                  (e.logger.log(
                    Object(a.__assign)(Object(a.__assign)({}, t), {
                      name: "[".concat(f.End, "]").concat(r),
                      level: v,
                      extra: e.genTags(r, u, { extra: d, tags: p }),
                      message: s || e.genMsg(r, u),
                      detail: e.genDetail(l),
                    })
                  ),
                  e.keyList.delete(r),
                  e.clearTimer());
              }),
              (this.clearTimer = function () {
                e.timer && (clearInterval(e.timer), (e.timer = 0));
              }),
              (this.triggerTime = function (t, n) {
                var r = t.name,
                  o = void 0 === r ? "" : r,
                  a = t.message;
                e.clearTimer();
                var u = n - 1,
                  c = 0;
                e.timer = setInterval(function () {
                  c >= u &&
                    e.timer &&
                    (e.clearTimer(),
                    e.end({
                      type: i.Timeout,
                      name: o,
                      level: "error",
                      message: a,
                    })),
                    e.keyList.has(o) && c < u && (c += 1);
                }, 1e3);
              }),
              (this.logger = this.initLogger(t)),
              (this.timer = 0),
              (this.keyList = new Set());
          }
          return (
            (t.prototype.initLogger = function (t) {
              var e = t || {},
                n = e.appName,
                r = void 0 === n ? "wsc" : n,
                o = e.logIndex,
                i = void 0 === o ? "new_wsc_weapp_log" : o,
                c = e.tags,
                s = Object(a.__rest)(e, ["appName", "logIndex", "tags"]);
              return (
                u.a.config(
                  Object(a.__assign)(Object(a.__assign)({}, s), {
                    appName: r,
                    logIndex: i,
                    extra: c,
                  })
                ),
                u.a
              );
            }),
            (t.prototype.genTags = function (t, e, n) {
              var r = n.extra,
                o = n.tags,
                i = {};
              try {
                var u = getApp(),
                  c = (u.getToken() || {}).yzUserId;
                (i.kdtId = u.getKdtId()),
                  (i.userId = c || u.getBuyerId()),
                  (i.sid = u.getSessionId()),
                  (i.mpVersion = u.getVersion());
              } catch (t) {}
              return Object(a.__assign)(
                Object(a.__assign)(
                  Object(a.__assign)(Object(a.__assign)({}, i), r),
                  o
                ),
                { stageStatus: e, stageName: t }
              );
            }),
            (t.prototype.genMsg = function (t, e) {
              var n = p[t] || t;
              return "".concat(n, "_").concat(l[e]);
            }),
            (t.prototype.genDetail = function (t) {
              return t
                ? Object.keys(t).reduce(function (e, n) {
                    var r = t[n];
                    return (e[n] = r instanceof Error ? r.message : r), e;
                  }, {})
                : null;
            }),
            t
          );
        })();
      function v(t) {
        var e = s("monitor-instance"),
          n = e[0],
          r = e[1],
          o = n();
        if (o) return o;
        var i = new h(t);
        return r(i), i;
      }
    },
    Qb5n: function (t, e, n) {
      n.d(e, "b", function () {
        return _;
      }),
        n.d(e, "a", function () {
          return y;
        }),
        n.d(e, "c", function () {
          return b;
        });
      var r = n("Fcif");
      class o extends class {
        constructor() {
          this.eventReset();
        }
        eventReset() {
          this._eventListeners &&
            Object.keys(this._eventListeners).forEach((t) => {
              delete this._eventListeners[t];
            }),
            (this._eventListeners = Object.create(null));
        }
        on(t, e) {
          if (!t)
            throw Error({
              message: "event listener funkey undefined",
              callFunc: "adapter::wb:_on",
            });
          if (!(e instanceof Function))
            throw Error({
              message: "event listener next param should be function",
              callFunc: "adapter::wb:_on",
            });
          this._eventListeners[t] = e;
        }
        emit(t, e) {
          this._eventListeners &&
            this._eventListeners[t] instanceof Function &&
            this._eventListeners[t](e);
        }
      } {
        constructor(t) {
          void 0 === t && (t = {}), super();
          var { idle: e = 10, maxTask: n = 20 } = t;
          (this.status = {
            idle: e,
            maxTask: n,
            emitTimer: null,
            lastTime: +new Date(),
          }),
            (this.queue = []);
        }
        registEvent(t) {
          this.queue.push(t);
          var e = +new Date() - this.status.lastTime,
            { emitTimer: n, idle: r } = this.status;
          if (!n && e > r) this.callImmediate();
          else if (e > r);
          else {
            var o = Math.max(r - e, 0);
            this.callLater(o);
          }
        }
        runEvent(t, e, n) {
          void 0 === e && (e = () => {}), void 0 === n && (n = () => {});
          var r = [],
            o = [];
          for (
            this.queue.forEach((n, i) => {
              e(n, t) && (o.push(n), r.push(i));
            });
            o.length > 0;

          )
            n(o.shift());
          r.reverse(),
            r.forEach((t) => {
              this.queue.splice(t, 1);
            });
        }
        callLater(t) {
          void 0 === t && (t = 10),
            clearTimeout(this.status.emitTimer),
            t > 0
              ? (this.status.emitTimer = setTimeout(() => {
                  (this.status.emitTimer = null), this.callImmediate();
                }, t))
              : ((this.status.emitTimer = null), this.callImmediate());
        }
        callImmediate() {
          for (
            var { idle: t, maxTask: e } = this.status,
              n = this.queue,
              r = [],
              o = !1,
              i = 0;
            n.length > 0;

          ) {
            if (i >= e) {
              o = !0;
              break;
            }
            r.push(n.shift()), i++;
          }
          o && this.callLater(t),
            (this.status.lastTime = +new Date()),
            this.emit("run", { tasks: r });
        }
        destroy() {
          clearTimeout(this.status.emitTimer),
            (this.status.emitTimer = null),
            (this.queue = []),
            super.eventReset();
        }
      }
      var i = (t) => {
          for (
            var e = t.length, n = [], r = "", o = 0, i = !1, a = !1, u = 0;
            u < e;
            u++
          ) {
            var c = t[u];
            if ("\\" === c)
              u + 1 < e &&
              ("." === t[u + 1] || "[" === t[u + 1] || "]" === t[u + 1])
                ? ((r += t[u + 1]), u++)
                : (r += "\\");
            else if ("." === c) r && (n.push(r), (r = ""));
            else if ("[" === c) {
              if ((r && (n.push(r), (r = "")), 0 === n.length))
                throw new Error("path can not start with []: " + t);
              (a = !0), (i = !1);
            } else if ("]" === c) {
              if (!i) throw new Error("must have number in []: " + t);
              (a = !1), n.push(o), (o = 0);
            } else if (a) {
              if (c < "0" || c > "9")
                throw new Error("only number 0-9 could inside []: " + t);
              (i = !0), (o = 10 * o + c.charCodeAt(0) - 48);
            } else r += c;
          }
          if ((r && n.push(r), 0 === n.length))
            throw new Error("path can not be empty");
          return n;
        },
        a = (t) => {
          var e = Object.prototype.toString.call(t);
          return e.substring(8, e.length - 1);
        },
        u = (t) => {
          if ("object" != typeof t) return t;
          if (null === t) return null;
          switch (a(t)) {
            case "Array":
              return t.map((t) => u(t));
            case "Object":
              return Object.keys(t).reduce(
                (e, n) => ((e[n] = u(t[n])), e),
                Object.create(null)
              );
            case "RegExp":
              return new RegExp(t);
            case "Date":
              return new Date(t);
            default:
              return t;
          }
        },
        c = function (t) {
          void 0 === t && (t = "");
          var e = (t = t.split(".")[0]).indexOf("[");
          return e > 0 && (t = t.substr(0, e)), t;
        };
      function s(t, e, n) {
        var r, o;
        void 0 === e && (e = {}),
          void 0 === n && (n = () => {}),
          t.__preData || f(t),
          (function (t, e) {
            void 0 === e && (e = {}),
              t.__dataKeySets || (t.__dataKeySets = new Set()),
              Object.keys(e).forEach((e) => {
                "" !== e && t.__dataKeySets.add(c(e));
              });
          })(t, e),
          ((t) => {
            var e = !1;
            0 === t.__propKeySets.size ||
              t.__dataKeySets.forEach((n) => {
                t.__propKeySets.has(n) && (e = !0);
              });
          })(t),
          void 0 === (r = t.data) && (r = {}),
          void 0 === (o = e) && (o = {}),
          Object.keys(o).forEach((t) => {
            var e = o[t],
              n = i(t),
              a = r,
              u = n.length;
            n.forEach((t, n) => {
              if (n === u - 1) return (a[t] = e);
              a[t] || (a[t] = {}), (a = a[t]);
            });
          }),
          t.__tempCbList.push(n);
      }
      function f(t, e) {
        void 0 === e && (e = null),
          e
            ? Object.keys(t.data).forEach((n) => {
                e.has(n) && (t.__preData[n] = u(t.data[n]));
              })
            : (t.__propKeySets || (t.__propKeySets = new Set()),
              t.__waitKeySets || (t.__waitKeySets = new Set()),
              delete t.__dataKeySets,
              (t.__dataKeySets = new Set()),
              delete t.__preData,
              (t.__preData = u(t.data)),
              delete t.__tempCbList,
              (t.__tempCbList = []));
      }
      var l = () => {},
        d = { pageId: 1, setCount: 0, setDiffCount: 0, setRealCount: 0 },
        p = { tested: !1, support: !1 };
      var h = (t) => {
          var {
              preData: e,
              data: n,
              dataKeys: r,
              cbList: o = [],
            } = (function (t) {
              return {
                dataKeys: t.__dataKeySets,
                propKeys: t.__propKeySets,
                waitKeys: t.__waitKeySets,
                preData: t.__preData,
                data: t.data,
                cbList: t.__tempCbList,
              };
            })(t),
            i = () => o.forEach((e) => e.call(t)),
            s = Object.create(null),
            f = Object.create(null);
          Object.keys(n).forEach((t) => {
            var o = c(t);
            r.has(o) && ((s[t] = n[t]), (f[t] = e[t]));
          });
          var l = (function (t, e) {
            if ((void 0 === t && (t = null), void 0 === e && (e = null), !e))
              return null;
            if (!t) return u(e);
            for (
              var n = Object.create(null),
                r = Object.create(null),
                o = new Set([]),
                i = Object.keys(e).map((n) => ({
                  keyPath: n,
                  currKey: n,
                  currTplRef: t,
                  currRef: e,
                })),
                c = function () {
                  var {
                    keyPath: t,
                    currKey: e,
                    currTplRef: u,
                    currRef: c,
                  } = i.shift();
                  if (!o.has(u)) {
                    var s = new Set(Object.keys(c));
                    Object.keys(u)
                      .filter((t) => !s.has(t))
                      .forEach((e) => {
                        var n = t.split(".");
                        n.pop(), n.push(e), (r[n.join(".")] = null);
                      }),
                      o.add(u);
                  }
                  var f = u[e],
                    l = c[e],
                    d = a(f),
                    p = a(l);
                  if (p !== d)
                    void 0 === l
                      ? (n[t] = null)
                      : "Array" === p && l.length > 20
                      ? ((n[t] = [l[0]]),
                        l.forEach((e, r) => {
                          void 0 === e && (e = null),
                            (n[t + "[" + r + "]"] = e);
                        }),
                        delete n[t + "[0]"])
                      : (n[t] = l);
                  else if ("Object" === p) {
                    var h = Object.keys(l),
                      v = h.length,
                      g = Object.keys(f).length;
                    0 === v
                      ? g > 0 && (n[t] = l)
                      : h.forEach((e) => {
                          i.push({
                            keyPath: t + "." + e,
                            currKey: e,
                            currTplRef: f,
                            currRef: l,
                          });
                        });
                  } else if ("Array" === p) {
                    var m = l.length,
                      _ = f.length;
                    if (m < _) n[t] = l;
                    else if (0 === _) {
                      if (m > 0) {
                        n[t] = [l[0]];
                        for (var y = 1; y < m; y++)
                          i.push({
                            keyPath: t + "[" + y + "]",
                            currKey: y,
                            currTplRef: f,
                            currRef: l,
                          });
                      }
                    } else {
                      for (var b = 0; b < _; b++)
                        i.push({
                          keyPath: t + "[" + b + "]",
                          currKey: b,
                          currTplRef: f,
                          currRef: l,
                        });
                      for (var O = f.length; O < l.length; O++)
                        n[t + "[" + O + "]"] = l[O];
                    }
                  } else
                    f !== l &&
                      ("RegExp" === p
                        ? l.toString() !== f.toString() && (n[t] = l)
                        : "Date" === p
                        ? l.getTime() !== f.getTime() && (n[t] = l)
                        : (n[t] = l));
                };
              i.length > 0;

            )
              c();
            return u(Object.assign(n, r));
          })(f, s);
          return l && 0 !== Object.keys(l).length
            ? { diffData: l, callback: i }
            : { diffData: null, callback: i };
        },
        v = function (t, e) {
          if ((void 0 === e && (e = {}), e && 0 !== Object.keys(e).length)) {
            0;
            try {
              t.setData(e);
            } catch (t) {}
          }
        },
        g = new o({ idle: 15, maxTask: 150 });
      g.on("run", (t) => {
        var { tasks: e = [] } = t,
          n = new Set();
        e.forEach((t) => {
          var { pageCtx: e } = t;
          if (!n.has(e.__pageId)) {
            n.add(e.__pageId);
            var { diffData: o, callback: i } = h(e);
            if (o) {
              0;
              var a = Object(r.a)({}, o);
              v(e, a), f(e), i();
            }
          }
        });
      });
      var m = new o({ idle: 10, maxTask: 3 });
      m.on("run", function (t) {
        void 0 === t && (t = {});
        var { tasks: e = [] } = t,
          n = {},
          r = new Set();
        e.forEach((t) => {
          var { pageCtx: e, dataSets: o } = t;
          (e.__waitKeySets = new Set()), v(e, o.data);
          var i = e.__pageId;
          (n[i] = e), r.add(i);
        }),
          r.forEach((t) => {
            f(n[t], n[t].__waitKeySets), (n[t].__waitKeySets = new Set());
          }),
          m.queue.forEach((t) => {
            var { pageCtx: e, dataSets: n } = t;
            e.__waitKeySets.add(n.rootKey);
          });
      });
      var _ = function (t, e) {
        void 0 === t && (t = {}), void 0 === e && (e = {});
        var n,
          r = e;
        ("function" == typeof e && (r.cb = e),
        (n = this),
        p.tested ||
          ((n.data.__testIsChangeData = !0),
          (p.tested = !0),
          n.data.__testIsChangeData &&
            ((p.support = !0), delete n.data.__testIsChangeData)),
        p.support)
          ? ((t = u(t)),
            e.immediate
              ? (function (t, e, n) {
                  void 0 === n && (n = () => {}),
                    m.runEvent(
                      t,
                      (t, e) => t.pageCtx === e,
                      (e) => {
                        var { data: n } = e;
                        v(t, n);
                      }
                    );
                  var r = !1;
                  g.runEvent(
                    t,
                    (t, e) => t.pageCtx === e,
                    () => {
                      if (!r) {
                        r = !0;
                        var { diffData: e, callback: n } = h(t);
                        e && (v(t, e), n());
                      }
                    }
                  ),
                    v(t, e),
                    f(t),
                    n();
                })(this, t, r.cb || l)
              : (s(this, t, r.cb || l),
                (function (t) {
                  t.__pageId || (t.__pageId = Symbol("page-id-" + d.pageId++));
                  g.registEvent({ pageCtx: t });
                })(this)))
          : this.setData(t, r.cb || l);
      };
      var y = (t) => {
          g.runEvent(t, (t, e) => t.pageCtx === e),
            m.runEvent(t, (t, e) => t.pageCtx === e);
        },
        b = (t, e) => {
          var { props: n = {} } = e;
          f(t),
            Object.keys(n).forEach((e) => {
              t.__propKeySets.add(e);
            });
        };
    },
    QsG0: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ruleAdapter = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
          e = e.trim();
          var n = /^origin|middle|large|small$/i,
            r = e.match(n);
          if (r) {
            var o = c(t),
              i = r[0];
            e = s(i, o);
          }
          return e;
        }),
        (e.urlAdaptor = function (t, e) {
          var n = d(t, e);
          t = n
            ? n.hasWatermark
              ? (function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t,
                    o = e.isGifOptimation,
                    a = i() && (n || d(t, o));
                  if (a) {
                    var u = a.hasWatermark,
                      c = a.format,
                      s = a.width,
                      p = a.height,
                      h = a.quality,
                      v = a.imgSuffixAndWatermark,
                      g = "imageView2/2/w/"
                        .concat(s, "/h/")
                        .concat(p, "/q/")
                        .concat(h, "/format/")
                        .concat(c),
                      m = u ? "|" : "?";
                    r = ""
                      .concat(r.replace(l(), ".") + v)
                      .concat(m)
                      .concat(encodeURIComponent(g));
                  } else r = f(r);
                  return r;
                })(t, e, n)
              : (function (t, e) {
                  var n = e.originFormat,
                    r = e.format,
                    o = e.width,
                    i = (function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1e3,
                        e = ["small", "middle", "large", "origin"],
                        n = 3;
                      t <= 260
                        ? (n = 0)
                        : t <= 520
                        ? (n = 1)
                        : t <= 900 && (n = 2);
                      return e[n];
                    })(o),
                    a = t.replace(l(), ""),
                    u = s(i, r);
                  return "".concat(a, ".").concat(n).concat(u);
                })(t, n)
            : f(t);
          return t;
        }),
        (e.parseUrl =
          e.getCdnRegex =
          e.transQiniuFormatToWebp =
          e.checkWeakNetwork =
          e.getWeakNetwork =
          e.getCanWebp =
            void 0);
      var r = n("9mDI"),
        o = {
          canwebp: (0, r.getStorage)("canwebp"),
          networkStatus: (0, r.getStorage)("networkStatus"),
        },
        i = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = !1;
          try {
            o.canwebp || (o.canwebp = (0, r.getStorage)("canwebp")),
              o.canwebp &&
                "ok" !== o.canwebp &&
                t.parseWebp &&
                (o.canwebp = JSON.parse(o.canwebp).data),
              (e = "ok" === o.canwebp);
          } catch (t) {
            return e;
          }
          return e;
        };
      e.getCanWebp = i;
      var a = function (t) {
          return "2g" === t || "3g" === t || "none" === t;
        },
        u = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1e4,
            i = a(t),
            u = a(t) ? "bad" : "fine";
          i
            ? (e = setTimeout(function () {
                (0, r.setStorage)("networkStatus", u), (o.networkStatus = u);
              }, n))
            : (e && clearTimeout(e),
              (0, r.setStorage)("networkStatus", u),
              (o.networkStatus = u));
        };
      e.getWeakNetwork = function () {
        var t = !1;
        try {
          t = "bad" === (o.networkStatus || (0, r.getStorage)("networkStatus"));
        } catch (t) {}
        return t;
      };
      e.checkWeakNetwork = function () {
        try {
          "undefined" != typeof wx &&
            wx.getNetworkType &&
            wx.onNetworkStatusChange &&
            (wx.getNetworkType({
              success: function (t) {
                return u(t.networkType);
              },
            }),
            wx.onNetworkStatusChange(function (t) {
              return u(t.networkType);
            }));
        } catch (t) {}
      };
      var c = function (t) {
          var e = t.match(/\.(jpe?g|png|bmp|gif)/i),
            n = "jpg";
          return e && (n = e[1]), n;
        },
        s = function (t, e) {
          var n = (function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            t = t.toLocaleLowerCase();
            var e = /(jpg|gif|png|webp)/;
            return e.test(t) || (t = "jpg"), i() && (t = "webp"), t;
          })(e);
          return "!".concat(t, ".").concat(n);
        },
        f = function (t) {
          var e,
            n = i(),
            r = /(\?imageView2\/\d\/w\/\d+\/h\/\d+\/q\/\d+\/format\/)(\w+)/;
          if (((e = t), r.test(t))) {
            var o = t.match(r)[2];
            if (n) "webp" !== o && (e = t.replace(r, "$1webp"));
            else if ("webp" === o) {
              var a = c(t);
              e = t.replace(r, "$1".concat(a));
            }
          }
          return e;
        };
      e.transQiniuFormatToWebp = f;
      var l = function () {
        return /\.([^.!]+)!([0-9]{1,4})x([0-9]{1,4})q?([0-9]{0,2}|100)?(\+2x)?\..+/;
      };
      e.getCdnRegex = l;
      var d = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = i(e),
          r = e.isGifOptimation,
          o = /([^.!]+)\?watermark\/.*\/$/,
          a = 1,
          u = t.match(l());
        if (!u || u.length < 4) return null;
        var c,
          s = r ? "gif/unoptimize/1" : "gif",
          f = u[1].match(o),
          d = !1;
        f && f.length ? ((c = f[1]), (d = !0)) : (c = u[1]);
        var p = c || "";
        return (
          "gif" === c
            ? (p = s)
            : n
            ? (p = "webp")
            : ("webp" !== c && "jpeg" !== c) || (p = "jpg"),
          "+2x" === u[5] && (a = 2),
          {
            hasWatermark: d,
            originFormat: c,
            format: p.toLocaleLowerCase(),
            width: parseInt(u[2], 10) * a,
            height: parseInt(u[3], 10) * a,
            quality: u[4] || 75,
            imgSuffixAndWatermark: u[1],
            multiple: a,
          }
        );
      };
      e.parseUrl = d;
    },
    QxN7: function (t, e, n) {
      n.r(e);
      var r = n("/QeK");
      n.d(e, "platform", function () {
        return r.a;
      });
      var o = n("kSnQ");
      n.d(e, "teeEnv", function () {
        return o.n;
      }),
        n.d(e, "isWeb", function () {
          return o.i;
        }),
        n.d(e, "isXhsApp", function () {
          return o.j;
        }),
        n.d(e, "isNormalBrower", function () {
          return o.h;
        }),
        n.d(e, "globalReader", function () {
          return o.g;
        }),
        n.d(e, "cache", function () {
          return o.b;
        }),
        n.d(e, "baseRequest", function () {
          return o.a;
        }),
        n.d(e, "request", function () {
          return o.l;
        }),
        n.d(e, "safeLog", function () {
          return o.m;
        }),
        n.d(e, "getPagePath", function () {
          return o.e;
        }),
        n.d(e, "getPageURL", function () {
          return o.f;
        }),
        n.d(e, "getErrorMsg", function () {
          return o.d;
        }),
        n.d(e, "getAppId", function () {
          return o.c;
        }),
        n.d(e, "updateAppId", function () {
          return o.o;
        }),
        n.d(e, "parseToCloudUser", function () {
          return o.k;
        });
      var i = n("fYK9");
      n.d(e, "emitUserAuthSync", function () {
        return i.b;
      }),
        n.d(e, "onUserAuthSync", function () {
          return i.d;
        }),
        n.d(e, "emitUserAuthSuccess", function () {
          return i.a;
        }),
        n.d(e, "onUserAuthSuccess", function () {
          return i.c;
        });
      var a = n("HnuB");
      for (var u in a)
        [
          "default",
          "hooks",
          "constants",
          "platform",
          "teeEnv",
          "isWeb",
          "isXhsApp",
          "isNormalBrower",
          "globalReader",
          "cache",
          "baseRequest",
          "request",
          "safeLog",
          "getPagePath",
          "getPageURL",
          "getErrorMsg",
          "getAppId",
          "updateAppId",
          "parseToCloudUser",
          "emitUserAuthSync",
          "onUserAuthSync",
          "emitUserAuthSuccess",
          "onUserAuthSuccess",
        ].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(u);
      var c = n("fLr7");
      n.d(e, "AuthButtonType", function () {
        return c.c;
      }),
        n.d(e, "AuthDialogType", function () {
          return c.d;
        }),
        n.d(e, "UnionAuthType", function () {
          return c.r;
        }),
        n.d(e, "CACHE_AUTH_DATA", function () {
          return c.f;
        }),
        n.d(e, "CACHE_BEHAVIOR_CRYPTO_INFO", function () {
          return c.g;
        }),
        n.d(e, "CACHE_LOGIN_TICKET_INFO", function () {
          return c.h;
        }),
        n.d(e, "CACHE_REPORT_PRIVACY_AUTH", function () {
          return c.i;
        }),
        n.d(e, "CACHE_API_NEED_PRIVACY_AUTH", function () {
          return c.e;
        }),
        n.d(e, "CACHE_REQ_HOOK_INIT", function () {
          return c.j;
        }),
        n.d(e, "USER_AUTH_SYNC_EVENT", function () {
          return c.q;
        }),
        n.d(e, "USER_AUTH_SUCCESS_EVENT", function () {
          return c.p;
        }),
        n.d(e, "TEE_LOGIN_SILENT_BEFORE_EVENT", function () {
          return c.n;
        }),
        n.d(e, "TEE_LOGIN_YZ_BEFORE_EVENT", function () {
          return c.o;
        }),
        n.d(e, "TEE_LOGIN_PLAT_SUCCESS_EVENT", function () {
          return c.m;
        }),
        n.d(e, "TEE_LOGIN_END_EVENT", function () {
          return c.l;
        }),
        n.d(e, "MobileVerifyType", function () {
          return c.k;
        }),
        n.d(e, "AUTH_BTN_CLICK_AFTER_HOOK", function () {
          return c.a;
        }),
        n.d(e, "AUTH_POPUP_SHOW_AFTER_HOOK", function () {
          return c.b;
        });
      var s = n("dvf8");
      n.d(e, "hooks", function () {
        return s;
      });
      var f = n("c7Bu");
      n.d(e, "constants", function () {
        return f;
      });
    },
    Qzzd: function (t, e, n) {
      function r() {
        var t = 0;
        return new Promise(function (e, r) {
          n.e("packages/async-main/chunk")
            .then(n.bind(null, "plPE"))
            .then(function (n) {
              return (function e(n, r, o) {
                return n.instance
                  ? r(n)
                  : t > 2
                  ? o("search hummer instance timeout")
                  : ((t += 1),
                    void setTimeout(function () {
                      return e(n, r, o);
                    }, 20));
              })(n.Hummer, e, r);
            });
        });
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "e", function () {
          return u;
        });
      var o = function (t, e) {
          r().then(function (n) {
            return n.capture(t, e);
          });
        },
        i = function (t) {
          r().then(function (e) {
            return e.setEnv(t);
          });
        },
        a = function (t) {
          r().then(function (e) {
            return e.setExtra(t);
          });
        },
        u = function (t) {
          r().then(function (e) {
            return e.setOptions(t);
          });
        };
    },
    R7Zb: function (t, e, n) {
      var r = n("EqB2"),
        o = n("Fcif"),
        i = n("9ZMt"),
        a = n("x5Yp"),
        u = n("Tewj"),
        c = n("MLLI"),
        s = n("zMoS"),
        f = n("taYb"),
        l = (t, e) => {
          t = Object(t);
          var n = {};
          return (
            Object.keys(t).forEach((r) => {
              var o = t[r];
              n[e(o, r, t)] = o;
            }),
            n
          );
        },
        d = (t, e) => {
          for (var n = -1, r = {}; ++n < e.length; ) {
            var o = e[n],
              i = o.split(".").pop(),
              a = Object(s.a)(t, o);
            r[i] = a;
          }
          return r;
        },
        { toSnakeCase: p } = f.a,
        h = n("1Uvd"),
        v = Object(h.a)(8),
        g = {
          coupon: "promocard",
          venue_banner: "umpBackground",
          ump_reward: "meetReduce",
          ump_seckill: "seckill",
          ump_limitdiscount: "limitdiscount",
          goods_recommend: "recommend",
          cube_v3: "cube",
          image_text_nav: "image_nav",
          "knowledge-goods": "knowledge_goods",
        },
        m = {
          goods: "layout",
          tag_list_top: ["goods_list_config.layout"],
          tag_list_left: ["goods_list_config.layout"],
          recommend: (t) => {
            var e = {},
              n = Object(s.a)(t, "query_extra.page_size", 0);
            return (e.components_style_layout = n), e;
          },
          seckill: ["layout"],
          groupon: ["layout", "groupon_type"],
          limitdiscount: ["layout"],
          shop_banner_weapp: ["store_info_style"],
          image_ad: (t) => {
            var e = {},
              n = Object(s.a)(t, "show_method", 0);
            if (
              ((e.components_style_show_method = n),
              (e.components_style_size = Object(s.a)(t, "size", 0)),
              7 == +n)
            ) {
              var r = Object(s.a)(t, "sub_entry[0].hot_areas", !1);
              e.components_style_is_hotarea = r ? 1 : 0;
            }
            return e;
          },
          image_nav: ["show_method", "slide_setting"],
          audio: ["style"],
          points_goods: ["layout"],
          period_buy: ["size"],
          knowledge_goods: ["knowledge_goods_data.list_mode"],
          goods_new: ["layout"],
          rishiji_ump: (t) => {
            var e = {};
            return (
              (e.components_style_left_type = Object(s.a)(
                t,
                "ump_data[0].type",
                0
              )),
              (e.components_style_right_type = Object(s.a)(
                t,
                "ump_data[1].type",
                0
              )),
              e
            );
          },
          bargain: ["size"],
          teacher: ["teacher_data.list_mode"],
          member_goods: ["goods_from"],
          promocard: ["layout_opt.type", "source"],
          search: ["text_align", "show_mode", "position"],
        },
        _ = {
          view: { et: "view", ei: "component_view", en: "组件曝光" },
          open_goods: { et: "click", ei: "open_goods", en: "打开商品详情" },
          click_buy: { et: "click", ei: "click_buy", en: "点击购买" },
          click_content: { et: "click", ei: "click_content", en: "组件点击" },
        },
        y = (t) => g[t] || t,
        b = (t) => {
          var e = y(t.type),
            n = m[e],
            r = {};
          switch (Object.prototype.toString.call(n)) {
            case "[object String]":
              r = l(d(t, [n]), (t, e) => "components_style_" + e);
              break;
            case "[object Array]":
              r = l(d(t, n), (t, e) => "components_style_" + e);
              break;
            case "[object Function]":
              r = n(t);
              break;
            default:
              r = {};
          }
          return r;
        },
        O = {
          props: { createdWithViewEvent: { type: Boolean, default: !0 } },
          logicData: () => ({ hasLogger: !1 }),
          mounted() {
            u.default.on("setcontentviewlog", this.handleContentViewLog, this);
          },
          created() {
            this.createdWithViewEvent &&
              "web" === i.default.getEnv() &&
              this.$nextTick(() => {
                var t,
                  e,
                  n,
                  r,
                  u,
                  c,
                  s,
                  f,
                  l =
                    ((t = this._opt),
                    (e = this._index),
                    (n = v),
                    (r = this.getLoggerSpm()),
                    (u = p(t)),
                    (c = y(u.type || u.item_type)),
                    (s = r + "~" + c + "." + (e + 1) + "~0~" + n),
                    (f = b(u)),
                    Object(o.a)(
                      { item_type: "component", component: c, banner_id: s },
                      f
                    ));
                if ("web" === i.default.getEnv() && !Object(a.a)(l))
                  try {
                    l = Object(o.a)({}, l, this.getScreenInfo(this.$el));
                  } catch (t) {}
                this.sendComponentLogger("view", l);
              });
          },
          methods: {
            getLoggerSpm() {
              var t = i.default.getGlobal("logger");
              return t ? t.getPageSpm() : "";
            },
            getLoggerComponentName() {
              var {
                _opt: { type: t },
              } = this;
              return y(t);
            },
            getScreenInfo(t) {
              if (!t) return {};
              try {
                var e = t.getBoundingClientRect().top + window.scrollY,
                  n =
                    window.innerHeight || document.documentElement.clientHeight,
                  r = Math.ceil(e / n);
                return { screenNo: 0 === r ? 1 : r, topPixel: Math.floor(e) };
              } catch (t) {
                return {};
              }
            },
            getBannerId(t) {
              void 0 === t && (t = 0);
              var {
                _opt: { type: e },
                _index: n,
              } = this;
              return (
                this.getLoggerSpm() +
                "~" +
                y(e) +
                "." +
                (n + 1) +
                "~" +
                t +
                "~" +
                v
              );
            },
            getComponentLoggerExtraParams() {
              return b(this._opt);
            },
            sendComponentLogger(t, e) {
              ((t) => {
                var e = i.default.getGlobal("logger");
                e && e.log(t);
              })(
                ((t, e) => {
                  var n = {};
                  switch (t) {
                    case "view":
                    case "click_buy":
                    case "open_goods":
                    case "click_content":
                      n = Object(o.a)({}, _[t], { params: { view_objs: e } });
                      break;
                    case "logger":
                      n = e;
                  }
                  return n;
                })(t, e)
              );
            },
            handleContentViewLog() {
              if (!this.hasLogger) {
                var t = this.getLoggerComponentName();
                this.loggerRef &&
                  this.createSelectorQuery()
                    .select("." + t + "_content_ref")
                    .boundingClientRect((e) => {
                      if (e) {
                        var { top: n, height: r } = e,
                          { windowHeight: o } = Object(c.b)();
                        o &&
                          n > 0 &&
                          n + 0.7 * r < o &&
                          ((this.hasLogger = !0),
                          this.sendComponentLogger("logger", {
                            et: "view",
                            ei: "content_view",
                            en: "组件内容曝光（组件位置70%真实暴露在可视区）",
                            params: {
                              component: t,
                              banner_id: this.getBannerId(),
                            },
                          }));
                      }
                    })
                    .exec();
              }
            },
          },
        };
      e.a = function (t) {
        var { optDesc: e } = void 0 === t ? {} : t;
        return {
          mixins: [Object(r.a)({ optDesc: e }), O],
          props: { _index: Number },
        };
      };
    },
    SVbq: function (t, e, n) {
      n.d(e, "k", function () {
        return s;
      }),
        n.d(e, "i", function () {
          return oe;
        }),
        n.d(e, "m", function () {
          return ae;
        }),
        n.d(e, "l", function () {
          return ue;
        }),
        n.d(e, "s", function () {
          return ce;
        }),
        n.d(e, "v", function () {
          return se;
        }),
        n.d(e, "o", function () {
          return Mt;
        }),
        n.d(e, "x", function () {
          return Ht;
        }),
        n.d(e, "y", function () {
          return Gt;
        }),
        n.d(e, "w", function () {
          return qt;
        }),
        n.d(e, "D", function () {
          return Wt;
        }),
        n.d(e, "r", function () {
          return Yt;
        }),
        n.d(e, "z", function () {
          return $t;
        }),
        n.d(e, "j", function () {
          return Vt;
        }),
        n.d(e, "t", function () {
          return Lt;
        }),
        n.d(e, "q", function () {
          return _t;
        }),
        n.d(e, "b", function () {
          return x;
        }),
        n.d(e, "u", function () {
          return V;
        }),
        n.d(e, "p", function () {
          return J;
        }),
        n.d(e, "n", function () {
          return Z;
        }),
        n.d(e, "c", function () {
          return f;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "g", function () {
          return m;
        }),
        n.d(e, "f", function () {
          return O;
        }),
        n.d(e, "C", function () {
          return le;
        }),
        n.d(e, "e", function () {
          return fe;
        }),
        n.d(e, "h", function () {
          return nt;
        }),
        n.d(e, "B", function () {
          return It;
        }),
        n.d(e, "d", function () {
          return B;
        }),
        n.d(e, "A", function () {
          return o;
        });
      var r = n("Sh92"),
        o = new r.c("_tee_enter_shop_"),
        i = n("bb6g"),
        a = function (t) {
          return (
            null == t || "object" != typeof t || 0 === Object.keys(t).length
          );
        },
        u = function () {};
      function c(t, e) {
        try {
          var n = o.get(t);
          return n && "function" == typeof n ? n(e) : u;
        } catch (t) {
          return u;
        }
      }
      function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = console.log;
        n.apply(void 0, Object(i.__spreadArray)(["chain:"], t));
      }
      var f,
        l,
        d,
        p,
        h,
        v,
        g,
        m,
        _,
        y,
        b,
        O,
        w,
        E = n("9ZMt"),
        S = n("US/N"),
        j = n("/duV"),
        A = n("qHGj"),
        T = n("w2Y9"),
        P = n.n(T),
        k = n("tuFO"),
        I = n.n(k);
      !(function (t) {
        (t.GLOBAL = "global"),
          (t.EXT = "ext"),
          (t.OTHER = "other"),
          (t.W_GLOBAL = "w_global"),
          (t.ON_LAUNCH = "on_launch"),
          (t.PRELOAD = "preload");
      })(f || (f = {})),
        (function (t) {
          (t.COMMON = "common"),
            (t.HOME = "home"),
            (t.RETAIL_SHELF = "retail_shelf");
        })(l || (l = {})),
        (function (t) {
          (t.COMMON = "common"),
            (t.DIRECT = "direct"),
            (t.SESSION = "session"),
            (t.HOME = "home"),
            (t.HQ = "hq"),
            (t.SINGLE = "single"),
            (t.RETAIL_SINGLE = "retail_single"),
            (t.RETAIL_SHELF = "retail_shelf");
        })(d || (d = {})),
        (function (t) {
          (t.WEB = "web"),
            (t.ANT = "ant"),
            (t.QQ = "qq"),
            (t.WX = "weapp"),
            (t.TT = "tt"),
            (t.XHS = "xhs");
        })(p || (p = {})),
        (function (t) {
          (t.error = "error"), (t.info = "info"), (t.warn = "warn");
        })(h || (h = {})),
        (function (t) {
          (t.ARRAY = "array"), (t.OBJECTS = "object");
        })(v || (v = {})),
        (function (t) {
          (t.LBSTIME = "LBSTM"),
            (t.EREQTIME = "REQTM"),
            (t.ETTIME = "ETTM"),
            (t.SHOPTIME = "SPTM"),
            (t.UPDATESHOPTIME = "UPTM"),
            (t.AUTHLBS = "ALBS");
        })(g || (g = {})),
        (function (t) {
          (t[(t.AGREE = 1)] = "AGREE"),
            (t[(t.DENY = 2)] = "DENY"),
            (t[(t.UNKNOWN = 0)] = "UNKNOWN");
        })(m || (m = {})),
        (function (t) {
          t[(t.NOT_CHAIN = 1000003)] = "NOT_CHAIN";
        })(_ || (_ = {})),
        (function (t) {
          (t.ENTER_SHOP_TIME = "enter_shop_time"),
            (t.GET_LBS_TIME = "get_lbs_time"),
            (t.GET_LBS_AUTH_TIME = "get_lbs_auth_time"),
            (t.REQUEST_TIME = "request_time"),
            (t.UPDATE_KDT_ID_TIME = "update_kdtId_time"),
            (t.GET_AUTH_TIME = "get_auth_time"),
            (t.GET_PRE_FETCH_TIME = "GET_PRE_FETCH");
        })(y || (y = {})),
        (function (t) {
          (t.NOT_LOGIN = "notLogin"),
            (t.NOT_CHAIN_STORE = "notChainStore"),
            (t.NEED_LBS = "needLbs"),
            (t.SUCCESS = "success"),
            (t.ERROR = "error"),
            (t.UNKNOWN = "unknown"),
            (t.DELAY_ENTER_SHOP = "DELAY_ENTER_SHOP");
        })(b || (b = {})),
        (function (t) {
          (t[(t.Enter = 1)] = "Enter"),
            (t[(t.Select = 2)] = "Select"),
            (t[(t.Assign = 3)] = "Assign");
        })(O || (O = {})),
        (function (t) {
          (t.All = "0"), (t.AllOffline = "1"), (t.Specific = "2");
        })(w || (w = {}));
      var x,
        C = n("2wjL"),
        D = n("qYBx"),
        N = n("hcPn"),
        L = n("q29p"),
        M = n.n(L),
        R = "pages/home/dashboard/index",
        U = E.default.getEnv(),
        H = "_enter_latitude_cache",
        F = U === p.WX,
        G = U === p.WEB,
        q = U === p.TT,
        K = {
          locationPromise: null,
          authStatusLBSPromise: null,
          apolloPromise: null,
          prefetchDataValidPromise: null,
          rSESConfigPromise: null,
        },
        B = {
          lbs_gt: "app:chain:get:location",
          shop_c: "app:chain:get:shop:callback",
          a_enter_c: "app:chain:enter:callback",
        },
        z = { fe_s: !0, ds_cb: !1, on_s: !1 };
      !(function (t) {
        (t.linkToSwitch = "client_enter_shop_linkto_switch"),
          (t.loadIdCheck = "client_enter_shop_onload_id_check"),
          (t.loggerUp = "client_enter_shop_logger_up"),
          (t.ignoreConfig = "global_enter_shop_ignore_config"),
          (t.weappConfigs = "enter_shop_weapp_configs");
      })(x || (x = {}));
      var W = {},
        Y = function (t) {
          return (function (t) {
            return Object(S.default)({
              path: "/wscshopcore/get-enter-apollo/configs.json",
              data: t,
              method: "get",
              options: { useCdn: !0 },
            });
          })(t)
            .then(function (t) {
              return (
                t &&
                  t.length &&
                  t.forEach(function (t) {
                    W[t.name] = t.val;
                  }),
                W
              );
            })
            .catch(function (t) {
              return (
                (function (t) {
                  if (t && t.code === _.NOT_CHAIN) return !0;
                })(t) || nt({ err: t }),
                {}
              );
            });
        },
        $ = function (t) {
          return (
            void 0 === t && (t = !1),
            (K.apolloPromise && !t) ||
              (K.apolloPromise = Y({
                hqKdtId: Object(j.e)(),
                list: [
                  { name: x.linkToSwitch, parse: v.OBJECTS },
                  { name: x.loadIdCheck, parse: v.OBJECTS },
                  { name: x.loggerUp, parse: v.ARRAY },
                  { name: x.ignoreConfig, parse: v.ARRAY },
                  { name: x.weappConfigs, parse: v.ARRAY },
                ],
              })),
            K.apolloPromise
          );
        },
        V = function () {
          return W;
        },
        J = function () {
          return "[object Promise]" ===
            Object.prototype.toString.call(K.apolloPromise)
            ? K.apolloPromise
            : $().catch(function () {
                return Promise.resolve({});
              });
        },
        Z = function (t, e) {
          void 0 === e && (e = {});
          var n = e.kdtId,
            r = void 0 === n ? 0 : n,
            o = e.raw,
            i = void 0 !== o && o;
          return J().then(function (e) {
            if (null == e ? void 0 : e.enter_shop_weapp_configs)
              try {
                var n =
                  (null == e ? void 0 : e.enter_shop_weapp_configs[t]) || [];
                return i
                  ? n
                  : !n.includes(-r || -Object(j.e)()) &&
                      (n.includes("100%") || n.includes(+r || +Object(j.e)()));
              } catch (t) {
                return !1;
              }
            return !1;
          });
        },
        Q = [],
        X = null,
        tt = function (t) {
          return (
            void 0 === t && (t = "YYYY-MM-DD HH:mm:ss"), M()(new Date(), t)
          );
        },
        et = function () {
          clearTimeout(X),
            (X = setTimeout(function () {
              try {
                (t = {
                  type: h.info,
                  ignore: { url: !0 },
                  text: "[enter-tee-shop]",
                  result: Q,
                }),
                  Object(j.m)().then(function (e) {
                    if (Object(A.b)(null == e ? void 0 : e.shop))
                      return (
                        (t.text = "version: 1.5.2 " + (t.text || "")),
                        Object(S.default)({
                          path: "/wscshopcore/set-enter-logger/configs.json",
                          data: t,
                          method: "post",
                        })
                      );
                  }),
                  (Q = []);
              } catch (t) {
                Q = [];
              }
              var t;
            }, 5e3));
        },
        nt = function (t) {
          Z("accordLogger").then(function (e) {
            e && s(t);
          }),
            Q.push(
              Object(i.__assign)(Object(i.__assign)({}, t), {
                startTime: tt("YYYY-MM-DD HH:mm:ss"),
              })
            ),
            et();
        },
        rt = {},
        ot = {
          doAutoEnterShop: 0,
          getLbsTime: 0,
          exceptLbsAndPreTime: 0,
          updateKdtIdTime: 0,
          requestTime1: 0,
          requestStart1: 0,
          requestTime2: 0,
          requestStart2: 0,
          isRequestNum: 0,
          getAuthAndLbsTime: 0,
          isAuth: 0,
          getAuthTime: 0,
          logTag: "",
          enterPath: "",
          rootKdtId: "",
          firstAutoEnterShop: 1,
          isChainStore: 1,
          hasData: 1,
          hasError: 0,
          getPreDataTime: 0,
          getPreDataStatus: "",
          getPreDataObj: {},
          preDataValid: 0,
          version: Ut("userVersion"),
          logNpmVersion: "1.5.2",
        },
        it = function (t) {
          rt[t] || (rt[t] = Object(i.__assign)({}, ot));
        },
        at = function (t) {
          return rt[t] || {};
        },
        ut = function (t) {
          try {
            t && (rt[t] = null);
          } catch (t) {}
        };
      function ct(t) {
        void 0 === t && (t = !1);
        var e = new Date().getTime();
        return t ? e + "" : e;
      }
      var st = function (t) {
        try {
          var e = t.time,
            n = t.uuid,
            o = t.againRequest,
            i = t.logTag,
            a = t.error,
            u = t.result,
            c = t.requestStart,
            s = at(n);
          switch ((a && (s.hasError = 1), t.type)) {
            case y.ENTER_SHOP_TIME:
              s.hasData &&
                s.isChainStore &&
                ((s.doAutoEnterShop = e + s.getPreDataTime),
                (s.logTag = i),
                (function (t) {
                  new Promise(function (e, n) {
                    try {
                      if (
                        ((t.getAuthAndLbsTime = t.getAuthTime + t.getLbsTime),
                        (t.exceptLbsAndPreTime =
                          t.doAutoEnterShop -
                          t.getAuthAndLbsTime -
                          t.getPreDataTime),
                        (t.firstAutoEnterShop = z.fe_s ? 1 : 2),
                        F)
                      ) {
                        var o = Object(r.e)();
                        (z.fe_s && t.doAutoEnterShop > 6e3) ||
                          t.hasError ||
                          o({
                            et: "custom",
                            ei: "weapp_enter_shop_new",
                            en: "小程序进店耗时",
                            params: t,
                          });
                      }
                      z.fe_s &&
                        nt({
                          text:
                            (t.getPreDataTime > 0 ? "预-" : "") +
                            "小程序进店耗时",
                          enterShopTime: t,
                        }),
                        (z.fe_s = !1),
                        e(!0);
                    } catch (t) {
                      n(t);
                    }
                  });
                })(s));
              break;
            case y.GET_LBS_AUTH_TIME:
              (s.getLbsTime = e), (s.isAuth = 1);
              break;
            case y.REQUEST_TIME:
              if (n) {
                var f = at(n);
                o
                  ? ((f.requestTime2 = e),
                    (f.isRequestNum = 2),
                    (f.requestStart2 = c))
                  : ((f.requestTime1 = e),
                    (f.isRequestNum = 1),
                    (f.requestStart1 = c));
              }
              break;
            case y.UPDATE_KDT_ID_TIME:
              if (n) at(n).updateKdtIdTime = e;
              break;
            case y.GET_AUTH_TIME:
              s.getAuthTime = e;
              break;
            case y.GET_LBS_TIME:
              s.getLbsTime = e;
              break;
            case y.GET_PRE_FETCH_TIME:
              e && ((s.getPreDataTime = e), (s.preDataValid = u ? 1 : 2));
          }
        } catch (a) {}
      };
      function ft(t, e) {
        F &&
          Object(r.e)()({
            et: "custom",
            ei: "lbs",
            en: "Lbs 定位",
            params: Object(i.__assign)({ eventType: t }, e),
          });
      }
      var lt = n("Tewj"),
        dt = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          lt.default.trigger.apply(lt.default, Object(i.__spreadArray)([t], e));
        },
        pt = {};
      Object.keys(B).forEach(function (t) {
        var e = B[t];
        pt[e] = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          return dt.apply(void 0, Object(i.__spreadArray)([e], t));
        };
      });
      var ht = function (t) {
          return new Promise(function (e, n) {
            (t !== m.AGREE && t !== m.DENY) ||
              setTimeout(function () {
                n({ err: "[" + U + "]获取定位时间超出3s", type: "timeout" });
              }, 3e3);
          });
        },
        vt = function (t) {
          return (
            (K.locationPromise = new Promise(function (e) {
              Promise.race([
                ht(t),
                Object(N.b)()
                  .then(function (t) {
                    return (function (t, e) {
                      var n = Object(r.g)(e, t),
                        i = n.lng,
                        a = n.lat;
                      nt({
                        info:
                          "[" +
                          U +
                          "]getLocation更新定位信息 - " +
                          JSON.stringify({ lng: i, lat: a }),
                      });
                      var u = { lng: i, lat: a, timestamp: Date.now() };
                      return (
                        o.set(H, u, 3600),
                        E.default.setStorage({ key: H, data: u }),
                        E.default.setStorage({
                          key: "_customer_latitude_cache",
                          data: u,
                        }),
                        { lng: i, lat: a }
                      );
                    })(t.latitude, t.longitude);
                  })
                  .then(function (e) {
                    return yt(t), e;
                  })
                  .catch(function (e) {
                    if (
                      (yt(t),
                      nt({
                        err:
                          "[" +
                          U +
                          "]获取定位进入catch - " +
                          (null == e ? void 0 : e.errMsg),
                      }),
                      "getLocation:fail auth deny" !==
                        (null == e ? void 0 : e.errMsg))
                    ) {
                      var n = o.get(H) || {},
                        r = n.lng,
                        i = n.lat;
                      if (r) return { lat: i, lng: r };
                    }
                    return { lat: "", lng: "" };
                  }),
              ])
                .catch(function (t) {
                  return (
                    "timeout" === (null == t ? void 0 : t.type) &&
                      nt({ err: null == t ? void 0 : t.err }),
                    { lat: "", lng: "" }
                  );
                })
                .then(e);
            })),
            K.locationPromise
          );
        },
        gt = function (t) {
          var e = t.authStatus,
            n = t.refresh,
            r = void 0 !== n && n;
          return K.locationPromise && !r ? K.locationPromise : vt(e);
        },
        mt = function (t, e) {
          if ("set" !== t)
            return (
              E.default.$native.getStorageSync("_enter_latitude_auth") ||
              m.UNKNOWN
            );
          E.default.setStorage({ key: "_enter_latitude_auth", data: e });
        },
        _t = function (t) {
          if ((void 0 === t && (t = !1), K.authStatusLBSPromise && !t))
            return K.authStatusLBSPromise;
          var e = mt("get");
          return e !== m.AGREE || t
            ? ((K.authStatusLBSPromise = new Promise(function (t, e) {
                F || q
                  ? Promise.race([
                      new Promise(function (t, e) {
                        setTimeout(function () {
                          e({
                            type: "timeout",
                            err: "[wx]获取定位授权时间超出4s",
                          });
                        }, 4e3);
                      }),
                      new Promise(function (t) {
                        E.default.$native.getSetting({
                          success: function (e) {
                            var n = e.authSetting["scope.userLocation"],
                              r = n ? m.AGREE : m.DENY;
                            void 0 === n
                              ? ((r = m.UNKNOWN), t(m.UNKNOWN))
                              : (mt("set", r),
                                gt({ authStatus: r, refresh: !0 }),
                                t(r)),
                              ft("success", { auth_status: r });
                          },
                          fail: function () {
                            ft("fail", { auth_status: m.UNKNOWN }),
                              t(m.UNKNOWN);
                          },
                        });
                      }),
                    ])
                      .catch(function (t) {
                        return (
                          "timeout" === (null == t ? void 0 : t.type) &&
                            nt({ err: null == t ? void 0 : t.err }),
                          Promise.reject(t)
                        );
                      })
                      .then(t, e)
                  : t(m.UNKNOWN);
              })),
              K.authStatusLBSPromise)
            : (gt({ authStatus: e, refresh: !0 }),
              (K.authStatusLBSPromise = Promise.resolve(e)),
              nt({ info: "缓存获取定位授权" }),
              K.authStatusLBSPromise);
        },
        yt = function (t) {
          t === m.UNKNOWN &&
            setTimeout(function () {
              _t(!0);
            }, 1e3);
        },
        bt = function (t) {
          void 0 === t && (t = !0), o.set("needLbsAuth", t);
        },
        Ot = function (t) {
          var e = t.ignoreAuth,
            n = void 0 !== e && e,
            r = t.refresh,
            i = void 0 !== r && r;
          return new Promise(function (t) {
            var e = (function () {
                var t = { lat: "", lng: "" };
                try {
                  var e = o.get(H, t);
                  if (null == e ? void 0 : e.lng)
                    return (
                      z.fe_s &&
                        nt({
                          info:
                            "[" +
                            U +
                            "]LocalCache获取lbs - " +
                            JSON.stringify(e),
                        }),
                      e
                    );
                  if (F || q) {
                    var n = E.default.$native.getStorageSync(H) || t,
                      r = n.timestamp,
                      i = void 0 === r ? 0 : r,
                      a = n.lng,
                      u = n.lat;
                    if (Date.now() - i < 36e5 && a)
                      return (
                        z.fe_s &&
                          nt({
                            info:
                              "[" +
                              U +
                              "]storageCache获取lbs - " +
                              JSON.stringify(n),
                          }),
                        o.set(H, { lng: a, lat: u }),
                        n
                      );
                  }
                  return t;
                } catch (e) {
                  return t;
                }
              })(),
              r = e.lat,
              a = e.lng;
            if (r && a) t({ lat: r, lng: a });
            else {
              if ((bt(), pt[B.lbs_gt](), n))
                return gt({ authStatus: m.UNKNOWN, refresh: i }).then(function (
                  e
                ) {
                  return t(e);
                });
              _t()
                .then(function (e) {
                  return gt({ authStatus: e, refresh: i }).then(function (e) {
                    return t(e);
                  });
                })
                .catch(function () {
                  setTimeout(function () {
                    _t(!0);
                  }, 1e3),
                    t({ lat: "", lng: "" });
                });
            }
          });
        },
        wt = n("U0uK"),
        Et = n("mQXz"),
        St = n.n(Et),
        jt = b.SUCCESS,
        At = b.ERROR,
        Tt = b.DELAY_ENTER_SHOP,
        Pt = {},
        kt = function (t) {
          Pt = t;
        };
      function It() {
        if (!F) return Promise.resolve();
        var t = ct(!0);
        return (
          it(t),
          Bt(Nt, { type: y.GET_PRE_FETCH_TIME, uuid: t })
            .catch(function () {
              return !1;
            })
            .then(function (e) {
              var n,
                r = e.res,
                o = Pt || {},
                a = o,
                c = a.status,
                s = a.apolloConfig,
                f = a.autoSelectKdtId;
              return (
                nt({
                  text: "[prefetchEnterShop]wx 预拉取数据",
                  msg: Object(i.__assign)(
                    { valid: r },
                    St()(o, ["apolloConfig", "shopInfo"])
                  ),
                }),
                s
                  ? ((n = s) &&
                      n.length &&
                      n.forEach(function (t) {
                        W[t.name] = t.val;
                      }),
                    (K.apolloPromise = Promise.resolve(W)))
                  : $(),
                r && [Tt, jt].includes(c)
                  ? c === jt
                    ? z.fe_s
                      ? (kt(o || {}),
                        Bt(Qt.bind(null, { kdt_id: f, uuid: t }, o || {}), {
                          uuid: t,
                          logTag: "on_launch",
                          type: y.ENTER_SHOP_TIME,
                        }).then(function (t) {
                          return (
                            Xt({
                              result: t,
                              isInitEnterShop: !0,
                              hasHomeDetail: !1,
                              resolve: u,
                            }),
                            { status: jt, resultKdtId: f, prefetchData: o }
                          );
                        }))
                      : { status: At }
                    : { status: c }
                  : { status: At }
              );
            })
            .then(function (e) {
              var n = e.status,
                r = e.resultKdtId,
                o = e.prefetchData;
              return (
                kt({}),
                [Tt, jt].includes(n)
                  ? { status: n, uuid: t, resultKdtId: r, prefetchData: o }
                  : Promise.reject("预拉取数据无用")
              );
            })
        );
      }
      var xt = function (t, e) {
          void 0 === e && (e = {});
          for (
            var n = 0, r = ["subKdtId", "sub_kdt_id", "kdtId", "kdt_id"];
            n < r.length;
            n++
          ) {
            var o = r[n];
            if (e[o]) return +e[o];
          }
          return t;
        },
        Ct = function (t, e, n) {
          var r;
          if (
            !(null === (r = null == n ? void 0 : n.enterShop) || void 0 === r
              ? void 0
              : r.data)
          )
            return !1;
          var o,
            i,
            a = e.path,
            u = e.query;
          return (
            (o = a),
            (i = t.path),
            !(
              (["undefined", "null", ""].includes(o) ? R : o || R)
                .replace(/\.html$/, "")
                .replace(/^\/|pages\//, "packages/") !==
                i.replace(/^pages\//, "packages/") ||
              !(function (t, e, n) {
                var r;
                if ("string" != typeof t) return !1;
                if ("object" != typeof e) return !1;
                var o = {};
                "" !== t &&
                  t.split("&").forEach(function (t) {
                    var e = t.split("=");
                    2 === e.length && (o[e[0]] = e[1]);
                  });
                var i = xt(1, e) || xt(1, o),
                  a =
                    +(e.scene || "") ==
                    +(
                      (null === (r = n.enterShop.query) || void 0 === r
                        ? void 0
                        : r.scene) || ""
                    ),
                  u = (+e.shopAutoEnter || 1) === (1 == +o.shopAutoEnter || 1);
                return i && u && a;
              })(["undefined", "null"].includes(u) ? "" : u || "", t.query, n)
            ) || void 0
          );
        };
      function Dt(t) {
        if (K.prefetchDataValidPromise) return K.prefetchDataValidPromise;
        var e = Date.now();
        return (
          (K.prefetchDataValidPromise = new Promise(function (n) {
            if (!E.default.$native.getBackgroundFetchData) return n(!1);
            var r,
              o = !1;
            function a(n) {
              var r,
                a = n.rawData,
                u = n.resolve,
                c = n.type;
              nt((((r = {})[c] = Date.now() - e), r));
              var f = a.path,
                l = a.query,
                d =
                  (function (t) {
                    try {
                      var e = JSON.parse(t);
                      if (0 === e.code && e.data) return e.data;
                    } catch (t) {}
                  })(a.fetchedData) || {},
                p = d.fetchData,
                h = { mag: "使用" + c + "返回结果" };
              if (
                (s(
                  c,
                  p.enterShop,
                  "数据获取时间差:" + (Date.now() - e),
                  "服务端时间差:" + (Date.now() - d.serverTimestamp),
                  f,
                  l
                ),
                !(
                  o ||
                  ("getBackgroundFetchData" === c &&
                    Date.now() - d.serverTimestamp > 36e5)
                ))
              ) {
                if (!o && Ct(t, a, p))
                  return (
                    (o = !0),
                    kt(
                      Object(i.__assign)(
                        Object(i.__assign)({}, p.enterShop.data || {}),
                        { scanCode: p.scanCode || {} }
                      )
                    ),
                    nt(h),
                    void u(!0)
                  );
                o ||
                  "onBackgroundFetchData" !== c ||
                  ((o = !0),
                  nt({
                    text: "[onBackgroundFetchData]弃用",
                    msg: Object(i.__assign)(
                      Object(i.__assign)(
                        { rPath: f, rQuery: l },
                        St()(p.enterShop.data || {}, [
                          "apolloConfig",
                          "shopInfo",
                        ])
                      ),
                      { orgUrl: t }
                    ),
                  }),
                  u(!1)),
                  !o &&
                    "getBackgroundFetchData" === c &&
                    Date.now() - d.serverTimestamp < 3e4 &&
                    ((o = !0), (h.type = "dt"), nt(h), u(!1));
              }
            }
            (E.default.$native.onBackgroundFetchData
              ? new Promise(function (t) {
                  E.default.$native.onBackgroundFetchData(function (e) {
                    t(e);
                  });
                })
              : Promise.resolve({})
            ).then(function (t) {
              a({ rawData: t, resolve: n, type: "onBackgroundFetchData" });
            }),
              (void 0 === r && (r = "pre"),
              E.default.$native.getBackgroundFetchData
                ? new Promise(function (t, e) {
                    E.default.$native.getBackgroundFetchData({
                      fetchType: r,
                      success: t,
                      fail: e,
                    });
                  })
                : Promise.resolve(void 0)).then(function (t) {
                if (!t) return !1;
                try {
                  a({ rawData: t, resolve: n, type: "getBackgroundFetchData" });
                } catch (t) {
                  return !1;
                }
              });
          })),
          K.prefetchDataValidPromise
        );
      }
      function Nt() {
        return "[object Promise]" ===
          Object.prototype.toString.call(K.prefetchDataValidPromise)
          ? K.prefetchDataValidPromise
          : Promise.resolve(!1);
      }
      function Lt(t, e) {
        return (
          void 0 === t && (t = !1),
          Object(j.m)().then(function (n) {
            var r;
            return Object(A.b)(null == n ? void 0 : n.shop)
              ? K.rSESConfigPromise && !t
                ? K.rSESConfigPromise
                : new Promise(function (t) {
                    setTimeout(
                      function () {
                        (K.rSESConfigPromise = Object(S.default)({
                          path: "/retail/h5/miniprogram/getShelfVisitConfigs.json",
                          method: "get",
                        })),
                          t(K.rSESConfigPromise);
                      },
                      "packages/retail-shelf/shelf/index" !== e ? 2e3 : 0
                    );
                  })
              : {
                  mode: 3,
                  isSingleShop: !0,
                  extra: {
                    kdtId:
                      null === (r = null == n ? void 0 : n.shop) || void 0 === r
                        ? void 0
                        : r.kdtId,
                  },
                };
          })
        );
      }
      function Mt(t, e) {
        void 0 === t && (t = {}), void 0 === e && (e = {});
        var n = e.redirectType,
          r = void 0 === n ? "navigateTo" : n,
          o = e.extOpt,
          a = void 0 === o ? {} : o,
          u = p.QQ,
          c = p.ANT,
          s = p.WEB,
          f = p.WX,
          l = p.TT,
          d = p.XHS,
          h = "/packages/shop-select/chain-store/shopselect/index";
        if (U === u || U === c || U === l)
          h = "/pages/shop/chain-store/shopselect/index";
        else if (U === s || U === d) {
          var v = Object(j.c)();
          (h = I()("/wscump/multistore/store", "h5", v, {
            notReplaceDomain: !1,
          })),
            (t = Object(i.__assign)(Object(i.__assign)({}, t), {
              hq_kdt_id: Object(j.e)(),
            }));
        }
        (U !== f && U !== l) ||
          (a &&
            Object.keys(a).length &&
            (t.extOptJson = encodeURIComponent(JSON.stringify(a))));
        var g = C.a.add(h, t);
        E.default.navigate({ url: g, type: r });
      }
      function Rt(t, e) {
        void 0 === e && (e = {}),
          e.shopAutoEnter &&
            (1 == +e.shopAutoEnter && e.chainBizType !== l.RETAIL_SHELF
              ? o.set(t, e)
              : 2 == +e.shopAutoEnter && o.set(t, {}));
      }
      function Ut(t) {
        try {
          var e = Object(wt.a)();
          return t ? e[t] : e;
        } catch (e) {
          return t ? "" : {};
        }
      }
      function Ht() {
        return !!Ut("isChainStore");
      }
      function Ft() {
        try {
          if (F || q) {
            var t;
            return 0 === (t = getCurrentPages()).length
              ? "/" + E.default.getAppOptions().path
              : "/" + t[t.length - 1].route;
          }
          return "";
        } catch (t) {
          return "";
        }
      }
      var Gt = function (t) {
        return !(!F || !t) && t.replace(/^\//, "") === R;
      };
      function qt(t) {
        var e = t.getShopInfoParams,
          n = t.path,
          r = t.query;
        _t(),
          t.getApollo && $(),
          e && "function" == typeof e && o.set("_shop_info_params_cb", e),
          o.set("_weapp_init_info_cache", { path: n, query: r }),
          Gt(n) &&
            (Dt({ path: n, query: r }),
            setTimeout(function () {
              Lt(!0, n);
            }, 100));
      }
      function Kt(t) {
        void 0 === t && (t = {});
        var e = Date.now();
        return function (n, r, o) {
          void 0 === o && (o = !1);
          var a = (function (t) {
            return Date.now() - t;
          })(e);
          t &&
            st(
              Object(i.__assign)(Object(i.__assign)({}, t), {
                time: a,
                error: o,
                result: r.res || r.err,
              })
            ),
            n && n(Object(i.__assign)({ time: a }, r));
        };
      }
      var Bt = function (t, e) {
        return new Promise(function (n, r) {
          var o = Kt(e);
          t()
            .then(function (t) {
              o(n, { res: t });
            })
            .catch(function (t) {
              o(r, { err: t }, !0);
            });
        });
      };
      function zt(t) {
        pt[B.a_enter_c](t);
      }
      function Wt(t, e) {
        [d.RETAIL_SHELF, d.RETAIL_SINGLE].includes(e)
          ? o.set("_retail_shelf_kdt_id_cache", +t)
          : [d.HQ, d.HOME].includes(e) &&
            o.set("_home_kdt_id_cache", { kdtId: +t, routeBizType: e });
      }
      function Yt(t) {
        switch (t) {
          case l.RETAIL_SHELF:
            return +Object(j.c)() === o.get("_retail_shelf_kdt_id_cache")
              ? Object(j.c)()
              : "";
          case l.HOME:
            return o.get("_home_kdt_id_cache");
          default:
            return "";
        }
      }
      function $t() {
        return (Yt(l.HOME) || {}).routeBizType === d.HQ;
      }
      function Vt(t) {
        switch (t) {
          case l.HOME:
            return o.set("_home_kdt_id_cache", {});
          default:
            return "";
        }
      }
      var Jt = function (t) {
        var e = t.logTag,
          n = t.type,
          r = void 0 === n ? "default" : n;
        if ("on_launch" !== e) return !1;
        if (z.on_s) return !0;
        var o = e + "_" + r + "进店";
        return "default" !== r && bt(!1), nt({ info: o }), (z.on_s = !0), !1;
      };
      function Zt(t) {
        var e = t.type,
          n = t.autoSelectKdtId,
          r = t.kdt_id,
          o = t.uuid,
          i = t.needReturn,
          u = t.shopInfo,
          c = t.routeBizType,
          s = t.homeDetailInfo,
          f = t.logTag;
        if (Jt({ logTag: f, type: e }))
          return Promise.resolve({ onLaunchEd: !0 });
        var l = n || r;
        return (
          (function (t, e) {
            try {
              a(t) || (pt[B.shop_c](t), Object(j.p)(e, t));
            } catch (t) {}
          })(u, l),
          (z.ds_cb = +l !== Object(j.c)()),
          Wt(l, c),
          Bt(j.q.bind(null, l, { force: c === d.HQ, mark: "100" }), {
            type: y.UPDATE_KDT_ID_TIME,
            uuid: o,
          }).then(function () {
            return n
              ? { kdtId: n, homeDetailInfo: s, routeBizType: c }
              : i
              ? { kdtId: l, routeBizType: c, needReturn: i }
              : {};
          })
        );
      }
      function Qt(t, e) {
        var n = e.autoSelectKdtId,
          r = t.kdt_id,
          o = t.uuid;
        return Zt(
          Object(i.__assign)(Object(i.__assign)({}, e), {
            type: "prefetch",
            logTag: "on_launch",
            supportPreHomeDetail: !0,
            kdt_id: r,
            uuid: o,
          })
        ).then(function (t) {
          return (
            (null == t ? void 0 : t.onLaunchEd) ||
              ((r = { subKdtId: n, scene: "preload" }),
              Object(S.default)({
                path: "/wscshop/shop/set_lastest_shop_visited.json",
                data: r,
              }),
              nt({
                text: "wx 预拉取数据使用",
                args: Object(i.__assign)(
                  {},
                  St()(e, ["apolloConfig", "shopInfo"])
                ),
                result: { autoSelectKdtId: n },
              })),
            t
          );
          var r;
        });
      }
      var Xt = function (t) {
        var e = t.result,
          n = t.hasHomeDetail,
          r = t.isInitEnterShop,
          o = t.resolve;
        return (null == e ? void 0 : e.onLaunchEd)
          ? e
          : ((r || (e.kdtId && !e.needReturn) || z.ds_cb) && zt(e),
            n ? o(e) : void o(e.kdtId));
      };
      function te(t, e) {
        var n = t.ump_type,
          r = t.ump_alias,
          o = t.kdt_id,
          i = t.url,
          a = t.uuid,
          u = t.chainBizType,
          c = t.logTag;
        if (Jt({ logTag: c, type: "enSelect" })) return Promise.resolve({});
        ut(a), bt(!0);
        var s = e.enterShopOptionsJsonString,
          f = void 0 === s ? "" : s,
          l = e.bizListJson,
          d = void 0 === l ? "" : l,
          p = e.ignoreStoreLimit;
        return (
          Mt(
            {
              kdt_id: o,
              dbKey: "location",
              umpAlias: r,
              umpType: n,
              redirectUrl: i,
              ignoreStoreLimit: void 0 === p ? "" : p,
              enterShopOptionsJsonString: f,
              bizListJson: d,
              from: "new",
            },
            { redirectType: "reLaunch", extOpt: { chainBizType: u } }
          ),
          Promise.reject({ err: "redirectToShopSelect" })
        );
      }
      function ee(t, e) {
        void 0 === e && (e = !1);
        var n = (function (t) {
          var e = o.get("_weapp_init_info_cache", {});
          return t.logTag === f.ON_LAUNCH
            ? Object(i.__assign)(Object(i.__assign)({}, t), {
                initInfo: JSON.stringify(e),
                launchParams: JSON.stringify(c("_shop_info_params_cb")),
                isNeedShopInfo: 1,
              })
            : Object(i.__assign)(Object(i.__assign)({}, t), {
                initInfo: JSON.stringify(e),
              });
        })(t);
        return Bt(
          S.default.bind(null, {
            path: "/wscshop/weapp/auto_enter_shop.json",
            data: n,
          }),
          {
            type: y.REQUEST_TIME,
            uuid: t.uuid,
            requestStart: Date.now(),
            againRequest: t.againRequest,
          }
        ).then(function (r) {
          var a = r.res;
          if (a && !Object.keys(a).length)
            return Promise.reject({ err: "单店无需走进店" });
          var u = a;
          o.set("_weapp_init_info_cache", {});
          var c,
            s = t.kdt_id,
            f = t.againRequest,
            l = void 0 !== f && f,
            d = u.toShopSelect,
            p = u.needLocate,
            h = void 0 !== p && p,
            v = u.autoSelectKdtId,
            g = u.oldEnterShop,
            _ = u.shopInfo,
            b = void 0 === _ ? {} : _,
            O = u.homeDetailInfo,
            w = u.redirectType,
            S = u.redirectUrl,
            j = u.routeBizType;
          return F && "webview" === w
            ? ((c = S), void E.default.navigate({ url: c, type: "redirectTo" }))
            : !h || g || l
            ? d
              ? te(t, u)
              : Zt({
                  autoSelectKdtId: v,
                  kdt_id: s,
                  needReturn: e,
                  chainBizType: n.chainBizType,
                  logTag: n.logTag,
                  routeBizType: j,
                  uuid: t.uuid,
                  shopInfo: b,
                  homeDetailInfo: O,
                })
            : (function (t, e) {
                return _t()
                  .then(function (n) {
                    return n === m.DENY
                      ? te(t, e)
                      : Bt(Ot.bind(null, { ignoreAuth: !0 }), {
                          type: y.GET_LBS_TIME,
                          uuid: t.uuid,
                        }).then(function (n) {
                          var r = n.res,
                            o = r.lat,
                            a = r.lng;
                          if (
                            (nt({
                              err:
                                "[" +
                                U +
                                "] 重新唤起lbs,再次发起此请求 lat:" +
                                o +
                                ";lng:" +
                                a,
                            }),
                            !a || !o)
                          )
                            return te(t, e);
                          var u = Object(i.__assign)(
                            Object(i.__assign)({}, t),
                            { withLocation: "1", lat: o, lng: a }
                          );
                          return (
                            Rt("_enter_shop_params_cache", u),
                            ee(
                              Object(i.__assign)(Object(i.__assign)({}, u), {
                                againRequest: !0,
                              }),
                              t.ignoreCheckShopType
                            )
                          );
                        });
                  })
                  .catch(function () {
                    return _t(!0), te(t, e);
                  });
              })(t, u);
        });
      }
      function ne(t, e) {
        if ((void 0 === e && (e = !0), t.shopAutoEnter && e)) {
          var n = t.prefetchStatus === b.NEED_LBS;
          return Bt(Ot.bind(null, { ignoreAuth: n }), {
            type: y.GET_LBS_AUTH_TIME,
            uuid: t.uuid,
          }).then(function (e) {
            var n = e.res,
              r = n.lat,
              o = n.lng,
              a = Object(i.__assign)(Object(i.__assign)({}, t), {
                withLocation: "1",
                lat: r,
                lng: o,
              });
            return (
              Rt("_enter_shop_params_cache", a), ee(a, t.ignoreCheckShopType)
            );
          });
        }
        return Rt("_enter_shop_params_cache", t), ee(t, t.ignoreCheckShopType);
      }
      var re = function (t, e) {
          return G
            ? (ut(t.uuid), Promise.resolve())
            : (e.ignoreCheckShopType
                ? function () {
                    return Promise.resolve({});
                  }
                : j.m)().then(function (n) {
                var r = at(t.uuid);
                if (
                  !e.ignoreCheckShopType &&
                  !Object(A.b)(null == n ? void 0 : n.shop)
                )
                  return (r.isChainStore = 0), void ut(t.uuid);
                (r.rootKdtId = Object(j.e)()), (r.enterPath = Ft());
                var a = (function (t, e) {
                    var n = t.umpAlias,
                      r = t.umpType,
                      a = t.subKdtId,
                      u = t.sub_kdt_id,
                      c = t.kdtId,
                      s = t.kdt_id,
                      d = t.uuid,
                      p = Object(i.__rest)(t, [
                        "umpAlias",
                        "umpType",
                        "subKdtId",
                        "sub_kdt_id",
                        "kdtId",
                        "kdt_id",
                        "uuid",
                      ]),
                      h = e || {},
                      v = h.forceKdtId,
                      g = void 0 === v ? 0 : v,
                      m = h.redirectUrl,
                      _ = h.logTag,
                      y = void 0 === _ ? f.OTHER : _,
                      b = h.prefetchStatus,
                      O = h.prefetchKdtId,
                      w = h.ignoreCheckShopType,
                      E = void 0 !== w && w,
                      S = h.chainBizType,
                      A = void 0 === S ? l.COMMON : S,
                      T = n || p.ump_alias || "",
                      P = r || p.ump_type || "",
                      k = Object(j.c)(),
                      I = g || +a || +u || c || s || k,
                      x = encodeURIComponent(m),
                      C = Object(i.__assign)(Object(i.__assign)({}, p), {
                        ump_alias: T,
                        ump_type: P,
                        url: x,
                        kdt_id: I,
                        chainBizType: A,
                        logTag: y,
                        prefetchStatus: b,
                        prefetchKdtId: O,
                        uuid: d,
                        ignoreCheckShopType: E,
                      });
                    for (var D in C) void 0 === C[D] && delete C[D];
                    return (
                      o.get("_is_init_enter_shop_") ||
                        !1 ||
                        (+I == +Object(j.e)() && (C.shopAutoEnter = 1),
                        "on_launch" !== y && o.set("_is_init_enter_shop_", !0)),
                      C
                    );
                  })(t, e),
                  u = a.uuid;
                return Bt(_t, { type: y.GET_AUTH_TIME, uuid: u })
                  .then(function (t) {
                    return t.res === m.UNKNOWN ? ne(a, !1) : ne(a, !0);
                  })
                  .catch(function (t) {
                    var e = t.err;
                    return e && "timeout" === (null == e ? void 0 : e.type)
                      ? ne(a, !1)
                      : Promise.reject(e);
                  });
              });
        },
        oe = function (t, e) {
          var n = e.enterLogId || ct(!0);
          it(n);
          var r = !o.get("_is_init_enter_shop_");
          return (
            (z.ds_cb = !1),
            new Promise(function (o, a) {
              var u = e.logTag,
                c = void 0 === u ? f.OTHER : u;
              Bt(
                re.bind(
                  null,
                  Object(i.__assign)(Object(i.__assign)({}, t), { uuid: n }),
                  e
                ),
                { uuid: n, logTag: c, type: y.ENTER_SHOP_TIME }
              )
                .then(function (e) {
                  var n = e.res || {};
                  Xt({
                    isInitEnterShop: r,
                    hasHomeDetail: t.supportPreHomeDetail,
                    result: n,
                    resolve: o,
                  });
                })
                .catch(function (t) {
                  var e = t.err;
                  ut(n), "redirectToShopSelect" !== e && zt(), a(e);
                });
            })
          );
        };
      function ie(t) {
        var e = Object(j.c)();
        return Object(S.default)({
          path: "/wscshop/weapp/enter_shop_after_login.json",
          data: { kdt_id: e, ignoreSession: t },
        });
      }
      var ae = function (t) {
          return (
            void 0 === t && (t = {}),
            G
              ? (function (t) {
                  return new Promise(function (e, n) {
                    t.isAccessEnterShop
                      ? ie(!1).then(function (r) {
                          if (r) {
                            var o = decodeURIComponent(t.redirectUrl);
                            o.includes("shopAutoEnter") &&
                              (o = P.a.remove(o, "shopAutoEnter"));
                            try {
                              var i =
                                  I()(
                                    "/wscshopcore/reEnterLoading?reUrl=",
                                    "h5",
                                    t.kdtId || ""
                                  ) +
                                  encodeURIComponent(o + "&shopAutoEnter=3"),
                                a = { url: i, type: "redirectTo" };
                              t.isMulti ||
                                (E.default.navigate(a),
                                n({ msg: "不是多端调用，内部做重定向" })),
                                n({
                                  code: 302,
                                  data: { url: i, type: "redirectTo" },
                                  msg: "多端调用，外部做重定向",
                                });
                            } catch (t) {
                              e({ msg: "success" });
                            }
                          } else e({ msg: "success" });
                        })
                      : e({ msg: "success" });
                  });
                })(t)
              : (function (t) {
                  return new Promise(function (e, n) {
                    Promise.all([
                      Z("ignoreReEnterShop", { raw: !0 }).catch(function () {
                        return [];
                      }),
                      ie(!0),
                    ]).then(function (r) {
                      var i = r[0],
                        a = r[1];
                      if (!(!!Array.isArray(i) && i.includes(Ft())) && a) {
                        var u = o.get("_enter_shop_params_cache") || {};
                        if (u && Object.keys(u).length) {
                          var c = t.redirectType,
                            s = void 0 === c ? "reLaunch" : c,
                            f = t.isMulti,
                            l = void 0 !== f && f,
                            d = {
                              url:
                                "/packages/shop/again-enter-loaing/index?reUrl=" +
                                t.redirectUrl,
                              type: s,
                            };
                          l ||
                            (E.default.navigate(d),
                            n({ msg: "不是多端调用，内部做重定向" })),
                            n({
                              code: 302,
                              data: d,
                              msg: "多端调用，外部做重定向",
                            });
                        }
                      }
                      e({ msg: "success" });
                    });
                  });
                })(t)
          );
        },
        ue = function () {
          var t = o.get("_enter_shop_params_cache") || {};
          return new Promise(function (e, n) {
            t && Object.keys(t).length
              ? ee(
                  Object(i.__assign)(Object(i.__assign)({}, t), {
                    loginEnter: !0,
                  }),
                  !0
                ).then(function (t) {
                  t && e({ kdtid: t, msg: "存在kdtid" }),
                    n({ msg: "内部重定向" });
                })
              : e({ msg: "无kdtid" });
          });
        };
      function ce() {
        Object(S.default)({
          path: "/wscshopcore/get-order-enter-shop-policy.json",
        })
          .then(function (t) {
            o.set("_order_is_auto_enter_shop", t);
          })
          .catch(function () {
            o.set("_order_is_auto_enter_shop", !1);
          });
      }
      function se(t) {
        return o.get("_order_is_auto_enter_shop") || !1
          ? (function (t) {
              var e = t;
              return (
                (e = D.f.args.remove(e, "shopAutoEnter")),
                (e = D.f.args.add(e, { shopAutoEnter: 1 }, !1))
              );
            })(t)
          : t;
      }
      var fe,
        le = function (t) {
          return Object(j.m)().then(function (e) {
            if (Object(A.b)(null == e ? void 0 : e.shop))
              return (function (t) {
                return Object(S.default)({
                  path: "/wscshopcore/set-enter-scene/configs.json",
                  data: t,
                  method: "POST",
                });
              })(t);
          });
        };
      !(function (t) {
        (t[(t.SHOPLIST = 9001)] = "SHOPLIST"),
          (t[(t.CARDLIST = 9002)] = "CARDLIST"),
          (t[(t.ORDERLIST = 9003)] = "ORDERLIST"),
          (t[(t.SALESMAN = 9004)] = "SALESMAN"),
          (t[(t.UMP = 9005)] = "UMP"),
          (t[(t.FEATURE = 9011)] = "FEATURE");
      })(fe || (fe = {}));
    },
    Sh92: function (t, e, n) {
      n.d(e, "k", function () {
        return r.b;
      }),
        n.d(e, "n", function () {
          return r.e;
        }),
        n.d(e, "m", function () {
          return r.d;
        }),
        n.d(e, "o", function () {
          return r.f;
        }),
        n.d(e, "l", function () {
          return r.c;
        }),
        n.d(e, "h", function () {
          return p;
        }),
        n.d(e, "i", function () {
          return h;
        }),
        n.d(e, "a", function () {
          return v.a;
        }),
        n.d(e, "g", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return c;
        }),
        n.d(e, "q", function () {
          return f;
        }),
        n.d(e, "p", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return b;
        }),
        n.d(e, "b", function () {
          return O.b;
        }),
        n.d(e, "c", function () {
          return O.a;
        }),
        n.d(e, "j", function () {
          return w;
        }),
        n.d(e, "e", function () {
          return j;
        });
      var r = n("WKDq"),
        o = n("bb6g"),
        i = n("hY7o"),
        a = n("hcPn");
      function u(t, e) {
        var n = (3e3 * Math.PI) / 180,
          r = t,
          o = e,
          i = Math.sqrt(r * r + o * o) + 2e-5 * Math.sin(o * n),
          a = Math.atan2(o, r) + 3e-6 * Math.cos(r * n);
        return {
          lng: (t = i * Math.cos(a) + 0.0065),
          lat: (e = i * Math.sin(a) + 0.006),
          longitude: t,
          latitude: e,
        };
      }
      function c(t, e) {
        var n = (3e3 * Math.PI) / 180,
          r = t - 0.0065,
          o = e - 0.006,
          i = Math.sqrt(r * r + o * o) - 2e-5 * Math.sin(o * n),
          a = Math.atan2(o, r) - 3e-6 * Math.cos(r * n);
        return {
          longitude: (t = i * Math.cos(a)),
          latitude: (e = i * Math.sin(a)),
        };
      }
      var s = new i.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" });
      function f(t) {
        return new Promise(function (e, n) {
          (t.success = e),
            (t.fail = function (t) {
              n(t);
            }),
            s.getSuggestion(t);
        });
      }
      function l(t) {
        return new Promise(function (e, n) {
          (t.success = e), (t.fail = n), s.reverseGeocoder(t);
        });
      }
      var d = new i.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" });
      function p() {
        return Object(a.b)({ type: "gcj02" }).then(function (t) {
          return u(t.longitude, t.latitude);
        });
      }
      function h(t) {
        return ((e = {
          location: Object(o.__assign)({}, t),
          get_poi: 1,
          poi_options: "radius=500",
          coord_type: 3,
        }),
        new Promise(function (t, n) {
          (e.success = t), (e.fail = n), d.reverseGeocoder(e);
        })).then(function (e) {
          if (0 === e.status) {
            if (!e.result.pois || !e.result.pois[0]) return { location: t };
            var n = e.result.pois[0];
            return { location: u(n.location.lng, n.location.lat), poi: n };
          }
          return Promise.reject(e.message);
        });
        var e;
      }
      var v = n("2CfL"),
        g = n("9ZMt"),
        m = n("2wjL"),
        _ = g.default.$native,
        y = g.default.getEnv();
      var b = new ((function () {
          function t() {}
          return (
            (t.prototype.getLocation = function () {
              return "ant" === y
                ? new Promise(function (t, e) {
                    _.getLocation({ type: 3, success: t, fail: e });
                  }).then(function (t) {
                    var e = t || {},
                      n = e.latitude,
                      r = e.longitude,
                      o = e.pois,
                      i = void 0 === o ? [] : o,
                      a = e.country,
                      u = e.province,
                      c = e.city,
                      s = e.district,
                      f = i[0] || {},
                      l = f.name,
                      d = void 0 === l ? "" : l,
                      p = f.address;
                    return {
                      address: d || (void 0 === p ? "" : p),
                      countryName: a,
                      provinceName: u,
                      cityName: c,
                      countyName: s,
                      latitude: n,
                      longitude: r,
                    };
                  })
                : Object(a.b)().then(function (t) {
                    return l({
                      location: u(t.longitude, t.latitude),
                      poi_options: "policy=2",
                      coord_type: 3,
                    }).then(function (e) {
                      var n = e.result,
                        r = (null == n ? void 0 : n.address_component) || {};
                      return {
                        countryName: r.nation,
                        provinceName: r.province,
                        cityName: r.city,
                        countyName: r.district,
                        latitude: t.latitude,
                        longitude: t.longitude,
                        address:
                          (null == n
                            ? void 0
                            : n.formatted_addresses.recommend) ||
                          (null == n ? void 0 : n.address) ||
                          "",
                      };
                    });
                  });
            }),
            (t.prototype.chooseLocation = function (t) {
              return "ant" === y
                ? new Promise(function (t, e) {
                    _.chooseLocation({ success: t, fail: e });
                  })
                : (g.default.navigate({
                    url: m.a.add("/packages/shopcore/shop-address/index", t),
                  }),
                  Promise.reject());
            }),
            t
          );
        })())(),
        O = n("LAxz");
      n("KoBN");
      function w(t) {
        return "function" == typeof t;
      }
      g.default.getEnv();
      var E = g.default.getApp,
        S = function () {},
        j = function () {
          var t = E();
          try {
            return (t.logger && t.logger.log.bind(t.logger)) || S;
          } catch (t) {
            return S;
          }
        };
    },
    Sipi: function (t, e, n) {
      n.d(e, "d", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return u;
        });
      var r = n("9ZMt");
      function o(t, e) {
        return r.default.$native.setStorageSync(t, e);
      }
      function i(t) {
        var e = r.default.$native.getStorageSync(t);
        if (
          "" === e &&
          -1 === r.default.$native.getStorageInfoSync().keys.indexOf(t)
        )
          return null;
        return e;
      }
      function a(t) {
        return r.default.$native.removeStorageSync(t);
      }
      function u() {
        return r.default.$native.clearStorageSync();
      }
    },
    Tewj: function (t, e, n) {
      n.r(e);
      var r = n("9ZMt"),
        o = new ((function () {
          function t(t) {
            (this.namespace = ""),
              t && (this.namespace = t),
              (this.getStorage = function () {
                return r.default.getGlobal("tee-event") || {};
              }),
              (this.setStorage = function (t) {
                return r.default.setGlobal("tee-event", t);
              });
          }
          var e = t.prototype;
          return (
            (e.getKey = function (t) {
              return this.namespace + "__" + t;
            }),
            (e.on = function (t, e, n) {
              var r = this.getKey(t),
                o = this.getStorage();
              return (
                (o[r] = o[r] || []),
                o[r].push({ callback: e, context: n }),
                this.setStorage(o),
                this
              );
            }),
            (e.once = function (t, e, n) {
              var r = this;
              return this.on(
                t,
                function o() {
                  for (
                    var i = arguments.length, a = new Array(i), u = 0;
                    u < i;
                    u++
                  )
                    a[u] = arguments[u];
                  e.call.apply(e, [n].concat(a)), r.off(t, o, n);
                },
                n
              );
            }),
            (e.off = function (t, e, n) {
              var r = this.getKey(t),
                o = this.getStorage();
              if (!Array.isArray(o[r])) return this;
              if (void 0 === e && void 0 === n) delete o[r];
              else if (void 0 === n) {
                var i;
                o[r] =
                  (null == (i = o[r])
                    ? void 0
                    : i.filter(function (t) {
                        return t.callback !== e;
                      })) || [];
              } else {
                var a;
                o[r] =
                  (null == (a = o[r])
                    ? void 0
                    : a.filter(function (t) {
                        return t.callback !== e || t.context !== n;
                      })) || [];
              }
              return this.setStorage(o), this;
            }),
            (e.trigger = function (t) {
              for (
                var e,
                  n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              var i = this.getKey(t),
                a = this.getStorage();
              return Array.isArray(a[i])
                ? (null == (e = a[i]) ||
                    e.forEach(function (t) {
                      try {
                        var e;
                        (e = t.callback).call.apply(e, [t.context].concat(r));
                      } catch (t) {}
                    }),
                  this)
                : this;
            }),
            t
          );
        })())();
      e.default = o;
    },
    U0uK: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n("Fcif"),
        o = n("9ZMt");
      var i = {};
      function a() {
        if (i.getExtConfigSync) return i.getExtConfigSync;
        var t = (i.getExtConfigSync = o.default.$native.getExtConfigSync());
        if (t.tabBar) {
          var e = t.tabBar;
          e.color && ((e.textColor = e.color), delete e.color);
          var n = e.list;
          n &&
            (delete e.list,
            (e.items = n.map(function (t) {
              return Object(r.a)(
                {
                  pagePath: t.pagePath,
                  name: t.text,
                  icon: t.iconPath,
                  activeIcon: t.selectedIconPath,
                },
                ((e = t),
                (n = ["pagePath", "text", "iconPath", "selectedIconPath"]),
                Object.keys(e).reduce(function (t, r) {
                  return n.includes(r) || (t[r] = e[r]), t;
                }, {}))
              );
              var e, n;
            })));
        }
        return i.getExtConfigSync;
      }
    },
    U5GS: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n("bb6g").__importDefault(n("yOJ5")),
        o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g;
      e.default = function (t, e, n) {
        if ((void 0 === n && (n = ""), !t)) return n;
        var a = (function (t) {
            var e = [];
            return (
              46 === t.charCodeAt(0) && e.push(""),
              t.replace(o, function (t, n, r, o) {
                e.push(r ? o.replace(i, "$1") : n || t);
              }),
              e
            );
          })(e),
          u = t;
        return (
          a.forEach(function (t) {
            u = (0, r.default)(u) && (0, r.default)(u[t]) ? u[t] : void 0;
          }),
          (0, r.default)(u) ? u : n
        );
      };
    },
    "US/N": function (t, e, n) {
      n.r(e),
        n.d(e, "beforeHooks", function () {
          return A;
        }),
        n.d(e, "afterHooks", function () {
          return T;
        }),
        n.d(e, "flash", function () {
          return C;
        }),
        n.d(e, "setRequestDep", function () {
          return m;
        }),
        n.d(e, "getRequestDep", function () {
          return v;
        }),
        n.d(e, "setKdtId", function () {
          return _;
        }),
        n.d(e, "updateShop", function () {
          return y;
        }),
        n.d(e, "updateToken", function () {
          return b;
        }),
        n.d(e, "default", function () {
          return F;
        }),
        n.d(e, "requestV2", function () {
          return G;
        }),
        n.d(e, "requestUseCdn", function () {
          return q;
        }),
        n.d(e, "requestByCache", function () {
          return K;
        }),
        n.d(e, "carmen", function () {
          return B;
        }),
        n.d(e, "baymax", function () {
          return z;
        });
      var r = n("Fcif"),
        o = n("sRXO"),
        i = n("2wjL"),
        a = {
          origin: "h5",
          method: "GET",
          header: { "content-type": "application/json" },
        },
        u = {
          origin: "carmen",
          header: { "content-type": "application/x-www-form-urlencoded" },
        },
        c = {
          origin: "baymax",
          header: { "content-type": "application/x-www-form-urlencoded" },
        },
        s = {
          cashier: "https://cashier.youzan.com",
          uic: "https://uic.youzan.com",
          carmen: "https://open.youzan.com",
          h5: "https://h5.youzan.com",
          yzh5: "https://h5.youzan.com",
          h5m: "https://h5.m.youzan.com",
          pc: "https://www.youzan.com",
          qiniu: "https://img01.yzcdn.cn",
          money: "https://money.youzan.com",
          guang: "https://g.youzan.com",
          baymax: "https://open.youzan.com/bifrost",
          sp: "https://haibao.xiaodian.com",
          ph: "https://wang.xiaodian.com",
          mars: "https://maijia.youzan.com",
          qbox: "https://up.qbox.me",
        },
        f = n("eijD"),
        l = n("NthX"),
        d = n.n(l),
        p = n("akjn"),
        h = n("KrsW").b.useGlobal("tee-biz-request/depConfig", {
          appId: "",
          version: "",
          kdtId: 0,
          qtt_party_id: 0,
          qtt_shop: 0,
          offlineId: "",
          accessToken: "",
          tokenTime: 0,
          sessionId: "",
          retailScene: "",
          bizEnv: "",
        }),
        v = h[0],
        g = h[1],
        m = function (t) {
          return g(Object(r.a)({}, v(), t));
        },
        _ = function (t) {
          return m({ kdtId: t });
        },
        y = function (t) {
          return m(t);
        },
        b = function (t) {
          return m({
            tokenTime: Date.now(),
            accessToken: t.accessToken,
            sessionId: t.sessionId,
          });
        },
        O = n("3tAa");
      function w(t) {
        return "function" == typeof t;
      }
      function E(t) {
        return (
          (function (t) {
            return null !== t && "object" == typeof t && !Array.isArray(t);
          })(t) &&
          w(t.then) &&
          w(t.catch)
        );
      }
      function S(t) {
        return E(t) ? t : Promise.resolve(t);
      }
      var j = (function () {
          function t(t) {
            var e = Object(O.a)(t, []),
              n = e[0],
              r = e[1];
            (this.get = n), (this.set = r);
          }
          var e = t.prototype;
          return (
            (e.remove = function (t) {
              var e = this.get(),
                n = e.indexOf(t);
              n > -1 && (e.splice(n, 1), this.set(e));
            }),
            (e.add = function (t) {
              var e = this;
              return (
                this.set([].concat(this.get(), [t])),
                function () {
                  return e.remove(t);
                }
              );
            }),
            (e.exec = function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return this.get().reduce(function (t, n) {
                return t.then(function (t) {
                  return !0 === t ? S(n.apply(void 0, e)) : Promise.resolve(!1);
                });
              }, Promise.resolve(!0));
            }),
            t
          );
        })(),
        A = new j("tee-biz-request/hook"),
        T = new j("tee-biz-request/after-hook"),
        P = Object(O.a)("tee-biz-request/queue", []),
        k = P[0],
        I = P[1];
      function x(t) {
        I([].concat(k(), [t]));
      }
      function C() {
        var t = k();
        return (
          I([]),
          Promise.all(
            t.map(function (t) {
              return t();
            })
          )
        );
      }
      function D() {
        return (D = Object(f.a)(
          d.a.mark(function t(e) {
            var n, r;
            return d.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (((n = v()), (r = n.dmc) && e)) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", "");
                  case 3:
                    return t.abrupt(
                      "return",
                      r.domain
                        .readDomain(e, { priorityCache: !0 })
                        .then(function (t) {
                          return "https://" + t.domain;
                        })
                        .catch(function () {
                          return "";
                        })
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var N = { origin: "carmen", pathname: "", query: {} };
      var L = function (t) {
        var e = ((t = Object(r.a)({}, N, t)).pathname || "").startsWith("/"),
          n = t,
          o = n.origin,
          a = n.domain,
          u = "";
        a ? (u = a) : o && o in s && (u = s[o]);
        var c = u + (e ? "" : "/") + t.pathname;
        return i.a.add(c, t.query);
      };
      function M(t) {
        var e,
          n,
          o = getApp && getApp();
        o &&
          ((t.enableHttp2 =
            null == o || null == (e = o.globalData) ? void 0 : e.enableHttp2),
          (t.enableCdn =
            null == o || null == (n = o.globalData) ? void 0 : n.enableCdn));
        !t.enableCdn &&
          t.options &&
          t.options.useCdn &&
          "h5m" === t.origin &&
          (t.origin = "h5");
        var i = v();
        return Promise.resolve(
          t.domain
            ? t.domain
            : (function (t) {
                return D.apply(this, arguments);
              })(t.origin)
        ).then(function (e) {
          return (
            "function" == typeof t.beforeSend
              ? Promise.all([A.exec(t, i), t.beforeSend(t, i)]).then(function (
                  t
                ) {
                  var e = t[0],
                    n = t[1];
                  return e && n;
                })
              : A.exec(t, i)
          ).then(function (n) {
            var o = Object(r.a)({}, t, { domain: e });
            return n
              ? Object(p.a)(
                  (function (t) {
                    var e = t.origin,
                      n = t.domain,
                      o = t.method,
                      i = t.query,
                      a = void 0 === i ? {} : i,
                      u = t.data,
                      c = void 0 === u ? {} : u,
                      s = t.header,
                      f = void 0 === s ? {} : s,
                      l = t.enableHttp2,
                      d = void 0 !== l && l,
                      p = t.path,
                      h = void 0 === p ? "" : p,
                      v = t.options,
                      g = void 0 === v ? {} : v;
                    if (!e) throw new Error("所有请求必须指定 origin:" + h);
                    if (g.useCdn && "h5m" === e)
                      try {
                        var m = JSON.parse(f["Extra-Data"] || "{}");
                        delete m.sid, delete m.uuid, delete a.access_token;
                        var _ = Object(r.a)({}, f, {
                            "Extra-Data": JSON.stringify(m),
                          }),
                          y = Object(r.a)({}, a);
                        return (
                          delete y.access_token,
                          {
                            url: L({
                              origin: e,
                              domain: n,
                              pathname: h,
                              query: y,
                            }),
                            data: c,
                            header: _,
                            enableHttp2: d,
                            method: (o || "GET").toUpperCase(),
                          }
                        );
                      } catch (t) {}
                    return {
                      url: L({ origin: e, domain: n, pathname: h, query: a }),
                      data: c,
                      header: f,
                      enableHttp2: d,
                      method: (o || "GET").toUpperCase(),
                    };
                  })(o)
                ).then(
                  (function () {
                    var e = Object(f.a)(
                      d.a.mark(function e(n) {
                        return d.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), T.exec(t, n);
                              case 2:
                                if (!e.sent) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return", n);
                              case 5:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (t) {
                                    x(function () {
                                      M(o).then(t);
                                    });
                                  })
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                )
              : new Promise(function (t) {
                  x(function () {
                    M(o).then(t);
                  });
                });
          });
        });
      }
      var R = n("9ZMt").default.getEnv(),
        U = {
          ant: "alipay-miniapp",
          qq: "qq-miniprogram",
          weapp: "weapp-miniprogram",
          xhs: "xhs-miniprogram",
          ks: "ks-miniprogram",
        }[R],
        H = {
          ant: "aliapp",
          qq: "qqapp",
          weapp: "weapp",
          xhs: "xhsapp",
          ks: "ksapp",
        }[R];
      A.add(function (t, e) {
        (t.query = t.query || {}), (t.header = t.header || {});
        var n = (null == t ? void 0 : t.config) || {},
          r = n.noQuery,
          o = n.noStoreId,
          i = t.query,
          a = t.data,
          u = void 0 === a ? {} : a,
          c = t.header,
          s = (t.method || "GET").toUpperCase(),
          f = ("GET" !== s && "DELETE" !== s) || !u.kdt_id;
        o || (i.store_id = e.offlineId || ""),
          r ||
            ((i.app_id = e.appId),
            f && (i.kdt_id = u.kdt_id || i.kdt_id || e.kdtId || ""),
            (i.access_token = e.accessToken || ""),
            e.retailScene && (i.retail_source = e.retailScene),
            e.qtt_shop && (i.qtt_shop = e.qtt_shop),
            e.qtt_party_id && (i.qtt_party_id = e.qtt_party_id));
        var l = {
          sid: e.sessionId,
          version: e.version,
          clientType: U,
          client: H,
          bizEnv: e.bizEnv,
        };
        return (
          e.bizScene && (l.bizScene = e.bizScene),
          (c["Extra-Data"] = JSON.stringify(l)),
          !0
        );
      });
      function F(t) {
        return M(Object(r.a)({}, a, t)).then(function (e) {
          var n = null == e ? void 0 : e.data,
            r = (t || {}).options,
            o = void 0 === r ? {} : r;
          if (n) {
            var i = n.code,
              a = n.data;
            if (0 === i) return o.rawResponse ? n : a;
          }
          if (t.enableHttpRaw) throw e;
          throw n;
        });
      }
      function G(t) {
        return void 0 === t.enableHttpRaw && (t.enableHttpRaw = !0), F(t);
      }
      function q(t) {
        return F(
          (function (t) {
            return (
              (t.options = t.options || {}),
              (t.options.useCdn = !0),
              (t.origin = "h5m"),
              t
            );
          })(t)
        );
      }
      function K(t) {
        var e = t.path,
          n = void 0 === e ? "" : e,
          r = t.query,
          a = void 0 === r ? {} : r,
          u = t.cacheConfig,
          c = void 0 === u ? {} : u,
          s = t.method,
          f = i.a.add(n, a),
          l = c.forceUpdate,
          d = c.expire;
        return "GET" === s
          ? Object(o.a)(
              f,
              function () {
                return F(t);
              },
              { forceUpdate: l, expire: d }
            )
          : F(t);
      }
      function B(t) {
        if (!t.api) throw new Error("Carmen 接口必须提供 api");
        return M(
          Object(r.a)({}, u, t, {
            path: ("/api/oauthentry/" + t.api).replace("//", "/"),
          })
        ).then(function (t) {
          var e = null == t ? void 0 : t.data;
          if (
            !(
              void 0 !== (null == e ? void 0 : e.response) &&
              !(null != e && e.error_response)
            )
          )
            throw null == e ? void 0 : e.error_response;
          return null == e ? void 0 : e.response;
        });
      }
      function z(t) {
        if (!t.api) throw new Error("彩虹桥接口必须提供 api");
        return M(
          Object(r.a)({}, c, t, { path: ("/api/" + t.api).replace("//", "/") })
        ).then(function (t) {
          var e = null == t ? void 0 : t.data;
          if (!(!0 === (null == e ? void 0 : e.success)))
            throw null != e && e.gw_err_resp
              ? { code: e.gw_err_resp.err_code, msg: e.gw_err_resp.err_msg }
              : {
                  code: null == e ? void 0 : e.code,
                  msg: null == e ? void 0 : e.message,
                };
          return null == e ? void 0 : e.data;
        });
      }
    },
    UdN6: function (t, e, n) {
      n.r(e),
        n.d(e, "assign", function () {
          return c;
        }),
        n.d(e, "format", function () {
          return A;
        }),
        n.d(e, "parse", function () {
          return T;
        }),
        n.d(e, "defaultI18n", function () {
          return d;
        }),
        n.d(e, "setGlobalDateI18n", function () {
          return h;
        }),
        n.d(e, "setGlobalDateMasks", function () {
          return j;
        });
      var r =
          /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        o = "[^\\s]+",
        i = /\[([^]*?)\]/gm;
      function a(t, e) {
        for (var n = [], r = 0, o = t.length; r < o; r++)
          n.push(t[r].substr(0, e));
        return n;
      }
      var u = function (t) {
        return function (e, n) {
          var r = n[t]
            .map(function (t) {
              return t.toLowerCase();
            })
            .indexOf(e.toLowerCase());
          return r > -1 ? r : null;
        };
      };
      function c(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        for (var r = 0, o = e; r < o.length; r++) {
          var i = o[r];
          for (var a in i) t[a] = i[a];
        }
        return t;
      }
      var s = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        f = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        l = a(f, 3),
        d = {
          dayNamesShort: a(s, 3),
          dayNames: s,
          monthNamesShort: l,
          monthNames: f,
          amPm: ["am", "pm"],
          DoFn: function (t) {
            return (
              t +
              ["th", "st", "nd", "rd"][
                t % 10 > 3 ? 0 : ((t - (t % 10) != 10 ? 1 : 0) * t) % 10
              ]
            );
          },
        },
        p = c({}, d),
        h = function (t) {
          return (p = c(p, t));
        },
        v = function (t) {
          return t.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
        },
        g = function (t, e) {
          for (void 0 === e && (e = 2), t = String(t); t.length < e; )
            t = "0" + t;
          return t;
        },
        m = {
          D: function (t) {
            return String(t.getDate());
          },
          DD: function (t) {
            return g(t.getDate());
          },
          Do: function (t, e) {
            return e.DoFn(t.getDate());
          },
          d: function (t) {
            return String(t.getDay());
          },
          dd: function (t) {
            return g(t.getDay());
          },
          ddd: function (t, e) {
            return e.dayNamesShort[t.getDay()];
          },
          dddd: function (t, e) {
            return e.dayNames[t.getDay()];
          },
          M: function (t) {
            return String(t.getMonth() + 1);
          },
          MM: function (t) {
            return g(t.getMonth() + 1);
          },
          MMM: function (t, e) {
            return e.monthNamesShort[t.getMonth()];
          },
          MMMM: function (t, e) {
            return e.monthNames[t.getMonth()];
          },
          YY: function (t) {
            return g(String(t.getFullYear()), 4).substr(2);
          },
          YYYY: function (t) {
            return g(t.getFullYear(), 4);
          },
          h: function (t) {
            return String(t.getHours() % 12 || 12);
          },
          hh: function (t) {
            return g(t.getHours() % 12 || 12);
          },
          H: function (t) {
            return String(t.getHours());
          },
          HH: function (t) {
            return g(t.getHours());
          },
          m: function (t) {
            return String(t.getMinutes());
          },
          mm: function (t) {
            return g(t.getMinutes());
          },
          s: function (t) {
            return String(t.getSeconds());
          },
          ss: function (t) {
            return g(t.getSeconds());
          },
          S: function (t) {
            return String(Math.round(t.getMilliseconds() / 100));
          },
          SS: function (t) {
            return g(Math.round(t.getMilliseconds() / 10), 2);
          },
          SSS: function (t) {
            return g(t.getMilliseconds(), 3);
          },
          a: function (t, e) {
            return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];
          },
          A: function (t, e) {
            return t.getHours() < 12
              ? e.amPm[0].toUpperCase()
              : e.amPm[1].toUpperCase();
          },
          ZZ: function (t) {
            var e = t.getTimezoneOffset();
            return (
              (e > 0 ? "-" : "+") +
              g(100 * Math.floor(Math.abs(e) / 60) + (Math.abs(e) % 60), 4)
            );
          },
          Z: function (t) {
            var e = t.getTimezoneOffset();
            return (
              (e > 0 ? "-" : "+") +
              g(Math.floor(Math.abs(e) / 60), 2) +
              ":" +
              g(Math.abs(e) % 60, 2)
            );
          },
        },
        _ = function (t) {
          return +t - 1;
        },
        y = [null, "\\d\\d?"],
        b = [null, o],
        O = [
          "isPm",
          o,
          function (t, e) {
            var n = t.toLowerCase();
            return n === e.amPm[0] ? 0 : n === e.amPm[1] ? 1 : null;
          },
        ],
        w = [
          "timezoneOffset",
          "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
          function (t) {
            var e = (t + "").match(/([+-]|\d\d)/gi);
            if (e) {
              var n = 60 * +e[1] + parseInt(e[2], 10);
              return "+" === e[0] ? n : -n;
            }
            return 0;
          },
        ],
        E = {
          D: ["day", "\\d\\d?"],
          DD: ["day", "\\d\\d"],
          Do: [
            "day",
            "\\d\\d?" + o,
            function (t) {
              return parseInt(t, 10);
            },
          ],
          M: ["month", "\\d\\d?", _],
          MM: ["month", "\\d\\d", _],
          YY: [
            "year",
            "\\d\\d",
            function (t) {
              var e = +("" + new Date().getFullYear()).substr(0, 2);
              return +("" + (+t > 68 ? e - 1 : e) + t);
            },
          ],
          h: ["hour", "\\d\\d?", void 0, "isPm"],
          hh: ["hour", "\\d\\d", void 0, "isPm"],
          H: ["hour", "\\d\\d?"],
          HH: ["hour", "\\d\\d"],
          m: ["minute", "\\d\\d?"],
          mm: ["minute", "\\d\\d"],
          s: ["second", "\\d\\d?"],
          ss: ["second", "\\d\\d"],
          YYYY: ["year", "\\d{4}"],
          S: [
            "millisecond",
            "\\d",
            function (t) {
              return 100 * +t;
            },
          ],
          SS: [
            "millisecond",
            "\\d\\d",
            function (t) {
              return 10 * +t;
            },
          ],
          SSS: ["millisecond", "\\d{3}"],
          d: y,
          dd: y,
          ddd: b,
          dddd: b,
          MMM: ["month", o, u("monthNamesShort")],
          MMMM: ["month", o, u("monthNames")],
          a: O,
          A: O,
          ZZ: w,
          Z: w,
        },
        S = {
          default: "ddd MMM DD YYYY HH:mm:ss",
          shortDate: "M/D/YY",
          mediumDate: "MMM D, YYYY",
          longDate: "MMMM D, YYYY",
          fullDate: "dddd, MMMM D, YYYY",
          isoDate: "YYYY-MM-DD",
          isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
          shortTime: "HH:mm",
          mediumTime: "HH:mm:ss",
          longTime: "HH:mm:ss.SSS",
        },
        j = function (t) {
          return c(S, t);
        },
        A = function (t, e, n) {
          if (
            (void 0 === e && (e = S.default),
            void 0 === n && (n = {}),
            "number" == typeof t && (t = new Date(t)),
            "[object Date]" !== Object.prototype.toString.call(t) ||
              isNaN(t.getTime()))
          )
            throw new Error("Invalid Date pass to format");
          var o = [];
          e = (e = S[e] || e).replace(i, function (t, e) {
            return o.push(e), "@@@";
          });
          var a = c(c({}, p), n);
          return (e = e.replace(r, function (e) {
            return m[e](t, a);
          })).replace(/@@@/g, function () {
            return o.shift();
          });
        };
      function T(t, e, n) {
        if ((void 0 === n && (n = {}), "string" != typeof e))
          throw new Error("Invalid format in fecha parse");
        if (((e = S[e] || e), t.length > 1e3)) return null;
        var o = {
            year: new Date().getFullYear(),
            month: 0,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            isPm: null,
            timezoneOffset: null,
          },
          a = [],
          u = [],
          s = e.replace(i, function (t, e) {
            return u.push(v(e)), "@@@";
          }),
          f = {},
          l = {};
        (s = v(s).replace(r, function (t) {
          var e = E[t],
            n = e[0],
            r = e[1],
            o = e[3];
          if (f[n])
            throw new Error(
              "Invalid format. " + n + " specified twice in format"
            );
          return (f[n] = !0), o && (l[o] = !0), a.push(e), "(" + r + ")";
        })),
          Object.keys(l).forEach(function (t) {
            if (!f[t])
              throw new Error(
                "Invalid format. " + t + " is required in specified format"
              );
          }),
          (s = s.replace(/@@@/g, function () {
            return u.shift();
          }));
        var d = t.match(new RegExp(s, "i"));
        if (!d) return null;
        for (var h, g = c(c({}, p), n), m = 1; m < d.length; m++) {
          var _ = a[m - 1],
            y = _[0],
            b = _[2],
            O = b ? b(d[m], g) : +d[m];
          if (null == O) return null;
          o[y] = O;
        }
        if (
          (1 === o.isPm && null != o.hour && 12 != +o.hour
            ? (o.hour = +o.hour + 12)
            : 0 === o.isPm && 12 == +o.hour && (o.hour = 0),
          null == o.timezoneOffset)
        ) {
          h = new Date(
            o.year,
            o.month,
            o.day,
            o.hour,
            o.minute,
            o.second,
            o.millisecond
          );
          for (
            var w = [
                ["month", "getMonth"],
                ["day", "getDate"],
                ["hour", "getHours"],
                ["minute", "getMinutes"],
                ["second", "getSeconds"],
              ],
              j = ((m = 0), w.length);
            m < j;
            m++
          )
            if (f[w[m][0]] && o[w[m][0]] !== h[w[m][1]]()) return null;
        } else if (
          ((h = new Date(
            Date.UTC(
              o.year,
              o.month,
              o.day,
              o.hour,
              o.minute - o.timezoneOffset,
              o.second,
              o.millisecond
            )
          )),
          o.month > 11 ||
            o.month < 0 ||
            o.day > 31 ||
            o.day < 1 ||
            o.hour > 23 ||
            o.hour < 0 ||
            o.minute > 59 ||
            o.minute < 0 ||
            o.second > 59 ||
            o.second < 0)
        )
          return null;
        return h;
      }
      var P = {
        format: A,
        parse: T,
        defaultI18n: d,
        setGlobalDateI18n: h,
        setGlobalDateMasks: j,
      };
      e.default = P;
    },
    UyoQ: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n("4J1Q"),
        o = n("O5ul"),
        i = n("qHGj");
      function a(t) {
        return Object(i.a)(t) && Object(r.b)(t, "onlineShopOpen");
      }
      a(o.a);
      var u;
      (u = o.a), Object(i.d)(u) || a(u);
    },
    VmHG: function (t, e, n) {
      n.d(e, "a", function () {
        return B;
      }),
        n.d(e, "b", function () {
          return W;
        }),
        n.d(e, "c", function () {
          return Y;
        }),
        n.d(e, "d", function () {
          return z;
        }),
        n.d(e, "e", function () {
          return V;
        });
      var r = n("9mFz");
      function o(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
      }
      var i = Object.prototype.toString,
        a = (t) => i.call(t),
        u = (t) => null !== t && "object" == typeof t,
        { isArray: c } = Array,
        s = (t) => "function" == typeof t,
        { hasOwnProperty: f } = Object.prototype,
        l = (t, e) => f.call(t, e),
        d = (t, e) =>
          !(!Array.isArray(t) || !Array.isArray(e) || t !== e) ||
          !Object.is(t, e),
        p = () => {};
      function h() {
        var t = Date.now();
        return "xxx-4xxx-yxxx-xxx".replace(/[xy]/g, function (e) {
          var n = (t + 16 * Math.random()) % 16 | 0;
          return (
            (t = Math.floor(t / 16)), ("x" === e ? n : (3 & n) | 8).toString(16)
          );
        });
      }
      function v(t) {
        if (c(t)) return t.map(v);
        if ("[object Object]" === a(t)) {
          var e = {};
          for (var n in t) l(t, n) && (e[n] = v(t[n]));
          return e;
        }
        return t;
      }
      var g,
        m = (t) => {
          var e = new Set(t);
          return (e.w = 0), (e.n = 0), e;
        },
        _ = (t) => (t.w & w) > 0,
        y = (t) => (t.n & w) > 0,
        b = new WeakMap(),
        O = 0,
        w = 1,
        E = [],
        S = { target: void 0, key: void 0 };
      class j {
        constructor(t, e) {
          void 0 === e && (e = null),
            (this.fn = t),
            (this.scheduler = e),
            (this.active = !0),
            (this.deps = []),
            (this.fn = t),
            (this.scheduler = e);
        }
        run() {
          if (!this.active) return this.fn();
          if (!E.includes(this))
            try {
              return (
                E.push((g = this)),
                P.push(T),
                (T = !0),
                (w = 1 << ++O),
                O <= 30
                  ? ((t) => {
                      var { deps: e } = t;
                      if (e.length)
                        for (var n = 0; n < e.length; n++) e[n].w |= w;
                    })(this)
                  : A(this),
                this.fn()
              );
            } finally {
              O <= 30 &&
                ((t) => {
                  var { deps: e } = t;
                  if (e.length) {
                    for (var n = 0, r = 0; r < e.length; r++) {
                      var o = e[r];
                      _(o) && !y(o) ? o.delete(t) : (e[n++] = o),
                        (o.w &= ~w),
                        (o.n &= ~w);
                    }
                    e.length = n;
                  }
                })(this),
                (w = 1 << --O),
                I(),
                E.pop();
              var t = E.length;
              g = t > 0 ? E[t - 1] : void 0;
            }
        }
        stop() {
          this.active && (A(this), (this.active = !1));
        }
      }
      function A(t) {
        var { deps: e } = t;
        if (e.length) {
          for (var n = 0; n < e.length; n++) e[n].delete(t);
          e.length = 0;
        }
      }
      var T = !0,
        P = [];
      function k() {
        P.push(T), (T = !1);
      }
      function I() {
        var t = P.pop();
        T = void 0 === t || t;
      }
      function x(t, e) {
        if ((Object.assign(S, { target: t, key: e }), T && void 0 !== g)) {
          var n = b.get(t);
          n || b.set(t, (n = new Map()));
          var r = n.get(e);
          r || n.set(e, (r = m())),
            (function (t) {
              var e = !1;
              O <= 30 ? y(t) || ((t.n |= w), (e = !_(t))) : (e = !t.has(g));
              e && (t.add(g), g.deps.push(t));
            })(r);
        }
      }
      function C(t, e) {
        var n = b.get(t);
        if (n) {
          var r = [];
          if ((void 0 !== e && r.push(n.get(e)), 1 === r.length))
            r[0] && D(r[0]);
          else {
            var o = [];
            for (var i of r) i && o.push(...i);
            D(m(o));
          }
        }
      }
      function D(t) {
        for (var e of c(t) ? t : Array.from(t))
          (e !== g || e.allowRecurse) &&
            (e.scheduler ? e.scheduler() : e.run());
      }
      var N = (function () {
        var t = Array.prototype,
          e = Object.create(t);
        return (
          ["push", "pop", "shift", "unshift", "splice"].forEach((n) => {
            Object.defineProperty(e, n, {
              get: () =>
                function () {
                  k();
                  for (
                    var e = arguments.length, r = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    r[o] = arguments[o];
                  var i = t[n].call(this, ...r);
                  I();
                  var { target: a, key: u } = S;
                  return a && C(a, u), i;
                },
              enumerable: !1,
            });
          }),
          e
        );
      })();
      function L(t, e) {
        if (!u(t)) return t;
        for (var n in (Array.isArray(t) && (t.__proto__ = N), t))
          l(t, n) && M(t, n, t[n], e);
        return t;
      }
      function M(t, e, n, r) {
        L(n, r),
          Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !0,
            get: () => (x(t, e), n),
            set(o) {
              (o = v(o)), d(o, n) && (L(o, r), (n = o), C(t, e));
            },
          });
      }
      function R(t, e) {
        var n = t._wrappedGetters,
          r = t._actions,
          o = {},
          i = { store: t, _$store: t._$store };
        ["watch"].forEach((e) => {
          Object.defineProperty(i._$store, e, {
            get: () => t[e],
            enumerable: !0,
          });
        }),
          H(n, (e, n) => {
            (o[n] = (function (t, e) {
              return function () {
                return t(e);
              };
            })(e, t)),
              H(i, (t) => {
                Object.defineProperty(t, n, {
                  get: () => o[n](),
                  set: () => {
                    throw new Error("getter 不允许进行设值");
                  },
                  enumerable: !0,
                });
              });
          }),
          H(r, (t, e) => {
            H(i, (n) => {
              Object.defineProperty(n, e, { get: () => t, enumerable: !0 });
            });
          }),
          (t._state = (function (t, e) {
            return L(t, e);
          })({ data: v(e) }, t)),
          Object.keys(t._state.data).forEach((e) => {
            H(i, (n, r) => {
              Object.defineProperty(n, e, {
                get: () => t._state.data[e],
                set: (n) => {
                  if ("_$store" !== r)
                    throw new Error("不允许直接对 state 赋值");
                  t._state.data[e] = n;
                },
                enumerable: !0,
              });
            });
          });
      }
      function U(t, e) {
        var { getters: n, actions: r } = e;
        (t.getters = n || {}),
          (t.actions = r || {}),
          (function (t, e) {
            t.getters && H(t.getters, e);
          })(t, (e, n) => {
            !(function (t, e, n) {
              if (t._wrappedGetters[e])
                return o("store 中已经定义了 getter: " + e);
              t._wrappedGetters[e] = function (t) {
                return n.call(t);
              };
            })(t, n, e);
          }),
          (function (t, e) {
            t.actions && H(t.actions, e);
          })(t, (e, n) => {
            !(function (t, e, n) {
              if (t._actions[e]) return o("store 中已经定义了 action: " + e);
              t._actions[e] = function () {
                for (
                  var e = arguments.length, r = new Array(e), o = 0;
                  o < e;
                  o++
                )
                  r[o] = arguments[o];
                var i = n.call(t._$store, ...r);
                return i;
              };
            })(t, n, e);
          });
      }
      function H(t, e) {
        Object.keys(t).forEach((n) => e(t[n], n));
      }
      function F(t, e) {
        var n;
        try {
          n = e ? t(...e) : t();
        } catch (t) {}
        return n;
      }
      var G = {};
      function q(t, e, n) {
        return (function (t, e, n) {
          var { immediate: r, deep: i } = void 0 === n ? {} : n;
          if (!e) throw new Error("watch " + t + " 需要设置对应的 callback");
          var f;
          s(t) ? (f = () => F(t)) : ((f = p), o("无效的监听属性类型: " + t));
          if (i) {
            var l = f;
            f = () =>
              (function t(e, n) {
                if (!u(e)) return e;
                if ((n = n || new Set()).has(e)) return e;
                if ((n.add(e), c(e)))
                  for (var r = 0; r < e.length; r++) t(e[r], n);
                else if (
                  ((i = e),
                  "[object Set]" === a(i) ||
                    ((t) => "[object Map]" === a(t))(e))
                )
                  e.forEach((e) => {
                    t(e, n);
                  });
                else if (u(e))
                  for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && t(e[o], n);
                var i;
                return e;
              })(l());
          }
          var h = G,
            v = () => {
              if (g.active)
                if (e) {
                  var t = g.run();
                  (i || d(t, h)) &&
                    (!(function t(e, n) {
                      if (s(e)) {
                        var r = F(e, n);
                        return (
                          r &&
                            (o = r) &&
                            "function" == typeof o.then &&
                            r.catch((t) => {}),
                          r
                        );
                      }
                      for (var o, i = [], a = 0; a < e.length; a++)
                        i.push(t(e[a], n));
                      return i;
                    })(e, [t, h === G ? void 0 : h]),
                    (h = t));
                } else g.run();
            };
          v.allowRecurse = !!e;
          var g = new j(f, () => v());
          e ? (r ? v() : (h = g.run())) : g.run();
          return () => {
            g.stop();
          };
        })(t, e, n);
      }
      class K {
        constructor(t) {
          (this._id = "store_" + h()),
            (this._actions = Object.create(null)),
            (this._wrappedGetters = Object.create(null)),
            (this._$store = Object.create(null));
          var e = ("function" == typeof t.state ? t.state() : t.state) || {};
          U(this, t), R(this, e);
        }
        watch(t, e, n) {
          return t
            ? e && s(e)
              ? l(this, t)
                ? q(() => this[t], e, n)
                : void 0
              : o("监听 " + t + " 需有对应的 callback")
            : o("缺少监听所需的属性值");
        }
      }
      function B(t) {
        return new K(t);
      }
      function z(t, e, n) {
        var o;
        void 0 === n && (n = {});
        var i = {},
          a = [],
          u = { deep: null === (o = n.deep) || void 0 === o || o };
        return (
          $(e).forEach((e) => {
            var { key: o, val: c } = e;
            if ("function" == typeof c) {
              var s = c(t.store);
              return (
                (i[o] = s),
                void q(
                  () => {
                    s = c(t.store);
                  },
                  () => Object(r.g)(t, { [o]: s }, n),
                  u
                )
              );
            }
            if (l(t.store, c)) {
              i[o] = t.store[c];
              var f = t.store.watch(c, (e) => Object(r.g)(t, { [o]: e }, n), u);
              a.push(f);
            }
          }),
          Object(r.f)(t, a),
          t._isRantaWeapp && Object(r.g)(t, i, n),
          i
        );
      }
      function W(t, e) {
        var n = {};
        return (
          $(e).forEach((e) => {
            var { key: r, val: o } = e;
            l(t.store, o) && ((t[r] = t.store[o]), (n[r] = t.store[o]));
          }),
          n
        );
      }
      function Y(t, e) {
        var n = [];
        $(e).forEach((e) => {
          var { key: r, val: i } = e,
            { ctx: a, store: u } = t;
          if (l(a.data, i)) {
            if (!l(u, r)) return o("store 中不存在对应属性" + r);
            var c = a.watch(i, (t) => {
              u._$store[r] = t;
            });
            n.push(c);
          }
        }),
          Object(r.f)(t, n);
      }
      function $(t) {
        return (function (t) {
          return Array.isArray(t) || u(t);
        })(t)
          ? Array.isArray(t)
            ? t.map((t) => ({ key: t, val: t }))
            : Object.keys(t).map((e) => ({ key: e, val: t[e] }))
          : [];
      }
      function V(t, e, n) {
        void 0 === n && (n = { deep: !0, immediate: !0 });
        var i = [];
        $(e).forEach((e) => {
          var { key: r, val: a } = e,
            { ctx: u, store: c } = t;
          if (!l(c, r)) return o("store 中不存在对应属性" + r);
          if (!l(u.data, a)) return o("ctx.data 中不存在对应属性" + a);
          var s = c.watch(
            r,
            (t) => {
              u.data[a] = t;
            },
            n
          );
          i.push(s);
        }),
          Object(r.f)(t, i);
      }
    },
    WKDq: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "e", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return c;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "a", function () {
          return f;
        });
      var r = n("KoBN"),
        o = n("LAxz");
      function i() {
        return +(+(Object(r.a)("kdtId") || 0));
      }
      function a() {
        return i();
      }
      function u() {
        return 0;
      }
      function c() {
        return { shop: {} };
      }
      function s() {
        return {};
      }
      var f = function () {
        return o.b.get("_offline_id_key_", 0);
      };
    },
    WLNV: function (t, e, n) {
      e.a = function (t) {
        return (
          ([].slice.call(arguments, 1) || []).forEach((e) => {
            if (e) for (var n in e) t[n] = e[n];
          }),
          t
        );
      };
    },
    WMGV: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n("xRet"),
        o = n("xih6");
      function i(t) {
        return (t.startsWith("/") ? "" : "/") + t.split("?")[0];
      }
      function a(t, e, n) {
        var a = e.path,
          u = e.tabBarIndex,
          c = void 0 === u ? -1 : u,
          s = e.query,
          f = e.fail,
          l = e.useFail;
        try {
          if (l) return f();
          var d = "",
            p = -1;
          if (a)
            (d = i(a)),
              (p = t.findIndex(function (t) {
                var e = t.pagePath,
                  n = t.routingType;
                return d === "/" + e && n === r.c;
              }));
          else if (c > -1) {
            var h = t[c] || {},
              v = h.pagePath;
            (p = h.routingType === r.c ? c : -1), (d = i(v));
          }
          if ((p = p === t.length - 1 ? Object(o.a)().length - 1 : p) > -1) {
            var g = s || {},
              m = (t[p] || {}).attachedId;
            n(Object(o.a)()[p], m, g);
          } else "function" == typeof f && f();
        } catch (t) {
          "function" == typeof f && f();
        }
      }
    },
    WWpR: function (t, e, n) {
      function r(t, e) {
        return Object.keys(t).reduce(function (n, r) {
          return e.includes(r) && (n[r] = t[r]), n;
        }, {});
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    Y28S: function (t, e, n) {
      n.d(e, "d", function () {
        return c;
      }),
        n.d(e, "e", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return d;
        });
      var r,
        o = n("w2Y9"),
        i = n.n(o);
      !(function (t) {
        (t[(t.WechatH5 = 1)] = "WechatH5"),
          (t[(t.WxworkH5 = 2)] = "WxworkH5"),
          (t[(t.Weapp = 3)] = "Weapp"),
          (t[(t.WxworkWeapp = 4)] = "WxworkWeapp");
      })(r || (r = {}));
      var a = function () {
          return (a =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
        u = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]]);
          }
          return n;
        },
        c = function (t) {
          try {
            return decodeURIComponent(t)
              .split("!")
              .reduce(function (t, e) {
                var n,
                  r = e.split("~");
                return r.length > 1
                  ? a(a({}, t), (((n = {})[r[0]] = r[1]), n))
                  : t;
              }, {});
          } catch (t) {
            return {};
          }
        },
        s = function (t) {
          return Object.keys(t).reduce(function (e, n) {
            return "" + (e ? e + "!" : e) + n + "~" + t[n];
          }, "");
        },
        f = function (t) {
          var e = t.sl,
            n = t.sls,
            o = t.kdtId,
            i = void 0 === o ? 0 : o,
            u = t.oldFromParamsData,
            c = e || n,
            f = c ? { sl: c, online_kdt_id: "" + i } : {},
            l = t.wxSharePf || "";
          try {
            var d = (function () {
              var t;
              if ("undefined" != typeof window && window.navigator) {
                var e = window.navigator.userAgent.toLowerCase(),
                  n = e.indexOf("wxwork") > -1;
                !n && e.indexOf("micromessenger") > -1 && (t = r.WechatH5),
                  n && (t = r.WxworkH5);
              }
              "undefined" != typeof wx &&
                wx.getSystemInfoSync &&
                (t =
                  "wxwork" === wx.getSystemInfoSync().environment
                    ? r.WxworkWeapp
                    : r.Weapp);
              return t;
            })();
            d && (l = "" + d);
          } catch (t) {}
          c && l && (f.wx_share_pf = "" + l);
          var p = u ? a(a({}, u), f) : f;
          return "" + s(p);
        },
        l = function (t) {
          var e,
            n = t.sl,
            r = t.sls,
            o = t.kdtId,
            i = void 0 === o ? 0 : o,
            u = t.oldFromParamsData,
            c = t.shareParams,
            s = void 0 === c ? {} : c,
            l = t.closeAutoEnter,
            d = void 0 !== l && l,
            p = t.wxSharePf,
            h = ["sl", "sls"].reduce(function (e, n) {
              var r,
                o = t[n];
              return o ? a(a({}, e), (((r = {})[n] = o), r)) : e;
            }, {}),
            v = { is_share: 1 };
          return (
            d || Object.assign(v, { shopAutoEnter: 1 }),
            n || r
              ? a(
                  a(a(a({}, v), s), h),
                  (((e = {}).from_params = f({
                    sl: n,
                    sls: r,
                    kdtId: i,
                    oldFromParamsData: u,
                    wxSharePf: p,
                  })),
                  e)
                )
              : a(a(a({}, v), s), h)
          );
        };
      function d(t) {
        var e = t.url,
          n = t.sl,
          r = t.sls,
          o = t.kdtId,
          s = void 0 === o ? 0 : o,
          f = t.shareParams,
          d = void 0 === f ? {} : f,
          p = t.closeAutoEnter,
          h = void 0 !== p && p,
          v = t.wxSharePf,
          g = u(t, [
            "url",
            "sl",
            "sls",
            "kdtId",
            "shareParams",
            "closeAutoEnter",
            "wxSharePf",
          ]),
          m = i.a.get("from_params", e) || "",
          _ = c(m) || {};
        return i.a.add(
          e,
          a(
            a({}, g),
            l({
              sl: n,
              sls: r,
              kdtId: s,
              oldFromParamsData: _,
              shareParams: d,
              closeAutoEnter: h,
              wxSharePf: v,
            })
          )
        );
      }
    },
    Y6Ef: function (t, e, n) {
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n("US/N"),
        o = n("9ZMt"),
        i = n("AXNr");
      var a = n("fLr7"),
        u = n("CKld");
      u.a.get(a.j) ||
        (r.beforeHooks.add(function (t) {
          return (
            t.header || (t.header = {}),
            (t.header["page-path"] = Object(i.a)()),
            !0
          );
        }),
        r.beforeHooks.add(function (t) {
          t.header || (t.header = {});
          try {
            var e = o.default.$native.getEnterOptionsSync();
            [
              ["app-mode", e.apiCategory],
              ["ref-app-id", (e.referrerInfo || {}).appId],
            ].forEach(function (e) {
              var n = e[0],
                r = e[1];
              null != r && (t.header[n] = r);
            });
          } catch (t) {}
          return !0;
        }),
        u.a.set(a.j, 1));
      var c = function (t) {
        return Object(r.default)(t);
      };
    },
    YIkY: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          if (void 0 === t) return "undefined";
          if (null === t) return "null";
          if ((0, o.default)(t)) return "array";
          var e = i(t);
          if ("boolean" === e) return "boolean";
          if ("string" === e) return "string";
          if ("number" === e) return "number";
          if ("symbol" === e) return "symbol";
          if ("function" === e) return "function";
          var n = a.call(t);
          if ("[object Object]" === n) return "object";
          if (
            (function (t) {
              if (t.constructor && "function" == typeof t.constructor.isBuffer)
                return t.constructor.isBuffer(t);
              return !1;
            })(t)
          )
            return "buffer";
          if (
            (function (t) {
              try {
                if (
                  "number" == typeof t.length &&
                  "function" == typeof t.callee
                )
                  return !0;
              } catch (t) {
                if (-1 !== t.message.indexOf("callee")) return !0;
              }
              return !1;
            })(t)
          )
            return "arguments";
          if (
            (function (t) {
              return (
                t instanceof Date ||
                ("function" == typeof t.toDateString &&
                  "function" == typeof t.getDate &&
                  "function" == typeof t.setDate)
              );
            })(t)
          )
            return "date";
          if (
            (function (t) {
              return (
                t instanceof Error ||
                ("string" == typeof t.message &&
                  t.constructor &&
                  "number" == typeof t.constructor.stackTraceLimit)
              );
            })(t)
          )
            return "error";
          if (
            (function (t) {
              return (
                t instanceof RegExp ||
                ("string" == typeof t.flags &&
                  "boolean" == typeof t.ignoreCase &&
                  "boolean" == typeof t.multiline &&
                  "boolean" == typeof t.global)
              );
            })(t)
          )
            return "regexp";
          switch (
            (function (t) {
              return t.constructor ? t.constructor.name : null;
            })(t)
          ) {
            case "Symbol":
              return "symbol";
            case "Promise":
              return "promise";
            case "WeakMap":
              return "weakmap";
            case "WeakSet":
              return "weakset";
            case "Map":
              return "map";
            case "Set":
              return "set";
          }
          if (
            (function (t) {
              return (
                "function" == typeof t.throw &&
                "function" == typeof t.return &&
                "function" == typeof t.next
              );
            })(t)
          )
            return "generator";
          return n.slice(8, -1).toLowerCase().replace(" ", "");
        });
      var r,
        o = (r = n("ajWA")) && r.__esModule ? r : { default: r };
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var a = Object.prototype.toString;
      t.exports = e.default;
    },
    YeA1: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("9mFz");
      n.d(e, "b", function () {
        return r.b;
      }),
        n.d(e, "c", function () {
          return r.c;
        }),
        n.d(e, "d", function () {
          return r.d;
        }),
        n.d(e, "e", function () {
          return r.e;
        });
      var o = n("9ZMt");
      function i() {
        var t = o.default.getGlobal("ranta-plugins");
        return t;
      }
    },
    YehF: function (t, e, n) {
      n.d(e, "e", function () {
        return l;
      }),
        n.d(e, "h", function () {
          return d;
        }),
        n.d(e, "f", function () {
          return p;
        }),
        n.d(e, "g", function () {
          return v;
        }),
        n.d(e, "c", function () {
          return g;
        }),
        n.d(e, "d", function () {
          return m;
        }),
        n.d(e, "a", function () {
          return _;
        }),
        n.d(e, "b", function () {
          return y;
        });
      var r = n("O5ul"),
        o = n("4J1Q"),
        i = n("DoqY"),
        a = n("qHGj"),
        u = n("9hl2"),
        c = n("Zu4f"),
        s = n("UyoQ"),
        f = n("ZsCx");
      function l(t) {
        return Object(o.b)(t, "shopType") === i.e.RETAIL;
      }
      var d = l(r.a);
      function p(t) {
        return l(t) && Object(a.d)(t);
      }
      p(r.a);
      var h;
      l((h = r.a)) && Object(a.c)(h);
      !(function (t) {
        l(t) && Object(u.b)(t);
      })(r.a);
      !(function (t) {
        l(t) && Object(a.a)(t);
      })(r.a);
      !(function (t) {
        l(t) && Object(u.a)(t);
      })(r.a);
      function v(t) {
        return (
          l(t) &&
          !Object(a.d)(t) &&
          -1 !==
            [i.c.RETAIL_SINGLE, i.c.RETAIL_CHAIN].indexOf(
              Object(o.b)(t, "saasSolution")
            )
        );
      }
      v(r.a);
      !(function (t) {
        v(t) && (Object(o.b)(t, "saasSolution"), i.c.RETAIL_SINGLE);
      })(r.a);
      !(function (t) {
        v(t) && (Object(o.b)(t, "saasSolution"), i.c.RETAIL_CHAIN);
      })(r.a);
      !(function (t) {
        v(t) && Object(a.c)(t);
      })(r.a);
      !(function (t) {
        v(t) && Object(u.b)(t);
      })(r.a);
      !(function (t) {
        v(t) && Object(a.a)(t);
      })(r.a);
      !(function (t) {
        v(t) && g(t);
      })(r.a);
      !(function (t) {
        v(t) && m(t);
      })(r.a);
      function g(t) {
        return l(t) && Object(c.b)(t);
      }
      g(r.a);
      function m(t) {
        return l(t) && Object(s.a)(t);
      }
      m(r.a);
      function _(t) {
        return l(t) && !Object(a.d)(t);
      }
      _(r.a);
      function y(t) {
        return (
          l(t) &&
          Object(o.b)(t, "saasSolution") === i.c.RETAIL_MINIMALIST &&
          !Object(f.a)(t)
        );
      }
      y(r.a);
      !(function (t) {
        y(t) && Object(a.c)(t);
      })(r.a);
      !(function (t) {
        y(t) && Object(u.b)(t);
      })(r.a);
      !(function (t) {
        y(t) && Object(a.a)(t);
      })(r.a);
    },
    Z054: function (t, e, n) {
      var r = n("iD8u");
      n.d(e, "authLogger", function () {
        return r.a;
      });
      n("Eu17"), n("OHwi");
    },
    Zqpg: function (t, e, n) {
      function r(t) {
        return t
          .split("-")
          .map((t, e) => (0 === e ? t : t[0].toUpperCase() + t.slice(1)))
          .join("");
      }
      function o(t) {
        return Array.isArray(t)
          ? {
              externalClasses: t,
              data: () =>
                t.reduce(
                  (t, e) => Object.assign(Object.assign({}, t), { [r(e)]: e }),
                  {}
                ),
            }
          : {};
      }
      function i(t) {
        var e = [];
        return (
          t.externalClasses && e.push(o(t.externalClasses)),
          t.relation && e.push(t.relation.mixin),
          e.push({ addGlobalClass: !0 }),
          { mixins: e }
        );
      }
      n.d(e, "a", function () {
        return i;
      });
    },
    ZsCx: function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("4J1Q"),
        o = n("DoqY");
      function i(t) {
        return Object(r.b)(t, "shopTopic") === o.d.EDU;
      }
    },
    Zu4f: function (t, e, n) {
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n("4J1Q"),
        o = n("O5ul"),
        i = n("gYYP"),
        a = n("qHGj");
      function u(t) {
        return (
          Object(a.a)(t) &&
          (!Object(r.b)(t, "onlineShopOpen") ||
            Object(r.b)(t, "offlineShopOpen"))
        );
      }
      u(o.a);
      function c(t) {
        return (
          Object(a.a)(t) &&
          !!Object(r.b)(t, "parentKdtId") &&
          !!Object(r.b)(t, "rootKdtId") &&
          Object(r.b)(t, "parentKdtId") !== Object(r.b)(t, "rootKdtId")
        );
      }
      c(o.a);
      var s;
      (s = o.a),
        Object(a.a)(s) &&
          !!Object(r.b)(s, "parentKdtId") &&
          !!Object(r.b)(s, "rootKdtId") &&
          (Object(r.b)(s, "parentKdtId"), Object(r.b)(s, "rootKdtId"));
      !(function (t) {
        Object(a.a)(t) && Object(i.b)(t);
      })(o.a);
      !(function (t) {
        Object(a.a)(t) && Object(i.a)(t);
      })(o.a);
    },
    ZxyO: function (t, e, n) {
      n.r(e),
        n.d(e, "Big", function () {
          return f;
        });
      var r = "[big.js] ",
        o = r + "Invalid ",
        i = o + "decimal places",
        a = {},
        u = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function c(t, e, n, r) {
        var o = t.c;
        if (
          (void 0 === n && (n = t.constructor.RM),
          0 !== n && 1 !== n && 2 !== n && 3 !== n)
        )
          throw Error("[big.js] Invalid rounding mode");
        if (e < 1)
          (r =
            (3 === n && (r || !!o[0])) ||
            (0 === e &&
              ((1 === n && o[0] >= 5) ||
                (2 === n &&
                  (o[0] > 5 || (5 === o[0] && (r || void 0 !== o[1]))))))),
            (o.length = 1),
            r ? ((t.e = t.e - e + 1), (o[0] = 1)) : (o[0] = t.e = 0);
        else if (e < o.length) {
          if (
            ((r =
              (1 === n && o[e] >= 5) ||
              (2 === n &&
                (o[e] > 5 ||
                  (5 === o[e] &&
                    (r || void 0 !== o[e + 1] || 1 & o[e - 1])))) ||
              (3 === n && (r || !!o[0]))),
            (o.length = e),
            r)
          )
            for (; ++o[--e] > 9; )
              if (((o[e] = 0), 0 === e)) {
                ++t.e, o.unshift(1);
                break;
              }
          for (e = o.length; !o[--e]; ) o.pop();
        }
        return t;
      }
      function s(t, e, n) {
        var r = t.e,
          o = t.c.join(""),
          i = o.length;
        if (e)
          o =
            o.charAt(0) +
            (i > 1 ? "." + o.slice(1) : "") +
            (r < 0 ? "e" : "e+") +
            r;
        else if (r < 0) {
          for (; ++r; ) o = "0" + o;
          o = "0." + o;
        } else if (r > 0) {
          if (++r > i) for (r -= i; r--; ) o += "0";
          else r < i && (o = o.slice(0, r) + "." + o.slice(r));
        } else i > 1 && (o = o.charAt(0) + "." + o.slice(1));
        return t.s < 0 && n ? "-" + o : o;
      }
      (a.abs = function () {
        var t = new this.constructor(this);
        return (t.s = 1), t;
      }),
        (a.cmp = function (t) {
          var e,
            n = this,
            r = n.c,
            o = (t = new n.constructor(t)).c,
            i = n.s,
            a = t.s,
            u = n.e,
            c = t.e;
          if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -a : 0;
          if (i != a) return i;
          if (((e = i < 0), u != c)) return (u > c) ^ e ? 1 : -1;
          for (a = (u = r.length) < (c = o.length) ? u : c, i = -1; ++i < a; )
            if (r[i] != o[i]) return (r[i] > o[i]) ^ e ? 1 : -1;
          return u == c ? 0 : (u > c) ^ e ? 1 : -1;
        }),
        (a.div = function (t) {
          var e = this,
            n = e.constructor,
            r = e.c,
            o = (t = new n(t)).c,
            a = e.s == t.s ? 1 : -1,
            u = n.DP;
          if (u !== ~~u || u < 0 || u > 1e6) throw Error(i);
          if (!o[0]) throw Error("[big.js] Division by zero");
          if (!r[0]) return (t.s = a), (t.c = [(t.e = 0)]), t;
          var s,
            f,
            l,
            d,
            p,
            h = o.slice(),
            v = (s = o.length),
            g = r.length,
            m = r.slice(0, s),
            _ = m.length,
            y = t,
            b = (y.c = []),
            O = 0,
            w = u + (y.e = e.e - t.e) + 1;
          for (y.s = a, a = w < 0 ? 0 : w, h.unshift(0); _++ < s; ) m.push(0);
          do {
            for (l = 0; l < 10; l++) {
              if (s != (_ = m.length)) d = s > _ ? 1 : -1;
              else
                for (p = -1, d = 0; ++p < s; )
                  if (o[p] != m[p]) {
                    d = o[p] > m[p] ? 1 : -1;
                    break;
                  }
              if (!(d < 0)) break;
              for (f = _ == s ? o : h; _; ) {
                if (m[--_] < f[_]) {
                  for (p = _; p && !m[--p]; ) m[p] = 9;
                  --m[p], (m[_] += 10);
                }
                m[_] -= f[_];
              }
              for (; !m[0]; ) m.shift();
            }
            (b[O++] = d ? l : ++l),
              m[0] && d ? (m[_] = r[v] || 0) : (m = [r[v]]);
          } while ((v++ < g || void 0 !== m[0]) && a--);
          return (
            b[0] || 1 == O || (b.shift(), y.e--, w--),
            O > w && c(y, w, n.RM, void 0 !== m[0]),
            y
          );
        }),
        (a.eq = function (t) {
          return 0 === this.cmp(t);
        }),
        (a.gt = function (t) {
          return this.cmp(t) > 0;
        }),
        (a.gte = function (t) {
          return this.cmp(t) > -1;
        }),
        (a.lt = function (t) {
          return this.cmp(t) < 0;
        }),
        (a.lte = function (t) {
          return this.cmp(t) < 1;
        }),
        (a.minus = a.sub =
          function (t) {
            var e,
              n,
              r,
              o,
              i = this,
              a = i.constructor,
              u = i.s,
              c = (t = new a(t)).s;
            if (u != c) return (t.s = -c), i.plus(t);
            var s = i.c.slice(),
              f = i.e,
              l = t.c,
              d = t.e;
            if (!s[0] || !l[0])
              return l[0] ? (t.s = -c) : s[0] ? (t = new a(i)) : (t.s = 1), t;
            if ((u = f - d)) {
              for (
                (o = u < 0) ? ((u = -u), (r = s)) : ((d = f), (r = l)),
                  r.reverse(),
                  c = u;
                c--;

              )
                r.push(0);
              r.reverse();
            } else
              for (
                n = ((o = s.length < l.length) ? s : l).length, u = c = 0;
                c < n;
                c++
              )
                if (s[c] != l[c]) {
                  o = s[c] < l[c];
                  break;
                }
            if (
              (o && ((r = s), (s = l), (l = r), (t.s = -t.s)),
              (c = (n = l.length) - (e = s.length)) > 0)
            )
              for (; c--; ) s[e++] = 0;
            for (c = e; n > u; ) {
              if (s[--n] < l[n]) {
                for (e = n; e && !s[--e]; ) s[e] = 9;
                --s[e], (s[n] += 10);
              }
              s[n] -= l[n];
            }
            for (; 0 === s[--c]; ) s.pop();
            for (; 0 === s[0]; ) s.shift(), --d;
            return (
              s[0] || ((t.s = 1), (s = [(d = 0)])), (t.c = s), (t.e = d), t
            );
          }),
        (a.mod = function (t) {
          var e,
            n = this,
            r = n.constructor,
            o = n.s,
            i = (t = new r(t)).s;
          if (!t.c[0]) throw Error("[big.js] Division by zero");
          return (
            (n.s = t.s = 1),
            (e = 1 == t.cmp(n)),
            (n.s = o),
            (t.s = i),
            e
              ? new r(n)
              : ((o = r.DP),
                (i = r.RM),
                (r.DP = r.RM = 0),
                (n = n.div(t)),
                (r.DP = o),
                (r.RM = i),
                this.minus(n.times(t)))
          );
        }),
        (a.neg = function () {
          var t = new this.constructor(this);
          return (t.s = -t.s), t;
        }),
        (a.plus = a.add =
          function (t) {
            var e,
              n,
              r,
              o = this,
              i = o.constructor;
            if (((t = new i(t)), o.s != t.s)) return (t.s = -t.s), o.minus(t);
            var a = o.e,
              u = o.c,
              c = t.e,
              s = t.c;
            if (!u[0] || !s[0])
              return s[0] || (u[0] ? (t = new i(o)) : (t.s = o.s)), t;
            if (((u = u.slice()), (e = a - c))) {
              for (
                e > 0 ? ((c = a), (r = s)) : ((e = -e), (r = u)), r.reverse();
                e--;

              )
                r.push(0);
              r.reverse();
            }
            for (
              u.length - s.length < 0 && ((r = s), (s = u), (u = r)),
                e = s.length,
                n = 0;
              e;
              u[e] %= 10
            )
              n = ((u[--e] = u[e] + s[e] + n) / 10) | 0;
            for (n && (u.unshift(n), ++c), e = u.length; 0 === u[--e]; )
              u.pop();
            return (t.c = u), (t.e = c), t;
          }),
        (a.pow = function (t) {
          var e = this,
            n = new e.constructor("1"),
            r = n,
            i = t < 0;
          if (t !== ~~t || t < -1e6 || t > 1e6) throw Error(o + "exponent");
          for (i && (t = -t); 1 & t && (r = r.times(e)), (t >>= 1); )
            e = e.times(e);
          return i ? n.div(r) : r;
        }),
        (a.prec = function (t, e) {
          if (t !== ~~t || t < 1 || t > 1e6) throw Error(o + "precision");
          return c(new this.constructor(this), t, e);
        }),
        (a.round = function (t, e) {
          if (void 0 === t) t = 0;
          else if (t !== ~~t || t < -1e6 || t > 1e6) throw Error(i);
          return c(new this.constructor(this), t + this.e + 1, e);
        }),
        (a.sqrt = function () {
          var t,
            e,
            n,
            o = this,
            i = o.constructor,
            a = o.s,
            u = o.e,
            s = new i("0.5");
          if (!o.c[0]) return new i(o);
          if (a < 0) throw Error(r + "No square root");
          0 === (a = Math.sqrt(o + "")) || a === 1 / 0
            ? (((e = o.c.join("")).length + u) & 1 || (e += "0"),
              (u = (((u + 1) / 2) | 0) - (u < 0 || 1 & u)),
              (t = new i(
                ((a = Math.sqrt(e)) == 1 / 0
                  ? "5e"
                  : (a = a.toExponential()).slice(0, a.indexOf("e") + 1)) + u
              )))
            : (t = new i(a + "")),
            (u = t.e + (i.DP += 4));
          do {
            (n = t), (t = s.times(n.plus(o.div(n))));
          } while (n.c.slice(0, u).join("") !== t.c.slice(0, u).join(""));
          return c(t, (i.DP -= 4) + t.e + 1, i.RM);
        }),
        (a.times = a.mul =
          function (t) {
            var e,
              n = this,
              r = n.constructor,
              o = n.c,
              i = (t = new r(t)).c,
              a = o.length,
              u = i.length,
              c = n.e,
              s = t.e;
            if (((t.s = n.s == t.s ? 1 : -1), !o[0] || !i[0]))
              return (t.c = [(t.e = 0)]), t;
            for (
              t.e = c + s,
                a < u && ((e = o), (o = i), (i = e), (s = a), (a = u), (u = s)),
                e = new Array((s = a + u));
              s--;

            )
              e[s] = 0;
            for (c = u; c--; ) {
              for (u = 0, s = a + c; s > c; )
                (u = e[s] + i[c] * o[s - c - 1] + u),
                  (e[s--] = u % 10),
                  (u = (u / 10) | 0);
              e[s] = u;
            }
            for (u ? ++t.e : e.shift(), c = e.length; !e[--c]; ) e.pop();
            return (t.c = e), t;
          }),
        (a.toExponential = function (t, e) {
          var n = this,
            r = n.c[0];
          if (void 0 !== t) {
            if (t !== ~~t || t < 0 || t > 1e6) throw Error(i);
            for (n = c(new n.constructor(n), ++t, e); n.c.length < t; )
              n.c.push(0);
          }
          return s(n, !0, !!r);
        }),
        (a.toFixed = function (t, e) {
          var n = this,
            r = n.c[0];
          if (void 0 !== t) {
            if (t !== ~~t || t < 0 || t > 1e6) throw Error(i);
            for (
              t = t + (n = c(new n.constructor(n), t + n.e + 1, e)).e + 1;
              n.c.length < t;

            )
              n.c.push(0);
          }
          return s(n, !1, !!r);
        }),
        (a[Symbol.for("nodejs.util.inspect.custom")] =
          a.toJSON =
          a.toString =
            function () {
              var t = this,
                e = t.constructor;
              return s(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0]);
            }),
        (a.toNumber = function () {
          var t = Number(s(this, !0, !0));
          if (!0 === this.constructor.strict && !this.eq(t.toString()))
            throw Error(r + "Imprecise conversion");
          return t;
        }),
        (a.toPrecision = function (t, e) {
          var n = this,
            r = n.constructor,
            i = n.c[0];
          if (void 0 !== t) {
            if (t !== ~~t || t < 1 || t > 1e6) throw Error(o + "precision");
            for (n = c(new r(n), t, e); n.c.length < t; ) n.c.push(0);
          }
          return s(n, t <= n.e || n.e <= r.NE || n.e >= r.PE, !!i);
        }),
        (a.valueOf = function () {
          var t = this,
            e = t.constructor;
          if (!0 === e.strict) throw Error(r + "valueOf disallowed");
          return s(t, t.e <= e.NE || t.e >= e.PE, !0);
        });
      var f = (function t() {
        function e(n) {
          var r = this;
          if (!(r instanceof e)) return void 0 === n ? t() : new e(n);
          if (n instanceof e) (r.s = n.s), (r.e = n.e), (r.c = n.c.slice());
          else {
            if ("string" != typeof n) {
              if (!0 === e.strict && "bigint" != typeof n)
                throw TypeError(o + "value");
              n = 0 === n && 1 / n < 0 ? "-0" : String(n);
            }
            !(function (t, e) {
              var n, r, i;
              if (!u.test(e)) throw Error(o + "number");
              (t.s = "-" == e.charAt(0) ? ((e = e.slice(1)), -1) : 1),
                (n = e.indexOf(".")) > -1 && (e = e.replace(".", ""));
              (r = e.search(/e/i)) > 0
                ? (n < 0 && (n = r),
                  (n += +e.slice(r + 1)),
                  (e = e.substring(0, r)))
                : n < 0 && (n = e.length);
              for (i = e.length, r = 0; r < i && "0" == e.charAt(r); ) ++r;
              if (r == i) t.c = [(t.e = 0)];
              else {
                for (; i > 0 && "0" == e.charAt(--i); );
                for (t.e = n - r - 1, t.c = [], n = 0; r <= i; )
                  t.c[n++] = +e.charAt(r++);
              }
            })(r, n);
          }
          r.constructor = e;
        }
        return (
          (e.prototype = a),
          (e.DP = 20),
          (e.RM = 1),
          (e.NE = -7),
          (e.PE = 21),
          (e.strict = !1),
          (e.roundDown = 0),
          (e.roundHalfUp = 1),
          (e.roundHalfEven = 2),
          (e.roundUp = 3),
          e
        );
      })();
      e.default = f;
    },
    a1Mm: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return s;
        });
      var r = "https://img01.yzcdn.cn",
        o = (function () {
          var t = !1;
          try {
            var { platform: e, system: n } = wx.getSystemInfoSync(),
              r = /[0-9.]*$/.exec(n),
              o = r ? r[0] : "",
              i =
                "ios" === e &&
                !!o &&
                (function (t, e) {
                  for (
                    var n = t.split("."),
                      r = e.split("."),
                      o = Math.max(n.length, r.length);
                    n.length < o;

                  )
                    n.push("0");
                  for (; r.length < o; ) r.push("0");
                  for (var i = 0; i < o; i++) {
                    var a = parseInt(n[i], 10),
                      u = parseInt(r[i], 10);
                    if (a > u) return 1;
                    if (a < u) return -1;
                  }
                  return 0;
                })(o, "14.0") >= 0;
            t = "devtools" === e || "android" === e || i;
          } catch (t) {}
          return t;
        })(),
        i = [
          /^(https?:)?\/\/imgqn.koudaitong.com/,
          /^(https?:)?\/\/kdt-img.koudaitong.com/,
          /^(https?:)?\/\/img\.yzcdn\.cn/,
          /^(https?:)?\/\/img01.yzcdn.cn/,
          /^(https?:)?\/\/dn-kdt-img.qbox.me/,
        ];
      function a(t, e, n) {
        if (
          (void 0 === e && (e = ""),
          void 0 === n && (n = {}),
          !t || t.match(/^data:/i))
        )
          return t;
        if (
          (i.forEach((e) => {
            t = t.replace(e, r);
          }),
          t.match(/^(https?:)?\/\//i))
        ) {
          if (
            (!t.match(r) && !t.match("dn-kdt-img-test.qbox.me")) ||
            t.match("!")
          )
            return t;
          t = "" + t + e;
        } else t = r + "/" + t + e;
        return (function (t, e) {
          void 0 === e && (e = {});
          var n = 1,
            r = t.match(u),
            i = e.clip ? "1" : "2",
            a = e.blur ? "imageMogr2/blur/" + e.blur + "x" + e.blur + "|" : "";
          if (r && r.length >= 4) {
            var s,
              f = r[1].match(c),
              l = !1;
            f && f.length ? ((s = f[1]), (l = !0)) : (s = r[1]);
            var d = s;
            "gif" === s
              ? (d = "gif")
              : o
              ? (d = "webp")
              : "webp" === s && (d = "jpg"),
              "+2x" === r[5] && (n = 2);
            var p = parseInt(r[2], 10) * n,
              h = parseInt(r[3], 10) * n,
              v = r[4] || 75,
              g =
                a +
                "imageView2/" +
                i +
                "/w/" +
                p +
                "/h/" +
                h +
                "/q/" +
                v +
                "/format/" +
                d,
              m = l ? "|" : "?";
            t = "" + (t.replace(u, ".") + r[1]) + m + g;
          } else
            t = (function (t, e) {
              var n =
                  /(\?imageView2\/\d\/w\/\d+\/h\/\d+\/q\/\d+\/format\/)(\w+)/,
                r = t;
              if (n.test(t)) {
                var o = t.match(n)[2];
                e
                  ? "gif" !== o && "webp" !== o && (r = t.replace(n, "$1webp"))
                  : "webp" === o && (r = t.replace(n, "$1jpg"));
              }
              return r;
            })(t, o);
          return t;
        })(t, n);
      }
      var u =
          /\.([^.!]+)!([0-9]{1,4})x([0-9]{1,4})q?([0-9]{0,2}|100)?(\+2x)?\..+/,
        c = /([^.!]+)\?watermark\/.*\/$/;
      function s(t, e, n) {
        var r = e,
          o = n,
          i = t.width / t.height,
          a = 0,
          u = 0;
        return (
          r / o < i
            ? (a = (o - (n = (e = r) / i)) / 2 + a)
            : (u = (r - (e = (n = o) * i)) / 2 + u),
          { top: a, left: u, width: e, height: n }
        );
      }
    },
    aMoH: function (t, e, n) {
      n.d(e, "d", function () {
        return f;
      }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return p;
        }),
        n.d(e, "e", function () {
          return h;
        });
      var r = n("tFpX"),
        o = n("n3wJ"),
        i = n("1r5D"),
        a = n("sXee");
      function u(t) {
        return (e, n) => (
          "string" != typeof e && ((n = e), (e = void 0)), t(e, n)
        );
      }
      function c(t, e) {
        return (
          void 0 === e && (e = t.moduleName),
          ("root" !== e && "/" !== e) || (e = ""),
          o.assert(
            void 0 !== e,
            "[vanx] module namespace must not be undefined"
          ),
          e
        );
      }
      function s(t, e, n) {
        var i = t.getModule(n.split("/"));
        return (
          "production" === r.a.NODE_ENV ||
            i ||
            o.error("[vuex] module namespace not found in " + e + "(): " + n),
          i
        );
      }
      var f = u((t, e) => {
          var n = {};
          return (
            Object(i.i)(e).forEach((e) => {
              var { key: r, val: i } = e;
              (n[r] = function () {
                try {
                  var { state: e, getters: n } = this.$store,
                    r = c(this, t);
                  if (r) {
                    var a = s(this.$store, "mapState", r);
                    if (!a) return;
                    ({ state: e, getters: n } = a.context);
                  }
                  return "function" == typeof i ? i.call(this, e, n) : e[i];
                } catch (t) {
                  o.error(t);
                }
              }),
                (n[r].vuex = !0);
            }),
            n
          );
        }),
        l = u((t, e) => {
          var n = {};
          return (
            Object(i.i)(e).forEach((e) => {
              var { key: r, val: i } = e;
              n[r] = function () {
                try {
                  var { commit: e } = this.$store,
                    n = c(this, t);
                  if (n) {
                    var r = s(this.$store, "mapMutations", n);
                    if (!r) return;
                    ({ commit: e } = r.context);
                  }
                  for (
                    var a = arguments.length, u = new Array(a), f = 0;
                    f < a;
                    f++
                  )
                    u[f] = arguments[f];
                  return "function" == typeof i
                    ? i.apply(this, [e].concat(u))
                    : e.apply(this.$store, [i].concat(u));
                } catch (t) {
                  o.error(t);
                }
              };
            }),
            n
          );
        }),
        d = u((t, e) => {
          var n = {};
          return (
            Object(i.i)(e).forEach((e) => {
              var { key: i, val: a } = e;
              (n[i] = function () {
                try {
                  var e = c(this, t),
                    n = s(this.$store, "mapGetters", e);
                  return "production" === r.a.NODE_ENV || a in n.context.getters
                    ? n.context.getters[a]
                    : void o.warn("[vuex] unknown getter: " + a);
                } catch (t) {
                  o.error(t);
                }
              }),
                (n[i].vuex = !0);
            }),
            n
          );
        }),
        p = u((t, e) => {
          var n = {};
          return (
            Object(i.i)(e).forEach((e) => {
              var { key: r, val: i } = e;
              n[r] = function () {
                try {
                  var { dispatch: e } = this.$store,
                    n = c(this, t);
                  if (n) {
                    var r = s(this.$store, "mapActions", n);
                    if (!r) return;
                    ({ dispatch: e } = r.context);
                  }
                  for (
                    var a = arguments.length, u = new Array(a), f = 0;
                    f < a;
                    f++
                  )
                    u[f] = arguments[f];
                  return "function" == typeof i
                    ? i.apply(this, [e].concat(u))
                    : e.apply(this.$store, [i].concat(u));
                } catch (t) {
                  o.error(t);
                }
              };
            }),
            n
          );
        });
      function h(t, e, n) {
        void 0 === e && (e = []);
        var r = (t._dataWatchers = {}),
          u = (t._vanx_ = {});
        Object(i.i)(e).forEach((e) => {
          var { key: i, val: c } = e,
            s = f({ [i]: c })[i],
            l = s;
          if ("string" == typeof s) {
            o.assert(!!t[i], "[vanx] can't find prop " + i + " in " + t.is);
            var d = Object.getOwnPropertyDescriptor(t, i);
            l = d ? d.get : () => t[i];
          }
          o.assert(
            "function" == typeof s,
            "[vanx] mapData prop expect a function, receive a " +
              typeof s +
              ": " +
              i
          ),
            Object.defineProperty(u, i, { get: l.bind(t), configurable: !1 }),
            (r[i] = new a.a(u, i, (t) => n(t), { immediate: !0, deep: !0 }));
        });
      }
    },
    aOlM: function (t, e, n) {
      function r(t, e, n) {
        var r,
          o,
          i,
          a,
          u,
          c = function () {
            var s = Date.now() - a;
            s < e && s >= 0
              ? (r = setTimeout(c, e - s))
              : ((r = null), n || ((u = t.apply(i, o)), r || (i = o = null)));
          };
        function s() {
          i = this;
          for (var s = arguments.length, f = new Array(s), l = 0; l < s; l++)
            f[l] = arguments[l];
          (o = f), (a = Date.now());
          var d = n && !r;
          return (
            r || (r = setTimeout(c, e)),
            d && ((u = t.apply(i, o)), (i = o = null)),
            u
          );
        }
        return (
          (s.cancel = function () {
            clearTimeout(r), (r = null);
          }),
          s
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    afTL: function (t, e) {},
    ajWA: function (t, e, n) {
      var r;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = ((r = n("h9bJ")) && r.__esModule ? r : { default: r }).default;
      (e.default = o), (t.exports = e.default);
    },
    akjn: function (t, e, n) {
      n.d(e, "a", function () {
        return a;
      });
      var r = n("h+Rz"),
        o = n("nibL"),
        i = n("pnMF");
      function a(t) {
        return (
          Object(o.a)(!!t.url, "request options.url accept a string"),
          (t.method = t.method ? t.method.toUpperCase() : "GET"),
          i.a.emit("requestStart", t),
          r.a
            .request(t)
            .then(function (e) {
              return (
                (e.status = e.statusCode),
                (e.headers = e.header),
                delete e.header,
                delete e.statusCode,
                i.a.emit("requestComplete", e, t),
                i.a.emit("requestSuccess", e, t),
                e
              );
            })
            .catch(function (e) {
              return (
                i.a.emit("requestComplete", e, t),
                i.a.emit("requestFail", e, t),
                Promise.reject(e)
              );
            })
        );
      }
    },
    bDRy: function (t, e) {},
    bb6g: function (t, e, n) {
      n.r(e),
        n.d(e, "__extends", function () {
          return o;
        }),
        n.d(e, "__assign", function () {
          return i;
        }),
        n.d(e, "__rest", function () {
          return a;
        }),
        n.d(e, "__decorate", function () {
          return u;
        }),
        n.d(e, "__param", function () {
          return c;
        }),
        n.d(e, "__esDecorate", function () {
          return s;
        }),
        n.d(e, "__runInitializers", function () {
          return f;
        }),
        n.d(e, "__propKey", function () {
          return l;
        }),
        n.d(e, "__setFunctionName", function () {
          return d;
        }),
        n.d(e, "__metadata", function () {
          return p;
        }),
        n.d(e, "__awaiter", function () {
          return h;
        }),
        n.d(e, "__generator", function () {
          return v;
        }),
        n.d(e, "__createBinding", function () {
          return g;
        }),
        n.d(e, "__exportStar", function () {
          return m;
        }),
        n.d(e, "__values", function () {
          return _;
        }),
        n.d(e, "__read", function () {
          return y;
        }),
        n.d(e, "__spread", function () {
          return b;
        }),
        n.d(e, "__spreadArrays", function () {
          return O;
        }),
        n.d(e, "__spreadArray", function () {
          return w;
        }),
        n.d(e, "__await", function () {
          return E;
        }),
        n.d(e, "__asyncGenerator", function () {
          return S;
        }),
        n.d(e, "__asyncDelegator", function () {
          return j;
        }),
        n.d(e, "__asyncValues", function () {
          return A;
        }),
        n.d(e, "__makeTemplateObject", function () {
          return T;
        }),
        n.d(e, "__importStar", function () {
          return k;
        }),
        n.d(e, "__importDefault", function () {
          return I;
        }),
        n.d(e, "__classPrivateFieldGet", function () {
          return x;
        }),
        n.d(e, "__classPrivateFieldSet", function () {
          return C;
        }),
        n.d(e, "__classPrivateFieldIn", function () {
          return D;
        }),
        n.d(e, "__addDisposableResource", function () {
          return N;
        }),
        n.d(e, "__disposeResources", function () {
          return M;
        });
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function o(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
              (n[r[o]] = t[r[o]]);
        }
        return n;
      }
      function u(t, e, n, r) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? e
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(e, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(t, e, n, r);
        else
          for (var u = t.length - 1; u >= 0; u--)
            (o = t[u]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
        return i > 3 && a && Object.defineProperty(e, n, a), a;
      }
      function c(t, e) {
        return function (n, r) {
          e(n, r, t);
        };
      }
      function s(t, e, n, r, o, i) {
        function a(t) {
          if (void 0 !== t && "function" != typeof t)
            throw new TypeError("Function expected");
          return t;
        }
        for (
          var u,
            c = r.kind,
            s = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            f = !e && t ? (r.static ? t : t.prototype) : null,
            l = e || (f ? Object.getOwnPropertyDescriptor(f, r.name) : {}),
            d = !1,
            p = n.length - 1;
          p >= 0;
          p--
        ) {
          var h = {};
          for (var v in r) h[v] = "access" === v ? {} : r[v];
          for (var v in r.access) h.access[v] = r.access[v];
          h.addInitializer = function (t) {
            if (d)
              throw new TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(a(t || null));
          };
          var g = (0, n[p])(
            "accessor" === c ? { get: l.get, set: l.set } : l[s],
            h
          );
          if ("accessor" === c) {
            if (void 0 === g) continue;
            if (null === g || "object" != typeof g)
              throw new TypeError("Object expected");
            (u = a(g.get)) && (l.get = u),
              (u = a(g.set)) && (l.set = u),
              (u = a(g.init)) && o.unshift(u);
          } else (u = a(g)) && ("field" === c ? o.unshift(u) : (l[s] = u));
        }
        f && Object.defineProperty(f, r.name, l), (d = !0);
      }
      function f(t, e, n) {
        for (var r = arguments.length > 2, o = 0; o < e.length; o++)
          n = r ? e[o].call(t, n) : e[o].call(t);
        return r ? n : void 0;
      }
      function l(t) {
        return "symbol" == typeof t ? t : "".concat(t);
      }
      function d(t, e, n) {
        return (
          "symbol" == typeof e &&
            (e = e.description ? "[".concat(e.description, "]") : ""),
          Object.defineProperty(t, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", e) : e,
          })
        );
      }
      function p(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e);
      }
      function h(t, e, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(t) {
            try {
              c(r.next(t));
            } catch (t) {
              i(t);
            }
          }
          function u(t) {
            try {
              c(r.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? o(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, u);
          }
          c((r = r.apply(t, e || [])).next());
        });
      }
      function v(t, e) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function u(u) {
          return function (c) {
            return (function (u) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i && ((i = 0), u[0] && (a = 0)), a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & u[0]
                          ? r.return
                          : u[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, u[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                    case 0:
                    case 1:
                      o = u;
                      break;
                    case 4:
                      return a.label++, { value: u[1], done: !1 };
                    case 5:
                      a.label++, (r = u[1]), (u = [0]);
                      continue;
                    case 7:
                      (u = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((o = a.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== u[0] && 2 !== u[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                        a.label = u[1];
                        break;
                      }
                      if (6 === u[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = u);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(u);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  u = e.call(t, a);
                } catch (t) {
                  (u = [6, t]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, c]);
          };
        }
      }
      var g = Object.create
        ? function (t, e, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(e, n);
            (o &&
              !("get" in o ? !e.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }),
              Object.defineProperty(t, r, o);
          }
        : function (t, e, n, r) {
            void 0 === r && (r = n), (t[r] = e[n]);
          };
      function m(t, e) {
        for (var n in t)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(e, n) ||
            g(e, t, n);
      }
      function _(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function y(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function b() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(y(arguments[e]));
        return t;
      }
      function O() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          o = 0;
        for (e = 0; e < n; e++)
          for (var i = arguments[e], a = 0, u = i.length; a < u; a++, o++)
            r[o] = i[a];
        return r;
      }
      function w(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      function E(t) {
        return this instanceof E ? ((this.v = t), this) : new E(t);
      }
      function S(t, e, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          o = n.apply(t, e || []),
          i = [];
        return (
          (r = {}),
          a("next"),
          a("throw"),
          a("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function a(t) {
          o[t] &&
            (r[t] = function (e) {
              return new Promise(function (n, r) {
                i.push([t, e, n, r]) > 1 || u(t, e);
              });
            });
        }
        function u(t, e) {
          try {
            (n = o[t](e)).value instanceof E
              ? Promise.resolve(n.value.v).then(c, s)
              : f(i[0][2], n);
          } catch (t) {
            f(i[0][3], t);
          }
          var n;
        }
        function c(t) {
          u("next", t);
        }
        function s(t) {
          u("throw", t);
        }
        function f(t, e) {
          t(e), i.shift(), i.length && u(i[0][0], i[0][1]);
        }
      }
      function j(t) {
        var e, n;
        return (
          (e = {}),
          r("next"),
          r("throw", function (t) {
            throw t;
          }),
          r("return"),
          (e[Symbol.iterator] = function () {
            return this;
          }),
          e
        );
        function r(r, o) {
          e[r] = t[r]
            ? function (e) {
                return (n = !n)
                  ? { value: E(t[r](e)), done: !1 }
                  : o
                  ? o(e)
                  : e;
              }
            : o;
        }
      }
      function A(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var e,
          n = t[Symbol.asyncIterator];
        return n
          ? n.call(t)
          : ((t = _(t)),
            (e = {}),
            r("next"),
            r("throw"),
            r("return"),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function r(n) {
          e[n] =
            t[n] &&
            function (e) {
              return new Promise(function (r, o) {
                (function (t, e, n, r) {
                  Promise.resolve(r).then(function (e) {
                    t({ value: e, done: n });
                  }, e);
                })(r, o, (e = t[n](e)).done, e.value);
              });
            };
        }
      }
      function T(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, "raw", { value: e })
            : (t.raw = e),
          t
        );
      }
      var P = Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          };
      function k(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(t, n) &&
              g(e, t, n);
        return P(e, t), e;
      }
      function I(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function x(t, e, n, r) {
        if ("a" === n && !r)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !r : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
      }
      function C(t, e, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? o.call(t, n) : o ? (o.value = n) : e.set(t, n), n;
      }
      function D(t, e) {
        if (null === e || ("object" != typeof e && "function" != typeof e))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof t ? e === t : t.has(e);
      }
      function N(t, e, n) {
        if (null != e) {
          if ("object" != typeof e) throw new TypeError("Object expected.");
          var r;
          if (n) {
            if (!Symbol.asyncDispose)
              throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose)
              throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose];
          }
          if ("function" != typeof r)
            throw new TypeError("Object not disposable.");
          t.stack.push({ value: e, dispose: r, async: n });
        } else n && t.stack.push({ async: !0 });
        return e;
      }
      var L =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (t, e, n) {
              var r = new Error(n);
              return (
                (r.name = "SuppressedError"),
                (r.error = t),
                (r.suppressed = e),
                r
              );
            };
      function M(t) {
        function e(e) {
          (t.error = t.hasError
            ? new L(e, t.error, "An error was suppressed during disposal.")
            : e),
            (t.hasError = !0);
        }
        return (function n() {
          for (; t.stack.length; ) {
            var r = t.stack.pop();
            try {
              var o = r.dispose && r.dispose.call(r.value);
              if (r.async)
                return Promise.resolve(o).then(n, function (t) {
                  return e(t), n();
                });
            } catch (t) {
              e(t);
            }
          }
          if (t.hasError) throw t.error;
        })();
      }
      e.default = {
        __extends: o,
        __assign: i,
        __rest: a,
        __decorate: u,
        __param: c,
        __metadata: p,
        __awaiter: h,
        __generator: v,
        __createBinding: g,
        __exportStar: m,
        __values: _,
        __read: y,
        __spread: b,
        __spreadArrays: O,
        __spreadArray: w,
        __await: E,
        __asyncGenerator: S,
        __asyncDelegator: j,
        __asyncValues: A,
        __makeTemplateObject: T,
        __importStar: k,
        __importDefault: I,
        __classPrivateFieldGet: x,
        __classPrivateFieldSet: C,
        __classPrivateFieldIn: D,
        __addDisposableResource: N,
        __disposeResources: M,
      };
    },
    c514: function (t, e, n) {
      var r, o, i, a, u;
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "e", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.PROTOCOL = "protocol");
        })(r || (r = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.PROTOCOL = "protocol");
        })(o || (o = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.FILL_NICKNAME_AND_AVATAR = "fillNicknameAndAvatar"),
            (t.PROTOCOL = "protocol"),
            (t.YZ_AUTH = "yzAuth"),
            (t.FILL_YZ_AUTH = "fillYzAuth"),
            (t.EXTERNAL = "external");
        })(i || (i = {})),
        (function (t) {
          (t.MOBILE = "mobile"),
            (t.NICKNAME_AND_AVATAR = "nicknameAndAvatar"),
            (t.FILL_NICKNAME_AND_AVATAR = "fillNicknameAndAvatar"),
            (t.PROTOCOL = "protocol"),
            (t.YZ_AUTH = "yzAuth"),
            (t.FILL_YZ_AUTH = "fillYzAuth");
        })(a || (a = {})),
        (function (t) {
          (t.Agree = "agree"), (t.Disagree = "disagree");
        })(u || (u = {}));
    },
    c7Bu: function (t, e, n) {
      n.r(e),
        n.d(e, "BEFORE_LOGIN_EVENT", function () {
          return r;
        }),
        n.d(e, "TEE_LOGIN_SUCCESS", function () {
          return o;
        }),
        n.d(e, "BEFORE_LOGIN_IN_YOUZAN", function () {
          return i;
        }),
        n.d(e, "EVENT_KEYS", function () {
          return a;
        }),
        n.d(e, "GET_APP_TOKEN_HOOK", function () {
          return u.c;
        }),
        n.d(e, "LOGIN_CHECK_GLOBAL_HOOK", function () {
          return u.d;
        }),
        n.d(e, "TEE_LOGIN_FAIL_HOOK", function () {
          return u.g;
        }),
        n.d(e, "BEFORE_YOUZAN_LOGIN_HOOK", function () {
          return u.b;
        }),
        n.d(e, "YOUZAN_LOGIN_FAIL_HOOK", function () {
          return u.h;
        }),
        n.d(e, "MOBILE_CHANGE_HOOK", function () {
          return u.e;
        }),
        n.d(e, "AUTH_ONE_AFTER_HOOK", function () {
          return u.a;
        }),
        n.d(e, "PROTOCOL_BEFORE_AGREE_HOOK", function () {
          return u.f;
        });
      var r = "passport-tee-login-before",
        o = "passport-tee-login-code-success",
        i = "passport-tee-login-before-token",
        a = { LOGIN_END: "passport-tee-login-end" },
        u = n("DEHM");
    },
    cWxX: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = function (t) {
        return t.replace(/_[a-z]/g, function (t) {
          return t[1].toUpperCase();
        });
      };
      (e.default = r), (t.exports = e.default);
    },
    ceQz: function (t, e) {},
    chrl: function (t, e, n) {
      n.d(e, "d", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n("9ZMt"),
        o = n("HnuB"),
        i = r.default.getEnv(),
        a = i === o.TeeEnvEnum.WEB,
        u = i === o.TeeEnvEnum.XHS,
        c = function () {
          return !1;
        };
    },
    dvf8: function (t, e, n) {
      n.r(e),
        n.d(e, "getAppTokenHooks", function () {
          return r.a;
        }),
        n.d(e, "setAppTokenHooks", function () {
          return r.f;
        }),
        n.d(e, "getCheckLoginHooks", function () {
          return r.c;
        }),
        n.d(e, "setCheckLoginHooks", function () {
          return r.h;
        }),
        n.d(e, "getTeeLoginFailHooks", function () {
          return r.d;
        }),
        n.d(e, "setTeeLoginFailHooks", function () {
          return r.i;
        }),
        n.d(e, "getBeforeYouzanLoginHook", function () {
          return r.b;
        }),
        n.d(e, "setBeforeYouzanLoginHook", function () {
          return r.g;
        }),
        n.d(e, "getYouzanLoginFailHooks", function () {
          return r.e;
        }),
        n.d(e, "setYouzanLoginFailHooks", function () {
          return r.j;
        }),
        n.d(e, "authorizeHook", function () {
          return u;
        }),
        n.d(e, "protocolHook", function () {
          return c;
        }),
        n.d(e, "executeHook", function () {
          return s;
        }),
        n.d(e, "executeHookAsync", function () {
          return f;
        });
      var r = n("mlg6"),
        o = n("GjIH"),
        i = n("DEHM"),
        a = n("fLr7"),
        u = {
          mobileChange: Object(o.a)(i.e),
          authItemAfter: Object(o.a)(i.a),
          buttonClickAfter: Object(o.a)(a.a),
          popupShowAfter: Object(o.a)(a.b),
        },
        c = { beforeAgree: Object(o.b)(i.f) },
        s = function (t, e, n) {
          try {
            if (!t) return n;
            var r = t();
            if (!r) return n;
            var o = e || [];
            return Array.isArray(r)
              ? Promise.all(
                  r.map(function (t) {
                    return t.apply(void 0, o);
                  })
                )
              : r.apply(void 0, o);
          } catch (t) {}
          return n;
        },
        f = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return Promise.resolve().then(function () {
            return s.apply(void 0, t);
          });
        };
    },
    "e+GP": function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    e8xm: function (t, e, n) {
      n.d(e, "c", function () {
        return a;
      }),
        n.d(e, "h", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "e", function () {
          return f;
        }),
        n.d(e, "f", function () {
          return l;
        }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "g", function () {
          return p;
        }),
        n.d(e, "b", function () {
          return h;
        });
      var r = n("9ZMt"),
        o = n("BZkp");
      function i(t) {
        return "inner" + t.replace(/^\w/, (t) => t.toUpperCase());
      }
      function a(t) {
        Array.isArray(r.default.$native.__vanToastArray) ||
          (r.default.$native.__vanToastArray = []),
          r.default.$native.__vanToastArray.push(t);
      }
      function u(t) {
        r.default.$native.__vanToastArray =
          r.default.$native.__vanToastArray.filter((e) => e !== t);
      }
      function c(t) {
        var e = t.props || t._props;
        return Object.keys(e).reduce((t, n) => ((t[i(n)] = e[n]), t), {});
      }
      var s = ["innerType", "innerMessage"];
      function f(t) {
        var e = t.props || t._props;
        return Object.keys(e).reduce((t, e) => {
          var n = i(e);
          return s.includes(n) || (t[n] = null), t;
        }, {});
      }
      function l(t) {
        return Object.keys(t).reduce((t, e) => {
          var n = i(e);
          return (
            (t[e] = function (t) {
              this[n] = t;
            }),
            t
          );
        }, {});
      }
      function d(t) {
        return Object.keys(t).reduce((e, n) => ((e[i(n)] = t[n]), e), {});
      }
      function p(t) {
        var e = Object(o.e)() || {};
        Object.defineProperty(e, "$vt_toast_vm", {
          enumerable: !1,
          configurable: !0,
          get: () => t,
        });
      }
      function h() {
        return (Object(o.e)() || {}).$vt_toast_vm;
      }
    },
    "eX/V": function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = {
        zh: {
          dayNamesShort: [
            "周日",
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
          ],
          dayNames: [
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
          ],
          monthNamesShort: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          monthNames: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
          amPm: ["am", "pm"],
          DoFn: function (t) {
            return (
              t +
              ["th", "st", "nd", "rd"][
                t % 10 > 3 ? 0 : (Number(t - (t % 10) != 10) * t) % 10
              ]
            );
          },
        },
        en: {
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          amPm: ["am", "pm"],
          DoFn: function (t) {
            return (
              t +
              ["th", "st", "nd", "rd"][
                t % 10 > 3 ? 0 : (Number(t - (t % 10) != 10) * t) % 10
              ]
            );
          },
        },
      };
      (e.default = r), (t.exports = e.default);
    },
    eijD: function (t, e, n) {
      function r(t, e, n, r, o, i, a) {
        try {
          var u = t[i](a),
            c = u.value;
        } catch (t) {
          return void n(t);
        }
        u.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function o(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(e, n);
            function u(t) {
              r(a, o, i, u, c, "next", t);
            }
            function c(t) {
              r(a, o, i, u, c, "throw", t);
            }
            u(void 0);
          });
        };
      }
      n.d(e, "a", function () {
        return o;
      });
    },
    equh: function (t, e) {},
    esrA: function (t, e, n) {
      n.d(e, "a", function () {
        return g;
      });
      var r = n("Fcif"),
        o = n("+I+c");
      function i(t) {
        return (function (t, e) {
          if (t) {
            var n = {};
            return (
              Object.keys(t).forEach(function (r) {
                n[r] = e(r, t[r]);
              }),
              n
            );
          }
        })(t, function (t, e) {
          return (function (t, e) {
            return null === e
              ? null
              : Array.isArray(e) && Array.isArray(e[0])
              ? e.map(function (e) {
                  return 1 === e.length
                    ? { name: t, moduleId: e[0] }
                    : { name: e[1], moduleId: e[0] };
                })
              : "string" == typeof e
              ? { name: t, moduleId: e }
              : { name: e[1], moduleId: e[0] };
          })(t, e);
        });
      }
      function a(t) {
        if (t)
          return {
            data: i(t.d),
            event: i(t.e),
            widget: i(t.w),
            lambda: i(t.l),
            process: i(t.p),
            component: i(t.c),
          };
      }
      function u(t) {
        return Object(r.a)(
          { moduleId: t[0], extensionId: t[1], bindings: a(t[2]) },
          t[3]
        );
      }
      function c(t) {
        switch (t) {
          case 0:
          case 4:
            return ["r"];
          case 1:
          case 5:
            return ["w"];
          case 2:
          case 6:
            return ["r", "w"];
        }
        return [];
      }
      function s(t) {
        if (t) {
          for (var e = {}, n = t.split(";"); n.length; ) {
            var r = +n.pop(),
              o = n.pop(),
              i = r <= 3 ? "provide" : "consume";
            (e[i] = e[i] || {}), (e[i][o] = c(r));
          }
          return e;
        }
      }
      function f(t) {
        return t ? t.split(";") : void 0;
      }
      function l(t) {
        var e = t[1];
        return Object(r.a)(
          {
            extensionId: t[0],
            data: s(e.d),
            event: { emit: f(e.e), listen: f(e.el) },
            lambda: { provide: f(e.l), consume: f(e.lc) },
            process: { define: f(e.p), invoke: f(e.pi) },
            widget: { provide: f(e.w), consume: f(e.wc), default: e.wd },
            component: { provide: f(e.c), consume: f(e.cc) },
            lifecycle: f(e.li),
          },
          t[2]
        );
      }
      var d = ["r", "c", "m", "cf"];
      function p(t) {
        if ("string" == typeof t) return t;
        if (t.moduleId) return t;
        var e = t;
        return {
          contentType: { m: "module", c: "container" }[e.t],
          layout: { c: "column", r: "row" }[e.l],
          contents: e.c.map(p),
          style: e.s,
        };
      }
      function h(t) {
        var e = t.r,
          n = t.c,
          i = t.m,
          a = t.cf,
          u = Object(o.a)(t, d);
        return Object(r.a)(
          { routes: e, containers: n.map(p), modules: i, config: a },
          u
        );
      }
      var v = ["a", "m", "e", "f"];
      function g(t) {
        var e = t.a,
          n = t.m,
          i = t.e,
          a = t.f,
          c = Object(o.a)(t, v),
          s = Object(r.a)({}, c);
        return (
          e && (s.app = { pages: e.p.map(h) }),
          n && (s.modules = n.map(u)),
          i && (s.extensions = i.map(l)),
          a && (s.framework = a),
          s
        );
      }
    },
    fBDg: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = n("qHJ6");
      var o = function (t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : r.GLOBAL_URL;
        if (n[e] && !/^https?:\/\//.test(t)) {
          var o = /^\//.test(t) ? "" : "/";
          return n[e] + o + t;
        }
        return t;
      };
      (e.default = o), (t.exports = e.default);
    },
    fLr7: function (t, e, n) {
      var r, o, i;
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "r", function () {
          return i;
        }),
        n.d(e, "f", function () {
          return u;
        }),
        n.d(e, "g", function () {
          return c;
        }),
        n.d(e, "h", function () {
          return s;
        }),
        n.d(e, "i", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "j", function () {
          return d;
        }),
        n.d(e, "q", function () {
          return p;
        }),
        n.d(e, "p", function () {
          return h;
        }),
        n.d(e, "n", function () {
          return v;
        }),
        n.d(e, "o", function () {
          return g;
        }),
        n.d(e, "m", function () {
          return m;
        }),
        n.d(e, "l", function () {
          return _;
        }),
        n.d(e, "k", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return y;
        }),
        n.d(e, "b", function () {
          return b;
        }),
        (function (t) {
          (t.NativeMobile = "mobile_n"),
            (t.NativeNickAvatar = "nick_n"),
            (t.YZButton = "yz");
        })(r || (r = {})),
        (function (t) {
          (t.YZMobile = "mobile_yz"),
            (t.YZProtocol = "protocol_yz"),
            (t.YZAuth = "auth_yz"),
            (t.YZUserInfo = "info_yz"),
            (t.YZExternal = "external_yz");
        })(o || (o = {})),
        (function (t) {
          t[(t.External = 1)] = "External";
        })(i || (i = {}));
      var a,
        u = "CACHE_AUTHORIZE_DARA",
        c = "BEHAVIOR_CRYPTO_INFO",
        s = "login_ticket_info",
        f = "CACHE_ON_PRIVACY_AUTH",
        l = "CACHE_NEED_PRIVACY_AUTH",
        d = "CACHE_REQ_HOOK_INIT",
        p = "user-auth:sync-state",
        h = "user-auth:auth-success",
        v = "passport-tee-login-before",
        g = "passport-tee-login-before-token",
        m = "passport-tee-login-code-success",
        _ = "passport-tee-login-end";
      !(function (t) {
        (t[(t.Unknown = -1)] = "Unknown"),
          (t[(t.Password = 0)] = "Password"),
          (t[(t.Sms = 1)] = "Sms"),
          (t[(t.Yz = 2)] = "Yz"),
          (t[(t.Weapp = 3)] = "Weapp"),
          (t[(t.AppSdk = 4)] = "AppSdk");
      })(a || (a = {}));
      var y = "authBtnClickAfterHook",
        b = "authPopupShowAfterHook";
    },
    fYK9: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return c;
        });
      var r = n("Tewj"),
        o = n("fLr7");
      function i(t) {
        r.default.trigger(o.q, t);
      }
      function a(t) {
        return (
          r.default.on(o.q, t),
          function () {
            return r.default.off(o.q, t);
          }
        );
      }
      function u(t) {
        r.default.trigger(o.p, t);
      }
      function c(t, e) {
        var n,
          i = (e || {}).once,
          a = function () {
            n && r.default.off(o.p, n), (n = null);
          };
        return (
          (n = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            i && a(), t.apply(void 0, e);
          }),
          r.default.on(o.p, n),
          a
        );
      }
    },
    gXaT: function (t, e, n) {
      e.a = function (t) {
        return t.replace(/_[a-z]/g, function (t) {
          return t[1].toUpperCase();
        });
      };
    },
    gYYP: function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return u;
        });
      var r = n("4J1Q"),
        o = n("DoqY"),
        i = n("O5ul");
      function a(t) {
        return Object(r.b)(t, "joinType") === o.a.JOIN_STORE;
      }
      a(i.a);
      function u(t) {
        return Object(r.b)(t, "joinType") === o.a.DIRECT_STORE;
      }
      u(i.a);
      var c;
      (c = i.a), Object(r.b)(c, "joinType"), o.a.STOCK_STORE;
      !(function (t) {
        Object(r.b)(t, "joinType"), o.a.PARTNER;
      })(i.a);
    },
    "h+Rz": function (t, e, n) {
      n.d(e, "a", function () {
        return i;
      });
      var r = n("Fcif"),
        o = n("9ZMt"),
        i = {},
        a = ["getMenuButtonBoundingClientRect", "createInnerAudioContext"];
      Object.keys(o.default.$native).forEach(function (t) {
        Object.defineProperty(i, t, {
          get: function () {
            return function (e) {
              return (function (t, e) {
                return function (n) {
                  return new Promise(function (i, u) {
                    if (!t) return u(o.default.platform + " 不支持此API");
                    if (
                      a.some(function (t) {
                        return t === e;
                      })
                    )
                      try {
                        i(t(n || {}));
                      } catch (t) {
                        u(t);
                      }
                    else
                      t(
                        Object(r.a)({}, n || {}, {
                          success: function (t) {
                            return i(t);
                          },
                          fail: function (t) {
                            return u(t);
                          },
                        })
                      );
                  });
                };
              })(
                o.default.$native[t].bind(o.default.$native),
                t
              )(e);
            };
          },
        });
      });
    },
    h9bJ: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = Array.isArray;
      e.default = r;
    },
    hHpg: function (t, e, n) {
      var r = n("6S0u"),
        o = {
          type: "text",
          mask: !1,
          message: "",
          show: !0,
          zIndex: 1e3,
          duration: 2e3,
          position: "middle",
          forbidClick: !1,
          loadingType: "circular",
          selector: "#van-toast",
        },
        i = [],
        a = Object.assign({}, o);
      function u(t) {
        return Object(r.f)(t) ? t : { message: t };
      }
      function c(t) {
        var e,
          n = Object.assign(Object.assign({}, a), u(t)),
          r = (
            ("function" == typeof n.context ? n.context() : n.context) ||
            (e = getCurrentPages())[e.length - 1]
          ).selectComponent(n.selector);
        if (r)
          return (
            delete n.context,
            delete n.selector,
            (r.clear = () => {
              r.setData({ show: !1 }), n.onClose && n.onClose();
            }),
            i.push(r),
            r.setData(n),
            clearTimeout(r.timer),
            null != n.duration &&
              n.duration > 0 &&
              (r.timer = setTimeout(() => {
                r.clear(), (i = i.filter((t) => t !== r));
              }, n.duration)),
            r
          );
      }
      var s = (t) => (e) => c(Object.assign({ type: t }, u(e)));
      (c.loading = s("loading")),
        (c.success = s("success")),
        (c.fail = s("fail")),
        (c.clear = () => {
          i.forEach((t) => {
            t.clear();
          }),
            (i = []);
        }),
        (c.setDefaultOptions = (t) => {
          Object.assign(a, t);
        }),
        (c.resetDefaultOptions = () => {
          a = Object.assign({}, o);
        }),
        (e.a = c);
    },
    hY7o: function (t, e, n) {
      var r = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })();
      var o = 310,
        i = "请求参数信息有误",
        a = 600,
        u = "系统错误",
        c = 1e3,
        s = 200,
        f = {
          location2query: function (t) {
            if ("string" == typeof t) return t;
            for (var e = "", n = 0; n < t.length; n++) {
              var r = t[n];
              e && (e += ";"),
                r.location && (e = e + r.location.lat + "," + r.location.lng),
                r.latitude &&
                  r.longitude &&
                  (e = e + r.latitude + "," + r.longitude);
            }
            return e;
          },
          getWXLocation: function (t, e, n) {
            wx.getLocation({ type: "gcj02", success: t, fail: e, complete: n });
          },
          getLocationParam: function (t) {
            if ("string" == typeof t) {
              var e = t.split(",");
              t =
                2 === e.length
                  ? { latitude: t.split(",")[0], longitude: t.split(",")[1] }
                  : {};
            }
            return t;
          },
          polyfillParam: function (t) {
            (t.success = t.success || function () {}),
              (t.fail = t.fail || function () {}),
              (t.complete = t.complete || function () {});
          },
          checkParamKeyEmpty: function (t, e) {
            if (!t[e]) {
              var n = this.buildErrorConfig(o, i + e + "参数格式有误");
              return t.fail(n), t.complete(n), !0;
            }
            return !1;
          },
          checkKeyword: function (t) {
            return !this.checkParamKeyEmpty(t, "keyword");
          },
          checkLocation: function (t) {
            var e = this.getLocationParam(t.location);
            if (!e || !e.latitude || !e.longitude) {
              var n = this.buildErrorConfig(o, i + " location参数格式有误");
              return t.fail(n), t.complete(n), !1;
            }
            return !0;
          },
          buildErrorConfig: function (t, e) {
            return { status: t, message: e };
          },
          buildWxRequestConfig: function (t, e) {
            var n = this;
            return (
              (e.header = { "content-type": "application/json" }),
              (e.method = "GET"),
              (e.success = function (e) {
                var n = e.data;
                0 === n.status ? t.success(n) : t.fail(n);
              }),
              (e.fail = function (e) {
                (e.statusCode = c),
                  t.fail(n.buildErrorConfig(c, result.errMsg));
              }),
              (e.complete = function (e) {
                switch (+e.statusCode) {
                  case c:
                    t.complete(n.buildErrorConfig(c, e.errMsg));
                    break;
                  case s:
                    var r = e.data;
                    0 === r.status
                      ? t.complete(r)
                      : t.complete(n.buildErrorConfig(r.status, r.message));
                    break;
                  default:
                    t.complete(n.buildErrorConfig(a, u));
                }
              }),
              e
            );
          },
          locationProcess: function (t, e, n, r) {
            var o = this;
            ((n =
              n ||
              function (e) {
                (e.statusCode = c), t.fail(o.buildErrorConfig(c, e.errMsg));
              }),
            (r =
              r ||
              function (e) {
                e.statusCode == c &&
                  t.complete(o.buildErrorConfig(c, e.errMsg));
              }),
            t.location)
              ? o.checkLocation(t) && e(f.getLocationParam(t.location))
              : o.getWXLocation(e, n, r);
          },
        },
        l = (function () {
          function t(e) {
            if (
              ((function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              !e.key)
            )
              throw Error("key值不能为空");
            this.key = e.key;
          }
          return (
            r(t, [
              {
                key: "search",
                value: function (t) {
                  if (((t = t || {}), f.polyfillParam(t), f.checkKeyword(t))) {
                    var e = {
                      keyword: t.keyword,
                      orderby: t.orderby || "_distance",
                      page_size: t.page_size || 10,
                      page_index: t.page_index || 1,
                      output: "json",
                      key: this.key,
                    };
                    t.address_format && (e.address_format = t.address_format),
                      t.filter && (e.filter = t.filter);
                    var n = t.distance || "1000",
                      r = t.auto_extend || 1;
                    f.locationProcess(t, function (o) {
                      (e.boundary =
                        "nearby(" +
                        o.latitude +
                        "," +
                        o.longitude +
                        "," +
                        n +
                        "," +
                        r +
                        ")"),
                        wx.request(
                          f.buildWxRequestConfig(t, {
                            url: "https://apis.map.qq.com/ws/place/v1/search",
                            data: e,
                          })
                        );
                    });
                  }
                },
              },
              {
                key: "getSuggestion",
                value: function (t) {
                  if (((t = t || {}), f.polyfillParam(t), f.checkKeyword(t))) {
                    var e = {
                      keyword: t.keyword,
                      region: t.region || "全国",
                      region_fix: t.region_fix || 0,
                      policy: t.policy || 0,
                      output: "json",
                      key: this.key,
                    };
                    wx.request(
                      f.buildWxRequestConfig(t, {
                        url: "https://apis.map.qq.com/ws/place/v1/suggestion",
                        data: e,
                      })
                    );
                  }
                },
              },
              {
                key: "reverseGeocoder",
                value: function (t) {
                  (t = t || {}), f.polyfillParam(t);
                  var e = {
                    coord_type: t.coord_type || 5,
                    get_poi: t.get_poi || 0,
                    output: "json",
                    key: this.key,
                  };
                  t.poi_options && (e.poi_options = t.poi_options);
                  f.locationProcess(t, function (n) {
                    (e.location = n.latitude + "," + n.longitude),
                      wx.request(
                        f.buildWxRequestConfig(t, {
                          url: "https://apis.map.qq.com/ws/geocoder/v1/",
                          data: e,
                        })
                      );
                  });
                },
              },
              {
                key: "geocoder",
                value: function (t) {
                  if (
                    ((t = t || {}),
                    f.polyfillParam(t),
                    !f.checkParamKeyEmpty(t, "address"))
                  ) {
                    var e = {
                      address: t.address,
                      output: "json",
                      key: this.key,
                    };
                    wx.request(
                      f.buildWxRequestConfig(t, {
                        url: "https://apis.map.qq.com/ws/geocoder/v1/",
                        data: e,
                      })
                    );
                  }
                },
              },
              {
                key: "getCityList",
                value: function (t) {
                  (t = t || {}), f.polyfillParam(t);
                  var e = { output: "json", key: this.key };
                  wx.request(
                    f.buildWxRequestConfig(t, {
                      url: "https://apis.map.qq.com/ws/district/v1/list",
                      data: e,
                    })
                  );
                },
              },
              {
                key: "getDistrictByCityId",
                value: function (t) {
                  if (
                    ((t = t || {}),
                    f.polyfillParam(t),
                    !f.checkParamKeyEmpty(t, "id"))
                  ) {
                    var e = { id: t.id || "", output: "json", key: this.key };
                    wx.request(
                      f.buildWxRequestConfig(t, {
                        url: "https://apis.map.qq.com/ws/district/v1/getchildren",
                        data: e,
                      })
                    );
                  }
                },
              },
              {
                key: "calculateDistance",
                value: function (t) {
                  if (
                    ((t = t || {}),
                    f.polyfillParam(t),
                    !f.checkParamKeyEmpty(t, "to"))
                  ) {
                    var e = {
                      mode: t.mode || "walking",
                      to: f.location2query(t.to),
                      output: "json",
                      key: this.key,
                    };
                    t.from && (t.location = t.from),
                      f.locationProcess(t, function (n) {
                        (e.from = n.latitude + "," + n.longitude),
                          wx.request(
                            f.buildWxRequestConfig(t, {
                              url: "https://apis.map.qq.com/ws/distance/v1/",
                              data: e,
                            })
                          );
                      });
                  }
                },
              },
            ]),
            t
          );
        })();
      e.a = l;
    },
    hcPn: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return a;
        });
      var r = n("h+Rz"),
        o = n("WWpR");
      function i(t) {
        return (
          void 0 === t && (t = {}),
          (t.type = "gcj02"),
          r.a.getLocation({ type: t.type }).then(function (t) {
            return Object(o.a)(t, [
              "accuracy",
              "horizontalAccuracy",
              "latitude",
              "longitude",
            ]);
          })
        );
      }
      function a(t) {
        return r.a.chooseLocation(t);
      }
    },
    hmrP: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("5D5Y");
      var r = "";
      "undefined" != typeof window && (r = navigator.userAgent.toLowerCase());
      var o = {
        isIOS: function () {
          return /iPhone|iPad|iPod/gi.test(r) && !window.MSStream;
        },
        getIOSVersion: function () {
          return (
            parseFloat(
              ""
                .concat(
                  (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(
                    navigator.userAgent
                  ) || [0, ""])[1]
                )
                .replace("undefined", "3_2")
                .replace("_", ".")
                .replace("_", "")
            ) || !1
          );
        },
        isAndroid: function () {
          return /android/gi.test(r);
        },
        isAndroidOld: function () {
          return /android 2.3/gi.test(r) || /android 2.2/gi.test(r);
        },
        isWeixin: function () {
          return /micromessenger/gi.test(r);
        },
        isIPad: function () {
          return /ipad/gi.test(r);
        },
        isMobile: function () {
          return (
            /(android|bb\d+|meego).+mobile|kdtunion|weibo|m2oapp|micromessenger|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
              r
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
              r.substr(0, 4)
            )
          );
        },
        isSafari: function () {
          return /safari/gi.test(r) && !/chrome/gi.test(r);
        },
        isWxd: function () {
          return /youzan_wxd/i.test(r);
        },
        isWsc: function () {
          return /youzan_wsc/i.test(r);
        },
        isPf: function () {
          return /younipf/i.test(r);
        },
        isWeappWebview: function () {
          var t =
            void 0 !== window.__wxjs_environment
              ? window.__wxjs_environment
              : "";
          return /miniprogram/i.test(r) || "miniprogram" === t;
        },
        isMiniProgramWebview: function () {
          var t =
            void 0 !== window.__wxjs_environment
              ? window.__wxjs_environment
              : "";
          return (
            /miniprogram/i.test(r) || "miniprogram" === t || /swan\//.test(r)
          );
        },
        getPlatformVersion: function () {
          return this.isWxd()
            ? r.match(/(?:(?:wxd_android)|(?:wxd_ios))\/?([\d.]+)/i)[1]
            : r.match(
                /(?:(?:youzan_wsc_ios)|(?:youzan_wsc_android))\/?([\d.]+)/i
              )[1];
        },
      };
      (e.default = o), (t.exports = e.default);
    },
    iD8u: function (t, e, n) {
      n.d(e, "a", function () {
        return f;
      });
      var r = n("Eu17"),
        o = n("bb6g"),
        i = n("9ZMt"),
        a = n("kSnQ"),
        u = function () {
          var t = {
            component: "user_authorize",
            env: i.default.getEnv(),
            pageUrl: Object(a.f)(),
            logTime: Date.now(),
          };
          try {
            var e = getApp();
            (t.mpVer = e.getVersion()),
              (t.kdtId = e.getKdtId()),
              (t.sid = e.getSessionId());
          } catch (t) {}
          return t;
        },
        c = function (t, e) {
          return Object(a.a)({
            method: "POST",
            origin: "uic",
            path: "/passport/log.json",
            data: Object(o.__assign)(
              Object(o.__assign)(Object(o.__assign)({}, e), u()),
              { logName: t, message: Object(a.d)(e) }
            ),
            withCredentials: !0,
          });
        },
        s = function (t, e) {
          return Object(a.m)(
            Object(o.__assign)(Object(o.__assign)({}, e), {
              ei: t,
              params: Object(o.__assign)(Object(o.__assign)({}, u()), e.params),
            })
          );
        },
        f = new (function () {
          var t = this;
          (this.baseLog = function (t, e, n) {
            var o = (n || {}).channels,
              i = void 0 === o ? [] : o;
            0 !== i.length
              ? (i.includes(r.a.TRACK) && s(t, e),
                i.includes(r.a.SKYNET) && c(t, e))
              : (function (t, e) {
                  c(t, e), s(t, e);
                })(t, e);
          }),
            (this._getLogParams = function (t, e) {
              return (
                "object" == typeof t &&
                  ((e = {
                    et: "custom",
                    ei: "account_common",
                    en: "账号通用日志",
                    params: t,
                  }),
                  (t = r.b.ACCOUNT_COMMON)),
                { logId: t, data: e }
              );
            }),
            (this.logAll = function (e, n) {
              var r = t._getLogParams(e, n);
              t.baseLog(r.logId, r.data);
            }),
            (this.logSkynet = function (e, n) {
              var r = t._getLogParams(e, n),
                o = r.logId,
                i = r.data;
              c(o, i);
            }),
            (this.logTrack = function (e, n) {
              var r = t._getLogParams(e, n),
                o = r.logId,
                i = r.data;
              s(o, i);
            }),
            (this.logNativeMobileClick = function (e) {
              t.logAll(r.b.NATIVE_MOBILE_CLICK, {
                en: "原生手机号授权按钮点击",
                et: "click",
                params: e,
              });
            }),
            (this.logAuthClick = function (e) {
              t.logAll(r.b.AUTH_BTN_CLICK, {
                en: "授权按钮点击",
                et: "click",
                params: e,
              });
            }),
            (this.logAuthEnd = function (e) {
              t.logAll(r.b.AUTH_END, {
                en: "全部授权完成",
                et: "click",
                params: e,
              });
            }),
            (this.logAuthOne = function (e) {
              t.logAll(r.b.AUTH_ONE, {
                en: "单项授权完成",
                et: "click",
                params: e,
              });
            });
        })();
    },
    jakC: function (t, e, n) {
      function r(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function o(t) {
        return t && r(t)
          ? Object.keys(t)
              .filter(function (t) {
                return "" !== t;
              })
              .map(function (e) {
                var n = t[e];
                return r(n) ? e + "=" + JSON.stringify(n) : e + "=" + n;
              })
              .join("&")
          : "";
      }
      function i() {
        var t = getCurrentPages() || [],
          e = t[t.length - 1] || {},
          n = e.route || "";
        return {
          path: n,
          url: e.options ? [n, o(e.options)].filter(Boolean).join("?") : n,
          _path: n,
        };
      }
      n.d(e, "a", function () {
        return i;
      });
    },
    jmjq: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r,
        o = (r = n("Moet")) && r.__esModule ? r : { default: r };
      var i = function (t) {
        var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        "string" == typeof t && (t = parseFloat(t)), e && (t /= 100);
        var r = t.toFixed(2);
        return n ? (0, o.default)(r) : r;
      };
      (e.default = i), (t.exports = e.default);
    },
    kKb7: function (t, e, n) {
      n.r(e);
      var r = n("bDRy");
      for (var o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
    },
    kSEF: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isObjectLike = void 0);
      var r = Function.prototype,
        o = Object.prototype,
        i = r.toString,
        a = o.hasOwnProperty,
        u = o.toString,
        c = i.call(Object);
      function s(t) {
        return null !== t && "object" == typeof t;
      }
      (e.isObjectLike = s),
        (e.default = function (t) {
          if (!s(t) || "[object Object]" !== u.call(t)) return !1;
          var e = Object.getPrototypeOf(Object(t));
          if (null === e) return !0;
          var n = a.call(e, "constructor") && e.constructor;
          return "function" == typeof n && n instanceof n && i.call(n) === c;
        });
    },
    kSnQ: function (t, e, n) {
      n.d(e, "n", function () {
        return r.d;
      }),
        n.d(e, "i", function () {
          re