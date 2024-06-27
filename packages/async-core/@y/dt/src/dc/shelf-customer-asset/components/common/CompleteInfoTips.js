"use strict";
var r = require("~/r");
r(
  "FGzv",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      FGzv: function (e, t, r) {
        r.r(t);
        var i = r("w2Y9"),
          l = r.n(i),
          d = r("9ZMt"),
          a = r("rxfT"),
          s = {
            props: {
              title: { default: "", type: String },
              cardStyle: String,
              bgType: String,
            },
            methods: {
              handleClick() {
                var e = l.a.add(
                  "https://h5.youzan.com/wscuser/levelcenter/simplified-fill",
                  {
                    kdt_id: this.kdtId,
                    levelType: a.h.Free,
                    fromScene: "complete",
                    title: "完善信息",
                    jumpTo: "Home",
                  }
                );
                d.default.navigate({
                  url: "pages/common/webview-page/index?src=" + e,
                });
              },
            },
            ud: !0,
          };
        t.default = d.default.component(s);
      },
    }
  )
);
