import Serialiser from './Serialiser';

export default class JsonSerialiser implements Serialiser {
  serialise<T>(obj: T): string {
    return JSON.stringify(obj);
  }
}
