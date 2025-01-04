declare function DynamicParamsCurrying<T extends (...args: any[]) => any>(fn: T): Curry<T>;

type Drop<T extends any[], N extends number, Acc extends '+'[] = []> = Acc['length'] extends N
  ? T
  : T extends [infer _, ...infer Rest]
    ? Drop<Rest, N, [...Acc, '+']>
    : T;

type Curry<T extends (...args: any[]) => any> = <P extends any[]>(
  ...args: P
) => P extends Partial<Parameters<T>>
  ? P['length'] extends Parameters<T>['length']
    ? ReturnType<T>
    : Curry<(...args: Drop<Parameters<T>, P['length']>) => ReturnType<T>>
  : T;