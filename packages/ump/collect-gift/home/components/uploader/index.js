"use strict";
var r = require("~/r");
r(
  "rjHH",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "1Ch5": function (e, t, a) {
        var s = a("qeyP");
        t.a = s.a;
      },
      QoyE: function (e, t, a) {
        a.d(t, "b", function () {
          return r;
        }),
          a.d(t, "a", function () {
            return i;
          });
        var s = a("fZnw"),
          o = getApp(),
          r = [
            "showModal",
            "showToast",
            "openSetting",
            "getSystemInfo",
            "getSetting",
            "getImageInfo",
            "downloadFile",
            "chooseImage",
            "saveImageToPhotosAlbum",
            "canvasToTempFilePath",
          ].reduce((e, t) => ((e[t] = Object(s.c)(wx[t])), e), {}),
          i = Object(s.c)(o.carmen);
      },
      qeyP: function (e, t, a) {
        var s = a("jA1y"),
          o = a("+fxQ");
        function r() {}
        t.a = function (e) {
          var t = e.file,
            a = e.success || r,
            i = e.fail || r,
            l = e.progress || r;
          !(function (e) {
            var t = e.success || r,
              a = e.fail || r;
            Object(s.c)({
              path: "/wscshop/token/upload-image.json",
              success: (e) => {
                t(e.token);
              },
              fail: (e) => {
                a(e);
              },
            });
          })({
            success(e) {
              Object(o.b)("uploadUp").then((s) => {
                var o = wx.uploadFile({
                  url: s,
                  filePath: t,
                  name: "file",
                  formData: { token: e, "x:skip_save": 1 },
                  success: (e) => {
                    try {
                      e = JSON.parse(e.data);
                    } catch (e) {
                      i({
                        type: "yz:uploadFile",
                        code: -99999,
                        msg: "JSON解析错误",
                      });
                    }
                    0 == +e.code
                      ? a(e.data)
                      : i({ type: "yz:uploadFile", code: e.code, msg: e.msg });
                  },
                  fail: (e) => {
                    i({ type: "wx:uploadFile", code: -99999, msg: e.errMsg });
                  },
                });
                l !== r && o.onProgressUpdate(l);
              });
            },
            fail(e) {
              i(e);
            },
          });
        };
      },
      rjHH: function (e, t, a) {
        a.r(t);
        var s = a("rqVN"),
          o = a("AqvM"),
          r = a("hHpg"),
          i = a("WDeX");
        Object(s.b)({
          options: { multipleSlots: !0 },
          properties: {
            size: {
              type: String,
              observer(e) {
                this.setYZData({ iconSize: 0.65 * Number(e) });
              },
            },
            chooseImageOptions: {
              type: Object,
              value: {
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album"],
              },
            },
          },
          externalClasses: [
            "container-class",
            "icon-class",
            "uploaded-image-class",
          ],
          data: {
            iconSize: null,
            upLoadController: {
              status: { isUploading: !1, isUploaded: !1 },
              uploadedImgUrl: null,
            },
          },
          methods: {
            eventHandler(e) {
              var {
                currentTarget: {
                  dataset: { event: t },
                },
              } = e;
              switch (t) {
                case "chooseImage":
                  var a = (e) => {
                    (this.data.upLoadController.status.isUploading = e),
                      this.setYZData({
                        "upLoadController.status.isUploading": e,
                      });
                  };
                  if (
                    !0 ===
                    (() => this.data.upLoadController.status.isUploading)()
                  )
                    return;
                  a(!0);
                  var s = null;
                  return void Object(i.a)(this.data.chooseImageOptions)
                    .then(
                      (e) => (
                        (s = e),
                        r.a.loading("上传图片中"),
                        Object(i.b)({ file: e })
                      )
                    )
                    .then(
                      ...Object(o.a)(() => {
                        a(!1), r.a.clear();
                      })
                    )
                    .then(
                      (e) => {
                        this.setYZData({
                          "upLoadController.status.isUploaded": !0,
                          "upLoadController.uploadedImgUrl": s,
                        }),
                          this.triggerEvent("uploadFileSuccess", e);
                      },
                      (e) => {
                        this.triggerEvent("uploadFileFailure", e);
                      }
                    );
              }
            },
          },
        });
      },
    }
  )
);
