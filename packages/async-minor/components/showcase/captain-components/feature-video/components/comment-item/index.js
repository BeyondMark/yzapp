var r = require("~/r");
r("NWSB", {
  NWSB: function (e, t) {
    Component({
      options: { addGlobalClass: !0 },
      properties: { comment: Object, index: Number },
      data: { comment: "" },
      methods: {
        handleClickCommentHeart() {
          var { comment: e, index: t } = this.data;
          this.triggerEvent("tapheart", { comment: e, index: t });
        },
      },
    });
  },
});
