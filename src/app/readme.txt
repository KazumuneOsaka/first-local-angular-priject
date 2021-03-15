Angularの開発・実行環境について
  stackbritz        よく出来ているが、まだデバッグモードがないのと、ソースのバージョン管理が出来ない。
  VisualStudioCode  アプリの起動に難あり、デバッグは未確認、バージョン管理はＯＫ。起動・停止をコンソールからやればほぼＯＫ。
  WebStorm          起動・停止もＯＫ、デバッグ未確認、バージョン管理確認中。有料なのが難点！？
                    多分いろいろこいつが一番高機能＆使いやすいのでは？
                    ？：Githubへのpushができない？？？ commit&pushにしてなかった？！
                    ？：３度目の正直で再トライ　成功！！
                    これになれてしまうともう戻れないのでは、、、

サンプルアプリケーションの構成

files　                                   プロジェクトフォルダー
  src                                       ソースフォルダー
    app　                                     アプリケーションフォルダー
      product-list　                            コンポーネントフォルダー
        ｐroduct-list.component.css               コンポーネント用cssファイル
        ｐroduct-list.component.html　            コンポーネント用ｈｔｍｌファイル
        ｐroduct-list.component.ts　              コンポーネント用スクリプトファイル
      top-bar
        top-bar.component.css
        top-bar.component.html
        top-bar.component.ts
      app.component.css　                       アプリケーション用cssファイル
      app.component.html　                      アプリケーション用htmlファイル
      app.component.ts                          アプリケーション用スクリプトファイル
      app.module.ts
      products.ts
      readme.txt これは大坂が追加したファイル（このファイル）
    assets
      shipping.json
    environments                             環境設定格納フォルダー　main.tsの５行目で切り替えている
      environment.prod.ts                      本番環境用環境設定ファイル
      environment.ts                           テスト環境用環境設定ファイル
    index.html　                              Angular アプリを起動するためのトップページ
    main.ts                                   Angular アプリを起動するためのスタートアップコード
    polyfills.ts　                            ポリフィル：ブラウザサポート用のファイル
    styles.css　                              Global Styles
  angular.json                              *1
  package.json                              *2
DEPENDENCIES                              依存パッケージ定義フォルダー


----------
参照
　アプリの構成     https://qiita.com/ksh-fthr/items/d040cf8b2d15bd7e507d
  polyfills.ts  https://angular.jp/guide/browser-support
  NPMパッケージ   https://angular.jp/guide/npm-packages
----------
*1:angular.json
Angular ワークスペース のルート階層にある angular.json というファイルは、Angular CLIによって提供されるビルドおよび開発ツールに対して、ワークスペース全体およびプロジェクト固有のデフォルトの設定を提供します。
----------
*2:package.json
簡潔に説明されている文章が見つからないが、、、
npmのパッケージ定義ファイル
----------
Javascript(TypeScript)のコメント
// comment
/* comment */
/* comment
   comment
   comment */
/*
comment
comment
comment
*/
他にJSDoc(ドキュメント用コメント）もある
----------
htmlのコメント



===================================
ng lintの結果

➜  first-local-angular-priject git:(master) ✗ ng lint
TSLint's support is discontinued and we're deprecating its support in Angular CLI.
To opt-in using the community driven ESLint builder, see: https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint.
Linting "first-local-angular-priject"...
/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/app/app.component.ts:16:3
ERROR: 16:3   eofline                 file should end with a newline

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/app/cart.service.ts:28:3
ERROR: 28:3   typedef                 expected call-signature: 'addToCart' to have a typedef
ERROR: 32:3   typedef                 expected call-signature: 'getItems' to have a typedef
ERROR: 36:3   typedef                 expected call-signature: 'clearCart' to have a typedef
ERROR: 41:3   typedef                 expected call-signature: 'getShippingPrices' to have a typedef
ERROR: 44:2   eofline                 file should end with a newline

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/app/cart/cart.component.ts:13:39
ERROR: 13:39  no-trailing-whitespace  trailing whitespace
ERROR: 15:11  quotemark               " should be '
ERROR: 17:5   semicolon               Missing semicolon
ERROR: 23:3   typedef                 expected call-signature: 'ngOnInit' to have a typedef
ERROR: 32:1   no-trailing-whitespace  trailing whitespace
ERROR: 33:2   eofline                 file should end with a newline

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/app/product-alerts/product-alerts.component.ts:31:3
ERROR: 31:3   typedef                 expected call-signature: 'ngOnInit' to have a typedef

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/app/product-details/product-details.component.ts:4:1
ERROR: 4:1    max-line-length         Exceeds maximum line length of 140
ERROR: 31:10  semicolon               Missing semicolon
ERROR: 38:3   typedef                 expected call-signature: 'ngOnInit' to have a typedef
ERROR: 54:3   typedef                 expected call-signature: 'addToCart' to have a typedef

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/app/product-list/product-list.component.ts:13:3
ERROR: 13:3   typedef                 expected call-signature: 'share' to have a typedef
ERROR: 17:3   typedef                 expected call-signature: 'onNotify' to have a typedef
ERROR: 28:3   eofline                 file should end with a newline

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/app/products.ts:27:3
ERROR: 27:3   eofline                 file should end with a newline

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/app/shipping/shipping.component.ts:19:3
ERROR: 19:3   typedef                 expected call-signature: 'ngOnInit' to have a typedef
ERROR: 28:3   eofline                 file should end with a newline

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/app/top-bar/top-bar.component.ts:17:3
ERROR: 17:3   eofline                 file should end with a newline

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/environments/environment.ts:23:3
ERROR: 23:3   eofline                 file should end with a newline

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/main.ts:19:3
ERROR: 19:3   eofline                 file should end with a newline

/Users/kosaka/Dropbox/AngularStudy/first-local-angular-project/first-local-angular-priject/src/polyfills.ts:71:3
ERROR: 71:3   eofline                 file should end with a newline

Lint errors found in the listed files.
➜  first-local-angular-priject git:(master) ✗
