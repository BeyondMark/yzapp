"use strict";
var r = require("~/r");
r(
  "IgBD",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    IgBD: function (e, t, r) {
      r.r(t);
      var i = r("AGZf"),
        a = r("c4zd"),
        s = r("BANk");
      var n = {
          props: { show: Boolean, origin: String, themeColor: String },
          data: () => ({ remark: "", fileList: [] }),
          computed: {
            confirmButtonDisabled() {
              var { fileList: e, remark: t } = this;
              return 0 === e.length && !t;
            },
          },
          methods: {
            confirm() {
              var { fileList: e, remark: t } = this;
              this.$emit("confirm", {
                voucherUrl: (0 !== e.length && e[0].url) || "",
                voucherDesc: t,
              });
            },
            onClose() {
              (this.fileList = []), (this.remark = ""), this.$emit("close");
            },
            deleteImg(e) {
              this.fileList.splice(e.index, 1);
            },
            onAfterRead(e) {
              var t,
                r,
                n,
                { file: l } = e;
              if (l && l.url) {
                i.a.loading({
                  duration: 0,
                  message: "上传中...",
                  forbidClick: !0,
                });
                var o = {
                  UPLOADER: "uploading",
                  FAILED: "failed",
                  DONE: "done",
                };
                (l.status = o.UPLOADER),
                  (l.message = "上传中..."),
                  ((t = l.url),
                  (r = "image"),
                  (n = this.origin),
                  void 0 === n && (n = "cashier"),
                  Object(a.b)({
                    origin: n,
                    path: "assets/api/material/token",
                  }).then(function (e) {
                    return new Promise(function (i, a) {
                      Object(s.a)({
                        url: "https://up.yzcdn.cn",
                        filePath: t,
                        fileType: r,
                        fileName: "file",
                        formData: { token: e },
                        header: { "content-type": "multipart/form-data" },
                        success: function (e) {
                          try {
                            var t = JSON.parse(e.data);
                            0 == +t.code ? i(t.data) : a(new Error(t.msg));
                          } catch (e) {
                            a(e);
                          }
                        },
                        fail: function () {
                          a(new Error("上传失败"));
                        },
                      });
                    });
                  }))
                    .then((e) => {
                      i.a.clear();
                      var t = e.attachment_full_url;
                      if (!t) throw new Error("上传失败，缺少资源标识符");
                      (l.status = o.DONE),
                        (l.url = t),
                        (this.fileList = [...this.fileList, { url: t }]);
                    })
                    .catch((e) => {
                      var t =
                        (e && (e.message || e.msg || e)) || "图片上传失败";
                      i.a.fail(t), (l.status = o.FAILED), (l.message = t);
                    });
              } else i.a.fail("图片选择失败，请重新选择");
            },
            onRemarkInput(e) {
              var {
                detail: { value: t },
              } = e;
              this.remark = t.trim();
            },
          },
          ud: !0,
        },
        l = r("9ZMt");
      t.default = l.default.component(n);
    },
  })
);
