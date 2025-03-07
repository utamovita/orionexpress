const redirectsDE = [
    {
        source: '/de/o-nas',
        destination: '/de/uber-uns',
        permanent: true,
        locale: false,
    },
    {
        source: '/de/galeria',
        destination: '/de/galerie',
        permanent: true,
        locale: false,
    },
    {
        source: '/de/kariera',
        destination: '/de/karriere',
        permanent: true,
        locale: false,
    },
    {
        source: '/de/dokumenty',
        destination: '/de/unterlagen',
        permanent: true,
        locale: false,
    },
]

const redirectsEN = [
    {
        source: '/en/o-nas',
        destination: '/en/about-us',
        locale: false,
        permanent: true
    },
    {
        source: '/en/galeria',
        destination: '/en/gallery',
        locale: false,
        permanent: true
    },
    {
        source: '/en/kariera',
        destination: '/en/career',
        locale: false,
        permanent: true
    },
    {
        source: '/en/kontakt',
        destination: '/en/contact',
        locale: false,
        permanent: true
    },
    {
        source: '/en/dokumenty',
        destination: '/en/documents',
        locale: false,
        permanent: true
    },
]

const redirects = [...redirectsDE, ...redirectsEN];

export default redirects