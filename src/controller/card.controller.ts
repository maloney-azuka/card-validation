import { Request, Response } from "express";
import { validateCardNumber } from "../service/card.service";
import { ValidateCardRequest, ValidateCardResponse } from "../types/card.types";

export function validateCard(req: Request, res: Response): void {
  const { cardNumber } = req.body as ValidateCardRequest;

  if (!cardNumber || typeof cardNumber !== "string") {
    res.status(400).json({
      valid: false,
      message: "cardNumber is required and must be a string",
    });
    return;
  }

  const isValid = validateCardNumber(cardNumber);

  const response: ValidateCardResponse = {
    valid: isValid,
    message: isValid ? "Card number is valid" : "Card number is invalid",
  };

  res.status(200).json(response);
}