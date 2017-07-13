import { assert }                from 'chai';

import { onHandleVirtualAsync }  from '../../src/index.js';

const event = { data: { code: [] } };

suite('Plugin:', () =>
{
   test('onHandleVirtualAsync is function', () =>
   {
      assert.isFunction(onHandleVirtualAsync);
   });

   test('onHandleVirtualAsync returns code', () =>
   {
      onHandleVirtualAsync(event);

      assert.isArray(event.data.code);
      assert.isString(event.data.code[0].code);
      assert.isString(event.data.code[0].filePath);
   });
});
