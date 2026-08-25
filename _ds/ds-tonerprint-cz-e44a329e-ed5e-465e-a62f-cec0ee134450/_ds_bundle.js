/* @ds-bundle: {"format":4,"namespace":"DSTonerPrintCz_e44a32","components":[{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Notification","sourcePath":"components/feedback/Notification.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"ProductCardSkeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Quantity","sourcePath":"components/forms/Quantity.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Header","sourcePath":"components/global/Header.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"FilterDrawer","sourcePath":"components/overlay/FilterDrawer.jsx"},{"name":"FilterGroup","sourcePath":"components/overlay/FilterDrawer.jsx"},{"name":"Popup","sourcePath":"components/overlay/Popup.jsx"},{"name":"AvailabilityBadge","sourcePath":"components/product/AvailabilityBadge.jsx"},{"name":"Price","sourcePath":"components/product/Price.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"ProductFlags","sourcePath":"components/product/ProductFlags.jsx"},{"name":"ProductGrid","sourcePath":"components/product/ProductGrid.jsx"},{"name":"Rating","sourcePath":"components/product/Rating.jsx"}],"sourceHashes":{"assets/icons/icon-names.js":"1ee7c34c4e44","assets/icons/sprite.js":"d4e8ca43c00a","components/core/Icon.jsx":"d25df6a81c1e","components/feedback/EmptyState.jsx":"908e6a369f4d","components/feedback/Notification.jsx":"80ee6bbfb884","components/feedback/Skeleton.jsx":"d65ec0b977c1","components/forms/Button.jsx":"01b39dcda98c","components/forms/Checkbox.jsx":"611846b06b78","components/forms/Quantity.jsx":"661e9804f4a1","components/forms/Select.jsx":"5189f1bead27","components/forms/TextField.jsx":"43de0b331018","components/global/Header.jsx":"aae78b2dc2fb","components/navigation/Pagination.jsx":"af763487ef7c","components/navigation/Tabs.jsx":"c299f0630f4f","components/overlay/FilterDrawer.jsx":"3c384ecda8e6","components/overlay/Popup.jsx":"79e7163ca6e8","components/product/AvailabilityBadge.jsx":"cea5180146d3","components/product/Price.jsx":"a1a062d13238","components/product/ProductCard.jsx":"04501707e308","components/product/ProductFlags.jsx":"c77ac7e3357f","components/product/ProductGrid.jsx":"55642369c030","components/product/Rating.jsx":"9301ac521c54"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DSTonerPrintCz_e44a32 = window.DSTonerPrintCz_e44a32 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/icon-names.js
try { (() => {
/* TonerPrint — seznam ikon pro knihovnu ve styleguide.
   <symbol> definice jsou vložené inline v dokumentu, aby žádné
   <use href="#tp-…"> nikdy nemířilo do prázdna. */
