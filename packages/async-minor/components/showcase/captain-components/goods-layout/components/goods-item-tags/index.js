"use strict";
var r = require("~/r");
r(
  "NFTH",
  Object.assign({}, require("~/c.js").modules, {
    NFTH: function (t, e, a) {
      a.r(e);
      var i = a("Qwxn"),
        s = a("Xq7Z");
      Component({
        behaviors: [i.a],
        externalClasses: ["custom-class"],
        properties: {
          goodsInfo: { type: Object, value: {} },
          itemIndex: Number,
          exhibitionTag: Boolean,
        },
        options: { addGlobalClass: !0 },
        data: {
          curTagsList: [],
          showDropDown: !1,
          arrowDirection: !0,
          tagListWidth: "",
          preLabelListWidth: "",
        },
        attached() {
          this.data.exhibitionTag
            ? this.getTagList()
            : this.setData({ curTagsList: this.computedTagsList() });
        },
        methods: {
          computedTagsList() {
            var {
                itemIndex: t,
                layout: e,
                goodsInfo: { tagsList: a = [] },
              } = this.data,
              i = 3;
            return (
              (e !== s.f.THREE && e !== s.f.SWIPE) || (i = 1),
              (e !== s.f.SMALL && e !== s.f.LIST) || (i = 2),
              e === s.f.HYBRID && (i = t % 3 == 0 ? 3 : 2),
              a.splice(0, i)
            );
          },
          getTagList() {
            var {
              goodsInfo: { tagsList: t = [] },
            } = this.data;
            this.setData({ curTagsList: t }),
              wx
                .createSelectorQuery()
                .in(this)
                .selectAll(".goods-tag")
                .boundingClientRect((t) => {
                  this.setData({ tagListWidth: t[0].width });
                })
                .exec(),
              wx
                .createSelectorQuery()
                .in(this)
                .selectAll(".good-sign")
                .boundingClientRect((t) => {
                  var e = t.reduce((t, e) => e.width + t, 0);
                  this.setData({ preLabelListWidth: e });
                })
                .exec(),
              wx
                .createSelectorQuery()
                .in(this)
                .selectAll(".goods-tag_item--padding")
                .boundingClientRect((t) => {
                  t.reduce((t, e) => e.width + t, 0) +
                    this.data.preLabelListWidth >
                    this.data.tagListWidth - 5 * t.length &&
                    this.setData({ showDropDown: !0 });
                })
                .exec();
          },
          showMoreTag() {
            if (this.data.arrowDirection)
              return this.setData({
                curTagsList: this.data.curTagsList.splice(0, 10),
                arrowDirection: !1,
              });
            this.data.arrowDirection || this.setData({ arrowDirection: !0 });
          },
        },
      });
    },
    Qwxn: function (t, e, a) {
      e.a = Behavior({
        properties: {
          appId: String,
          goodsInfo: { type: Object, value: {} },
          infoData: { type: Object, value: {} },
          goodsIndex: Number,
          layout: { type: Number, value: 0 },
          sizeType: { type: Number, value: 0 },
          redirectType: { type: Number, value: 1 },
          extraData: { type: Object, value: {} },
          textStyleType: { type: Number, value: 1 },
          textAlignType: { type: String, value: "left" },
        },
      });
    },
  })
);
