# CS-TICKET-SYSTEM - Assignment - 2

`1. What is JSX, and why is it used?`

JSX (JavaScript XML) হলো JavaScript এর মধ্যে HTML লেখার একটা সিনট্যাক্স।
ব্রাউজার JSX সরাসরি বুঝে না, কিন্তু React এটা JavaScript এ কনভার্ট করে দেয়।

**কেন JSX ব্যবহার করা হয়?**

- সহজে UI তৈরি করা যায় - আলাদা ভাবে HTML file না বানিইয়ে JAVASCRIPT এর মধ্যেই
  HTML + javascript syntex লিখা যায় যা কোড কে আরও readble এবং সহজ করে।

- ডাইনামিক ডাটা সহজে দেখানো যায় - JSX এর মধ্যে {} এর ভেতরে JavaScript কোড লিখে
  ডাটা দেখানো যায়।

```js
const name = 'Maha';
return <h1>Hello, {name}</h1>;
```

---

`2. What is the difference between State and Props?`

**State কী?** State হলো component এর ভিতরে ডেটা, যেটা সে নিজে ডাইনামিক পরিবর্তন
করতে পারে।

```js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

এখানে count হলো state, যেটা নিজের info নিজে পরিবর্তন করে।

**Props কী?**

- Props (Properties) হলো parent component থেকে child component এ data পাঠায়।

- read-only - child কম্পোনেন্ট data পরিবর্তন করতে পারে না।

- Props এর মাধ্যমে এক কম্পোনেন্ট থেকে আরেক কম্পোনেন্টে ডেটা শেয়ার করা হয়।

```js
function SayHello({ name }) {
  return <h1>Hello, {name}</h1>;
}

function App() {
  return (
    <div>
      <SayHello name="Maha" />
      <SayHello name="Mahadi" />
    </div>
  );
}
```

এখানে name হলো props, যেটা App থেকে SayHello কম্পোনেন্টে পাঠানো হয়েছে।

---

`3. What is the useState hook, and how does it work?`

React-এর useState hook হলো একটি ‍built-in function. component এর ভিতরের ডেটা,
যেটা সে নিজে ডাইনামিক পরিবর্তন করতে পারে।

```js
const [state, setState] = useState(initialValue);
```

**state:** এটি বর্তমান মান ধরে রাখে।

**setState::** এটি একটি function, যা state এর মান পরিবর্তন করে।

**initialValue:** এটি ‍state এর প্রাথমিক মান। এখাণে ডীফল্ট মাণ দিতে গেলে আগে
আমাদের আগে দেখতে হবে যে ডাটা গুলা কি ফর্মেটে আছে, যদি ডাটা গুলা overall যদি একটি
লিস্ট আকারে থাকে তাহলে ডীফল্ট মাণ হবে এম্পটি লিস্ট [], আর নাম্বার হলে ০, আর
অব্জেক্ট হলে {} ।

```js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

---

`4. How can you share state between components in React?`

React-এ state শেয়ার করার ৩টা সহজ উপায় আছে:

- Lift State Up প্রথমে State টা parent এ রাখতে হবে তারপর props-drilling কোরে
  child-এ পাঠেতে হবে।

- Context API বারবার props না পাঠিয়ে, একটা global box বানালে, যেকোনো child সেই
  box থেকে Context API এর মাধ্যমে state নিতে পারবে props drilling ছাড়া সরাসরি ।

- Redux / Zustand (বড় প্রোজেক্টে) আলাদা একটা store বানালে পুরো প্রোজেক্টের
  যেকোনো জায়গা থেকে state ব্যবহার করা যাবে ।

---

`5. How is event handling done in React?`

- React-এ event handling করা হয় camelCase attribute দিয়ে, যেমন (onClick,
  onChange)।

- Event এ function দেওয়া হয়, string না।

- Argument পাঠানো যায় উদাহরণ: onClick={() => handleClick("Maha")}

```js
function App() {
  const handleClick = () => {
    alert('i am clicked');
  };

  return (
    <>
      <button onClick={handleClick}>click</button>
    </>
  );
}
```

```js

// JSX HandleClick with parameters..

-|Wrong|-

 function App() {
   function handleClick(a, b) {
     alert(`I am click ${a + b}`)
   }

   return (
     <>
       <button onClick={()=> handleClick(3,5)}>click</button>
     </>
   )
 }
(button click করার আগেই কল হয়ে যায় )


-|Solve|-

 const App = () => {
   function handleClick(a, b) {
     alert(a + b);
   }
   return (
     <div>
       <h3>Bismillah</h3>
       <button onClick={() => handleClick(2, 2)}>Click me</button>
     </div>
   );
 };

```