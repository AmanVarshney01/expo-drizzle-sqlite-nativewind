import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className="flex flex-1 bg-white p-4 dark:bg-black">{children}</SafeAreaView>;
};
