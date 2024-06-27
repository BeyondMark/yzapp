"use strict";
var r = require("~/r");
r(
  "Ss1p",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Ss1p: function (t, e, i) {
        i.r(e);
        var o = i("9ZMt"),
          s = i("EqB2"),
          l = i("6Ywl"),
          r = i("xyw3"),
          { useTpx: a } = o.default.style,
          n = {
            name: "DcHotel",
            mixins: [Object(s.a)({ optDesc: l.a })],
            props: {
              kdtId: { type: Number },
              themeColors: {
                type: Object,
                default: () => ({ general: "#f44" }),
              },
            },
            data: () => ({
              loading: !0,
              show: !0,
              bedTypeContent: {
                1: "大床",
                2: "单人床",
                3: "双床",
                4: "多张床",
                5: "大/双床",
              },
              windowTypeContent: { 1: "有窗", 2: "无窗", 3: "部分有窗" },
            }),
            computed: {
              dataStyleVal() {
                var { itemType: t, size: e } = this.opt,
                  i = ("hotel" === t || "room_type" === t) && 2 === e,
                  o = "combo" === t && 1 === e;
                return {
                  isHotelSwipe: "hotel" === t && 2 === e,
                  swipeStyle: i || ("combo" === t && 3 === e),
                  listStyle:
                    (("hotel" === t || "room_type" === t) && 3 === e) || o,
                  isComboHybrid: "combo" === t && 2 === e,
                  isComboList: o,
                  isHotelAndRoomTypeSwipe: i,
                };
              },
              contentSwiperMargin() {
                return this.dataStyleVal.swipeStyle
                  ? "margin-bottom: " + a("4")
                  : "";
              },
              hotelStyle() {
                return [
                  "margin: 0 " +
                    a(this.opt.pageMargin) +
                    " " +
                    a(this.opt.cardMargin),
                ].join(";");
              },
              marginStyle() {
                return this.dataStyleVal.isComboHybrid
                  ? "margin: 0 " + a(this.opt.pageMargin)
                  : "";
              },
              comboListStyle() {
                return this.dataStyleVal.isComboList
                  ? "margin-bottom: " + a("4")
                  : "";
              },
              hotelClass() {
                var t = this.opt,
                  e = ["hotel"];
                return (
                  2 === t.borderRadiusType && e.push("hotel-radius"),
                  7 === t.sizeType && e.push("hotel-shadow"),
                  5 === t.sizeType && e.push("hotel-border"),
                  this.dataStyleVal.listStyle && e.push("hotel-list"),
                  this.dataStyleVal.swipeStyle && e.push("hotel-swipe"),
                  this.dataStyleVal.isComboHybrid && e.push("hotel-hybrid"),
                  e.join(" ")
                );
              },
              contentClass() {
                var t = this.opt,
                  e = [];
                return (
                  2 === t.sizeType && e.push("hotel-simple"),
                  0 === t.size && e.push("hotel-content"),
                  this.dataStyleVal.listStyle && e.push("list-content"),
                  this.dataStyleVal.swipeStyle && e.push("swipe-content"),
                  this.dataStyleVal.isComboHybrid && e.push("hybrid-content"),
                  e.join(" ")
                );
              },
              picClass() {
                var t = ["frosted-glass-image"];
                return (
                  this.dataStyleVal.listStyle &&
                    (t.push("frosted-glass-image-full"), t.push("list-img")),
                  this.dataStyleVal.swipeStyle && t.push("swipe-img"),
                  this.dataStyleVal.isComboHybrid && t.push("hybrid-img"),
                  t.join(" ")
                );
              },
              titleClass() {
                var t = ["title-name"];
                return (
                  "2" === this.opt.textStyleType && t.push("text-bolder"),
                  t.join(" ")
                );
              },
              itemList() {
                var {
                    itemList: t,
                    showHotelNumType: e,
                    showHotelNum: i,
                    positionType: o,
                    positionConfig: s,
                    positionName: l,
                    itemType: n,
                    pageMargin: p,
                    cardMargin: h,
                    isSubcoreHotel: d,
                  } = this.opt,
                  y = "0" === e ? t : t.slice(0, i);
                return y.map((t, e) => {
                  if (d && "room_type" === n) {
                    var i = JSON.parse(t.bedroom)[0],
                      m = i.number;
                    t.bed = m + "张" + i.name.split("（")[0];
                  }
                  if ("hotel" === n) {
                    var { province: u, city: c, county: b } = t.address;
                    "0" === o
                      ? (t.position = s.map((t) => [u, c, b][t]).join(""))
                      : "1" === o && (t.position = l);
                  }
                  return (
                    this.dataStyleVal.swipeStyle &&
                      (0 === e
                        ? (t.style =
                            "margin-left: " +
                            a(p) +
                            ";margin-bottom: " +
                            a("12"))
                        : e === y.length - 1
                        ? (t.style =
                            "margin: 0 0 " +
                            a("12") +
                            " " +
                            a(h) +
                            ";padding-right: " +
                            a(p) +
                            ";")
                        : (t.style =
                            "margin-left: " +
                            a(h) +
                            ";margin-bottom: " +
                            a("12"))),
                    this.dataStyleVal.isComboHybrid &&
                      (t.style =
                        e % 3 == 1
                          ? "padding: 0 " + a(h / 2) + " " + a(h) + " 0"
                          : e % 3 == 2
                          ? "padding: 0 0 " + a(h) + " " + a(h / 2)
                          : "margin-bottom: " + a(h)),
                    t.showPrice
                      ? (t.price = Object(r.a)(t.showPrice).toYuan())
                      : t.price && (t.price = Object(r.a)(t.price).toYuan()),
                    t
                  );
                });
              },
              nameStyle() {
                var { textSize: t, textColor: e } = this.opt;
                return ["font-size: " + a(t), "color: " + e].join(";");
              },
              hotelCornerStyle() {
                return [
                  "max-width: " + (3 === this.opt.size ? a("88") : a("132")),
                ].join(";");
              },
              contentHeight() {
                return "hotel" === this.opt.itemType ? a("62") : a("152");
              },
            },
            methods: {
              handleClickAll() {
                var { componentTitle: t, itemType: e } = this.opt,
                  { kdtId: i } = this;
                if ("room_type" !== e && t.showLink) {
                  var o = {
                    type: "hotellist",
                    linkUrl: "/wscindustry/hotel/list?kdtId=" + i,
                  };
                  this.$emit("jumpToLink", o);
                }
              },
              handleClickHotel(t) {
                var { itemType: e } = this.opt,
                  { kdtId: i, id: o, hotelId: s = 0 } = t,
                  l = {
                    type: "room_typelist",
                    linkUrl:
                      "/wscindustry/hotel/room?kdtId=" +
                      i +
                      "&id=" +
                      s +
                      "&room=" +
                      o,
                  };
                "hotel" === e &&
                  ((l.type = "hotellist"),
                  (l.linkUrl =
                    "/wscindustry/hotel/detail?kdtId=" + i + "&id=" + o)),
                  "combo" === e &&
                    ((l.type = "combolist"),
                    (l.linkUrl =
                      "/wscindustry/hotel/combo?kdtId=" + i + "&id=" + o)),
                  this.$emit("jumpToLink", l);
              },
            },
            ud: !0,
          };
        e.default = o.default.component(n);
      },
    }
  )
);
