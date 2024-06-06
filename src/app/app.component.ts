import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['en', 'es', 'fr']);
        const lang = this.translate.getBrowserLang();
        if (lang !== 'en' && lang !== 'es' && lang !== 'fr') {
            this.translate.setDefaultLang('es');
        } else {
            this.translate.use(lang);
        }
    }
}
