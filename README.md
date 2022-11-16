# Do You Know Me ?
This is a quiz app to find out how much you know about me. This projet is written on JavaScript with the help of Repl. Click on this button : [![Room
Status](https://travis-ci.org/jswanner/markdown-buttons.svg?branch=master)](https://replit.com/@DevKahl/Do-You-Know-Debasish#index.js?embed=1&output=1) and click "Run" to know me better. (and yes I felt being narcissistic while writing these questions and answer :D)

## v2.0

-- The first change I did is to change all the variable declarations from `var` to `let` / `const`

-- Then I removed the combination of a Function and For Loop. Instead I used the _MAP_ function to iterate over the database.

-- The last change is to improve code readability. so formed functions to make better readable code blocks. and called all the functions at the end of the code page.

## v1.0

-- This is a CLI app written in JavaScript using REPL.

-- And for the styling I used CHALK - a npm module to stylize the console outputs. Chalk Installation code : `var chalk = require("chalk")` but the latest version of CHALK module is not compatible with REPL, so I have to mannually downgrade it ro v4.1.2 in the _package.json_ file.

-- To recieve the input from the user I used READLINE SYNC (a npm module). and to use it the code is : `var readlineSync = require("readline-sync")`. But in this project I wanted to keystroke inputs so used _keyInSelect_ functionality from READLINE SYNC
