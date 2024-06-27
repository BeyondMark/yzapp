"use strict";
var r = require("~/r");
r(
  "LsEu",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    LsEu: function (e, t, r) {
      r.r(t);
      var a = r("NeL/"),
        o = r("py6f");
      Object(o.a)({
        classes: ["item-title-class"],
        field: !0,
        relation: Object(a.b)("dropdown-menu", function () {
          this.updateDataFromParent();
        }),
        props: {
          value: { type: null, observer: "rerender" },
          title: { type: String, observer: "rerender" },
          disabled: Boolean,
          titleClass: { type: String, observer: "rerender" },
          options: { type: Array, value: [], observer: "rerender" },
          popupStyle: String,
          useBeforeToggle: { type: Boolean, value: !1 },
          rootPortal: { type: Boolean, value: !1 },
        },
        data: {
          transition: !0,
          showPopup: !1,
          showWrapper: !1,
          displayTitle: "",
          safeAreaTabBar: !1,
        },
        methods: {
          rerender() {
            wx.nextTick(() => {
              var e;
              null === (e = this.parent) ||
                void 0 === e ||
                e.updateItemListData();
            });
          },
          updateDataFromParent() {
            if (this.parent) {
              var {
                overlay: e,
                duration: t,
                activeColor: r,
                closeOnClickOverlay: a,
                direction: o,
                safeAreaTabBar: s,
              } = this.parent.data;
              this.setData({
                overlay: e,
                duration: t,
                activeColor: r,
                closeOnClickOverlay: a,
                direction: o,
                safeAreaTabBar: s,
              });
            }
          },
          onOpen() {
            this.$emit("open");
          },
          onOpened() {
            this.$emit("opened");
          },
          onClose() {
            this.$emit("close");
          },
          onClosed() {
            this.$emit("closed"), this.setData({ showWrapper: !1 });
          },
          onOptionTap(e) {
            var { option: t } = e.currentTarget.dataset,
              { value: r } = t,
              a = this.data.value !== r;
            this.setData({ showPopup: !1, value: r }),
              this.$emit("close"),
              this.rerender(),
              a && this.$emit("change", r);
          },
          toggle(e, t) {
            void 0 === t && (t = {});
            var { showPopup: r } = this.data;
            "boolean" != typeof e && (e = !r),
              e !== r &&
                this.onBeforeToggle(e).then((r) => {
                  var a;
                  r &&
                    (this.setData({ transition: !t.immediate, showPopup: e }),
                    e
                      ? null === (a = this.parent) ||
                        void 0 === a ||
                        a.getChildWrapperStyle().then((e) => {
                          this.setData({ wrapperStyle: e, showWrapper: !0 }),
                            this.rerender();
                        })
                      : this.rerender());
                });
          },
          onBeforeToggle(e) {
            var { useBeforeToggle: t } = this.data;
            return t
              ? new Promise((t) => {
                  this.$emit("before-toggle", {
                    status: e,
                    callback: (e) => t(e),
                  });
                })
              : Promise.resolve(!0);
          },
        },
      });
    },
  })
);
