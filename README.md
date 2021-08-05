# Moments

Here are some notes about the implementation

## Requirements

This projects requires:
- node 16
- npm 7

## How to install

```
npm i
```

## How to use

You can launch all tests by doing

```
npm run test
```

## TypeScript

I've used TypeScript only for the toolchain as I like it better then Babel

No TypeScript has been used, even though the files are using `*.ts` extension

Note that actually using TS would have helped be write a better solution by using advance types


## TDD

Every file was implemented using TDD, using tests to drive the implementation

## Hexagonal architecture

The architecture is similar to the one used in hexagonal architecture (https://blog.octo.com/en/hexagonal-architecture-three-principles-and-an-implementation-example/)

For example, ports are written to help testing and switching between adapters

This helps use the same code base for unit testing and integration testing for example


## HTTP

I didn't have much time to implement the HTTP server so here is what it would look like

```
POST /overlay/add
{
  inputPath: string,
  outputPath: string,
  text: string,
  positionX: number,
  positionY: number,
  fontSize: number,
  color: number,
  startTime: number,
  endTime: number,
}
```

## Integration testing

Thanks to the hexagonal architecture, you can easily switch between your adapters and your in-memories

````ts
const addOverlayToUse = IS_INTEGRATION_TESTING 
  ? addOverlay({ fileRepository: fakeFileRepository, overlayRepository: actualOverlayRepository })
  : addOverlay({ fileRepository: actualFileRepository, overlayRepository: actualOverlayRepository });

addOverlayToUse(inputFromHttp);
````

The connection to FFMPEG and the file system should be tested with integration tests

One way to proceed for ffmpeg would be to use a golden master (https://stevenschwenke.de/whatIsTheGoldenMasterTechnique)

1. Create test cases
2. Execute them and record the results in the console and in the file system
3. Validate your work by executing your integration tests
4. The tests are validated if the console, the logs and the created files are the same for the same inputs

## Video overlay

Here are some thoughts:
- instead of accepting a `text`, the HTTP query would accept a `content` that would be binary data
- the video could also be sent prior to the call to the `POST ` to be reused more than once

## Security

I would use some kind of abstraction (such as kubernetes for example) to execute the bash script to prevent serious injections
