'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2fcc34e06c482ab8294ca98cc7a26fe3",
"version.json": "5d034be4203a1bb621b5a30a9f5979c9",
"index.html": "22dbd901d5c3e11b6a49ba8fa991a092",
"/": "22dbd901d5c3e11b6a49ba8fa991a092",
"main.dart.js": "e0f4d94911b339d0e616759581d220c2",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "86df03065b4b9015a56e13c9425e939b",
".git/config": "3fca7a2e9ece6ded360c4b3a4eae30af",
".git/objects/3e/30e31d057f44edd519700a307f6357345aa586": "75f2d41cb4f97f430d0a9c072b9a85fd",
".git/objects/57/a6867a10838b6b6e0d2a3dd79628885a816eef": "aa3e4c231c9bc7514d4cf16891cc5579",
".git/objects/3b/51391cdef970607e4c08b66fd62051830ca524": "c33f6071c1946bb26adaa8ef35b5d55d",
".git/objects/3b/de14a735fda7fc8940e3c4b1a5d786f1ecbec8": "a0cfb32dfe8a6ecebf25929a75c68ef4",
".git/objects/03/14f96e6c734cb8bffba6d0903b598ab01957f7": "b6bd9a9588ffef4a53616b3e5a5500dd",
".git/objects/9b/5b7801b34f440aba1e1da33f09e82bc21582aa": "04d50abff731b4e0341c0c953822bfc9",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "7fef652fbe034911f76c4da9e817e225",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "5f22e4867814a2022aa2a916bbf3efef",
".git/objects/35/2a1b884a51b38d88187c22e956aa0ceb79a116": "f73f1ecb31f28a8025f2dc80f0518583",
".git/objects/69/14ffd78c5e5c5bf3600a492de666db0b78317d": "1397cd5497b559638b7d9c3c581bc8ab",
".git/objects/56/07c60209c04d2b3df3a11ae3a3041efe67da78": "c565717835fcdc761750492ccad904f6",
".git/objects/0e/3abe9e30f21bfca162e1f0c8cac9f90f398f42": "89141d209a2ae606d582182a6fc22ce3",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/02/efd973a4b91eb098d8af23717472c746cec812": "ff92fd4335d5ac06af6e7ab56313d963",
".git/objects/d7/f46f4e809fbe20c47ccf187406b7c7cdce8b62": "d8a8ee90aaee4a26971acf9fa0e33211",
".git/objects/be/e6051d1d3acd5f5c87dd343458ac0a4c2eeb42": "6965ce578b406bc7df8b466fa921d984",
".git/objects/bd/de1f4394b3a1263adc35aa028fd47ba63415c2": "a11a97bca639c802664d27bf213bc1f7",
".git/objects/d6/b179a3e207dcaa88835aa2e10485a46118ff2f": "5c501948b40a9720ceb1afa86e023d00",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/bc/cc3ace90db43aef6e1440931bd1d5e04f6a29d": "d07405660190cdd7365b2d9d3b20c560",
".git/objects/bc/57e19d469cfa07925f552a88b965a429ba265c": "a808076788a2edebcc48193e03f44b2f",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "c887a57ff0eafa2df6b6f3fb5d630526",
".git/objects/e2/a86540a54fa5ebe18877ebc9484339f96bd8c0": "f18097ec1db1c5a8d47d8a18b6e1514c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/e3/a3d9a18fb38623a4d19e5c35a0d49d01643f81": "fbc04c0a4d6ca23a59c2185a4c115759",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "b8a36c8cfabd566efa7afcbb37489693",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "8758ec0601c68cfa14e5aa0bd1db956b",
".git/objects/fb/0c9a64213a6c28853e99c03f46d9f386a4f861": "d8c44cda55ad34e93641ec6eccd6dd14",
".git/objects/ed/d5d67012362b59950c854d8a173eb5246a89eb": "1ccc4a8338e431ec59279f9d418a2585",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "9c41d2761da53894e11f717877b1707a",
".git/objects/c1/844262a3d2b95bc6686d9d7bf5af3872602de0": "905fc4f36d9c207c6a6e96a4e1bb26be",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "1eaf6fbe076294c3f0daf90d55e4254a",
".git/objects/4b/4e1a227b66f8e509d3884fe148230e8898ea5a": "4d7282fc508b233181f41530689aa4c7",
".git/objects/7d/eeac4cba1030e2fe01584a0c0af6190ea6a964": "1dbeb4a7f76491309c799c59037a50a0",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "fea60a4487346b57a5566c176c3edf3d",
".git/objects/89/42334303a07700bc50543b68d9fe0f0049fde2": "e94cf32b65a26f910e4fbd2eb230da2c",
".git/objects/87/11b4767cae234cbbbc37317f98030979f8bfed": "4c36fe212e895024e81dd0b4dda7f9a8",
".git/objects/80/da6834c61cebe210d2a386b7e27a8de317cab2": "5037162e3dc040f9abee4d7b9190a5d4",
".git/objects/80/8cb9d9966e11f94efca333a953380a9c6f2bef": "f069c5c6f0dcf31adecd6574feb949ae",
".git/objects/1a/dd27262e518791b8d3d2c81fac4a9a08742c66": "c2f7742e3426efd86aa1081421dba998",
".git/objects/17/2d808a994a5008e185d1d5ae66d382e99d376e": "0af2b323f2ba8140af165e446a17d09b",
".git/objects/8f/54e8dc332f9c46408de1b85121d7bcbdad77c8": "3149767497fd8bf4acf6608bc2d3cf57",
".git/objects/8f/7dfce195ab88faf6d99514881134d526ace6a2": "77ecb3732c39615411b5612078a211df",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/16184a3d6bdcb21d664dac231070cea5e54972": "5082a4293b9f36601fdd9f705e2d11a3",
".git/objects/19/35ca25a2b93b50b82c8b25bd5404d3cbb565b5": "cafc0bb9bda793b3c88856380ef347d1",
".git/objects/21/178a8021bcf7d6746df83ac498007968d06c40": "8fde83705e9e6cb8edc2ebf46d5c6098",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "889bc03fb6a15e508732478b9100196e",
".git/objects/4d/e657016f790a8274c99949ac80d95c85f6351b": "53ac91234b2da358aed81875accda679",
".git/objects/4d/123e44d6b4e8ed1aef858aeda7919b1873eea2": "f8f874fb9b8faa3dc03fe9cc6576ca73",
".git/objects/75/c3122cdad79eb222b0ff7ee14b6ee8422ba033": "6a60142814802e84e40822c2f8706254",
".git/objects/81/e4054d0fc590625aaefeeef0ec08e7f680c9fa": "3146916bf050d2d351066410a543aaf2",
".git/objects/2f/05f4f91b9e97f4c6a4d9a9ba313373f8a7a92d": "4bf1f1dcefac6a6963fc02d9d8fc9d37",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/76da156aa1c7cbeb6c41e65c210737653355f9": "6c96961716f7c3626f7203cdaff641b9",
".git/objects/9f/59449671d1f6eb70c6f339dce5a9903342f2d9": "a43dd36951a9ed6aba143d28224fe393",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/07/8370890de71e83d43d94c851371fe7c1cc5a75": "94f7a164b4fb6b0dde95a9f0f2a8aa5f",
".git/objects/38/a97308355190aaa0d559a100c714ea6300e0c4": "36f17e016cdfacd4ae644de3e95cfb63",
".git/objects/00/1463894509d3b373e5235f9d5865ec84c04abf": "366acb6cc35f47f1f8bffa32980c63b3",
".git/objects/00/182c9794a6f94e1213df81d7d1fcdfcba4a617": "99722b3a2877c6b9d4b6022ca8be4db9",
".git/objects/5c/71e6a077b906539fb49e6b7de6a3040f716e9b": "cc7300656c2cb9d2b5331942b919eb0f",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "673571ee0bcce7e10d7ca6c90f04f5d6",
".git/objects/5b/090db667ad82bc8581993e895a9b23fcb7ebdd": "e64b536fa72ef5acddcd2e1674de7189",
".git/objects/37/2f7170f186bf24ee080c4162d29d9af9349157": "4653d3d507c44eb1c4bd547bf15b3ded",
".git/objects/99/f965b45a0efda1dca495f52cf74c2dcb86589b": "ee7c743823015b5b5fd205c30eca0d87",
".git/objects/55/721c9897c282a753eac9c34d7ce52aac950e37": "7d868ca90e88a67dded16b8a380948c1",
".git/objects/0f/e538e91eea02ceee9770d946733542fa0554d5": "18862beff44f7fc3c4149282503e4ad6",
".git/objects/90/806fbb53bd21a591e3bbfd478dd2ee08c63b32": "21018b1d63d04708aa7e02776a5d4726",
".git/objects/90/d53d211857f41b34b20f83142ed35e31f788f6": "31ddffd6a3ad3b9a15e51ea687111c62",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/a0/269ddc288e0094e04b1c0aa4172ad708504603": "d954386fe932f2eac7d1209ecee499ec",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b11768e6a8ca60bad07211a36372d59f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/de/6dcfe8e3c971ece3b0fb1e24cf81f10c3c5f37": "a99aaef086421bd264bc2f73f93deab3",
".git/objects/a6/b68b8f48ad4a46f4c9c45d6e4148fa85fec1cc": "a928aaafbdf7bc2710df714f343d3be3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/a1/2e67a9680a176488810bbc54f003bda4528b61": "a3484c7c45ff85e855337c8e04e83d87",
".git/objects/c3/dbf52d4bc743cfd512793beb5538a476751569": "34f229cba67d6ef5e16feb27e83fa254",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "34d9bb262a1db8360a1db06f4cea5edc",
".git/objects/cc/6910581a4f4baad5c3dc882b2e099c27e7141c": "407223d2fafef30b5b5d4153d8ed6ff7",
".git/objects/f6/ceeff4333b1364bd0dd566cc5024b2b79e0236": "e635ac61db24d0cb305610bbbbab7b75",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/e9/45caf93f472787709f63418f696b5162e6dbf9": "38588a10493bf1caf58af304a9e4c37c",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "e2ffa18f373ce7819da890cc95823ba8",
".git/objects/f8/5676ab2ebfb37ebc01668d3c12afd60e7bf41f": "7829dc338fda71bdb5f1c65f17225d99",
".git/objects/f8/7c0f1125f3339df690872d0cdfde954c03c8a7": "f08ad28d041a4aad8750b3f78398b6b5",
".git/objects/e0/1aeb407803c6e677bab4f260dc663404857a0e": "ce4ba6bb2353eb589b136fa9aaa67bf0",
".git/objects/41/8369cb42b8436079bf50c55c4f6a87d7fd74b8": "2b04d0f8a280ec75e203c512eaed2e0a",
".git/objects/77/4eb46f2823641ea4201f36339d1cbe02d71cbe": "b522a8dea1a4a0638fb4c1a6bcad1eb0",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "cfcbae98ed59ea0e225d141b40bcf512",
".git/objects/12/548ab05d4a73bda87e91794c21e440382d95ee": "aa654d703195a843646c48e2661f14c4",
".git/objects/85/f2caeff2f016073696b86d632530e78edb5292": "025238dcb9eccf5d9abf752515e0549f",
".git/objects/71/1c2b4a9f7f511256886a24c636a5b4378ae580": "03449fec04401b7f7b81caf354b913c5",
".git/objects/71/ff57add9ef5c499dfa357db280695dd5e89dae": "fe4dc5d74eb16f3843da1453951aab81",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "b8b12df8c0ad769ff9d7a997209a15da",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/13/1e4db25e7d9976fbda02b5461c24aa907e06af": "31822abeb0d3cbb4dd72beb970085256",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "2e52b2703dcf92f5b2f87b4661347cc3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6300c2795546a4b206455ef8b5c0dfae",
".git/logs/refs/heads/main": "ed29f779612396e88a615036fd079a7d",
".git/logs/refs/remotes/origin/main": "b41a551928f9faf92bf54dc11dd3d10f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b48e9475c9d2271e8564f9f2fe3d5d5d",
".git/refs/remotes/origin/main": "b48e9475c9d2271e8564f9f2fe3d5d5d",
".git/index": "ad29c7ff8b623a013a5ef3d696e38948",
".git/COMMIT_EDITMSG": "5cff335ecbc40ea27fb9fd588eaecff1",
"assets/AssetManifest.json": "345291bee14db6678d263caf832022e3",
"assets/assert/life/4.png": "eca71ccb51176efe4c3213e119e4f6bf",
"assets/assert/life/3.png": "2253efc037bf1111e5a718790357feda",
"assets/assert/life/1.jpg": "2486862e7497238462a43126dab06563",
"assets/assert/top_images/IMG_0076.JPG": "94956227c5aedf6dabee508bda27fb4f",
"assets/assert/top_images/IMG_0056.jpg": "e10d63d2390df939a0e3d9e2a0a3c7e8",
"assets/assert/top_images/IMG_0057.jpg": "44309400db0923f263bea1d49a910695",
"assets/assert/top_images/IMG_0052.JPG": "78e58a7c4b2ba3d055b2011afdc2deae",
"assets/assert/entro8/Group%2520317.png": "df2a9beccd71af0d2e365689aca13303",
"assets/assert/entro8/Group%2520315.png": "d28f1a079471298cfed5bdbaf0675a21",
"assets/assert/entro8/Frame%252017.png": "e05d3f6ed4d5037506f6bb2b4564999e",
"assets/assert/entro8/logo/512x512.png": "216be813e36d9a5c3daf56fb89a51bab",
"assets/assert/entro8/Group%2520320.png": "3f1ed56bbe11506477832e5eb9f2a1f7",
"assets/assert/entro8/Group%2520321.png": "68dd806904ff85434a629e62eb467c8d",
"assets/assert/entro8/Group%2520319.png": "d1b9ec119112531653fbff73ef1f2c7f",
"assets/assert/entro8/Group%2520318.png": "34462ef4b17355de70ffe020ecbcbae7",
"assets/assert/flutter/8.png": "2bfd9164083cbb3096893ec384a7affd",
"assets/assert/flutter/9.png": "4035d5992fe27ef7c0debc0717c7c456",
"assets/assert/flutter/14.png": "ed7712ee8e3ed9c1c8212701f0f68ca9",
"assets/assert/flutter/15.png": "cb066478ff231ccc380b242f292a9871",
"assets/assert/flutter/17.png": "9248e9596620aeae95189cf9103307a2",
"assets/assert/flutter/16.png": "da0a7797d7dded0f042e89769d19a84c",
"assets/assert/flutter/12.png": "1fd25d404ae6cc4e28930ba566d7203e",
"assets/assert/flutter/13.png": "74b1f8026bc9e5f0835cb45939a6f8df",
"assets/assert/flutter/11.png": "5126a27968f17b83e9b3544295b1c314",
"assets/assert/flutter/10.png": "a1f644374674c1198f4d02ebf1348f12",
"assets/assert/flutter/4.png": "4e55a42eea481005c3437d6837beb377",
"assets/assert/flutter/5.png": "f5222cfd49a7ee578cf06f0fd4a665f7",
"assets/assert/flutter/7.png": "71218e3dfb246afa7c917d509040406d",
"assets/assert/flutter/6.png": "3f87c74f27f837134ce59768f807c86c",
"assets/assert/flutter/2.png": "68dd806904ff85434a629e62eb467c8d",
"assets/assert/flutter/3.png": "480cdd321c536b8bc7a50b99f68dcfaa",
"assets/assert/flutter/1.png": "28d8aee38f71e85dafa2ca9a977eb712",
"assets/assert/figma/8.png": "ba1f3603ecca88ce92e7ebf257754eb8",
"assets/assert/figma/4.png": "1c759d8910866b1717c16ea72f2b580b",
"assets/assert/figma/5.png": "ba618e44b99fce109353b3eecf8339f9",
"assets/assert/figma/7.png": "6ede38831207080bcd133ba50551ae76",
"assets/assert/figma/6.png": "0315273a3fc3a73b9ba47752f6759d88",
"assets/assert/figma/2.png": "65e7ddbe903fa17346f2915a83a277d2",
"assets/assert/figma/3.png": "3f1ed56bbe11506477832e5eb9f2a1f7",
"assets/assert/figma/1.png": "3522da04aaddb28fa7dae4350163cfcc",
"assets/assert/font/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assert/font/PTSerif-Regular.ttf": "30e6f341123ce95115a85122d239f8a0",
"assets/NOTICES": "5d6c890832186588b6d0fe6479aed4b0",
"assets/FontManifest.json": "18773dc74bcd1b850bed11aa77b4c80c",
"assets/AssetManifest.bin.json": "00cec84f7267caf251fe552121a98662",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "fd932bb7fbdd29de906fdf0b190f9956",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "a98a1b7aaa357f7d8406aa4bb627a3f6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b38a3ccb2b2ceb563ecd98283eea5bc6",
"assets/fonts/MaterialIcons-Regular.otf": "693a376fe70e39982e0875391a305e4c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
