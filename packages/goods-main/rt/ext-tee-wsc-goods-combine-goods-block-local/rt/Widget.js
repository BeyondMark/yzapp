"use strict";
var r = require("~/r");
r(
  "RSfW",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      RSfW: function (e, t, r) {
        r.r(t);
        var a = r("YeA1"),
          s = r("jQ93"),
          c = r("MQ8E"),
          u = {
            name: "combine-goods",
            data: () => ({
              curList: [],
              selectedSkuValues: null,
              capLayoutOpt: {
                type: "swipe",
                itemMargin: 8,
                canUseScrollView: !1,
              },
            }),
            computed: {
              subGoodsListTitle() {
                return this.selectedSkuValues
                  ? this.selectedSkuValues.map((e) => e.name).join(",") +
                      "已包含:"
                  : "";
              },
              showCombineGoods() {
                return this.curList.length > 0;
              },
            },
            created() {
              Object(a.b)(this, ["curList", "selectedSkuValues"]),
                Object(a.d)(this, {
                  "sku:selected": (e) => {
                    var {
                        selectedSkuComb: t,
                        selectedSkuValues: r,
                        skuObject: a,
                      } = e,
                      { goodsCombineInfo: s = {}, skuData: c = {} } =
                        this.ctx.data,
                      { comboGroupModels: u = [], isCombo: o = !1 } = s;
                    if (!o)
                      return (
                        (this.ctx.data.curList = []),
                        void (this.ctx.data.showPlaceholder = !1)
                      );
                    var i,
                      { tree: l = [] } = a || c;
                    if (((i = l.length > 0), r))
                      this.ctx.data.selectedSkuValues = r;
                    else {
                      var { sku: n = "[{}]" } = t || {},
                        { v: d } = JSON.parse(n)[0] || {};
                      this.ctx.data.selectedSkuValues = d && [{ name: d }];
                    }
                    if (t) {
                      var { id: h } = t,
                        p =
                          1 === u.length ? u[0] : u.find((e) => e.skuId === h);
                      this.getCurList(p), (this.ctx.data.showPlaceholder = !1);
                    } else
                      i || 1 !== u.length
                        ? ((this.ctx.data.curList = []),
                          (this.ctx.data.showPlaceholder = !0))
                        : (this.getCurList(u[0]),
                          (this.ctx.data.selectedSkuValues = []),
                          (this.ctx.data.showPlaceholder = !1));
                  },
                });
            },
            methods: {
              getCurList(e) {
                var { comboSubItemModels: t = [] } = e || {};
                try {
                  var r = t.reduce((e, t) => {
                    if (0 === t.isDisplay) return e;
                    var {
                        skuRelatedModels: r = [],
                        picture: a = "[]",
                        propModels: u = [],
                      } = t,
                      o = [];
                    u.forEach((e) => {
                      var { textModels: t = [] } = e,
                        r = t.map((e) => e.textName);
                      o.push(r);
                    });
                    var i = JSON.parse(a);
                    return (
                      r.forEach((r) => {
                        var a = Object(s.a)(c.a),
                          { sku: u, combineNum: l = 0 } = r,
                          n = ((u && JSON.parse(u)) || [])
                            .map((e) => e.v)
                            .concat(o)
                            .join(";");
                        (a.titleOpt.title = t.title + " ×" + l),
                          (a.subTitleOpt.title = n ? n + ";" : ""),
                          (a.imgOpt.src = i[0].url),
                          e.push(a);
                      }),
                      e
                    );
                  }, []);
                  this.ctx.data.curList = r;
                } catch (e) {
                  this.ctx.data.curList = [];
                }
              },
            },
            ud: !0,
          },
          o = r("9ZMt");
        t.default = o.default.component(u);
      },
      jQ93: function (e, t, r) {
        var a = r("rmWm"),
          s = r.n(a).a,
          c = r("YIkY"),
          u = r.n(c).a;
        function o(e) {
          return (
            !0 ==
              (null != (t = e) &&
                "object" == typeof t &&
                !1 === Array.isArray(t)) &&
            "[object Object]" === Object.prototype.toString.call(e)
          );
          var t;
        }
        var i = function (e) {
          var t, r;
          return (
            !1 !== o(e) &&
            "function" == typeof (t = e.constructor) &&
            !1 !== o((r = t.prototype)) &&
            !1 !== r.hasOwnProperty("isPrototypeOf")
          );
        };
        t.a = function (e) {
          var t,
            r = u(e);
          if ("object" !== r && "array" !== r) return s(e);
          for (
            var a = [],
              c = [{ value: e, key: void 0, ctx: null }],
              o = function () {
                var e = c.shift(),
                  { value: r, key: o, ctx: l } = e;
                a.forEach((e) => {
                  if (e === r) throw new Error("Deep copy circular structure");
                });
                var { value: n, needCycle: d } = (function (e) {
                  switch (u(e)) {
                    case "object":
                      return i(e)
                        ? { value: new e.constructor(), needCycle: !0 }
                        : { value: e, needCycle: !1 };
                    case "array":
                      return { value: new e.constructor(), needCycle: !0 };
                    default:
                      return { value: s(e), needCycle: !1 };
                  }
                })(r);
                l ? (l[o] = n) : (t = n),
                  d && a.push(r),
                  d &&
                    Object.keys(r).forEach((e) => {
                      c.push({ value: r[e], key: e, ctx: n });
                    });
              };
            c.length > 0;

          )
            o();
          return t;
        };
      },
    }
  )
);
