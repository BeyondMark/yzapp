"use strict";
var r = require("~/r");
r(
  "9JKj",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "9JKj": function (t, e, i) {
        i.r(e);
        var a = i("Fcif"),
          n = i("MLLI"),
          s = i("KrsW"),
          o = i("ONqW"),
          u = i("vGTa"),
          l = i("3Hzb"),
          r = i("ZLeP"),
          d =
            (i("m0R/"),
            function (t) {
              void 0 === t && (t = []);
              var e = {
                  [r.a.BuyAction]: "buy_action_count",
                  [r.a.EvaluateAction]: "evaluate_action_count",
                  [r.a.EvaluateContent]: "evaluate_content_count",
                  [r.a.ViewAction]: "view_action_count",
                },
                i = t.reduce((t, i) => {
                  var { type: a } = i;
                  return (t[e[a]] = (t[e[a]] || 0) + 1), t;
                }, {});
              return Object(a.a)({}, i, { total_count: t.length });
            }),
          h = {
            name: "Danmaku",
            mixins: [s.b.externalClassesMixin(["custom-class"])],
            props: {
              source: { type: Array, required: !0, default: () => [] },
              visible: { type: Boolean, default: !0 },
              offsetTop: { type: Number, default: 0 },
              customClass: { type: String },
              minCount: { type: Number, default: 6 },
              maxTextLength: { type: Number, default: 20 },
              textProp: { type: String, default: "content" },
              autoPlay: { type: Boolean, default: !0 },
              opt: { type: Object, default: () => ({}) },
            },
            data: () => ({
              bullets: [],
              initializing: !1,
              initialized: !1,
              isPlaying: !1,
              dataSetCount: 0,
            }),
            computed: {
              innerStyle() {
                var t = 200 * this.dataSetCount + 1e4;
                return [
                  "margin-top: " + this.offsetTop + "px",
                  "opacity: " + (this.visible ? 1 : 0),
                  "--danmaku-distance: -" + t + "px",
                  "--danmaku-duration: " + 14 * t + "ms",
                ].join(";");
              },
            },
            watch: {
              visible(t) {
                t ? this.resume() : this.pause();
              },
              source: {
                handler(t) {
                  t.length >= this.minCount &&
                    (this.$emit("source", t), this.init());
                },
                immediate: !0,
              },
            },
            $_danmakuManager: null,
            destroyed() {
              this.destroy();
            },
            methods: {
              resolveSource: (t) =>
                Promise.resolve().then(() =>
                  "function" == typeof t ? t() : t || []
                ),
              init() {
                this.initialized ||
                  this.initializing ||
                  ((this.initializing = !0),
                  this.resolveSource(this.source)
                    .then((t) => {
                      if (t.length < this.minCount) this.initializing = !1;
                      else {
                        var e = new u.a({
                            onUpdate: this.updateBullets,
                            onPlayChange: this.onPlayChange,
                            onBulletView: this.onBulletView,
                          }),
                          i = Object(l.a)(t);
                        e.init({ dataSet: i, viewWidth: this.getViewWidth() }),
                          (this.$_danmakuManager = e),
                          (this.initialized = !0),
                          (this.initializing = !1),
                          (this.dataSetCount = i.length),
                          this.$emit("init", { dataSet: i });
                        var { goodsId: n } = this.opt;
                        Object(o.a)().log({
                          et: "custom",
                          ei: "goods_danmaku_info",
                          en: "商品弹幕信息",
                          pt: "g",
                          pi: this.opt.goodsId,
                          params: Object(a.a)({}, d(i), {
                            goodsId: this.opt.goodsId,
                          }),
                        });
                      }
                    })
                    .then(() => {
                      this.autoPlay && this.play();
                    })
                    .catch((t) => {
                      this.initializing = !1;
                    }));
              },
              play() {
                var t;
                null == (t = this.$_danmakuManager) || t.play();
              },
              pause() {
                var t;
                null == (t = this.$_danmakuManager) || t.pause();
              },
              stop() {
                var t;
                null == (t = this.$_danmakuManager) || t.stop();
              },
              resume() {
                var t;
                null == (t = this.$_danmakuManager) || t.resume();
              },
              refresh() {
                var t;
                null == (t = this.$_danmakuManager) ||
                  t.refresh({ viewWidth: this.getViewWidth() });
              },
              destroy() {
                var t;
                null == (t = this.$_danmakuManager) || t.destroy(),
                  (this.$_danmakuManager = null);
              },
              getViewWidth() {
                for (
                  var t,
                    e,
                    i = null == (t = this.$refs.danmaku) ? void 0 : t.$el;
                  i;

                ) {
                  var a;
                  if (null != (a = i) && a.clientWidth) break;
                  i = i.parentNode;
                }
                return (
                  (null == (e = i) ? void 0 : e.clientWidth) ||
                  Object(n.b)().windowWidth
                );
              },
              updateBullet(t) {
                var e;
                void 0 === t && (t = {}),
                  null == (e = this.$_danmakuManager) ||
                    e.updateBullet(t.bullet, t.key);
              },
              updateBullets(t) {
                this.bullets.splice(0, this.bullets.length, ...t);
              },
              onPlayChange(t) {
                (this.isPlaying = t), this.$emit("play-change", t);
              },
              onBulletView(t) {
                var { data: e } = t,
                  { type: i, extra: a = {} } = e,
                  { goodsId: n, isVideoCurrent: s, isFullscreen: u } = this.opt,
                  l = !!a.emotion;
                this.$_hasDanmakuFirstViewed ||
                  (Object(o.a)().log({
                    et: "view",
                    ei: "goods_danmaku_view",
                    en: "商品弹幕曝光",
                    pt: "g",
                    pi: n,
                    params: {
                      goodsId: n,
                      type: i,
                      container: s ? "video" : "img",
                      fullscreen: Number(u),
                      has_emotion: Number(l),
                    },
                  }),
                  Object(o.a)().log({
                    et: "view",
                    ei: "goods_danmaku_first_view",
                    en: "第一条弹幕曝光",
                    pt: "g",
                    pi: n,
                    params: {
                      goodsId: n,
                      type: i,
                      container: s ? "video" : "img",
                      fullscreen: Number(u),
                    },
                  }),
                  (this.$_hasDanmakuFirstViewed = !0)),
                  l &&
                    Object(o.a)().log({
                      et: "view",
                      ei: "goods_danmaku_emo_view",
                      en: "弹幕表情-曝光",
                      pt: "g",
                      pi: n,
                      params: { goodsId: n },
                    });
              },
            },
            ud: !0,
          },
          m = i("9ZMt");
        e.default = m.default.component(h);
      },
    }
  )
);
