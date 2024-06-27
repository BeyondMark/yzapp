"use strict";
var r = require("~/r");
r(
  "0o4M",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "0o4M": function (e, r, t) {
        t.r(r);
        var m = t("7NcC"),
          s = t("KEq0"),
          i = t.n(s),
          a = {
            name: "review-item-header",
            mixins: [t("KrsW").b.externalClassesMixin(["custom-name-class"])],
            props: {
              item: Object,
              memberLabel: Number,
              rateSize: { type: String, default: "10px" },
              rateColor: { type: String, default: "var(--score, #ff5200)" },
              showDate: { type: Boolean, default: !1 },
              themeTag: { type: Object, default: () => ({}) },
            },
            data: () => ({ svipIcon: i()(m.c, "small") }),
            computed: {
              score() {
                return this.item.score / 20;
              },
              member() {
                return this.item.userLevelModel;
              },
              memberLevel() {
                return 0 == +this.memberLabel && this.member
                  ? i()(m.d[this.member.level] || "", "small")
                  : "";
              },
              memberName() {
                return (
                  (1 == +this.memberLabel &&
                    this.member &&
                    this.member.levelName) ||
                  ""
                );
              },
              isSvipMember() {
                return (this.member || {}).levelGroup === m.b.Svip;
              },
            },
            ud: !0,
          },
          l = t("9ZMt");
        r.default = l.default.component(a);
      },
    }
  )
);
