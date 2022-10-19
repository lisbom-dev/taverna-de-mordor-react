type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;
export type SnakeCase<T> = T extends object
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: T[K];
    }
  : T;
