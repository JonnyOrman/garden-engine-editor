import { createContext, useState } from 'react';
import TabProps from './TabProps';

export const TabsContext = createContext(useState<TabProps[]>([]));
