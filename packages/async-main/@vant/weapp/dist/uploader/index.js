"use strict";
var r = require("~/r");
r(
  "Y6wq",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Y6wq: function (e, t, a) {
      a.r(t);
      var i = a("py6f"),
        s = a("6MKc"),
        r = a("6S0u");
      function l(e) {
        return null != e.isImage
          ? e.isImage
          : e.type
          ? "image" === e.type
          : !!e.url && Object(r.d)(e.url);
      }
      function n(e) {
        return null != e.isVideo
          ? e.isVideo
          : e.type
          ? "video" === e.type
          : !!e.url && Object(r.i)(e.url);
      }
      function u(e) {
        return e.tempFiles.map((e) =>
          Object.assign(Object.assign({}, Object(s.k)(e, ["path"])), {
            type: "image",
            url: e.tempFilePath || e.path,
            thumb: e.tempFilePath || e.path,
          })
        );
      }
      function o(e) {
        var {
          accept: t,
          multiple: a,
          capture: i,
          compressed: r,
          maxDuration: l,
          sizeType: n,
          camera: o,
          maxCount: c,
          mediaType: m,
          extension: p,
        } = e;
        return new Promise((e, d) => {
          switch (t) {
            case "image":
              s.h || s.i
                ? wx.chooseImage({
                    count: a ? Math.min(c, 9) : 1,
                    sourceType: i,
                    sizeType: n,
                    success: (t) => e(u(t)),
                    fail: d,
                  })
                : wx.chooseMedia({
                    count: a ? Math.min(c, 9) : 1,
                    mediaType: ["image"],
                    sourceType: i,
                    maxDuration: l,
                    sizeType: n,
                    camera: o,
                    success: (t) => e(u(t)),
                    fail: d,
                  });
              break;
            case "media":
              wx.chooseMedia({
                count: a ? Math.min(c, 9) : 1,
                mediaType: m,
                sourceType: i,
                maxDuration: l,
                sizeType: n,
                camera: o,
                success: (t) =>
                  e(
                    (function (e) {
                      return e.tempFiles.map((e) =>
                        Object.assign(
                          Object.assign(
                            {},
                            Object(s.k)(e, [
                              "fileType",
                              "thumbTempFilePath",
                              "tempFilePath",
                            ])
                          ),
                          {
                            type: e.fileType,
                            url: e.tempFilePath,
                            thumb:
                              "video" === e.fileType
                                ? e.thumbTempFilePath
                                : e.tempFilePath,
                          }
                        )
                      );
                    })(t)
                  ),
                fail: d,
              });
              break;
            case "video":
              wx.chooseVideo({
                sourceType: i,
                compressed: r,
                maxDuration: l,
                camera: o,
                success: (t) =>
                  e(
                    (function (e) {
                      return [
                        Object.assign(
                          Object.assign(
                            {},
                            Object(s.k)(e, [
                              "tempFilePath",
                              "thumbTempFilePath",
                              "errMsg",
                            ])
                          ),
                          {
                            type: "video",
                            url: e.tempFilePath,
                            thumb: e.thumbTempFilePath,
                          }
                        ),
                      ];
                    })(t)
                  ),
                fail: d,
              });
              break;
            default:
              wx.chooseMessageFile(
                Object.assign(
                  Object.assign(
                    { count: a ? c : 1, type: t },
                    p ? { extension: p } : {}
                  ),
                  {
                    success: (t) =>
                      e(
                        (function (e) {
                          return e.tempFiles.map((e) =>
                            Object.assign(
                              Object.assign({}, Object(s.k)(e, ["path"])),
                              { url: e.path }
                            )
                          );
                        })(t)
                      ),
                    fail: d,
                  }
                )
              );
          }
        });
      }
      var c = {
          sizeType: { type: Array, value: ["original", "compressed"] },
          capture: { type: Array, value: ["album", "camera"] },
          showmenu: { type: Boolean, value: !0 },
        },
        m = {
          capture: { type: Array, value: ["album", "camera"] },
          compressed: { type: Boolean, value: !0 },
          maxDuration: { type: Number, value: 60 },
          camera: { type: String, value: "back" },
        },
        p = {
          capture: { type: Array, value: ["album", "camera"] },
          mediaType: { type: Array, value: ["image", "video", "mix"] },
          maxDuration: { type: Number, value: 60 },
          camera: { type: String, value: "back" },
        };
      Object(i.a)({
        props: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                {
                  disabled: Boolean,
                  multiple: Boolean,
                  uploadText: String,
                  useBeforeRead: Boolean,
                  afterRead: null,
                  beforeRead: null,
                  previewSize: { type: null, value: 80 },
                  name: { type: null, value: "" },
                  accept: { type: String, value: "image" },
                  fileList: {
                    type: Array,
                    value: [],
                    observer: "formatFileList",
                  },
                  maxSize: { type: Number, value: Number.MAX_VALUE },
                  maxCount: { type: Number, value: 100 },
                  deletable: { type: Boolean, value: !0 },
                  showUpload: { type: Boolean, value: !0 },
                  previewImage: { type: Boolean, value: !0 },
                  previewFullImage: { type: Boolean, value: !0 },
                  videoFit: { type: String, value: "contain" },
                  imageFit: { type: String, value: "scaleToFill" },
                  uploadIcon: { type: String, value: "photograph" },
                },
                c
              ),
              m
            ),
            p
          ),
          { extension: null }
        ),
        data: { lists: [], isInCount: !0 },
        methods: {
          formatFileList() {
            var { fileList: e = [], maxCount: t } = this.data,
              a = e.map((e) =>
                Object.assign(Object.assign({}, e), {
                  isImage: l(e),
                  isVideo: n(e),
                  deletable: !Object(r.a)(e.deletable) || e.deletable,
                })
              );
            this.setData({ lists: a, isInCount: a.length < t });
          },
          getDetail(e) {
            return {
              name: this.data.name,
              index: null == e ? this.data.fileList.length : e,
            };
          },
          startUpload() {
            var { maxCount: e, multiple: t, lists: a, disabled: i } = this.data;
            i ||
              o(
                Object.assign(Object.assign({}, this.data), {
                  maxCount: e - a.length,
                })
              )
                .then((e) => {
                  this.onBeforeRead(t ? e : e[0]);
                })
                .catch((e) => {
                  this.$emit("error", e);
                });
          },
          onBeforeRead(e) {
            var { beforeRead: t, useBeforeRead: a } = this.data,
              i = !0;
            "function" == typeof t && (i = t(e, this.getDetail())),
              a &&
                (i = new Promise((t, a) => {
                  this.$emit(
                    "before-read",
                    Object.assign(
                      Object.assign({ file: e }, this.getDetail()),
                      {
                        callback: (e) => {
                          e ? t() : a();
                        },
                      }
                    )
                  );
                })),
              i &&
                (Object(r.h)(i)
                  ? i.then((t) => this.onAfterRead(t || e))
                  : this.onAfterRead(e));
          },
          onAfterRead(e) {
            var { maxSize: t, afterRead: a } = this.data;
            (Array.isArray(e) ? e.some((e) => e.size > t) : e.size > t)
              ? this.$emit(
                  "oversize",
                  Object.assign({ file: e }, this.getDetail())
                )
              : ("function" == typeof a && a(e, this.getDetail()),
                this.$emit(
                  "after-read",
                  Object.assign({ file: e }, this.getDetail())
                ));
          },
          deleteItem(e) {
            var { index: t } = e.currentTarget.dataset;
            this.$emit(
              "delete",
              Object.assign(Object.assign({}, this.getDetail(t)), {
                file: this.data.fileList[t],
              })
            );
          },
          onPreviewImage(e) {
            if (this.data.previewFullImage) {
              var { index: t } = e.currentTarget.dataset,
                { lists: a, showmenu: i } = this.data,
                s = a[t];
              wx.previewImage({
                urls: a.filter((e) => l(e)).map((e) => e.url),
                current: s.url,
                showmenu: i,
                fail() {
                  wx.showToast({ title: "预览图片失败", icon: "none" });
                },
              });
            }
          },
          onPreviewVideo(e) {
            if (this.data.previewFullImage) {
              var { index: t } = e.currentTarget.dataset,
                { lists: a } = this.data,
                i = [],
                s = a.reduce(
                  (e, a, s) =>
                    n(a)
                      ? (i.push(
                          Object.assign(Object.assign({}, a), { type: "video" })
                        ),
                        s < t && e++,
                        e)
                      : e,
                  0
                );
              wx.previewMedia({
                sources: i,
                current: s,
                fail() {
                  wx.showToast({ title: "预览视频失败", icon: "none" });
                },
              });
            }
          },
          onPreviewFile(e) {
            var { index: t } = e.currentTarget.dataset;
            wx.openDocument({ filePath: this.data.lists[t].url, showMenu: !0 });
          },
          onClickPreview(e) {
            var { index: t } = e.currentTarget.dataset,
              a = this.data.lists[t];
            this.$emit(
              "click-preview",
              Object.assign(Object.assign({}, a), this.getDetail(t))
            );
          },
        },
      });
    },
  })
);
