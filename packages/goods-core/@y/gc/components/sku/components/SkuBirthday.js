"use strict";
var r = require("~/r");
r(
  "RqEb",
  Object.assign({}, require("~/v.js").modules, {
    RqEb: function (t, e, i) {
      i.r(e);
      var r = {
          props: { opt: Object, skuId: Number },
          data: () => ({
            birthdayText: "",
            birthdayKey: "",
            birthdayName: "",
            isShowBirthdayText: !1,
          }),
          computed: {
            subTitleText() {
              var { remark: t } = this.opt;
              return t ? "(" + t + ")" : "";
            },
            optVals() {
              var { customerRelation: t } = this.opt;
              return t || {};
            },
          },
          methods: {
            onSelect(t) {
              var { key: e, name: i } = t,
                { blessingMessage: r = {} } = this.opt;
              (this.birthdayKey = e),
                (this.birthdayName = i),
                (this.birthdayText = r[e] || ""),
                (this.isShowBirthdayText = !!r[e]),
                this.$nextTick(() => {
                  var t;
                  this.baseEvent();
                  var e =
                    null == (t = document)
                      ? void 0
                      : t.querySelector(".birthday-input");
                  null == e || e.scrollIntoView();
                });
            },
            baseEvent() {
              this.$emit("change", {
                text: this.birthdayText,
                key: this.birthdayKey,
                name: this.birthdayName,
              });
            },
            onMessage(t) {
              if (void 0 !== t) {
                var { value: e = "" } = t || {};
                (this.birthdayText = e),
                  this.$nextTick(() => {
                    this.baseEvent();
                  });
              }
            },
          },
          ud: !0,
        },
        a = i("9ZMt");
      e.default = a.default.component(r);
    },
  })
);
