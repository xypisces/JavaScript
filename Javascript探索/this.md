# this

```
    作为对象方法的this
    var o = {prop:37}
    function independent(){
        return this.prop;
    }
    o.f = independent ;
    console.log(o.f());
-------------------------------------------
    对象原型链上的this
    var o = {
        f:function(){
            return this.a + this.b
        }
    }
    var p = Object.create(o);
    p.a = 1;
    p.b = 4;
    console.log(p.f());
--------------------------------------------
    get/set方法
    function modulus(){return Math.sqrt(this.re*this.re+this.im*this.im);}

    var o = {
        re:1,
        im:-1,
        get phase(){return Math.atan2(this.im,this.re);}
    }
    Object.defineProperty(o,'modulus',{
        get:modulus,
        enumerable:true,
        configgurable:true
        });
    console.log(o.phase,o.modulus)
------------------------------------

    构造器的this
    function MyClass(){
        this.a = 37;
    }
    var o = new MyClass();
    console.log(o.a) //37

    function C2(){
        this.a=31;
        return {a:38}
    }
    o = new C2();
    console.log(o.a)//38
当函数返回值是一个对象的时候,创建的对象就会指向这个对象,如果不是,则指向this

--------------------------------
 call/apply
    用于那些无法直接调用的方法
    function add(c,d){
        return this.a+this.b+c+d;
    }
    var o ={a:1,b:3};
    add.call(o,5,7);
    dad.apply(o,[10,20]);
------------------------------------
 bind
    绑定返回对象,方便调用
    function f(){
        return this.a;
    }
    var g = f.bind({a:'test'});
    console.log(g());//test
    var o = {a:39,f:f,g:g};
    console.log(o.f(),o.g()); //39,test
```

