"use strict";
var r = require("~/r");
r(
  "JSPs",
  Object.assign({}, require("~/v.js").modules, {
    JSPs: function (t, e, r) {
      r.r(e);
      var i = r("Fcif"),
        n = r("NHEX"),
        o = r.n(n),
        a = (r("VTjl"), r("VmHG"));
      var s = {
          data() {
            return Object(i.a)(
              {
                showPopup: !1,
                uuid: o()(this.ctx.logger.getLogParams(), "user.uuid"),
              },
              Object(a.d)(this, [
                "docs",
                "isDocFetched",
                "isOrderPage",
                "isPrePayPage",
                "isChoosedCard",
                "hideYzGuarantee",
                "orderPageConfig",
                "detailPageConfig",
                "guaranteeOrderInfo",
                "mainSupportContent",
                "lifeCycle",
                "show",
                "showYzGuaranteeFixed",
                "showYzGuarantee",
                "showGuarantee",
                "defaultFreightInsurance",
                "paddingConfig",
                "freightUrl",
                "isDirty",
                "freightInsurance",
                "themeColors",
                "orderExtra",
                "kdtId",
              ])
            );
          },
          watch: {
            "guaranteeOrderInfo.expressType": function () {
              this.fetchData();
            },
            "guaranteeOrderInfo.aliases": function (t, e) {
              var r, i;
              (t &&
                e &&
                ((r = t),
                (i = e),
                r.length === i.length && r.every((t) => i.includes(t)))) ||
                this.fetchData();
            },
            isChoosedCard(t) {
              this.updateChoosedCardStatus(t), this.fetchData();
            },
            showGuarantee(t) {
              this.ctx.data.yzGuarantee = t;
            },
          },
          created() {
            this.initActions(),
              (this.unwatchFreightUrl = this.ctx.watch("freight", (t) => {
                this.updateFreightUrl(t);
              })),
              (this.ctx.data.yzGuarantee = !1);
          },
          destroyed() {
            this.unwatchFreightUrl && this.unwatchFreightUrl(),
              this.unwatchIsOrderPage && this.unwatchIsOrderPage();
          },
          mounted() {
            this.fetchData(), this.fetchDocs();
          },
          methods: {
            initActions() {
              Object(a.b)(this, [
                "fetchDocs",
                "fetchData",
                "updateFreightUrl",
                "updateChoosedCardStatus",
              ]);
            },
            closePopup() {
              this.showPopup = !1;
            },
            openPopup() {
              this.showPopup = !0;
            },
          },
        },
        c = r("9ZMt");
      e.default = c.default.component(s);
    },
    VTjl: function (t, e, r) {
      var i = function (t, e) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
      var n = function () {
          return (n =
            Object.assign ||
            function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++)
                for (var n in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }).apply(this, arguments);
        },
        o = Object.prototype.toString;
      function a(t) {
        return "[object Object]" === o.call(t);
      }
      var s = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            i(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          e
        );
      })(Error);
      function c(t) {
        return new s("[ABTestError]: " + t);
      }
      var u = (function () {
          function t(t, e) {
            (this.abTraceId = ""),
              (this.abUid = ""),
              (this.testId = 0),
              (this.configurations = null),
              (this.bcm = ""),
              (this.isValid = !1),
              (this.isReport = !1),
              e &&
                ((this.abTraceId =
                  e.testId + "_" + new Date().getTime() + "_" + t),
                (this.abUid = t),
                (this.testId = e.testId),
                (this.configurations = e.configurations),
                (this.bcm =
                  e.domain +
                  "." +
                  e.layer +
                  "." +
                  e.testId +
                  "." +
                  e.originTestId),
                (this.isValid = !0));
          }
          return (
            (t.prototype.report = function (t, e) {
              if ((void 0 === e && (e = {}), !this.isValid))
                return Promise.reject(c("Test 不可用，无法上报数据"));
              if (this.isReport) return Promise.resolve();
              var r = { et: "view", en: "", ei: "view", params: {} };
              (r.params.abTraceId = this.abTraceId),
                (r.params.bcm = this.bcm),
                (this.isReport = !0);
              var i = (function t() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e[r] = arguments[r];
                var i = Object.create(null);
                return (
                  e.forEach(function (e) {
                    e &&
                      Object.keys(e).forEach(function (r) {
                        var n = e[r];
                        a(n)
                          ? a(i[r])
                            ? (i[r] = t(i[r], n))
                            : (i[r] = t(n))
                          : (i[r] = n);
                      });
                  }),
                  i
                );
              })(r, e);
              return t.log(i), Promise.resolve(i);
            }),
            t
          );
        })(),
        h = (function () {
          function t() {
            this.cache = {};
          }
          return (
            (t.prototype.getItem = function (t) {
              return this.cache[t] || null;
            }),
            (t.prototype.setItem = function (t, e) {
              this.cache[t] = e;
            }),
            t
          );
        })(),
        f = {
          cache: "undefined" != typeof localStorage ? localStorage : new h(),
          get: function (t) {
            return this.cache.getItem(t);
          },
          set: function (t, e) {
            this.cache.setItem(t, e);
          },
        };
      var d = new ((function () {
        function t() {
          (this.configs = []),
            (this.report = !0),
            (this.abUid = ""),
            (this.cacheKey = "__youzan_abtest");
        }
        return (
          (t.prototype.setOptions = function (t) {
            if (!t.Logger) throw c("请传入日志上报实例 Logger 参数");
            if (!t.configs) throw c("请传入apollo 配置 configs 参数");
            (this.Logger = t.Logger),
              (this.configs = t.configs),
              void 0 !== t.report && (this.report = t.report),
              t.abUid ||
                ((t.abUid =
                  f.get(this.cacheKey) ||
                  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/g,
                    function (t) {
                      var e = (16 * Math.random()) | 0;
                      return ("x" === t ? e : (3 & e) | 8).toString(16);
                    }
                  )),
                f.set(this.cacheKey, t.abUid)),
              (this.abUid = t.abUid);
          }),
          (t.prototype.getTest = function (t, e) {
            if ((void 0 === e && (e = {}), !t)) throw c("缺少layer参数");
            var r = e.abUid || this.abUid,
              i = this.configs.find(function (e) {
                return e.layer === t;
              });
            if (!i) return this._createTest(r, null);
            var o = (function (t, e, r) {
              void 0 === r && (r = 0);
              var i = t.flowList.filter(function (t) {
                return t.originTestId === r;
              });
              if (0 !== i.length)
                for (
                  var o = i.map(function (t) {
                      return t.bucket;
                    }),
                    a =
                      e %
                      o.reduce(function (t, e) {
                        return t + e;
                      }, 0),
                    s = 0,
                    c = 0;
                  s < o.length;
                  s++
                )
                  if (a < (c += o[s]))
                    return n(n({}, i[s]), { domain: t.domain, layer: t.layer });
            })(
              i,
              (function (t, e) {
                return (function (t) {
                  for (var e = 5381, r = 0, i = t.length; r < i; r++)
                    e += (e << 5) + t.charCodeAt(r);
                  return 2147483647 & e;
                })("" + t + e);
              })(t, r),
              e.originTestId || 0
            );
            if (!o) return this._createTest(r, null);
            var a = this._createTest(r, o);
            return (
              this.report &&
                !e.manualReport &&
                a.report(e.reportParams).catch(function () {}),
              a
            );
          }),
          (t.prototype._createTest = function (t, e) {
            var r = new u(t, e),
              i = r.report,
              n = this.Logger;
            return (
              (r.report = function (t) {
                return i.call(r, n, t);
              }),
              r
            );
          }),
          t
        );
      })())();
      (d.parse = function (t) {
        for (
          var e = [],
            r = function (t) {
              var r = JSON.parse(t);
              if (!r.testConfigs) return "continue";
              var i = [];
              r.testConfigs.forEach(function (t) {
                t.flowList.forEach(function (e) {
                  var r = JSON.parse(t.configurations);
                  i.push(n(n({}, e), { configurations: r }));
                });
              });
              var o = n(n({}, r.testConfigs[0]), {
                flowList: i.sort(function (t, e) {
                  return t.bucket - e.bucket;
                }),
              });
              delete o.configurations, e.push(o);
            },
            i = 0,
            o = Object.values(t);
          i < o.length;
          i++
        ) {
          r(o[i]);
        }
        return e;
      }),
        (t.exports = d);
    },
  })
);
