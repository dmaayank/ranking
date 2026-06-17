// ==========================================
// 1. Character Pools
// ==========================================
const the100List = [
    { name: "Clarke Griffin", image: "https://i.pinimg.com/736x/d4/a2/8a/d4a28a2756d212ce35622a0de0883138.jpg" },
    { name: "Lexa", image: "https://i.pinimg.com/1200x/1e/9b/a5/1e9ba5411c2ea2b3f9560e6370a8e23f.jpg" },
    { name: "Bellamy Blake", image: "https://i.pinimg.com/1200x/74/23/f9/7423f9b6fbef715f7ebfde84017b9f4f.jpg" },
    { name: "John Murphy", image: "https://i.pinimg.com/1200x/3d/8a/de/3d8ade179ec58cc5dbce2de91096fd69.jpg" },
    { name: "Raven Reyes", image: "https://i.pinimg.com/736x/c0/e6/38/c0e63863482b9f3b36738ed8f74765b8.jpg" },
    { name: "Octavia Blake", image: "https://i.pinimg.com/736x/84/a6/6e/84a66e71e1c1e29e19db12c78a0ddc82.jpg" },
    { name: "A.L.I.E.", image: "https://i.pinimg.com/1200x/fc/7e/9d/fc7e9dc0d09ab00229fd7135fed780e8.jpg" },
    { name: "Abby Griffin", image: "https://i.pinimg.com/1200x/aa/7b/68/aa7b684055cc5a771d66489c7eb97d85.jpg" },
    { name: "Aden", image: "https://i.pinimg.com/736x/9d/9c/48/9d9c48671d19f58b662d481748905f8d.jpg" },
    { name: "Anders", image: "assets/images/anders.jpg" },
    { name: "Anya", image: "https://i.pinimg.com/1200x/d3/7a/b6/d37ab63525ecf049ef78d193886dc950.jpg" },
    { name: "Atom", image: "https://i.pinimg.com/736x/60/79/3f/60793f3f96f5b55ee10cab13734e4f33.jpg" },
    { name: "Aurora Blake", image: "https://i.pinimg.com/736x/91/fd/39/91fd39b4c111c1131d5427c1636a13ad.jpg" },
    { name: "Becca Franco", image: "https://i.pinimg.com/736x/66/90/2a/66902a10a958be0aac8706bbb44291dd.jpg" },
    { name: "Bill Cadogan", image: "https://i.pinimg.com/736x/29/f7/0e/29f70ecb325acdd115f2cd74533450c7.jpg" },
    { name: "Bryan", image: "https://i.pinimg.com/736x/1b/18/36/1b18360a0d56414a5b4b2cacd6ae988a.jpg" },
    { name: "Cage Wallace", image: "https://i.pinimg.com/736x/c1/be/fe/c1befe314801781771123c6938b2c97b.jpg" },
    { name: "Callie Cadogan", image: "https://i.pinimg.com/1200x/8b/b8/ab/8bb8ab53f924be328d9ab066e254689a.jpg" },
    { name: "Carl Emerson", image: "assets/images/emerson.jpg" },
    { name: "Charles Pike", image: "https://i.pinimg.com/736x/f5/8a/d0/f58ad04f343a85fbd7eea8df014edb50.jpg" },
    { name: "Charlotte", image: "https://i.pinimg.com/736x/0b/0e/dd/0b0edd97c8448114737c882873125d19.jpg" },
    { name: "Charmaine Diyoza", image: "https://i.pinimg.com/736x/71/81/aa/7181aa4884e09f1a4b55881351e2b52c.jpg" },
    { name: "Dante Wallace", image: "https://i.pinimg.com/1200x/0e/c4/66/0ec4660210e63be574eb9c9360576231.jpg" },
    { name: "David Miller", image: "assets/images/david_miller.jpg" },
    { name: "Delilah Workman", image: "assets/images/delilah.jpg" },
    { name: "Diana Sydney", image: "assets/images/diana_sydney.jpg" },
    { name: "Echo", image: "https://i.pinimg.com/736x/73/2c/89/732c89cf29cf7154f2766ee6477ede90.jpg" },
    { name: "Emori", image: "https://i.pinimg.com/736x/2e/27/50/2e2750c3bd232edb54e9390d4137d409.jpg" },
    { name: "Eric Jackson", image: "https://i.pinimg.com/1200x/e6/82/74/e682741e5bf8172650ee9bcaec030682.jpg" },
    { name: "Finn Collins", image: "https://i.pinimg.com/736x/e1/8a/4f/e18a4f18ca1d1dcfd9d17a7f8757d67b.jpg" },
    { name: "Fox", image: "assets/images/fox.jpg" },
    { name: "Gabriel Santiago", image: "https://i.pinimg.com/1200x/7e/52/df/7e52df21693ab24c47f238fe83287f3a.jpg" },
    { name: "Gaia", image: "https://i.pinimg.com/736x/ef/08/11/ef0811f32359d247e321ae90dbb0ad32.jpg" },
    { name: "Gina Martin", image: "https://i.pinimg.com/736x/af/0b/0e/af0b0e9c8be7eaa3d42452a0fafe9a25.jpg" },
    { name: "Hannah Green", image: "assets/images/hannah.jpg" },
    { name: "Harper McIntyre", image: "https://i.pinimg.com/736x/9a/c7/b8/9ac7b818070f8ed6669a6ff9f78e8f29.jpg" },
    { name: "Hope Diyoza", image: "https://i.pinimg.com/736x/6d/d9/25/6dd925c7ab4fae61753985c44b4dc862.jpg" },
    { name: "Ilian", image: "https://i.pinimg.com/736x/1a/2a/51/1a2a51d28f1facf50d4472f0618843b5.jpg" },
    { name: "Indra", image: "https://i.pinimg.com/1200x/4a/60/8a/4a608a4681542205fd05f21de0d75159.jpg" },
    { name: "Jacapo Sinclair", image: "https://i.pinimg.com/736x/4e/f0/1d/4ef01d315030f906693b1b6066a13593.jpg" },
    { name: "Jake Griffin", image: "assets/images/jake-griffin.jpg" },
    { name: "Jasper Jordan", image: "https://i.pinimg.com/736x/53/da/db/53dadbdc27f9a4044bbc85b229f9735b.jpg" },
    { name: "Jordan Green", image: "https://i.pinimg.com/1200x/51/6a/72/516a728466d37376a24470bb01a07512.jpg" },
    { name: "Josephine Lightbourne", image: "https://i.pinimg.com/736x/16/50/08/165008b21d6c07bf9905b7787e1666e6.jpg" },
    { name: "Kara Cooper", image: "assets/images/cooper.jpg" },
    { name: "Kyle Wick", image: "assets/images/wick.jpg" },
    { name: "Levitt", image: "https://i.pinimg.com/736x/42/71/84/427184415b73e26965b3b0092d4edd51.jpg" },
    { name: "Lincoln", image: "https://i.pinimg.com/1200x/b4/93/d3/b493d3342b78637ccefe27da7a8d9bf9.jpg" },
    { name: "Lorelei Tsing", image: "assets/images/tsing.jpg" },
    { name: "Luna", image: "https://i.pinimg.com/736x/e7/75/31/e775310db2ca7c704987a38caf204508.jpg" },
    { name: "Madi Griffin", image: "https://i.pinimg.com/736x/3b/ac/2f/3bac2ff303239e566f758d434e3552cd.jpg" },
    { name: "Major Byrne", image: "assets/images/byrne.jpg" },
    { name: "Marcus Kane", image: "https://i.pinimg.com/736x/7e/f1/15/7ef115f1d8bf9b8402824c20aa455f6b.jpg" },
    { name: "Maya Vie", image: "https://i.pinimg.com/736x/cc/bb/f5/ccbbf5aa35177edc397849dd900ab6e9.jpg" },
    { name: "Miles Shaw", image: "https://i.pinimg.com/1200x/e0/5d/14/e05d141b37ef405f2da8ffaf15a8e427.jpg" },
    { name: "Monty Green", image: "https://i.pinimg.com/736x/c3/76/06/c37606348a40182a3e2f0b0139639e97.jpg" },
    { name: "Nathan Miller", image: "https://i.pinimg.com/1200x/d7/e7/1e/d7e71e326384e67e7b42207e0596a144.jpg" },
    { name: "Queen Nia", image: "assets/images/nia.png" },
    { name: "Niylah", image: "https://i.pinimg.com/736x/b7/9d/fe/b79dfe09393dfd89da5ff0196982fdaa.jpg" },
    { name: "Ontari", image: "https://i.pinimg.com/736x/15/7f/ea/157fea0b59b060394ae84270a00265b2.jpg" },
    { name: "Paxton McCreary", image: "https://i.pinimg.com/736x/8c/5e/84/8c5e843d529ec4f9b7c34ba27fa11ef6.jpg" },
    { name: "Roan", image: "https://i.pinimg.com/1200x/d3/1e/4c/d31e4c58b53bc11f288ac38c2716dab4.jpg" },
    { name: "Russell Lightbourne", image: "https://i.pinimg.com/1200x/04/0a/2b/040a2b741393cf7f812142da7e14d2f7.jpg" },
    { name: "Sheidheda", image: "https://i.pinimg.com/1200x/a1/75/96/a17596cc89a02dab3f52053ee80151c9.jpg" },
    { name: "Simone Lightbourne", image: "https://i.pinimg.com/736x/5d/35/98/5d3598d6724cd4aa85f488d8f87240fe.jpg" },
    { name: "Theonious Jaha", image: "https://i.pinimg.com/736x/f4/38/64/f43864ba17d01f1633005fdf87969025.jpg" },
    { name: "Titus", image: "https://i.pinimg.com/1200x/de/85/5f/de855fc9fbc896661a4671f65975e6a3.jpg" },
    { name: "Wells Jaha", image: "https://i.pinimg.com/736x/9e/f0/1f/9ef01f2b1280cf4812be7706586d9085.jpg" },
    { name: "Zoe Monroe", image: "assets/images/monroe.jpg" },
    { name: "Ethan Hardy", image: "assets/images/ethan.jpg" },
    { name: "Geoff Hardy", image: "assets/images/geoff.jpg" },
    { name: "Gustus", image: "https://i.pinimg.com/736x/ce/74/8f/ce748f9bbc6d294642e14ee8763812d7.jpg" },
    { name: "Hatch", image: "assets/images/hatch.jpg" },
    { name: "Luca", image: "assets/images/luca.jpg" },
    { name: "Michael Vinson", image: "assets/images/vinson.jpg" },
    { name: "Nikki", image: "https://i.pinimg.com/736x/11/59/9a/11599a888f2ff338abd95b696b72c21b.jpg" },
    { name: "Nyko", image: "https://i.pinimg.com/1200x/9b/20/c4/9b20c4d4da10e8b8bb23a66965e292e6.jpg" },
    { name: "Orlando", image: "assets/images/orlando.jpg" },
    { name: "Picasso", image: "assets/images/picasso.jpg" },
    { name: "Riley", image: "assets/images/riley.jpg" },
    { name: "Shumway", image: "assets/images/shumway.jpg" },
    { name: "Dax", image: "assets/images/dax.jpg" },
    { name: "Doucette", image: "assets/images/doucette.jpg" },
    { name: "Macallan", image: "https://i.pinimg.com/736x/97/78/b1/9778b11102d617257082f98111ecd3d7.jpg" },
    { name: "Sterling", image: "assets/images/sterling.jpg" },
    { name: "Nelson", image: "assets/images/nelson.jpg" },
    { name: "Dev", image: "https://i.pinimg.com/736x/7c/16/e6/7c16e6958e2385a205cd8a79e38469ed.jpg" },
    { name: "Cece Cartwig", image: "assets/images/cece.jpg" },
    { name: "Cillian", image: "assets/images/cillian.jpg" },
    { name: "Ankara", image: "assets/images/ankara.jpg" },
    { name: "Blythe Ann", image: "assets/images/blythe_ann.jpg" },
    { name: "Jade", image: "assets/images/jade.jpg" },
    { name: "Priya Desai", image: "assets/images/priya.jpg" },
    { name: "Ryker Desai", image: "assets/images/ryker.jpg" },
    { name: "Zoran", image: "https://i.pinimg.com/736x/cc/48/a6/cc48a656a173cc2e2e8c0c3543eaf048.jpg" },
    { name: "Connor", image: "assets/images/connor.jpg" },
    { name: "Sienna", image: "assets/images/sienna.jpg" },
    { name: "Kaylee Lee", image: "assets/images/kaylee.jpg" },
    { name: "Reese Cadogan", image: "assets/images/reese.jpg" },
    { name: "Jae", image: "assets/images/jae.jpg" }
];

