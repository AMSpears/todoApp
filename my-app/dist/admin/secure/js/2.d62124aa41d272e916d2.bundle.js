(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    250: function (e, t, l) {
      "use strict";
      l.r(t);
      l(82), l(154);
      var a = l(9),
        n = (l(247), l(248));
      class s extends n.a {
        constructor(...e) {
          super(...e),
            Object(a.a)(
              this,
              "getFilterGraphQL",
              ({ path: e, type: t, value: l }) => {
                const a = "is" === t ? e : `${e}_${t}`;
                let n = l.replace(/\s/g, "");
                return (
                  (n = ["in", "not_in"].includes(t)
                    ? n.split(",").map((e) => parseInt(e))
                    : parseInt(n)),
                  { [a]: n }
                );
              }
            ),
            Object(a.a)(this, "getFilterLabel", ({ label: e, type: t }) => {
              const l = ["in", "not_in"].includes(t)
                ? " (comma separated)"
                : "";
              return `${this.label} ${e.toLowerCase()}${l}`;
            }),
            Object(a.a)(
              this,
              "formatFilter",
              ({ label: e, type: t, value: l }) =>
                `${this.getFilterLabel({ label: e, type: t })}: "${l.replace(
                  /\s/g,
                  ""
                )}"`
            ),
            Object(a.a)(this, "serialize", (e) => {
              const t = e[this.path];
              return "number" == typeof t
                ? t
                : "string" == typeof t && t.length > 0
                ? parseInt(t, 10)
                : null;
            }),
            Object(a.a)(this, "getFilterTypes", () => [
              { type: "is", label: "Is exactly", getInitialValue: () => "" },
              {
                type: "not",
                label: "Is not exactly",
                getInitialValue: () => "",
              },
              {
                type: "gt",
                label: "Is greater than",
                getInitialValue: () => "",
              },
              { type: "lt", label: "Is less than", getInitialValue: () => "" },
              {
                type: "gte",
                label: "Is greater than or equal to",
                getInitialValue: () => "",
              },
              {
                type: "lte",
                label: "Is less than or equal to",
                getInitialValue: () => "",
              },
              { type: "in", label: "Is one of", getInitialValue: () => "" },
              {
                type: "not_in",
                label: "Is not one of",
                getInitialValue: () => "",
              },
            ]);
        }
      }
      t.default = s;
    },
  },
]);
