export const handleNavigate = (navigate: any, route: string) => () =>
  navigate(route as never);
