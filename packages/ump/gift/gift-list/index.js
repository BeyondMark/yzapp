"use strict";
var r = require("~/r");
r(
  "+9JZ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "+9JZ": function (t, e, s) {
      s.r(e);
      var a = s("qJXH"),
        i = s("v6dD"),
        r = s("taYb"),
        o = s("RY8z"),
        d = s("a1Mm"),
        n = getApp();
      Object(a.b)({
        data: {
          scroll: !1,
          tabList: [
            { id: "donate", title: "我送出的" },
            { id: "receive", title: "我领取的" },
            { id: "lottery", title: "我参与的" },
          ],
          selectedId: "donate",
          orderList: [],
        },
        tabPage: {
          donate: { list: [], page: 1, pageSize: 20, finished: !1 },
          receive: { list: [], page: 1, pageSize: 20, finished: !1 },
          lottery: { list: [], page: 1, pageSize: 20, finished: !1 },
        },
        onLoad() {
          this.loadOrderList(this.data.selectedId),
            this.on("ensure:gift:address", () => {
              this.clearOrderList(), this.loadOrderList();
            });
        },
        onPullDownRefresh() {
          this.clearOrderList(), this.loadOrderList(), wx.stopPullDownRefresh();
        },
        loadOrderList(t) {
          var e = null,
            s = ("string" == typeof t && t) || this.data.selectedId,
            a = this.tabPage[s] || {};
          if (!a.finished) {
            var i = { page_no: a.page, page_size: a.pageSize };
            switch (s) {
              case "donate":
                e = "wscump/gift/donor_gift_byuserid.json";
                break;
              case "receive":
                e = "wscump/gift/receive_gift_byuserid.json";
                break;
              default:
                e = "wscump/gift/gift_record_byuserid.json";
            }
            wx.showLoading(),
              n
                .request({ path: e, data: i })
                .then((t) => {
                  wx.hideLoading(),
                    "donate" === s
                      ? this.formatDonateOrderData(r.a.toCamelCase(t), s)
                      : "receive" === s
                      ? this.formatReceiveOrderData(r.a.toCamelCase(t), s)
                      : "lottery" === s &&
                        this.formatRecordData(r.a.toCamelCase(t), s);
                })
                .catch((t) => {
                  wx.hideLoading();
                  [101500003, 101504014, 101504019, 101504017].indexOf(t.code) >
                  -1
                    ? this.pushOrderList([], s)
                    : wx.showToast({
                        title: t.msg || "请求出错了",
                        icon: "none",
                        duration: 2e3,
                      });
                });
          }
        },
        clearOrderList() {
          var t = this.tabPage,
            e = t[this.data.selectedId] || {};
          (e.list = []),
            (e.page = 1),
            (e.finished = !1),
            (this.tabPage = t),
            this.setYZData({ orderList: [] });
        },
        formatDonateOrderData(t, e) {
          var s = (Array.isArray(t) && t) || [];
          s.forEach((t) => {
            var e = t.mainInfo || {};
            (t.mode = "donate"), (t.alias = e.alias);
            var s = 1 === e.activityType,
              a = e.lotteryTime < Date.now();
            s
              ? a
                ? ((t.statusDesc = "已开奖"),
                  (t.actionDesc = ""),
                  (t.actionType = ""))
                : ((t.statusDesc = "待开奖"),
                  (t.actionDesc = "继续赠送"),
                  (t.actionType = "donate"))
              : e.isReceive
              ? ((t.statusDesc = "已领完"),
                (t.actionDesc = ""),
                (t.actionType = ""))
              : ((t.statusDesc = "已领取" + e.givenNum + "/" + e.num + "份"),
                (t.actionDesc = "继续赠送"),
                (t.actionType = "donate")),
              t.itemList &&
                t.itemList.length > 0 &&
                (t.itemList = t.itemList.map((t) => {
                  if (t.goodsInfo && "string" == typeof t.goodsInfo)
                    try {
                      t.goodsInfo = JSON.parse(t.goodsInfo);
                    } catch (e) {
                      t.goodsInfo = {};
                    }
                  return {
                    title: t.goodsName || "",
                    thumb: Object(d.a)(t.goodsInfo.img_url, "!200x200.jpg"),
                    price: Number((t.unitPrice || 0) / 100).toFixed(2),
                    num: t.num || 1,
                    status: "领取截止日期: " + this.formatTime(e.effectiveTime),
                    isLottery: e.isLottery,
                  };
                }));
          }),
            this.pushOrderList(s, e);
        },
        formatReceiveOrderData(t, e) {
          var s = (Array.isArray(t) && t) || [];
          s.forEach((t) => {
            switch (((t.mode = "receive"), t.state)) {
              case 10:
                (t.statusDesc = "未填写地址"),
                  (t.actionDesc = "填写地址"),
                  (t.actionType = "address");
                break;
              case 50:
                t.statusDesc = "待发货";
                break;
              case 60:
                t.statusDesc = "已发货";
                break;
              case 99:
                t.statusDesc = "已转赠";
            }
            t.itemList &&
              t.itemList.length > 0 &&
              (t.itemList = t.itemList.map((e) => {
                if (e.goodsInfo && "string" == typeof e.goodsInfo)
                  try {
                    e.goodsInfo = JSON.parse(e.goodsInfo);
                  } catch (t) {
                    e.goodsInfo = {};
                  }
                return {
                  title: e.goodsName || "",
                  thumb: Object(d.a)(e.goodsInfo.img_url, "!200x200.jpg"),
                  status: "领取截止日期: " + this.formatTime(t.effectiveTime),
                };
              }));
          }),
            this.pushOrderList(s, e);
        },
        formatRecordData(t, e) {
          var s = (Array.isArray(t) && t) || [];
          s.forEach((t) => {
            switch (((t.mode = "lottery"), t.lotteryStatus)) {
              case 0:
                t.statusDesc = "待开奖";
                break;
              case 1:
                t.statusDesc = "已中奖";
                break;
              case 2:
                t.statusDesc = "未中奖";
                break;
              default:
                t.statusDesc = "开奖中";
            }
            t.itemList &&
              t.itemList.length > 0 &&
              (t.itemList = t.itemList.map((e) => {
                if (e.goodsInfo && "string" == typeof e.goodsInfo)
                  try {
                    e.goodsInfo = JSON.parse(e.goodsInfo);
                  } catch (t) {
                    e.goodsInfo = {};
                  }
                return {
                  title: e.goodsName || "",
                  thumb: Object(d.a)(e.goodsInfo.img_url, "!200x200.jpg"),
                  price: Number((e.unitPrice || 0) / 100).toFixed(2),
                  num: e.num || 1,
                  status:
                    "开奖时间: " +
                    Object(i.b)(t.lotteryTime, "YYYY-MM-DD HH:mm"),
                };
              }));
          }),
            this.pushOrderList(s, e);
        },
        pushOrderList(t, e) {
          var s = this.tabPage,
            a = s[e] || {};
          t && t.length > 0
            ? ((a.list = a.list.concat(t)),
              (a.finished = !1),
              a.page++,
              this.setYZData({ orderList: a.list }))
            : (0 === a.list.length && this.setYZData({ orderList: [] }),
              (a.finished = !0)),
            (this.tabPage = s);
        },
        formatTime: (t) =>
          t > 0 && t < 5e12 ? Object(i.b)(t, "YYYY-MM-DD HH:mm") : "永久有效",
        parseSkuStr: (t) =>
          (t = (t = t && "string" == typeof t ? JSON.parse(t) : [])
            .filter((t) => t.v)
            .map((t) => t.v)
            .join(", ")),
        handleTabsClick(t) {
          var { detail: e } = t,
            s = this.data.tabList[e.index].id;
          this.setYZData({ selectedId: s });
          var a = this.tabPage[s] || {};
          a.list.length > 0 || a.finished
            ? this.setYZData({ orderList: a.list })
            : this.loadOrderList(s);
        },
        onOrderClick(t) {
          var { detail: e } = t;
          o.a.navigate({
            url: "/packages/ump/gift/open-gift/index?gift_id=" + e.alias,
          });
        },
        doAction(t) {
          var { detail: e } = t,
            s = null;
          "address" === e.actionType
            ? (s = "/packages/ump/gift/share/index?gift_id=" + e.alias)
            : "donate" === e.actionType &&
              (s =
                "/packages/ump/gift/share/index?gift_id=" +
                e.alias +
                "&presenter_view=1"),
            s && o.a.navigate({ url: s });
        },
      });
    },
  })
);
