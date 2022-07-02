import InvalidStateException from "../exceptions/invalidStateException";
import RuntimeException from "../exceptions/runtimeException";


export function checkNumberOperands(operands: {
  left: unknown;
  right: unknown;
}): operands is { left: number; right: number } {
  return (
    typeof operands.left === "number" && typeof operands.right === "number"
  );
}

export function checkStringOperands(operands: {
  left: unknown;
  right: unknown;
}): operands is { left: string; right: string } {
  return (
    typeof operands.left === "string" && typeof operands.right === "string"
  );
}

export function checkNumberAndStringOperands(operands: {
  left: unknown;
  right: unknown;
}): operands is { left: string; right: string } {
  return (
    (typeof operands.left === "string" && typeof operands.right === "number") || (typeof operands.right === "string" && typeof operands.left === "number")
  );
} 

export function getOperationValue(
  operands: { left: unknown; right: unknown },
  operator: string
) {
  const exception = new RuntimeException(
    `Orey babji..em chestunnav nuuvu?: "${operator}" tho "${typeof operands.left}" inka "${typeof operands.right}" okarante okarki padavu.`
  );

  switch (operator) {
    case "=":
      return operands.right;

    case "+=":
    case "+":
      if (checkNumberOperands(operands)) {
        return operands.left + operands.right;
      }

      if (checkStringOperands(operands)) {
        return operands.left + operands.right;
      }

      if (checkNumberAndStringOperands(operands)) {
        return operands.left.toString() + operands.right.toString();
      }

      throw exception;

    case "-=":
    case "-":
      if (checkNumberOperands(operands)) {
        return operands.left - operands.right;
      }

      throw exception;

    case "*=":
    case "*":
      if (checkNumberOperands(operands)) {
        return operands.left * operands.right;
      }

      throw exception;

    case "/=":
    case "/":
      if (operands.right === 0) {
        throw new RuntimeException(`Em chestunnavo ardhamautunda??...zero tho divide cheyaru`);
      }
      
      if (checkNumberOperands(operands)) {
        return operands.left / operands.right;
      }

      throw exception;
    
    case "%=":
    case "%":
      if (checkNumberOperands(operands)) {
        return operands.left % operands.right;
      }

      throw exception;

    case "==":
      
      return operands.left === operands.right;
    
    case "!=":

      return operands.left !== operands.right;
    
    case ">":
      if (checkNumberOperands(operands)) {
        return operands.left > operands.right;
      }

      throw exception;
    
    case "<":
      if (checkNumberOperands(operands)) {
        return operands.left < operands.right;
      }

      throw exception;
    
    case ">=":
      if (checkNumberOperands(operands)) {
        return operands.left >= operands.right;
      }

      throw exception;

    case "<=":
      if (checkNumberOperands(operands)) {
        return operands.left <= operands.right;
      }

      throw exception;

    case "&&":
      return operands.left && operands.right;

    case "||":
      return operands.left || operands.right;

    default:
      throw new InvalidStateException(`Unsupported operator: ${operator}`);
  }
}
