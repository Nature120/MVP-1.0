import { Route, useRoute } from '@react-navigation/native';

export const useParam = <T extends object | undefined = object | undefined>() => {
  const { name } = useRoute();
  return useRoute<Route<typeof name, T>>();
};
