"use strict";
var r = require("~/r");
r(
  "zKK8",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      zKK8: function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          s = a("AGZf"),
          c = a("US/N"),
          r = a("JijB"),
          n = a.n(r),
          d = a("jBaK"),
          h = {
            props: { opt: Object },
            data() {
              var t = new Date();
              return {
                showInstructions: !1,
                skuExtraList: [],
                selectedDate: {},
                calendarData: {},
                activeMonth: { year: t.getFullYear(), name: t.getMonth() + 1 },
              };
            },
            logicData: () => ({ requestData: {}, cache: {} }),
            watch: {
              opt: {
                handler() {
                  this.init();
                },
                immediate: !0,
              },
              "opt.ecard.isPriceCalendar": {
                handler() {
                  this.setPluginsData();
                },
                immediate: !0,
              },
            },
            methods: {
              init() {
                var t,
                  { showInstructions: e = !0, ecard: a } = this.opt;
                (this.showInstructions =
                  e &&
                  (null == a || null == (t = a.instructions)
                    ? void 0
                    : t.length)),
                  this.getDateList();
              },
              getDateList() {
                var t;
                if (null != (t = this.opt.ecard) && t.isPriceCalendar) {
                  var {
                      stockDate: e,
                      activityPrice: a,
                      originPrice: i,
                      nearDateList: s,
                      stockNum: c,
                    } = this.selectedDate,
                    {
                      goodsId: r,
                      alias: n,
                      activityInfo: d,
                      skuId: h,
                      noneSku: l = !1,
                      price: o,
                      selectedSkuComb: u,
                    } = this.opt;
                  ((this.lastSelectedSkuComb && !u) ||
                    (!this.lastSelectedSkuComb && u) ||
                    (this.lastSelectedSkuComb &&
                      u &&
                      this.lastSelectedSkuComb.skuId !== u.skuId)) &&
                    Object.keys(this.selectedDate).length &&
                    this.onDateSelect({}),
                    (this.lastSelectedSkuComb = u),
                    l || u
                      ? ((this.requestData = {
                          activityAlias:
                            (null == d ? void 0 : d.activityAlias) || "",
                          activityType:
                            (null == d ? void 0 : d.activityType) || 0,
                          itemSkuId: h,
                          alias: n,
                          itemId: r,
                        }),
                        this.fetDateList())
                      : this.fetMockDateList(o);
                }
              },
              fetMockDateList(t) {
                (this.calendarData = Object(d.c)(t, this.opt.ecard)),
                  (this.isRequesting = !1);
              },
              fetDateList() {
                var t;
                if (
                  null != (t = this.opt.ecard) &&
                  t.isPriceCalendar &&
                  !this.isRequesting
                ) {
                  if (this.cache && this.cache[this.requestData.itemSkuId])
                    return (
                      Object(d.b)(
                        this.cache[this.requestData.itemSkuId],
                        this.opt.ecard
                      ),
                      void (this.calendarData =
                        this.cache[this.requestData.itemSkuId])
                    );
                  this.isRequesting = !0;
                  var e = new Date();
                  e.setMonth(e.getMonth() + 4), e.setDate(0);
                  var a = Object(i.a)({}, this.requestData || {}, {
                    beginDate: n()(new Date(), "YYYY-MM-DD"),
                    endDate: n()(e, "YYYY-MM-DD"),
                    kdtId: this.opt.kdtId,
                  });
                  return Object(c.default)({
                    path: "/wscshop/goods-api/list-date.json",
                    methods: "GET",
                    data: a,
                  })
                    .then((t) => {
                      (this.isRequesting = !1),
                        (this.calendarData = Object(d.a)(t, this.opt.ecard)),
                        (this.cache[this.requestData.itemSkuId] =
                          this.calendarData);
                    })
                    .catch((t) => {
                      (this.isRequesting = !1),
                        Object(s.a)({ message: t.msg, zIndex: 99999 });
                    });
                }
              },
              onDateSelect(t) {
                (this.selectedDate = t), this.setPluginsData();
              },
              onMonthSelect(t) {
                var { name: e, year: a } = t;
                this.activeMonth = { name: +e, year: +a };
              },
              getValidteMessage() {
                return this.selectedDate.dateSkuId
                  ? {}
                  : { ecard: "亲，请选择要购买的日期" };
              },
              setPluginsData() {
                var t, e;
                if (
                  null != (t = this.opt) &&
                  null != (e = t.ecard) &&
                  e.isPriceCalendar
                ) {
                  var a = { ecard: null },
                    i = { price: -1 },
                    {
                      stockNum: s,
                      nearDateList: c,
                      stockDate: r,
                      dateSkuId: n,
                      activityPrice: d,
                      originPrice: h,
                    } = this.selectedDate;
                  n &&
                    ((a.ecard = {
                      appointmentTime: r,
                      dateSkuId: n,
                      nearDateList: c,
                      stockNum: s,
                    }),
                    (i = {
                      price: d || h,
                      oldPrice: h || this.opt.oldPrice,
                      stockNum: s,
                    })),
                    this.$emit("change", {
                      name: "ecard",
                      priority: 40,
                      pluginsResult: a,
                      invalidMessage: this.getValidteMessage(),
                      view: i,
                    });
                }
              },
            },
            ud: !0,
          },
          l = a("9ZMt");
        e.default = l.default.component(h);
      },
    }
  )
);
