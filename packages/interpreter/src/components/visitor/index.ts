import { ASTNode } from "acchini-lang-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
