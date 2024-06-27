"use strict";
var r = require("~/r");
r(
  "St4M",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      St4M: function (t, e, i) {
        i.r(e);
        var a = i("Fcif"),
          s = i("9ZMt"),
          r = i("US/N"),
          o = i("BXdv"),
          u = i.n(o),
          n = i("7NcC"),
          d = i("Shdd"),
          c = i("YeA1"),
          h = [{ name: "", bgClass: "", innerClass: "" }],
          l = {
            name: "goods-review-block",
            props: { placeholder: String },
            data() {
              var {
                alias: t = "",
                kdtId: e = 0,
                shopConfig: i = {},
                goodsBaseInfo: a = {},
                staticConfig: r = {},
                memberActivity: o = {},
                pageFeature: u = {},
                umpActivityData: { currentActivity: n = {} } = {},
              } = s.default.getGlobal("GOODS_DATA") || {};
              return {
                alias: t,
                goodsId: a.id,
                kdtId: e,
                rate: 0,
                shopConfig: i,
                review: { count: 0, tags: [], reviews: [] },
                staticConfig: r,
                memberActivity: o,
                currentActivity: n,
                pageFeature: u,
                bigButtons: [],
                disabledBigButton: [],
                themeTag: {},
              };
            },
            computed: {
              showCustomerReviews() {
                return !(!this.shopConfig.showCustomerReviews || !this.alias);
              },
              goodsFavorableRate() {
                return this.shopConfig.goodsFavorableRate;
              },
              listParams() {
                var t,
                  e = !(
                    (this.disabledBigButton || []).length ||
                    (this.currentActivity || {}).isEnd
                  ),
                  { type: i, subType: a } = this.currentActivity || {},
                  s = Object.keys(this.memberActivity || {}).join(";"),
                  r = a || i || "",
                  o = r && s ? ";" : "",
                  { showForbidBuyBtn: u } = this.pageFeature,
                  n =
                    (null == (t = this.ctx.lambdas)
                      ? void 0
                      : t.getAutoShowSkuParams(this.bigButtons, u)) || {},
                  d = this.getGoodsQuery();
                return {
                  canBuy: Number(e),
                  activity: encodeURIComponent("" + r + o + s),
                  popSku: Number(n.canAutoShow) || 0,
                  goodsId: this.goodsId,
                  extra: JSON.stringify(d),
                };
              },
            },
            watch: {
              showCustomerReviews: {
                handler(t) {
                  t && this.fetchReviewDetail(this.alias);
                },
                immediate: !0,
              },
            },
            created() {
              Object(c.b)(this, [
                "alias",
                "kdtId",
                "shopConfig",
                "staticConfig",
                "memberActivity",
                "currentActivity",
                "bigButtons",
                "disabledBigButton",
                "pageFeature",
                "themeTag",
              ]),
                Object(c.b)(this, {
                  goodsBaseInfo: (t) => {
                    this.goodsId = t.id;
                  },
                }),
                Object(c.e)(this, {
                  getNavItemTop: Object(d.b)(
                    this,
                    "#js-nav-review",
                    "goodsReviewBlock"
                  ),
                });
            },
            methods: {
              getGoodsQuery() {
                var {
                    activityId: t,
                    activityType: e,
                    type: i,
                    umpAlias: a,
                    umpType: s,
                    ump_type: r,
                    ump_alias: o,
                  } = this.$getPageQuery(),
                  u = {
                    activityId: t,
                    activityType: "helpcut" === i ? n.a : i || e,
                    ump_alias: a || o,
                    ump_type: s || r,
                  };
                return Object.keys(u).reduce(
                  (t, e) => (u[e] && (t[e] = u[e]), t),
                  {}
                );
              },
              formatSummaryTags(t) {
                var e = t.tagSummaryModels || [];
                return {
                  count: t.evaluationTotalCount || 0,
                  tags: e.map((t) => {
                    var e = h.find((e) => e.name === t.tagName),
                      i = "",
                      s = "tag-text__main";
                    return (
                      e && ((i = "" + e.bgClass), (s += " " + e.innerClass)),
                      Object(a.a)({}, t, { bgClass: i, innerClass: s })
                    );
                  }),
                };
              },
              formatReviewData(t) {
                void 0 === t && (t = []);
                var e = [],
                  i = !1;
                return (
                  t.slice(0, 2).forEach((t, s) => {
                    var r,
                      o =
                        null == (r = t.evaluationModels)
                          ? void 0
                          : r.find((t) => 1 === t.evaluationType);
                    o &&
                      (0 === s && (o.picturesList || []).length > 0 && (i = !0),
                      (s >= 1 && i) || e.push(Object(a.a)({}, t, o)));
                  }),
                  e
                );
              },
              fetchReviewDetail(t) {
                Object(r.default)({
                  path: "/wscgoods/tee-app/item/least-top-review-list.json",
                  data: { alias: t, allowSummaryTag: !0, querySize: 2 },
                  options: { useCdn: !0 },
                  withCredentials: !0,
                }).then((t) => {
                  var { reviewList: e = [], itemSummary: i = {} } = t || {},
                    s = this.formatSummaryTags(i);
                  this.review = Object(a.a)({}, s, {
                    reviews: this.formatReviewData(e),
                  });
                  var { goodsFavorableRate: r } = this;
                  if (r && r.show && i.highPraiseRate) {
                    var o = u()(100 * i.highPraiseRate, 2);
                    if (o < +r.rate) return;
                    this.rate = +o;
                  }
                });
              },
            },
            ud: !0,
          };
        e.default = s.default.component(l);
      },
    }
  )
);
