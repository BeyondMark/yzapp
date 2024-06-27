"use strict";
var r = require("~/r");
r(
  "5OP/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "01ar": function (e, t, a) {
      var s = a("aOlM");
      t.a = s.a;
    },
    "5OP/": function (e, t, a) {
      a.r(t);
      var s = a("rqVN"),
        i = a("01ar"),
        n = getApp(),
        d = null;
      Object(s.b)({
        properties: { presenterView: Boolean, message: String, giftId: String },
        data: { isEditing: !1, newMemo: "" },
        attached() {
          (d = Object(i.a)((e) => {
            this.setYZData({ newMemo: e });
          }, 500)),
            this.setYZData({ newMemo: this.data.message });
        },
        methods: {
          handleInputUpdate(e) {
            var { detail: t } = e;
            d(t.value);
          },
          handleMessageEdit() {
            if (this.data.presenterView) {
              var e = !this.data.isEditing;
              this.setYZData({ isEditing: e });
            }
          },
          handleMessageFinish() {
            if (this.data.newMemo !== this.data.message)
              return this.data.newMemo
                ? void this.updateMemo().then(() => {
                    this.setYZData({ message: this.data.newMemo }),
                      this.handleMessageEdit();
                  })
                : (this.setYZData({
                    message: this.data.message,
                    newMemo: this.data.message,
                  }),
                  wx.showToast({ title: "留言不能为空", icon: "none" }));
            this.handleMessageEdit();
          },
          updateMemo() {
            return new Promise((e) => {
              n.request({
                path: "wscump/gift/changegiftmemo.json",
                data: { giftAlias: this.data.giftId, memo: this.data.newMemo },
                success(t) {
                  e(t);
                },
              }).catch((e) => {
                wx.showToast({
                  title: e.msg || "更新留言失败，请尝试重新编辑",
                  icon: "none",
                }),
                  this.setYZData({ message: this.data.message });
              });
            });
          },
        },
      });
    },
  })
);
