import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { Stack, Link } from 'expo-router';
import { Pressable, Text } from 'react-native';

import { Container } from '~/components/Container';
import { db } from '~/db';
import { users } from '~/db/schema';

export default function Home() {
  const { data } = useLiveQuery(db.select({ name: users.name }).from(users));

  const inserData = async () => {
    await db.insert(users).values({
      name: 'aman',
      email: 'aman@yo.com',
    });
  };

  inserData();

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Text className="text-black dark:text-white">{JSON.stringify(data)}</Text>
        <Link href={{ pathname: '/details', params: { name: 'Aman' } }} asChild>
          <Pressable className="flex w-full items-center justify-center rounded-lg border border-pink-600 bg-black p-2 dark:bg-white">
            <Text className="text-white dark:text-black">Go to details</Text>
          </Pressable>
        </Link>
      </Container>
    </>
  );
}
