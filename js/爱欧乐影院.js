var rule = {
  title: '爱欧乐影院',
  host: 'https://www.iole.app',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: '/vodsearch/page/fypage/wd/*.html',
  class_parse: '.navbar-items li;a&&Text;a&&href;.*/(.*?).html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Referer': 'https://www.iole.app/'
  },
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.module-items .module-item;a&&title;.lazyload&&data-original;.module-item-text&&Text;a&&href',
  double: true,
  一级: '.module-items .module-item;a&&title;.lazyload&&data-original;.module-item-text&&Text;a&&href',
  二级: {
    title: '.module-info-heading h1&&Text;.module-info-tag-link:eq(2)&&Text',
    img: '.module-item-pic&&img&&data-original',
    desc: '.module-info-item:eq(1)&&Text;.module-info-tag-link:eq(0)&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text',
    content: '.module-info-introduction&&Text',
    tabs: '.module-tab-items .module-tab-item',
    lists: '.module-play-list:eq(#id) a'
  },
  搜索: '.module-items .module-search-item;a&&title;img&&data-original;.video-serial&&Text;a&&href',
}
