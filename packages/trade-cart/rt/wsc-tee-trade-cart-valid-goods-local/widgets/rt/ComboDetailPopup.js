"use strict";
var r = require("~/r");
r(
  "otXn",
  Object.assign({}, require("~/v.js").modules, {
    VNnE: function (o, t, e) {
      var s = getApp();
      t.a = {
        data: function () {
          return {
            popupBottom: 0,
            noSafeBottom: 0,
            safeBottom: "iPhone-X" === s.deviceType,
          };
        },
        beforeMount: function () {
          var o = this;
          s.isSwitchTab().then(function (t) {
            t &&
              ((o.popupBottom = 49), (o.noSafeBottom = o.safeBottom ? 83 : 49));
          });
        },
      };
    },
    otXn: function (o, t, e) {
      e.r(t);
      var s = {
          mixins: [e("VNnE").a],
          data: () => ({ comboDetail: [], showPopup: !1, scrollTop: 0 }),
          computed: {
            customPopupStyle() {
              var o = 0;
              return (
                (o = this.popupBottom),
                this.safeBottom && (o = this.noSafeBottom),
                "bottom: " + o + "px"
              );
            },
          },
          methods: {
            openPopup(o) {
              var t;
              null != o &&
                null != (t = o.groupList) &&
                t.length &&
                ((this.comboDetail = o.groupList),
                (this.showPopup = !0),
                setTimeout(() => {
                  this.scrollTop = 0 === this.scrollTop ? 0.01 : 0;
                }, 100));
            },
            closePopup() {
              this.showPopup = !1;
            },
          },
          ud: !0,
        },
        p = e("9ZMt");
      t.default = p.default.component(s);
    },
  })
);
