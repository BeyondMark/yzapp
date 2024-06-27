"use strict";
var r = require("~/r");
r(
  "hH9c",
  Object.assign({}, require("~/v.js").modules, {
    hH9c: function (t, e, i) {
      i.r(e);
      var s = i("Fcif"),
        a = i("BZkp"),
        c = i("Zqpg"),
        d = {
          name: "t-tree-select",
          options: { multipleSlots: !0 },
          mixins: [
            Object(c.a)({
              externalClasses: [
                "main-item-class",
                "content-item-class",
                "main-active-class",
                "content-active-class",
                "main-disabled-class",
                "content-disabled-class",
              ],
            }),
          ],
          props: {
            items: Array,
            activeId: [Number, Array],
            mainActiveIndex: { type: Number, default: 0 },
            height: { type: [Number, String], default: 300 },
            max: { type: Number, default: 1 / 0 },
            selectedIcon: { type: String, default: "success" },
          },
          data: () => ({ subItems: [] }),
          computed: {
            styles() {
              return {
                root: "height: " + Object(a.b)(this.height),
                mainActive:
                  "t-tree-select__nitem--active " + this.mainActiveClass,
                mainDisabled:
                  "t-tree-select__nitem--disabled " + this.mainDisabledClass,
                contentActive:
                  "t-tree-select__item--active " + this.contentActiveClass,
                contentDisabled:
                  "t-tree-select__item--disabled " + this.contentDisabledClass,
              };
            },
            isMulti() {
              return Array.isArray(this.activeId);
            },
          },
          watch: {
            items() {
              this.updateSubItems();
            },
            mainActiveIndex() {
              this.updateSubItems();
            },
            activeId() {
              this.updateSubItems();
            },
          },
          created() {
            this.updateSubItems();
          },
          methods: {
            onSelectItem(t) {
              if (!t.disabled)
                if (this.isMulti) {
                  var e = this.activeId.length >= this.max,
                    i = this.activeId.indexOf(t.id) > -1;
                  (e && !i) || this.$emit("click-item", t);
                } else this.$emit("click-item", t);
            },
            onClickNav(t) {
              this.items[t].disabled || this.$emit("click-nav", { index: t });
            },
            updateSubItems() {
              var { items: t, mainActiveIndex: e } = this,
                { children: i = [] } = t[e] || {},
                a = i.map((t) =>
                  Object(s.a)({}, t, {
                    active: this.isMulti
                      ? this.activeId.indexOf(t.id) > -1
                      : this.activeId === t.id,
                  })
                );
              this.subItems = a;
            },
          },
          ud: !0,
        },
        n = i("9ZMt");
      e.default = n.default.component(d);
    },
  })
);
