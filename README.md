# bam-app-dej

## Requirements
* OS X - This guide assumes OS X which is needed for iOS development.
* Homebrew for OS X.
* Xcode 6.3 or higher for OS X.
* Android SDK (and an Android emulator if you want to work on your app without having to use a physical device)

## Installation

* Install Node.js 4.0 or newer.
```shell
nvm install v4
nvm use v4
brew install watchman #Install watchman (recommended otherwise you might hit a node file watching bug.)
```

* Install React Native.
```shell
npm install -g react-native-cli
```


## Development

### iOS
```shell
cd BamAppDej
npm install

open ios/BamAppDej.xcodeproj/
react-native start
```
Then hit *Run* button in XCode.

### Android

Have an Android emulator running, or a device connected.

```shell
cd BamAppDej
npm install

react-native run-android
```

### Run tests

```shell
cd BamAppDej
npm test
npm test -- --watch
```
