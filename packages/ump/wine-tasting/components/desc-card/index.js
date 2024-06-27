var r = require("~/r");
r("KOs2", {
  KOs2: function (e, t) {
    Component({
      properties: { info: { type: Object, value: {} } },
      methods: {
        handleLocation() {
          var { activityAddress: e = {}, addressStr: t } = this.data.info;
          e.lat &&
            e.lng &&
            wx.openLocation({
              latitude: +e.lat,
              longitude: +e.lng,
              name: t,
              address: t,
              scale: 18,
            });
        },
      },
    });
  },
});
