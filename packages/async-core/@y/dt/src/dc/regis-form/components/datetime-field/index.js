"use strict";
var r = require("~/r");
r(
  "t5m8",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    t5m8: function (e, t, a) {
      a.r(t);
      var i = a("03az"),
        l = new Date(String(new Date().getFullYear() - 120)).getTime(),
        r = new Date().getTime(),
        d = {
          props: {
            fieldStyle: { type: String, default: "" },
            fieldInfo: {
              type: Object,
              default: () => ({
                itemId: "",
                feItemCustomName: "",
                placeholder: "",
              }),
            },
            fieldValue: { type: String, default: "" },
          },
          data: () => ({
            showDateSelector: !1,
            dateValue: new Date().getTime(),
            minDate: l,
            maxDate: r,
          }),
          computed: {
            fieldLabel() {
              var { fieldInfo: e } = this,
                { hasChangedName: t, itemName: a, feItemCustomName: i } = e;
              return t ? i : a;
            },
          },
          methods: {
            openDateActionsheet() {
              this.showDateSelector = !0;
            },
            cancelSelectDate() {
              this.showDateSelector = !1;
            },
            confirmSelectDate(e) {
              this.cancelSelectDate();
              var { fieldInfo: t } = this,
                a = new Date(e),
                l = Object(i.b)(a, "yyyy-MM-dd");
              this.$emit("change", { id: t.itemId, value: l });
            },
          },
          ud: !0,
        },
        m = a("9ZMt");
      t.default = m.default.component(d);
    },
  })
);
