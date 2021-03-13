import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './app/routes';
import middlewares from './app/middlewares';
import './database';

class App {
  constructor() {
    this.server = express();
    this.config();
    this.middlewares();
    this.routers();
  }

  config() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(cors());

    dotenv.config({
      path: './../.env',
    });
  }

  middlewares() {
    this.server.use(middlewares);
  }

  routers() {
    this.server.use(routes);
  }
}

export default new App().server;
