import { TokenTypes } from "../../../../../constants/acchiniLangSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import AcchiniLangModule from "../../../../../module/acchiniLangModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return AcchiniLangModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return AcchiniLangModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return AcchiniLangModule.getStringLiteral();

      case TokenTypes.NALLA_TYPE:
        return AcchiniLangModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
