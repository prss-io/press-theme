interface IVars {
    logoImageUrl?: string;
    featuredImageUrl?: string;
    featuredImageAlt?: string;

    /**
     * Hero
     */
    heroTitle?: string;
    heroMessage?: string;
    heroImageUrl?: string;

    /**
     * Links
     */
    links: ILink[];

    /**
     * Menu
     */
    sidebarMenu?: string;

    /**
     * Aside
     */
    asideHtml?: string;
    sidebarAsideHtml?: string;
    inlineAside?: string;
    footerCta?: string;
    warningHtml?: string;
    contentFooterHtml?: string;

    /**
     * SEO
     */
    metaDescription?: string;
    metaLocale?: string;
    metaUrl?: string;
    metaSiteName?: string;
    metaRobots?: string;
    metaTitle?: string;
    metaImage?: string;
}

interface ILink {
    text: string;
    url: string;
    icon?: string;
}