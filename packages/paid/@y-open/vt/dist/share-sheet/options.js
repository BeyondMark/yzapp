"use strict";
var r = require("~/r");
r(
  "UvGm",
  Object.assign({}, require("~/v.js").modules, {
    UvGm: function (t, e, o) {
      o.r(e);
      var n = o("Fcif"),
        s = o("m6kV"),
        i = o("Zqpg"),
        r = Object(s.a)("t-share-sheet"),
        c = [
          "qq",
          "link",
          "weibo",
          "wechat",
          "poster",
          "qrcode",
          "weapp-qrcode",
          "wechat-moments",
        ],
        p = {
          name: "t-share-sheet",
          mixins: [Object(i.a)({ externalClasses: ["options-class"] })],
          props: { options: Array, showBorder: Boolean, optionsAlign: String },
          computed: {
            classes() {
              return {
                options:
                  r("options", { border: this.showBorder }) +
                  " " +
                  this.optionsClass,
                option: r("option"),
                icon: r("icon"),
                name: r("name"),
                button: r("button"),
                optionDescription: r("option-description"),
              };
            },
            optionsStyle() {
              return this.optionsAlign
                ? "justify-content: " + this.optionsAlign
                : "";
            },
            icons() {
              return (this.options || []).map((t) => this.getIconURL(t.icon));
            },
          },
          methods: {
            onSelect(t, e) {
              this.$emit("select", Object(n.a)({}, t, { index: e }));
            },
            getIconURL: (t) =>
              -1 !== c.indexOf(t)
                ? "https://img01.yzcdn.cn/vant/share-sheet-" + t + ".png"
                : t,
          },
          ud: !0,
        },
        a = o("9ZMt");
      e.default = a.default.component(p);
    },
  })
);
