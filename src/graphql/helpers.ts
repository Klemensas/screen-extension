import { DataProxy } from 'apollo-cache';

import { updateStorage } from '../browserService';
import { UserDataQuery, SettingsDocument } from '.';

export const updateUserSettings = (cache: DataProxy, user: NonNullable<UserDataQuery['userData']>) => {
  updateStorage({ user });

  return cache.writeQuery({
    query: SettingsDocument,
    data: {
      settings: user.settings,
    },
  });
};