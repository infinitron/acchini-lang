import Visitor from ".";
import { ASTNode } from "acchini-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
