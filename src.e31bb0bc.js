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
},{"./../images/made/mob/made-bg_mob.png":[["made-bg_mob.ebf7ea7d.png","images/made/mob/made-bg_mob.png"],"images/made/mob/made-bg_mob.png"],"./../images/made/mob/made-bg_mob.webp":[["made-bg_mob.85d40a5c.webp","images/made/mob/made-bg_mob.webp"],"images/made/mob/made-bg_mob.webp"],"./../images/made/desctop/made-bg.png":[["made-bg.b9af1b79.png","images/made/desctop/made-bg.png"],"images/made/desctop/made-bg.png"],"./../images/made/desctop/made-bg.webp":[["made-bg.802eab3a.webp","images/made/desctop/made-bg.webp"],"images/made/desctop/made-bg.webp"],"./../images/made/mob/made-bg_mob@2x.png":[["made-bg_mob@2x.4a337560.png","images/made/mob/made-bg_mob@2x.png"],"images/made/mob/made-bg_mob@2x.png"],"./../images/made/mob/made-bg_mob@3x.png":[["made-bg_mob@3x.c4f653e8.png","images/made/mob/made-bg_mob@3x.png"],"images/made/mob/made-bg_mob@3x.png"],"./../images/made/mob/made-bg_mob@2x.webp":[["made-bg_mob@2x.837943ba.webp","images/made/mob/made-bg_mob@2x.webp"],"images/made/mob/made-bg_mob@2x.webp"],"./../images/made/mob/made-bg_mob@3x.webp":[["made-bg_mob@3x.e614c0e9.webp","images/made/mob/made-bg_mob@3x.webp"],"images/made/mob/made-bg_mob@3x.webp"],"./../images/made/desctop/made-bg@2x.png":[["made-bg@2x.1b66569f.png","images/made/desctop/made-bg@2x.png"],"images/made/desctop/made-bg@2x.png"],"./../images/made/desctop/made-bg@3x.png":[["made-bg@3x.613eeff6.png","images/made/desctop/made-bg@3x.png"],"images/made/desctop/made-bg@3x.png"],"./../images/made/desctop/made-bg@2x.webp":[["made-bg@2x.9002ecbe.webp","images/made/desctop/made-bg@2x.webp"],"images/made/desctop/made-bg@2x.webp"],"./../images/made/desctop/made-bg@3x.webp":[["made-bg@3x.29d4618e.webp","images/made/desctop/made-bg@3x.webp"],"images/made/desctop/made-bg@3x.webp"],"./../images/made/made-icon-1.png":[["made-icon-1.98db1146.png","images/made/made-icon-1.png"],"images/made/made-icon-1.png"],"./../images/made/made-icon-1@2x.png":[["made-icon-1@2x.32745f5b.png","images/made/made-icon-1@2x.png"],"images/made/made-icon-1@2x.png"],"./../images/made/made-icon-1@3x.png":[["made-icon-1@3x.5afb64b6.png","images/made/made-icon-1@3x.png"],"images/made/made-icon-1@3x.png"],"./../images/made/made-icon-1.webp":[["made-icon-1.4f4a00d7.webp","images/made/made-icon-1.webp"],"images/made/made-icon-1.webp"],"./../images/made/made-icon-1@2x.webp":[["made-icon-1@2x.ebb4b8ce.webp","images/made/made-icon-1@2x.webp"],"images/made/made-icon-1@2x.webp"],"./../images/made/made-icon-1@3x.webp":[["made-icon-1@3x.b16c49a6.webp","images/made/made-icon-1@3x.webp"],"images/made/made-icon-1@3x.webp"],"./../images/made/made-icon-2.png":[["made-icon-2.edcd6d9e.png","images/made/made-icon-2.png"],"images/made/made-icon-2.png"],"./../images/made/made-icon-2@2x.png":[["made-icon-2@2x.587424f8.png","images/made/made-icon-2@2x.png"],"images/made/made-icon-2@2x.png"],"./../images/made/made-icon-2@3x.png":[["made-icon-2@3x.62d50993.png","images/made/made-icon-2@3x.png"],"images/made/made-icon-2@3x.png"],"./../images/made/made-icon-2.webp":[["made-icon-2.fd2af666.webp","images/made/made-icon-2.webp"],"images/made/made-icon-2.webp"],"./../images/made/made-icon-2@2x.webp":[["made-icon-2@2x.d2963e45.webp","images/made/made-icon-2@2x.webp"],"images/made/made-icon-2@2x.webp"],"./../images/made/made-icon-2@3x.webp":[["made-icon-2@3x.18f9fabb.webp","images/made/made-icon-2@3x.webp"],"images/made/made-icon-2@3x.webp"],"./../images/made/made-icon-3.png":[["made-icon-3.81acfca9.png","images/made/made-icon-3.png"],"images/made/made-icon-3.png"],"./../images/made/made-icon-3@2x.png":[["made-icon-3@2x.f4925a28.png","images/made/made-icon-3@2x.png"],"images/made/made-icon-3@2x.png"],"./../images/made/made-icon-3@3x.png":[["made-icon-3@3x.bda65631.png","images/made/made-icon-3@3x.png"],"images/made/made-icon-3@3x.png"],"./../images/made/made-icon-3.webp":[["made-icon-3.6c59caee.webp","images/made/made-icon-3.webp"],"images/made/made-icon-3.webp"],"./../images/made/made-icon-3@2x.webp":[["made-icon-3@2x.a1bb5b5c.webp","images/made/made-icon-3@2x.webp"],"images/made/made-icon-3@2x.webp"],"./../images/made/made-icon-3@3x.webp":[["made-icon-3@3x.121463f7.webp","images/made/made-icon-3@3x.webp"],"images/made/made-icon-3@3x.webp"],"./../images/gallery-1/gallery1.jpg":[["gallery1.ab762b14.jpg","images/gallery-1/gallery1.jpg"],"images/gallery-1/gallery1.jpg"],"./../images/gallery-1/gallery1.webp":[["gallery1.919a7644.webp","images/gallery-1/gallery1.webp"],"images/gallery-1/gallery1.webp"],"./../images/gallery-1/gallery@2x1.jpg":[["gallery@2x1.d99edfd6.jpg","images/gallery-1/gallery@2x1.jpg"],"images/gallery-1/gallery@2x1.jpg"],"./../images/gallery-1/gallery@2x1.webp":[["gallery@2x1.c87a598c.webp","images/gallery-1/gallery@2x1.webp"],"images/gallery-1/gallery@2x1.webp"],"./../images/gallery-1/gallery@3x1.jpg":[["gallery@3x1.ea2704ce.jpg","images/gallery-1/gallery@3x1.jpg"],"images/gallery-1/gallery@3x1.jpg"],"./../images/gallery-1/gallery@3x1.webp":[["gallery@3x1.7d170cdd.webp","images/gallery-1/gallery@3x1.webp"],"images/gallery-1/gallery@3x1.webp"],"./../images/gallery-1/gallery2.jpg":[["gallery2.3cd4a2a6.jpg","images/gallery-1/gallery2.jpg"],"images/gallery-1/gallery2.jpg"],"./../images/gallery-1/gallery2.webp":[["gallery2.e9007e72.webp","images/gallery-1/gallery2.webp"],"images/gallery-1/gallery2.webp"],"./../images/gallery-1/gallery@2x2.jpg":[["gallery@2x2.4b3f916c.jpg","images/gallery-1/gallery@2x2.jpg"],"images/gallery-1/gallery@2x2.jpg"],"./../images/gallery-1/gallery@2x2.webp":[["gallery@2x2.30a2c24e.webp","images/gallery-1/gallery@2x2.webp"],"images/gallery-1/gallery@2x2.webp"],"./../images/gallery-1/gallery@3x2.jpg":[["gallery@3x2.47648e6a.jpg","images/gallery-1/gallery@3x2.jpg"],"images/gallery-1/gallery@3x2.jpg"],"./../images/gallery-1/gallery@3x2.webp":[["gallery@3x2.6e675e3e.webp","images/gallery-1/gallery@3x2.webp"],"images/gallery-1/gallery@3x2.webp"],"./../images/gallery-1/gallery3.jpg":[["gallery3.245a2552.jpg","images/gallery-1/gallery3.jpg"],"images/gallery-1/gallery3.jpg"],"./../images/gallery-1/gallery3.webp":[["gallery3.411654b4.webp","images/gallery-1/gallery3.webp"],"images/gallery-1/gallery3.webp"],"./../images/gallery-1/gallery@2x3.jpg":[["gallery@2x3.cf08f35f.jpg","images/gallery-1/gallery@2x3.jpg"],"images/gallery-1/gallery@2x3.jpg"],"./../images/gallery-1/gallery@2x3.webp":[["gallery@2x3.1945e4ed.webp","images/gallery-1/gallery@2x3.webp"],"images/gallery-1/gallery@2x3.webp"],"./../images/gallery-1/gallery@3x3.jpg":[["gallery@3x3.c1859d37.jpg","images/gallery-1/gallery@3x3.jpg"],"images/gallery-1/gallery@3x3.jpg"],"./../images/gallery-1/gallery@3x3.webp":[["gallery@3x3.8e04b2b0.webp","images/gallery-1/gallery@3x3.webp"],"images/gallery-1/gallery@3x3.webp"],"./../images/gallery-1/gallery4.jpg":[["gallery4.145e8bc1.jpg","images/gallery-1/gallery4.jpg"],"images/gallery-1/gallery4.jpg"],"./../images/gallery-1/gallery4.webp":[["gallery4.d8f06ec4.webp","images/gallery-1/gallery4.webp"],"images/gallery-1/gallery4.webp"],"./../images/gallery-1/gallery@2x4.jpg":[["gallery@2x4.806980e4.jpg","images/gallery-1/gallery@2x4.jpg"],"images/gallery-1/gallery@2x4.jpg"],"./../images/gallery-1/gallery@2x4.webp":[["gallery@2x4.a6fa5541.webp","images/gallery-1/gallery@2x4.webp"],"images/gallery-1/gallery@2x4.webp"],"./../images/gallery-1/gallery@3x4.jpg":[["gallery@3x4.c0c9884f.jpg","images/gallery-1/gallery@3x4.jpg"],"images/gallery-1/gallery@3x4.jpg"],"./../images/gallery-1/gallery@3x4.webp":[["gallery@3x4.4a3b645b.webp","images/gallery-1/gallery@3x4.webp"],"images/gallery-1/gallery@3x4.webp"],"./../images/gallery-1/gallery5.jpg":[["gallery5.ca25a707.jpg","images/gallery-1/gallery5.jpg"],"images/gallery-1/gallery5.jpg"],"./../images/gallery-1/gallery5.webp":[["gallery5.df08da89.webp","images/gallery-1/gallery5.webp"],"images/gallery-1/gallery5.webp"],"./../images/gallery-1/gallery@2x5.jpg":[["gallery@2x5.f79ac29f.jpg","images/gallery-1/gallery@2x5.jpg"],"images/gallery-1/gallery@2x5.jpg"],"./../images/gallery-1/gallery@2x5.webp":[["gallery@2x5.8cd798a5.webp","images/gallery-1/gallery@2x5.webp"],"images/gallery-1/gallery@2x5.webp"],"./../images/gallery-1/gallery@3x5.jpg":[["gallery@3x5.ee38d501.jpg","images/gallery-1/gallery@3x5.jpg"],"images/gallery-1/gallery@3x5.jpg"],"./../images/gallery-1/gallery@3x5.webp":[["gallery@3x5.42fc1a6b.webp","images/gallery-1/gallery@3x5.webp"],"images/gallery-1/gallery@3x5.webp"],"./../images/gallery-1/gallery6.jpg":[["gallery6.df3e59ed.jpg","images/gallery-1/gallery6.jpg"],"images/gallery-1/gallery6.jpg"],"./../images/gallery-1/gallery6.webp":[["gallery6.5c956807.webp","images/gallery-1/gallery6.webp"],"images/gallery-1/gallery6.webp"],"./../images/gallery-1/gallery@2x6.jpg":[["gallery@2x6.9fdcf3a9.jpg","images/gallery-1/gallery@2x6.jpg"],"images/gallery-1/gallery@2x6.jpg"],"./../images/gallery-1/gallery@2x6.webp":[["gallery@2x6.cda1e301.webp","images/gallery-1/gallery@2x6.webp"],"images/gallery-1/gallery@2x6.webp"],"./../images/gallery-1/gallery@3x6.jpg":[["gallery@3x6.52ba77e2.jpg","images/gallery-1/gallery@3x6.jpg"],"images/gallery-1/gallery@3x6.jpg"],"./../images/gallery-1/gallery@3x6.webp":[["gallery@3x6.d909eb20.webp","images/gallery-1/gallery@3x6.webp"],"images/gallery-1/gallery@3x6.webp"],"./../images/gallery-1/gallery7.jpg":[["gallery7.eb0fd1d4.jpg","images/gallery-1/gallery7.jpg"],"images/gallery-1/gallery7.jpg"],"./../images/gallery-1/gallery7.webp":[["gallery7.989d19cb.webp","images/gallery-1/gallery7.webp"],"images/gallery-1/gallery7.webp"],"./../images/gallery-1/gallery@2x7.jpg":[["gallery@2x7.9c791540.jpg","images/gallery-1/gallery@2x7.jpg"],"images/gallery-1/gallery@2x7.jpg"],"./../images/gallery-1/gallery@2x7.webp":[["gallery@2x7.07e4c92d.webp","images/gallery-1/gallery@2x7.webp"],"images/gallery-1/gallery@2x7.webp"],"./../images/gallery-1/gallery@3x7.jpg":[["gallery@3x7.b11cf2f3.jpg","images/gallery-1/gallery@3x7.jpg"],"images/gallery-1/gallery@3x7.jpg"],"./../images/gallery-1/gallery@3x7.webp":[["gallery@3x7.9de96442.webp","images/gallery-1/gallery@3x7.webp"],"images/gallery-1/gallery@3x7.webp"],"./../images/gallery-1/gallery8.jpg":[["gallery8.d3ce950a.jpg","images/gallery-1/gallery8.jpg"],"images/gallery-1/gallery8.jpg"],"./../images/gallery-1/gallery8.webp":[["gallery8.bb7e51ac.webp","images/gallery-1/gallery8.webp"],"images/gallery-1/gallery8.webp"],"./../images/gallery-1/gallery@2x8.jpg":[["gallery@2x8.d2e56bd0.jpg","images/gallery-1/gallery@2x8.jpg"],"images/gallery-1/gallery@2x8.jpg"],"./../images/gallery-1/gallery@2x8.webp":[["gallery@2x8.dc01854d.webp","images/gallery-1/gallery@2x8.webp"],"images/gallery-1/gallery@2x8.webp"],"./../images/gallery-1/gallery@3x8.jpg":[["gallery@3x8.1c98a475.jpg","images/gallery-1/gallery@3x8.jpg"],"images/gallery-1/gallery@3x8.jpg"],"./../images/gallery-1/gallery@3x8.webp":[["gallery@3x8.71b551f3.webp","images/gallery-1/gallery@3x8.webp"],"images/gallery-1/gallery@3x8.webp"],"./../images/gallery-1/gallery9.jpg":[["gallery9.f944f4cd.jpg","images/gallery-1/gallery9.jpg"],"images/gallery-1/gallery9.jpg"],"./../images/gallery-1/gallery9.webp":[["gallery9.eb3e2de1.webp","images/gallery-1/gallery9.webp"],"images/gallery-1/gallery9.webp"],"./../images/gallery-1/gallery@2x9.jpg":[["gallery@2x9.8a18e8ab.jpg","images/gallery-1/gallery@2x9.jpg"],"images/gallery-1/gallery@2x9.jpg"],"./../images/gallery-1/gallery@2x9.webp":[["gallery@2x9.2121527d.webp","images/gallery-1/gallery@2x9.webp"],"images/gallery-1/gallery@2x9.webp"],"./../images/gallery-1/gallery@3x9.jpg":[["gallery@3x9.f51454c5.jpg","images/gallery-1/gallery@3x9.jpg"],"images/gallery-1/gallery@3x9.jpg"],"./../images/gallery-1/gallery@3x9.webp":[["gallery@3x9.5b89aee1.webp","images/gallery-1/gallery@3x9.webp"],"images/gallery-1/gallery@3x9.webp"],"./../images/gallery-1/gallery10.jpg":[["gallery10.208ffe22.jpg","images/gallery-1/gallery10.jpg"],"images/gallery-1/gallery10.jpg"],"./../images/gallery-1/gallery10.webp":[["gallery10.1ba4334d.webp","images/gallery-1/gallery10.webp"],"images/gallery-1/gallery10.webp"],"./../images/gallery-1/gallery@2x10.jpg":[["gallery@2x10.0d5a8531.jpg","images/gallery-1/gallery@2x10.jpg"],"images/gallery-1/gallery@2x10.jpg"],"./../images/gallery-1/gallery@2x10.webp":[["gallery@2x10.76cb4fd9.webp","images/gallery-1/gallery@2x10.webp"],"images/gallery-1/gallery@2x10.webp"],"./../images/gallery-1/gallery@3x10.jpg":[["gallery@3x10.2525643f.jpg","images/gallery-1/gallery@3x10.jpg"],"images/gallery-1/gallery@3x10.jpg"],"./../images/gallery-1/gallery@3x10.webp":[["gallery@3x10.d22c74ad.webp","images/gallery-1/gallery@3x10.webp"],"images/gallery-1/gallery@3x10.webp"],"./../images/work_plan/desctop/wp_bg.webp":[["wp_bg.c01b289c.webp","images/work_plan/desctop/wp_bg.webp"],"images/work_plan/desctop/wp_bg.webp"],"./../images/work_plan/desctop/wp_bg.png":[["wp_bg.8c61c7aa.png","images/work_plan/desctop/wp_bg.png"],"images/work_plan/desctop/wp_bg.png"],"./../images/work_plan/desctop/wp_bg@2x.webp":[["wp_bg@2x.dad090cb.webp","images/work_plan/desctop/wp_bg@2x.webp"],"images/work_plan/desctop/wp_bg@2x.webp"],"./../images/work_plan/desctop/wp_bg@2x.png":[["wp_bg@2x.0c546d64.png","images/work_plan/desctop/wp_bg@2x.png"],"images/work_plan/desctop/wp_bg@2x.png"],"./../images/work_plan/desctop/wp__bg@3x.webp":[["wp__bg@3x.e27356ab.webp","images/work_plan/desctop/wp__bg@3x.webp"],"images/work_plan/desctop/wp__bg@3x.webp"],"./../images/work_plan/desctop/wp_bg@3x.png":[["wp_bg@3x.d3248896.png","images/work_plan/desctop/wp_bg@3x.png"],"images/work_plan/desctop/wp_bg@3x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46357" + '/');

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