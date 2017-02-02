import { assert }          from 'chai';

import { onHandleVirtual } from '../../src/index.js';

const event = { data: { code: [] } };

suite('Plugin:', () =>
{
   test('onHandleVirtual is function', () =>
   {
      assert.isFunction(onHandleVirtual);
   });

   test('onHandleVirtual returns code', () =>
   {
      onHandleVirtual(event);

      assert.isArray(event.data.code);
      assert.isString(event.data.code[0].code);
      assert.isString(event.data.code[0].filePath);
   });
});
