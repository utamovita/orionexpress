const rewritesDE = [
    {
        source: '/de/uber-uns',
        destination: '/de/o-nas',
        locale: false
    },
    {
        source: '/de/galerie',
        destination: '/de/galeria',
        locale: false
    },
    {
        source: '/de/karriere',
        destination: '/de/kariera',
        locale: false
    },
    {
        source: '/de/unterlagen',
        destination: '/de/dokumenty',
        locale: false
    },
]


const rewritesEN = [
    {
        source: '/en/about-us',
        destination: '/en/o-nas',
        locale: false
    },
    {
        source: '/en/gallery',
        destination: '/en/galeria',
        locale: false
    },
    {
        source: '/en/career',
        destination: '/en/kariera',
        locale: false
    },
    {
        source: '/en/contact',
        destination: '/en/kontakt',
        locale: false
    },
    {
        source: '/en/documents',
        destination: '/en/dokumenty',
        locale: false
    },
]

const rewrites = [...rewritesDE, ...rewritesEN];

export default rewrites

