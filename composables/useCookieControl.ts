export interface CookieControlTexts {
    title: string;
    subtitle: string;
    description: string;
    clearData: string;
    privacyPolicy: string;
    imprint: string;
    close: string;
    reject: string;
    accept: string;
}

export const defaultCookieControlTexts: CookieControlTexts = {
    title: 'We use Cookies',
    subtitle: 'The main purpose of our cookies is to have a basic user tracking for analytical purposes.',
    description: 'The best way to remove this websites data is to use the clear website data function of your browser.',
    clearData: 'Remove local data',
    privacyPolicy: 'Privacy Policy',
    imprint: 'Imprint',
    close: 'Close',
    reject: 'Reject',
    accept: 'Accept',
};
