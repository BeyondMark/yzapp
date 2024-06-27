"use strict";
var r = require("~/r");
r(
  "3HJW",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "3HJW": function (e, t, a) {
      a.r(t);
      var r = a("py6f"),
        i = a("NeL/"),
        o = a("6MKc"),
        d = [];
      Object(r.a)({
        field: !0,
        classes: ["title-class"],
        relation: Object(i.a)("dropdown-item", function () {
          this.updateItemListData();
        }),
        props: {
          activeColor: { type: String, observer: "updateChildrenData" },
          overlay: { type: Boolean, value: !0, observer: "updateChildrenData" },
          zIndex: { type: Number, value: 10 },
          duration: {
            type: Number,
            value: 200,
            observer: "updateChildrenData",
          },
          direction: {
            type: String,
            value: "down",
            observer: "updateChildrenData",
          },
          safeAreaTabBar: { type: Boolean, value: !1 },
          closeOnClickOverlay: {
            type: Boolean,
            value: !0,
            observer: "updateChildrenData",
          },
          closeOnClickOutside: { type: Boolean, value: !0 },
        },
        data: { itemListData: [] },
        beforeCreate() {
          var { windowHeight: e } = Object(o.e)();
          (this.windowHeight = e), d.push(this);
        },
        destroyed() {
          d = d.filter((e) => e !== this);
        },
        methods: {
          updateItemListData() {
            this.setData({ itemListData: this.children.map((e) => e.data) });
          },
          updateChildrenData() {
            this.children.forEach((e) => {
              e.updateDataFromParent();
            });
          },
          toggleItem(e) {
            this.children.forEach((t, a) => {
              var { showPopup: r } = t.data;
              a === e ? t.toggle() : r && t.toggle(!1, { immediate: !0 });
            });
          },
          close() {
            this.children.forEach((e) => {
              e.toggle(!1, { immediate: !0 });
            });
          },
          getChildWrapperStyle() {
            var { zIndex: e, direction: t } = this.data;
            return Object(o.d)(this, ".van-dropdown-menu").then((a) => {
              var { top: r = 0, bottom: i = 0 } = a,
                d = "down" === t ? i : this.windowHeight - r,
                s = "z-index: " + e + ";";
              return (s +=
                "down" === t
                  ? "top: " + Object(o.a)(d) + ";"
                  : "bottom: " + Object(o.a)(d) + ";");
            });
          },
          onTitleTap(e) {
            var { index: t } = e.currentTarget.dataset;
            this.children[t].data.disabled ||
              (d.forEach((e) => {
                e && e.data.closeOnClickOutside && e !== this && e.close();
              }),
              this.toggleItem(t));
          },
        },
      });
    },
  })
);
