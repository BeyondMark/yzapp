"use strict";
var r = require("~/r");
r(
  "drG+",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "drG+": function (e, t, r) {
      r.r(t);
      var a = r("JdrY"),
        n = r("9ZMt"),
        i = {
          mixins: [r("KrsW").b.externalClassesMixin(["share-corner-class"])],
          props: {
            hasShareActivity: Boolean,
            shareActivityIcon: Number,
            item: {
              extraData: String,
              iconUrl: String,
              independent: Boolean,
              navType: Number,
              order: Number,
              status: Number,
              title: String,
            },
            index: Number,
            forbidShare: Boolean,
            typeMap: a.j,
            gap: Number,
            im: { sourceParam: String, businessId: String },
            lineOnlyIndependent: Boolean,
            shareBlockStyle: { type: String, default: "" },
          },
          computed: {
            itemBgStyle() {
              return (
                "background-image: url(" +
                this.item.iconUrl +
                "); transform: translateY(" +
                n.default.style.useTpx(-this.index * this.gap) +
                ");"
              );
            },
            subBgColorStyle() {
              return (
                "transform: translateY(" +
                n.default.style.useTpx(-this.index * this.gap) +
                "); transition: all 0.24s"
              );
            },
          },
          watch: {
            shareBlockStyle: {
              handler(e) {
                e && this.$nextTick(() => {});
              },
              immediate: !0,
            },
          },
          methods: {
            handleNavTap(e) {
              this.$emit("handle-nav-tap", e);
            },
            onContactBack(e) {
              this.$emit("contact", e.detail);
            },
          },
          ud: !0,
        };
      t.default = n.default.component(i);
    },
  })
);
