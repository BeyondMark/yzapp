"use strict";
var r = require("~/r");
r(
  "dqVO",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    dqVO: function (t, e, s) {
      s.r(e);
      var i = s("rqVN");
      Object(i.b)({
        relations: { "../order-cell-group/index": { type: "parent" } },
        properties: {
          mode: String,
          items: {
            type: Array,
            observer() {
              this.computeDisplayedItems();
            },
          },
          giftAlias: String,
          status: String,
          action: String,
          actionType: String,
        },
        data: { isFirstCell: !0, showAllItems: !1, displayedItems: [] },
        attached() {
          this.computeDisplayedItems();
        },
        methods: {
          checkMoreItems() {
            var t = !this.data.showAllItems;
            this.setYZData({ showAllItems: t }),
              t && this.computeDisplayedItems(t);
          },
          computeDisplayedItems(t) {
            this.data.items.length > 0 &&
              (t || this.data.showAllItems
                ? this.setYZData({ displayedItems: this.data.items })
                : this.setYZData({ displayedItems: [this.data.items[0]] }));
          },
          doCellAction() {
            this.triggerEvent("cellaction", {
              actionType: this.data.actionType || "",
              alias: this.data.giftAlias || "",
            });
          },
          doCellClick() {
            this.triggerEvent("celltap", {
              actionType: this.data.actionType || "",
              alias: this.data.giftAlias || "",
            });
          },
          updateIsLastElement(t) {
            this.setYZData({ isFirstCell: t });
          },
        },
      });
    },
  })
);