const starWarsList = [
    { name: "Luke Skywalker", image: "https://i.pinimg.com/1200x/2b/eb/eb/2bebebe47d9a7e0d4af6bdda170f42d2.jpg" },
    { name: "Darth Vader/Anakin Skywalker", image: "https://i.pinimg.com/736x/a7/90/7f/a7907f8339dcf7c0cd97973f2c52d701.jpg" },
    { name: "Leia Organa", image: "https://i.pinimg.com/1200x/5c/1e/3b/5c1e3b38f574176f744d9cccf8d480ab.jpg" },
    { name: "Han Solo", image: "https://i.pinimg.com/736x/c4/e2/fa/c4e2fa68b6e45efbcc15d1aa3dd6cf7c.jpg" },
    { name: "Shin Hati", image: "https://i.pinimg.com/736x/7a/88/01/7a8801f1b80924461fc81c2999fc0762.jpg" },
    { name: "Obi-Wan Kenobi", image: "https://i.pinimg.com/736x/63/a0/5d/63a05db25c9ac013250617d18139031d.jpg" },
    { name: "Chewbacca", image: "https://i.pinimg.com/1200x/e5/d6/9b/e5d69b067a902d30c01559310762225d.jpg" },
    { name: "R2-D2", image: "https://i.pinimg.com/736x/4b/12/6b/4b126bd54bbb192737d7e3b9e5790d4d.jpg" },
    { name: "C-3PO", image: "https://i.pinimg.com/1200x/cc/16/47/cc164794b21f38af8a8381cb0dc5ad06.jpg" },
    { name: "Yoda", image: "https://i.pinimg.com/1200x/6d/3b/ed/6d3bed0c3b27db4746bd4f2a115af806.jpg" },
    { name: "Emperor Palpatine", image: "https://i.pinimg.com/736x/9d/dd/8e/9ddd8eb22f88826fffd90684eb47b250.jpg" },
    { name: "Lando Calrissian", image: "https://i.pinimg.com/736x/9e/79/0a/9e790a9b94350bd0e39889b74a122f30.jpg" },
    { name: "Boba Fett", image: "https://i.pinimg.com/1200x/77/38/bc/7738bc7186bbf6a7642a3ff4dae1bd00.jpg" },
    { name: "Qui-Gon Jinn", image: "https://i.pinimg.com/736x/fd/1b/24/fd1b2454996d0adc9b33fb49bf5e8a42.jpg" },
    { name: "Pong Krell", image: "https://i.pinimg.com/736x/1e/fd/23/1efd2327cf52ebf3c580aa83f65cd6f7.jpg" },
    { name: "Darth Maul", image: "https://i.pinimg.com/736x/ed/41/a8/ed41a8dc61a5c78dabc60c575d5fa5a9.jpg" },
    { name: "Padmé Amidala", image: "https://i.pinimg.com/736x/0f/7c/db/0f7cdb05d87bd9ec8fbd613efc6ca3e7.jpg" },
    { name: "Mace Windu", image: "https://i.pinimg.com/736x/91/a1/b7/91a1b7bff18592cbb96a8f6dfce4a3a3.jpg" },
    { name: "Count Dooku", image: "https://i.pinimg.com/1200x/08/c5/a7/08c5a79e72e51c8f526cd3e15daac0e0.jpg" },
    { name: "General Grievous", image: "https://i.pinimg.com/736x/d6/ab/a6/d6aba6712214c03f99254cf06389716d.jpg" },
    { name: "Jango Fett", image: "https://i.pinimg.com/736x/75/47/46/75474610231501d8041c4147a410fddb.jpg" },
    { name: "Rey", image: "https://i.pinimg.com/736x/c2/56/14/c256140f54b7dfd5d184279cc40db565.jpg" },
    { name: "Finn", image: "https://i.pinimg.com/1200x/e7/e4/75/e7e47508d548fd9d059dff32b1d9c25d.jpg" },
    { name: "Poe Dameron", image: "https://i.pinimg.com/736x/d2/b0/bd/d2b0bd82548ca928da40408f8cccadc6.jpg" },
    { name: "Kylo Ren", image: "https://i.pinimg.com/1200x/bf/ab/39/bfab39db9d9561c609d1ca4f215d9da4.jpg" },
    { name: "Commander Fox", image: "https://i.pinimg.com/736x/93/36/d5/9336d5ac21f7195b3d977bb72adebeac.jpg" },
    { name: "Devon Izara", image: "https://i.pinimg.com/1200x/a8/4c/8a/a84c8a515c0bc3ebdf55591a8964161b.jpg" },
    { name: "Jesse", image: "https://i.pinimg.com/1200x/55/b1/83/55b183f7299c1214ec0d09122aaeebf4.jpg" },
    { name: "Ki Adi Mundi", image: "https://i.pinimg.com/736x/62/24/7b/62247b0976ca8229080d0bf201e21913.jpg" },
    { name: "Jar Jar Binks", image: "https://i.pinimg.com/1200x/27/d1/9e/27d19ec5dd1af90b69138d08581a67ab.jpg" },
    { name: "Spy Bot", image: "https://i.pinimg.com/736x/4a/9a/14/4a9a146caf8d3d473b4301ffb4810e3d.jpg" },
    { name: "Mother Talzin", image: "https://i.pinimg.com/1200x/14/71/40/147140221b83e2b037e719254c9e46d0.jpg" },
    { name: "Jyn Erso", image: "https://i.pinimg.com/1200x/bf/0d/fc/bf0dfc81a10b43f4079378eab98dfd2f.jpg" },
    { name: "Cassian Andor", image: "https://i.pinimg.com/736x/34/3d/24/343d241b1aa50cde7bd035c2bbf36c36.jpg" },
    { name: "K-2SO", image: "https://i.pinimg.com/736x/c2/ea/b4/c2eab4c4482ac3697446adcd895f02ab.jpg" },
    { name: "Chirrut Îmwe", image: "https://i.pinimg.com/736x/22/be/b0/22beb0f4555d44b941ae852b7909672a.jpg" },
    { name: "Fennec Shand", image: "https://i.pinimg.com/736x/70/89/7b/70897b329550620d2c18307c59121dbe.jpg" },
    { name: "Orson Krennic", image: "https://i.pinimg.com/1200x/50/eb/e9/50ebe928bfd1802cbfef83f560b38931.jpg" },
    { name: "Saw Gerrera", image: "https://i.pinimg.com/736x/67/36/ee/6736eefef594424452f08521fbfc3072.jpg" },
    { name: "Galen Erso", image: "https://i.pinimg.com/1200x/00/94/58/0094582553172fc551fc21030b0a5e9c.jpg" },
    { name: "Qi'ra", image: "https://i.pinimg.com/1200x/26/82/02/268202fa74a5b3d499de186c9816f374.jpg" },
    { name: "Howzer", image: "https://i.pinimg.com/1200x/bf/09/ec/bf09ec6bc8ada6119fc175048cc68020.jpg" },
    { name: "Rio Chuchi", image: "https://i.pinimg.com/736x/d1/94/b5/d194b57e786bc618ec400f7837b11200.jpg" },
    { name: "Daughter", image: "https://i.pinimg.com/736x/15/cf/19/15cf19c1175918eb96a14fd3e89038d2.jpg" },
    { name: "Dryden Vos", image: "https://i.pinimg.com/1200x/c6/7c/66/c67c66d06199de20ec0cb0494ec49a11.jpg" },
    { name: "Din Djarin", image: "https://i.pinimg.com/736x/1e/e9/de/1ee9deecb5e48390703229f992556cbb.jpg" },
    { name: "Grogu", image: "https://i.pinimg.com/1200x/e1/95/25/e19525d9eef78a043df79544d7f4c4c0.jpg" },
    { name: "Moff Gideon", image: "https://i.pinimg.com/736x/ef/f2/80/eff280f10ec3815b1a571300912e4231.jpg" },
    { name: "Hardcase", image: "https://i.pinimg.com/1200x/1f/a8/03/1fa803396ee192414a37e5d08913297a.jpg" },
    { name: "99", image: "https://i.pinimg.com/736x/e4/b3/48/e4b348221f584c0eb2385273e9520301.jpg" },
    { name: "Son", image: "https://i.pinimg.com/736x/16/66/9f/16669fe73c4c12fa69167e7fe904861a.jpg" },
    { name: "Bo-Katan Kryze", image: "https://i.pinimg.com/736x/b5/91/f9/b591f969a2b00a2b146e07fbfde10586.jpg" },
    { name: "Ahsoka Tano", image: "https://i.pinimg.com/736x/89/0d/53/890d5391a98778d912dd1315ed85afe4.jpg" },
    { name: "Captain Rex", image: "https://i.pinimg.com/736x/8b/6b/82/8b6b820e48a0f445afa6f83e893ac9a7.jpg" },
    { name: "Commander Cody", image: "https://i.pinimg.com/1200x/08/0d/92/080d9210a54aabe0920ccabf2b3bfa82.jpg" },
    { name: "Asajj Ventress", image: "https://i.pinimg.com/736x/a7/92/98/a792989239dfe6a5d1cd3af0dde1c66c.jpg" },
    { name: "Cad Bane", image: "https://i.pinimg.com/736x/3e/d5/e6/3ed5e698b1b6f96fe89834566bf07c46.jpg" },
    { name: "Hondo Ohnaka", image: "https://i.pinimg.com/1200x/b6/c4/d6/b6c4d6eb166f6aafb0f53df0dadaf164.jpg" },
    { name: "Savage Opress", image: "https://i.pinimg.com/736x/1c/68/1c/1c681c65ac63ad174c7600373bc8c308.jpg" },
    { name: "Pre Vizsla", image: "https://i.pinimg.com/736x/80/e9/b7/80e9b799acb35052f840f8659577dfcb.jpg" },
    { name: "Ezra Bridger", image: "https://i.pinimg.com/736x/c9/6e/50/c96e50ca2a0457b76c882290e8dee614.jpg" },
    { name: "Kanan Jarrus", image: "https://i.pinimg.com/1200x/0f/86/84/0f86843a58011ee9e886e7076a8f1b05.jpg" },
    { name: "Hera Syndulla", image: "https://i.pinimg.com/736x/5f/f3/f3/5ff3f3f54476d42a6b70f08806942387.jpg" },
    { name: "Sabine Wren", image: "https://i.pinimg.com/736x/b7/97/f4/b797f42487a46a87e0e45c25cb450927.jpg" },
    { name: "Garazeb Orrelios", image: "https://i.pinimg.com/736x/fd/64/b8/fd64b89686ee2993003bf54d65721b91.jpg" },
    { name: "Chopper (C1-10P)", image: "https://i.pinimg.com/1200x/45/82/30/458230cf13c801083fd58e64fb202105.jpg" },
    { name: "Grand Admiral Thrawn", image: "https://i.pinimg.com/1200x/59/f2/a1/59f2a12b24a617aca06bf031c3e3a15b.jpg" },
    { name: "The Grand Inquisitor", image: "https://i.pinimg.com/736x/26/c5/51/26c551ed9339783f51f5d7c199c2a096.jpg" },
    { name: "Echo", image: "https://i.pinimg.com/736x/92/e4/ef/92e4ef6310eb95cf4c1a15483dae4bab.jpg" },
    { name: "Fives", image: "https://i.pinimg.com/1200x/30/f1/52/30f152e62744424bf5cffb3bc94f043d.jpg" },
    { name: "Grand Moff Tarkin", image: "https://i.pinimg.com/1200x/48/84/34/488434e9c4c28ec3e3276463da988df3.jpg" },
    { name: "Wedge Antilles", image: "https://i.pinimg.com/1200x/d3/be/30/d3be3013aa59f7172862b5e4f8a17bfc.jpg" },
    { name: "Admiral Ackbar", image: "https://i.pinimg.com/1200x/4f/1c/c9/4f1cc9b6fdfadb720c4e7de5c605fa0c.jpg" },
    { name: "Father", image: "https://i.pinimg.com/736x/7e/81/f2/7e81f2a80750bd67715f5c02057d2d39.jpg" },
    { name: "Mon Mothma", image: "https://i.pinimg.com/1200x/90/bb/04/90bb040ad49b090cd809ff1612e99f62.jpg" },
    { name: "Greedo", image: "https://i.pinimg.com/1200x/f8/72/b0/f872b0f2fc357b4612db21e08e1e4ebe.jpg" },
    { name: "Jabba the Hutt", image: "https://i.pinimg.com/736x/c4/fa/5c/c4fa5c3468bc4beb1438d0873a04c951.jpg" },
    { name: "Salacious B. Crumb", image: "https://i.pinimg.com/736x/69/7d/0f/697d0fdf26b5547874fb158fe790119c.jpg" },
    { name: "Bib Fortuna", image: "https://i.pinimg.com/736x/7c/60/73/7c6073167895b42adf8da694a614aec6.jpg" },
    { name: "Watto", image: "https://i.pinimg.com/736x/f6/48/38/f64838b41147ac259beccf9f0dd01f87.jpg" },
    { name: "Sebulba", image: "https://i.pinimg.com/736x/6b/8b/0c/6b8b0cb6dbd77452dbd3353089db8c81.jpg" },
    { name: "Shmi Skywalker", image: "https://i.pinimg.com/736x/85/42/34/8542346dfe430a520f42f4dd9e6e74fa.jpg" },
    { name: "Bail Organa", image: "https://i.pinimg.com/1200x/f9/47/71/f947710592e2a2e95c96eead025ed37e.jpg" },
    { name: "Commander Wolffe", image: "https://i.pinimg.com/736x/11/b1/11/11b11177203ff82b8dc923b854fb226c.jpg" },
    { name: "Zam Wesell", image: "https://i.pinimg.com/1200x/ee/d9/32/eed93240a9df168c46ebacb5bb81d7bc.jpg" },
    { name: "Plo Koon", image: "https://i.pinimg.com/736x/c2/0d/45/c20d45ce729cad1e52f3ac874df4bc35.jpg" },
    { name: "Kit Fisto", image: "https://i.pinimg.com/1200x/43/35/23/433523eee4401b06ec9e26ba30f6a3ba.jpg" },
    { name: "Aayla Secura", image: "https://i.pinimg.com/736x/0c/11/3e/0c113e6a3f58ff6bce0693a97f0c34ec.jpg" },
    { name: "Ki-Adi-Mundi", image: "https://i.pinimg.com/736x/62/24/7b/62247b0976ca8229080d0bf201e21913.jpg" },
    { name: "Shaak Ti", image: "https://i.pinimg.com/736x/99/88/c3/9988c3f29f6e61bca481d6e6611bad9a.jpg" },
    { name: "Luminara Unduli", image: "https://i.pinimg.com/1200x/f3/6f/1f/f36f1f54756c39c5ec715a91ecb749e6.jpg" },
    { name: "Barriss Offee", image: "https://i.pinimg.com/736x/04/b6/bf/04b6bfcfc543adf36eb064922677ef4b.jpg" },
    { name: "Quinlan Vos", image: "https://i.pinimg.com/1200x/49/17/44/491744553ff328ff760f753a70b1b564.jpg" },
    { name: "Satine Kryze", image: "https://i.pinimg.com/1200x/73/c4/00/73c4004afe2ceb70cffcac5e5ba00667.jpg" },
    { name: "Omega", image: "https://i.pinimg.com/736x/ac/3f/9d/ac3f9d4bac5b0ea5c97f698c3ff8165f.jpg" },
    { name: "Crosshair", image: "https://i.pinimg.com/736x/73/12/8f/73128fbe069ce5b837a09e3720978a76.jpg" },
    { name: "Tech", image: "https://i.pinimg.com/736x/e4/8e/10/e48e10303929c9d5eb3d968220e952b3.jpg" },
    { name: "Wrecker", image: "https://i.pinimg.com/1200x/84/61/05/846105c6b3393b16a004e198ca52c148.jpg" },
    { name: "Hunter", image: "https://i.pinimg.com/736x/21/8b/4f/218b4f16d19fdc908cee9b4662c1409a.jpg" }
];

