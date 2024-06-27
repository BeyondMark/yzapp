"use strict";
var r = require("~/r");
r(
  "iicc",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    iicc: function (e, t, i) {
      i.r(t);
      var a = i("Fcif"),
        s = i("AGZf"),
        r = i("pOq+"),
        l = i("1pB4"),
        u = i("882d");
      function o(e) {
        if (Object(l.f)(e))
          return null != e.isImage
            ? e.isImage
            : e.type
            ? "image" === e.type
            : !!Object(l.h)(e.url) && Object(l.d)(e.url);
      }
      var n = i("BZkp"),
        h = i("Zqpg"),
        c = {
          name: "t-upload",
          mixins: [
            Object(h.a)({ externalClasses: ["custom-class", "slot-class"] }),
          ],
          props: {
            disabled: Boolean,
            multiple: Boolean,
            uploadText: String,
            useBeforeRead: Boolean,
            afterRead: Function,
            beforeRead: Function,
            previewSize: { type: [Number, String], default: 80 },
            name: { type: [Number, String], default: "" },
            accept: { type: String, default: "image" },
            sourceType: { type: Array, default: () => ["camera", "album"] },
            sizeType: {
              type: Array,
              default: () => ["original", "compressed"],
            },
            fileList: { type: Array, default: () => [] },
            maxSize: { type: Number, default: Number.MAX_VALUE },
            maxCount: { type: Number, default: 9 },
            deletable: { type: Boolean, default: !0 },
            showUpload: { type: Boolean, default: !0 },
            previewImage: { type: Boolean, default: !0 },
            previewFullImage: { type: Boolean, default: !0 },
            imageFit: { type: String, default: "aspectFill" },
            uploadIcon: { type: String, default: "photograph" },
          },
          data: () => ({ lists: [], isInCount: !0 }),
          computed: {
            previewStyle() {
              return Object(r.a)({
                width: Object(n.b)(this.previewSize),
                height: Object(n.b)(this.previewSize),
              });
            },
          },
          watch: {
            fileList() {
              this.formatFileList();
            },
          },
          mounted() {
            this.formatFileList();
          },
          methods: {
            formateFileItem(e) {
              var t = Object(l.b)(e.previewSize)
                ? e.previewSize
                : this.previewSize;
              return Object(a.a)({}, e, {
                style: Object(r.a)({
                  width: Object(n.b)(t),
                  height: Object(n.b)(t),
                }),
                isImage: o(e),
                deletable: !Object(l.a)(e.deletable) || e.deletable,
              });
            },
            formatFileList() {
              var { fileList: e = [] } = this,
                t = e.map((e) => this.formateFileItem(e));
              (this.lists = [...t]),
                (this.isInCount = this.lists.length < this.maxCount);
            },
            getDetail(e) {
              return {
                name: this.name,
                index: null == e ? this.fileList.length : e,
              };
            },
            startUpload() {
              var {
                maxCount: e,
                multiple: t,
                lists: i,
                disabled: a,
                accept: s,
                sourceType: r,
                sizeType: l,
              } = this;
              a ||
                (function (e) {
                  var {
                    accept: t,
                    multiple: i,
                    sourceType: a,
                    sizeType: s,
                    maxCount: r,
                  } = e;
                  return new Promise((e, l) => {
                    switch (t) {
                      case "image":
                        Object(u.b)({
                          count: i ? Math.min(r, 9) : 1,
                          sourceType: a,
                          sizeType: s,
                        })
                          .then((t) => {
                            e(
                              (function (e) {
                                var { tempFilePaths: t, tempFiles: i } = e;
                                if (i) {
                                  for (var a = [], s = 0; s < i.length; s++) {
                                    var r = i[s];
                                    a.push({
                                      type: "image",
                                      url: r.path,
                                      thumb: r.path,
                                      size: r.size,
                                    });
                                  }
                                  return a;
                                }
                                return t.map((e) => ({
                                  type: "image",
                                  url: e,
                                  thumb: e,
                                }));
                              })(t)
                            );
                          })
                          .catch((e) => {
                            l(e);
                          });
                    }
                  });
                })({
                  accept: s,
                  multiple: t,
                  sourceType: r,
                  sizeType: l,
                  maxCount: e - i.length,
                })
                  .then((e) => {
                    this.onBeforeRead(t ? e : e[0]);
                  })
                  .catch((e) => {
                    this.$emit("error", e);
                  });
            },
            onBeforeRead(e) {
              var { beforeRead: t, useBeforeRead: i } = this,
                s = !0;
              "function" == typeof t &&
                (s = this.beforeRead(e, this.getDetail())),
                i &&
                  (s = new Promise((t, i) => {
                    this.$emit(
                      "before-read",
                      Object(a.a)({ file: e }, this.getDetail(), {
                        callback: (e) => {
                          e ? t() : i();
                        },
                      })
                    );
                  })),
                s &&
                  (Object(l.g)(s)
                    ? s.then((t) => this.onAfterRead(t || e))
                    : this.onAfterRead(e));
            },
            processFileList(e) {
              var { quelifiedFiles: t, unquelifiedFiles: i } = e;
              i.length &&
                this.$emit(
                  "oversize",
                  Object(a.a)({ file: i }, this.getDetail())
                ),
                t.length && this.emitAfterRead(t);
            },
            checkIsOversize(e) {
              var t = [],
                i = [];
              e.forEach((e) => {
                e.size > this.maxSize ? t.push(e) : i.push(e);
              }),
                this.processFileList({
                  quelifiedFiles: i,
                  unquelifiedFiles: t,
                });
            },
            onAfterRead(e) {
              Array.isArray(e)
                ? this.checkIsOversize(e)
                : e.size > this.maxSize
                ? this.$emit(
                    "oversize",
                    Object(a.a)({ file: e }, this.getDetail())
                  )
                : this.emitAfterRead(e);
            },
            emitAfterRead(e) {
              "function" == typeof this.afterRead &&
                this.afterRead(e, this.getDetail()),
                this.$emit(
                  "after-read",
                  Object(a.a)({ file: e }, this.getDetail())
                );
            },
            deleteItem(e) {
              this.$emit(
                "delete",
                Object(a.a)({}, this.getDetail(e), { file: this.fileList[e] })
              );
            },
            onPreviewImage(e) {
              if (this.previewFullImage) {
                var { lists: t = [] } = this,
                  i = t.filter((e) => o(e)).map((e) => e.url);
                Object(u.d)({
                  urls: i,
                  current: e,
                  fail() {
                    s.a.fail("预览图片失败");
                  },
                });
              }
            },
            onClickPreview(e) {
              var t = this.lists[e];
              this.$emit(
                "click-preview",
                Object(a.a)({}, t, this.getDetail(e))
              );
            },
          },
          ud: !0,
        },
        p = i("9ZMt");
      t.default = p.default.component(c);
    },
  })
);
