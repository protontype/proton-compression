import { ProtonMiddleware, Middleware, MiddlewareFunctionParams } from "protontype";
import compression from 'compression';

export class CompressionMiddleware extends ProtonMiddleware {
    @Middleware()
    compress(params: MiddlewareFunctionParams) {
        compression()(params.req, params.res, params.next);
    }
}