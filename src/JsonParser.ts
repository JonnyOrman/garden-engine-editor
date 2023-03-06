import Parser from "./Parser";

export default class JsonParser implements Parser {
    parse<T>(data: string): T {
        return JSON.parse(data);
    }
}