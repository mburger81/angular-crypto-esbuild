import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as crypto from 'crypto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-crypto-esbuild';

  key: Buffer;

  constructor() {
    this.key = crypto.createHash('sha256').update('token').digest();
    console.log('Key:', this.key);
  }
}
