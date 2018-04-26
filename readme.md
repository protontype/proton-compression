[![npm version](https://badge.fury.io/js/proton-compression.svg)](https://badge.fury.io/js/proton-compression)

# A compression middleware for Protontype

This module wrap [Compression](https://github.com/expressjs/compression) Nodejs module for use into a [Protontype](https://protontype.github.io/) project

# How to Use

## As Global Middleware

```typescript
let app = new ProtonApplication()
    .addMiddlewareAs(CompressionMiddleware)
app.start();
```

## As Router Middleware

```typescript
@RouterClass({
    baseUrl: "/tasks",
    middlewares: [
        new CompressionMiddleware()
    ]
})
export class TaskRouter extends ExpressRouter {
 ...
}

```
## As Route Middleware

```typescript
@RouterClass({baseUrl: "/tasks"})
export class TaskRouter extends ExpressRouter {
    @Route({
        endpoint: '/',
        method: Method.POST,
        middlewares: [new CompressionMiddleware()]
    })
    addTask(params: RouterFunctionParams) {
        ...
    }
}
```