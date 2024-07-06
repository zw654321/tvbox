var rule = {
  title: '爱欧乐影院',
  host: 'https://www.iole.app',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: '/vodsearch/page/fypage/wd/*.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  },
  // 仅保留基本的一级列表解析
  一级: 'body .module-item;.module-item-title&&Text;.lazyload&&data-original;.module-item-text&&Text;a&&href',
  // 二级暂时留空
  二级: {},
}
