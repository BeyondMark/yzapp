var r = require("~/r");
r("mEXe", {
  mEXe: function (t, e) {
    Component({
      options: { addGlobalClass: !0 },
      properties: { good: Object },
      data: { comment: "" },
      methods: {
        onCommentChanged(t) {
          var e = t.detail.value;
          this.setData({ comment: e });
        },
        handleTapCommentBtn() {
          var { comment: t } = this.data;
          t && this.triggerEvent("comment", t);
        },
      },
    });
  },
});
