"use strict";
var r = require("~/r");
r(
  "8g/u",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "8g/u": function (t, e, i) {
      i.r(e);
      var o = i("9DLJ"),
        a = {
          name: "TabbarMainIcon",
          props: {
            isMainIcon: { type: Boolean, default: !1 },
            rudderStyle: { type: [String, Object] },
            type: { type: String, default: "" },
            iconPath: { type: String, default: "" },
            selectedIconPath: { type: String, default: "" },
            active: { type: Boolean, default: !1 },
            activeColor: { type: String, default: o.c.ACTIVE },
            unactivatedColor: { type: String, default: o.c.UNACTIVATED },
            text: { type: String, default: "" },
            navStyle: { type: Number, default: 1 },
            linkInfo: { type: Object, default: () => ({}) },
            notCoexist: { type: Boolean, default: !1 },
            imgMode: { type: String, default: "center" },
          },
          data: () => ({ isShowSrc: !1, iconName: "", size: 20 }),
          computed: {
            coexist() {
              var { active: t, notCoexist: e } = this;
              return !e || t;
            },
            showText() {
              var { active: t, notCoexist: e } = this;
              return !e || !t;
            },
            color() {
              return (
                "color: " +
                (this.active ? this.activeColor : this.unactivatedColor)
              );
            },
            iconStyle() {
              return this.color + ";font-size: " + this.size + "px";
            },
            textStyle() {
              var t = this.notCoexist && !this.active ? 0 : 4;
              return (
                this.color +
                ";font-size:" +
                (this.notCoexist ? 12 : 10) +
                "px;margin-top:" +
                t +
                "px;line-height:14px"
              );
            },
            isShowContact() {
              var t;
              return (
                "chat" === (null == (t = this.linkInfo) ? void 0 : t.linkType)
              );
            },
            iconStyleName() {
              var t = "";
              return (
                (t =
                  this.type && this.active
                    ? this.type + "-active"
                    : this.type
                    ? this.type
                    : this.active
                    ? this.selectedIconPath
                    : this.iconPath),
                (this.isShowSrc =
                  0 === t.indexOf("http") ||
                  0 === t.indexOf("data:image") ||
                  0 === t.indexOf("//")),
                (this.iconName = t),
                "yt-" + t
              );
            },
            mainImgStyle() {
              return "fill" === this.imgMode
                ? "width:58px !important; height:58px !important; border-radius:50%; position:absolute; top:-1px; left:-1px"
                : "";
            },
          },
          methods: {
            isSrc: (t) =>
              0 === t.indexOf("http") ||
              0 === t.indexOf("data:image") ||
              0 === t.indexOf("//"),
          },
          ud: !0,
        },
        n = i("9ZMt");
      e.default = n.default.component(a);
    },
  })
);
