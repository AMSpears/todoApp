(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    255: function (e, n, a) {
      "use strict";
      a.r(n);
      var r = a(0),
        t = a.n(r),
        l = a(46);
      n.default = ({
        onChange: e,
        filter: n,
        field: a,
        innerRef: r,
        value: u,
      }) => {
        if (!n) return null;
        const i = a.getFilterLabel(n);
        return t.a.createElement(l.c, {
          onChange: ({ target: { value: n } }) => {
            e(n);
          },
          ref: r,
          placeholder: i,
          value: u,
        });
      };
    },
  },
]);
