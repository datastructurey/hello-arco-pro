import auth, { AuthParams } from '@/utils/authentication';
import { ReactNode, useEffect, useMemo, useState } from 'react';

export type IRoute = AuthParams & {
  name: string;
  key: string;
  // 当前页是否展示面包屑
  breadcrumb?: boolean;
  children?: IRoute[];
  // 当前路由是否渲染菜单项，为 true 的话不会在菜单中显示，但可通过路由地址访问。
  ignore?: boolean;
  meta?: {
    icon: ReactNode;
  };
};

export const routes: IRoute[] = [
  // {
  //   name: 'menu.dashboard',
  //   key: 'dashboard',
  //   children: [
  //     {
  //       name: 'menu.dashboard.workplace',
  //       key: 'dashboard/workplace',
  //     },
  //     {
  //       name: 'menu.dashboard.monitor',
  //       key: 'dashboard/monitor',
  //       requiredPermissions: [
  //         { resource: 'menu.dashboard.monitor', actions: ['write'] },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: 'menu.visualization',
  //   key: 'visualization',
  //   children: [
  //     {
  //       name: 'menu.visualization.dataAnalysis',
  //       key: 'visualization/data-analysis',
  //       requiredPermissions: [
  //         { resource: 'menu.visualization.dataAnalysis', actions: ['read'] },
  //       ],
  //     },
  //     {
  //       name: 'menu.visualization.multiDimensionDataAnalysis',
  //       key: 'visualization/multi-dimension-data-analysis',
  //       requiredPermissions: [
  //         {
  //           resource: 'menu.visualization.dataAnalysis',
  //           actions: ['read', 'write'],
  //         },
  //         {
  //           resource: 'menu.visualization.multiDimensionDataAnalysis',
  //           actions: ['write'],
  //         },
  //       ],
  //       oneOfPerm: true,
  //     },
  //   ],
  // },
  // {
  //   name: 'menu.list',
  //   key: 'list',
  //   children: [
  //     {
  //       name: 'menu.list.searchTable',
  //       key: 'list/search-table',
  //     },
  //     {
  //       name: 'menu.list.cardList',
  //       key: 'list/card',
  //     },
  //   ],
  // },
  // {
  //   name: 'menu.form',
  //   key: 'form',
  //   children: [
  //     {
  //       name: 'menu.form.group',
  //       key: 'form/group',
  //       requiredPermissions: [
  //         { resource: 'menu.form.group', actions: ['read', 'write'] },
  //       ],
  //     },
  //     {
  //       name: 'menu.form.step',
  //       key: 'form/step',
  //       requiredPermissions: [
  //         { resource: 'menu.form.step', actions: ['read'] },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: 'menu.profile',
  //   key: 'profile',
  //   children: [
  //     {
  //       name: 'menu.profile.basic',
  //       key: 'profile/basic',
  //     },
  //   ],
  // },
  //
  // {
  //   name: 'menu.result',
  //   key: 'result',
  //   children: [
  //     {
  //       name: 'menu.result.success',
  //       key: 'result/success',
  //       breadcrumb: false,
  //     },
  //     {
  //       name: 'menu.result.error',
  //       key: 'result/error',
  //       breadcrumb: false,
  //     },
  //   ],
  // },
  // {
  //   name: 'menu.exception',
  //   key: 'exception',
  //   children: [
  //     {
  //       name: 'menu.exception.403',
  //       key: 'exception/403',
  //     },
  //     {
  //       name: 'menu.exception.404',
  //       key: 'exception/404',
  //     },
  //     {
  //       name: 'menu.exception.500',
  //       key: 'exception/500',
  //     },
  //   ],
  // },
  // {
  //   name: 'menu.user',
  //   key: 'user',
  //   children: [
  //     {
  //       name: 'menu.user.info',
  //       key: 'user/info',
  //     },
  //     {
  //       name: 'menu.user.setting',
  //       key: 'user/setting',
  //     },
  //   ],
  // },
  {
    name: '备货管理',
    key: 'stock',
    meta: {
      icon: 'icon-beihuoguanli',
    },
    children: [
      {
        name: '备货申请管理',
        key: 'stock/proposal',
      },
      {
        name: '备货申请确认',
        key: 'stock/sure',
      },
      {
        name: '备货复核确认',
        key: 'stock/review',
      },
      {
        name: '辅助数据中心',
        key: 'stock/supportingData',
      },
      {
        name: '分区逻辑设置',
        key: 'stock/zone',
      },
      {
        name: 'SKU负责人管理',
        key: 'stock/personInCharge',
      },
      {
        name: '备货数据调整',
        key: 'stock/adjustment',
      },
    ],
  },
  {
    name: '排柜管理',
    key: 'cabinet',
    meta: {
      icon: 'icon-yewushujuguanli',
    },
    children: [
      {
        name: '备货分配工厂',
        key: 'cabinet/stockingAllocation',
      },
      {
        name: '分配工厂审批',
        key: 'cabinet/distributionFactory',
      },
      {
        name: '填写交互时间',
        key: 'cabinet/deliveryTime',
      },
      {
        name: '系统自动排柜',
        key: 'cabinet/autoCabinet',
      },
      {
        name: '交付单汇总页',
        key: 'cabinet/deliverySummary',
      },
      {
        name: '排柜信息补全',
        key: 'cabinet/infoCompletion',
      },
      {
        name: '特殊交付管理',
        key: 'cabinet/specialDelivery',
      },
    ],
  },
  {
    name: '库存管理',
    key: 'inventory',
    meta: {
      icon: 'icon-kucunguanli',
    },
    children: [
      {
        name: '头程上架管理',
        key: 'inventory/warehouse',
      },
      {
        name: '库存明细查询',
        key: 'inventory/detail',
      },
      {
        name: '库存消耗日志',
        key: 'inventory/consumption',
      },
      {
        name: '库存去化率表',
        key: 'inventory/turnoverRate',
      },
      {
        name: '库存划分工具',
        key: 'inventory/Allocation',
      },
    ],
  },
  {
    name: '物流尾程管理',
    key: 'logistics',
    meta: {
      icon: 'icon-a-zu155',
    },
    children: [
      {
        name: 'LTL物流管理',
        key: 'logistics/lastLeg',
      },
      {
        name: '地区信息管理',
        key: 'logistics/area',
      },
    ],
  },
  {
    name: '产品管理',
    key: 'product',
    meta: {
      icon: 'icon-chanpinguanli',
    },
    children: [
      {
        name: '分类管理',
        key: 'product/sortManagement',
      },
      {
        name: '平台商品抓取',
        key: 'product/capture',
      },
      {
        name: '品牌管理',
        key: 'product/brand',
      },
      {
        name: '图片管理',
        key: 'product/picture',
      },
      {
        name: '辅料管理',
        key: 'product/accessories',
      },
      {
        name: '产品管理',
        key: 'product/manage',
      },
    ],
  },
  {
    name: '系统管理',
    key: 'system',
    meta: {
      icon: 'icon-xitongguanli',
    },
    children: [
      {
        name: '用户管理',
        key: 'system/user',
      },
      {
        name: '角色管理',
        key: 'system/role',
      },
      {
        name: '菜单管理',
        key: 'system/menu',
      },
      {
        name: '部门管理',
        key: 'system/dept',
      },
      {
        name: '岗位管理',
        key: 'system/post',
      },
    ],
  },
];

