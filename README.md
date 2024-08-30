<a href="https://www.bornfight.studio/">
<img width="84px" src="https://www.bornfight.com/wp-content/themes/bf/static/ui/BF-sign-dark.svg?" title="Bornfight" alt="Bornfight">
</a>

# b-scroll-lock [[all b- libs](https://github.com/bornfight-studio/b-lib-archive/)]
> Bornfight Studio frontend micro lib for locking and unlocking the scroll 

![GitHub package.json version](https://img.shields.io/github/package-json/v/bornfight-studio/b-scroll-lock?style=flat-square)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/bornfight-studio/b-scroll-lock?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/bornfight-studio/b-scroll-lock?style=flat-square)
![GitHub](https://img.shields.io/github/license/bornfight-studio/b-scroll-lock?style=flat-square)

## 📦 Getting Started

- install `b-scroll-lock` trough __npm__ or pull ti from git

```
npm i @bornfight/b-scroll-lock
```

- include b-lib to your __JS__ after running __npm install__

## 🔨️ Usage 
###### JS
``` JS
import ScrollLock from "@bornfight/b-scroll-lock";
```

##### Usage tips
- class contains two methods, one for lock scroll and one for unlock 
- every method has one property that could be passed
     
## 💎 Customization

```JS
const scrollLock = new ScrollLock();

// value 100 represent on witch scroll value will "is-fixed-scrolled" class be added to body
// offset value (100) is optional and default is 100
scrollLock.lockScroll(100);

// value 100 represent on witch scroll value will document be after scroll is unlocked
// offset value (100) is optiona and default is scroll value before locking the scroll
scrollLock.unlockScroll(100);
```

## 🚀 Useful to know

1. if used with page transition - don't forget to unlock scroll
2. will not work for scroll inside modal/popup
   
### 📦 Contribute

#### Gulp based system 
 - [Gulp](https://gulpjs.com/) 4 used
 - [browsersync](https://browsersync.io/) for live reload
 
```bash
npm run dev - dev environent with browsersync
```

### License

MIT © [Bornfight Studio](https://www.bornfight.studio/)