const percyJacksonList = [
    // The Core Trio
    { name: "Percy Jackson", image: "https://i.pinimg.com/736x/35/70/12/357012707a12065c0263d34a7d9fd746.jpg" },
    { name: "Anananeth Chase", image: "https://i.pinimg.com/736x/9f/fa/8c/9ffa8c197bbcd28e5cb07743d4a0ab1f.jpg" },
    { name: "Grover Underwood", image: "https://i.pinimg.com/736x/80/75/ca/8075ca0e42615849efd579b9e585e2de.jpg" },

    // Camp Half-Blood Veterans
    { name: "Luke Castellan", image: "https://i.pinimg.com/736x/d9/22/a3/d922a3c8e4df088c2a1316c5f92a1c60.jpg" },
    { name: "Nico di Angelo", image: "https://i.pinimg.com/1200x/c3/62/85/c362856adeedcc11694bd2509c6ed3c2.jpg" },
    { name: "Thalia Grace", image: "https://i.pinimg.com/736x/ca/13/ea/ca13ea7a72531d51be0c0f623108644c.jpg" },
    { name: "Clarisse La Rue", image: "https://i.pinimg.com/1200x/b4/81/17/b48117aa1348c1650e021d4a1dc319cd.jpg" },
    { name: "Tyson", image: "https://i.pinimg.com/736x/8f/cd/1d/8fcd1dfe82bf6237e1fc33dd729a219c.jpg" },
    { name: "Chiron", image: "https://i.pinimg.com/736x/f6/da/eb/f6daeb003b0bcb9ed12eabcd6032d1f1.jpg" },
    { name: "Rachel Elizabeth Dare", image: "https://i.pinimg.com/1200x/b8/f2/40/b8f2409ef94aac93979cc75e6924e1d1.jpg" },
    { name: "Silena Beauregard", image: "https://i.pinimg.com/474x/d3/48/fa/d348fa455967b376f85357726da84a1c.jpg" },
    { name: "Charles Beckendorf", image: "https://i.pinimg.com/736x/79/5d/52/795d5214430876a119961f16dfae300c.jpg" },
    { name: "Zoe Nightshade", image: "https://i.pinimg.com/736x/7a/b0/86/7ab0867840ef90fb571740effaefdfd1.jpg" },
    { name: "Bianca di Angelo", image: "https://i.pinimg.com/736x/cf/3a/51/cf3a51ebfd03b65b78fbac5f0cb818db.jpg" },
    { name: "Mr. D (Dionysus)", image: "https://i.pinimg.com/736x/a7/d5/a2/a7d5a22fbe4bd29ae2bd5f7b0d3b3bbb.jpg" },
    { name: "Will Solace", image: "https://i.pinimg.com/736x/3e/2a/e4/3e2ae415a357b807671cf82986eca66b.jpg" },
    { name: "Connor Stoll", image: "https://i.pinimg.com/736x/f1/82/56/f182566c084f2cd3ca8e9b74bd583a59.jpg" },
    { name: "Travis Stoll", image: "https://i.pinimg.com/736x/d8/3f/fe/d83ffec0c9c9789ed7514ffdca7a6ca2.jpg" },


    // The Heroes of Olympus Expansion (The Prophecy of Seven + Key Figures)
    { name: "Jason Grace", image: "https://i.pinimg.com/1200x/0b/32/08/0b32089c3c651a6b1aa6ec128f92475d.jpg" },
    { name: "Piper McLean", image: "https://i.pinimg.com/1200x/e1/89/cc/e189cc36ebc5dd2ec788bac7189d976e.jpg" },
    { name: "Leo Valdez", image: "https://i.pinimg.com/1200x/f0/6c/1d/f06c1d39577f1a4e5c434334a3c03d68.jpg" },
    { name: "Frank Zhang", image: "https://i.pinimg.com/736x/60/3c/1f/603c1ff32d838e0cf6468167d0851c54.jpg" },
    { name: "Hazel Levesque", image: "https://i.pinimg.com/736x/ed/a4/5e/eda45e38c8c7a5932efd34f81d56ffef.jpg" },
    { name: "Reyna Avila Ramírez-Arellano", image: "https://i.pinimg.com/1200x/d9/04/8b/d9048b12ce8847aac70937b452ca2d5e.jpg" },
    { name: "Coach Gleeson Hedge", image: "https://i.pinimg.com/736x/c3/04/52/c3045232c09adac115c94fb3303907c7.jpg" },
    { name: "Octavian", image: "https://i.pinimg.com/1200x/e6/4a/49/e64a491668f7bd2a3bfef1e56c9172db.jpg" },
    { name: "Calypso", image: "https://i.pinimg.com/736x/c4/4f/6e/c44f6e42f6586530db9f8c521c816380.jpg" }

    // // Gods, Immortals & Villains
    // { name: "Kronos", image: "https://i.pinimg.com/736x/8d/2d/76/8d2d763223e9951c89c8bffa41a5ef56.jpg" },
    // { name: "Ethan Nakamura", image: "https://i.pinimg.com/1200x/89/69/0f/89690f3dd43a8a6ac7f4845f0a0c9898.jpg" },
    // { name: "Hera / Juno", image: "https://i.pinimg.com/1200x/0b/9b/b7/0b9bb7d3c232faed04c1432909f5dc12.jpg" },
    // { name: "Poseidon / Neptune", image: "https://i.pinimg.com/1200x/f1/0b/68/f10b6858abe8700c04671c5b64022b23.jpg" },
    // { name: "Zeus / Jupiter", image: "https://i.pinimg.com/1200x/05/f0/9a/05f09a9dbd34da64e0e11201b48ec5db.jpg" },
    // { name: "Hades / Pluto", image: "https://i.pinimg.com/1200x/21/af/e3/21afe3c4ace5bdf4d49820d87f2500e9.jpg" },
    // { name: "Aphrodite / Venus", image: "https://i.pinimg.com/736x/fb/93/6d/fb936de7a703c5786467a665225fab2f.jpg" }
];

