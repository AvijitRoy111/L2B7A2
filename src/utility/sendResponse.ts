 import type { Response } from "express";

 interface TResponse<T> {
   statusCode: number;
   success: boolean;
   message: string;
   data?: T;
   errors?: unknown;
 }

 const sendResponse = <T>(
   res: Response,
//   payload: TResponse<T>,
// ): Response => {
//   return res.status(payload.statusCode).json({
//     success: payload.success,
//     message: payload.message,
//     data: payload.data,
//     errors: payload.errors,
//   });
// };

// export default sendResponse;