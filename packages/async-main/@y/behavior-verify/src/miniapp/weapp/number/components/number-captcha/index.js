var r = require("~/r");
r("0ANd", {
  "0ANd": function (e, t) {
    Component({
      properties: { show: Boolean, numberImg: String },
      data: { value: "" },
      methods: {
        handleClose() {
          this.triggerEvent("close");
        },
        handleInputChange(e) {
          this.setData({ value: e.detail });
        },
        handleSubmit() {
          var e = this.data.value.trim();
          4 === e.length
            ? this.triggerEvent("complete", e)
            : wx.showToast({ title: "验证码必须是4位数字", icon: "none" });
        },
      },
    });
  },
});
