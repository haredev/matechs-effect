import { Domain } from "./domain";
import { ProgramURI } from "morphic-ts/lib/usage/ProgramType";
import { InterpreterURI } from "morphic-ts/lib/usage/InterpreterResult";
import { MorphADT } from "morphic-ts/lib/usage/tagged-union";

// experimental alpha
/* istanbul ignore file */

export function cqrs<
  Types extends {
    [k in keyof Types]: [any, any];
  },
  Tag extends string,
  ProgURI extends ProgramURI,
  InterpURI extends InterpreterURI,
  Db extends symbol
>(S: MorphADT<Types, Tag, ProgURI, InterpURI>, dbURI: Db) {
  return new Domain(S, dbURI);
}

export { EventLog } from "./eventLog";
export { ReadSideConfig } from "./config";
export { EventMetaHidden, metaURI } from "./read";
export { Aggregate } from "./aggregate";
export { matcher } from "./matcher";
