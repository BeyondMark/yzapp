"use strict";
var r = require("~/r");
r(
  "cSla",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    cSla: function (e, t, i) {
      i.r(t);
      var s = i("9ZMt"),
        n = i("2wjL"),
        a = i("EqB2"),
        o = i("TOEM"),
        c = i("HbRL"),
        r = i("vGYG"),
        u = i("MLLI"),
        h = i("mztD"),
        d = i("QlcU"),
        g = {
          mixins: [Object(a.a)({ optDesc: o.a })],
          props: {
            kdtId: Number,
            shopInfo: Object,
            businessId: String,
            sessionFrom: String,
          },
          data: () => ({
            canIUse: s.default.$native.canIUse("official-account"),
            msgImg: "",
            messagePath: "",
            isJumpH5: !1,
            publicNumberPath: "",
            scene: "",
          }),
          computed: {
            containerStyle() {
              var { bgColor: e, pagePadding: t } = this.opt;
              return "background:" + e + "; padding:6px " + t + "px";
            },
          },
          mounted() {
            var { kdtId: e } = this,
              { scene: t } = s.default.$native.getLaunchOptionsSync();
            (this.scene = t),
              (this.canIUse = [1011, 1047, 1089, 1038].some((e) => e === +t)),
              this.getPublicLink(),
              (this.msgImg = this.getMsgConfig().img),
              (this.messagePath = this.getMessagePath(e)),
              (this.isJumpH5 = this.jumpH5()),
              (this.opt.logo = Object(h.a)(this.opt.logo, "!260x0.jpg"));
          },
          methods: {
            jumpH5() {
              return this.checkWxVersion() && this.opt.scene !== d.g.WecomGroup;
            },
            checkWxVersion() {
              if (u.b) {
                var { version: e } = Object(u.b)();
                return -1 !== Object(c.a)(e, "8.0.8");
              }
              return !1;
            },
            handleClick() {
              this.$emit("jumpToLink", this.opt);
            },
            handleContact(e) {
              var { detail: t } = e;
              this.$emit("handleFansClick"),
                t.path && s.default.navigate({ url: n.a.add(t.path, t.query) });
            },
            handleOfficialAccountLoadError() {
              this.canIUse = !1;
            },
            getMessagePath(e) {
              var t = this.getMsgConfig(this.opt),
                i = {
                  yz_live_code_link: this.getH5Link(e),
                  yz_live_code_image: encodeURIComponent(d.b),
                  yz_live_code_desc: t.desc,
                  yz_live_code_title: t.title,
                };
              return n.a.add(d.a, i);
            },
            getH5Link(e) {
              var { subType: t } = this.opt,
                i = "";
              return (
                (i =
                  "1" === t
                    ? this.getLiveCodeLink(e)
                    : this.getOfficialLink(e)),
                encodeURIComponent(i)
              );
            },
            getLiveCodeLink(e) {
              var { qrcode: t, scene: i } = this.opt;
              return (
                "https://h5.youzan.com/v3/message/live-qrcode/" +
                (d.h[i] || "member") +
                "?kdtId=" +
                e +
                "&activitiesId=" +
                t +
                "&source=zhangfen"
              );
            },
            getOfficialLink: (e) =>
              "https://h5.youzan.com/wscshop/officialAccountQrcode?kdtId=" +
              e +
              "&source=zhangfen",
            getMsgConfig() {
              var { subType: e, scene: t } = this.opt,
                i = "member";
              return (
                "2" === e
                  ? (i = "official")
                  : t === d.g.WeiXinGroup
                  ? (i = "group")
                  : t === d.g.WecomGroup && (i = d.g.WecomGroup),
                {
                  title: encodeURIComponent(d.f[i]),
                  desc: encodeURIComponent(d.d[i] + "，获取更多优惠信息及服务"),
                  img: d.e[i],
                }
              );
            },
            getPublicLink() {
              Object(r.a)().then((e) => {
                if (e) {
                  var { wx_attention_article: t } = e,
                    i = t && JSON.parse(t),
                    { url: s } = i || {};
                  this.publicNumberPath = s;
                }
              });
            },
            handleJumpPublic() {
              if (this.publicNumberPath) {
                this.$emit("handleFansClick");
                var e = Date.parse(new Date()),
                  t = this.publicNumberPath + "?t=" + e;
                s.default.navigate({
                  url:
                    "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(t),
                });
              }
            },
          },
          ud: !0,
        };
      t.default = s.default.component(g);
    },
  })
);
