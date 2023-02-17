type Awaited<T> = T extends null | undefined
  ? T
  : T extends object & {
      then(onfulfilled: infer F, ...args: infer _): any;
    }
  ? F extends (value: infer V, ...args: infer _) => any
    ? Awaited<V>
    : never
  : T;

export declare function wrapCall<T, A extends readonly unknown[]>(
  name: string,
  fn: (...parameters: A) => T
): {
  sync: (...parameters: A) => T;
  async: (...parameters: A) => Promise<Awaited<T>>;
};
