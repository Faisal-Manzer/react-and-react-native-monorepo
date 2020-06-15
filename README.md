# ![React & React Native Monorepo](/banner.png)

This is an monorepo for React and React Native which can be used as boilerplate. It comes with out-of-box configurations for
- Web:
    - [Create React App]: Use an integrated toolchain for the best user and developer experience.
    - [@reach/router]: A small and simple router.
    - [react-app-rewired]: Tweak the [Create React App] [webpack](https://webpack.js.org) config(s) without using 'eject'.

- Native (iOS and Android):
    - [react-native]: Create native apps for Android and iOS using React.
    - [react-native-splash-screen]: A splash screen API for react-native which can programatically hide and show the splash screen. Works on iOS and Android.
    - [@react-navigation/native]: A navigation framework for [react-native].
    - [@react-navigation/stack]: Stack-navigation for [@react-navigation/native].

- Shared by both:
    - [redux]: A Predictable State Container for JS Apps.
    - [react-redux]: Official React bindings for Redux.
    - [redux-thunk]: Async action middleware for [redux].
    - [eslint] and [prettier]: Find and fix problems in your JavaScript code.
    - [husky] and [lint-staged]: Beautify code (staged) before every commit.
    - Absolute imports for react and react-native.

## There is an Advanced branch
It has preconfigured native Google SignIn, Push Notifications for all platforms (iOS, Android, Web). Also have redux persist for saving redux state of application so that user can start where they left.  See its guide [here](https://github.com/Faisal-Manzer/react-and-react-native-monorepo/tree/advanced#react-n-react-native-monorepo-advanced).
```shell script
git clone https://github.com/Faisal-Manzer/react-and-react-native-monorepo.git --branch advanced --single-branch
```

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
1. to Fix `xcode` script in `native/package.json`, Edit `xcode` from `open ios/monorepo.xcworkspace` to `open ios/<newAppName>.xcworkspace`
2. Run `yarn xcode`  
3. Go to project's Build Settings  
4. Edit bundle identifier and app name

#### For Web
1. (In web directory)
2. Open `src/public/manifest.json`
3. Edit `short_name` and `name`

### Changing splash screen

- Create an splash screen banner with size 240x240 pixels for both iOS and Android and convert them to respective sizes.
- For Android:
    - Replace all splash_icon in `native/android/app/src/main/res/mipmap-*/splash_icon.png` with your images.
    - Edit your theme color in `native/android/app/src/main/res/values/colors.xml` edit `primary_dark` color code.
- For iOS:
    - Open xcode `yarn xcode`.
    - Replace all images in `<project>/<project>/Images.xcassets/SplashScreen`.
    - Choose `<project>/<project>/LaunchScreen.xib`. Click anywhere in view.
    - Select `Attribute inspector` (icon of it is somewhat like pin). Choose your background color.

---

[Create React App]: https://reactjs.org/docs/create-a-new-react-app.html
[@reach/router]: https://reach.tech/router
[react-app-rewired]: https://github.com/timarney/react-app-rewired

[react-native]: https://reactnative.dev
[react-native-splash-screen]: https://github.com/crazycodeboy/react-native-splash-screen
[@react-navigation/native]: https://reactnavigation.org
[@react-navigation/stack]: https://reactnavigation.org/docs/stack-navigator

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