const tolkienList = [
    // --- THE LORD OF THE RINGS ---
    { name: "Frodo Baggins", image: "https://i.pinimg.com/1200x/a6/d4/3f/a6d43fb12b2ae0f2ac12311ecc63c4d9.jpg" },
    { name: "Aragorn", image: "https://i.pinimg.com/1200x/d4/b9/63/d4b9639d84223dc786c2b5c2489f485b.jpg" },
    { name: "Gandalf", image: "https://i.pinimg.com/736x/a7/1c/d0/a71cd025c520d49570e37b86d333b8f0.jpg" },
    { name: "Legolas", image: "https://i.pinimg.com/1200x/da/f5/26/daf52605237a852ddcff6a3a3c799009.jpg" },
    { name: "Samwise Gamgee", image: "https://i.pinimg.com/736x/90/66/5a/90665ab7910504b007cee50304503fad.jpg" },
    { name: "Gimli", image: "https://i.pinimg.com/1200x/42/af/74/42af7424b9799188e4051e9cd80cc791.jpg" },
    { name: "Boromir", image: "https://i.pinimg.com/1200x/6e/e9/8c/6ee98c5491619b65427abee140425911.jpg" },
    { name: "Merry Brandybuck", image: "https://i.pinimg.com/736x/5f/b9/eb/5fb9eba4ca46210a113bd62b8d98c4c8.jpg" },
    { name: "Pippin Took", image: "https://i.pinimg.com/1200x/77/8f/aa/778faad07963937fa9a8570754ce7be4.jpg" },
    { name: "Gollum / Sméagol", image: "https://i.pinimg.com/1200x/42/a9/25/42a925d2097263bfbf71f6d475a16e78.jpg" },
    { name: "Arwen", image: "https://i.pinimg.com/1200x/45/f4/00/45f400ef1e147856b345770822afc966.jpg" },
    { name: "Galadriel", image: "https://i.pinimg.com/1200x/35/42/dd/3542dd5c32cb8a8a236b280a295c5284.jpg" },
    { name: "Elrond", image: "https://i.pinimg.com/736x/a8/4d/35/a84d35f369d6a63d6dbc37703eab71cc.jpg" },
    { name: "Éowyn", image: "https://i.pinimg.com/736x/16/98/35/16983552f34c0e08cf19e91771ccab72.jpg" },
    { name: "Faramir", image: "https://i.pinimg.com/736x/f7/c5/ec/f7c5ec0d68cdd4705317f7f2ca1bf83f.jpg" },
    { name: "Sauron", image: "https://i.pinimg.com/736x/eb/b6/77/ebb677f368662714f3ed5925ec2aae21.jpg" },
    { name: "The Witch-king of Angmar", image: "https://i.pinimg.com/1200x/9a/ba/f7/9abaf72cf05cd269180043e3af6ba45d.jpg" },

    // --- THE HOBBIT EXTENSION ---
    { name: "Bilbo Baggins", image: "https://i.pinimg.com/1200x/0e/6d/94/0e6d94626d1481c6092d3502e70299b9.jpg" },
    { name: "Thorin Oakenshield", image: "https://i.pinimg.com/1200x/12/c2/12/12c212b41d8825cccde3c66837b881bb.jpg" },
    { name: "Thranduil", image: "https://i.pinimg.com/736x/72/f5/e6/72f5e6d8f0c7001baa4792e25f4e8cf9.jpg" },
    { name: "Bard the Bowman", image: "https://i.pinimg.com/1200x/69/df/bc/69dfbc731b708fb6d92a1f9c51a7d65d.jpg" },
    { name: "Kíli", image: "https://i.pinimg.com/1200x/8f/ee/eb/8feeeb93c9e2b93eaee9d201e89203cb.jpg" },
    { name: "Fíli", image: "https://i.pinimg.com/736x/cc/27/4f/cc274fed11ade5bf2073aa78417331c2.jpg" },
    { name: "Balin", image: "https://i.pinimg.com/736x/47/58/16/475816d94f6f61f0f9e25dc56993e98a.jpg" },
    { name: "Radagast the Brown", image: "https://i.pinimg.com/736x/47/58/16/475816d94f6f61f0f9e25dc56993e98a.jpg" },
    { name: "Beorn", image: "https://i.pinimg.com/1200x/58/87/91/588791de23c08d91fdaf4d456aa6c185.jpg" },
    { name: "Smaug", image: "https://i.pinimg.com/736x/79/1f/19/791f19a66842de89334ce3f59c2a2ece.jpg" },
    { name: "Azog the Defiler", image: "https://i.pinimg.com/1200x/45/7f/3e/457f3e6049ba6ccdc9d98590afeb5b9b.jpg" },

    // --- THE SILMARILLION (LORE & FIRST AGE) ---
    { name: "Fëanor", image: "https://i.pinimg.com/736x/43/00/10/430010bd7fcf0569ff348aa22cf90152.jpg" },
    { name: "Fingolfin", image: "https://i.pinimg.com/1200x/31/43/87/3143876497411c0217f8d45cb3455566.jpg" },
    { name: "Lúthien Tinúviel", image: "https://i.pinimg.com/1200x/d9/10/86/d910862e679a0a239bb905a37c236f93.jpg" },
    { name: "Finrod Felagund", image: "https://i.pinimg.com/736x/f8/74/d8/f874d811d3a554726e1b5529d764a8c7.jpg" },
    { name: "Túrin Turambar", image: "https://i.pinimg.com/736x/ad/27/0d/ad270d73febb6ac24f1a78d1bf1bcc75.jpg" },
    { name: "Tuor", image: "https://i.pinimg.com/736x/fc/51/a5/fc51a5c9ff3eaf379b009df68669c0d6.jpg" },
    { name: "Idril Celebrindal", image: "https://i.pinimg.com/1200x/b1/c5/29/b1c5296e9965486a4503b4cc9aa22405.jpg" },
    { name: "Maedhros", image: "https://i.pinimg.com/736x/06/f9/85/06f985ddff7199ef408b530d2e488d7e.jpg" },
    { name: "Glorfindel", image: "https://i.pinimg.com/736x/04/0f/72/040f72c376e44f30e29c025209ed3d50.jpg" },
    { name: "Eärendil the Mariner", image: "https://i.pinimg.com/1200x/03/15/2e/03152e85696df676e34366ece74a62dc.jpg" },
    { name: "Elwing", image: "https://i.pinimg.com/1200x/98/e0/3c/98e03cdc6f52bf5f636834766320429e.jpg" },
    { name: "Melkor / Morgoth", image: "https://i.pinimg.com/1200x/96/e5/8c/96e58c7d8b801cee11fee070976eb033.jpg" },
    { name: "Celebrimbor", image: "https://i.pinimg.com/1200x/af/63/e5/af63e5aa4f90ec8100934d816ce7984f.jpg" },
    { name: "Fingon", image: "https://i.pinimg.com/1200x/27/40/46/2740463e4018e0f164aa44344d0972a4.jpg" },
    { name: "Elu Thingol", image: "https://i.pinimg.com/1200x/5a/32/2c/5a322c59fc20a2303239283ec688e396.jpg" },
    { name: "Turgon", image: "https://i.pinimg.com/1200x/f3/58/fe/f358fe48fcf7cdb8a29ccaaa68251240.jpg" }
];

