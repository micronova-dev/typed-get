# typed-get
Type-safe nested property accessor for Typescript

## Installation

To install:

```
yarn add micronova-dev/typed-get
```

## Usage

In order to use typed-get:

```
import get from "typed-get";
```

Then for an object x, the following expression:

```
get(x, "p", "q")
```

returns the value of x.p.q if "available", otherwise undefined.  Here "available" means that:

- x is not "nullable" (null or undefined);
- "p" is a valid property of x;
- x.p is not "nullable" (null or undefined);
- "q" is a valid property of x.p.
- the value x.p.q is not "nullable" (null or undefined)

The type of the expression above is the type of x.p.q when "available", otherwise undefined or the type of x.p.q when "available" (so get() never returns null).

Array index is also supported, but indexed values are always assumed to be possibly undefined.

Please note that get() supports only up to 5 levels of nested properties (get(x, k1, k2, k3, k4, k5)).

## Examples

Given this:

```
interface U {
  a?: string;
  b: number;
}

interface X {
  p: string;
  u: U | null,
  u0: U,
  uu: U[]
}

const x: X = {
  p: "P",
  u: null,
  u0: {
    b: 6
  },
  uu: [
    {
      b: 3
    },
    {
      a: "A",
      b: 4
    }
  ]
}
```

then:

| expression | type | value |
|------------|------|-------|
| get(x, "p") | string | "P" |
| get(x, "u") | U \| undefined | undefined |
| get(x, "u", "a") | string \| undefined | undefined |
| get(x, "u", "b") | number \| undefined | undefined |
| get(x, "u0", "a") | string \| undefined | undefined |
| get(x, "u0", "b") | number | 6 |
| get(x, "uu", 1, "a") | string \| undefined | "A" |
| get(x, "uu", 1, "b") | number \| undefined | 4 |
