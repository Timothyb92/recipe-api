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
exports.mongoConnect = exports.mongoDisconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = 'mongodb+srv://nasa-api:L5BstBzHyM02q2xc@nasacluster.d8uyum0.mongodb.net/nasa?retryWrites=true&w=majority';
mongoose_1.default.connection.once('open', () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log('MongoDB connection ready!');
}));
mongoose_1.default.connection.on('error', (err) => {
    console.error(err);
});
function mongoDisconnect() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.disconnect();
    });
}
exports.mongoDisconnect = mongoDisconnect;
const mongoConnect = async => {
    console.log('mongoConnect running');
    mongoose_1.default.connect(MONGO_URL);
};
exports.mongoConnect = mongoConnect;
