# Pre interview coding game
## Question 1
Determines the ID of the most frequently sighted bird type.
If there is a tie, returns the smallest ID, if empty return -1.

* First step is the iteration in the array, adding to an object the ID of the bird if it doesn't exist
yet and the frequency it's been seen.
* Second step is to compare the values of the object to the max frequency and ID, initialized by 0 and MAX VALUE of Number 
* Lastly return the ID
## Question 2
Determines the bird type that was first spotted at the latest point in the array.
* First step is the iteration, adding to an object the ID of the bird if it doesn't exist yet.
* If it does exist we do nothing
* Second step is to check if the ID exists in the object, if not we update the latest first sighting, initialized by -1
* Lastly return the ID

## Files
```main.ts``` contains two functions each one resolves one question above.

```main.test.ts``` contains some tests using jest.

```package.json``` simple package file to manage packages and commands for the test.

```jest.config.js``` jest configuration to let jest test TypeScript files.

```tsconfig.json``` TypeScript configuration

## How to test the code
### Install dependencies
```npm install```
### Compile
```npm run build```
### Run tests
```npm test```