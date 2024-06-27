"use strict";
var r = require("~/r");
r(
  "jtA1",
  Object.assign({}, require("~/v.js").modules, {
    jtA1: function (t, e, i) {
      i.r(e);
      var s = i("Fcif"),
        r = {
          name: "present-list",
          props: {
            activityInfo: { type: Object, default: () => ({}) },
            allMeetReduceActivities: { type: Array, default: () => [] },
            kdtId: { type: Number, default: 0 },
            activityIndex: { type: Number, default: 0 },
          },
          data: () => ({ isUserSelectPresent: !1 }),
          computed: {
            selectedPresents() {
              var {
                selectableNum: t,
                totalNum: e,
                presents: i = [],
              } = this.activityInfo;
              return t === e ? i : [...i.filter((t) => t.isSelected)];
            },
            canPick() {
              var {
                totalNum: t = 0,
                presents: e,
                selectableNum: i = 0,
              } = this.activityInfo;
              return (
                e.find((t) => {
                  var e;
                  return (
                    (null == (e = t.presentSkuList) ? void 0 : e.length) > 1
                  );
                }) || t > i
              );
            },
            activityTitle() {
              return 1 === this.allMeetReduceActivities.length
                ? "赠品"
                : "赠品活动" + (this.activityIndex + 1);
            },
          },
          methods: {
            handlePickPresent() {
              var {
                activityId: t,
                presents: e,
                selectableNum: i,
              } = this.activityInfo || {};
              this.$emit("on-show", {
                show: !0,
                pickGoodsList: this.selectedPresents,
                activityId: t,
                goodsList: (e || []).map((t) =>
                  Object(s.a)({}, t, { attachmentUrl: t.imgUrl })
                ),
                selectablePresentNum: i,
              });
            },
          },
          ud: !0,
        },
        a = i("9ZMt");
      e.default = a.default.component(r);
    },
  })
);
