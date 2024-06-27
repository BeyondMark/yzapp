"use strict";
var r = require("~/r");
r(
  "b3Pu",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      b3Pu: function (t, i, s) {
        s.r(i);
        var e = s("dLlk"),
          o = {
            name: "trade-records-list",
            props: { goodsId: Number, rootKdtId: Number },
            data: () => ({
              list: [],
              pageNo: 0,
              loading: !1,
              finished: !1,
              error: !1,
            }),
            watch: { loading: "checkList", finished: "checkList" },
            mounted() {
              setTimeout(() => {
                this.getList();
              }, 300);
            },
            methods: {
              getList(t) {
                var { pageNo: i = this.pageNo + 1 } = void 0 === t ? {} : t;
                this.goodsId
                  ? this.loading ||
                    ((this.loading = !0),
                    Object(e.a)(this.goodsId, this.rootKdtId, i)
                      .then((t) => {
                        var { list: s = [], hasNext: e = !1 } = t || {};
                        (this.list = this.list.concat(s)),
                          (this.pageNo = i),
                          (this.finished = !e),
                          (this.loading = !1);
                      })
                      .catch(() => {
                        (this.error = !0), (this.loading = !1);
                      }))
                  : (this.finished = !0);
              },
              checkList() {
                this.$nextTick(() => {
                  var t;
                  null == (t = this.$refs.list) || null == t.check || t.check();
                });
              },
            },
            ud: !0,
          },
          d = s("9ZMt");
        i.default = d.default.component(o);
      },
    }
  )
);
