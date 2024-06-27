var r = require("~/r");
r("2Snq", {
  "2Snq": function (t, a) {
    Component({
      options: { addGlobalClass: !0 },
      data: { comment: "" },
      methods: {
        onCommentChanged(t) {
          var a = t.detail.value;
          this.setData({ comment: a });
        },
        handleTapCommentBtn() {
          var { comment: t } = this.data;
          t &&
            (this.triggerEvent("addcomment", t), this.setData({ comment: "" }));
        },
      },
    });
  },
});
