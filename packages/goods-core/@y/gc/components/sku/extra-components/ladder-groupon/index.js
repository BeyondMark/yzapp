"use strict";
var r = require("~/r");
r(
  "C0vF",
  Object.assign({}, require("~/v.js").modules, {
    C0vF: function (e, r, i) {
      i.r(r);
      var t = i("Fcif"),
        s = i("NHEX"),
        a = i.n(s),
        d = i("jmjq"),
        u = i.n(d),
        c = {
          props: { opt: Object },
          data: () => ({ isLadderGroupon: !1, ladderList: [], curLadder: -1 }),
          watch: {
            opt: {
              handler() {
                this.init();
              },
              immediate: !0,
            },
          },
          methods: {
            init() {
              (this.isLadderGroupon =
                !!this.opt.ladderGroupOn &&
                "ladderGroupOn" === this.opt.activityName),
                (this.ladderList = this.getLadderList()),
                this.setPluginsData();
            },
            getLadderList() {
              var { skuId: e, ladderGroupOn: r, noneSku: i } = this.opt,
                s = a()(r, "ladderList", {});
              if (!1 == !!e && !i) {
                var d = ((e) => {
                  var r = {};
                  return (
                    Object.keys(e).forEach((i) => {
                      e[i].forEach((e) => {
                        r[e.scale]
                          ? r[e.scale].push(e.skuPrice)
                          : (r[e.scale] = [e.skuPrice]);
                      });
                    }),
                    r
                  );
                })(s);
                return Object.keys(d).map((e) => {
                  var r = d[e],
                    i = Math.max(...r),
                    t = Math.min(...r);
                  return i === t
                    ? { scale: e, skuPriceString: u()(t) }
                    : { scale: e, skuPriceString: u()(t) + "起" };
                });
              }
              var c = s[e];
              return c && c.length
                ? c.map((e) =>
                    Object(t.a)({}, e, { skuPriceString: u()(e.skuPrice) })
                  )
                : [];
            },
            getValidteMessage() {
              return this.isLadderGroupon && -1 === this.curLadder
                ? { ladderGroupOn: "请选择拼团类型" }
                : {};
            },
            setPluginsData() {
              var {
                noneSku: e,
                selectedSkuComb: r,
                ladderGroupOn: i,
              } = this.opt;
              if (i)
                if (this.isLadderGroupon) {
                  var t = {},
                    s = !e && null === r,
                    a = { showPriceRange: -1 === this.curLadder };
                  -1 === this.curLadder ||
                    s ||
                    ((t.ladderGroupOn = {
                      scale: this.ladderList[this.curLadder].scale,
                    }),
                    (a = {
                      price: this.ladderList[this.curLadder].skuPrice,
                      minPrice: this.ladderList[this.curLadder].skuPrice,
                      maxPrice: this.ladderList[this.curLadder].skuPrice,
                      showPriceRange: !1,
                    })),
                    this.$emit("change", {
                      name: "ladderGroupOn",
                      priority: 50,
                      pluginsResult: t,
                      invalidMessage: this.getValidteMessage(),
                      view: a,
                    });
                } else
                  this.$emit("change", {
                    name: "ladderGroupOn",
                    priority: 50,
                    view: {},
                  });
            },
            onSelect(e) {
              (this.isSelect = !0),
                this.curLadder === e
                  ? (this.curLadder = -1)
                  : (this.curLadder = e),
                this.setPluginsData();
            },
          },
          ud: !0,
        },
        n = i("9ZMt");
      r.default = n.default.component(c);
    },
  })
);