(function () {
  window.TP_ICONS = [{
    "n": "ai-search",
    "g": "base"
  }, {
    "n": "layout-grid",
    "g": "base"
  }, {
    "n": "layout-list",
    "g": "base"
  }, {
    "n": "printer",
    "g": "base"
  }, {
    "n": "mail",
    "g": "base"
  }, {
    "n": "arrows-left-right",
    "g": "base"
  }, {
    "n": "bell",
    "g": "base"
  }, {
    "n": "message-question",
    "g": "base"
  }, {
    "n": "alert-circle",
    "g": "base"
  }, {
    "n": "alert-small",
    "g": "base"
  }, {
    "n": "alert-square-rounded",
    "g": "base"
  }, {
    "n": "alert-square",
    "g": "base"
  }, {
    "n": "alert-triangle",
    "g": "base"
  }, {
    "n": "check",
    "g": "base"
  }, {
    "n": "chevron-compact-down",
    "g": "base"
  }, {
    "n": "chevron-compact-left",
    "g": "base"
  }, {
    "n": "chevron-compact-right",
    "g": "base"
  }, {
    "n": "chevron-compact-up",
    "g": "base"
  }, {
    "n": "chevron-down-left",
    "g": "base"
  }, {
    "n": "chevron-down-right",
    "g": "base"
  }, {
    "n": "chevron-down",
    "g": "base"
  }, {
    "n": "chevron-left-pipe",
    "g": "base"
  }, {
    "n": "chevron-left",
    "g": "base"
  }, {
    "n": "chevron-right-pipe",
    "g": "base"
  }, {
    "n": "chevron-right",
    "g": "base"
  }, {
    "n": "chevron-up-left",
    "g": "base"
  }, {
    "n": "chevron-up-right",
    "g": "base"
  }, {
    "n": "chevron-up",
    "g": "base"
  }, {
    "n": "chevrons-down-left",
    "g": "base"
  }, {
    "n": "chevrons-down-right",
    "g": "base"
  }, {
    "n": "chevrons-down",
    "g": "base"
  }, {
    "n": "chevrons-left",
    "g": "base"
  }, {
    "n": "chevrons-right",
    "g": "base"
  }, {
    "n": "chevrons-up-left",
    "g": "base"
  }, {
    "n": "chevrons-up-right",
    "g": "base"
  }, {
    "n": "chevrons-up",
    "g": "base"
  }, {
    "n": "circle-check",
    "g": "base"
  }, {
    "n": "circle-chevron-down",
    "g": "base"
  }, {
    "n": "circle-chevron-left",
    "g": "base"
  }, {
    "n": "circle-chevron-right",
    "g": "base"
  }, {
    "n": "circle-chevron-up",
    "g": "base"
  }, {
    "n": "circle-x",
    "g": "base"
  }, {
    "n": "credit-card-hand",
    "g": "base"
  }, {
    "n": "credit-card-refund",
    "g": "base"
  }, {
    "n": "credit-card",
    "g": "base"
  }, {
    "n": "eye-x",
    "g": "base"
  }, {
    "n": "eye",
    "g": "base"
  }, {
    "n": "filter-2",
    "g": "base"
  }, {
    "n": "filter-x",
    "g": "base"
  }, {
    "n": "filter",
    "g": "base"
  }, {
    "n": "heart",
    "g": "base"
  }, {
    "n": "info-circle",
    "g": "base"
  }, {
    "n": "info-square",
    "g": "base"
  }, {
    "n": "info-triangle",
    "g": "base"
  }, {
    "n": "menu-2",
    "g": "base"
  }, {
    "n": "menu-3",
    "g": "base"
  }, {
    "n": "menu-4",
    "g": "base"
  }, {
    "n": "menu-deep",
    "g": "base"
  }, {
    "n": "minus",
    "g": "base"
  }, {
    "n": "package-export",
    "g": "base"
  }, {
    "n": "package-import",
    "g": "base"
  }, {
    "n": "package-off",
    "g": "base"
  }, {
    "n": "package",
    "g": "base"
  }, {
    "n": "plus",
    "g": "base"
  }, {
    "n": "search",
    "g": "base"
  }, {
    "n": "shopping-cart",
    "g": "base"
  }, {
    "n": "star",
    "g": "base"
  }, {
    "n": "trash-x",
    "g": "base"
  }, {
    "n": "trash",
    "g": "base"
  }, {
    "n": "truck-delivery",
    "g": "base"
  }, {
    "n": "truck-loading",
    "g": "base"
  }, {
    "n": "truck-return",
    "g": "base"
  }, {
    "n": "user-minus",
    "g": "base"
  }, {
    "n": "user-pin",
    "g": "base"
  }, {
    "n": "user-plus",
    "g": "base"
  }, {
    "n": "user-square-rounded",
    "g": "base"
  }, {
    "n": "user-square",
    "g": "base"
  }, {
    "n": "user-star",
    "g": "base"
  }, {
    "n": "user-x",
    "g": "base"
  }, {
    "n": "user",
    "g": "base"
  }, {
    "n": "users-group",
    "g": "base"
  }, {
    "n": "users",
    "g": "base"
  }, {
    "n": "x",
    "g": "base"
  }, {
    "n": "arrows-diff",
    "g": "plus"
  }, {
    "n": "arrows-exchange",
    "g": "plus"
  }, {
    "n": "arrows-maximize",
    "g": "plus"
  }, {
    "n": "arrows-minimize",
    "g": "plus"
  }, {
    "n": "book-2",
    "g": "plus"
  }, {
    "n": "book",
    "g": "plus"
  }, {
    "n": "calendar-time",
    "g": "plus"
  }, {
    "n": "clock",
    "g": "plus"
  }, {
    "n": "coin",
    "g": "plus"
  }, {
    "n": "coins",
    "g": "plus"
  }, {
    "n": "color-swatch",
    "g": "plus"
  }, {
    "n": "copy",
    "g": "plus"
  }, {
    "n": "dimensions",
    "g": "plus"
  }, {
    "n": "discount",
    "g": "plus"
  }, {
    "n": "download",
    "g": "plus"
  }, {
    "n": "edit",
    "g": "plus"
  }, {
    "n": "heart-filled",
    "g": "plus"
  }, {
    "n": "loader-2",
    "g": "plus"
  }, {
    "n": "loader-3",
    "g": "plus"
  }, {
    "n": "loader-4",
    "g": "plus"
  }, {
    "n": "loader-quarter",
    "g": "plus"
  }, {
    "n": "loader",
    "g": "plus"
  }, {
    "n": "palette",
    "g": "plus"
  }, {
    "n": "percentage-0",
    "g": "plus"
  }, {
    "n": "percentage-10",
    "g": "plus"
  }, {
    "n": "percentage-100",
    "g": "plus"
  }, {
    "n": "percentage-20",
    "g": "plus"
  }, {
    "n": "percentage-25",
    "g": "plus"
  }, {
    "n": "percentage-30",
    "g": "plus"
  }, {
    "n": "percentage-33",
    "g": "plus"
  }, {
    "n": "percentage-40",
    "g": "plus"
  }, {
    "n": "percentage-50",
    "g": "plus"
  }, {
    "n": "percentage-60",
    "g": "plus"
  }, {
    "n": "percentage-66",
    "g": "plus"
  }, {
    "n": "percentage-70",
    "g": "plus"
  }, {
    "n": "percentage-75",
    "g": "plus"
  }, {
    "n": "percentage-80",
    "g": "plus"
  }, {
    "n": "percentage-90",
    "g": "plus"
  }, {
    "n": "phone",
    "g": "plus"
  }, {
    "n": "photo-off",
    "g": "plus"
  }, {
    "n": "photo",
    "g": "plus"
  }, {
    "n": "player-pause",
    "g": "plus"
  }, {
    "n": "player-play",
    "g": "plus"
  }, {
    "n": "player-stop",
    "g": "plus"
  }, {
    "n": "refresh",
    "g": "plus"
  }, {
    "n": "ruler-2",
    "g": "plus"
  }, {
    "n": "ruler-3",
    "g": "plus"
  }, {
    "n": "ruler-measure-2",
    "g": "plus"
  }, {
    "n": "ruler-measure",
    "g": "plus"
  }, {
    "n": "scale-outline",
    "g": "plus"
  }, {
    "n": "scale",
    "g": "plus"
  }, {
    "n": "share-2",
    "g": "plus"
  }, {
    "n": "shirt",
    "g": "plus"
  }, {
    "n": "shoe",
    "g": "plus"
  }, {
    "n": "shopping-bag-check",
    "g": "plus"
  }, {
    "n": "shopping-bag-discount",
    "g": "plus"
  }, {
    "n": "shopping-bag-exclamation",
    "g": "plus"
  }, {
    "n": "shopping-bag-heart",
    "g": "plus"
  }, {
    "n": "shopping-bag-minus",
    "g": "plus"
  }, {
    "n": "shopping-bag-plus",
    "g": "plus"
  }, {
    "n": "shopping-bag-x",
    "g": "plus"
  }, {
    "n": "shopping-bag",
    "g": "plus"
  }, {
    "n": "tag-starred",
    "g": "plus"
  }, {
    "n": "tag",
    "g": "plus"
  }, {
    "n": "ticket",
    "g": "plus"
  }, {
    "n": "trending-down",
    "g": "plus"
  }, {
    "n": "trending-up",
    "g": "plus"
  }, {
    "n": "video",
    "g": "plus"
  }, {
    "n": "view-360-arrow",
    "g": "plus"
  }, {
    "n": "view-360-number",
    "g": "plus"
  }, {
    "n": "view-360",
    "g": "plus"
  }, {
    "n": "zoom-in",
    "g": "plus"
  }, {
    "n": "zoom-out",
    "g": "plus"
  }, {
    "n": "zoom-pan",
    "g": "plus"
  }, {
    "n": "brand-facebook",
    "g": "social"
  }, {
    "n": "brand-instagram",
    "g": "social"
  }, {
    "n": "brand-youtube",
    "g": "social"
  }, {
    "n": "brand-linkedin",
    "g": "social"
  }, {
    "n": "brand-x",
    "g": "social"
  }];
  window.dispatchEvent(new Event('tp-icons-ready'));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/icon-names.js", error: String((e && e.message) || e) }); }

// assets/icons/sprite.js
try { (() => {
/* Vloží ikonový sprite do dokumentu. Cesta se odvodí od umístění tohoto skriptu,
   takže funguje ze všech úrovní projektu. */
(function () {
  var self = document.currentScript && document.currentScript.src;
  var url = self ? self.replace(/sprite\.js.*$/, 'tp-icons.svg') : 'assets/icons/tp-icons.svg';
  fetch(url).then(function (r) {
    return r.text();
  }).then(function (svg) {
    var d = document.createElement('div');
    d.style.display = 'none';
    d.innerHTML = svg;
    document.body.insertBefore(d, document.body.firstChild);
    window.dispatchEvent(new CustomEvent('tp-sprite-ready'));
  }).catch(function () {});
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/sprite.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Ikona ze sprite assets/icons/tp-icons.svg.
   Sprite musí být vložený do dokumentu (viz readme, sekce Ikonografie). */
function Icon({
  name,
  size = 3,
  className = '',
  ...rest
}) {
  const cls = ['icon', size ? 'ico' + size : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: cls,
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("use", {
    href: '#tp-' + name
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'package-off',
  caption,
  children,
  action,
  className = ''
}) {
  const cls = ['EmptyView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', 'empty', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 4
  }), caption && /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, caption), children && /*#__PURE__*/React.createElement("p", {
    className: "shortDescription"
  }, children), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notification.jsx
try { (() => {
const ICONS = {
  zelena: 'circle-check',
  zluta: 'alert-triangle',
  cervena: 'circle-x',
  seda: 'info-circle',
  info: 'info-circle'
};
function Notification({
  children,
  caption,
  tone = 'info',
  onClose,
  className = ''
}) {
  const cls = ['NotificationView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', tone !== 'info' ? 'cs_' + tone : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[tone] || ICONS.info,
    size: 3
  }), /*#__PURE__*/React.createElement("span", null, caption && /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, caption), children), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button toggle",
    "aria-label": "Zav\u0159\xEDt",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 2
  })));
}
Object.assign(__ds_scope, { Notification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  variant,
  width,
  height,
  className = ''
}) {
  const cls = ['skeleton', variant || '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: {
      width,
      height
    }
  });
}
function ProductCardSkeleton() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ProductView v1a v1 bs-view dcon dc000 inactive"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "image"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "name"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "short"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "price"
  }));
}
Object.assign(__ds_scope, { Skeleton, ProductCardSkeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'a1',
  size = 'default',
  icon,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['button', variant !== 'a1' ? variant : '', size !== 'default' ? size : '', !children ? 'empty' : '', loading ? 'inactive' : '', className].filter(Boolean).join(' ');
  const icoSize = size === 'big' ? 3 : 2;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled || loading,
    style: fullWidth ? {
      width: '100%'
    } : undefined
  }, rest), loading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-2",
    size: icoSize,
    className: "loader"
  }), !loading && icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: icoSize
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: icoSize
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  count,
  type = 'checkbox',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['formRow', 'inline', disabled ? 'disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: type === 'radio' ? 'radio' : 'checkBox',
    type: type,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    className: "value"
  }, count));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Quantity.jsx
