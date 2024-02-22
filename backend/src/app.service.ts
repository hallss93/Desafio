import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n/dist/services/i18n.service';

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}

  getRouter = ({
    lang,
    name,
  }: {
    lang: string;
    name: string;
  }): Promise<string> => {
    return this.i18n.translate('auth.HELLO_MESSAGE', {
      lang,
      args: { username: name },
    });
  };
}
