import AcchiniLangModule from "./module/acchiniLangModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default AcchiniLangModule.getParser();
