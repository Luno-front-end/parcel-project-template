// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\raleway-bold.ttf":[["raleway-bold.37214722.ttf","fonts/raleway-bold.ttf"],"fonts/raleway-bold.ttf"],"./..\\images\\header\\hero-mob.jpg":[["hero-mob.1594a52c.jpg","images/header/hero-mob.jpg"],"images/header/hero-mob.jpg"],"./..\\images\\header\\hero-mob@2x.jpg":[["hero-mob@2x.d7aec1ea.jpg","images/header/hero-mob@2x.jpg"],"images/header/hero-mob@2x.jpg"],"./..\\images\\header\\hero-mob@3x.jpg":[["hero-mob@3x.c46b2d38.jpg","images/header/hero-mob@3x.jpg"],"images/header/hero-mob@3x.jpg"],"./..\\images\\header\\mobile_2.jpg":[["mobile_2.f3ac3f69.jpg","images/header/mobile_2.jpg"],"images/header/mobile_2.jpg"],"./..\\images\\header\\mobile_2@2x.jpg":[["mobile_2@2x.d941d15f.jpg","images/header/mobile_2@2x.jpg"],"images/header/mobile_2@2x.jpg"],"./..\\images\\header\\mobile_2@3x.jpg":[["mobile_2@3x.245f335c.jpg","images/header/mobile_2@3x.jpg"],"images/header/mobile_2@3x.jpg"],"./..\\images\\header\\mobile_3.jpg":[["mobile_3.0634cbdd.jpg","images/header/mobile_3.jpg"],"images/header/mobile_3.jpg"],"./..\\images\\header\\mobile_3@2x.jpg":[["mobile_3@2x.35bfdd34.jpg","images/header/mobile_3@2x.jpg"],"images/header/mobile_3@2x.jpg"],"./..\\images\\header\\mobile_3@3x.jpg":[["mobile_3@3x.e7750acc.jpg","images/header/mobile_3@3x.jpg"],"images/header/mobile_3@3x.jpg"],"./..\\images\\header\\hero-tab.jpg":[["hero-tab.9a5440b9.jpg","images/header/hero-tab.jpg"],"images/header/hero-tab.jpg"],"./..\\images\\header\\hero-tab@2x.jpg":[["hero-tab@2x.aa7875f2.jpg","images/header/hero-tab@2x.jpg"],"images/header/hero-tab@2x.jpg"],"./..\\images\\header\\hero-tab@3x.jpg":[["hero-tab@3x.7ea03dcd.jpg","images/header/hero-tab@3x.jpg"],"images/header/hero-tab@3x.jpg"],"./..\\images\\header\\tablet_2.jpg":[["tablet_2.a544d855.jpg","images/header/tablet_2.jpg"],"images/header/tablet_2.jpg"],"./..\\images\\header\\tablet_2@2x.jpg":[["tablet_2@2x.bde06ca9.jpg","images/header/tablet_2@2x.jpg"],"images/header/tablet_2@2x.jpg"],"./..\\images\\header\\tablet_2@3x.jpg":[["tablet_2@3x.bb176547.jpg","images/header/tablet_2@3x.jpg"],"images/header/tablet_2@3x.jpg"],"./..\\images\\header\\tablet_3.jpg":[["tablet_3.dc8a1f72.jpg","images/header/tablet_3.jpg"],"images/header/tablet_3.jpg"],"./..\\images\\header\\tablet_3@2x.jpg":[["tablet_3@2x.c1873864.jpg","images/header/tablet_3@2x.jpg"],"images/header/tablet_3@2x.jpg"],"./..\\images\\header\\tablet_3@3x.jpg":[["tablet_3@3x.6f935c7e.jpg","images/header/tablet_3@3x.jpg"],"images/header/tablet_3@3x.jpg"],"./..\\images\\header\\hero-pc.jpg":[["hero-pc.0c11e077.jpg","images/header/hero-pc.jpg"],"images/header/hero-pc.jpg"],"./..\\images\\header\\hero-pc@2x.jpg":[["hero-pc@2x.2eb3ec30.jpg","images/header/hero-pc@2x.jpg"],"images/header/hero-pc@2x.jpg"],"./..\\images\\header\\hero-pc@3x.jpg":[["hero-pc@3x.4037ed59.jpg","images/header/hero-pc@3x.jpg"],"images/header/hero-pc@3x.jpg"],"./..\\images\\header\\desktop_2.jpg":[["desktop_2.8ce244b3.jpg","images/header/desktop_2.jpg"],"images/header/desktop_2.jpg"],"./..\\images\\header\\desktop_2@2x.jpg":[["desktop_2@2x.7bf51610.jpg","images/header/desktop_2@2x.jpg"],"images/header/desktop_2@2x.jpg"],"./..\\images\\header\\desktop_2@3x.jpg":[["desktop_2@3x.18f32542.jpg","images/header/desktop_2@3x.jpg"],"images/header/desktop_2@3x.jpg"],"./..\\images\\header\\desktop_3.jpg":[["desktop_3.4fd4cc5b.jpg","images/header/desktop_3.jpg"],"images/header/desktop_3.jpg"],"./..\\images\\header\\desktop_3@2x.jpg":[["desktop_3@2x.9b3c49a8.jpg","images/header/desktop_3@2x.jpg"],"images/header/desktop_3@2x.jpg"],"./..\\images\\header\\desktop_3@3x.jpg":[["desktop_3@3x.4f49dcd8.jpg","images/header/desktop_3@3x.jpg"],"images/header/desktop_3@3x.jpg"],"./..\\images\\services-and-price\\mobile\\small-size\\background-image-services-mobile.png":[["background-image-services-mobile.8fc2a670.png","images/services-and-price/mobile/small-size/background-image-services-mobile.png"],"images/services-and-price/mobile/small-size/background-image-services-mobile.png"],"./..\\images\\services-and-price\\mobile\\small-size\\background-image-services-mobile@2x.png":[["background-image-services-mobile@2x.cd2579ad.png","images/services-and-price/mobile/small-size/background-image-services-mobile@2x.png"],"images/services-and-price/mobile/small-size/background-image-services-mobile@2x.png"],"./..\\images\\services-and-price\\mobile\\small-size\\background-image-services-mobile@3x.png":[["background-image-services-mobile@3x.15fe5676.png","images/services-and-price/mobile/small-size/background-image-services-mobile@3x.png"],"images/services-and-price/mobile/small-size/background-image-services-mobile@3x.png"],"./..\\images\\services-and-price\\tablet\\small-size\\background-image-services-tablet.png":[["background-image-services-tablet.b59377e5.png","images/services-and-price/tablet/small-size/background-image-services-tablet.png"],"images/services-and-price/tablet/small-size/background-image-services-tablet.png"],"./..\\images\\services-and-price\\tablet\\small-size\\background-image-services-tablet@2x.png":[["background-image-services-tablet@2x.ead438dd.png","images/services-and-price/tablet/small-size/background-image-services-tablet@2x.png"],"images/services-and-price/tablet/small-size/background-image-services-tablet@2x.png"],"./..\\images\\services-and-price\\tablet\\small-size\\background-image-services-tablet@3x.png":[["background-image-services-tablet@3x.0a1fd408.png","images/services-and-price/tablet/small-size/background-image-services-tablet@3x.png"],"images/services-and-price/tablet/small-size/background-image-services-tablet@3x.png"],"./..\\images\\services-and-price\\pc\\small-size\\background-image-services-pc.png":[["background-image-services-pc.768f32b6.png","images/services-and-price/pc/small-size/background-image-services-pc.png"],"images/services-and-price/pc/small-size/background-image-services-pc.png"],"./..\\images\\services-and-price\\pc\\small-size\\background-image-services-pc@2x.png":[["background-image-services-pc@2x.3b66fe03.png","images/services-and-price/pc/small-size/background-image-services-pc@2x.png"],"images/services-and-price/pc/small-size/background-image-services-pc@2x.png"],"./..\\images\\services-and-price\\pc\\small-size\\background-image-services-pc@3x.png":[["background-image-services-pc@3x.2451aad2.png","images/services-and-price/pc/small-size/background-image-services-pc@3x.png"],"images/services-and-price/pc/small-size/background-image-services-pc@3x.png"],"./..\\images\\page-footer\\mobile\\bg480M.png":[["bg480M.11d25363.png","images/page-footer/mobile/bg480M.png"],"images/page-footer/mobile/bg480M.png"],"./..\\images\\page-footer\\mobile\\bg960M@2x.png":[["bg960M@2x.e825c4fc.png","images/page-footer/mobile/bg960M@2x.png"],"images/page-footer/mobile/bg960M@2x.png"],"./..\\images\\page-footer\\mobile\\bg1440M@3x.png":[["bg1440M@3x.e7581b73.png","images/page-footer/mobile/bg1440M@3x.png"],"images/page-footer/mobile/bg1440M@3x.png"],"./..\\images\\page-footer\\tablet\\bg768T.png":[["bg768T.7e3478d0.png","images/page-footer/tablet/bg768T.png"],"images/page-footer/tablet/bg768T.png"],"./..\\images\\page-footer\\tablet\\bg1536T@2x.png":[["bg1536T@2x.760aaa1f.png","images/page-footer/tablet/bg1536T@2x.png"],"images/page-footer/tablet/bg1536T@2x.png"],"./..\\images\\page-footer\\tablet\\bg2304T@3x.png":[["bg2304T@3x.e5d279b0.png","images/page-footer/tablet/bg2304T@3x.png"],"images/page-footer/tablet/bg2304T@3x.png"],"./..\\images\\page-footer\\desktop\\bg625D.png":[["bg625D.07ed6ac2.png","images/page-footer/desktop/bg625D.png"],"images/page-footer/desktop/bg625D.png"],"./..\\images\\page-footer\\desktop\\bg1250D@2x.png":[["bg1250D@2x.c8187630.png","images/page-footer/desktop/bg1250D@2x.png"],"images/page-footer/desktop/bg1250D@2x.png"],"./..\\images\\page-footer\\desktop\\bg1875D@3x.png":[["bg1875D@3x.ece18c07.png","images/page-footer/desktop/bg1875D@3x.png"],"images/page-footer/desktop/bg1875D@3x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55788" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map