const cloneWarsList = [
    // --- THE MAIN HEROES & THE 501ST ---
    { name: "Ahsoka Tano", image: "https://i.pinimg.com/736x/f3/dd/91/f3dd91c6e368016dc2139a2ae91855a0.jpg" },
    { name: "Captain Rex ", image: "https://i.pinimg.com/736x/1c/66/a9/1c66a943efb21786d008e07e068a37e9.jpg" },
    { name: "Anakin Skywalker", image: "https://i.pinimg.com/1200x/fe/31/93/fe31934118a281c67fe313d4557eeb0d.jpg" },
    { name: "Obi-Wan Kenobi", image: "https://i.pinimg.com/1200x/2f/d1/2b/2fd12b8ce49a9f0bea3b5f82888c14b8.jpg" },
    { name: "Fives", image: "https://i.pinimg.com/736x/cc/4a/7f/cc4a7fcafc666703d3eac5720ad18f77.jpg" },
    { name: "Echo ", image: "https://i.pinimg.com/736x/92/e4/ef/92e4ef6310eb95cf4c1a15483dae4bab.jpg" },
    { name: "Jesse", image: "https://i.pinimg.com/1200x/55/b1/83/55b183f7299c1214ec0d09122aaeebf4.jpg" },
    { name: "Commander Cody", image: "https://i.pinimg.com/736x/b0/9d/3e/b09d3e3f80a61d58db765139f096cba6.jpg" },
    { name: "Commander Wolffe", image: "https://i.pinimg.com/1200x/a4/bf/8b/a4bf8b30857c3876152c6e360935dac4.jpg" },
    { name: "Commander Fox", image: "https://i.pinimg.com/1200x/84/b9/ec/84b9ec7c4e1f85bc3dfc29250149c1cb.jpg" },
    { name: "99", image: "https://i.pinimg.com/736x/e4/b3/48/e4b348221f584c0eb2385273e9520301.jpg" },

    // --- VILLAINS & THE DARK SIDE ---
    { name: "Darth Maul", image: "https://i.pinimg.com/1200x/d7/71/c7/d771c7e77b06f88c903b2a8a086d52cf.jpg" },
    { name: "Asajj Ventress", image: "https://i.pinimg.com/1200x/e7/17/49/e71749567fa1cf1ae487e98c6b0d602f.jpg" },
    { name: "Count Dooku", image: "https://i.pinimg.com/1200x/2c/f2/b7/2cf2b77049565c4f4db4fe0ede01ff4c.jpg" },
    { name: "General Grievous", image: "https://i.pinimg.com/736x/8b/39/e8/8b39e8d0e94159e55b898be35a2f9f42.jpg" },
    { name: "Savage Opress", image: "https://i.pinimg.com/736x/37/d0/e4/37d0e421b0ee412ed9fc71ba7290f7da.jpg" },
    { name: "Pre Vizsla", image: "https://i.pinimg.com/736x/31/1c/7b/311c7b553c17cb40a5db662956bb869b.jpg" },
    { name: "Mother Talzin", image: "https://i.pinimg.com/1200x/14/71/40/147140221b83e2b037e719254c9e46d0.jpg" },
    { name: "Pong Krell", image: "https://i.pinimg.com/736x/1e/fd/23/1efd2327cf52ebf3c580aa83f65cd6f7.jpg" },
    { name: "Chancellor Palpatine", image: "https://i.pinimg.com/1200x/6f/a9/c2/6fa9c2c68b75720b46b516ad84fea500.jpg" },


    // --- BOUNTY HUNTERS & UNDERWORLD ---
    { name: "Cad Bane", image: "https://i.pinimg.com/736x/3e/d5/e6/3ed5e698b1b6f96fe89834566bf07c46.jpg" },
    { name: "Hondo Ohnaka", image: "https://i.pinimg.com/736x/b6/c4/d6/b6c4d6eb166f6aafb0f53df0dadaf164.jpg" },
    { name: "Aurra Sing", image: "https://i.pinimg.com/1200x/4b/3d/41/4b3d41f2b709be0dd28bb67e972471fb.jpg" },
    { name: "Embo", image: "https://i.pinimg.com/736x/29/35/05/293505c12c30f97bdb29bb0df59d99a5.jpg" },
    { name: "Boba Fett", image: "https://i.pinimg.com/1200x/24/d1/80/24d180491952f0ccd8cb52e2b7b3a1b5.jpg" },

    // --- MANDALORE & POLITICS ---
    { name: "Duchess Satine Kryze", image: "https://i.pinimg.com/736x/db/8b/e9/db8be92e8335e3cb116cd824ab75a0a9.jpg" },
    { name: "Bo-Katan Kryze", image: "https://i.pinimg.com/736x/b5/91/f9/b591f969a2b00a2b146e07fbfde10586.jpg" },
    { name: "Padmé Amidala", image: "https://i.pinimg.com/736x/1c/e8/9a/1ce89a6d957dd813c20cb97cb7e6e9c7.jpg" },
    { name: "Bail Organa", image: "https://i.pinimg.com/1200x/fb/8a/c3/fb8ac39e60febadd21ef982c778830c6.jpg" },

    // --- JEDI COUNCIL HIGH LIGHTS ---
    { name: "Plo Koon", image: "https://i.pinimg.com/1200x/c7/9c/29/c79c2961440d28208d7dc561e138c0c8.jpg" },
    { name: "Kit Fisto", image: "https://i.pinimg.com/1200x/43/35/23/433523eee4401b06ec9e26ba30f6a3ba.jpg" },
    { name: "Yoda", image: "https://i.pinimg.com/736x/89/0c/bc/890cbce4959b71b6efe5cb318a7deeef.jpg" },
    { name: "Mace Windu ", image: "https://i.pinimg.com/1200x/89/00/7c/89007c48e12fb383b8e3043cce4c66b6.jpg" }
];

