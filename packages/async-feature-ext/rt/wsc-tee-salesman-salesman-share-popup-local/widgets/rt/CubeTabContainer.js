"use strict";
var r = require("~/r");
r(
  "RdGP",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    RdGP: function (t, e, s) {
      s.r(e);
      var r = s("Fcif"),
        a = s("NHEX"),
        i = s.n(a),
        o =
          (s("5kn2"),
          {
            props: {
              goodsInfo: Object,
              goodsPosterInfo: Object,
              shopRights: Object,
              shareData: Object,
              smartTextData: Object,
              shortPromoteUrl: String,
              shortLinkPromoteUrl: String,
              kdtId: [Number, String],
              isShareStyle: Boolean,
              show: Boolean,
              salesmanPopupTabs: Array,
              instanceId: String,
              isWxShareImg: Boolean,
              hasAuth: Boolean,
            },
            data() {
              return {
                dcPs: "",
                pid: String(Math.random()),
                activeTab: this.salesmanPopupTabs[0].type,
                imgCount: 1,
                posterIndex: 0,
                posterImgArr: [],
              };
            },
            computed: {
              instance() {
                return this.ctx.instance[this.instanceId];
              },
            },
            watch: {
              show(t) {
                this.isShareStyle &&
                  (t && this.hasAuth && "poster" === this.activeTab
                    ? this.getPoster()
                    : t || ((this.posterImgArr = []), (this.posterIndex = 0)));
              },
            },
            mounted() {
              this.$emit("tab-change", this.salesmanPopupTabs[0].type);
              var t = this.ctx.logger.getLogParams();
              this.dcPs = i()(t, "context.dc_ps", "");
            },
            methods: {
              handlePromoteTip(t) {
                this.$emit("promote-tip", t);
              },
              handleOpenAssistant() {
                this.$emit("open-assistant");
              },
              onChange(t) {
                t.name !== this.activeTab &&
                  (this.$emit("tab-change", t.name),
                  (this.activeTab = t.name),
                  "poster" === t.name && this.hasAuth && this.getPoster());
              },
              onSwiperChange(t) {
                this.posterIndex = t;
              },
              getPosterParams(t) {
                var e, s;
                (e = this.isShareStyle
                  ? { page: "/" + this.instance.path }
                  : {}),
                  (s = { autoHeight: 1 });
                var a = this.instance.getGoodsPosterParams({
                  scene: Object(r.a)({ dcPs: this.dcPs }, e),
                  params: Object(r.a)({ isSupportHideUserInfo: !0 }, s),
                });
                if ("function" != typeof t) return a;
                t.bind(this)(a);
              },
              updateTargetPoster(t, e) {
                this.posterImgArr = this.posterImgArr.map((s, r) =>
                  r === e ? t : s
                );
              },
              genPoster(t) {
                var e = this.posterImgArr[t];
                (e.loading = !0),
                  this.getSinglePoster(1, t)
                    .then((s) => {
                      s
                        ? this.updateTargetPoster(
                            { image: s, loading: !1, error: void 0 },
                            t
                          )
                        : this.updateTargetPoster(
                            Object(r.a)({}, e, { loading: !1, error: !0 }),
                            t
                          );
                    })
                    .catch((s) => {
                      this.updateTargetPoster(
                        Object(r.a)({}, e, { loading: !1, error: s }),
                        t
                      );
                    });
              },
              getPoster() {
                var { posterItemModel: t = {} } = this.goodsPosterInfo || {},
                  { pictures: e = [{}] } = t;
                (this.imgCount = e.length),
                  this.posterImgArr.length
                    ? this.posterImgArr.forEach((t, e) => {
                        !t.loading && t.error && this.genPoster(e);
                      })
                    : ((this.posterImgArr = e.map((t) => ({
                        image: t.url,
                        loading: !0,
                        error: void 0,
                      }))),
                      e.forEach((t, e) => {
                        this.genPoster(e);
                      }));
              },
              getSinglePoster(t, e) {
                void 0 === t && (t = 1), void 0 === e && (e = 0);
                var s, a;
                return (
                  (s = this.isShareStyle
                    ? { page: "/" + this.instance.path }
                    : {}),
                  (a = { autoHeight: 1 }),
                  this.instance
                    .getGoodsPoster({
                      scene: Object(r.a)({ dcPs: this.dcPs }, s),
                      params: Object(r.a)(
                        { isSupportHideUserInfo: !0, goodsImgIndex: e },
                        a
                      ),
                    })
                    .then((t) => t.imgUrl)
                    .catch(() => {
                      t >= 1 &&
                        setTimeout(() => {
                          this.getSinglePoster(--t, e);
                        }, 1e3);
                    })
                );
              },
              updateAuth() {
                this.$emit("handle-update-auth");
              },
            },
          }),
        n = s("9ZMt");
      e.default = n.default.component(o);
    },
  })
);
