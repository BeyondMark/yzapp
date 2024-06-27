"use strict";
var r = require("~/r");
r(
  "cBl9",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      cBl9: function (t, e, i) {
        i.r(e);
        var s = i("AGZf"),
          a = i("UfCC"),
          r = {
            name: "ShareEncourage",
            props: {
              query: { type: Object },
              seActivity: { type: Object },
              kdtId: { type: Number },
            },
            data: () => ({ isRequested: !1 }),
            watch: {
              query() {
                this.handle();
              },
              seActivity: {
                immediate: !0,
                handler() {
                  this.handle();
                },
              },
            },
            methods: {
              handle() {
                if (!this.isRequested) {
                  var t = this.query && this.query.shareTag,
                    e = this.seActivity && this.seActivity.activityAlias;
                  t &&
                    e &&
                    ((this.isRequested = !0),
                    Object(a.b)({
                      kdtId: this.kdtId,
                      shareTag: this.query.shareTag,
                      activityAlias: this.seActivity.activityAlias,
                      activityId: this.seActivity.activityId,
                    }).then((t) => {
                      t &&
                        t.alias &&
                        Object(s.a)("已帮好友获得奖励，分享即得好礼！");
                    }));
                }
              },
            },
            ud: !0,
          },
          c = i("9ZMt");
        e.default = c.default.component(r);
      },
    }
  )
);
