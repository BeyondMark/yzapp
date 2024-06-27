"use strict";
var r = require("~/r");
r(
  "6eix",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "6eix": function (e, t, i) {
        i.r(t);
        var a = i("Fcif"),
          r = i("eijD"),
          n = i("9ZMt"),
          s = i("q29p"),
          o = i.n(s),
          h = i("R7Zb"),
          c = i("f6nZ"),
          m = i("kbor"),
          l = i("YeA1"),
          { useTpx: u } = n.default.style,
          d = {
            name: "MinimalistSearch",
            mixins: [h.a],
            props: {
              searchData: {
                type: Object,
                default: function () {
                  return {};
                },
              },
              city: { type: String, default: "全国" },
              themeColors: {
                type: Object,
                default: () => ({ general: "#f44" }),
              },
            },
            data: () => ({
              show: !1,
              checkInTime: c.a,
              leaveTime: c.b,
              hotelList: [],
            }),
            computed: {
              checkInDay() {
                var { checkInTime: e } = this;
                return this.formatMonth(e);
              },
              leaveDay() {
                var { leaveTime: e } = this;
                return this.formatMonth(e);
              },
              inputClass() {
                var { borderStyleMethod: e } = this.searchData;
                return (
                  "van-search__content van-search__content--" +
                  (1 == +e ? "round" : "square")
                );
              },
              inputStyle() {
                var { height: e, borderColor: t } = this.searchData;
                return ["height: " + u(e), "background: " + t].join(";");
              },
            },
            methods: {
              formatTime: (e) => o()(e, "YYYY-MM-DD HH:mm:ss"),
              onChangeCity() {
                Object(l.a)().dmc.navigate("HotelLocation");
              },
              formatMonth: (e) => o()(e, "MM-DD"),
              showCalender() {
                this.show = !0;
              },
              onSearch(e) {
                this.getHotelList({ keyword: e });
              },
              onClose() {
                this.show = !1;
              },
              onConfirm(e) {
                var [t, i] = e;
                (this.checkInTime = new Date(t)),
                  (this.leaveTime = new Date(i)),
                  this.getHotelList({
                    checkInTime: this.formatTime(this.checkInTime),
                    leaveTime: this.formatTime(this.leaveTime),
                  }),
                  (this.show = !1);
              },
              getHotelList(e) {
                var t = this;
                return Object(r.a)(function* () {
                  var { list: i = [] } = yield Object(m.a)(
                    Object(a.a)(
                      {
                        checkInTime: t.formatTime(t.checkInTime),
                        leaveTime: t.formatTime(t.leaveTime),
                      },
                      e,
                      { city: "全国" === t.city ? "" : t.city }
                    )
                  );
                  t.hotelList = i;
                })();
              },
            },
            ud: !0,
          };
        t.default = n.default.component(d);
      },
    }
  )
);
