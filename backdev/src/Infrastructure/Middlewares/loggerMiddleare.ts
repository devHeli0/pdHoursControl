import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: FastifyRequest['raw'], res: FastifyReply['raw'], next: () => void) {
    const start = Date.now();
    const { method, url } = req;
    const userAgent = req.headers['user-agent'];

    res.on('finish', () => {
      const statusCode = res.statusCode;
      const contentLength = res.getHeader('content-length');

      this.logger.log(
        `${method} ${url} ${statusCode} ${contentLength} - ${Date.now() - start}ms`,
      );
    });

    res.on('error', (err) => {
      this.logger.error(
        `Error processing request ${method} ${url}: ${err.message}`,
      );
    });

    this.logger.log(
      `Incoming request: ${method} ${url} - User-Agent: ${userAgent}`,
    );

    next();
  }
}