// ==========================================
// 2. Global State Tracking Variables
// ==========================================
let chaosList = [];
let initialCharacters = [];
let clusters = [];
let currentLeftIndex = 0;
let currentRightIndex = 0;
let nextClusters = [];
let leftCluster = [];
let rightCluster = [];
let mergedCluster = [];
let gameHistory = []; // Stores snapshots of previous rounds
let totalStepsEstimated = 0;
let stepsTaken = 0;
let isAnimating = false;

// DOM Elements
const choiceUi = document.getElementById('choice');
const gameUi = document.getElementById('game-ui');
const progressText = document.getElementById('progress');
const resultsUi = document.getElementById('results');
const rankList = document.getElementById('rank-list');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const imgLeft = document.getElementById('img-left');
const imgRight = document.getElementById('img-right');

// ==========================================
// 3. Initialization and Setup
// ==========================================
const startGame = (chosenUniverse) => {
    if (chosenUniverse === 'star-wars') {
        initialCharacters = starWarsList;
        document.getElementById("main-title").innerText = "Star Wars Character Ranker";
        document.body.style.backgroundImage = "url('assets/images/star wars.jpg')";
        document.body.style.color = "#bfd8cd"; // Sleek off-white/green accent

    } else if (chosenUniverse === 'percy-jackson') {
        initialCharacters = percyJacksonList;
        document.getElementById("main-title").innerText = "Percy Jackson Character Ranker";
        document.body.style.backgroundImage = "url('assets/images/percy jackson.jpg')";
        document.body.style.color = "#86dbc9"; // Ocean / Camp Half-Blood blue text

    } else if (chosenUniverse === 'tolkien') {
        initialCharacters = tolkienList;
        document.getElementById("main-title").innerText = "Middle-earth Character Ranker";
        document.body.style.backgroundImage = "url('assets/images/tolkien.jpg')";
        document.body.style.color = "#f4d068"; // Elven gold text accent
    } else if (chosenUniverse === 'clone-wars') {
        initialCharacters = cloneWarsList;
        document.getElementById("main-title").innerText = "The Clone Wars Character Ranker";
        document.body.style.backgroundImage = "url('assets/images/clone-wars.jpg')";
        document.body.style.color = "#ffa4a4"; // Crimson Republic accent
    } else if (chosenUniverse === 'chaos') {
        isChaos();
        initialCharacters = chaosList;
        document.getElementById("main-title").innerText = "The Chaos Character Ranker";
        document.body.style.backgroundImage = "url('assets/images/chaos.jpg')";
        document.body.style.color = "#e0cee7"; // Crimson Republic accent
    } else {
        initialCharacters = the100List;
        document.getElementById("main-title").innerText = "The 100 Character Ranker";
        document.body.style.backgroundImage = "url('assets/images/the 100.jpg')";
        document.body.style.color = "black"; // Dark contrast for Grounder/Ark aesthetics
    }

    // Prepare arrays and estimations dynamically
    clusters = initialCharacters.map(char => [char]);
    totalStepsEstimated = initialCharacters.length * Math.log2(initialCharacters.length);
    stepsTaken = 0;

    // Switch screens
    choiceUi.style.display = 'none';
    gameUi.style.display = 'block';
    progressText.style.display = 'block';

    const gamePrompt = document.getElementById("game-prompt");

    // Check if the screen width is mobile size (768px or less)
    if (window.innerWidth <= 768) {
        gamePrompt.innerText = "Who do you prefer? (Tap or Swipe)";
    } else {
        gamePrompt.innerText = "Who do you prefer? (Use Left/Right Arrows)";
    }

    // Kick off the sorting engine
    sortArr();
};