export const getName = (path: string, routes) => {
  return routes.find((item) => {
    const itemPath = `/${item.key}`;
    if (path === itemPath) {
      return item.name;
    } else if (item.children) {
      return getName(path, item.children);
    }
  });
};

export const generatePermission = (role: string) => {
  const actions = role === 'admin' ? ['*'] : ['read'];
  const result = {};
  routes.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        result[child.name] = actions;
      });
    }
  });
  return result;
};

const useRoute = (userPermission): [IRoute[], string] => {
  const filterRoute = (routes: IRoute[], arr = []): IRoute[] => {
    if (!routes.length) {
      return [];
    }
    for (const route of routes) {
      const { requiredPermissions, oneOfPerm } = route;
      let visible = true;
      if (requiredPermissions) {
        visible = auth({ requiredPermissions, oneOfPerm }, userPermission);
      }

      if (!visible) {
        continue;
      }
      if (route.children && route.children.length) {
        const newRoute = { ...route, children: [] };
        filterRoute(route.children, newRoute.children);
        if (newRoute.children.length) {
          arr.push(newRoute);
        }
      } else {
        arr.push({ ...route });
      }
    }

    return arr;
  };

  const [permissionRoute, setPermissionRoute] = useState(routes);

  useEffect(() => {
    const newRoutes = filterRoute(routes);
    setPermissionRoute(newRoutes);
  }, [JSON.stringify(userPermission)]);

  const defaultRoute = useMemo(() => {
    const first = permissionRoute[0];
    if (first) {
      return first?.children?.[0]?.key || first.key;
    }
    return '';
  }, [permissionRoute]);
  return [permissionRoute, defaultRoute];
};

export default useRoute;
