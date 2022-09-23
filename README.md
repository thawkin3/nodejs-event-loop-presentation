# Node.js Event Loop Presentation

This repo contains slides and demo examples for my talk "Understanding the Node.js Event Loop" that I presented at the [Node.js Global Summit 2022](https://www.youtube.com/watch?v=RYpivX9P8-I&t=32415s&ab_channel=GeekleOfficial) on May 18, 2022.

I'll also be presenting this at UtahJS on September 23, 2022 with the talk title "A Deep Dive Into the Node.js Event Loop."

![Node.js Event Loop](<./slides/08%20Node.js%20Event%20Loop%20(Example).png>)

## Using This Repo

The `demos` directory contains several files. Each file is an independent demo that you can run with Node.js. For example:

```
node demos/01-synchronous.js
```

Try to guess the order in which the functions will be executed before running each example.

## Resources

### Node.js Docs

- [Introduction to Node.js](https://nodejs.dev/learn)
- [Blocking vs. Non-Blocking Code in Node.js](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
- [Timers in Node.js](https://nodejs.org/en/docs/guides/timers-in-node/)
- [The Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [Don't Block the Event Loop](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

### Articles

- [Understanding the Node.js Event Loop](https://betterprogramming.pub/understanding-the-node-js-event-loop-a4030f4b0716)
- [Understanding the Node.js event loop phases and how it executes the JavaScript code](https://dev.to/lunaticmonk/understanding-the-node-js-event-loop-phases-and-how-it-executes-the-javascript-code-1j9)
- [Node.js Event Loop (Geeks for Geeks)](https://www.geeksforgeeks.org/node-js-event-loop/)
- [JavaScript Event Loop (JavaScript Tutorial)](https://www.javascripttutorial.net/javascript-event-loop/)
- [The event loop (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [Microtasks](https://javascript.info/microtask-queue)
- [Promises, Next-Ticks, and Immediates](https://blog.insiderattack.net/promises-next-ticks-and-immediates-nodejs-event-loop-part-3-9226cbe7a6aa)

### Talks

- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf)
- [Further Adventures of the Event Loop](https://www.youtube.com/watch?v=u1kqx6AenYw&ab_channel=JSConf)
