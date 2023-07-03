import Writer from '../Writer';
import Submitter from './Submitter';

export default class Creator<T> implements Submitter<T> {
  constructor(private writer: Writer<T>) {}

  async submit(content: T, e: any, onSubmit: () => void): Promise<void> {
    e.preventDefault();

    await this.writer.write(content);

    onSubmit();
  }
}
