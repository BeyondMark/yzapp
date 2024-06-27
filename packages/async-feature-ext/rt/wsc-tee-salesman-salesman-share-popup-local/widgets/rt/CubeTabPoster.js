"use strict";
var r = require("~/r");
r(
  "QIEd",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      QIEd: function (e, t, s) {
        s.r(t);
        var r = s("+I+c"),
          a = s("AGZf"),
          i = s("5kn2"),
          n = s("Dj8g"),
          o = s("9ZMt"),
          h = s("w2Y9"),
          d = s.n(h),
          p = s("MLLI"),
          g = ["page"],
          c = {
            name: "CubeTabPoster",
            props: {
              posterIndex: Number,
              posterImgArr: Array,
              hasAuth: Boolean,
              kdtId: [Number, String],
              imgCount: Number,
              isWxShareImg: Boolean,
              instanceId: String,
            },
            data: () => ({
              swiperOffset: -288,
              imgMode: "heightFix",
              pid: "salesman-cube-poster-" + 10 * Math.random(),
              loadingStyle:
                "position: absolute;top: 0;left: 0;right: 0;bottom: 0;height: auto;background: rgba(0, 0, 0, 0.3);",
            }),
            computed: {
              instance() {
                return this.ctx.instance[this.instanceId];
              },
              posterSwipeClass() {
                return (
                  "poster-banner-swipe" +
                  (this.posterIndex !== this.posterImgArr.length - 1 ||
                  1 === this.posterImgArr.length
                    ? " offset"
                    : "")
                );
              },
            },
            mounted() {
              var e = Object(p.b)(),
                t = e.windowWidth,
                { windowHeight: s } = e,
                r = s / t;
              (this.imgMode = r > 2.16 || r < 1.5 ? "widthFix" : "heightFix"),
                (this.swiperOffset = t - 288);
            },
            methods: {
              onSwipeChange(e) {
                this.$emit("on-swiper-change", e);
              },
              reGenPoster(e) {
                var t, s;
                this.$emit(
                  "re-gen-poster",
                  null == (t = e.target) || null == (s = t.dataset)
                    ? void 0
                    : s.index
                );
              },
              savePoster() {
                var e;
                this.instance.handleLog(i.b.poster, {
                  posterType: "savePoster",
                }),
                  a.a.loading("保存中");
                var t =
                  null == (e = this.posterImgArr[this.posterIndex])
                    ? void 0
                    : e.image;
                Object(n.e)(t)
                  .then(() => {
                    a.a.clear(),
                      a.a.success({
                        message: "保存成功",
                        type: "success",
                        onClose: () => this.$emit("try-open-assistant"),
                      });
                  })
                  .catch(a.a);
              },
              shareWechatFriends() {
                var e,
                  t =
                    null == (e = this.posterImgArr[this.posterIndex])
                      ? void 0
                      : e.image,
                  s = () => {
                    o.default.$native.previewImage({ current: t, urls: [t] });
                  };
                this.instance.handleLog(i.b.poster, {
                  posterType: "wechatShareImg",
                }),
                  this.isWxShareImg
                    ? this.$emit("get-poster-params", (e) => {
                        var a = {};
                        try {
                          a = JSON.parse(decodeURIComponent(e.scene));
                          var { page: i } = a,
                            o = Object(r.a)(a, g),
                            h = d.a.add(i, o);
                          Object(n.f)({
                            instance: this.instance,
                            imgUrl: t,
                            entrancePath: h,
                            fallback: s,
                          });
                        } catch (e) {
                          this.instance.monitor({
                            msg: "赚字微信图片分享-JSON.parse失败",
                            err: e,
                          }),
                            s();
                        }
                      })
                    : s();
              },
              handleAuthorize() {
                this.$emit("update-auth"), this.$emit("get-poster");
              },
            },
            ud: !0,
          };
        t.default = o.default.component(c);
      },
    }
  )
);
