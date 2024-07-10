var rule = {
  title: '爱欧乐影院',
  host: 'https://www.iole.cc',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: '/vodsearch/page/fypage/wd/*.html',
  class_parse: '.top_nav li;a&&Text;a&&href;.*/(.*?).html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.cbox_list;*;*;*;*;*',
  double: true,
  一级:{
  "ul.vodlist li": {
    "title": "a.vodlist_thumb&&title",
    "img": "a.vodlist_thumb&&data-original",
    "desc": "div.vodlist_titbox p.vodlist_sub&&Text",
    "href": "a.vodlist_thumb&&href"
  }
},
  二级: {
    title: 'h2&&Text;.detail_list&&ul:eq(1)&&li&&a:eq(2)&&Text',
    img: '.vodlist_thumb&&data-original',
    desc: '.content_detail&&li:eq(1)&&Text;.detail_list&&ul:eq(1)&&li&&a&&Text;.detail_list&&ul:eq(1)&&li&&a:eq(1)&&Text;.detail_list&&ul:eq(1)&&li:eq(2)&&Text;.detail_list&&ul:eq(1)&&li:eq(3)&&Text',
    content: '.content_desc&&span&&Text',
    tabs: '.play_source_tab&&a',
    lists: '.content_playlist:eq(#id) li',
  },
  搜索: '*',
}
