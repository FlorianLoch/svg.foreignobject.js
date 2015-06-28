/*! svg.foreignobject.js - v1.0.0 - 2015-06-28
* https://github.com/wout/svg.foreignobject.js
* Copyright (c) 2015 Wout Fierens; Licensed MIT */
(function () {
  "use strict";

  SVG.ForeignObject = function() {
    this.constructor.call(this, SVG.create("foreignObject"));

    /* store type */
    this.type = "foreignObject";
  };

  SVG.ForeignObject.prototype = new SVG.Shape();

  SVG.extend(SVG.ForeignObject, {
    appendChild: function (child, attrs) {
      var newChild = (typeof child === "string") ? document.createElement(child) : child;
      if (typeof attrs === "object"){
        for(var a in attrs) {
          newChild[a] = attrs[a];
        }
      }
      this.node.appendChild(newChild);
      return this;
    },
    getChild: function (index) {
      return this.node.childNodes[index];
    }
  });

  SVG.extend(SVG.Container, {
    foreignObject: function(width, height) {
      return this.put(new SVG.ForeignObject()).size((width === null) ? 100 : width, (height === null) ? 100 : height);
    }
  });
})();
