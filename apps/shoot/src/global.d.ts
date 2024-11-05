import React from 'react';
import Web3 from 'web3';

import { Colors } from './theme';
import { AppDispatch as Dispatch, RootState as State } from './store';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum: any;
    web3: Web3;
    okexchain: unknown;
    coin98: unknown;
    trustwallet: unknown;
    gtag: (...args: any[]) => void;
  }

  type RootState = State;
  type AppDispatch = Dispatch;
}

declare module 'react' {
  function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
