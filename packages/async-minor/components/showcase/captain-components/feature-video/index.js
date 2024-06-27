"use strict";
var r = require("~/r");
r(
  "pp4/",
  Object.assign({}, require("~/v.js").modules, {
    "pp4/": function (e, t, i) {
      i.r(t);
      var n = i("DXKY");
      Component({
        type: "feature-video",
        options: { addGlobalClass: !0 },
        properties: {
          poster: String,
          objectFit: { type: String, value: "contain" },
          src: String,
          video: Object,
          comments: Array,
          loadingComments: Boolean,
          loadingCommentsFinished: Boolean,
        },
        data: { src: "", poster: "", countUrl: "", videoId: "", comment: "" },
        attached() {
          this.initEvents();
        },
        methods: {
          initEvents() {
            n.a.on("pauseOtherVideo", (e) => {
              this !== e && this.selectComponent(".capVideo").pause();
            });
          },
          handlePlay(e) {
            n.a.trigger("pauseOtherVideo", this), this.triggerEvent("play", e);
          },
          handleAddComment(e) {
            this.triggerEvent("addcomment", e);
          },
          handleScrollComments(e) {
            this.data.loadingCommentsFinished ||
              this.triggerEvent("loadcomments", e);
          },
          handleTapHeart(e) {
            this.triggerEvent("tapheart", e);
          },
        },
      });
    },
  })
);
