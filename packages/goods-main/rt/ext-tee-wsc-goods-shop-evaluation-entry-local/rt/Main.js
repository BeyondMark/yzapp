"use strict";
var r = require("~/r");
r(
  "gU4q",
  Object.assign({}, require("~/v.js").modules, {
    OQwS: function (e, t, n) {
      n.d(t, "a", function () {
        return l;
      });
      n("hisu"), n("yBJb");
      var o = n("ONqW");
      var a = function () {},
        i = function (e) {
          for (var t = 0; t < e.length; t++) {
            var n;
            if ((n = e[t].dataset.viewlog))
              try {
                Object(o.a)().log(JSON.parse(n));
              } catch (e) {}
          }
        },
        r = function (e) {
          return (
            Array.isArray(e) || (e = [e]),
            e.filter(function (e) {
              return e.intersectionRatio > 0;
            })
          );
        },
        s = function (e) {
          return function (t) {
            (t = r(t)), e(t);
          };
        },
        c = function (e) {
          var t = [];
          return function (n) {
            (n = (n = r(n)).filter(function (e) {
              var n;
              return (
                !(n = e.dataset.viewlog) || (!t.includes(n) && (t.push(n), !0))
              );
            })),
              e(n);
          };
        },
        u = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t.cache
            ? c(function (t) {
                i(t), e(t);
              })
            : s(function (t) {
                i(t), e(t);
              });
        },
        h = { thresholds: [0], observeAll: !0, cache: !0 },
        l = function (e, t) {
          var n;
          t = Object.assign({}, h, t);
          var o = (n = e.createIntersectionObserver(t)).observe;
          return (
            (n.observe = function (e) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : a;
              return o.call(n, e, u(i, { cache: t.cache }));
            }),
            n
          );
        };
    },
    gU4q: function (e, t, n) {
      n.r(t);
      var o = n("Fcif"),
        a = n("YeA1"),
        i = n("US/N"),
        r = n("KDJo"),
        s = n("OQwS"),
        c = {
          data: () => ({
            kdtId: "",
            goodsBaseInfo: null,
            shopMetaInfo: null,
            hasShopEvaluation: !1,
            tags: [],
            observer: null,
            componentObserver: null,
            isEnterView: !1,
            tagCount: 0,
          }),
          computed: {
            showShopEvaluation() {
              return this.hasShopEvaluation;
            },
            goodsId() {
              var e;
              return null == (e = this.goodsBaseInfo) ? void 0 : e.id;
            },
            componentLogger() {
              return JSON.stringify({
                et: "view",
                ei: "shop_evaluation_component_view",
                en: "店铺评价组件曝光",
                params: {
                  goods_id: this.goodsId,
                  component: "shop_evaluation_component",
                  g_evaluation_content_tag_number: this.tags.length,
                  Shop_evaluation_number: this.tagCount,
                },
              });
            },
            needTagsLogger() {
              return this.isEnterView && this.tags.length > 0;
            },
          },
          watch: {
            showShopEvaluation(e) {
              e &&
                this.$nextTick(() => {
                  this.sendComponentViewLogger();
                });
            },
            needTagsLogger(e) {
              e &&
                this.$nextTick(() => {
                  this.sendTagViewLogger();
                });
            },
          },
          created() {
            Object(a.b)(this, ["kdtId", "goodsBaseInfo"]),
              Object(a.b)(this, {
                shopMetaInfo: (e) => {
                  Object(r.c)(e) && this.fetchTags();
                },
              });
          },
          destroyed() {
            var e, t;
            null == (e = this.observer) || e.disconnect(),
              null == (t = this.componentObserver) || t.disconnect();
          },
          methods: {
            fetchTags() {
              Object(i.requestUseCdn)({
                path: "/wscgoods/shop-evaluation/content-tag.json",
              }).then((e) => {
                var {
                  hasShopEvaluation: t = {},
                  tagSummaryModels: n = {},
                  count: a = 0,
                } = e || {};
                (this.hasShopEvaluation = t),
                  (this.tagCount = a),
                  (this.tags = (n || []).map((e) =>
                    Object(o.a)({}, e, {
                      viewLog: JSON.stringify({
                        et: "view",
                        ei: "g_evaluation_content_tag_view",
                        en: "商详页评价标签曝光",
                        params: {
                          tag_name: e.tagName,
                          component: "shop_evaluation_component",
                        },
                      }),
                    })
                  ));
              });
            },
            sendTagViewLogger() {
              (this.observer = Object(s.a)(this).relativeTo(
                ".evaluation-entry >>> .review-tags"
              )),
                this.observer.observe(
                  ".evaluation-entry >>> .review-detail-tag"
                );
            },
            sendComponentViewLogger() {
              this.componentObserver ||
                ((this.componentObserver = Object(s.a)(
                  this
                ).relativeToViewport()),
                this.componentObserver.observe(".evaluation-entry", (e) => {
                  e.length && (this.isEnterView = !0);
                }));
            },
            goShopEvaluation(e) {
              this.ctx.logger.log(
                {
                  et: "click",
                  ei: "shop_evaluation_component_click",
                  en: "店铺评价组件点击",
                  params: {
                    click_area: (null == e ? void 0 : e.tagName) || "全部",
                    goods_id: this.goodsId,
                    component: "shop_evaluation_component",
                  },
                },
                () => {
                  var t = { kdtId: this.kdtId };
                  e && (t.tagCode = e.tagCode),
                    Object(a.a)().dmc.navigate("ShopEvaluationList", t);
                }
              );
            },
          },
          ud: !0,
        },
        u = n("9ZMt");
      t.default = u.default.component(c);
    },
    hisu: function (e, t, n) {
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    yBJb: function (e, t, n) {
      n.d(t, "a", function () {
        return i;
      });
      var o = n("z6zH");
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, Object(o.a)(a.key), a);
        }
      }
      function i(e, t, n) {
        return (
          t && a(e.prototype, t),
          n && a(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
    },
  })
);
