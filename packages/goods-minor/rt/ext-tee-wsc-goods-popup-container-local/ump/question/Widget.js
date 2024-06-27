"use strict";
var r = require("~/r");
r(
  "drQE",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      drQE: function (t, e, s) {
        s.r(e);
        var a = s("Fcif"),
          i = s("9ZMt"),
          o = s("AGZf"),
          r = s("Tewj"),
          n = s("lgMb"),
          u = s("T5YU"),
          d = {
            name: "ump-question",
            props: { kdtId: Number, currentActivity: Object, alias: String },
            data: () => ({ radio: null, show: !1, questionData: null }),
            computed: {},
            created() {
              r.default.on("popupContainer:question:show", (t) => {
                var { questionId: e } = t;
                Object(u.b)(e)
                  .then((t) => {
                    (this.questionData = t), (this.show = !0);
                  })
                  .catch((t) => {
                    Object(n.b)(t, { message: "预约问题获取失败，请稍后重试" });
                  });
              });
            },
            destroyed() {
              r.default.off("popupContainer:question:show");
            },
            methods: {
              onChange(t) {
                this.radio = t;
              },
              onClose() {
                this.show = !1;
              },
              submitAnswer() {
                var { answerKey: t } = this.questionData;
                t === this.radio
                  ? this.bookSeckill()
                  : Object(o.a)("哎呀，答案不对哦");
              },
              bookSeckill() {
                var { activityId: t } = this.currentActivity,
                  e = this.$getPageQuery(),
                  s = "weapp" === i.default.getEnv();
                Object(u.a)({
                  kdtId: this.kdtId,
                  seckillId: t,
                  pushWay: s ? 2 : 1,
                })
                  .then(() => {
                    this.$emit("dmc-jump", {
                      type: "navigate",
                      page: "GoodsDetail",
                      options: Object(a.a)({ alias: this.alias }, e),
                    });
                  })
                  .catch((t) => {
                    Object(n.b)(t, { message: "秒杀预约失败，请稍后重试" });
                  });
              },
            },
            ud: !0,
          };
        e.default = i.default.component(d);
      },
    }
  )
);
