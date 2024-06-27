"use strict";
var r = require("~/r");
r(
  "YvGZ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    YvGZ: function (t, e, n) {
      n.r(e);
      var i = n("Fcif"),
        a = n("9ZMt"),
        r = n("gBZH"),
        o = n("bAmA"),
        s = n.n(o),
        u = n("DXqK"),
        h = ["mobile", "nicknameAndAvatar"],
        d = (t) => Array.isArray(t) && t.length > 0,
        c = {
          name: "goods-big-btn",
          props: {
            btn: Object,
            kdtId: Number,
            first: Boolean,
            last: Boolean,
            disabled: Boolean,
            hasWxUnionId: Boolean,
            hasLogin: Boolean,
          },
          data: () => ({ remainObj: {} }),
          computed: {
            noNeedUnionScene() {
              var t = [r.a.ADD_CART, r.a.NORMAL_BUY].includes(
                this.btn.accountUnionScene
              );
              return "qq" === a.default.getEnv() && t;
            },
            authTypeList() {
              if (this.noNeedUnionScene || this.btn.noNeedAuth) return [];
              var {
                authTypeList: t,
                isHaitaoForbiden: e,
                needSkuPop: n,
                isSkuDirectOrder: i,
              } = this.btn;
              if (!1 === this.hasWxUnionId) {
                var a = ["nicknameAndAvatar", "mobile"];
                return d(t) ? s()(a.concat(this.shopMobileAuth || [])) : a;
              }
              return e
                ? ["mobile"]
                : d(t)
                ? t
                : (n && !i) || this.authScene
                ? []
                : h;
            },
            authScene() {
              var {
                accountUnionScene: t,
                submitAction: e,
                needSkuPop: n,
                isSkuDirectOrder: i,
                authTypeList: a,
                isHaitaoForbiden: r,
              } = this.btn;
              return "ORDER_SECKILL" === e
                ? t
                : (n && !i) ||
                  this.noNeedUnionScene ||
                  (a || []).length > 0 ||
                  r
                ? ""
                : t || "";
            },
            isUnRenderAuth() {
              return !this.authScene && 0 === this.authTypeList.length;
            },
            btnAllowDeny() {
              return this.btn.allowDeny;
            },
            countDownTime() {
              var { hour: t, minute: e, second: n } = this.remainObj;
              return "剩余 " + t + ":" + e + ":" + n;
            },
          },
          watch: {
            btn(t) {
              null != t && t.showCountDown && this.timeRunner();
            },
          },
          created() {
            this.tid = null;
          },
          destroyed() {
            clearTimeout(this.tid), (this.tid = null);
          },
          methods: {
            handleBigButtonClick() {
              this.$emit("btn-click", this.btn);
            },
            getRemainObj(t) {
              var e = t - Date.now(),
                n = Object(u.c)(e).strData;
              return Object(i.a)({}, n, { remain: e, day: +n.day });
            },
            timeRunner() {
              clearTimeout(this.tid);
              var t = this.btn.countDownTime;
              if (t) {
                var e = this.getRemainObj(t);
                this.remainObj = e;
                var n = e.day ? 500 : 50;
                this.tid = setTimeout(this.timeRunner.bind(this), n);
              }
            },
          },
          ud: !0,
        };
      e.default = a.default.component(c);
    },
  })
);
