import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
    /** Language transalation options */
    options = [
        {value: 'es', display: 'Español'},
        {value: 'en', display: 'English'},
        {value: 'fr', display: 'Français'},
    ];

    /**
     * Component constructor
     * @param {TranslateService} translate Translates all the pages
     */
    constructor(private translate: TranslateService) {}

    /** Changes language for translation */
    onChange = (event: Event) => {
        const lang = (event.target as HTMLSelectElement).value;
        this.translate.use(lang);
    }
}
