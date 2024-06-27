"use strict";
var r = require("~/r");
r(
  "XG3N",
  Object.assign({}, require("~/v.js").modules, {
    XG3N: function (e, t, o) {
      o.r(t);
      var i = o("YeA1"),
        h = {
          props: { customStyle: { type: String, default: "" } },
          data: () => ({ kdtId: 0, phone: "" }),
          created() {
            Object(i.b)(this, ["kdtId"]),
              Object(i.b)(this, {
                retailSelfFetchContact: (e) => {
                  var t = null == e ? void 0 : e.phone;
                  t && (this.phone = t);
                },
              });
          },
          methods: {
            getAuhPhone(e) {
              this.$emit("getPhone", (null == e ? void 0 : e.mobile) || "");
            },
            getPhone() {
              this.$emit("getPhone", this.phone);
            },
          },
          ud: !0,
        },
        n = o("9ZMt");
      t.default = n.default.component(h);
    },
  })
);
