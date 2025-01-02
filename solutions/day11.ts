const existingExcuses = {
    karaoke: ['Kendrick Lamar, Opeth'],
    margarita: 'Peppermint-Jalapeño Mojito',
  }

type ExtractExcuse<T> = T extends { [K in keyof T]: infer V } ? `${string & keyof T}: ${string & V}` : never;

type Excuse<T> = new (options: T & typeof existingExcuses) => ExtractExcuse<T>;
