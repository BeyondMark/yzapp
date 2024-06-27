"use strict";
var r = require("~/r");
r(
  "umlx",
  Object.assign({}, require("~/v.js").modules, {
    umlx: function (e, t, r) {
      r.r(t);
      var o = r("US/N"),
        i = {
          name: "GroupBargin",
          props: {
            currentActivity: { type: Object },
            picture: { type: String },
            price: { type: String },
            kdtId: { type: Number },
          },
          data: () => ({
            avatarPlaceHolder:
              "https://img01.yzcdn.cn/upload_files/2023/06/20/Ftb-ExXTx6rtnG2ZGI1PtlhpAwR-.png",
            closeStorage: !1,
            showPop: !1,
          }),
          computed: {
            drainageInfo() {
              var { drainageInfo: e = {} } = this.currentActivity;
              return e;
            },
            weComFriendDecrease() {
              var { drainageInfo: e = {} } = this.currentActivity;
              return (e.weComFriendDecrease / 100).toFixed(2);
            },
            preferentialPrice() {
              var e = this.price.split("起"),
                t = (
                  Number(e[0]) - Number(this.weComFriendDecrease) > 0
                    ? Number(e[0]) - Number(this.weComFriendDecrease)
                    : 0
                ).toFixed(2);
              return e.length > 1 ? t + "起" : t;
            },
          },
          methods: {
            openDialog() {
              var e,
                { drainageInfo: t = {} } = this.currentActivity,
                { isDrainage: r } = t,
                i = getCurrentPages(),
                s = i[i.length - 1],
                { options: n } = s,
                a = s.route + "?";
              Object.keys(n).forEach((e) => {
                a += e + "=" + n[e] + "&";
              }),
                (e = a.substring(0, a.length - 1)),
                r &&
                  (this.openPop(),
                  Object(o.default)({
                    method: "POST",
                    data: {
                      channel: 2,
                      goodsPictureUrl: this.picture,
                      backUrl: e,
                    },
                    path: "/wscump/groupon/record_user.json",
                  }));
            },
            setCloseStorage() {
              sessionStorage.setItem("close-storage", !0),
                (this.closeStorage = !0);
            },
            openPop() {
              this.showPop = !0;
            },
            closePop() {
              this.showPop = !1;
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      t.default = s.default.component(i);
    },
  })
);
