import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
    selected = '';

    constructor(private translate: TranslateService, private storage: Storage) { }

    setInitialAppLanguage() {
        let language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
       console.log(language);
        this.storage.get(LNG_KEY).then(val => {
            if (val) {
                this.setLanguage(val);
                this.selected = val;
            }
        })
    }
    setLanguage(lng) {
        this.translate.use(lng);
        this.selected = lng;
        this.storage.set(LNG_KEY, lng);
    }

    getLanguage() {
        return [
            { text: 'Francais', value: 'fr', img: 'assets/imgs/fr.png' },
            { text: 'العربية', value: 'ar', img: 'assets/imgs/fr.png' }

        ]
    }

}
