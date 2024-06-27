"use strict";
var r = require("~/r");
r(
  "Hbje",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Hbje: function (e, t, a) {
        a.r(t);
        var r = a("9ZMt"),
          i = a("AGZf"),
          s = a("EqB2"),
          d = a("jmdf"),
          c = a("lC4U"),
          o = {
            mixins: [Object(s.a)({ optDesc: d.a })],
            props: { kdtId: Number },
            data: () => ({ list: [] }),
            computed: {
              itemLinkMargin() {
                return r.default.style.useTpx(this.opt.goodsPadding / 2);
              },
              wrapMargin() {
                return r.default.style.useTpx(this.opt.pageMargin);
              },
            },
            created() {
              this.fetchTeacherList();
            },
            methods: {
              onTeacherTap(e) {
                var t =
                  "/packages/edu/webview/index?targetUrl=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscvis/edu/master-detail?&kdt_id=" +
                      this.kdtId +
                      "&teacherId=" +
                      e
                  );
                r.default.navigate({ type: "navigateTo", url: t });
              },
              fetchTeacherList() {
                var { pickTeacher: e, teacherList: t } = this.opt,
                  { kdtId: a } = this,
                  r = { kdtId: a };
                if (0 === e) {
                  if (t[0].isMock) return;
                  r.source = 1;
                  var s = t.map((e) => e.id).join(",");
                  r.teacherIds = "" === s ? void 0 : s;
                }
                1 === e && ((r.source = 0), (r.page = 1), (r.page_size = 50)),
                  Object(c.a)(r)
                    .then((e) => {
                      this.list = e.content;
                    })
                    .catch((e) => {
                      Object(i.a)(e || "获取老师列表失败");
                    });
              },
            },
            ud: !0,
          };
        t.default = r.default.component(o);
      },
    }
  )
);
