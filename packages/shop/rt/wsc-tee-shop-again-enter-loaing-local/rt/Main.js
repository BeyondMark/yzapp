"use strict";
var r = require("~/r");
r(
  "Prev",
  Object.assign({}, require("~/v.js").modules, {
    Prev: function (e, t, a) {
      a.r(t);
      var r = a("9ZMt"),
        d = a("AGZf"),
        n = a("w2Y9"),
        i = a.n(n),
        u = a("SVbq"),
        o = {
          name: "again-enter-loaing",
          data: () => ({}),
          mounted() {
            this.redirectPage(),
              d.a.loading({ duration: 0, message: "重新进店中" });
          },
          methods: {
            redirectPage() {
              var e;
              ((e = 1e3), new Promise((t, a) => setTimeout(t, e))).then(() => {
                Object(u.l)().then((e) => {
                  var { kdtid: t } = e,
                    a = this.$getPageQuery(),
                    d = i.a.add(
                      decodeURIComponent(a.reUrl),
                      t ? { subKdtId: t } : {}
                    );
                  r.default
                    .navigate({ url: d, type: "redirectTo" })
                    .catch(() => {
                      r.default.navigate({ url: d, type: "reLaunch" });
                    });
                });
              });
            },
          },
          ud: !0,
        };
      t.default = r.default.component(o);
    },
  })
);
