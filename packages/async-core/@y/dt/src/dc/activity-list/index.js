"use strict";
var r = require("~/r");
r(
  "QL0f",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      QL0f: function (t, i, e) {
        e.r(i);
        var s = e("9ZMt"),
          a = e("EqB2"),
          r = e("yooc"),
          o = e("bcgn"),
          l = {
            props: { kdtId: Number },
            mixins: [Object(a.a)({ optDesc: r.a })],
            data: () => ({
              filter: [],
              icon: {},
              list: [],
              all: [],
              color: "#f44",
            }),
            computed: {
              themeColor() {
                return "--theme-color: " + this.color;
              },
            },
            methods: {
              fetchList() {
                var t = this.opt.activitys.map((t) => t.activityId),
                  { kdtId: i } = this;
                Object(o.a)({ activityIds: t, kdtId: i }).then((t) => {
                  (this.list = t.list),
                    (this.all = t.list),
                    (this.icon = t.icon),
                    (this.filter = t.filter),
                    (this.color = t.color);
                });
              },
              handleListChange(t) {
                this.list = t;
              },
              handleClick(t) {
                var { featureAlias: i, id: e } = t;
                s.default.navigate({
                  url:
                    "/pages/home/feature/index?alias=" +
                    i +
                    "&kdt_id=" +
                    this.kdtId +
                    "&shopAutoEnter=1&appIdentity=14200&activityId=" +
                    e,
                });
              },
            },
            created() {
              this.fetchList();
            },
            ud: !0,
          };
        i.default = s.default.component(l);
      },
    }
  )
);
