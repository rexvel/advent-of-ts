type SpaceSymbols = " " | "\t" | "\n" | "\r";

type VariableModifiers = "let" | "const" | "var";

type TrimStart<T> = T extends `${SpaceSymbols}${infer Rest}` 
  ? TrimStart<Rest> 
  : T;

type TrimEnd<T> = T extends `${infer Rest}${SpaceSymbols}` 
  ? TrimEnd<Rest> 
  : T;

type Trim<T> = TrimEnd<TrimStart<T>>;

type Nothing = { readonly __brand: unique symbol };


// use the first type otherwise pick the second one
type Try<T, U> = T extends Nothing ? U : T;

type ParseVariable<T> = T extends `${VariableModifiers} ${infer Id} = ${string}`
	? {
			id: Id;
			type: "VariableDeclaration";
		}
	: Nothing;

type ParseCall<T> = T extends `${string}(${infer Argument})`
	? {
			argument: Argument;
			type: "CallExpression";
		}
	: Nothing;


type ParseLine<T> = Try<ParseVariable<T>, ParseCall<T>>;

type Parse<T> = T extends `${infer L};${infer Rest}` ? [ParseLine<Trim<L>>, ...Parse<Rest>] : [];





