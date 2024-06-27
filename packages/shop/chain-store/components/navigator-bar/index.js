var r = require("~/r");
r("/ect", {
  "/ect": function (a, o) {
    Component({
      properties: {
        title: { type: String, value: "", observer: "changeTitle" },
        loading: { type: Boolean, value: !1, observer: "changeLoading" },
        frontColor: {
          type: String,
          observer: "changeBarColor",
          value: "#ffffff",
        },
        backgroundColor: { type: String, observer: "changeBarColor" },
        animation: { type: Object, observer: "changeBarColor" },
      },
      methods: {
        changeTitle(a) {
          wx.setNavigationBarTitle({ title: a });
        },
        changeLoading(a) {
          a ? wx.showNavigationBarLoading() : wx.hideNavigationBarLoading();
        },
        changeBarColor() {
          if (!this.animating) {
            this.animating = !0;
            var a = this.data.frontColor,
              o = "white" === a ? "#ffffff" : "black" === a ? "#000000" : a;
            wx.setNavigationBarColor({
              frontColor: o,
              backgroundColor: this.data.backgroundColor,
              animation: this.data.animation,
              success: () => {
                setTimeout(() => {
                  this.animating = !1;
                }, this.data.animation.duration);
              },
            });
          }
        },
      },
    });
  },
});
