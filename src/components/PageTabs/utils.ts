import _find from 'lodash/find';
import _findIndex from 'lodash/findIndex';
import _isEqual from 'lodash/isEqual';
import _isArray from 'lodash/isArray';
import router from 'umi/router';
import memoizeOne from 'memoize-one';
import hash from 'hash-string';
import { MenuDataItem } from '@ant-design/pro-layout';

import { PageTab, PageTabsProps, BeautifulLocation } from './data';
import { pathToRegexp, match as pathToRegexpMatch } from './dependencies/path-to-regexp-v6';

/**
 * 解析当前 `pathname` 的 `pathID` 和 `title`
 *
 * @param pathname 必须是 `withRouter` 注入的 `location` 的 `pathname`
 * @param originalMenuData 原始菜单数据，未经过滤处理
 */
export function getPathnameMetadata(
  pathname: string,
  originalMenuData: MenuDataItem[]
): [string, string] {
  function getMetadata(
    _pathname: string,
    menuData: MenuDataItem[],
    parent: MenuDataItem | null
  ): [string, string] | null {
    let result: [string, string] | null = null;

    /** 根据前缀匹配菜单项，因此，`BasicLayout` 下的 **一级路由** 只要配置了 `name` 属性，总能找到一个 `pathID` 和 `title` 的组合 */
    const targetMenuItem = _find(menuData, item => {
      return pathToRegexp(`${item.path}(.*)`).test(_pathname) && !!item.name;
    });

    /** 如果为 **一级路由** 直接写入 `result` ，否则父级没有 `component` 时才能写入 `result` */
    if ((!parent && targetMenuItem) || (parent && !parent.component && targetMenuItem)) {
      result = [targetMenuItem.path!, targetMenuItem.name!];
    }
    /** 如果父级配置了 `hideChildrenInMenu` ，子级配置了 `name` 则重写 `result` */
    if (parent?.hideChildrenInMenu && targetMenuItem) {
      result = [parent.path!, targetMenuItem.name!];
    }

    /** 递归设置 `pathID` 和 `title` */
    if (_isArray(targetMenuItem?.children) && targetMenuItem?.children.length) {
      result = getMetadata(_pathname, targetMenuItem!.children!, targetMenuItem!) || result;
    }

    return result;
  }
  return getMetadata(pathname, originalMenuData, null) || ['404', 'Error'];
}

const memoizeOneGetPathnameMetadata = memoizeOne(getPathnameMetadata, _isEqual);

/**
 * 解析路由定义中参数
 *
 * 如： `path = /user/:id` ，`pathname = /user/48` ，可解析得到 `{ id: "48" }`
 *
 * @param path 路由定义
 * @param pathname 当前的页面路由
 */
export function getParams(path: string, pathname: string): { [key: string]: string } {
  const match = pathToRegexpMatch(path);
  const result = match(pathname) as {
    index: number;
    params: { [k: string]: string };
    path: string;
  };
  return result.params;
}

/**
 * 获取要激活的标签页信息
 *
 * @param location 必须是 `withRouter` 注入的 `location`
 */
export function getActiveTabInfo(location: BeautifulLocation) {
  /**
   * 获取标签页的 id 和标题
   *
   * @param pageTabs
   * @param originalMenuData
   * @param setTabTitle
   */
  function getInfo(
    pageTabs: 'route' | 'path',
    originalMenuData: MenuDataItem[],
    setTabTitle: PageTabsProps['setTabTitle']
  ): [string, React.ReactNode] {
    const [pathID, title] = memoizeOneGetPathnameMetadata(location.pathname!, originalMenuData);

    if (pageTabs === 'route') {
      return [pathID, title];
    }

    // 以下为 **路径** 模式的处理逻辑：
    // 核心是根据路由中所带的参数算出参数的哈希值，并将其与算出的 `pathID` 拼成一个标签页的唯一 id
    // 这样，不同的参数就能得到不同的标签页了

    const params = getParams(pathID, location.pathname!);
    const query = location.query;
    const state = location.state || {};

    const hashPart = hash(
      JSON.stringify({
        ...params,
        ...query,
        ...state,
      })
    );

    return [`${pathID}-${hashPart}`, setTabTitle?.(pathID, title, params, location) || title];
  }
  return getInfo;
}

export function routeTo(targetTab: PageTab<{ location: any }>) {
  router.push(targetTab.extraTabProperties.location);
}
