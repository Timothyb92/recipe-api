"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const mongo_1 = require("./services/mongo");
const recipes_model_1 = require("./models/recipes.model");
const server = http_1.default.createServer(app_1.default);
const PORT = 3000;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, recipes_model_1.loadRecipes)();
        yield (0, mongo_1.mongoConnect)();
        server.listen(PORT, () => {
            console.log(`index.ts listening on port ${PORT}`);
        });
    });
}
startServer();
