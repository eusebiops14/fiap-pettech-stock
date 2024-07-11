import { Injectable } from '@nestjs/common';

@Injectable() //serve para o container do nest de injecao de dependencias
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
