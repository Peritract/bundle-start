# Bundling

## Problem

- Code gets hard to manage as projects get more complex
- It gets easier if we split code into smaller files
- Browsers don't like using imports (`require` or `import`)
- We could link each file separately, but that gets messy

## Solution (bundlers)

- Massively hacky
- Write the code in separate files, using imports
- Get a tool (a **bundler**)
- Use the tool to package up all the files into a single file
- The single file contains the all code required, in the right order

## Transpilation

- Compilation: translate code in one language down to another, more machine-focused language
- Transpilation: translate code in one language across to another at the same level of abstraction
- There are *so many* versions of JS in use