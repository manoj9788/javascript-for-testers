# Objects & Properties

In the previous chapter(chap 3) we've learned different ways of creating an Object. In this chapter we'll focus on some of Data Descriptors and flags.

Let's look at how these can be helpul, imagine we have a record of the following pattern,

```js
const record = Record({
    a: 1,
    b: 2,
    c: 3
})();
```
If we want to pull out one of the properties off this record and organize the `anotherProp` as part of separate object, the simple way to do would be, `const { a, ...anotherProp } = record;`
It may look simple, but the `anotherProp` would be always `undefined`. The reason is that while Immutable records allow for dot accessing and destructuring, none of the properties on a record are enumerable. There are other object descriptors along with enumerable which will enhance your way of defining objects and using is swiftly.

### Property Data Descriptors

A property data descriptor is an object assigned to an object’s property (one descriptor per property) that dictates how the JavaScript engine will behave regarding that property. 

The four keys a data descriptor can have are:
* `value`: the actual value we want the property to be (defaults undefined)

* `enumerable`: whether the property should show up in operations that enumerate over an object’s keys, such as for...in loops or Object.keys() (defaults false)
* `configurable`: indicates if we can later change the descriptor settings or be able to delete the property off the object (defaults false)
* `writable`: tells if the value of the property can be changed (defaults false)

### Property Accessor Descriptors

Descriptors for accessor properties are different from those for data properties.

For accessor properties, there is no value or writable, but instead there are `get` and `set` functions.

An accessor descriptor may have:
* `get`: a function without arguments, that works when a property is read

* `set`: a functionw with one argument, that is called when property is set
* `enumerable` - same as data properties
* `configurable` - same as for data properties