"use strict";
var r = require("~/r");
r(
  "D5Xh",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      D5Xh: function (e, t, o) {
        o.r(t);
        var s = o("Fcif"),
          i = o("AGZf"),
          a = o("z9IR"),
          d = o("gaeN"),
          l = o("Tewj"),
          r = o("YeA1");
        function h(e) {
          var t = Object(d.b)(this.goods, this.editMode),
            o = {
              checkboxEnabled: () => t,
              iconStyle: () =>
                t
                  ? ""
                  : "background-color: #f7f8fa; border-radius: 18px; color: #c8c9cc;",
              iconName() {
                return this.isChoose && t ? "checked" : "circle";
              },
              iconColor() {
                return this.isChoose && t ? this.themeGeneralColor : "#969799";
              },
              isNotStartSold() {
                var e = new Date().getTime() / 1e3,
                  t = !1;
                return (
                  this.goods.startSoldTime &&
                    this.goods.startSoldTime > e &&
                    (t = !0),
                  t
                );
              },
            };
          return (e && e.length ? e : Object.keys(o)).reduce(
            (e, t) => ((e[t] = o[t].call(this)), e),
            {}
          );
        }
        var n = {
            externalClasses: ["custom-class"],
            props: {
              goods: { type: Object },
              editMode: { type: Boolean },
              activityType: String,
              isChoose: { type: Boolean },
              isCanChoose: { type: Boolean, default: !0 },
              isCanDelete: { type: Boolean, default: !0 },
              isCanStepper: { type: Boolean, default: !0 },
              isActivity: { type: Boolean, default: !1 },
              isSub: { type: Boolean, default: !1 },
              isInvalid: { type: Boolean, default: !1 },
              hideTag: { type: Boolean, default: !1 },
              index: { type: Number, default: 0 },
              total: { type: Number, default: 0 },
              hasPresent: { type: Boolean, default: !1 },
              themeGeneralColor: String,
              themeGeneralAlpha10Color: String,
              themeColors: { type: Object, default: () => ({}) },
              themeTag: { type: Object, default: () => ({}) },
              showEstimatedPrice: { type: Boolean, default: !1 },
              logger: { type: Object, default: () => ({}) },
              themeStyle: { type: String, default: "" },
            },
            data() {
              var e = h.call(this);
              return Object(s.a)({ swipeDisabled: !1 }, e);
            },
            computed: {
              deleteBtnClassName() {
                var e = ["delete-btn"];
                return (
                  0 !== this.index ||
                    this.isInvalid ||
                    this.isActivity ||
                    e.push("border-top-right"),
                  this.index !== this.total - 1 ||
                    this.hasPresent ||
                    e.push("border-bottom-right"),
                  e.join(" ")
                );
              },
            },
            watch: {
              goods() {
                this.updateComputedData([
                  "checkboxEnabled",
                  "iconStyle",
                  "iconName",
                  "iconColor",
                  "isNotStartSold",
                ]);
              },
              editMode() {
                this.updateComputedData([
                  "checkboxEnabled",
                  "iconStyle",
                  "iconName",
                  "iconColor",
                ]);
              },
              isChoose() {
                this.updateComputedData(["iconName", "iconColor"]);
              },
              themeGeneralColor() {
                this.updateComputedData(["iconColor"]);
              },
            },
            created() {
              Object(r.b)(
                this,
                {
                  shopCart: (e) => {
                    var t = Object.entries(this.sumBySameGoodsId(e.items)).map(
                      (e) => {
                        var [t, o] = e;
                        return { goodsId: parseInt(t), num: o };
                      }
                    );
                    l.default.trigger("addCartSuccess", "addCartList", {
                      newGoodsResult: t,
                    });
                  },
                },
                { isSetData: !1 }
              );
            },
            methods: {
              updateComputedData(e) {
                var t = h.call(this, e);
                Object.keys(t).forEach((e) => {
                  this[e] = t[e];
                });
              },
              sumBySameGoodsId: (e) =>
                e.reduce((e, t) => {
                  var { goodsId: o, num: s } = t;
                  return e[o] ? (e[o] += s) : (e[o] = s), e;
                }, {}),
              changeSwipeStatus(e) {
                this.swipeDisabled = e;
              },
              handleCheckboxTap(e) {
                if (
                  (void 0 === e && (e = !0),
                  !this.isCanChoose || (e && !this.checkboxEnabled))
                )
                  return this.goods.startSaleNum &&
                    this.goods.num < this.goods.startSaleNum
                    ? Object(i.a)(
                        "该商品" + this.goods.startSaleNum + "件起售哦"
                      )
                    : this.isNotStartSold
                    ? Object(i.a)(this.goods.disableSelectMsg)
                    : void 0;
                this.$emit("item-checked", {
                  rangeType: "single",
                  type: this.isChoose ? "remove" : "add",
                  goods: this.goods,
                  isActivity: this.isActivity,
                });
              },
              handleItemNumChange(e) {
                this.$emit(
                  "item-num-change",
                  Object(s.a)({}, e, {
                    goods: this.goods,
                    isActivity: this.isActivity,
                  })
                );
              },
              handleItemNumChangeLogger(e) {
                this.$emit("item-num-change-logger", e);
              },
              handleChangeGoodsSku() {
                this.$emit("change-goods-sku", this.goods);
              },
              handleItemDelete(e) {
                var { instance: t, position: o } = e;
                if ("cell" === o) return t.close();
                var s = { goods: this.goods, isActivity: this.isActivity };
                if (this.editMode) {
                  var i = 31 === this.goods.goodsType;
                  a.a
                    .confirm({
                      message: "确定要删除这个" + (i ? "课程" : "") + "么?",
                    })
                    .then(() => {
                      this.$emit("item-delete", s), t.close();
                    })
                    .catch(() => {
                      t.close();
                    });
                } else this.$emit("item-delete", s), t.close();
              },
              goGoodsDetail(e) {
                var { alias: t } = e,
                  o = "/pages/goods/detail/index?alias=" + t;
                this.$emit("to-goods-detail", o);
              },
            },
          },
          c = o("9ZMt");
        t.default = c.default.component(n);
      },
    }
  )
);
