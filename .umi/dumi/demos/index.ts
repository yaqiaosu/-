// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useMemoizedFn/demo/demo.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo3.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo4.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo5.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo6.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo7.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useUpdateEffect/demo/demo.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useMemoizedFn/demo/demo2.tsx?dumi-raw-code';

export default {
  'docs-demo': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    var _yayaHooks = await import("yaya-hooks");
    function App() {
      // 状态切换 - 再也不用写冗长的 setState
      var _useToggle = (0, _yayaHooks.useToggle)(false),
        _useToggle2 = (0, _slicedToArray2["default"])(_useToggle, 2),
        isOn = _useToggle2[0],
        toggle = _useToggle2[1];

      // 自动防抖 - 再也不怕频繁触发
      var _useState = useState(''),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];
      var debouncedValue = (0, _yayaHooks.useDebounce)(value, 300);

      // 本地存储 - 数据持久化从未如此简单
      var _useLocalStorage = (0, _yayaHooks.useLocalStorage)('theme', 'dark'),
        _useLocalStorage2 = (0, _slicedToArray2["default"])(_useLocalStorage, 2),
        theme = _useLocalStorage2[0],
        setTheme = _useLocalStorage2[1];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: toggle
      }, isOn ? 'ON' : 'OFF'), /*#__PURE__*/React.createElement("input", {
        value: value,
        onChange: function onChange(e) {
          return setValue(e.target.value);
        }
      }), /*#__PURE__*/React.createElement("p", null, "Debounced: ", debouncedValue));
    }
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import { useToggle, useDebounce, useLocalStorage } from 'yaya-hooks';\n\nfunction App() {\n  // 状态切换 - 再也不用写冗长的 setState\n  const [isOn, toggle] = useToggle(false);\n\n  // 自动防抖 - 再也不怕频繁触发\n  const [value, setValue] = useState('');\n  const debouncedValue = useDebounce(value, 300);\n\n  // 本地存储 - 数据持久化从未如此简单\n  const [theme, setTheme] = useLocalStorage('theme', 'dark');\n\n  return (\n    <div>\n      <button onClick={toggle}>\n        {isOn ? 'ON' : 'OFF'}\n      </button>\n      <input\n        value={value}\n        onChange={e => setValue(e.target.value)}\n      />\n      <p>Debounced: {debouncedValue}</p>\n    </div>\n  );\n}"}},"dependencies":{"yaya-hooks":{"version":"1.0.0"}},"identifier":"docs-demo"},
  },
  'guide-demo': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    // 一行代码搞定状态切换
    var _useToggle = useToggle(false),
      _useToggle2 = (0, _slicedToArray2["default"])(_useToggle, 2),
      isOn = _useToggle2[0],
      toggle = _useToggle2[1];
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"// 一行代码搞定状态切换\nconst [isOn, toggle] = useToggle(false);"}},"dependencies":{},"identifier":"guide-demo"},
  },
  'guide-demo-1': {
    component: dynamic({
  loader: async function () {
    var React;
    // 自动防抖，告别性能损耗
    var debouncedValue = useDebounce(value, 300);
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"// 自动防抖，告别性能损耗\nconst debouncedValue = useDebounce(value, 300);"}},"dependencies":{},"identifier":"guide-demo-1"},
  },
  'guide-demo-2': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    // 自动推断返回类型
    var _useLocalStorage = useLocalStorage('key', 'default'),
      _useLocalStorage2 = (0, _slicedToArray2["default"])(_useLocalStorage, 2),
      value = _useLocalStorage2[0],
      setValue = _useLocalStorage2[1];
    // ✓ setValue 接受 string 类型
    // ✓ value 被正确推断为 string | undefined
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"// 自动推断返回类型\nconst [value, setValue] = useLocalStorage('key', 'default');\n// ✓ setValue 接受 string 类型\n// ✓ value 被正确推断为 string | undefined"}},"dependencies":{},"identifier":"guide-demo-2"},
  },
  'guide-demo-3': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    var _yayaHooks = await import("yaya-hooks");
    function App() {
      var _useToggle = (0, _yayaHooks.useToggle)(false),
        _useToggle2 = (0, _slicedToArray2["default"])(_useToggle, 2),
        isVisible = _useToggle2[0],
        toggle = _useToggle2[1];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: toggle
      }, isVisible ? '隐藏' : '显示'), isVisible && /*#__PURE__*/React.createElement(Modal, null));
    }
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import { useToggle } from 'yaya-hooks';\n\nfunction App() {\n  const [isVisible, toggle] = useToggle(false);\n\n  return (\n    <div>\n      <button onClick={toggle}>\n        {isVisible ? '隐藏' : '显示'}\n      </button>\n      {isVisible && <Modal />}\n    </div>\n  );\n}"}},"dependencies":{"yaya-hooks":{"version":"1.0.0"}},"identifier":"guide-demo-3"},
  },
  'guide-demo-4': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    var _yayaHooks = await import("yaya-hooks");
    function Search() {
      var _useState = (0, _yayaHooks.useState)(''),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        query = _useState2[0],
        setQuery = _useState2[1];
      var debouncedQuery = (0, _yayaHooks.useDebounce)(query, 300);

      // debouncedQuery 会在输入停止 300ms 后更新
      useEffect(function () {
        if (debouncedQuery) {
          searchAPI(debouncedQuery);
        }
      }, [debouncedQuery]);
      return /*#__PURE__*/React.createElement("input", {
        value: query,
        onChange: function onChange(e) {
          return setQuery(e.target.value);
        },
        placeholder: "\u641C\u7D22..."
      });
    }
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import { useDebounce, useState } from 'yaya-hooks';\n\nfunction Search() {\n  const [query, setQuery] = useState('');\n  const debouncedQuery = useDebounce(query, 300);\n\n  // debouncedQuery 会在输入停止 300ms 后更新\n  useEffect(() => {\n    if (debouncedQuery) {\n      searchAPI(debouncedQuery);\n    }\n  }, [debouncedQuery]);\n\n  return (\n    <input\n      value={query}\n      onChange={e => setQuery(e.target.value)}\n      placeholder=\"搜索...\"\n    />\n  );\n}"}},"dependencies":{"yaya-hooks":{"version":"1.0.0"}},"identifier":"guide-demo-4"},
  },
  'guide-demo-5': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    var _yayaHooks = await import("yaya-hooks");
    function App() {
      var _useLocalStorage = (0, _yayaHooks.useLocalStorage)('theme', 'dark'),
        _useLocalStorage2 = (0, _slicedToArray2["default"])(_useLocalStorage, 2),
        theme = _useLocalStorage2[0],
        setTheme = _useLocalStorage2[1];
      var _useLocalStorage3 = (0, _yayaHooks.useLocalStorage)('username', ''),
        _useLocalStorage4 = (0, _slicedToArray2["default"])(_useLocalStorage3, 2),
        username = _useLocalStorage4[0],
        setUsername = _useLocalStorage4[1];
      return /*#__PURE__*/React.createElement("div", {
        className: theme
      }, /*#__PURE__*/React.createElement("input", {
        value: username,
        onChange: function onChange(e) {
          return setUsername(e.target.value);
        },
        placeholder: "\u8F93\u5165\u7528\u6237\u540D"
      }), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setTheme(theme === 'dark' ? 'light' : 'dark');
        }
      }, "\u5207\u6362\u4E3B\u9898"));
    }
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import { useLocalStorage } from 'yaya-hooks';\n\nfunction App() {\n  const [theme, setTheme] = useLocalStorage('theme', 'dark');\n  const [username, setUsername] = useLocalStorage('username', '');\n\n  return (\n    <div className={theme}>\n      <input\n        value={username}\n        onChange={e => setUsername(e.target.value)}\n        placeholder=\"输入用户名\"\n      />\n      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>\n        切换主题\n      </button>\n    </div>\n  );\n}"}},"dependencies":{"yaya-hooks":{"version":"1.0.0"}},"identifier":"guide-demo-5"},
  },
  'guide-demo-6': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    function AdvancedSearch() {
      var _useState = useState(''),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        query = _useState2[0],
        setQuery = _useState2[1];
      var _useState3 = useState({}),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        filters = _useState4[0],
        setFilters = _useState4[1];
      var _useState5 = useState(1),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        page = _useState6[0],
        setPage = _useState6[1];
      var debouncedQuery = useDebounce(query, 300);
      var debouncedFilters = useDebounce(filters, 500);
      var results = useAsync(function () {
        return fetchResults(debouncedQuery, debouncedFilters, page);
      }, [debouncedQuery, debouncedFilters, page]);
      var isLoading = useToggle(false);
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
        value: query,
        onChange: function onChange(e) {
          return setQuery(e.target.value);
        }
      }), /*#__PURE__*/React.createElement(FilterPanel, {
        onChange: setFilters
      }), /*#__PURE__*/React.createElement(ResultsList, {
        data: results.data,
        loading: results.loading
      }), /*#__PURE__*/React.createElement(Pagination, {
        page: page,
        onChange: setPage
      }));
    }
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"function AdvancedSearch() {\n  const [query, setQuery] = useState('');\n  const [filters, setFilters] = useState({});\n  const [page, setPage] = useState(1);\n\n  const debouncedQuery = useDebounce(query, 300);\n  const debouncedFilters = useDebounce(filters, 500);\n\n  const results = useAsync(\n    () => fetchResults(debouncedQuery, debouncedFilters, page),\n    [debouncedQuery, debouncedFilters, page]\n  );\n\n  const isLoading = useToggle(false);\n\n  return (\n    <div>\n      <input value={query} onChange={e => setQuery(e.target.value)} />\n      <FilterPanel onChange={setFilters} />\n      <ResultsList data={results.data} loading={results.loading} />\n      <Pagination page={page} onChange={setPage} />\n    </div>\n  );\n}"}},"dependencies":{},"identifier":"guide-demo-6"},
  },
  'guide-demo-7': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _defineProperty2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
    var _objectSpread4 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    function useForm(initialValues) {
      var _useState = useState(initialValues),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        values = _useState2[0],
        setValues = _useState2[1];
      var _useState3 = useState({}),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        errors = _useState4[0],
        setErrors = _useState4[1];
      var handleChange = function handleChange(field, value) {
        setValues(function (prev) {
          return (0, _objectSpread4["default"])((0, _objectSpread4["default"])({}, prev), {}, (0, _defineProperty2["default"])({}, field, value));
        });
        // 清除对应字段的错误
        setErrors(function (prev) {
          return (0, _objectSpread4["default"])((0, _objectSpread4["default"])({}, prev), {}, (0, _defineProperty2["default"])({}, field, undefined));
        });
      };
      var reset = function reset() {
        setValues(initialValues);
        setErrors({});
      };
      return {
        values: values,
        errors: errors,
        handleChange: handleChange,
        reset: reset
      };
    }
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"function useForm(initialValues) {\n  const [values, setValues] = useState(initialValues);\n  const [errors, setErrors] = useState({});\n\n  const handleChange = (field, value) => {\n    setValues(prev => ({ ...prev, [field]: value }));\n    // 清除对应字段的错误\n    setErrors(prev => ({ ...prev, [field]: undefined }));\n  };\n\n  const reset = () => {\n    setValues(initialValues);\n    setErrors({});\n  };\n\n  return { values, errors, handleChange, reset };\n}"}},"dependencies":{},"identifier":"guide-demo-7"},
  },
  'guide-demo-8': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    function ExpensiveComponent() {
      var _useState = useState([]),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        list = _useState2[0],
        setList = _useState2[1];
      var _useState3 = useState(''),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        filter = _useState4[0],
        setFilter = _useState4[1];
      var filteredList = useMemo(function () {
        return list.filter(function (item) {
          return item.name.includes(filter);
        });
      }, [list, filter]);
      var handleItemClick = useCallback(function (id) {
        console.log('Clicked:', id);
      }, []);
      return /*#__PURE__*/React.createElement(List, {
        data: filteredList,
        onItemClick: handleItemClick
      });
    }
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"function ExpensiveComponent() {\n  const [list, setList] = useState([]);\n  const [filter, setFilter] = useState('');\n\n  const filteredList = useMemo(\n    () => list.filter(item => item.name.includes(filter)),\n    [list, filter]\n  );\n\n  const handleItemClick = useCallback((id) => {\n    console.log('Clicked:', id);\n  }, []);\n\n  return (\n    <List\n      data={filteredList}\n      onItemClick={handleItemClick}\n    />\n  );\n}"}},"dependencies":{},"identifier":"guide-demo-8"},
  },
  'guide-demo-9': {
    component: dynamic({
  loader: async function () {
    var React;
    var _interopRequireDefault = require("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
    var _slicedToArray2 = _interopRequireDefault(await import("/Users/yaqiaosu/Desktop/\uD83D\uDCBBCode/\u524D\u7AEF\u5DE5\u7A0B\u5316/00.\u5185\u5BB9\u5E73\u53F0/node_modules/.pnpm/@babel+runtime@7.18.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
    function ClientOnlyComponent() {
      var _useState = useState(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        isMounted = _useState2[0],
        setIsMounted = _useState2[1];
      useEffect(function () {
        setIsMounted(true);
      }, []);
      if (!isMounted) return null;
      return /*#__PURE__*/React.createElement(MyComponent, null);
    }
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"function ClientOnlyComponent() {\n  const [isMounted, setIsMounted] = useState(false);\n\n  useEffect(() => {\n    setIsMounted(true);\n  }, []);\n\n  if (!isMounted) return null;\n\n  return <MyComponent />;\n}"}},"dependencies":{},"identifier":"guide-demo-9"},
  },
  'usememoizedfn-demo': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nFdeziomeMesu" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useMemoizedFn/demo/demo.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"19.2.4"},"yaya-hooks":{"version":"1.0.0"}},"componentName":"useMemoizedFn","identifier":"usememoizedfn-demo"},
  },
  'usetoggle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"19.2.4"},"yaya-hooks":{"version":"1.0.0"}},"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"19.2.4"},"yaya-hooks":{"version":"1.0.0"}},"identifier":"usetoggle-demo2"},
  },
  'usetoggle-demo3': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo3.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"19.2.4"},"yaya-hooks":{"version":"1.0.0"}},"identifier":"usetoggle-demo3"},
  },
  'usetoggle-demo4': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo4.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5}},"dependencies":{"react":{"version":"19.2.4"},"yaya-hooks":{"version":"1.0.0"}},"identifier":"usetoggle-demo4"},
  },
  'usetoggle-demo5': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo5.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6}},"dependencies":{"react":{"version":"19.2.4"},"yaya-hooks":{"version":"1.0.0"}},"identifier":"usetoggle-demo5"},
  },
  'usetoggle-demo6': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo6.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode7}},"dependencies":{"react":{"version":"19.2.4"},"yaya-hooks":{"version":"1.0.0"}},"identifier":"usetoggle-demo6"},
  },
  'usetoggle-demo7': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/demo/demo7.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode8}},"dependencies":{"react":{"version":"19.2.4"},"yaya-hooks":{"version":"1.0.0"}},"identifier":"usetoggle-demo7"},
  },
  'useupdateeffect-demo': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_tceffEetadpUesu" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useUpdateEffect/demo/demo.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode9}},"dependencies":{"yaya-hooks":{"version":"1.0.0"},"react":{"version":"19.2.4"}},"componentName":"useUpdateEffect","identifier":"useupdateeffect-demo"},
  },
  'usememoizedfn-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nFdeziomeMesu" */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useMemoizedFn/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode10}},"dependencies":{"react":{"version":"19.2.4"},"yaya-hooks":{"version":"1.0.0"}},"componentName":"useMemoizedFn","identifier":"usememoizedfn-demo2"},
  },
};
