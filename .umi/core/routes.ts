// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/node_modules/.pnpm/@umijs+runtime@3.5.43_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/node_modules/.pnpm/@umijs+preset-dumi@1.1.48_react-dom@19.2.4_react@19.2.4__react-router@5.2.0_react@16.14_839ed0998e61cd9f8539064296c30b01/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.48_react-dom@19.2.4_react@19.2.4__reac_55d456d97b608f9ce6a3c53c92835c37/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1772879550078,
          "title": "首页",
          "hero": {
            "image": "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=YaYaHooks&backgroundColor=030307",
            "desc": "<div class=\"markdown\"><p>探索 React 状态管理的艺术 - 精心打磨的 Hooks 工具库</p></div>",
            "actions": [
              {
                "text": "开始探索",
                "link": "/guide"
              },
              {
                "text": "查看源码",
                "link": "/hooks"
              }
            ]
          },
          "features": [
            {
              "title": "极致性能",
              "desc": "<div class=\"markdown\"><p>每一个 Hook 都经过深度优化，确保你的应用保持丝滑流畅，拒绝任何性能损耗</p></div>"
            },
            {
              "title": "TypeScript First",
              "desc": "<div class=\"markdown\"><p>完整的类型推导，编辑器智能提示如丝般顺滑，让类型错误无所遁形</p></div>"
            },
            {
              "title": "极简 API",
              "desc": "<div class=\"markdown\"><p>精心设计的接口，简单导入即可使用，让专注回归业务逻辑本身</p></div>"
            },
            {
              "title": "持续进化",
              "desc": "<div class=\"markdown\"><p>紧跟 React 最新特性，持续迭代打磨，只为给你最好的开发体验</p></div>"
            }
          ],
          "slugs": [
            {
              "depth": 2,
              "value": "为什么选择 YaYa Hooks?",
              "heading": "为什么选择-yaya-hooks"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "快速开始",
              "heading": "快速开始"
            },
            {
              "depth": 2,
              "value": "核心 Hooks",
              "heading": "核心-hooks"
            },
            {
              "depth": 2,
              "value": "即将推出",
              "heading": "即将推出"
            }
          ],
          "hasPreviewer": true
        },
        "title": "首页 - YaYa React Hooks"
      },
      {
        "path": "/guide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__index.md' */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/docs/guide/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1772877779149,
          "title": "指南",
          "hero": {
            "image": "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=YaYaHooks&backgroundColor=030307",
            "desc": "<div class=\"markdown\"><p>全面掌握 YaYa Hooks 的使用技巧</p></div>",
            "actions": [
              {
                "text": "快速开始",
                "link": "/guide"
              },
              {
                "text": "API 参考",
                "link": "/hooks"
              }
            ]
          },
          "footer": false,
          "slugs": [
            {
              "depth": 2,
              "value": "简介",
              "heading": "简介"
            },
            {
              "depth": 2,
              "value": "核心设计理念",
              "heading": "核心设计理念"
            },
            {
              "depth": 3,
              "value": "1. 极简 API",
              "heading": "1-极简-api"
            },
            {
              "depth": 3,
              "value": "2. 极致性能",
              "heading": "2-极致性能"
            },
            {
              "depth": 3,
              "value": "3. TypeScript 支持",
              "heading": "3-typescript-支持"
            },
            {
              "depth": 2,
              "value": "基础 Hooks",
              "heading": "基础-hooks"
            },
            {
              "depth": 3,
              "value": "useToggle",
              "heading": "usetoggle"
            },
            {
              "depth": 3,
              "value": "useDebounce",
              "heading": "usedebounce"
            },
            {
              "depth": 3,
              "value": "useLocalStorage",
              "heading": "uselocalstorage"
            },
            {
              "depth": 2,
              "value": "最佳实践",
              "heading": "最佳实践"
            },
            {
              "depth": 3,
              "value": "1. 组合使用 Hooks",
              "heading": "1-组合使用-hooks"
            },
            {
              "depth": 3,
              "value": "2. 自定义 Hook",
              "heading": "2-自定义-hook"
            },
            {
              "depth": 3,
              "value": "3. 性能优化",
              "heading": "3-性能优化"
            },
            {
              "depth": 2,
              "value": "常见问题",
              "heading": "常见问题"
            },
            {
              "depth": 3,
              "value": "Q: Hooks 必须在组件顶层调用吗？",
              "heading": "q-hooks-必须在组件顶层调用吗"
            },
            {
              "depth": 3,
              "value": "Q: 如何处理 SSR 环境？",
              "heading": "q-如何处理-ssr-环境"
            },
            {
              "depth": 3,
              "value": "Q: 如何贡献代码？",
              "heading": "q-如何贡献代码"
            },
            {
              "depth": 2,
              "value": "下一步",
              "heading": "下一步"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "指南 - YaYa React Hooks"
      },
      {
        "path": "/plans/2026-03-08-search-design",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__plans__2026-03-08-search-design.md' */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/docs/plans/2026-03-08-search-design.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/plans/2026-03-08-search-design.md",
          "updatedTime": 1772972218000,
          "slugs": [
            {
              "depth": 1,
              "value": "搜索功能设计方案",
              "heading": "搜索功能设计方案"
            },
            {
              "depth": 2,
              "value": "1. 需求概述",
              "heading": "1-需求概述"
            },
            {
              "depth": 2,
              "value": "2. 架构设计",
              "heading": "2-架构设计"
            },
            {
              "depth": 3,
              "value": "2.1 自定义 Hook (useSearch)",
              "heading": "21-自定义-hook-usesearch"
            },
            {
              "depth": 3,
              "value": "2.2 Search 组件",
              "heading": "22-search-组件"
            },
            {
              "depth": 3,
              "value": "2.3 搜索结果展示",
              "heading": "23-搜索结果展示"
            },
            {
              "depth": 2,
              "value": "3. 数据流",
              "heading": "3-数据流"
            },
            {
              "depth": 2,
              "value": "4. 组件结构",
              "heading": "4-组件结构"
            },
            {
              "depth": 2,
              "value": "5. API 接口（预留）",
              "heading": "5-api-接口预留"
            },
            {
              "depth": 2,
              "value": "6. 样式与交互",
              "heading": "6-样式与交互"
            },
            {
              "depth": 2,
              "value": "7. 实现计划",
              "heading": "7-实现计划"
            }
          ],
          "title": "搜索功能设计方案",
          "nav": {
            "path": "/plans",
            "title": "Plans"
          }
        },
        "title": "搜索功能设计方案 - YaYa React Hooks"
      },
      {
        "path": "/hooks/use-memoized-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useMemoizedFn__index.md' */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useMemoizedFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useMemoizedFn/index.md",
          "updatedTime": 1773035557902,
          "componentName": "useMemoizedFn",
          "nav": {
            "path": "/hooks",
            "title": "UseMemoizedFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useMemoizedFn",
              "heading": "usememoizedfn"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            }
          ],
          "title": "useMemoizedFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-memoized-fn",
            "title": "UseMemoizedFn"
          }
        },
        "title": "useMemoizedFn - YaYa React Hooks"
      },
      {
        "path": "/hooks/use-toggle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useToggle__index.md' */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useToggle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useToggle/index.md",
          "updatedTime": 1772950180804,
          "nav": {
            "path": "/hooks",
            "title": "UseToggle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useToggle",
              "heading": "usetoggle"
            },
            {
              "depth": 2,
              "value": "特性",
              "heading": "特性"
            },
            {
              "depth": 2,
              "value": "适用场景",
              "heading": "适用场景"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "高级用法",
              "heading": "高级用法"
            },
            {
              "depth": 3,
              "value": "不传参数",
              "heading": "不传参数"
            },
            {
              "depth": 3,
              "value": "自定义切换值",
              "heading": "自定义切换值"
            },
            {
              "depth": 3,
              "value": "主题切换",
              "heading": "主题切换"
            },
            {
              "depth": 3,
              "value": "模态框",
              "heading": "模态框"
            },
            {
              "depth": 3,
              "value": "折叠面板",
              "heading": "折叠面板"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 4,
              "value": "泛型说明",
              "heading": "泛型说明"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            },
            {
              "depth": 3,
              "value": "TypeScript 类型",
              "heading": "typescript-类型"
            },
            {
              "depth": 2,
              "value": "注意事项",
              "heading": "注意事项"
            }
          ],
          "title": "useToggle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-toggle",
            "title": "UseToggle"
          }
        },
        "title": "useToggle - YaYa React Hooks"
      },
      {
        "path": "/hooks/use-update-effect",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUpdateEffect__index.md' */'/Users/yaqiaosu/Desktop/💻Code/前端工程化/00.内容平台/packages/hooks/src/useUpdateEffect/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdateEffect/index.md",
          "updatedTime": 1772956692831,
          "componentName": "useUpdateEffect",
          "nav": {
            "path": "/hooks",
            "title": "UseUpdateEffect"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUpdateEffect",
              "heading": "useupdateeffect"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useUpdateEffect",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-update-effect",
            "title": "UseUpdateEffect"
          }
        },
        "title": "useUpdateEffect - YaYa React Hooks"
      },
      {
        "path": "/plans",
        "meta": {},
        "exact": true,
        "redirect": "/plans/2026-03-08-search-design"
      },
      {
        "path": "/hooks",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-toggle"
      }
    ],
    "title": "YaYa React Hooks",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
