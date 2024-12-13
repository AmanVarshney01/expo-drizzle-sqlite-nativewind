import '../global.css';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import { Stack } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { View, Text } from 'react-native';

import { db } from '~/db';
import migrations from '~/drizzle/migrations';
const localDb = SQLite.openDatabaseSync('../db.db');
export default function Layout() {
  useDrizzleStudio(localDb);

  const { success, error } = useMigrations(db, migrations);
  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }
  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }
  return <Stack />;
}
