import { NodeType } from "../../../../constants/constants";
import AcchiniLangModule from "../../../../module/acchiniLangModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return AcchiniLangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return AcchiniLangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return AcchiniLangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return AcchiniLangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return AcchiniLangModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return AcchiniLangModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return AcchiniLangModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return AcchiniLangModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return AcchiniLangModule.getRelationalExpression();

      default:
        return AcchiniLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
    ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
    ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
