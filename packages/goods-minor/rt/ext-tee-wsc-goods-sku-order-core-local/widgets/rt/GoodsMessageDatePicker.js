"use strict";
var r = require("~/r");
r(
  "sBM2",
  Object.assign({}, require("~/v.js").modules, {
    sBM2: function (i, e, t) {
      t.r(e);
      var r = t("Fcif"),
        a = t("VmHG"),
        s = {
          data() {
            return Object(r.a)(
              { initialShow: !1 },
              Object(a.d)(this, ["showDatePicker", "pickerOpts"])
            );
          },
          watch: {
            showDatePicker: {
              handler(i) {
                i
                  ? (!this.initialShow && (this.initialShow = !0),
                    this.displayTimer && clearTimeout(this.displayTimer))
                  : (this.displayTimer = setTimeout(() => {
                      this.initialShow = !1;
                    }, 600));
              },
              immediate: !0,
            },
          },
          created() {
            Object(a.b)(this, ["onPickerConfirm", "onPickerCancel"]);
          },
        },
        c = t("9ZMt");
      e.default = c.default.component(s);
    },
  })
);
