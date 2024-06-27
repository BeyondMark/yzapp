"use strict";
var r = require("~/r");
r(
  "Qzh4",
  Object.assign({}, require("~/c.js").modules, {
    Qzh4: function (a, t, e) {
      e.r(t);
      var s = e("0i4I");
      Object(s.a)({
        props: {
          value: { type: Boolean, default: !1 },
          zIndex: { type: Number, default: 100 },
        },
        data: { data: null, loading: !1 },
        watch: {
          value(a) {
            this.data.data ||
              !0 !== a ||
              (this.setData({ loading: !0 }),
              wx.request({
                url: "https://h5.youzan.com/wscassets/api/security/guarantee/fetchQualification",
                success: (a) => {
                  var { data: t } = a.data;
                  this.setData({ data: t, loading: !1 });
                },
              }));
          },
        },
        methods: {
          onClose() {
            this.$emit("close");
          },
          showImg() {
            wx.previewImage({ urls: [this.data.data.img] });
          },
        },
      });
    },
  })
);
