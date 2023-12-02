'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ea33ff93e0c4d790ebf62786e0436e05",
".git/config": "23c555616605faed7fc4e92494a575f9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e0d60deef292d415eeec88fff665b89",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f7a635a33e11b9a336ef3437ff8bdd7",
".git/logs/refs/heads/master": "0f7a635a33e11b9a336ef3437ff8bdd7",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/89ed324b7deb4ef342796420c00363dd232190": "76f0593310af405a33e32eaaf61ec8a3",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0a/60ee8fd7db4304952c170cce998c04d9cd770c": "f85e3cba3cafba8063b8f4cbcab6c57d",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/13/94e0020de5d195ebcbffe15fcf61186478c330": "3fb1157c16c24583f53ffb39d2192bf4",
".git/objects/16/3e52e59f51e4a5ce0d390d41dedd7abe612beb": "b511f9a0b578ba56b2c07eee79022697",
".git/objects/1c/4befc11609e38f974315743b1116d925d7291b": "7c1802a22d0191000aaa7f2b159858b9",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/3122439bdde7666c712f78578d39647ebadc87": "c058c93d151123c99f2b213fabc6f2b8",
".git/objects/32/def6cd054c6ff0cddaa3432695f8f461580ee9": "c387bd80bc1a38c177af5f35cbdf4b76",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/9792dab1e1f75b70612cba12011228a7dbed82": "d0bd0eb4fd874b226bdc3220ca08826f",
".git/objects/3f/ea31fb1f64897ce7acd2b9623023bb01cc4d98": "1e16e8fc8098aee535ced0be2d32e767",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4f/ede2d19d4bdf19995dfa7284822dc9dadd38a3": "7b58bfc8250af3289f1d40c11c09a03f",
".git/objects/50/093f6304e3e2d4381bd1e30fbf0c6804ed93f4": "37300f80289aa97d0ed4cdc12bc2d7fb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/5f6fafef75dbfffd395c6fb78d7aea4494b789": "070e9dd48b3aa2a2c6b1b75696fd6fca",
".git/objects/58/a4f005deaf999e850cc04ffe1fb0fd1275976b": "02c1df2f8fa2858255245096c2a67f1b",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/eb3616a36386a34b3ab63e03fad8331dde6fb9": "16e75be0f65eacd4e174f7b7ca1da1fd",
".git/objects/61/4609c710a665642aecb0eb2ab40c201bde88f7": "aace3beb826d3992918c532e7319b968",
".git/objects/61/ce2bcea1c8216fcfd16a52b3450b133373fd67": "329fb88b1afe7d57c749b147c3d4bc19",
".git/objects/63/dc4188246f4824c441093ff746bcb1b631048b": "3ddef33f64ec3c1e4a29a8d37c6a7ecd",
".git/objects/67/42a5b8c74100b189fd1253908df882c6b408f5": "6aca31a2abc365a9bdfff785f24f6ecb",
".git/objects/68/3698e6631ba844710f29ae2e3c7f308a5affec": "21f1a08eaa15076f3cee90c85fa86296",
".git/objects/68/7fa1c7642b6bf8cedfdb9192b64a30d7f637d0": "4ae2a98aaf94d2ccc1578499a2be9040",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/d4156970cd7e18caaa258ff969b19b177bfd75": "c015902eb42bae55ea60b46bceba9acf",
".git/objects/72/155d579fa0889786681324ac1a94de524b590c": "86a50f5d6b3792f432453d547ffae981",
".git/objects/72/bb3cd264302ebbd2629266fa6cf022aab9f4a3": "abf45fcdf4180229140157f021b1c8f7",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/9e35886bc89799e071ee9c8dd5971400724345": "8b974962b8d476a5fbf08a7ba1304a99",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/77/6288c9dbe7b6f48a5a4b76a2d40c1938637ffc": "03dfa55f3a3fbc716e91d166d2555f6a",
".git/objects/78/9f9cca2845853728055b795121fdd0cbfc432f": "5e0bba7c9c3366d090698ac9e2fc5007",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/81/c52a784b4cb73d9dfca2d623dc3b67b89723ba": "99abf8129b09f1a8558542e1ec7a3158",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/4ff835abed6ea47c95879cdeabe6869e23d1e6": "8969bab2609310a093fe89aed714cd9f",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/8c/d5f33f3a04ae7cfa57ae66fb5b12e81efe10d9": "609858d7edd3dbd56d6e0e5490262632",
".git/objects/8f/ce34d18b2d3c8fc51f783b0f6a3c6416beba75": "dd52d83dc865624e7bbcb4781789a1d5",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9c/652f9dabfa0eff162fff6aa544bc42858ed570": "5cb9020b8b2bf8bfb910b7426209e977",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/9d/ace5fd09389392da89a06dc773472ba75ca202": "aedbe14c2f69a57b1bbc491fc69859e5",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/53bd491a7a7bbfd5a6b49eaba605609ce3e4d7": "da3c81877efd09b97e0cd793d0ecaa32",
".git/objects/a9/837f0c68bb96b8b0c9477ce36270b8568d2ee1": "14e79f42c6177750f1b31c91a814ec2a",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/b4/42f05c378cb320bb858327490e3aa4fed57188": "6df4e6524ec15e68942d54a81d0fe4c6",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/64797af33b8c218a01b273f0ae61181c9c9863": "44e7a23bdc81a00751818ca489fb2204",
".git/objects/c0/bd7650c0e67e35f786aded32dd0b84bf1c4479": "11c5e7087034794c245b33fe441b5fcc",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c6/576c7f294de2ea38565937975217936a61d320": "e2930b012e3cb8ccfe18df1f9f650520",
".git/objects/c6/e99947483479b07540eaf2e9746f906942a154": "a1d6e0076ba9f5a5ee214a7cafc34664",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/cb/d396276674ff47424bfefbef788a5dd56df352": "df334cad05066374ff2ebf9b55d8af58",
".git/objects/d2/bb98bd3280868246a6f8436f910605618fe5b5": "82caa1a47b26586bb1f53e4b1065262a",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/19f3af7e1ca6651a84a2cdd59b70dbe9e18564": "66dd3cc6d7711192ca2b1abd9692497d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/9ff8d94fee903630a824a566101f913bcc3e93": "dc96b5c90562d1aec75b439f6b7fd2ab",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/4022f8cf0aaef27ba2e50d1c8a0ca9eb655dda": "3de9613d50eb66030583246911df612b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a986a05031e80d3361843b052ce8e2dd2dc747": "c2ca4cf1f6a6dd4f68e5679ffc4629a5",
".git/objects/ef/e90a1f1b5b5c1212f0ad418267614ddd634294": "ceaa688e7cfae0e71129e6e7aa2d148f",
".git/objects/f1/a27f80c2d9786e39221a99984c1b15eb0c0b97": "808b3358de5e6dbe3a6c5c5911b49118",
".git/objects/f2/c9b4e922d8c29b6e722bcdfc497b86265b7750": "7d72f0e6ff2de18616011b88c2d78ded",
".git/objects/f8/25ea37b7a707d23a4780dc98189f4c366f52b2": "0a437e152e6176bd08a929ba20b62c12",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/7b52660ac86106fe9a316c02e1432382c85605": "eed595cf43fac2a1bd69da5d46fb0b4c",
".git/refs/heads/master": "b5669c9546557ca7c7b8c92c653ede6c",
"assets/AssetManifest.bin": "448a7874734f043864cc93f71cda41d4",
"assets/AssetManifest.json": "67efffc0aa2ddcc0daf724b31cc70547",
"assets/assets/3d/scene.glb": "0709996cd618fc305c03f1272e4a6319",
"assets/assets/gifs/dasboradgif.gif": "d5570cd3185084fe9aff843a4c07c791",
"assets/assets/gifs/dashboard_graphicsv3.gif": "c81a88ea26b82e58b9277cb4d4f36c99",
"assets/assets/gifs/DotsLines_24fps-1.gif": "cdf40172d6ce6bb0df5b41d82c949736",
"assets/assets/gifs/homepage.gif": "a26d24f78d123daad38d8efb4874533c",
"assets/assets/gifs/image_processing20200427-18549-s9yc06.gif": "51a6bf2305c07cc78ab03e2a4c8c8b9d",
"assets/assets/gifs/personal.gif": "9aa450b51d045684955dc7e0ceb3cd09",
"assets/assets/gifs/techbg.gif": "c9aafbdf3033f43b20ebb8c208032454",
"assets/assets/images/aboutmebgimg.jpg": "b77d62b73a3bbea187ed45e234d6de05",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/bluetexture.png": "2a6f6ad03f9f6cef525bdad1485d67dd",
"assets/assets/images/bluetexture2.png": "56c160d8cdf55a0e5286c296d39ad148",
"assets/assets/images/Brinovison.PNG": "8f02cbfc8cd138904ccf40d54cb6eb36",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/kk-removebg-preview.png": "d396bea277863d8e6968754f14e14228",
"assets/assets/images/mypic.jpeg": "1ecd9bb37e5a749df58ae181cfb01d67",
"assets/assets/images/nptel.PNG": "0231515c25ede2e039cd017f04898b5b",
"assets/assets/images/resumebgimg%2520(2).jpg": "7c3f74792e9508446b55e81aad8fc609",
"assets/assets/images/resumebgimg.jpg": "cd0bffca96cca80705b5f0e3aac559b6",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/assets/pdfs/Resume_s.pdf": "b077d7458a7662aa5067b0f58afde4c2",
"assets/assets/riv/3293-6929-spring-demo.riv": "d95adfefa25df25c34f6d9f5cb4ee9e0",
"assets/assets/riv/autronot.riv": "b0663435de371a7bce0b0231add5f583",
"assets/assets/riv/pumpking-army.riv": "90f8f6fb9ddff2155eddf39eef76b615",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a5b61382dd4bc2bc4ec0e70f666cd94b",
"assets/NOTICES": "4f390ff37075e9d991c0ee914ba80261",
"assets/packages/babylonjs_viewer/assets/viewer/babylon.viewer.min.js": "3453103262a6bfe68876db183953dd60",
"assets/packages/babylonjs_viewer/assets/viewer/bg_nx.jpg": "2a52b2671df5349d3d2ed77aeb549a7f",
"assets/packages/babylonjs_viewer/assets/viewer/template.html": "4e6408c82d0b48b2b3825e00ab00d4a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "4226392bee9372f20a688343e51e7b54",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "d396bea277863d8e6968754f14e14228",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "82f7f28bc81b44f57f3a1c147102dfcc",
"/": "82f7f28bc81b44f57f3a1c147102dfcc",
"main.dart.js": "71c20fee32f8455cb4fae8c1c1a404ba",
"manifest.json": "3f08b96f75242c9eb3ccebfe1655bbcd",
"version.json": "dc8bcd9af1297849b5ea9effe1accbec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
