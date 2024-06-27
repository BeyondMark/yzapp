"use strict";
var r = require("~/r");
r(
  "Wv5q",
  Object.assign({}, require("~/v.js").modules, {
    Wv5q: function (o, e, t) {
      t.r(e);
      var i = t("YeA1"),
        s = {
          data: () => ({
            showNotice: !1,
            tradeTag: {},
            dialogMode: "",
            themeColors: {},
          }),
          created() {
            Object(i.b)(this, ["tradeTag", "themeColors"]);
          },
          methods: {
            onClickConsumersNotice() {
              (this.dialogMode = "consumerNotice"), (this.showNotice = !0);
            },
            onConfirmConsumersNotice() {
              this.showNotice = !1;
            },
            onClickImportNotice() {
              (this.dialogMode = "importNotice"), (this.showNotice = !0);
            },
          },
          ud: !0,
        },
        r = t("9ZMt");
      e.default = r.default.component(s);
    },
  })
);
