import { ProtonMiddleware, MiddlewareFunctionParams } from "protontype";
export declare class CompressionMiddleware extends ProtonMiddleware {
    compress(params: MiddlewareFunctionParams): void;
}
