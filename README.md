# bam-app-dej

## Requirements
* Xcode 6.3 or higher
* Android SDK (and an Android emulator if you want to work on your app without having to use a physical device)

## Installation
* OS X - This guide assumes OS X which is needed for iOS development.
* Homebrew is the recommended way to install Watchman and Flow.
* Install Node.js 4.0 or newer.
```
nvm install v4
```
* Install watchman (recommended otherwise you might hit a node file watching bug.)
```
brew install watchman
```

* Install react-native
```
npm install -g react-native-cli
```



## Development

### iOS
```
cd BamAppDej
npm install

open ios/BamAppDej.xcodeproj/
react-native start
```
Then hit *Run* button in XCode.

### Android
   * Have an Android emulator running, or a device connected
```
cd BamAppDej
npm install

react-native run-android
```
