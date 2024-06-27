"use strict";
var r = require("~/r");
r(
  "QChK",
  Object.assign({}, require("~/v.js").modules, {
    QChK: function (e, t, s) {
      s.r(t);
      var i = s("Fcif"),
        r = {
          props: {
            presentList: { type: Array, default: () => [] },
            groupActivityInfo: { type: Object, default: () => ({}) },
            canSelectPresent: { type: Boolean, default: !1 },
            activityId: Number,
          },
          computed: {
            selectablePresentNum() {
              return (
                (this.groupActivityInfo &&
                  this.groupActivityInfo.selectablePresentNum) ||
                0
              );
            },
            selectablePresents() {
              return (
                (this.groupActivityInfo &&
                  this.groupActivityInfo.selectablePresents) ||
                []
              );
            },
            isCanSelect() {
              return (
                this.canSelectPresent &&
                this.selectablePresentNum < this.selectablePresents.length
              );
            },
          },
          methods: {
            handlePickPresent() {
              var e,
                {
                  activityId: t,
                  selectablePresents: s,
                  selectablePresentNum: r,
                } = this.groupActivityInfo || {},
                n =
                  null !=
                  (e =
                    null == s
                      ? void 0
                      : s.map(
                          (e) => (
                            this.presentList.some(
                              (t) =>
                                t.id === e.id &&
                                ((e = Object(i.a)({}, e, {
                                  sku: t.sku,
                                  skuId: t.skuId,
                                })),
                                !0)
                            ),
                            e
                          )
                        ))
                    ? e
                    : [];
              this.$emit("on-show", {
                show: !0,
                pickGoodsList: this.presentList,
                activityId: t,
                goodsList: n,
                selectablePresentNum: r,
              });
            },
            handleChangeSku(e) {
              this.$emit("change-sku", e);
            },
          },
          ud: !0,
        },
        n = s("9ZMt");
      t.default = n.default.component(r);
    },
  })
);
