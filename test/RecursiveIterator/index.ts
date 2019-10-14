import * as mocha from "mocha";
import * as assert from 'assert';
import RecursiveIterator from '../../src/RecursiveIterator'

mocha.describe("RecursiveIterator", () => {
  mocha.describe("number", () => {
    mocha.describe("number", function () {
      const target = [0, 1, 2, 3, 4, 5];
      const numberIterator = new RecursiveIterator(0).push(1).push(2).push(3).push(4).push(5);
      mocha.it("Compare Value With Iterator", () => {
        const iterator = numberIterator[Symbol.iterator]();
        let itr = iterator.next();
        let cnt = 0;
        while (!itr.done) {
          assert.equal(itr.value, target[cnt++], "Error itr.value: " + itr.value + " target[" + (cnt - 1) + "]: " + target[cnt - 1])
          itr = iterator.next();
        }
      })
      mocha.it("Compare Value With Spread And JSON.stringify", () => {
        assert.equal(JSON.stringify([...numberIterator]), JSON.stringify(target), "Error " + JSON.stringify([...numberIterator]) + " is not equal " + JSON.stringify(target))
      })
    });
  });
});