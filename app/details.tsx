import { Stack, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

import { Container } from '~/components/Container';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <Text>{name}</Text>
      </Container>
    </>
  );
}
