# React 19 useEffect: Shallow Comparison Issue with Objects

This repository demonstrates a common pitfall in React 19's `useEffect` hook when dealing with object comparisons.  Directly comparing objects within the dependency array often leads to unexpected re-renders because the reference changes even if the object's content remains the same.  This example showcases the problem and its solution.

## Bug
The `bug.js` file contains a component with `useEffect` that incorrectly compares objects directly. This causes unnecessary re-renders whenever a new object instance is passed, even if the data is identical.

## Solution
The `bugSolution.js` file demonstrates the correct approach.  Instead of directly comparing objects, we use a deep comparison library (such as lodash's `isEqual`) or create a custom comparison function to accurately determine if the object's contents have changed.