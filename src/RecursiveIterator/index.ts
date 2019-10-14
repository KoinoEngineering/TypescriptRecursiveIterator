type RecursiveIteratorTail<T> = RecursiveIterator<T> | undefined;
export default class RecursiveIterator<T> implements Iterable<T>{
  private tail: RecursiveIteratorTail<T>;
  constructor(public value: T) {
    this.tail = undefined;
  }

  [Symbol.iterator]() {
    return (function* (_this: RecursiveIteratorTail<T>) {
      while (_this) {
        yield _this.value;
        _this = _this.tail
      }
    })(this);
  }

  public push(value: T): RecursiveIterator<T> {
    // tailをチェック
    if (this.tail) {
      // 存在する場合にはtailに再帰push
      this.tail.push(value);
    } else {
      // 存在しない場合にはtailにnewしてセット
      this.tail = new RecursiveIterator(value);
    }
    // 自分を返す
    return this;
  }
}