const sortArr = () => {
    clusters.sort(() => Math.random() - 0.5);
    setupNextMergePair();
};

// ==========================================
// 4. Core Merge Sort Engine
// ==========================================
const setupNextMergePair = () => {
    console.log(
        "clusters:", clusters.length,
        "nextClusters:", nextClusters.length
    );
    if (clusters.length <= 1) {
        if (clusters.length === 1) {
            nextClusters.push(clusters.shift());
        }

        clusters = nextClusters;
        nextClusters = [];

        // Final guard check to wrap up the game safely
        if (clusters.length <= 1) {
            finishSorting();
            return;
        }
    }

    leftCluster = clusters.shift();
    rightCluster = clusters.shift();
    mergedCluster = [];
    currentLeftIndex = 0;
    currentRightIndex = 0;

    showNextComparison();
};

const showNextComparison = () => {
    let progressPercent = Math.min(Math.round((stepsTaken / totalStepsEstimated) * 100), 99);
    progressText.innerText = `Progress: ~${progressPercent}%`;

    if (currentLeftIndex < leftCluster.length && currentRightIndex < rightCluster.length) {
        const leftChar = leftCluster[currentLeftIndex];
        const rightChar = rightCluster[currentRightIndex];

        // Set the text names (.name)
        btnLeft.querySelector('span').innerText = leftChar.name;
        btnRight.querySelector('span').innerText = rightChar.name;

        // Set the image sources (.image)
        if (leftChar.image) {
            imgLeft.src = leftChar.image;
            imgLeft.style.display = "block";
        } else {
            imgLeft.style.display = "none";
        }

        if (rightChar.image) {
            imgRight.src = rightChar.image;
            imgRight.style.display = "block";
        } else {
            imgRight.style.display = "none";
        }

    } else {
        // A cluster has run out of characters, wrap up this pair
        if (currentLeftIndex < leftCluster.length) {
            mergedCluster.push(...leftCluster.slice(currentLeftIndex));
        } else {
            mergedCluster.push(...rightCluster.slice(currentRightIndex));
        }
        nextClusters.push(mergedCluster);

        // 🛠️ FIX: Advance to the next pair and RETURN immediately to stop execution loop
        setupNextMergePair();
        return;
    }
};


