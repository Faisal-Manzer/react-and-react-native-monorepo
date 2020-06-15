# React n React Native Monorepo (ADVANCED)
# ![React & React Native Monorepo](/banner.png)

This is an monorepo for React and React Native which can be used as boilerplate. It comes with out-of-box configurations for
- Web:
    - [Create React App]: Use an integrated toolchain for the best user and developer experience.
    - [@reach/router]: A small and simple router.
    - [react-app-rewired]: Tweak the [Create React App] [webpack](https://webpack.js.org) config(s) without using 'eject'.

- Native (iOS and Android):
    - [react-native]: Create native apps for Android and iOS using React.
    - [@react-navigation/native]: A navigation framework for [react-native].
    - [@react-navigation/stack]: Stack-navigation for [@react-navigation/native].

- Shared by both:
    - [redux]: A Predictable State Container for JS Apps.
    - [react-redux]: Official React bindings for Redux.
    - [redux-thunk]: Async action middleware for [redux].
    - [eslint] and [prettier]: Find and fix problems in your JavaScript code.
    - [husky] and [lint-staged]: Beautify code (staged) before every commit.
    - Absolute imports for react and react-native.

## ADVANCED
You will get all thing as preconfigured as base repo and also the below things:
- Native (iOS and Android):
    - [@react-native-community/google-signin]: Google sign-in for both iOS and Android. Android uses native sign-in dialog and in iOS uses web sign-in.
    - [onesignal-push-notification]: Push-notification for all Web/iOS/Android using Onesignal SDK which is free and has a great REST API to be used from server.
    - [redux-persist]: Redux persist for persisting redux state. As you want your application to be opened how it was left by user.
    - [tailwindcss]: An atomic css framework which has great utility classes for building all type of components.
    - [react-native-bootsplash]: More advanced splash screen for native. Instead of [react-native-splash-screen] which seems to be no longer maintained.

NOTE: I intentionally added all credentials in this repo so that you can run this directly. You can skip to [getting started](#getting-started) if you are currently only concerned with development. 
Setting UP is only require for production when you need to change your bundle ID and Name.
## Setting up
Accounts you need:
- Google account
- [OneSignal]
- [AppCenter]

### 0. Change your bundle ID and name
See [the guide](#changing-bundle-identifier-and-app-name).

### 1. Create Firebase apps for iOS and Android
Open https://console.firebase.google.com and then add new app (or in existing application).  

#### Android
For android **you need to add SHA-1** Fingerprint while creating or in project>app settings. 
```shell script
# for debug
keytool -list -v -keystore native/android/debug.keystore -alias androiddebugkey -storepass android -keypass android 

# for your keystore change keystore path, alias, storepass, keypass
```
Download `google-services.json` and replace it with `native/app/google-services.json`.

#### iOS
Just create iOS app in firebase and download `GoogleService-Info.plist`. Replace it with `native/ios/<project>/GoogleService-Info.plist`.  
In next step you need to open xcode (use `yarn xcode`). Open `Target / <project> / Info / URL Types / URL Schema` you need to add `REVERSED_CLIENT_ID` from `GoogleService-Info.plist` and paste there.

### 2. AppCenter configs
#### Android
Add new app of type `Android > React Native`. You need to copy `app_secret` and replace in `native/android/app/src/main/assets/appcenter-config.json`.  
Go to `Distribute > CodePush` and then generate key and replace your key in  `native/android/app/src/main/res/values/string.xml`.

#### iOS
Add new app of type `Android > React Native`. You need to copy `app_secret` and replace in `native/android/app/src/main/assets/appcenter-config.json`.  
Go to `Distribute > CodePush` and then generate key and replace your key in  `native/android/app/src/main/res/values/string.xml`.


### 3. OneSignal
Create an app here also.

#### Android 
Add an Android app in settings. Copy `FCM credentials` from Firebase settings and then paste them in appropriate textboxes. Then choose `react native` then next. You can skip last step.

#### iOS 
Follow documentations guidelines from there. I haven't tested iOS push notifications and my Apple Developer account is expired. You can let me know for any error.

### Web 
Create a typical website with `Custom Link` prompt. (Do delete the slide prompt). Do your setup for safari too.

### Common
At last you need to get `GOOGLE_SIGNIN_WEB_CLIENT_ID` and `ONESIGNAL_APP_ID`.  
Go to `https://console.developers.google.com/apis/credentials` and get the `CLIENT_ID` from `OAuth 2.0 Client IDs > Web client (auto created by Google Service)` just copy the client ID and replace it in `common/secrets.json`.  
Go to One Signal setting and copy App ID from `Keys and IDs` section and replace it with `common/secrets.json`.  

## Getting started
```shell script
# clone this repo
git clone https://github.com/Faisal-Manzer/react-and-react-native-monorepo.git
```

`yarn install`: For installing dependencies run.  
`yarn pods`: If you have [xcode] and [Cocapods] installed (needed for iOS development) run to install iOS dependencies.  
`yarn clean`: Will delete all _node_modules_ and _pods_ and the app will be ready for any fresh install.  

`yarn start`: Will start [Create React App]'s development server and [react-native] bundler.  
`yarn native`: Will manually start [metro] server for [react-native].  

`yarn web`: Will manually start [Create React App]'s development server. (NOTE: already started if you ran `yarn start`).  
`yarn android`: For running app on android emulator or android device.  
`yarn ios`: For running app on iOS simulator.  

`yarn studio`: Will open android project in android studio.  
`yarn xcode`: Will open android project in android studio.  

```shell script
# clone the repo
git clone https://github.com/Faisal-Manzer/react-and-react-native-monorepo.git app
cd app

# install dependencies
yarn install

# install iOS dependencies
yarn pod

# manually start react-native bundeller
yarn start

# run Web/Android/iOS 
yarn ios
yarn android
# Web already started with `yarn start` but you can manually start
yarn web

# open in Android Studio/XCode
yarn studio
yarn xcode

# clean and reinstall
yarn clean
yarn install
yarn pod
```

## Setup for 

## Guides

### My app is stuck on splash screen
Your app is opening but it stuck because it is loading js bundel. Once its will load the app will start.

### Sharing code
All shared code should reside in `common` folder. Containers, hooks, actions, helper logic all can reside under `common` **except UI**.
```js
// common/helpers.js

export const myLogic = (someArgs) => {
   // some code
}
```

Now in web or native file you can
```js
import { myLogic } from 'common/helpers'
```

Now for importing it you can using 

### Absolute imports

#### Code sharing
You can use import from `common` with it's name, i.e.:
```js
import {} from 'common/component/HelloMonorepo';
```

#### React
React comes out of the box imports for all subdirectories of `src`.
```js
import {} from 'components/MonorepoIntroduction';
```

#### React Native
For RN absolute import you can use directly for all subdirectories of `src`.
```js
import {} from 'components/MonorepoIntroduction';
```

### Adding external dependencies
1. If there is any dependency which is isolated to web or native then there will be no issues with it. If issue comes try adding dependency to `nohoist` in respective `package.json` and then clean install `yarn clean && yarn install && yarn pods`.
2. If dependency is shared with common sometimes the dependency can conflict. If issue comes first try adding dependency to `nohoist` in respective `package.json` and then clean install `yarn clean && yarn install && yarn pods`. If the issue doesn't resolve there you should add `alias` for those dependency. React redux is one example of aliased dependencies.

#### Adding aliases
##### For web
Open `web/config-overrides.js` add alias for the dependency. Alias is resolving the path of dependency. If dependency is in `nohoist` then it will be in `web/node_modules` or else in root level `node_modules`.  
See example of `react-redux`.

##### For native
Open `native/config-overrides.js` add alias for the dependency as `extraNodeModules`. If dependency is in `nohoist` then it will be in `web/node_modules` or else in root level `node_modules`.  
See example of `react-redux`. Recommended to add that dependency to `nohoist`.

### Changing app icon

- Create an icon with size 1024x1024 pixels.  
- Bake Android and iOS icons (can use [makeicon]) and web icons (can use [favicon-generator]).  
- Copy new `android` icon to `native/android/app/src/main/res/`. Replace all `ic_launcher.png` from respective folders.
- Also bake Round icons for android (use [makeicon]). Replace all `ic_launcher_round.png` from respective folders.
- Run `yarn xcode` or open correct `.xcworkspace` in xcode. Go to `<project>/<project>/Images.xcassets` and drag and drop all.
- Replace all web icons to `web/public/logos/`.

- For adaptive icons in Android Replace `ic_laucher_foreground.png` in `native/android/app/src/main/res/`. And change it's bg color in `native/android/app/src/main/res/values/ic_launcher_background.xml`


### Changing bundle identifier and app name

#### For Android and iOS:
```shell script
# clean
yarn clean

cd packages/native
# in native directory
npx react-native-rename <newAppName> -b <bundleIdentifier>

cd -
# install depedencies
yarn install
# install ios dependencies
yarn pod

```

#### Extra steps for iOS  
1. Run `yarn xcode`  
2. Go to project's Build Settings  
3. Edit bundle identifier and app name

#### For Web
1. (In web directory)
2. Open `src/public/manifest.json`
3. Edit `short_name` and `name`

### Changing splash screen
See https://github.com/zoontek/react-native-bootsplash#assets-generation

---

[Create React App]: https://reactjs.org/docs/create-a-new-react-app.html
[@reach/router]: https://reach.tech/router
[react-app-rewired]: https://github.com/timarney/react-app-rewired

[react-native]: https://reactnative.dev
[react-native-splash-screen]: https://github.com/crazycodeboy/react-native-splash-screen
[@react-navigation/native]: https://reactnavigation.org
[@react-navigation/stack]: https://reactnavigation.org/docs/stack-navigator

[@react-native-community/google-signin]: https://github.com/react-native-community/google-signin
[onesignal-push-notification]: https://onesignal.com
[redux-persist]: https://github.com/rt2zz/redux-persist
[tailwindcss]: https://tailwindcss.com

[OneSignal]: https://onesignal.com
[AppCenter]: http://appcenter.ms

[react-redux]: https://react-redux.js.org
[redux]: https://redux.js.org
[react-thunk]: https://github.com/reduxjs/redux-thunk
[eslint]: https://eslint.org
[prettier]: https://prettier.io
[lint-staged]: https://github.com/okonet/lint-staged
[husky]: https://github.com/typicode/husky

[Cocapods]: https://cocoapods.org
[metro]: https://facebook.github.io/metro/docs/getting-started/

[makeicon]: https://makeappicon.com
[favicon-generator]: https://www.favicon-generator.org
