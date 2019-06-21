
// 封装addDropdown方法用于插入下拉菜单
$('#myJD').addDropdown({
    href: '#',
    title: "我的京东",
    width: 126,
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }
        ],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }
        ],
    }]
});

$('#procurement').addDropdown({
    title: '企业采购',
    width: 56,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name:'工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
});


$('#service').addDropdown({
    title: '客户服务',
    width: 70,
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
});

$('#bar-navs').addDropdown({
    title: '网站导航',
    direction: 'x',
    menuList: [{
        title: '特色主题',
        width: 340,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }, {
        title: '特色主题',
        width: 340,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }]
});

$('#slider').carousel({
    imgList: ["http://img1.360buyimg.com/da/jfs/t1/19069/15/6476/98181/5c539ef8E761d1f78/b55e061e816683ad.jpg",
    "http://img1.360buyimg.com/pop/jfs/t1/23119/39/1904/49543/5c176baaE9cb004c2/7d9e6f6082f55966.jpg", 
   "http://m.360buyimg.com/babel/jfs/t1/7929/16/14126/98815/5c54180bE41403b92/368b7051671df8aa.jpg",
   "http://m.360buyimg.com/babel/jfs/t1/32570/26/1526/78591/5c4ff5f9E24c691f3/29399169307c29f1.jpg"],
});


var menuList = [{
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视" ,"55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视" ,"55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视" ,"55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调" ,"以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视" ,"55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调" ,"以旧换新"]
        }]
    }
}, {
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视" ,"55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调" ,"以旧换新","壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调" ,"以旧换新","壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调" ,"以旧换新"]
        }]
    }
},];


// 创建左侧导航栏的dom结构
function createMenuDom(menuList) {
    menuList.forEach(function (liData) {
        var oLi = $('<li></li>');
        var title = liData.title;
        for (var i = 0; i < title.length; i++) {
            $('<a href="#">' + title[i] +'</a>').appendTo(oLi);
            if (i != title.length - 1) {
                $('<span>/</span>').appendTo(oLi);
            }
        }
        $('#menu-list').append(oLi);
    });
}
createMenuDom(menuList);

var timer = null;
// 绑定事件
function bindMenuEvent() {
    $('#menu-list').on('mouseenter', 'li', function () {
        clearTimeout(timer);
        $(this).css({
            backgroundColor: '#eee',
        });
        var index = $(this).index();
        renderMenuContent(menuList[index].content);
        $('#menu-content').show();


    }).on('mouseleave', 'li', function () {
        $(this).css({
            backgroundColor: '#fff',
        });
        timer = setTimeout(function () {
            $('#menu-content').hide();
        }, 500);
    });
    $('#menu-content').on('mouseenter', function () {
        clearTimeout(timer);
    }).on('mouseleave', function() {
        timer = setTimeout(function () {
            $('#menu-content').hide();
        }, 500);
    });
}


function renderMenuContent(data) {
    $('#menu-content').html('');
    var tabsUl = $('<ul class="tabs"></ul>');
    var tabsData = data.tabs;
    var subsData = data.subs;
    tabsData.forEach(function(tab) {
        $('<li><a href="#">' + tab + '</a></li>').appendTo(tabsUl);
    });
    var itemContent = $('<div class="item-content"></div>');
    subsData.forEach(function (sub) {
        var dl = $("<dl></dl>");
        
        var dd = $('<dd></dd>');
        for (var i = 0; i < sub.items.length; i++) {
            $('<a href="#">' + sub.items[i] + '</a>').appendTo(dd);
        }
        dl.append($('<dt>' + sub.title + '</dt>'))
            .append(dd).appendTo(itemContent);
    });
    $('#menu-content').append(tabsUl).append(itemContent);
}
bindMenuEvent();

// 图片事件
function bindeServiceEvent() {
    $('.service-frame').on('mouseenter', function () {
        $('.j-services').addClass('service-expend');
        console.log(this)

        $(this).find('a').css({
            color: 'red',
            borderBottom: '2px solid red'
        })
    }).on('mouseleave', function () {
        $(this).find('a').css({
            color: '#666',
            borderBottom: 'none'
        })
    });

    $('.close').click(function () {
        $('.j-services').removeClass('service-expend')
    });

}

function getData(data) {
    console.log(data);
    $('#result-content').show()
    renderSearchDom(data.result);
}

function renderSearchDom(data) {
    $('#result-content > ul').html('');
    data.forEach(function (item, index) {
        $('<li>' + item[0] + '</li>').appendTo($('#result-content > ul'))
    });
}

var searchTimer = null;
function searchEvent() {
    
    $('.search-inp').on('keyup', function (e) {
        var val = this.value;
        clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
            $.ajax({
                type: 'GET',
                url: 'https://suggest.taobao.com/sug',
                data: {
                    code: 'utf-8',
                    q: val,
                    callback: 'getData'
                },
                dataType: 'jsonp'
            });
        }, 500);
    }).on('click', function() {
        console.log(this.value)
        if (this.value) {
            $('#result-content').show()
        }
    });
    $('.search-bar').on('mouseleave', function (e) {
        $('#result-content').hide();
    });
    $('#result-content > ul').on('click', 'li', function (e) {
        $('.search-inp').val($(this).text());
    })
}


// 同源策略  协议 域名 端口号 

// 跨域   所有的跨域都是需要后端配合的   
// cb=aa  [] {}
// aa({})

var script = document.createElement('script');
script.src = "https://suggest.taobao.com/sug?code=utf-8&q=衣服&callback=aa";

document.body.appendChild(script);

function aa (data) {
    console.log('aaa', data)
}




bindeServiceEvent();
searchEvent()