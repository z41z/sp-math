# sp-math

Common Math Functions

## Install

``` node
  npm i sp-math //or yarn add sp-math
```

## CDN

``` js
  <script src="https://unpkg.com/sp-math/dist/index.min.js"></script>
  <script>

  </script>
```

### Usage

``` js
  const {
    abs,
    acos,
    asin,
    atan,
    ceil,
    degreeToRotate,
    devideFloat,
    isFloat,
    rotateToDegree,
    cos,
    distance,
    floor,
    money,
    rotateByDegree,
    pow,
    round,
    sin,
    sqrt,
    tan
  } = require("sp-math")
```

* abs(val)
  * {Number} val

  ``` js
    abs(-10);
    // return 10
  ```

* ceil(val)
  * {Number} val

  ``` js
    ceil(1.25);
    // return 2
  ```

* cos(val)
  * {Number} val

  ``` js
    cos(60);
    // return 0.5000000000000001
  ```

* sin(val)
  * {Number} val

  ``` js
    sin(30);
    // return 0.49999999999999994
  ```

* tan(val)
  * {Number} val

  ``` js
    sin(45);
    // return 0.9999999999999999
  ```

* acos(val)
  * {Number} val

  ``` js
    acos(0.5);
    // return 60.00000000000001
  ```

* asin(val)
  * {Number} val

  ``` js
    asin(0.5);
    // return 30.000000000000004
  ```

* atan(val)
  * {Number} val

  ``` js
    atan(1);
    // return 45
  ```

* degreeToRotate(val)
  * {Number} val

  ``` js
    degreeToRotate(180);
    // return 3.141592653589793 Math.PI
  ```

* rotateToDegree(val)
  * {Number} val

  ``` js
    rotateToDegree(Math.PI);
    // return 180
  ```

* distance(p1, p2)
  * {Array} p1 = [0, 0]
  * {Array} p2 = [0, 0]

  ``` js
    distance([1, 1], [2, 2]);
    // return 1.41
  ```

* floor(val)
  * {Number} val

  ``` js
    floor(1.25);
    // return 1
  ```

* pow(x, y, isDeep = false)
  * {Number} x
  * {Number} y
  * {Boolean} isDeep

  ``` js
    pow(2, 5);
    // return 32
    pow(-2, 5);
    // return -32
    pow(4, 0.5, true);
    // return [2, -2]
  ```

* round(val)
  * {Number} val

  ``` js
    round(2.53)
    // return 3
    round(2.15);
    // return 2
  ```

* sqrt(val)
  * {Number} val
  * {Boolean} isDeep

  ``` js
    sqrt(4)
    // return 2
    sqrt(4, true);
    // return [2, -2]
  ```

* devideFloat(val)
  * {Number} val

  ``` js
    devideFloat(4)
    // return [ 4, 1 ] 4/1 = 4
    devideFloat(1.8);
    // return [ 9, 5 ] 9/5 = 1.8
  ```

* money(val, obj = {fixedLen:2, hasComma = false})
  * {Number} val
  * {Object} obj
  * {Number} obj.fixedLen
  * {Boolean} obj.hasComma

  ``` js
    money('12345.33',{
      fixedLen: 3
    });
    // return '12345.330'
    money('12345.33',{
      fixedLen: 3,
      hasComma: true
    });
    // return '12,345.330'
    money('12,345.330',{
      fixedLen: 4,
      hasComma: false
    });
    // return '12345.3300'
  ```