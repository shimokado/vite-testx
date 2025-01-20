# `src/main.js` 仕様書

## 概要
`src/main.js`は、ViteアプリケーションのエントリーポイントとなるJavaScriptファイルです。このファイルは、アプリケーションの初期設定を行い、カウンターのセットアップを行います。

## 使用ライブラリ
- Vite
- JavaScript

## 関数
### `setupCounter(element)`
指定されたHTML要素にカウンターを設定します。

#### 引数
- `element` (HTMLElement): カウンターを設定するHTML要素。

#### 動作
1. カウンターの初期値を0に設定します。
2. カウンターの値が10の倍数の場合、カウンターの外枠を赤色の太い破線に変更します。
3. カウンターの値が5の倍数の場合、カウンターの数字を太字に変更します。
4. カウンターの値が3の倍数の場合、カウンターの数字のフォントサイズを大きく変更します。
5. カウンターの値が変更されるたびに、上記のスタイル変更を適用します。

## 使用例
```javascript
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
```

## 注意事項
- カウンターの値が変更されるたびに、スタイルが動的に変更されるため、パフォーマンスに影響を与える可能性があります。
- カウンターの値が大きくなると、スタイルの変更が頻繁に発生するため、適切なパフォーマンスチューニングが必要です。
