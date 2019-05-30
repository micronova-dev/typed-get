type Q<T, U = NonNullable<T>> = T extends NonNullable<T>
  ? U
  : (NonNullable<U> | undefined);

type R<T, K extends keyof NonNullable<T>> = K extends number
  ? NonNullable<T>[K] | undefined
  : NonNullable<T>[K];

const isNone = (x: unknown) => (x === null || x === undefined);

function get<T, K1 extends keyof NonNullable<T>>(
  x: T,
  k1: K1
): Q<
  T, Q<
  R<T, K1>
>>;

function get<
  T,
  K1 extends keyof NonNullable<T>,
  K2 extends keyof NonNullable<R<T, K1>>
>(
  x: T,
  k1: K1,
  k2: K2
): Q<
  T, Q<
  R<T, K1>, Q<
  R<R<T, K1>, K2>
>>>;

function get<
  T,
  K1 extends keyof NonNullable<T>,
  K2 extends keyof NonNullable<R<T, K1>>,
  K3 extends keyof NonNullable<R<R<T, K1>, K2>>
>(
  x: T,
  k1: K1,
  k2: K2,
  k3: K3
): Q<
  T, Q<
  R<T, K1>, Q<
  R<R<T, K1>, K2>, Q<
  R<R<R<T, K1>, K2>, K3>
>>>>;

function get<
  T,
  K1 extends keyof NonNullable<T>,
  K2 extends keyof NonNullable<R<T, K1>>,
  K3 extends keyof NonNullable<R<R<T, K1>, K2>>,
  K4 extends keyof NonNullable<R<R<R<T, K1>, K2>, K3>>
>(
  x: T,
  k1: K1,
  k2: K2,
  k3: K3,
  k4: K4
): Q<
  T, Q<
  R<T, K1>, Q<
  R<R<T, K1>, K2>, Q<
  R<R<R<T, K1>, K2>, K3>, Q<
  R<R<R<R<T, K1>, K2>, K3>, K4>
>>>>>;

function get<
  T,
  K1 extends keyof NonNullable<T>,
  K2 extends keyof NonNullable<R<T, K1>>,
  K3 extends keyof NonNullable<R<R<T, K1>, K2>>,
  K4 extends keyof NonNullable<R<R<R<T, K1>, K2>, K3>>,
  K5 extends keyof NonNullable<R<R<R<R<T, K1>, K2>, K3>, K4>>
>(
  x: T,
  k1: K1,
  k2: K2,
  k3: K3,
  k4: K4,
  k5: K5
): Q<
  T, Q<
  R<T, K1>, Q<
  R<R<T, K1>, K2>, Q<
  R<R<R<T, K1>, K2>, K3>, Q<
  R<R<R<R<T, K1>, K2>, K3>, K4>, Q<
  R<R<R<R<R<T, K1>, K2>, K3>, K4>, K5>
>>>>>>;

function get(x: any, ...args: any[]) {
  const r = args.reduce(
    (a, k) => (a !== null && a !== undefined) ? a[k] : undefined,
    x
  );
  return (r === null) ? undefined : r;
}

export default get;
