
A nyitó oldalt elõállító adat model az alábbi módon néz ki. 


		{
		    thumbnailImg: "../images/ref_280x160_port.jpg",
		    title: 'port',
		    cssClass: 'isotope_w1_h1',
		    link: '',
		    images: ["../images/port_01.jpg", "../images/port_02.jpg", "../images/port_03.jpg", "../images/port_04.jpg", "../images/port_05.jpg" ],
		    showDescription: false,
		    description: 'Ez egy minta leiras a kepek alatt'
		}


A fenti adatmodell példát mutat arra, hogy néz ki az adatbázis egy eleme. A paraméterek, amiket itt használhatsz, az alábbi tulajdonságokat állítják majd a nyitó oldal képgalériájában:

thumbnailImg	-	URL-t kell megadni szöveges módon ("", vagy '' jelek közé). Egy képet fog megjeleníteni. Azt a képet aminek az elérhetõségét itt meg adod. Erre a képre rá lehet kattintani, ami a képgalériát nyitja meg és abban az "images" paraméterben megadott képeket fogod tudni végig lapozni.

title			-	Szöveget lehet megadni ("", vagy '' jelek közé). Az itt megadott szöveg minden "images" paraméterben megadott kép alatt meg fog jelenni.

cssClass:		-	CSS osztályokat tudsz megadni ("", vagy '' jelek közé). Az itt megadott css olszályok rá kerülnek a "thumbnailImg"-ben és az "images"-ben megadott képekre is. 

link			-	URL-t kell megadni szöveges módon ("", vagy '' jelek közé). Ha az értéke nem '', hanem tartalmaz URL-t, akkor "thumbnailImg"-ben megadott kép fog megjelenni és arra a képre való kattintás az itt megadott URL-t fogja meghívni.

images			-	Egy tömböt kell megadni (["../images/kep1.jpg","../images/kep1.jpg"] ilyen modon). A tömbben felsorolt képek a "thumbnailImg"-ben magadott képre kattintva jelennek majd meg a képgalériában és lapozhatóvá válnak. A thumbnail-ek között nem jelennek meg.

showDescription	-	Két állapota van (true, vagy false lehet az értéke). Ha true, akkor a "description" tulajdonságban megadott szöveget HTML-ként fogja kezelni és az "images"-ben magadott képek helyett a "description" tartalmát fogja majd betölteni a képgalériába, miután a thumbnail-re kattintasz. 
					Ha false az értéke, akkor a "description"-ben megadott szöveget, szövegként fogja kezelni és az összes "images"-ben felsorolt képek alá fogja helyezni.

description		-	Szöveget, vagy HTML tartalmat lehet megadni ("", vagy '' jelek közé). Ha a "showDescription" tulajdonság értéke false, akkor az itt megadott szöveg meg fog jelenni az össze "images"-ben felsorolt kép alatt. Ha a "showDescription" értéke true, akkor HTML tartalmat kell megadni.

