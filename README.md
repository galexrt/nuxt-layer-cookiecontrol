# Nuxt Layer: Cookies

My basic "CookieControl" layer, I mainly use in my projects so I don't have to duplicate the code in every project..

## Requirements

- Nuxt 4+
- Nuxt UI 4+

- _Optional_, You can use [nuxt-i18n](https://github.com/nuxt-modules/i18n) for internationalization of the cookie control component's texts.

## Screenshot

![Cookiecontrol Component example usage](screenshot.png)

## Examples

### i18n / Custom texts

`texts` is a shared ref, so you can override the defaults once and every consumer will use the same values.

```ts
const { texts } = useCookieControl();

texts.value = {
    title: 'Cookies auf dieser Website',
    subtitle: 'Wir nutzen Cookies für Analyse und grundlegende Funktionen.',
    description: 'Du kannst die gespeicherten Daten jederzeit in deinem Browser löschen.',
    clearData: 'Lokale Daten entfernen',
    privacyPolicy: 'Datenschutzerklärung',
    imprint: 'Impressum',
    close: 'Schließen',
    reject: 'Ablehnen',
    accept: 'Akzeptieren',
};
```
