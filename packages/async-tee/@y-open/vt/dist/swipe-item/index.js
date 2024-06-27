"use strict";
var r = require("~/r");
r(
  "0/6i",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "0/6i": function (t, e, i) {
      i.r(e);
      var s = i("Fcif"),
        o = i("BZkp"),
        c = i("wSeO"),
        r = i("Zqpg"),
        a = {
          options: { virtualHost: !0 },
          mixins: [
            Object(r.a)({
              externalClasses: ["custom-class"],
              relation: Object(c.b)("swipe"),
            }),
          ],
          props: { customStyle: { type: Object, default: () => ({}) } },
          data() {
            return {
              size: 0,
              offset: 0,
              vertical: !1,
              itemStyle: this._getItemStyle(),
            };
          },
          created() {
            ["size", "vertical", "offset", "customStyle"].forEach((t) => {
              this.$watch(t, () => {
                this.itemStyle = this._getItemStyle();
              });
            });
          },
          mounted() {
            this.hasMounted = !0;
          },
          methods: {
            _getItemStyle() {
              var { size: t, vertical: e } = this,
                i = {};
              return (
                t &&
                  ((i.visibility = "visible"),
                  (i[e ? "height" : "width"] = t + "px")),
                this.offset &&
                  (i.transform =
                    "translate" + (e ? "Y" : "X") + "(" + this.offset + "px)"),
                Object(o.k)(Object(s.a)({}, this.customStyle || {}, i))
              );
            },
            click() {
              this.$emit("click");
            },
            onTouchStart(t) {
              this.$emit("touchStart", t);
            },
            onTouchMove(t) {
              this.$emit("touchMove", t);
            },
            onTouchEnd(t) {
              this.$emit("touchEnd", t);
            },
          },
        },
        h = i("9ZMt");
      e.default = h.default.component(a);
    },
  })
);
