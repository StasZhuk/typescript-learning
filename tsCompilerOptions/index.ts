let myName: string = "Stas";
let myAge: number = 23;
let anything;

anything = 'anything';

function maybeReturnNumberMaybeNothing(isTrue: boolean, notUsedParam: boolean) {
    let result: number;

    if (isTrue) result = 10;

    return result;
}