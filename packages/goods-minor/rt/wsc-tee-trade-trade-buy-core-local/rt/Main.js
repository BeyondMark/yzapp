"use strict";
var r = require("~/r");
r(
  "sHWk",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4kmb": function (e, t, n) {
        n.r(t),
          n.d(t, "ADDRESS_TYPE", function () {
            return r;
          }),
          n.d(t, "ADDRESS_SOURCE", function () {
            return u;
          }),
          n.d(t, "ADDRESS_POI_TYPE", function () {
            return a;
          });
        var r = { INPUT: 1, POI: 2 },
          u = { YOUZAN: 1, WECHAT: 2 },
          a = { QQ: 1, BAIDU: 2, AMAP: 3 };
      },
      "5Mqe": function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            if (!(0, u.default)(e)) return [];
            return e.reduce(function (e, t) {
              return (e = [].concat(e, t));
            }, []);
          });
        var r,
          u = (r = n("ajWA")) && r.__esModule ? r : { default: r };
        e.exports = t.default;
      },
      "7lfQ": function (e, t, n) {
        n.d(t, "a", function () {
          return u;
        });
        var r = n("9ZMt");
        t.b = function (e) {
          return new Promise(function (t, n) {
            r.default.$native.getSetting({
              success: function (u) {
                u.authSetting[e]
                  ? t()
                  : r.default.$native.authorize({
                      scope: e,
                      success: t,
                      fail: n,
                    });
              },
              fail: n,
            });
          });
        };
        var u = function (e) {
          return new Promise(function (t, n) {
            r.default.$native.getSetting({
              success: function (n) {
                n.authSetting[e] ? t(!0) : t(!1);
              },
              fail: n,
            });
          });
        };
      },
      Dksy: function (e, t, n) {
        n.d(t, "a", function () {
          return r;
        });
        var r = {
          GOODS_SOLDOUT: [101910001, 101910002, 101910003],
          RECEIVER_NEED_REALNAME: 101304026,
          LIMIT_ORDER: [101302001, 101302002, 429],
          ASYNC_ORDER: 102901001,
          BILL_EXCEPTION_UNSAFTY: 101358005,
          BILL_EXCEPTION_UNSAFTY_REVIEW: 101358006,
          DELIVERY_ERROR: [101305007, 101305073, 101305009],
        };
      },
      Jcb6: function (e, t, n) {
        function r(e) {
          e = e.trim();
          var t = /^((\+86)|(86))?(1)\d{10}$/.test(e),
            n = /^0[0-9\-]{10,13}$/.test(e),
            r = /^((\+852)|(852))?(5|6|8|9)\d{7}$/.test(e),
            u = /^((\+886)|(886)|(0))?9\d{2}-?\d{3}-?\d{3}$/.test(e);
          return t || n || r || u;
        }
        function u(e) {
          return e && e.areaCode && "9" === e.areaCode[0];
        }
        function a(e, t) {
          return u(e) ? t && t.length <= 20 : r(t);
        }
        function i(e, t, n) {
          var r,
            u = String(e[t] || "").trim();
          switch (t) {
            case "userName":
              return u && u.length > 15
                ? "收货姓名不能超过 15 个字"
                : u
                ? ""
                : "请填写姓名";
            case "tel":
              return a(e, u) ? "" : "请填写正确的电话";
            case "areaCode":
              return ((null != e &&
                null !== (r = e.county) &&
                void 0 !== r &&
                r.length) ||
                "9" === u[0]) &&
                u
                ? ""
                : "请补全所在地区信息";
            case "addressDetail":
              return u ? "" : "请填写详细地址";
            case "postalCode":
              return u && !/^\d{6}$/.test(u) ? "邮政编码格式不正确" : "";
            case "houseNumber":
              return null != n && n.houseNumber
                ? u
                  ? ""
                  : "请填写门牌号"
                : "";
            default:
              return "";
          }
        }
        function o(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [
                    "userName",
                    "tel",
                    "areaCode",
                    "addressDetail",
                    "houseNumber",
                  ],
            r = { errorInfo: {}, msg: "" },
            u = n.every(function (n) {
              var u = i(e, n, t);
              return u && ((r.errorInfo[n] = !0), (r.msg = u)), !u;
            });
          return { isValid: u, error: r };
        }
        n.d(t, "b", function () {
          return r;
        }),
          n.d(t, "a", function () {
            return u;
          }),
          n.d(t, "c", function () {
            return a;
          }),
          n.d(t, "d", function () {
            return o;
          });
      },
      iKL5: function (e, t, n) {
        n.d(t, "a", function () {
          return r;
        });
        var r = function (e, t) {
          var n = (3e3 * Math.PI) / 180,
            r = e,
            u = t,
            a = Math.sqrt(r * r + u * u) + 2e-5 * Math.sin(u * n),
            i = Math.atan2(u, r) + 3e-6 * Math.cos(r * n);
          return {
            lng: (e = a * Math.cos(i) + 0.0065),
            lat: (t = a * Math.sin(i) + 0.006),
          };
        };
      },
      nOsF: function (e, t, n) {
        function r(e) {
          return (
            /^\d{15}$/gi.test(e) ||
            (/^\d{17}(\d|X)$/gi.test(e) &&
              (function (e) {
                for (
                  var t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
                    n = 0,
                    r = 0,
                    u = e.length;
                  r < u - 1;
                  r++
                )
                  n += parseInt(e.charAt(r), 10) * t[r];
                return (
                  ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"][
                    n % 11
                  ] === e.charAt(17).toUpperCase()
                );
              })(e))
          );
        }
        function u(e) {
          var { order: t, idcard: n, tradeTag: u } = e;
          if (u.hasOverseaGoods) {
            if (!n.name) return { name: "请输入真实姓名" };
            if (!n.number || !r(n.number))
              return { number: "请输入真实身份证号" };
            if (/^(71|81|82)/.test(n.number))
              return { number: "请输入中国大陆身份证号" };
            if (t.needIdCardPhoto && (!n.frontPhoto || !n.backPhoto))
              return { message: "请上传身份证照" };
          }
          return "";
        }
        n.d(t, "a", function () {
          return u;
        });
      },
      ns2s: function (e, t, n) {
        n.d(t, "a", function () {
          return s;
        }),
          n.d(t, "b", function () {
            return d;
          }),
          n.d(t, "c", function () {
            return f;
          });
        var r = n("q29p"),
          u = n.n(r);
        function a(e) {
          return (e < 10 ? "0" : "") + e;
        }
        var i = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
          o = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
          c = function (e) {
            return Array.isArray(e)
              ? (e.forEach(function (e) {
                  return (
                    Array.isArray(e.weekdays) ||
                      (e.switchs &&
                        (e.weekdays =
                          ((t = (t = e.switchs).split("")),
                          [
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                            "周日",
                          ].filter(function (e, n) {
                            return "1" === t[n];
                          })))),
                    e
                  );
                  var t;
                }),
                e)
              : e;
          },
          s = {
            today: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Date.now(),
                t = new Date(e);
              return new Date(t.getFullYear(), t.getMonth(), t.getDate());
            },
            copy: function (e) {
              return new Date(e.getTime());
            },
            time: function (e) {
              return f.time(new Date(e));
            },
            resetTime: function (e) {
              return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e;
            },
            maximizeDate: function (e) {
              return e.setHours(23), e.setMinutes(59), e.setSeconds(59), e;
            },
            addTime: function (e, t) {
              var n = e.split(":"),
                r = +n[0],
                u = +n[1] + t;
              return (
                u >= 60 && ((r += (u / 60) | 0), (u %= 60)),
                "".concat(a(r), ":").concat(a(u))
              );
            },
            businessTime: function (e, t) {
              var n,
                r = t.timeBucket,
                u = void 0 === r ? [] : r,
                a = t.timeSpan,
                i = void 0 === a ? "" : a,
                o = f.weekday(e);
              return (
                c(u).forEach(function (e) {
                  -1 !== e.weekdays.indexOf(o) &&
                    (n
                      ? "day" === i &&
                        (n = d.time(e.closeTime, n.closeTime) > 0 ? e : n)
                      : (n = e));
                }),
                n
              );
            },
            getBusinessTimesByTimeBucket: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                n = f.weekday(e),
                r = c(t);
              return r.filter(function (e) {
                return -1 !== e.weekdays.indexOf(n);
              });
            },
            plusDay: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1;
              return e.setDate(e.getDate() + t), e;
            },
            plusHour: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1;
              return e.setHours(e.getHours() + t), e;
            },
            plusMinute: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1;
              return e.setMinutes(e.getMinutes() + t), e;
            },
          },
          d = {
            sameDay: function (e, t) {
              return ["getFullYear", "getMonth", "getDate"].every(function (n) {
                return e[n]() === t[n]();
              });
            },
            date: function (e, t) {
              return (e = +e) === (t = +t) ? 0 : e > t ? 1 : -1;
            },
            time: function (e, t) {
              return (e = +e.slice(0, 5).replace(":", "")) ===
                (t = +t.slice(0, 5).replace(":", ""))
                ? 0
                : e > t
                ? 1
                : -1;
            },
            fullTime: function (e, t) {
              return (e = +e.replace(/\:/g, "")) === (t = +t.replace(/\:/g, ""))
                ? 0
                : e > t
                ? 1
                : -1;
            },
            month: function (e, t) {
              var n = e.getFullYear(),
                r = t.getFullYear(),
                u = e.getMonth(),
                a = t.getMonth();
              return n === r ? (u === a ? 0 : u > a ? 1 : -1) : n > r ? 1 : -1;
            },
            inBusiness: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                n = f.weekday(e);
              return t.some(function (e) {
                return -1 !== e.weekdays.indexOf(n);
              });
            },
            isToday: function (e) {
              return d.sameDay(s.today(), e);
            },
            isCurrentYear: function (e) {
              return s.today().getFullYear() === e.getFullYear();
            },
            maxDate: function (e, t) {
              return t > e ? t : e;
            },
            day: function (e, t) {
              return (
                (e = new Date(f.date(e))),
                (t = new Date(f.date(t))),
                d.date(e, t)
              );
            },
          },
          f = {
            padZero: a,
            timeSpanToDate: function (e) {
              return new Date(e + i);
            },
            date: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "yyyy-mm-dd";
              return t
                .replace("yyyy", e.getFullYear())
                .replace("mm", a(e.getMonth() + 1))
                .replace("dd", a(e.getDate()));
            },
            monthDay: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "yy月dd日";
              return t
                .replace("yy", a(e.getMonth() + 1))
                .replace("dd", a(e.getDate()));
            },
            yearMonth: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "yyyy年mm月";
              return t
                .replace("yyyy", e.getFullYear())
                .replace("mm", e.getMonth() + 1);
            },
            time: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "hh:mm";
              return t
                .replace("hh", a(e.getHours()))
                .replace("mm", a(e.getMinutes()))
                .replace("ss", a(e.getSeconds()));
            },
            dateTime: function (e) {
              var t,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "YYYY年MM月DD日 HH:mm:ss";
              return !e ||
                isNaN(
                  null == e || null === (t = e.getTime) || void 0 === t
                    ? void 0
                    : t.call(e)
                )
                ? ""
                : u()(e, n);
            },
            weekday: function (e) {
              return o[e.getDay()];
            },
            advancedWeekday: function (e) {
              var t = s.today(),
                n = d.sameDay;
              return n(t, e)
                ? "今天"
                : n(s.plusDay(t), e)
                ? "明天"
                : f.weekday(e);
            },
          };
      },
      sHWk: function (e, t, n) {
        n.r(t);
        var r = n("HvZ6"),
          u = {
            created() {
              new r.a({ ctx: this.ctx });
            },
            ud: !0,
          },
          a = n("9ZMt");
        t.default = a.default.component(u);
      },
      xeEc: function (e, t, n) {
        var r,
          u = n("8mzt");
        r = u.a;
        var a = {
          info: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            this.log(e, t, n, "info");
          },
          error: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            this.log(e, t, n, "error");
          },
          log: function (e, t, n, u) {
            try {
              r.log({
                appName: "wsc-h5-trade",
                logIndex: "jserror_log",
                level: u,
                name: e,
                extra: n,
                message: "string" == typeof t ? t : JSON.stringify(t),
              });
            } catch (e) {}
          },
        };
        t.a = a;
      },
      yS26: function (e, t, n) {
        n.d(t, "b", function () {
          return a;
        }),
          n.d(t, "a", function () {
            return i;
          });
        var r = n("US/N"),
          u =
            (n("7lfQ"),
            n("4kmb"),
            n("iKL5"),
            { skipKdtId: !0, skipShopInfo: !0 });
        function a(e) {
          var t = e.id ? "update" : "add";
          return Object(r.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/wsctrade/uic/contact/".concat(t, "Contact.json"),
            data: e,
            config: u,
          });
        }
        function i(e) {
          return Object(r.default)({
            origin: "cashier",
            withCredentials: !0,
            path: "/wsctrade/order/queryOrderLimit",
            method: "POST",
            data: e,
          });
        }
      },
    }
  )
);
