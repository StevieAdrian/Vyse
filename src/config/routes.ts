import type { PRIVILEGE_KEYS } from "../constants/privilege";
import { Login } from "../pages/login";
import type { Route } from "../types/route";


const setRoute = (component: () => React.ReactNode, path: string, access: PRIVILEGE_KEYS[] | null = [], title: string = ""): Route => {
  let componentName: string;
  try {
    componentName = component.name;
  } catch {
    componentName = `default_${Date.now()}`;
  }

  return {
    key: `router-${componentName}`,
    title: title === "" ? componentName.charAt(0).toUpperCase() + componentName.slice(1) : title,
    description: componentName.charAt(0).toUpperCase() + componentName.slice(1),
    component: component,
    privilege: access,
    path: path === "" ? `/${componentName}` : path,
  };
};

export const publicRoutes: Route[] = [
  {
    ...setRoute(Login, '/login'),
    noLayout: true,
  },
];