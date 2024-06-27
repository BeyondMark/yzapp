"use strict";
var r = require("~/r");
r(
  "9mc3",
  Object.assign({}, require("~/v.js").modules, {
    "9mc3": function (e, o, t) {
      t.r(o);
      var i = t("9ZMt"),
        s = i.default.getGlobal("logger"),
        r = {
          props: {
            showPop: Boolean,
            shopName: String,
            vouchers: Array,
            groups: Array,
            shopAnnouncementText: String,
            shopInfo: Object,
            isTabPage: Boolean,
            showDetailButton: { type: Boolean, default: !1 },
            lat: Number,
            lon: Number,
            showShopCertification: Boolean,
          },
          data: () => ({ showMoreVouchers: !1, showMoreActivities: !1 }),
          computed: {
            firstTwoVouchers() {
              return this.vouchers.slice(0, 2);
            },
            moreVouchers() {
              return this.vouchers.slice(2);
            },
            firstFiveActivities() {
              return this.groups.slice(0, 5);
            },
            moreActivities() {
              return this.groups.slice(5);
            },
            fullAddress() {
              var {
                province: e = "",
                city: o = "",
                county: t = "",
                address: i = "",
              } = this.shopInfo;
              return "" + e + o + t + i;
            },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
            toggleMoreVoucher() {
              this.showMoreVouchers = !this.showMoreVouchers;
            },
            toggleMoreActivities() {
              this.showMoreActivities = !this.showMoreActivities;
            },
            handleTakeCoupon(e) {
              this.$emit("takeCoupon", e, "popup");
            },
            handleGoToActivityDetail(e) {
              this.$emit("goToActivityDetail", e);
            },
            toAddress() {
              s && s.log({ et: "click", ei: "click_map", en: "打开地图" }),
                wx.openLocation({
                  latitude: +this.lat,
                  longitude: +this.lon,
                  name: this.shopName,
                  scale: 13,
                  address: this.fullAddress,
                });
            },
            toPhone() {
              s && s.log({ et: "click", ei: "click_phone", en: "拨打电话" }),
                wx.makePhoneCall({ phoneNumber: this.shopInfo.contactMobile });
            },
            handleGoToShopCertification() {
              this.$emit("goToShopCertification");
            },
          },
          ud: !0,
        };
      o.default = i.default.component(r);
    },
  })
);
