"use strict";
var r = require("~/r");
r(
  "8GPk",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "8GPk": function (e, t, i) {
        i.r(t);
        var r = i("Fcif"),
          s = i("D2kW");
        Component({
          properties: {
            liveItem: Object,
            showPriceInfo: Boolean,
            pageView: Number,
          },
          data: {
            slots: { title: !0, label: !0 },
            statusText: ["已删除", "未开始", "直播中", "回看"],
            statusColor: ["", "success", "danger", ""],
            live: {},
            computed: {},
          },
          attached() {
            this.setData({
              live: this.covertLiveItem(this.properties.liveItem),
            }),
              this.parseComputed();
          },
          methods: {
            covertLiveItem(e) {
              var { buyStatus: t = {} } = e;
              return this.genPriceFreeTag(
                Object(r.a)({}, e, t, {
                  price: ((t.price || e.price) / 100).toFixed(2),
                  title: e.title || "",
                  url: "/packages/paidcontent/live/index?alias=" + e.alias,
                })
              );
            },
            genPriceFreeTag(e) {
              if (!e.showPriceInfo)
                return (e.freetext = ""), (e.price = null), e;
              if (e.isBought) e.buytext = "已购买";
              else if (e.isFreeForVip)
                (e.freetext = "会员免费"), (e.price = null);
              else if (e.isGroupOn) e.tag = e.groupOnNum + "人拼团价";
              else if (e.isVipDiscount) e.tag = "会员价";
              else
                switch (e.sellerType) {
                  case 1:
                    0 == e.price
                      ? ((e.freetext = "免费"), (e.price = null))
                      : e.showPriceInfo && (e.price = null);
                    break;
                  case 2:
                    e.isFree
                      ? ((e.freetext = "免费"), (e.price = null))
                      : (e.price = null);
                    break;
                  case 3:
                    (0 == e.price || e.isFree) &&
                      ((e.freetext = "免费"), (e.price = null));
                }
              return e;
            },
            parseComputed() {
              var { live: e } = this.data;
              this.setData({
                "computed.statusList": s.a.statusList(e),
                "computed.priceText": s.a.priceText(e),
              });
            },
          },
        });
      },
    }
  )
);
