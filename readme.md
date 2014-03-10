## express-nudist
[Express](http://expressjs.com/) middleware to create a "naked" (www-less) domain.



### install
`$ npm install express-nudist`



### usage
`require` the module at/near the top of your `.use` stack.

```javascript
...

  .use(express.logger('dev'))
  .use(require('express-nudist')('example.com'))

...
```



### history
##### march 10th, 2014 / 0.0.2
* removed `req.secure` test in favor of `req.protocol`


##### march 9th, 2014 / 0.0.1
* initial commit



### license
Copyright (c) 2014, Emilio Testa

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
