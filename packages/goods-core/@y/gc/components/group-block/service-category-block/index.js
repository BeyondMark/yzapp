"use strict";
var r = require("~/r");
r(
  "eHcp",
  Object.assign({}, require("~/v.js").modules, {
    eHcp: function (e, t, o) {
      o.r(t);
      var r = o("Fcif"),
        a = o("zMoS"),
        i = {
          props: { opt: Object },
          data: () => ({ showPopupCategory: !1 }),
          computed: {
            showCategoryBar() {
              var e,
                t,
                { showCategoryParam: o } =
                  null == (e = this.opt) ? void 0 : e.shopConfig;
              return !!(
                !(null != (t = this.opt) && t.goodsBaseInfo.isOutlink) &&
                +o &&
                this.categoryBarTitle
              );
            },
            itemCatePropDetailModel() {
              var e;
              return Object(a.a)(
                null == (e = this.opt) ? void 0 : e.goodsBaseInfo,
                "itemCatePropDetailModel",
                {}
              );
            },
            categoryBarTitle() {
              var e = this.itemCatePropDetailModel.propNameList || [];
              return 0 === e.length ? "" : e.slice(0, 2).join("; ");
            },
            categoryBarValue() {
              return (
                this.itemCatePropDetailModel.propertiesDetailModels || []
              ).map((e) => {
                var t = (e.valNames || []).join("，");
                return Object(r.a)({}, e, { valNamesStr: t });
              });
            },
            themeVars() {
              var e;
              return (null == (e = this.opt) ? void 0 : e.themeVars) || "";
            },
          },
          created() {},
          methods: {
            handleShowPopupCategory() {
              this.showPopupCategory = !0;
            },
            handleHidePopupCategory() {
              this.showPopupCategory = !1;
            },
          },
          ud: !0,
        },
        s = o("9ZMt");
      t.default = s.default.component(i);
    },
  })
);
