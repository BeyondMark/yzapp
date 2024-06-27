"use strict";
var r = require("~/r");
r(
  "qNB7",
  Object.assign({}, require("~/v.js").modules, {
    qNB7: function (e, t, i) {
      i.r(t);
      var a = i("US/N"),
        s = {
          name: "AttributeRegion",
          props: { item: { type: Object } },
          data: () => ({
            showRegionSelector: !1,
            regionInfo: {},
            showValue: "",
            areaValue: "",
          }),
          created() {
            this.item.value && (this.areaValue = this.item.value),
              this.item.extValue && (this.showValue = this.item.extValue);
          },
          computed: {
            displayValue() {
              return this.showValue || "请选择" + this.item.name;
            },
          },
          methods: {
            handleSelectRegion() {
              Object(a.default)({
                method: "GET",
                path: "/wscuser/membercenter/setting/getAllRegion.json",
              }).then((e) => {
                (this.regionInfo = e || {}),
                  this.item.value && (this.areaValue = this.item.value),
                  this.item.extValue && (this.showValue = this.item.extValue),
                  (this.showRegionSelector = !0),
                  this.$emit("withSwitchOtherPopup", !0);
              });
            },
            handleConfirm(e) {
              this.showValue = e.values.map((e) => e.name).join(" ");
              var t = e.values[e.values.length - 1].code;
              (this.areaValue = t),
                this.$emit("onChange", { id: this.item.attributeId, value: t }),
                this.handleClose();
            },
            handleClose() {
              (this.showRegionSelector = !1),
                this.$emit("withSwitchOtherPopup", !1);
            },
          },
          ud: !0,
        },
        h = i("9ZMt");
      t.default = h.default.component(s);
    },
  })
);
