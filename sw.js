const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"zykjblog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"955103ad3b01b67265e17128c9ba77dc",url:"./404.html"},{revision:"f3d65d0933020af7c5526a178cbdf24c",url:"./about/index.html"},{revision:"807fc060dd4e4632b2f582130d634d34",url:"./api/index.html"},{revision:"8d0ecd1cb56e978822c795509bfe2059",url:"./archives/2020/04/index.html"},{revision:"91a146193dd2fc63989728802903083f",url:"./archives/2020/05/index.html"},{revision:"38bbc50058da8dbb75cb35a30b9a922e",url:"./archives/2020/06/index.html"},{revision:"8795e59ff1adcc55aab954ff50faaf32",url:"./archives/2020/07/index.html"},{revision:"000d77c778601a7be25a56e349714c92",url:"./archives/2020/08/index.html"},{revision:"cebac1443c81718c8841bd3da79f5b6d",url:"./archives/2020/index.html"},{revision:"f7acb1e95a94699b53b25d95614d9aa5",url:"./archives/2020/page/2/index.html"},{revision:"dd09e0d925cd21052c9208f3ef4e6e88",url:"./archives/2020/page/3/index.html"},{revision:"c5640220e45ea1987e7f30bad8018505",url:"./archives/index.html"},{revision:"f8686a8b9698989a6cb8ffc97556dc8c",url:"./archives/page/2/index.html"},{revision:"6c644734e0dde74c3c4d15a1e1c3ec10",url:"./archives/page/3/index.html"},{revision:"87dda26da715c88266698c61e45f64fb",url:"./bangumis/index.html"},{revision:"6d4f208d7e3f9a44bb7ba472546502bf",url:"./case/Gradient_label.html"},{revision:"2ea5c75a4269113c5473df48dc20fab7",url:"./case/Spotlight_effect.html"},{revision:"893b3c78ecc0ab52d7340d1978093d90",url:"./categories/Docker教程/index.html"},{revision:"d38f326f40abc4e6690c89876958e509",url:"./categories/Git教程/index.html"},{revision:"c590a72a02690876d33d879a97284015",url:"./categories/Hexo教程/Butterfly/index.html"},{revision:"ab2e0db6307441dbde1bf621cbd4ce78",url:"./categories/Hexo教程/index.html"},{revision:"216a4f211566d04979f9095ffc5d771f",url:"./categories/Hexo教程/搭建与美化/index.html"},{revision:"5f272aff7560c82425f9379a2804d48c",url:"./categories/index.html"},{revision:"6ba2b4ff329a52e64ade219d71766de9",url:"./categories/Java/Android/index.html"},{revision:"d64b0fa0d12dfbed07c31b21eb7d484f",url:"./categories/Java/index.html"},{revision:"6489a3241b0ed574d50c57a881341f46",url:"./categories/Jekyll/index.html"},{revision:"7c2023bc49e625de541db575ce1cb18c",url:"./categories/Web教程/AJAX/index.html"},{revision:"2a727749e9604536c1cd0c49919353a2",url:"./categories/Web教程/Axios/index.html"},{revision:"da280aa746b4b9bf86b5ce0385e7ba97",url:"./categories/Web教程/CSS/index.html"},{revision:"4305a721184887e6d0b5c6ea020c33e7",url:"./categories/Web教程/ElementUi/index.html"},{revision:"c9128f284a52a419a8a09c6f27437a6c",url:"./categories/Web教程/Html/index.html"},{revision:"260ae570845b2729aaf847d0b52997b4",url:"./categories/Web教程/index.html"},{revision:"10f915a7792600da05e270bcb2c2fca5",url:"./categories/Web教程/JavaScript/index.html"},{revision:"6f5d4218aed31ffde4a168876d4ef99b",url:"./categories/Web教程/jQuery/index.html"},{revision:"0aa6e966eac91e5c0d9644286573968b",url:"./categories/Web教程/Nodejs/index.html"},{revision:"487918d6ddef9700f2824c0a6357a3b0",url:"./categories/Web教程/page/2/index.html"},{revision:"d8431a42c9e71f9c4d7c95737f8715fb",url:"./categories/Web教程/Vue/index.html"},{revision:"56625068de5e7170edda99c4a4de3dcf",url:"./categories/Web教程/webpack/index.html"},{revision:"7b9a39555e686714912232f36c87839c",url:"./categories/Web教程/网站/index.html"},{revision:"a4b1fc990e279597f6d7638c6f64c3cc",url:"./categories/Web教程/跨域/index.html"},{revision:"8059d48f0c274ef409edc4b55d97b23a",url:"./categories/动漫/index.html"},{revision:"90854285cb697bf6aff5c36775bd77e1",url:"./categories/教程/index.html"},{revision:"bd6bf8bc8b897f65bd83785ca85c4b3a",url:"./categories/数据库学习/index.html"},{revision:"cf56bf1ad03dd3a9bdc03ab6986e29b9",url:"./categories/数据库学习/MySQL/index.html"},{revision:"49d7a7a0e76022af1d7b4ccc1ec5a482",url:"./categories/电脑教程/index.html"},{revision:"5c2f25685e13cbb7fc0a99603fcffc7e",url:"./css/custom.css"},{revision:"e351ff494ab8e18b51853e32fafe3f4c",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"13dc5066e83d97b4846f2a18c161ebab",url:"./Gallery/anime/index.html"},{revision:"afcc9e8c9ecc259c6869b6299b5f7180",url:"./Gallery/index.html"},{revision:"5b56de7d7fecc63d8ec3383084ed5f74",url:"./Gallery/landscape/index.html"},{revision:"0a13bfe6b2671296778b163f81ed6190",url:"./game/arknights/index.html"},{revision:"06d26b174a795eb2b86307b6d78633c3",url:"./img/pwa/manifest.json"},{revision:"b3cbf6708ed65572daa7145d00a86ed2",url:"./index.html"},{revision:"125fa8cc0f50b559881e6b0be97b3db2",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"bb643bd9c2ac59f6ce2a1251b8014624",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"0176913a28754a766910352489a24a69",url:"./js/tw_cn.js"},{revision:"ed14620aa57998a9d3f887c1989f5365",url:"./js/utils.js"},{revision:"b432cdfed6b1358bfb10456d949d6732",url:"./js/zykj.js"},{revision:"c7f6a1b0b4846831faf62e9c39f31193",url:"./link/index.html"},{revision:"a1a5cbdea7dd3db6af0e1b34bf1406b6",url:"./message/index.html"},{revision:"0b6687401d0dac324e046bc7b6d32259",url:"./mikutap/index.html"},{revision:"24709d6ecb42fd82fdf3545382dd951f",url:"./music/index.html"},{revision:"fdfffe1b92c7fdf25720d842ba96af05",url:"./nav/index.html"},{revision:"19710c818620cab9fc7fc0ae632b55a5",url:"./page/2/index.html"},{revision:"4dd44d88c100ef0eb25c68025d1ef5f0",url:"./page/3/index.html"},{revision:"019e84941a510bb348f406089c71febc",url:"./posts/22686bb0/index.html"},{revision:"32537293cc7b5a8446ab1360559c90ae",url:"./posts/2c867817/index.html"},{revision:"cff23dc433487df8f184e4a0a9026db5",url:"./posts/413c71da/index.html"},{revision:"5a6b5fbb31f59b4a455a7d6446859744",url:"./posts/42ed6352/index.html"},{revision:"119b343eac8a009e1f4e7c08c13486e0",url:"./posts/4a869c3f/index.html"},{revision:"c349391ec842e5e102ccc5a49f24169d",url:"./posts/4b2dadbc/index.html"},{revision:"366ac47358d9b2a72be13c70f6d6bba2",url:"./posts/4e1c7631/index.html"},{revision:"802c2fbb10143f477d0d06a9b4e6742d",url:"./posts/5650a45b/index.html"},{revision:"d9c4b3aa6b21448277cdaca471b5d38c",url:"./posts/581025ac/index.html"},{revision:"cccf53f37cdca3535d4238f041724bd7",url:"./posts/5d018fb1/index.html"},{revision:"b90cf78fff8fa4ac3c9abbf9fc0d5908",url:"./posts/6536dfdf/index.html"},{revision:"fdcf077cdeda06bc2588342f3060a45c",url:"./posts/88130ada/index.html"},{revision:"4e8694ae33a72970d699aa2e1a0d27b7",url:"./posts/89755edc/index.html"},{revision:"4dfb146b77b020b908973d805c8a9651",url:"./posts/8cde864d/index.html"},{revision:"e1af99dea4883b5047fda2fe493d44ba",url:"./posts/906e6f9d/index.html"},{revision:"06cf7c6c118a2a886a4623ae419342d4",url:"./posts/9ca22a28/index.html"},{revision:"d05e8d7ee187e27b9eb98910648e4362",url:"./posts/a9e8a85d/index.html"},{revision:"cb332735fd8ae485c23b3655cf257c31",url:"./posts/acef0329/index.html"},{revision:"f55f416833b3533bab4bcfd16cd0fa97",url:"./posts/c747b178/index.html"},{revision:"527609777308c1c00960dd1220e6ea9d",url:"./posts/d0fdeff9/index.html"},{revision:"eead0b958e9b33d894809a927bb6344d",url:"./posts/d3a7443d/index.html"},{revision:"3197119b65309ea0eccac16259a7afa6",url:"./posts/d8fc8ff1/index.html"},{revision:"77becf76cb4701ff042443ad17bff29b",url:"./posts/e297feab/index.html"},{revision:"9177ca2e4b3c34a51a73484394172098",url:"./posts/e438c445/index.html"},{revision:"343ed2ab52cb0b8628842521fe851922",url:"./posts/e55bad60/index.html"},{revision:"819332949dee7e0cfae7b977708da721",url:"./posts/ed3da/index.html"},{revision:"362799439296147cb9d2474cfd17edd4",url:"./posts/efc9a028/index.html"},{revision:"72d0da6b7a6f729655777e9509d05dc5",url:"./posts/f12cbde5/index.html"},{revision:"79ff8419c93e92150ef5de3ff786475e",url:"./posts/f13afe2d/index.html"},{revision:"51ae0398497c786bbf519817585ccce5",url:"./posts/f9d8baf9/index.html"},{revision:"fdcdd14da308a9f1cc2106813f10ae54",url:"./shuoshuo/index.html"},{revision:"b0491f40c61aceaef1a75c2eaf90f353",url:"./tags/AJAX/index.html"},{revision:"60a945a583458b379d4581c94b176d71",url:"./tags/Android/index.html"},{revision:"44807a50ab6a2f7a8fb7acbf6b8c5cae",url:"./tags/Axios/index.html"},{revision:"1ae89227ffc00002489d3ccbfe07a8fc",url:"./tags/Butterfly/index.html"},{revision:"90e73a9a797c292e026b6d6beb8cc6bf",url:"./tags/Coding/index.html"},{revision:"314c3b513c238dd6ac77e369c328aba4",url:"./tags/CSS/index.html"},{revision:"fa61802be9df570b348c54e9a7bef860",url:"./tags/Docker/index.html"},{revision:"cd64287eca921c5385cd334a4f321dd7",url:"./tags/ElementUi/index.html"},{revision:"271fb4a76d3f9a976bf0ec63c60f55bb",url:"./tags/Git/index.html"},{revision:"31576d1c7b5b5a0552d496b03ccf1dfc",url:"./tags/Github/index.html"},{revision:"f24f2a11841d4a489069dce94eb93904",url:"./tags/Hexo/index.html"},{revision:"306b2b9762822bb3466173686585fabb",url:"./tags/Html/index.html"},{revision:"9629d8e2b7bc2d61d2ce483a72572cab",url:"./tags/index.html"},{revision:"5fd9baac4aa0182b19f64987c619689b",url:"./tags/JavaScript/index.html"},{revision:"146d0688b15590c2f56be458fcdb3977",url:"./tags/Jekyll/index.html"},{revision:"994993449ef9adce60783164f31cd5f2",url:"./tags/jQuery/index.html"},{revision:"77b5397038d929d4cd269107c13972e9",url:"./tags/MySQL/index.html"},{revision:"3f40751d2e7bd7167ba52c78b23365ad",url:"./tags/Nodejs/index.html"},{revision:"0b71b5f7a9e8c7d12e62aca680d59616",url:"./tags/Pr/index.html"},{revision:"bbadb98bc0e953ee949e9a05f259f889",url:"./tags/Ruby/index.html"},{revision:"1246056581ee7d64f8ab0995532df9f3",url:"./tags/SpringBoot/index.html"},{revision:"ebc6154d9ce87ad16988c56b13fcb65f",url:"./tags/Vue-Router/index.html"},{revision:"96f1ae440e13f75e54af83f575240169",url:"./tags/Vue/index.html"},{revision:"70af4cf264c3b1095d4d0e39e3976cd9",url:"./tags/Vuex/index.html"},{revision:"50bf81dfeb370dd66c56e05ae7377dbe",url:"./tags/webpack/index.html"},{revision:"733cff845a9d0393a53ed1e843a3ee07",url:"./tags/二次元/index.html"},{revision:"eab0e6f8bc1b2ebaed4d7bb27be2d047",url:"./tags/前端/index.html"},{revision:"337d044f87c88413c1d93b9eacf5e4e3",url:"./tags/前端/page/2/index.html"},{revision:"12527ebea137df55203187eb8a795eb8",url:"./tags/动漫/index.html"},{revision:"f6583c34c35f20cf578e6d1cabbef8db",url:"./tags/博客/index.html"},{revision:"3db2f4d8ab73c64baf73c247dadb5db4",url:"./tags/后端/index.html"},{revision:"d0eb6ff9206f80002fe8f227d79a0f11",url:"./tags/回忆/index.html"},{revision:"144904b1c9228b7fd61c014af68b4391",url:"./tags/域名/index.html"},{revision:"f1c600bb30e73ddbd68e3c23bf4f0f04",url:"./tags/学习/index.html"},{revision:"293563d9dbb4c4507fcad6fe60ac14ea",url:"./tags/教程/index.html"},{revision:"75fb141a384a1e54f0ae86aa3530cfa1",url:"./tags/电脑/index.html"},{revision:"5e8bc3ee905373ab4f33b57539ed330e",url:"./tags/网站/index.html"},{revision:"ce92f86c94aba359024b2bd5e46f6d0b",url:"./tags/美化/index.html"},{revision:"982307ce2db78f049a85679535436f56",url:"./tags/跨域/index.html"},{revision:"b6c6bd3cf83bbb6771e637cdd3c40d4f",url:"./tags/问题/index.html"},{revision:"6a38f66b64de9705b2bac378b466f94e",url:"./tags/高级/index.html"},{revision:"7713bebf98fdfa6db208384b3467d546",url:"./vercel.json"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();