"use strict";
var r = require("~/r");
r(
  "VBs3",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      VBs3: function (e, t, a) {
        a.r(t);
        var i = a("AGZf"),
          r = a("mztD"),
          s = a("6NLS"),
          h = a("cb02"),
          n = a("beZU"),
          c = {
            url: Object(r.a)(
              "fix-base64/50aa80a1d9471b98c263afaf0407e7fe607f8013a945a9d1730302b61ba9f316.png"
            ),
            width: 318,
            height: 208,
          },
          d = 2,
          o = {
            props: {
              value: String,
              disabled: Boolean,
              kdtId: Number,
              h5CompressUpload: Function,
              side: String,
              orcValid: Boolean,
            },
            data: () => ({
              showCanvas: !1,
              canvasSize: { height: 0, width: 0 },
              time: { front: 10, back: 10 },
              timer: { front: null, back: null },
            }),
            computed: {
              canvasStyle() {
                var { canvasSize: e } = this;
                return (
                  "width: " +
                  e.width +
                  "px!important; height: " +
                  e.height +
                  "px!important; position: fixed; left: -" +
                  e.width +
                  "px; top: -" +
                  e.height +
                  "px"
                );
              },
            },
            watch: { value(e) {} },
            methods: {
              clearTimeAndTimer(e) {
                clearInterval(this.timer[e]),
                  (this.timer[e] = null),
                  (this.time[e] = 10);
              },
              checkOcrValid(e) {
                if (!this.orcValid) return Promise.resolve(e);
                var t = i.a.loading({ message: "正在上传", duration: 8e3 }),
                  { side: a } = this;
                return Object(n.d)({ photoUrl: e, bizId: "16", side: a })
                  .then((e) => {
                    var { bizNo: t } = e;
                    return new Promise((e, i) => {
                      var { time: r, timer: s } = this;
                      s[a] = setInterval(() => {
                        r[a] >= 0
                          ? (r[a]--, this.queryOCRResult(t, a, e).catch(i))
                          : (e(), this.clearTimeAndTimer(a));
                      }, 1e3);
                    });
                  })
                  .then(() => (t.clear(), e))
                  .catch((e) => {
                    throw (t.clear(), this.clearTimeAndTimer(a), e);
                  });
              },
              queryOCRResult(e, t, a) {
                return Object(n.c)({ bizNo: e, bizId: "16" }).then((e) => {
                  if (e.status === d) {
                    var { idCardName: i, idCardNo: r } = e;
                    r &&
                      this.$emit("ocrIdCardInfo", {
                        idCardName: i,
                        idCardNo: r,
                      }),
                      a(),
                      this.clearTimeAndTimer(t);
                  }
                });
              },
              onAfterRead(e) {
                var { file: t } = e;
                Object(h.a)(t.url)
                  .then(this.handleMark.bind(this))
                  .then(this.uploadImage.bind(this))
                  .then((e) => e.attachment_url)
                  .then((e) => this.checkOcrValid(e))
                  .then((e) => {
                    i.a.success({ message: "上传成功", context: this }),
                      this.$emit("change", e);
                  })
                  .catch((e) => {
                    i.a.fail({
                      message: e.msg || "选择图片失败",
                      context: this,
                    });
                  });
              },
              loadImage(e) {
                var t = new Image();
                return new Promise((a, i) => {
                  (t.onload = () => {
                    a(t);
                  }),
                    (t.onerror = i),
                    (t.src = e);
                });
              },
              uploadImage(e) {
                return (
                  i.a.clear({ context: this }),
                  Object(s.a)(e, { kdtId: this.kdtId }).catch((e) => {
                    throw ((e.msg = e.msg || "上传图片失败"), e);
                  })
                );
              },
              handleMark(e) {
                var { height: t, width: a } = Object(h.b)(
                  500,
                  500,
                  e.height,
                  e.width
                );
                (this.showCanvas = !0),
                  (this.canvasSize = { height: t, width: a }),
                  Object(i.a)({
                    message: "正在压缩图片，请稍候",
                    context: this,
                  });
                var r = a / 2 / c.width,
                  s = c.width * r,
                  n = c.height * r;
                return new Promise((i, r) => {
                  this.$nextTick(() => {
                    var h = this.createSelectorQuery();
                    h.select("#firstCanvas").fields({ node: !0 }),
                      h.exec((h) => {
                        var { node: d } = h[0],
                          o = d.getContext("2d");
                        (d.width = a),
                          (d.height = t),
                          this.createImage(d, e.path)
                            .then(
                              (e) => (
                                o.drawImage(e, 0, 0, a, t),
                                this.createImage(d, c.url)
                              )
                            )
                            .then((e) => {
                              o.drawImage(e, (a - s) / 2, (t - n) / 2, s, n),
                                wx.canvasToTempFilePath(
                                  {
                                    canvas: d,
                                    fileType: "jpg",
                                    quality: "0.7",
                                    success: (e) => {
                                      (this.showCanvas = !1), i(e.tempFilePath);
                                    },
                                    fail: r,
                                  },
                                  this
                                );
                            })
                            .catch(r);
                      });
                  });
                });
              },
              createImage: (e, t) =>
                new Promise((a, i) => {
                  var r = e.createImage();
                  (r.src = t), (r.onload = () => a(r)), (r.onerror = i);
                }),
              onDelete() {
                this.$emit("change", "");
              },
            },
            ud: !0,
          },
          l = a("9ZMt");
        t.default = l.default.component(o);
      },
    }
  )
);
