import { BaseMiddleware, Middleware, MiddlewareFunctionParams } from "protontype";
import compression from 'compression';

export class CompressionMiddleware extends BaseMiddleware {
    @Middleware()
    compress(params: MiddlewareFunctionParams) {
        compression()(params.req, params.res, params.next);
    }
}