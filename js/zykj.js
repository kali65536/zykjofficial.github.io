var titleTime,OriginTitle=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?($('[rel="icon"]').attr("href","https://cdn.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/funny.ico"),document.title="(っ °Д °;)っ 访问的页面不存在了",clearTimeout(titleTime)):($('[rel="icon"]').attr("href","https://cdn.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/favicon.ico"),document.title="( •̀ ω •́ )✧ 又好啦 ~ "+OriginTitle,titleTime=setTimeout((function(){document.title=OriginTitle}),2e3))}));var mobile_sidebar_menus=document.getElementById("mobile-sidebar-menus");if(null!=mobile_sidebar_menus)for(var menus_item_child=mobile_sidebar_menus.getElementsByClassName("menus_item_child"),menus_expand=mobile_sidebar_menus.getElementsByClassName("expand"),i=0;i<menus_item_child.length;i++)menus_item_child[i].style.display="none",menus_expand[i].className+=" closed";var post_copyright_info=document.getElementsByClassName("post-copyright-info")[1];function diaplayTime(e){var t=new Date(e),i=864e5,n=new Date-t,l=n/2592e6,o=n/(7*i),a=n/i,r=n/36e5,m=n/6e4;return n<0?result="未知时间":l>3?(result=t.getFullYear()+"-",result+=t.getMonth()+"-",result+=t.getDate()):result=l>1?parseInt(l)+"月前":o>1?parseInt(o)+"周前":a>1?parseInt(a)+"天前":r>1?parseInt(r)+"小时前":m>1?parseInt(m)+"分钟前":"刚刚",result}post_copyright_info&&(postUrl=post_copyright_info.getElementsByTagName("a")[0],postUrl.href=postUrl.innerText=window.location.origin+window.location.pathname);var activity_time=document.querySelector("#activity_time");if(activity_time){let e=diaplayTime(document.querySelector('meta[property="article:modified_time"]').getAttribute("content"));activity_time.innerHTML=e}