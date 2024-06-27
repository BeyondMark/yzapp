"use strict";
var r = require("~/r");
r(
  "grpe",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    grpe: function (t, e, r) {
      r.r(e);
      var a = r("rqVN"),
        i = r("a1Mm");
      Object(a.b)({
        externalClasses: ["external-class"],
        options: { multipleSlots: !0 },
        properties: {
          themeClass: String,
          slots: {
            type: Object,
            value: {
              thumbnail: !1,
              icon: !1,
              title: !1,
              subtitle: !1,
              status: !1,
              label: !1,
            },
          },
          navigateType: { type: String, value: "navigate" },
          url: String,
          thumbnail: String,
          title: String,
          titleTag: String,
          titleTagClass: String,
          supportsMultiLines: Boolean,
          subtitle: {
            type: String,
            observer(t) {
              this.setData({ _subtitle: t.replace(/\n/g, " ") });
            },
          },
          statusList: Array,
          topCornerText: String,
          topTagText: String,
          topCornerClass: String,
          bottomCornerText: String,
          bottomTagText: String,
          bottomCornerClass: String,
          thumbnailHeight: { type: Number, value: 64 },
          thumbnailWidth: { type: Number, value: 110 },
          icon: String,
          collectFormId: { type: Boolean, value: !1 },
        },
        data: { _subtitle: "" },
        attached() {
          this.setYZData({
            _thumbnail: Object(i.a)(this.data.thumbnail, "!220x220.jpg"),
          });
        },
        methods: {
          goTo() {
            this.data.url && wx.navigateTo({ url: this.data.url });
          },
        },
      });
    },
  })
);
