"use strict";
var r = require("~/r");
r(
  "7bI9",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "7bI9": function (e, t, a) {
        a.r(t);
        var i = a("9ZMt"),
          s = a("AGZf"),
          d = a("mztD"),
          l = a("490I"),
          o = {
            props: {
              fieldInfo: {
                type: Object,
                default: () => ({
                  itemId: "",
                  feItemCustomName: "",
                  placeholder: "",
                  feRequired: !0,
                }),
              },
              fieldValue: { type: String, default: "" },
            },
            data: () => ({ isUploading: !1 }),
            computed: {
              fieldLabel() {
                var { fieldInfo: e } = this,
                  { hasChangedName: t, itemName: a, feItemCustomName: i } = e;
                return t ? i : a;
              },
            },
            created() {},
            methods: {
              deleteImage() {
                var { fieldInfo: e } = this,
                  { itemId: t } = e;
                this.$emit("change", { id: t, value: "" });
              },
              uploadImage() {
                var { fieldInfo: e } = this;
                i.default.$native.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  success: (t) => {
                    s.a.loading(),
                      (this.isUploading = !0),
                      Object(l.a)({
                        file: t.tempFilePaths[0],
                        success: (t) => {
                          s.a.clear();
                          var a = t.attachment_url;
                          this.$emit("change", {
                            id: e.itemId,
                            value: Object(d.a)(a),
                          }),
                            (this.isUploading = !1);
                        },
                        fail: (t) => {
                          s.a.clear(),
                            i.default.$native.showToast({
                              title: t.msg,
                              icon: "none",
                            }),
                            (this.isUploading = !1),
                            this.$emit("change", { id: e.itemId, value: "" });
                        },
                      });
                  },
                  fail: () => {
                    i.default.$native.showToast({
                      title: "选择图片失败",
                      icon: "none",
                    });
                  },
                });
              },
            },
            ud: !0,
          };
        t.default = i.default.component(o);
      },
    }
  )
);
