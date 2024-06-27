"use strict";
var r = require("~/r");
r(
  "TzrW",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      TzrW: function (e, t, a) {
        a.r(t);
        var i = a("h1zt"),
          h = a("MTtC"),
          s = {
            name: "AttributeDate",
            props: { item: { type: Object } },
            data: () => ({
              showValue: "",
              showCalendar: !1,
              currentDate: new Date().getTime(),
              formatter: (e, t) =>
                "year" === e ? t + "年" : "month" === e ? t + "月" : t,
              maxDate: "",
              minDate: new Date(1900, 0, 1).getTime(),
            }),
            created() {
              this.item.value &&
                ((this.showValue = this.item.value),
                (this.currentDate = new Date(this.item.value).getTime())),
                this.item.attributeType === h.a.STANDARD
                  ? (this.maxDate = new Date().getTime())
                  : (this.maxDate = new Date().getTime() + 3471552e5);
            },
            computed: {
              displayValue() {
                return this.showValue || "请选择" + this.item.name;
              },
            },
            methods: {
              handleSelectDate() {
                !1 !== this.item.isEditable &&
                  ((this.showCalendar = !0),
                  this.$emit("withSwitchOtherPopup", !0));
              },
              onInput(e) {
                this.currentDate = e;
              },
              handleConfirm(e) {
                var t = Object(i.a)(new Date(e));
                this.$emit("onChange", { id: this.item.attributeId, value: t }),
                  (this.showValue = t),
                  this.handleClose();
              },
              handleClose() {
                (this.showCalendar = !1),
                  this.$emit("withSwitchOtherPopup", !1);
              },
            },
            ud: !0,
          },
          r = a("9ZMt");
        t.default = r.default.component(s);
      },
    }
  )
);
