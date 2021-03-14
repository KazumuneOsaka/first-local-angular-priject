import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

/*
Error: src/app/product-alerts/product-alerts.component.ts:11:12 - error TS7008: Member 'product' implicitly has an 'any' type.

11   @Input() product;
              ~~~~~~~


Error: src/app/product-details/product-details.component.ts:14:3 - error TS7008: Member 'product' implicitly has an 'any' type.

14   product
     ~~~~~~~


*/
export class ProductAlertsComponent implements OnInit {
  @Input() product;                       /* TODO:ローカルでのng serveでエラー　*/
  @Output() notify = new EventEmitter();  /* TODO:ローカルでのng serveでエラー　*/

  constructor() { }

  ngOnInit(): void {
  }

}

/*
Component()の主な特徴は次のとおりである。
app-product-alertsというselector はコンポーネントを識別します。
慣例では、Angularのコンポーネントセレクターは接頭辞 app- で始まり、その後にコンポーネント名が続きます。
テンプレートとスタイルのファイル名は、コンポーネントのHTMLとCSSを参照します。
@Component()定義は、コンポーネントの機能を処理するクラス ProductAlertsComponentもエクスポートします。
*/
