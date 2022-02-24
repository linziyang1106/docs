module.exports = {
  lang: "zh-CN",
  title: '智慧交通操作系统',
  description: '智慧交通操作系统文档',
  base: '/its/',
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/43716716?s=200&v=4' }]
  ],
  themeConfig: {
    repo: "doocs/jvm",
    logo: "https://avatars.githubusercontent.com/u/43716716?s=200&v=4",
    open: true,
    contributorsText: "贡献者",
    docsDir: "docs",
    editLinkText: "编辑",
    lastUpdatedText: "最近更新时间",
    nav: [
      { text: '部署', link: '/' },
      { text: '常见问题', link: '/guide/' },
      { text: 'Q&A', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      }
    ],
    locales: {
      '/': {
        tip: '说明',
        warning: '注意',
        danger: '警告',
      },
    },
    sidebar: [
      {
        title: "中台使用手册",
        children: [
          "/算法中台部署文档.md",
          "/数据接入使用手册.md",
          "/测试.md"
        ],
      },
      {
        title: "部署文档",
        children: [
          "/算法中台部署文档.md",
          "/数据接入使用手册.md",
          "/测试.md"
        ],
      },
    ],
  }
}