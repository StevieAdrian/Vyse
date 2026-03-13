import type { PRIVILEGE_KEYS } from '../constants/privilege';

/**
 * Represents the route of a page.
 */
export type Route = {
  /**
   * The key of the route for React key="" props (<Route key="<this>"/>)
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "homepage"
   */
  key: string;

  /**
   * The title of the route
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "My Profile"
   */
  title: string;

  /**
   * The description of the route. Should be used for describing what
   * does this page do?
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "Go to My Profile Page"
   */
  description?: string;

  /**
   * The path of the route. Please add a '/' prefix.
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "/profile"
   */
  path?: string;

  component: () => React.ReactNode;

  /**
   * Array of privileges that can access this page
   * Optional. If it is null (for NotFound page for example), then everyone can access
   */
  privilege: PRIVILEGE_KEYS[] | null

  /**
   * The array of sub routes
   * @type {Route[]}
   * @memberof Route
   * @optional
   * @example
   * "[{} as Route, ...]"
   */
  subRoutes?: Route[];
  noLayout?: boolean;
};
