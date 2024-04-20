import React, { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import * as PRSS from 'prss';

interface IProps {}

const Head: FunctionComponent<IProps> = () => {
    const {
        metaDescription,
        metaRobots,
        metaLocale,
        metaTitle,
        metaUrl,
        metaSiteName,
        metaImage
    } = PRSS.getProp('vars') as IVars;

    return (
        <Helmet>
            {metaDescription && (
                <meta name="description" content={metaDescription} />
            )}

            {metaRobots && <meta name="robots" content={metaRobots} />}

            {metaLocale && <meta property="og:locale" content={metaLocale} />}

            {metaTitle && <meta property="og:title" content={metaTitle} />}

            {metaUrl && <link rel="canonical" href={metaUrl} />}

            {metaUrl && <meta property="og:url" content={metaUrl} />}

            {metaSiteName && (
                <meta property="og:site_name" content={metaSiteName} />
            )}

            {metaImage && <meta property="og:image" content={metaImage} />}
        </Helmet>
    );
};

