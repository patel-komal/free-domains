addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'patel-komal',
  owner: {
    repo: 'https://github.com/patel-komal/patel-komal.github.io',
    email: 'komal.patel@truestaz.com,
  },
  record: {
    CNAME: 'patel-komal.github.io',
  },
  proxy: false,
})
