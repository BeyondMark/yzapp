"use strict";
var r = require("~/r");
r(
  "uum+",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "uum+": function (s, i, e) {
      e.r(i);
      var r = e("2wjL"),
        t = e("qJXH");
      Object(t.b)({
        data: { src: "" },
        onLoad(s) {
          void 0 === s && (s = {}),
            (this.orderNo = s.order_no),
            (this.fissionId = s.fissionId),
            s.sharer
              ? this.setYZData({
                  src: r.a.add("https://h5.youzan.com/wscump/fission/share", {
                    orderNo: s.order_no,
                    fissionId: s.fissionId,
                  }),
                })
              : this.setYZData({
                  src: r.a.add("https://h5.youzan.com/wscump/fission/detail", {
                    orderNo: s.order_no,
                    fissionId: s.fissionId,
                  }),
                });
        },
        onShareAppMessage() {
          var s =
            this.shareLinkImgUrl ||
            "https://img01.yzcdn.cn/public_files/a1f754e856b5d7ffdad8cc96dd98b9c0.jpg";
          return (
            this.redirectLink.length > 0 &&
              setTimeout(() => {
                this.setYZData({ src: this.redirectLink });
              }, 1e3),
            {
              imageUrl: s,
              title: "" + (this.customShareDesc || "送你一个优惠券大礼包"),
              path:
                "/packages/ump/fission/index?order_no=" +
                this.orderNo +
                "&fissionId=" +
                this.fissionId,
            }
          );
        },
        onPostMessage(s) {
          var i = (s.detail || {}).data || [];
          i.length &&
            i.forEach((s) => {
              var { type: i, config: e = {} } = s;
              if ("Fission.share" === i) {
                var {
                  nickName: r,
                  customShareDesc: t,
                  shareLinkImgUrl: a,
                  redirectLink: o,
                } = e;
                (this.nickName = r),
                  (this.customShareDesc = t),
                  (this.shareLinkImgUrl = a),
                  (this.redirectLink = o);
              }
            });
        },
      });
    },
  })
);
