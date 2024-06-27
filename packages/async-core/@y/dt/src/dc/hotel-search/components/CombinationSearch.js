"use strict";
var r = require("~/r");
r(
  "enPp",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      enPp: function (e, t, a) {
        a.r(t);
        var r = a("9ZMt"),
          i = a("R7Zb"),
          s = a("f6nZ"),
          o = a("YeA1"),
          { useTpx: h } = r.default.style,
          n = {
            name: "CombinationSearch",
            mixins: [i.a],
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
                default: () => ({
                  general: "#f44",
                  "vice-bg": "#f85",
                  "vice-text": "#fff",
                }),
              },
            },
            data: () => ({
              showFiter: !1,
              show: !1,
              startTime: s.a,
              endTime: s.b,
              maxPrice: void 0,
            }),
            computed: {
              inputClass() {
                var { borderStyleMethod: e } = this.searchData;
                return (
                  "search-cell van-search__content van-search__content--" +
                  (1 == +e ? "round" : "square")
                );
              },
              inputStyle() {
                var { height: e, borderColor: t } = this.searchData;
                return ["height: " + h(e), "background: " + t].join(";");
              },
              inputBg() {
                var { borderColor: e } = this.searchData;
                return ["background: " + e].join(";");
              },
              startDay() {
                return this.formatDate(this.startTime);
              },
              leaveDay() {
                return this.formatDate(this.endTime);
              },
              showPriceFilter() {
                var { showFilter: e } = this.searchData;
                return 1 == +e;
              },
              showDestination() {
                var { showDestination: e } = this.searchData;
                return 1 == +e;
              },
              checkInDay() {
                var e = this.endTime.getTime() - this.startTime.getTime();
                return Math.floor(e / 864e5);
              },
            },
            methods: {
              gotoSearch() {
                Object(o.a)().dmc.navigate("HotelSearch");
              },
              gotoSearchPage() {
                var e = {
                  checkin: this.startTime,
                  checkout: this.endTime,
                  q: "",
                };
                this.maxPrice && (e.max = this.maxPrice),
                  Object(o.a)().dmc.navigate("HotelSearchResult", e);
              },
              gotoDestination() {
                Object(o.a)().dmc.navigate("HotelLocation");
              },
              formatDate: (e) => e.getMonth() + 1 + "月" + e.getDate() + "日",
              onClose() {
                this.show = !1;
              },
              setShowCalender() {
                this.show = !0;
              },
              onConfirm(e) {
                var [t, a] = e;
                (this.startTime = new Date(t)),
                  (this.endTime = new Date(a)),
                  (this.show = !1);
              },
              onClosePopup() {
                this.showFiter = !1;
              },
              setShowFilter() {
                this.showFiter = !0;
              },
              handleSwipeChange(e) {
                this.currentWords = this.hotSearchKeys[e];
              },
              comfirmPrice(e) {
                (this.maxPrice = e), (this.showFiter = !1);
              },
            },
            ud: !0,
          };
        t.default = r.default.component(n);
      },
    }
  )
);
