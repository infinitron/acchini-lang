<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  This is official repository for acchini-lang.<br><br>
  <b>Bhai lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.bhai</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
hi acchini
  acchini cheppu "Hello acchini";
bye acchini

```

<h4 align="left">Run</h4>

```
acchinilang test.acchini
```

<h4 align="left">Output</h4>

```
hello acchini
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>hi acchini</code> is the entrypoint for the program and all program must end with <code>bye acchini</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi acchini
// Write code here
bye acchini

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>acchini idi</code>.</p>

```

hi acchini
  acchini idi a = 10;
  acchini idi b = "two";
  acchini idi c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye acchini
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla</code>. <code>auvnu</code> and <code>kaadu</code> are the boolean values.</p>

```

hi acchini
  acchini idi a = 10;
  acchini idi b = 10 + (15*20);
  acchini idi c = "two";
  acchini idi d = 'ok';
  acchini idi e = nalla;
  acchini idi f = auvnu;
  acchini idi g = kaadu;
bye acchini
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>acchini cheppu</code> to print anything to console.</p>

```

hi acchini
  acchini cheppu "Hello World";
  acchini idi a = 10;
  {
    acchini idi b = 20;
    acchini cheppu a + b;
  }
  acchini cheppu 5, 'ok', nalla , auvnu , kaadu;
bye acchini
```

<h3 align="center">Conditionals</h3>
<p align="center">Acchinilang supports if-else-if ladder construct , <code>acchini aithe</code> block will execute if condition is <code>auvnu</code>, otherwise one of the subsequently added <code>acchini lekapothe</code> blocks will execute if their respective condition is <code>auvnu</code>, and the <code>acchini kakapothe</code> block will eventually execute if all of the above conditions are <code>kaadu</code>

```

hi acchini
  acchini idi a = 10;
  acchini aithe (a < 20) {
    acchini cheppu "a is less than 20";
  } acchini lekapothe ( a < 25 ) {
    acchini cheppu "a is less than 25";
  } kakapothe acchini {
    acchini cheppu "a is greater than or equal to 25";
  }
bye acchini
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>eppativarkaithe acchini</code> blocks are executed as long as a specified condition evaluates to auvnu. If the condition becomes <code>kaadu</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>chaalu acchini</code> to break the loop and <code className="language-cpp">tarvatha chudu acchini</code> to continue within loop.</p>


```

hi acchini
  acchini idi a = 0;
  acchini eppativarakaithe (a < 10) {
   a += 1;
   acchini aithe (a == 5) {
    acchini cheppu "andar se bol acchini ", a;
    tarvatha chudu acchini;
   }
   acchini aithe (a == 6) {
    chaalu acchini;
   }
   acchini cheppu a;
  }
  acchini cheppu "done";
bye acchini
```









