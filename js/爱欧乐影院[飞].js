var rule = {
  title: '爱欧乐影院',
  host: 'https://www.iole.app/',
  url: '/vodtype/fyclass/fypage.html',
  searchUrl: '/vodsearch/page/fypage/wd/*.html',
  class_parse: 'ul.top_nav li;a&&Text;a&&href;.*/(.*?).html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.module-items .module-item;a&&title;a&&data-original;.module-item-note&&Text;a&&href',
  double: true,
  一级: '.module-items .module-item;a&&title;a&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.info-describe p:eq(0)&&Text',
    img: '.poster img&&src',
    desc: '.info-describe p:eq(1)&&Text;.info-describe p:eq(2)&&Text',
    content: '.detail-content&&Text',
    tabs: '.play_source_tab a',
    lists: '.playlist:eq(#id) a'
  },
  搜索: '.module-items .module-item;a&&title;a&&data-original;a&&href',
}
