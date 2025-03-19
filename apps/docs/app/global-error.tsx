'use client';

import type NextError from 'next/error';
import { useEffect } from 'react';
import { fonts } from './lib/fonts';

type GlobalErrorProperties = {
  readonly error: NextError & { digest?: string };
  readonly reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProperties) => {

  return (
    <html lang="en" className={fonts}>
      <body>
        <h1>Oops, something went wrong</h1>
        {/* <Button onClick={() => reset()}>Try again</Button> */}
      </body>
    </html>
  );
};

export default GlobalError;
