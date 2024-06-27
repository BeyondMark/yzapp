"use strict";
var r = require("~/r");
r(
  "RQ4e",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      RQ4e: function (e, i, a) {
        a.r(i);
        var r = a("Fcif"),
          t = a("R7Zb"),
          n = a("GIyG"),
          l = a("taYb"),
          s = {
            mixins: [Object(t.a)({ optDesc: n.a })],
            computed: {
              showLinkArr() {
                return this.convertLinks();
              },
            },
            methods: {
              handleClick(e) {
                this.$emit("jumpToLink", l.a.toCamelCase(e));
              },
              convertLinks() {
                return (this.opt.link_arr || [])
                  .filter((e) => {
                    var { link_type: i } = e;
                    return ["goods", "feature", "link"].indexOf(i) >= 0;
                  })
                  .map((e) => {
                    var {
                        alias: i,
                        link_type: a,
                        link_title: t,
                        link_url: n,
                      } = e,
                      l = n,
                      s = a;
                    return (
                      i ||
                        "feature" !== a ||
                        (n.indexOf("alias=") > 0
                          ? ((l =
                              "/packages/home/feature/index?alias=" +
                              n.replace(/.*\?alias=(.*)/, "$1")),
                            (s = "weapp_web_link"))
                          : ((s = "weapp_web_link"),
                            (l =
                              "/packages/home/feature/index?alias=" +
                              n.replace(/.*\/feature\/(.*)/, "$1")))),
                      Object(r.a)({}, e, {
                        linkTitle: t,
                        linkUrl: l,
                        linkType: s,
                      })
                    );
                  });
              },
            },
            ud: !0,
          },
          u = a("9ZMt");
        i.default = u.default.component(s);
      },
    }
  )
);
