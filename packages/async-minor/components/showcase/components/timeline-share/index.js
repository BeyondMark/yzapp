"use strict";
var r = require("~/r");
r(
  "+JRO",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "+JRO": function (e, a, i) {
        i.r(a);
        var t = i("Fcif"),
          o = i("9gsa");
        Component({
          properties: {
            alias: String,
            kdtId: String,
            isHomePage: Boolean,
            timelineSnapshotInfo: Object,
          },
          data: {
            title: "",
            image: "",
            snapshotUrl: "",
            shopName: "",
            logo: "",
            showHeight: 700,
          },
          attached() {
            var {
                alias: e,
                kdtId: a,
                isHomePage: i,
                timelineSnapshotInfo: s,
              } = this.data,
              { cacheKey: l } = s || {},
              r = {
                alias: e,
                kdt_id: a,
                pageType: i ? "homepage" : "micropage",
              };
            wx.showLoading(),
              Promise.all([
                Object(o.b)(r),
                l
                  ? Object(o.a)(
                      Object(t.a)({}, s, {
                        kdt_id: a,
                        otherParams: JSON.stringify({}),
                      })
                    )
                  : Promise.resolve({}),
              ])
                .then((e) => {
                  var [a, i] = e,
                    {
                      title: t = "",
                      image: o = "",
                      shopName: s = "",
                      logo: l = "",
                      shareInfo: r,
                    } = a || {};
                  this.setData({
                    title: t,
                    image: o,
                    shopName: s,
                    logo: l,
                    snapshotUrl:
                      null != r && r.customizeStyle
                        ? ""
                        : (null == i ? void 0 : i.img) || o || "",
                  }),
                    wx.hideLoading();
                })
                .catch((e) => {
                  wx.hideLoading(),
                    this.setData({
                      image:
                        "https://img01.yzcdn.cn/upload_files/2020/07/09/FhlA5R9G7Yw98g9DlgNclUuRZa3i.png",
                    });
                });
          },
        });
      },
    }
  )
);
