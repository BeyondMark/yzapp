"use strict";
var r = require("~/r");
r(
  "1aja",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "1aja": function (e, t, o) {
      o.r(t);
      var n = o("py6f"),
        a = o("TzfB"),
        l = o("kFi4"),
        i = o("6MKc");
      Object(n.a)({
        mixins: [a.a],
        classes: ["cancle-button-class", "confirm-button-class"],
        props: {
          show: {
            type: Boolean,
            observer(e) {
              !e && this.stopLoading();
            },
          },
          title: String,
          message: String,
          theme: { type: String, value: "default" },
          confirmButtonId: String,
          className: String,
          customStyle: String,
          asyncClose: Boolean,
          messageAlign: String,
          beforeClose: null,
          overlayStyle: String,
          useSlot: Boolean,
          useTitleSlot: Boolean,
          useConfirmButtonSlot: Boolean,
          useCancelButtonSlot: Boolean,
          showCancelButton: Boolean,
          closeOnClickOverlay: Boolean,
          confirmButtonOpenType: String,
          width: null,
          zIndex: { type: Number, value: 2e3 },
          confirmButtonText: { type: String, value: "确认" },
          cancelButtonText: { type: String, value: "取消" },
          confirmButtonColor: { type: String, value: l.e },
          cancelButtonColor: { type: String, value: l.b },
          showConfirmButton: { type: Boolean, value: !0 },
          overlay: { type: Boolean, value: !0 },
          transition: { type: String, value: "scale" },
          rootPortal: { type: Boolean, value: !1 },
        },
        data: { loading: { confirm: !1, cancel: !1 }, callback: () => {} },
        methods: {
          onConfirm() {
            this.handleAction("confirm");
          },
          onCancel() {
            this.handleAction("cancel");
          },
          onClickOverlay() {
            this.close("overlay");
          },
          close(e) {
            this.setData({ show: !1 }),
              wx.nextTick(() => {
                this.$emit("close", e);
                var { callback: t } = this.data;
                t && t(e, this);
              });
          },
          stopLoading() {
            this.setData({ loading: { confirm: !1, cancel: !1 } });
          },
          handleAction(e) {
            this.$emit(e, { dialog: this });
            var { asyncClose: t, beforeClose: o } = this.data;
            t || o
              ? (this.setData({ ["loading." + e]: !0 }),
                o &&
                  Object(i.n)(o(e)).then((t) => {
                    t ? this.close(e) : this.stopLoading();
                  }))
              : this.close(e);
          },
        },
      });
    },
  })
);
