"use strict";
var r = require("~/r");
r(
  "P1MD",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    P1MD: function (t, e, a) {
      a.r(e);
      var r = a("a1Mm"),
        i = a("6i0Q"),
        l = a("9KEa"),
        { platform: s } = Object(l.b)();
      Component({
        externalClasses: ["external-class"],
        options: { multipleSlots: !0, addGlobalClass: !0 },
        properties: {
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
          courseTypeName: { type: String, value: "" },
        },
        data: { _subtitle: "", isIOS: "ios" === s },
        attached() {
          this.setData({
            _thumbnail: Object(r.a)(this.data.thumbnail, "!220x220.jpg"),
          }),
            i.a.getThemeColor("general").then((t) => {
              this.setData({ themeGeneral: t });
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