try { (() => {
function Quantity({
  value = 1,
  min = 1,
  max = 999,
  onChange,
  units,
  className = ''
}) {
  const set = n => onChange && onChange(Math.min(max, Math.max(min, n)));
  const cls = ['AddToCartView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "quantity"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button decrease",
    "aria-label": "Sn\xED\u017Eit po\u010Det",
    onClick: () => set(value - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 2
  })), /*#__PURE__*/React.createElement("input", {
    className: "real",
    type: "number",
    "aria-label": "Po\u010Det",
    value: value,
    min: min,
    max: max,
    onChange: e => set(parseInt(e.target.value, 10) || min)
  }), /*#__PURE__*/React.createElement("span", {
    className: "ghost"
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button increase",
    "aria-label": "Zv\xFD\u0161it po\u010Det",
    onClick: () => set(value + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 2
  }))), units && /*#__PURE__*/React.createElement("span", {
    className: "unitsDescription"
  }, units));
}
Object.assign(__ds_scope, { Quantity });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Quantity.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  id,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['formRow', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "label",
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    className: "select",
    id: id
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), hint && /*#__PURE__*/React.createElement("span", {
    className: "shortDescription"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  hint,
  error,
  required = false,
  multiline = false,
  id,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['formRow', error ? 'empty' : '', disabled ? 'disabled' : '', className].filter(Boolean).join(' ');
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "label",
    htmlFor: id
  }, label, " ", required && /*#__PURE__*/React.createElement("span", {
    className: "value"
  }, "*")), /*#__PURE__*/React.createElement(Field, _extends({
    className: multiline ? 'textArea' : 'textBox',
    id: id,
    disabled: disabled
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    className: "shortDescription"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    size: 2
  }), error), !error && hint && /*#__PURE__*/React.createElement("span", {
    className: "shortDescription"
  }, hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/global/Header.jsx
try { (() => {
function Header({
  logo,
  searchPlaceholder = 'Hledejte podle názvu nebo kódu',
  cartCount = 0,
  onMenu,
  className = ''
}) {
  const cls = ['HeaderView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("header", {
    className: cls
  }, /*#__PURE__*/React.createElement("dc-con", {
    class: "dcContent"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button menuButton",
    "aria-label": "Menu",
    onClick: onMenu
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu-2",
    size: 3
  })), /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "/"
  }, logo), /*#__PURE__*/React.createElement("div", {
    className: "SimpleSearchView v1a v1 bs-view dcon dc000"
  }, /*#__PURE__*/React.createElement("input", {
    className: "textBox",
    type: "search",
    placeholder: searchPlaceholder,
    "aria-label": "Hledat"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button search",
    "aria-label": "Hledat"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 2
  }))), /*#__PURE__*/React.createElement("dc-con", {
    class: "dcHeader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "LoginUserView v1a v1 bs-view dcon dc000"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/prihlaseni"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user",
    size: 3
  }), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, "P\u0159ihl\xE1sit"))), /*#__PURE__*/React.createElement("div", {
    className: "BasketPanelView v1a v1 bs-view dcon dc000"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/kosik"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shopping-cart",
    size: 3
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "basketCount"
  }, cartCount))))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/global/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  pages = 1,
  onChange,
  position = 'bottom',
  className = ''
}) {
  const cls = ['CompoundPagingView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', position, className].filter(Boolean).join(' ');
  const go = n => onChange && onChange(Math.min(pages, Math.max(1, n)));
  const nums = [];
  for (let n = 1; n <= pages; n++) {
    if (n === 1 || n === pages || Math.abs(n - page) <= 1) nums.push(n);else if (nums[nums.length - 1] !== '…') nums.push('…');
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "pages"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button page previous",
    "aria-label": "P\u0159edchoz\xED strana",
    disabled: page === 1,
    onClick: () => go(page - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 2
  })), nums.map((n, i) => n === '…' ? /*#__PURE__*/React.createElement("span", {
    key: 's' + i,
    className: "separator"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    className: 'button page' + (n === page ? ' selected' : ''),
    onClick: () => go(n)
  }, n)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button page next",
    "aria-label": "Dal\u0161\xED strana",
    disabled: page === pages,
    onClick: () => go(page + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 2
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value = 0,
  onChange,
  children,
  className = ''
}) {
  const cls = ['TabsProductDetailMasterView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', className].filter(Boolean).join(' ');
  const panels = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabpages"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabs",
    role: "tablist"
  }, tabs.map((t, i) => {
    const label = typeof t === 'string' ? t : t.label;
    const count = typeof t === 'string' ? null : t.count;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      role: "tab",
      "aria-selected": i === value,
      className: 'page' + (i === value ? ' selected' : ''),
      onClick: () => onChange && onChange(i)
    }, label, count != null && /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, count));
  })), /*#__PURE__*/React.createElement("div", {
    className: "pages"
  }, panels.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    role: "tabpanel",
    className: 'page' + (i === value ? ' selected' : '')
  }, p)))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/FilterDrawer.jsx
