"use strict";
var r = require("~/r");
r(
  "9DFH",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "9DFH": function (t, i, a) {
      a.r(i);
      var e = a("Fcif"),
        s = a("Ix7h"),
        o = a("R7Zb"),
        h = a("GGNd"),
        l = a("5JV4"),
        r = a("82CI"),
        d = {
          mixins: [Object(o.a)({ optDesc: h.a })],
          props: {
            kdtId: { type: Number },
            offlineId: { type: Number, default: 0 },
            appId: { type: String },
          },
          data: () => ({
            selectedGroup: "",
            tags: [],
            scrollPosition: 0,
            loadTag: {},
          }),
          logicData: () => ({
            selectedTag: "",
            aliasHeightMap: {},
            aliasTagGroupHeightMap: {},
          }),
          computed: {
            isShowGoodsAddNumber() {
              var t;
              return (
                (null == (t = this._opt) ? void 0 : t.isShowGoodsAddNumber) ||
                !1
              );
            },
            groupItemOpt() {
              return Object(e.a)(
                {
                  offlineId: this.offlineId,
                  kdtId: this.kdtId,
                  appId: this.appId,
                },
                this.opt.tagGroupOpt,
                { isShowGoodsAddNumber: this.isShowGoodsAddNumber }
              );
            },
            scrollStyle: () =>
              "height: calc(100vh - " + (Object(l.a)() + 50) + "px);",
          },
          watch: {
            opt() {
              this.init();
            },
          },
          created() {
            this.initComponent();
          },
          methods: {
            addGroup(t) {
              var i = Object(e.a)({}, this.loadTag);
              (i[t] = !0), (this.loadTag = i);
            },
            init() {
              (this.selectedGroup = ""),
                (this.selectedTag = ""),
                (this.tags = []),
                this.$nextTick(() => {
                  this.initComponent();
                });
            },
            onPullDownRefresh() {
              this.init();
            },
            initComponent() {
              var { tags: t = [], tagGroupOpt: i = {} } = this.opt,
                { goodsMargin: a } = i,
                s = 0,
                o = +a + ((i.itemCardOpt && i.itemCardOpt.imgHeight) || r.b),
                h = {};
              t.forEach((t, i) => {
                if (0 === i || 1 === i) {
                  var a = Object(e.a)({}, this.loadTag);
                  (a[t.alias] = !0), (this.loadTag = a);
                }
                h[t.alias] = [s];
                var l = (t.number > 0 ? o * t.number : r.a) + r.d;
                (s += l), h[t.alias].push(s), (t.height = l);
              }),
                (this.aliasHeightMap = h),
                (this.itemHeight = o),
                (this.selectedGroup = (t[0] || {}).alias),
                (this.tags = t);
            },
            handleNavChange(t) {
              var { alias: i } = t;
              (this.selectedGroup = i),
                (this.selectedTag = i),
                (this.isTapNavBeforeScroll = !0),
                (this.scrollPosition = this.aliasHeightMap[i][0]);
            },
            handleGroupScroll: Object(s.a)(function (t) {
              this.isTapNavBeforeScroll || this.focusTabOnScroll(t);
            }, 300),
            handleGroupTouch() {
              this.isTapNavBeforeScroll = !1;
            },
            focusTabOnScroll(t) {
              var {
                  detail: { scrollTop: i },
                } = t,
                a = "";
              Object.keys(this.aliasHeightMap).forEach((t) => {
                var [e, s] = this.aliasHeightMap[t];
                i >= e && i < s && (a = t);
              }),
                this.selectedGroup !== a && (this.selectedGroup = a);
            },
            setItemHeight(t) {
              var { alias: i, number: a, tagGroupHeight: e } = t,
                { tags: s = [] } = this.opt;
              this.aliasTagGroupHeightMap[i] = e;
              var {
                  aliasHeightMap: o,
                  aliasTagGroupHeightMap: h,
                  itemHeight: l,
                } = this,
                d = [...s],
                p = 0;
              d.forEach((t) => {
                t.alias === i && (t.number = a), (o[t.alias] = [p]);
                var e;
                (e = (t.number > 0 ? h[t.alias] || l * t.number : r.a) + r.d),
                  (p += e),
                  o[t.alias].push(p),
                  (t.height = e);
              }),
                (this.aliasHeightMap = o),
                (this.tags = d),
                this.isTapNavBeforeScroll &&
                  (this.scrollPosition = o[this.selectedTag][0]);
            },
            handleBuyClick(t) {
              this.$emit("button-click", t);
            },
            handleItemClick(t) {
              this.$emit("item-click", t);
            },
          },
          ud: !0,
        },
        p = a("9ZMt");
      i.default = p.default.component(d);
    },
  })
);
