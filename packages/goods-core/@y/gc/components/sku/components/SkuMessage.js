"use strict";
var r = require("~/r");
r(
  "QDSz",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      QDSz: function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          i = s("9ZMt"),
          r = s("AGZf"),
          l = s("NHEX"),
          u = s.n(l),
          m = s("882d"),
          o = s("kFjl"),
          n = {
            id_no: "请填写身份证号",
            text: "请填写留言",
            tel: "请填写数字",
            email: "请填写邮箱",
            date: "请选择日期",
            time: "请选择时间",
            textarea: "请填写留言",
            mobile: "请填写手机号",
          },
          h = { id_no: "idcard", email: "text", tel: "digit", mobile: "digit" },
          g = {
            props: { opt: Object, skuId: Number },
            data: () => ({ messageValues: [] }),
            computed: {
              messageList() {
                var { messages: e } = this.opt;
                return e.map((e) =>
                  Object(a.a)({}, e, {
                    placeholder: this.getPlaceholder(e),
                    type: this.getType(e),
                    formatter: this.getFormatter(e),
                    required: +e.required,
                  })
                );
              },
            },
            watch: {
              "opt.messages": {
                immediate: !0,
                handler() {
                  this.messageValues = this.resetMessageValues();
                },
              },
              skuId(e, t) {
                e !== t && (this.messageValues = this.resetMessageValues());
              },
              messageValues: {
                immediate: !0,
                handler() {
                  this.onMessage();
                },
              },
            },
            methods: {
              onWebInput(e, t) {
                this.onInput(e, { detail: { value: t.value } });
              },
              onInput(e, t) {
                var {
                    detail: { value: s },
                  } = t,
                  { formatter: a } = this.messageList[e],
                  i = a(s);
                this.$set(this.messageValues, e, { value: i });
              },
              onDateTimerPicker(e, t) {
                this.onInput(e, t), this.$emit("blur");
              },
              onChoose(e) {
                var { value: t } = this.messageValues[e];
                t
                  ? this.$set(this.messageValues, e, { value: "" })
                  : Object(m.b)({
                      sourceType: ["camera", "album"],
                      sizeType: ["compressed"],
                      count: 1,
                    }).then((t) => {
                      var s = t.tempFilePaths[0];
                      Object(o.a)({
                        file: s,
                        imgFile: t.tempFiles[0],
                        success: (t) => {
                          this.$set(this.messageValues, e, {
                            value: t.attachment_url,
                          }),
                            this.$emit("blur");
                        },
                        fail: (e) => {
                          Object(r.a)({
                            message: e.msg || "图片上传失败",
                            zIndex: 99999,
                          });
                        },
                      });
                    });
              },
              onDateTimeClick(e) {
                this.$emit("date-click", e);
              },
              onInputBlur() {
                this.onMessage(), this.$emit("blur");
              },
              onMessage() {
                this.$emit("change", this.messageValues);
              },
              resetMessageValues() {
                var { messageConfig: e, messages: t } = this.opt,
                  s = u()(e, "initialMessages", {});
                return (t || []).map((e) => ({ value: s[e.name] || "" }));
              },
              getPlaceholder(e) {
                var t = 1 == +e.multiple ? "textarea" : e.type,
                  s = u()(this.opt.messageConfig, "placeholderMap", {});
                return e.placeholder || s[t] || n[t];
              },
              getType: (e) =>
                1 == +e.multiple
                  ? "qq" === i.default.getEnv()
                    ? "text"
                    : "textarea"
                  : h[e.type]
                  ? h[e.type]
                  : e.datetime > 0
                  ? "datetime"
                  : e.type,
              getFormatter: (e) =>
                "mobile" === e.type || "tel" === e.type
                  ? function (e) {
                      return e.replace(/[^\d.]/g, "");
                    }
                  : function (e) {
                      return e;
                    },
            },
            ud: !0,
          };
        t.default = i.default.component(g);
      },
    }
  )
);
