var rule = {
  title: '爱欧乐影院',
  host: 'https://www.iole.app/',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: '/vodsearch/page/fypage/wd/.html',
  class_parse: '.top_nav li;a&&Text;a&&href;./(.?).html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.cbox_list;;;;;',
  double: true,
  一级: 'ul.vodlist.clearfix li;a&&title;a&&data-original;.vodname&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.vodlist_detail_box .vodlist_title&&Text',
    img: '.vodlist_thumb img&&data-original',
    desc: '.vod_content .vod_content_box&&Text',
    content: '.vod_content&&p&&Text',
    tabs: '.play_source_tab&&a',
    lists: '.play_source_list:eq(#id) li',
  },
  搜索: '*',
}
