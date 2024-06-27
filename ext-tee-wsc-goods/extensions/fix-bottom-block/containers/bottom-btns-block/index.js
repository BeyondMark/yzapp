"use strict";
var r = require("~/r");
r(
  "9iJE",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "9iJE": function (t, i, e) {
      e.r(i);
      var n = e("ONqW"),
        a = e("3vAz"),
        o = e("US/N"),
        s = e("9ZMt"),
        r = {
          name: "goods-bottom-btns",
          props: { opt: Object, umpActivity: Object, safeArea: Boolean },
          data: () => ({ has_wx_unionId: "unsure" }),
          logicData: () => ({ isShowCouponBtn: !1 }),
          watch: {
            "opt.bigButtons": {
              handler(t) {
                this.afterBtnChange(t);
              },
              immediate: !0,
            },
            "umpActivity.currentActivity": {
              handler(t) {
                if (2 === t.groupType && "unsure" === this.has_wx_unionId) {
                  if ("web" === s.default.getEnv())
                    if (
                      navigator.userAgent
                        .toLowerCase()
                        .indexOf("micromessenger") < 0
                    )
                      return;
                  (this.has_wx_unionId = !1),
                    Object(o.default)({
                      path: "/wscaccount/api/authorize/data.json",
                      method: "GET",
                      data: {},
                    }).then((t) => {
                      var { userInfo: i = {} } = t;
                      this.has_wx_unionId = !!i.hasUnionId;
                    });
                }
              },
            },
          },
          methods: {
            handleBigBtnClick(t) {
              this.$emit("btn-click", t);
            },
            onMiniBtnClick(t) {
              this.$emit("mini-btn-click", t);
            },
            afterBtnChange(t) {
              if (t && !this.isShowCouponBtn) {
                var i = t.find((t) => {
                  var { main: i } = t;
                  return i && i[1] && (i[1].text || "").includes("券后");
                });
                if (i) {
                  var e = a.b[i.activityName];
                  if (void 0 !== e) {
                    var o = /起$/.test(i.main[1].text);
                    (this.isShowCouponBtn = !0),
                      Object(n.a)().log({
                        et: "view",
                        ei: "show_couponprice_button",
                        en: "展示券后价（立即购买按钮上）",
                        params: {
                          isshow_qi: Number(o),
                          is_activity: e,
                          component: "estimated_price",
                        },
                      });
                  }
                }
              }
            },
          },
          ud: !0,
        };
      i.default = s.default.component(r);
    },
  })
);
