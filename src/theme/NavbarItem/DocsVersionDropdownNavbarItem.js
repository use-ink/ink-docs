import React from 'react';
import {
    useActiveDocContext,
    useVersions,
    useLatestVersion,
    useActiveVersion,
} from '@docusaurus/plugin-content-docs/client';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';


export default function DocsVersionDropdownNavbarItemWrapper(props) {
    const activeDocContext = useActiveDocContext(props.docsPluginId);
    const versions = useVersions(props.docsPluginId);
    const currentVersion = versions.find(
        (version) => version.name === 'current',
    );
    const isViewingOutdatedVersion = activeDocContext.activeVersion.name !== currentVersion.name;
    const isViewingUnreleasedVersion = activeDocContext.activeVersion.name === '6.x';
    const d = 'M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"'

    if (isViewingUnreleasedVersion) {
        return (
            <>
                <div className={'navbar__item oldVersion'}>
                    <div className={'attention'}>
                        <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'}>
                            <path d={d}></path>
                        </svg>
                    </div>
                    You are viewing the documentation for an <em>unreleased</em> version of ink!.
                </div>
                <DocsVersionDropdownNavbarItem {...props} />
            </>
        );
    } else if (isViewingOutdatedVersion) {
        return (
            <>
                <div className={'navbar__item oldVersion'}>
                    <div className={'attention'}>
                        <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'}>
                            <path d={d}></path>
                        </svg>
                    </div>
                    You are viewing the documentation for an older version of ink!.
                </div>
                <DocsVersionDropdownNavbarItem {...props} />
            </>
        );
    } else {
        return (
            <>
                <DocsVersionDropdownNavbarItem {...props} />
            </>
        );

    }
}
