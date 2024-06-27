"use strict";
var r = require("~/r");
r(
  "/042",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/042": function (e, t, s) {
        s.r(t);
        var o = s("9ZMt"),
          i = s("EqB2"),
          a = s("rVQJ"),
          d = s("vqIT"),
          n = s("z5Jb"),
          r = {
            mixins: [Object(i.a)({ optDesc: a.a })],
            props: {
              kdtId: Number,
              shopInfo: { type: Object, default: () => ({}) },
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({
              goodList: [],
              customTitle: { bgColor: "transparent", showDivider: !1 },
            }),
            computed: {
              pageMargin() {
                return o.default.style.useTpx(this.opt.pageMargin);
              },
              url() {
                var e = "",
                  { goodsFrom: t, groupList: s = [] } = this.opt,
                  { kdtId: o } = this,
                  i = (s.length && s[0].alias) || "";
                switch (t) {
                  case "course":
                    e =
                      "/packages/edu/webview/index?targetUrl=" +
                      encodeURIComponent(
                        "https://h5.youzan.com/wscvis/edu/all-course?kdt_id=" +
                          o
                      );
                    break;
                  case "column":
                    e = "/packages/paidcontent/list/index?type=column";
                    break;
                  case "content":
                    e = "/packages/paidcontent/list/index?type=content";
                    break;
                  case "live":
                    e = "/packages/paidcontent/list/index?type=live";
                    break;
                  case "group":
                    e =
                      "/packages/edu/webview/index?targetUrl=" +
                      encodeURIComponent(
                        "https://h5.youzan.com/wscvis/edu/course-group?alias=" +
                          i +
                          "&kdt_id=" +
                          o
                      );
                    break;
                  case "classLive":
                    e = "/packages/paidcontent/list/index?type=classLive";
                    break;
                  default:
                    e = "";
                }
                return e;
              },
            },
            created() {
              this.fetchDataList();
            },
            methods: {
              fetchDataList() {
                var { goodsFrom: e } = this.opt;
                switch (e) {
                  case "course":
                    this.getAllCourseList();
                    break;
                  case "column":
                    this.getPaidContentList("columnlist.json");
                    break;
                  case "content":
                    this.getPaidContentList("contentlist.json");
                    break;
                  case "live":
                    this.getPaidContentList("livelist.json");
                    break;
                  case "group":
                    this.getGroupList();
                    break;
                  case "classLive":
                    this.getPaidContentList("livelist.json");
                    break;
                  default:
                    this.getAllCourseList();
                }
              },
              getAllCourseList() {
                var {
                    goodsFromMode: e,
                    goodList: t,
                    courseType: s = 2,
                    maxNewestGoods: o,
                  } = this.opt,
                  { kdtId: i } = this,
                  a = {};
                (a =
                  e && t.length
                    ? { kdtId: i, aliases: t.map((e) => e.alias).join(",") }
                    : { kdtId: i, pageNumber: 1, pageSize: o }),
                  0 === e && (a.courseType = s),
                  1 === e && (a.source = 1),
                  Object(d.a)(a).then((e) => {
                    e &&
                      e.content &&
                      e.content.length &&
                      this.setGoodList(e.content);
                  });
              },
              getPaidContentList(e) {
                var {
                    goodsFromMode: t,
                    goodList: s,
                    maxNewestGoods: o,
                    goodsFrom: i,
                  } = this.opt,
                  { kdtId: a } = this,
                  n = {};
                (n =
                  t && s.length
                    ? { kdtId: a, ids: s.map((e) => e.id).join(","), source: 1 }
                    : { kdtId: a, pageNumber: 1, pageSize: o }),
                  ("live" !== i && "classLive" !== i) ||
                    (n.liveQueryScene = "live" === i ? 1 : 2),
                  Object(d.c)(e, n).then((e) => {
                    e && e.length && this.setGoodList(e);
                  });
              },
              getGroupList() {
                var { groupList: e, maxNewestGoods: t } = this.opt,
                  { kdtId: s, buyerId: o } = this;
                if (e && e.length) {
                  var i = {
                    kdtId: s,
                    pageNumber: 1,
                    buyerId: o,
                    alias: e[0].alias || "",
                    pageSize: t || 9,
                  };
                  Object(d.b)(i).then((e) => {
                    e && e.content && this.setGoodList(e.content);
                  });
                }
              },
              setGoodList(e) {
                var { opt: t, themeColors: s, shopInfo: o, kdtId: i } = this;
                this.goodList = Object(n.a)({
                  goodList: e,
                  opt: t,
                  kdtId: i,
                  themeColors: s,
                  virtualGoodsCannotWePay: o.virtualGoodsCannotWePay,
                });
              },
            },
            ud: !0,
          };
        t.default = o.default.component(r);
      },
    }
  )
);
