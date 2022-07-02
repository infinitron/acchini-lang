import Visitor from ".";
import { ASTNode } from "acchini-lang-parser";

export default class BooleanLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
