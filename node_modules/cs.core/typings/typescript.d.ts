import {SpecificShallowEqualType} from "../src/createSpecificShallowEqual";
import {FSA as InternalFSA, BaseReactProps as InternalBaseReactProps} from "../src/types"


declare module "cs.core"{
    export type FSA<TPayload, TProps> = InternalFSA<TPayload, TProps>;
    export type BaseReactProps = InternalBaseReactProps;
    export function createSpecificShallowEqual<TProps> (...keysToTest: (keyof TProps)[]) : (currentProps: SpecificShallowEqualType<TProps>, nextProps: SpecificShallowEqualType<TProps>) => boolean
}