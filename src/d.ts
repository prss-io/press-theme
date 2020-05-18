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
}

interface ILink {
    text: string;
    url: string;
    icon?: string;
}