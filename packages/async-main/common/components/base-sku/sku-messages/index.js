"use strict";
var r = require("~/r");
r(
  "a7zE",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      a7zE: function (e, a, s) {
        s.r(a);
        var t = s("Fcif"),
          r = s("a1Mm"),
          i = s("zMoS"),
          l = s("u8kV"),
          u = s("qeyP"),
          d = s("4k4N"),
          g = s("dYp/");
        Object(l.b)({
          behaviors: [d.a],
          properties: {
            messages: { type: Array, observer: "resetMassages" },
            messageConfig: { type: Object, observer: "resetMessageConfig" },
          },
          data: { messageValues: [], messagesInfo: [] },
          attached() {
            this.triggerEvent("sku:addRef", {
              refKey: "skuMessages",
              ref: this,
            });
          },
          methods: {
            showDatePicker(e) {
              var a = Object(i.a)(e, "target.dataset.index", -1);
              if (a > -1) {
                var s = this.data.messages[a];
                this.triggerEvent("sku:showDatePicker", {
                  type: 1 == +s.datetime ? "datetime" : s.type,
                  index: a,
                  currentDate: this.data.messageValues[a].value,
                });
              }
            },
            confirmDate(e) {
              var { index: a, currentDate: s } = e.detail;
              a > -1 &&
                this.setYZData({ ["messageValues[" + a + "].value"]: s });
            },
            resetMassages(e) {
              this.resetData(e, this.data.messageConfig);
            },
            resetMessageConfig(e) {
              this.resetData(this.data.messages, e);
            },
            resetData(e, a) {
              var s = [],
                r = [],
                l = Object(i.a)(a, "initialMessages", {}),
                u = Object(i.a)(a, "placeholderMap", {});
              (e || []).forEach((e) => {
                var a = { value: l[e.name] || "" },
                  i = Object(t.a)({}, e, {
                    type: this.getType(e),
                    placeholder: this.getPlaceholder(e, u),
                    required: 1 == +e.required,
                    center: !0,
                  });
                "image" === e.type &&
                  ((a.fileList = []),
                  (i.maxSize = 1024 * (e.maxSize || g.e) * 1024)),
                  s.push(a),
                  r.push(i);
              }),
                this.setYZData({ messageValues: s, messagesInfo: r });
            },
            getType(e) {
              var a = e.type;
              return g.d[a] || a;
            },
            getPlaceholder(e, a) {
              void 0 === a && (a = {});
              var s = e.type;
              return e.placeholder || a[s] || g.f[s];
            },
            onMessageValueChange(e) {
              var { index: a } = e.currentTarget.dataset;
              this.setYZData({ ["messageValues[" + a + "].value"]: e.detail });
            },
            onUploadAfterRead(e) {
              var a = e.currentTarget.dataset.index,
                s = e.detail.file;
              this.setYZData({
                ["messageValues[" + a + "].fileList"]: [
                  { status: "uploading", message: "上传中..." },
                ],
              }),
                Object(u.a)({
                  file: s.url,
                  success: (e) => {
                    var s = e.attachment_url;
                    this.setYZData({
                      ["messageValues[" + a + "].value"]: Object(r.a)(s),
                      ["messageValues[" + a + "].fileList"]: [
                        {
                          status: "done",
                          url: Object(r.a)(s, "!120x120.jpg"),
                          isImage: !0,
                        },
                      ],
                    });
                  },
                  fail: (e) => {
                    wx.showToast({ title: e.msg, icon: "none" }),
                      this.setYZData({
                        ["messageValues[" + a + "].fileList"]: [
                          { status: "failed", message: "上传失败" },
                        ],
                      });
                  },
                });
            },
            onUploadOversize(e) {
              var a = e.currentTarget.dataset.index,
                { maxSize: s } = this.data.messages[a] || {};
              wx.showToast({
                title:
                  "最大可上传图片为" + (s || g.e) + "MB，请尝试压缩图片尺寸",
                icon: "none",
              });
            },
            onUploadDelete(e) {
              var a = e.currentTarget.dataset.index;
              this.setYZData({
                ["messageValues[" + a + "].value"]: "",
                ["messageValues[" + a + "].fileList"]: [],
              });
            },
            getCartMessages() {
              return this.data.messageValues.map((e) => e.value);
            },
            getMessages() {
              var e = {},
                { messages: a = [], messageValues: s = [] } = this.data;
              return (
                a.forEach((a, t) => {
                  var r = s[t];
                  r && r.value
                    ? (e["message_" + t] = r.value)
                    : (e["message_" + t] = "");
                }),
                e
              );
            },
            validateMessages() {
              for (var e = this.data.messageValues, a = 0; a < e.length; a++) {
                var s = e[a].value;
                s = s.trim ? s.trim() : s;
                var t = this.data.messages[a];
                if ("" === s) {
                  if (1 == +t.required)
                    return ("image" === t.type ? "请上传" : "请填写") + t.name;
                } else {
                  var r = this.validateMessage(t.type, s);
                  if (r) return r;
                }
                if (s.length > 200) return "写的太多了，不要超过200字";
              }
            },
            validateMessage(e, a) {
              var s = {
                mobile: /^\d{6,20}$/,
                email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
                tel: /^\d+$/,
                id_no: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
              }[e];
              return s && !s.test(a)
                ? {
                    mobile: "手机号请填写6-20位的数字",
                    email: "请填写正确的邮箱",
                    tel: "请填写数字",
                    id_no: "请填写正确的身份证",
                  }[e]
                : "";
            },
          },
        });
      },
      qeyP: function (e, a, s) {
        var t = s("jA1y"),
          r = s("+fxQ");
        function i() {}
        a.a = function (e) {
          var a = e.file,
            s = e.success || i,
            l = e.fail || i,
            u = e.progress || i;
          !(function (e) {
            var a = e.success || i,
              s = e.fail || i;
            Object(t.c)({
              path: "/wscshop/token/upload-image.json",
              success: (e) => {
                a(e.token);
              },
              fail: (e) => {
                s(e);
              },
            });
          })({
            success(e) {
              Object(r.b)("uploadUp").then((t) => {
                var r = wx.uploadFile({
                  url: t,
                  filePath: a,
                  name: "file",
                  formData: { token: e, "x:skip_save": 1 },
                  success: (e) => {
                    try {
                      e = JSON.parse(e.data);
                    } catch (e) {
                      l({
                        type: "yz:uploadFile",
                        code: -99999,
                        msg: "JSON解析错误",
                      });
                    }
                    0 == +e.code
                      ? s(e.data)
                      : l({ type: "yz:uploadFile", code: e.code, msg: e.msg });
                  },
                  fail: (e) => {
                    l({ type: "wx:uploadFile", code: -99999, msg: e.errMsg });
                  },
                });
                u !== i && r.onProgressUpdate(u);
              });
            },
            fail(e) {
              l(e);
            },
          });
        };
      },
    }
  )
);