const handleChoice = (chosenSide) => {
    if (isAnimating) return;

    // 💾 Take the snapshot BEFORE manipulating index configurations
    saveStateToHistory();

    isAnimating = true;
    stepsTaken++;

    const pressedButton = chosenSide === 'left' ? btnLeft : btnRight;
    pressedButton.classList.add('selected');

    if (chosenSide === 'left') {
        mergedCluster.push(leftCluster[currentLeftIndex]);
        currentLeftIndex++;
    } else {
        mergedCluster.push(rightCluster[currentRightIndex]);
        currentRightIndex++;
    }

    setTimeout(() => {
        pressedButton.classList.remove('selected');
        isAnimating = false;
        showNextComparison();
    }, 150);
};

const finishSorting = () => {
    // Always ensure the results UI becomes visible
    gameUi.style.display = 'none';
    progressText.style.display = 'none';
    resultsUi.style.display = 'block';

    // Guard against edge cases where clusters[0] is missing
    const finalRankings = Array.isArray(clusters?.[0]) ? clusters[0] : [];

    // If something went wrong in the merge engine, still render something useful
    if (finalRankings.length === 0) {
        rankList.innerHTML = `<li><em>No results produced. clusters length: ${clusters?.length ?? 'null'}</em></li>`;
        // Helpful debug info (won't break UI)
        console.log('finishSorting(): empty finalRankings', { clusters });
        return;
    }

    rankList.innerHTML = finalRankings
        .map(char => `<li>${char?.name ?? '(unknown)'}</li>`)
        .join('');
};

// ==========================================
// 5. Input Control Listeners
// ==========================================
// Universe choice selections
document.getElementById('btn-choose-the100').addEventListener('click', () => startGame('the-100'));
document.getElementById('btn-choose-starwars').addEventListener('click', () => startGame('star-wars'));
document.getElementById('btn-choose-percy').addEventListener('click', () => startGame('percy-jackson'));
document.getElementById('btn-choose-tolkien').addEventListener('click', () => startGame('tolkien'));
document.getElementById('btn-choose-clonewars').addEventListener('click', () => startGame('clone-wars'));
document.getElementById('btn-choose-chaos').addEventListener('click', () => startGame('chaos'));

// Gameplay button clicks
btnLeft.addEventListener('click', () => handleChoice('left'));
btnRight.addEventListener('click', () => handleChoice('right'));

// Change Universe back button setup
document.getElementById('btn-back').addEventListener('click', () => {
    document.getElementById('game-ui').style.display = 'none';
    document.getElementById('choice').style.display = 'flex';

    stepsTaken = 0;
    currentLeftIndex = 0;
    currentRightIndex = 0;
    leftCluster = [];
    rightCluster = [];
    mergedCluster = [];
    nextClusters = [];
    clusters = [];
    gameHistory = []; // Wipe out history tracking

    const undoBtn = document.getElementById('btn-undo');
    if (undoBtn) undoBtn.disabled = true;

    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = 'white';
});

// Wire up Undo Event Trigger 
document.getElementById('btn-undo').addEventListener('click', () => {
    if (gameHistory.length === 0 || isAnimating) return;

    const previousState = gameHistory.pop();

    stepsTaken = previousState.stepsTaken;
    currentLeftIndex = previousState.currentLeftIndex;
    currentRightIndex = previousState.currentRightIndex;
    leftCluster = previousState.leftCluster;
    rightCluster = previousState.rightCluster;
    mergedCluster = previousState.mergedCluster;
    nextClusters = previousState.nextClusters;
    clusters = previousState.clusters;

    if (gameHistory.length === 0) {
        document.getElementById('btn-undo').disabled = true;
    }

    showNextComparison();
});

// Global keyboard events
window.addEventListener('keydown', (event) => {
    if (gameUi.style.display === 'none' || isAnimating) return;

    if (event.key === '1' || event.key === 'ArrowLeft') {
        handleChoice('left');
    } else if (event.key === '2' || event.key === 'ArrowRight') {
        handleChoice('right');
    }
});

// Variables to track finger coordinates
let touchStartX = 0;
let touchEndX = 0;

const gameContainer = document.getElementById('game-ui');

// 1. Capture the exact pixel where the finger first touches the screen
gameContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

// 2. Capture where the finger leaves the screen and calculate the swipe
gameContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
}, { passive: true });

// 3. Determine if the movement counts as a valid swipe
const handleSwipeGesture = () => {
    const swipeThreshold = 60; // Minimum distance in pixels to count as a swipe
    const totalSwipeDistance = touchEndX - touchStartX;

    // Check if game-ui is visible using either block or flex layouts
    if (gameUi.style.display === 'block' || gameUi.style.display === 'flex' || gameUi.style.display === '') {

        // 👉 SWIPE RIGHT = "YES!" -> Choose the TOP character card (Left slot/button)
        if (totalSwipeDistance > swipeThreshold) {
            console.log('Swiped Right: Liked the Top Character!');
            animateSwipe('left');
            handleChoice('left'); // Directly calls the engine safely
        }

        // 👈 SWIPE LEFT = "NO!" -> Pass on them, choose the BOTTOM character card instead (Right slot/button)
        if (totalSwipeDistance < -swipeThreshold) {
            console.log('Swiped Left: Preferred the Bottom Character!');
            animateSwipe('right');
            handleChoice('right'); // Directly calls the engine safely
        }
    }
};
const animateSwipe = (direction) => {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');

    if (direction === 'left') {
        btnLeft.classList.add('swipe-left-anim');
    } else {
        btnRight.classList.add('swipe-right-anim');
    }

    // Clean up the classes after the animation finishes so the next characters look normal
    setTimeout(() => {
        btnLeft.classList.remove('swipe-left-anim');
        btnRight.classList.remove('swipe-right-anim');
    }, 300);
}

const saveStateToHistory = () => {
    // Captures a deep snapshot of sorting tracking arrays right before changes happen
    gameHistory.push({
        stepsTaken: stepsTaken,
        currentLeftIndex: currentLeftIndex,
        currentRightIndex: currentRightIndex,
        leftCluster: JSON.parse(JSON.stringify(leftCluster)),
        rightCluster: JSON.parse(JSON.stringify(rightCluster)),
        mergedCluster: JSON.parse(JSON.stringify(mergedCluster)),
        nextClusters: JSON.parse(JSON.stringify(nextClusters)),
        clusters: JSON.parse(JSON.stringify(clusters))
    });

    // Light up your Undo UI button element
    const undoBtn = document.getElementById('btn-undo');
    if (undoBtn) undoBtn.disabled = false;
};

const isChaos = () => {
    let chaosLength = starWarsList.length + the100List.length + tolkienList.length + percyJacksonList.length;
    let arrList = [starWarsList, the100List, tolkienList, percyJacksonList];
    chaosList = [].concat(...arrList);
    // Debug check to see your massive unified roster in the console
    console.log("Chaos Mode Active! Total characters:", chaosList.length);
    console.log(chaosList);

}

