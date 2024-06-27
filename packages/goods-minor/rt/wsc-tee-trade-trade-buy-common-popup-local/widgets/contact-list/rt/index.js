"use strict";
var r = require("~/r");
r(
  "o7ja",
  Object.assign({}, require("~/v.js").modules, {
    o7ja: function (t, e, i) {
      i.r(e);
      var a = i("YeA1"),
        s = {
          props: {
            defaultTagText: { type: String, default: () => "默认" },
            addText: { type: String, default: "新建联系人" },
            show: { type: Boolean, default: !1 },
            title: String,
            customStyle: String,
            overlayStyle: String,
            bodyStyle: String,
          },
          data: () => ({
            themeColors: {},
            themeTag: {},
            contact: { list: [] },
            initialShow: !1,
          }),
          computed: {
            list() {
              var t,
                e = !1;
              return ((null == (t = this.contact) ? void 0 : t.list) || [])
                .map(
                  (t) => (t.isDefault && (e && (t.isDefault = 0), (e = !0)), t)
                )
                .sort((t, e) => e.isDefault - t.isDefault);
            },
            selectedId() {
              return this.contact.id;
            },
          },
          watch: {
            show: {
              handler(t) {
                t
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
            Object(a.b)(this, ["themeColors", "themeTag", "contact"]);
          },
          methods: {
            onEdit(t) {
              this.$emit("edit", t);
            },
            noop() {},
            onSelect(t) {
              this.$emit("select", t);
            },
            onAdd() {
              this.$emit("add");
            },
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        o = i("9ZMt");
      e.default = o.default.component(s);
    },
  })
);
