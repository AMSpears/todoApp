(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    254: function (e, r, s) {
      "use strict";
      s.r(r);
      var i = s(1),
        o = s(51),
        t = s(46);
      r.default = ({
        onChange: e,
        autoFocus: r,
        field: s,
        errors: n,
        value: a = "",
        isDisabled: c,
      }) => {
        const { isMultiline: l } = s.config,
          u = "ks-input-" + s.path,
          d = n.every(
            (e) => !(e instanceof Error && "AccessDeniedError" === e.name)
          ),
          b = n.find(
            (e) => e instanceof Error && "AccessDeniedError" === e.name
          );
        return Object(i.jsx)(
          o.a,
          null,
          Object(i.jsx)(o.d, { htmlFor: u, field: s, errors: n }),
          Object(i.jsx)(o.b, { text: s.adminDoc }),
          Object(i.jsx)(
            o.c,
            null,
            Object(i.jsx)(t.c, {
              autoComplete: "off",
              autoFocus: r,
              required: s.isRequired,
              type: "text",
              value: d ? a : void 0,
              placeholder: d ? void 0 : b.message,
              onChange: (r) => {
                e(r.target.value);
              },
              id: u,
              isMultiline: l,
              disabled: c,
            })
          )
        );
      };
    },
  },
]);