try { (() => {
function FilterDrawer({
  open = false,
  onClose,
  count,
  children,
  resultLabel = 'Zobrazit výsledky',
  onReset,
  className = ''
}) {
  const cls = ['FilterView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', open ? 'active' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Filtry"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("dc-con", {
    class: "wrap"
  }, /*#__PURE__*/React.createElement("dc-con", {
    class: "dcHeader"
  }, /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "filter",
    size: 2
  }), "Filtry", count > 0 && /*#__PURE__*/React.createElement("span", {
    className: "value"
  }, count)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button toggle",
    "aria-label": "Zav\u0159\xEDt filtry",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 3
  }))), /*#__PURE__*/React.createElement("dc-con", {
    class: "dcContent"
  }, children), /*#__PURE__*/React.createElement("dc-con", {
    class: "bottom"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button toggle",
    onClick: onReset
  }, "Zru\u0161it"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button buy",
    onClick: onClose
  }, resultLabel))));
}
function FilterGroup({
  label,
  children,
  collapsed = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'group' + (collapsed ? ' noAutoExpand' : '')
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "label"
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 2,
    className: "bs-crv"
  })), /*#__PURE__*/React.createElement("div", {
    className: "items"
  }, children));
}
Object.assign(__ds_scope, { FilterDrawer, FilterGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/FilterDrawer.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Popup.jsx
try { (() => {
function Popup({
  open = false,
  onClose,
  caption,
  children,
  actions,
  className = ''
}) {
  const cls = ['PopupView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', open ? 'active' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": caption
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("dc-con", {
    class: "popup"
  }, /*#__PURE__*/React.createElement("dc-con", {
    class: "dcHeader"
  }, /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, caption), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button toggle",
    "aria-label": "Zav\u0159\xEDt",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 3
  }))), /*#__PURE__*/React.createElement("dc-con", {
    class: "dcContent"
  }, children), actions && /*#__PURE__*/React.createElement("dc-con", {
    class: "bottom"
  }, actions)));
}
Object.assign(__ds_scope, { Popup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Popup.jsx", error: String((e && e.message) || e) }); }

// components/product/AvailabilityBadge.jsx
try { (() => {
function AvailabilityBadge({
  children,
  state = 'zelena',
  className = ''
}) {
  const cls = ['AvailabilityView', 'v1a', 'v1', 'bs-view', 'cs_' + state, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, children));
}
Object.assign(__ds_scope, { AvailabilityBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/AvailabilityBadge.jsx", error: String((e && e.message) || e) }); }

// components/product/Price.jsx
try { (() => {
function Price({
  vat,
  novat,
  original,
  units,
  size = 'primary',
  user = false,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['priceParts', className].filter(Boolean).join(' ')
  }, original && /*#__PURE__*/React.createElement("span", {
    className: "value ghost"
  }, original), vat && /*#__PURE__*/React.createElement("span", {
    className: ['price', 'bs-priceLayout', 'notranslate', 'vat', size, user ? 'user' : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "value"
  }, vat), /*#__PURE__*/React.createElement("span", {
    className: "vatText"
  }, "s DPH")), novat && /*#__PURE__*/React.createElement("span", {
    className: "price bs-priceLayout notranslate novat secondary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "value"
  }, novat), /*#__PURE__*/React.createElement("span", {
    className: "vatText"
  }, "bez DPH")), units && /*#__PURE__*/React.createElement("span", {
    className: "unitsDescription"
  }, units));
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Price.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductFlags.jsx
try { (() => {
function ProductFlags({
  flags = [],
  look = 'A',
  className = ''
}) {
  const shown = flags.slice(0, 3);
  const cls = ['ActionIconsView', 'v1a', 'v1', 'bs-view', 'count' + shown.length, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    "data-look": look
  }, shown.map((fl, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'productFlag icon ' + (fl.tone || 'flag01')
  }, /*#__PURE__*/React.createElement("span", null, fl.label))));
}
Object.assign(__ds_scope, { ProductFlags });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductFlags.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductGrid.jsx
try { (() => {
function ProductGrid({
  children,
  caption,
  captionIcon,
  readMore,
  readMoreHref = '#',
  columns = 4,
  variant = 'grid',
  className = ''
}) {
  const cls = ['ProductsView', 'ProductsViewBase', variant === 'carousel' ? 'v2a v2' : 'v1a v1', 'bs-view', 'dcon', 'dc000', 'columns' + columns, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, caption && /*#__PURE__*/React.createElement("dc-con", {
    class: "dcHeader"
  }, /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, captionIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: captionIcon,
    size: 3
  }), caption), readMore && /*#__PURE__*/React.createElement("a", {
    className: "readMore",
    href: readMoreHref
  }, readMore, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 2
  }))), variant === 'carousel' ? /*#__PURE__*/React.createElement("div", {
    className: "slidingItems"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scrollContainer"
  }, children)) : /*#__PURE__*/React.createElement("div", {
    className: "productHolder"
  }, children));
}
Object.assign(__ds_scope, { ProductGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductGrid.jsx", error: String((e && e.message) || e) }); }

// components/product/Rating.jsx
try { (() => {
function Rating({
  value = 0,
  count,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['rating', className].filter(Boolean).join(' ')
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: n,
    name: "star",
    size: 2,
    className: n <= Math.round(value) ? 'selected' : ''
  })), count != null && /*#__PURE__*/React.createElement("span", {
    className: "value"
  }, "(", count, " hodnocen\xED)"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Rating.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  href = '#',
  image,
  code,
  price,
  availability,
  availabilityState = 'zelena',
  rating,
  ratingCount,
  flags,
  shortDescription,
  layout = 'grid',
  quantity,
  onQuantityChange,
  units,
  canBuy = true,
  onBuy,
  className = ''
}) {
  const [inner, setInner] = React.useState(1);
  const qty = quantity != null ? quantity : inner;
  const setQty = n => {
    const v = Math.min(999, Math.max(1, n));
    if (onQuantityChange) onQuantityChange(v);else setInner(v);
  };
  const cls = ['ProductView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', canBuy ? 'canBuy' : 'empty', layout === 'row' ? 'big' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    "data-name": "Product"
  }, /*#__PURE__*/React.createElement("a", {
    className: "image",
    href: href
  }, flags && flags.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.ProductFlags, {
    flags: flags,
    look: "B"
  }), /*#__PURE__*/React.createElement("img", {
    className: "mainImage",
    src: image,
    alt: name,
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("dc-con", {
    class: "dcHeader"
  }, code && /*#__PURE__*/React.createElement("span", {
    className: "code"
  }, code), /*#__PURE__*/React.createElement("a", {
    className: "name",
    href: href
  }, name), shortDescription && /*#__PURE__*/React.createElement("p", {
    className: "shortDescription"
  }, shortDescription), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: ratingCount
  })), /*#__PURE__*/React.createElement("dc-con", {
    class: "dcPrice"
  }, price, availability && /*#__PURE__*/React.createElement(__ds_scope.AvailabilityBadge, {
    state: availabilityState
  }, availability)), /*#__PURE__*/React.createElement("dc-con", {
    class: "dcContent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "AddToCartView v1a v1 bs-view dcon dc000"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quantity"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button decrease",
    "aria-label": "Sn\xED\u017Eit po\u010Det",
    disabled: !canBuy,
    onClick: () => setQty(qty - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 2
  })), /*#__PURE__*/React.createElement("input", {
    className: "real",
    type: "number",
    "aria-label": "Po\u010Det",
    value: qty,
    min: 1,
    max: 999,
    disabled: !canBuy,
    onChange: e => setQty(parseInt(e.target.value, 10) || 1)
  }), /*#__PURE__*/React.createElement("span", {
    className: "ghost"
  }, qty), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button increase",
    "aria-label": "Zv\xFD\u0161it po\u010Det",
    disabled: !canBuy,
    onClick: () => setQty(qty + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 2
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "button buy",
    disabled: !canBuy,
    onClick: () => onBuy && onBuy(qty)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shopping-cart",
    size: 2
  }), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Do ko\u0161\xEDku"))), units && /*#__PURE__*/React.createElement("span", {
    className: "unitsDescription"
  }, units)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Notification = __ds_scope.Notification;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.ProductCardSkeleton = __ds_scope.ProductCardSkeleton;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Quantity = __ds_scope.Quantity;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.FilterDrawer = __ds_scope.FilterDrawer;

__ds_ns.FilterGroup = __ds_scope.FilterGroup;

__ds_ns.Popup = __ds_scope.Popup;

__ds_ns.AvailabilityBadge = __ds_scope.AvailabilityBadge;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProductFlags = __ds_scope.ProductFlags;

__ds_ns.ProductGrid = __ds_scope.ProductGrid;

__ds_ns.Rating = __ds_scope.Rating;

})();
