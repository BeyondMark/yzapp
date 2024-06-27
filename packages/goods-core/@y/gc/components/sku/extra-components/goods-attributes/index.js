"use strict";
var r = require("~/r");
r(
  "g5RE",
  Object.assign({}, require("~/v.js").modules, {
    g5RE: function (e, t, i) {
      i.r(t);
      var s = i("Fcif"),
        r = i("US/N"),
        d = [
          "discount",
          "points",
          "timelimitedDiscount",
          "seckill",
          "luckyDrawGroup",
          "inSourcingFission",
          "helpCut",
        ],
        l = ["seckill", "inSourcingFission"],
        c = {
          props: { opt: Object },
          data: () => ({
            selected: {},
            selectedStr: "",
            unSelectNameList: [],
            selectValueList: [],
            originPrice: {},
            totalPrice: 0,
            diffPrice: {},
          }),
          computed: {
            skuId() {
              return this.opt.skuId;
            },
          },
          watch: {
            opt: {
              handler() {
                this.init();
              },
              immediate: !0,
            },
            skuId() {
              var { skuId: e, price: t } = this.opt;
              this.originPrice[e] || (this.originPrice[e] = t),
                this.setPluginData();
            },
          },
          methods: {
            init() {
              var {
                goodsId: e,
                goodsAttributes: t = [],
                skuId: i,
                price: s,
                reset: r = !1,
              } = this.opt;
              t.length &&
                (e !== this.goodsId || r) &&
                ((this.selected = {}), this.resetData(e)),
                this.originPrice[i] || (this.originPrice[i] = s),
                this.setPluginData();
            },
            getUnSelectNameList() {
              (this.unSelectNameList = []),
                (this.opt.goodsAttributes || []).forEach((e) => {
                  var { kId: t, k: i } = e,
                    s = this.selected[t];
                  (!s || s.length < 1) && this.unSelectNameList.push(i);
                });
            },
            setSeletedValue() {
              var e = Object.keys(this.selected).reduce(
                (e, t) => (
                  (this.selected[t] || []).forEach((i) => {
                    e += t + ":" + i + ";";
                  }),
                  e
                ),
                ""
              );
              this.selectedStr = e;
            },
            getUpdatePrice(e) {
              var t,
                { activityName: i, goodsId: c, skuId: a, kdtId: h } = e;
              if (this.unSelectNameList.length) return Promise.resolve(-1);
              var o = d.indexOf(i) > -1,
                u = Object.values(this.diffPrice).reduce(
                  (e, t) => (t ? e + t : e),
                  this.originPrice[a] || 0
                );
              if (!o) return Promise.resolve(u);
              var n = (
                  (null == (t = this.opt) ? void 0 : t.goodsAttributes) || []
                ).map((e) => {
                  var t = e.v.filter(
                    (t) => (this.selected[e.kId] || "").indexOf(t.id) > -1
                  );
                  return Object(s.a)({}, e, { v: t });
                }),
                p = this.opt.activityInfo || {},
                f = "";
              f =
                l.indexOf(p.activityType) > -1
                  ? p.activityAlias
                  : "" + (p.activityId || "");
              var g = { type: p.activityType || "", identification: f };
              return Object(r.default)({
                path: "/wscgoods/detail-api/calculate-price.json",
                method: "POST",
                data: {
                  itemId: c,
                  skuId: a,
                  itemSalePropList: JSON.stringify(n),
                  activity: JSON.stringify(g),
                  kdtId: h,
                },
              }).then((e) =>
                !e || (void 0 === e.umpTotalPrice && void 0 === e.pointNum)
                  ? Promise.resolve(u)
                  : Promise.resolve(e.umpTotalPrice || 0)
              );
            },
            getValidteMessage() {
              if (this.unSelectNameList.length) {
                var e = (this.opt.goodsAttributes || []).reduce(
                    (e, t) => (!1 !== t.isNecessary && (e[t.kId] = t.k), e),
                    {}
                  ),
                  t = Object.keys(e)
                    .filter(
                      (e) => !this.selected[e] || this.selected[e].length < 1
                    )
                    .map((t) => e[t]);
                if (t.length)
                  return { goodsAttributes: "请选择" + t.join("；") };
              }
              return {};
            },
            setPluginData() {
              var e, t;
              if (
                null != (e = this.opt) &&
                null != (t = e.goodsAttributes) &&
                t.length
              ) {
                var {
                  activityName: i,
                  goodsId: s,
                  kdtId: r,
                  skuId: d,
                } = this.opt;
                this.setSeletedValue(),
                  this.getUnSelectNameList(),
                  this.getUpdatePrice({
                    activityName: i,
                    goodsId: s,
                    kdtId: r,
                    skuId: d,
                  }).then((e) => {
                    this.$emit("change", {
                      name: "goodsAttributes",
                      priority: 20,
                      pluginsResult: { goodsAttributes: this.selected },
                      invalidMessage: this.getValidteMessage(),
                      view: {
                        price: e,
                        selectTextExtra: {
                          selectValueList: this.selectValueList,
                          unSelectNameList: this.unSelectNameList,
                        },
                      },
                    });
                  });
              }
            },
            onSelect(e) {
              var { attribute: t, skuValue: i } = e,
                { kId: s, isMultiple: r, v: d } = t,
                { id: l, name: c, price: a } = i,
                h = this.selected[s];
              if (h && 0 !== h.length) {
                if (h.indexOf(l) > -1)
                  (this.totalPrice -= a),
                    (this.diffPrice[l] = void 0),
                    this.selected[s].splice(h.indexOf(l), 1),
                    this.selectValueList.splice(
                      this.selectValueList.indexOf(c),
                      1
                    );
                else if (h.length > 0 && r)
                  this.selected[s].push(l),
                    (this.totalPrice += a),
                    (this.diffPrice[l] = a),
                    this.selectValueList.push(c);
                else if (h.length > 0 && !r) {
                  var o = d.filter((e) => e.id === h[0]).pop();
                  (this.selected[s] = [l]),
                    (this.totalPrice = this.totalPrice - o.price + a),
                    (this.diffPrice[h[0]] = void 0),
                    (this.diffPrice[l] = a),
                    this.selectValueList.splice(
                      this.selectValueList.indexOf(o.name),
                      1
                    ),
                    this.selectValueList.push(c);
                }
              } else
                (this.selected[s] = [l]),
                  (this.totalPrice += a),
                  (this.diffPrice[l] = a),
                  this.selectValueList.push(c);
              this.setPluginData();
            },
            resetData(e) {
              var t = {},
                i = [];
              (this.originPrice = {}),
                (this.totalPrice = 0),
                (this.diffPrice = {});
              var r = this.selected,
                {
                  propertyIds: d,
                  reset: l,
                  goodsAttributes: c = [],
                } = this.opt || {};
              l &&
                (d || []).forEach((e) => {
                  var t = c.find((t) =>
                    ((null == t ? void 0 : t.v) || []).find((t) => t.id === e)
                  );
                  if (t) {
                    var { kId: i } = t;
                    r[i] ? r[i].push(e) : (r[i] = [e]);
                  }
                }),
                c.forEach((e) => {
                  var s,
                    d =
                      r[e.kId] ||
                      (null == (s = this.opt.selected) ? void 0 : s[e.kId]);
                  e.v &&
                    1 === e.v.length &&
                    !d &&
                    ((t[e.kId] = [e.v[0].id]),
                    i.push(e.v[0].name),
                    (this.totalPrice += e.v[0].price),
                    (this.diffPrice[e.v[0].id] = e.v[0].price)),
                    d &&
                      d.length &&
                      ((t[e.kId] = []),
                      e.v.forEach((s) => {
                        d.indexOf(s.id) > -1 &&
                          (i.push(s.name),
                          t[e.kId].push(s.id),
                          (this.totalPrice += s.price),
                          (this.diffPrice[s.id] = s.price));
                      }));
                }),
                (this.selected = Object(s.a)({}, t)),
                (this.goodsId = e);
            },
          },
          ud: !0,
        },
        a = i("9ZMt");
      t.default = a.default.component(c);
    },
  })
);
