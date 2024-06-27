"use strict";
var r = require("~/r");
r(
  "vYBj",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      vYBj: function (e, a, t) {
        t.r(a);
        var r = t("Jabn"),
          d = t("S8xx"),
          i = {
            props: {
              fieldStyle: { type: String, default: "" },
              fieldInfo: {
                type: Object,
                default: () => ({
                  itemId: "",
                  feItemCustomName: "",
                  feRequired: !0,
                }),
              },
              fieldValue: { type: Array, default: () => [] },
              detailAddress: { type: Boolean, default: !0 },
            },
            data: () => ({
              address: "",
              showSelectArea: !1,
              areaList: {},
              areaCode: "",
              loadingArea: !1,
            }),
            computed: {
              convertedVal() {
                var { fieldValue: e } = this;
                return Object(d.a)(e);
              },
              fieldLabel() {
                var { fieldInfo: e } = this,
                  { hasChangedName: a, itemName: t, feItemCustomName: r } = e;
                return a ? r : t;
              },
            },
            created() {
              this.getAreaList();
            },
            methods: {
              getAreaList() {
                (this.loadingArea = !0),
                  Object(r.a)()
                    .then((e) => {
                      (this.areaList = e), (this.loadingArea = !1);
                    })
                    .catch(() => {
                      this.loadingArea = !1;
                    });
              },
              openAreaActionsheet() {
                this.showSelectArea = !0;
              },
              cancelSelectArea() {
                this.showSelectArea = !1;
              },
              confirmArea(e) {
                var { values: a } = e,
                  { fieldInfo: t, address: r } = this,
                  d = a[a.length - 1] || {},
                  { code: i } = d;
                this.cancelSelectArea(),
                  (this.areaCode = i),
                  this.$emit("change", { id: t.itemId, value: a, address: r });
              },
              onAddrInput(e) {
                var { value: a } = e,
                  { fieldInfo: t, fieldValue: r } = this;
                (this.address = a),
                  this.$emit("change", { id: t.itemId, value: r, address: a });
              },
            },
            ud: !0,
          },
          s = t("9ZMt");
        a.default = s.default.component(i);
      },
    }
  )
);
