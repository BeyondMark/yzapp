"use strict";
var r = require("~/r");
r(
  "Wl8D",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      W1Ke: function (e, t, o) {
        function i() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = [];
          return (
            e.forEach(function (e) {
              ((null == e ? void 0 : e.propValueList) || []).forEach(function (
                e
              ) {
                t.push(e.propValueName);
              });
            }),
            t.join("，")
          );
        }
        o.d(t, "a", function () {
          return i;
        });
      },
      Wl8D: function (e, t, o) {
        o.r(t);
        var i = o("9ZMt"),
          a = o("mztD"),
          s = o("YeA1"),
          n = o("mhiq"),
          r = {
            HAITAO: Object(a.a)(
              "public_files/3a774609c08dc284f27ba5a64be85fa6.png"
            ),
            PERIOD_BUY: Object(a.a)(
              "public_files/61954b0fdd8319a9c5722f16ca2e31de.png"
            ),
            MEMBER_DISCOUNT: Object(a.a)(
              "cdn/FkhVnpHh7ZwFAvBaUwO8B0F2Gf4V-1.png"
            ),
            IS_DRUG_GOOD: Object(a.a)("path/to/cdn/dir/isDrugTag_3x.png"),
          },
          c = {
            props: {
              goods: Object,
              activityId: Number,
              isCanChoose: { type: Boolean, default: !0 },
              isChoose: { type: Boolean, default: !1 },
              customStyle: { type: String, default: "" },
              cardStyle: { type: String, default: "" },
              mustChoose: { type: Boolean, default: !1 },
              canChooseSku: { type: Boolean, default: !0 },
              needTag: { type: Boolean, default: !0 },
            },
            data: () => ({
              GOODS_TAG_MAP: r,
              themeGeneralColor: "",
              isRetailWeappScene: !1,
            }),
            computed: {
              goodsTitleTag() {
                var e,
                  t,
                  o,
                  { settlementRule: i } = this.goods,
                  { settlementMark: a } = i || {};
                return "1" ===
                  (null == (e = this.goods) ||
                  null == (t = e.bizExtension) ||
                  null == (o = t.cartBizMark)
                    ? void 0
                    : o.IS_PRESCRIPTION_DRUG)
                  ? r.IS_DRUG_GOOD
                  : r[a] || "";
              },
              isInvalid() {
                return !1 === this.goods.isAvailable;
              },
              checkboxDisable() {
                return this.isInvalid;
              },
              iconStyle() {
                return this.checkboxDisable
                  ? "background-color: #ebedf0; border-radius: 18px; color: #c8c9cc;"
                  : "";
              },
              iconName() {
                return this.mustChoose ||
                  (this.isChoose && !this.checkboxDisable)
                  ? "checked"
                  : "circle";
              },
              imgUrl() {
                var { attachmentUrl: e, imgUrl: t } = this.goods;
                return Object(a.a)(e || t, "!300x300.jpg");
              },
              skuStr() {
                return Object(n.a)(this.goods);
              },
            },
            mounted() {
              var e = this;
              Object(s.b)(
                this,
                {
                  themeColors: function (t) {
                    void 0 === t && (t = {});
                    var o = t.general;
                    e.themeGeneralColor = o;
                  },
                  isRetailWeappScene: (e) => {
                    this.isRetailWeappScene = !!e;
                  },
                },
                { isSetData: !1 }
              );
            },
            methods: {
              goToGoodsPage() {
                var { alias: e } = this.goods;
                e &&
                  i.default.navigate({
                    url: "/pages/goods/detail/index?alias=" + e,
                  });
              },
              chooseGoods() {
                if (
                  !(this.checkboxDisable || (this.isChoose && this.mustChoose))
                ) {
                  var e = this.isChoose ? "remove" : "add",
                    t = { rangeType: "single", goods: this.goods, type: e };
                  this.$emit("change-item-checked", t);
                }
              },
              changeSku() {
                this.isRetailWeappScene ||
                  this.$emit("change-sku", {
                    activityId: this.activityId,
                    goods: this.goods,
                  });
              },
            },
            ud: !0,
          };
        t.default = i.default.component(c);
      },
    }
  )
);
