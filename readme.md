
A nyit� oldalt el��ll�t� adat model az al�bbi m�don n�z ki. 


		{
		    thumbnailImg: "../images/ref_280x160_port.jpg",
		    title: 'port',
		    cssClass: 'isotope_w1_h1',
		    link: '',
		    images: ["../images/port_01.jpg", "../images/port_02.jpg", "../images/port_03.jpg", "../images/port_04.jpg", "../images/port_05.jpg" ],
		    showDescription: false,
		    description: 'Ez egy minta leiras a kepek alatt'
		}


A fenti adatmodell p�ld�t mutat arra, hogy n�z ki az adatb�zis egy eleme. A param�terek, amiket itt haszn�lhatsz, az al�bbi tulajdons�gokat �ll�tj�k majd a nyit� oldal k�pgal�ri�j�ban:

thumbnailImg	-	URL-t kell megadni sz�veges m�don ("", vagy '' jelek k�z�). Egy k�pet fog megjelen�teni. Azt a k�pet aminek az el�rhet�s�g�t itt meg adod. Erre a k�pre r� lehet kattintani, ami a k�pgal�ri�t nyitja meg �s abban az "images" param�terben megadott k�peket fogod tudni v�gig lapozni.

title			-	Sz�veget lehet megadni ("", vagy '' jelek k�z�). Az itt megadott sz�veg minden "images" param�terben megadott k�p alatt meg fog jelenni.

cssClass:		-	CSS oszt�lyokat tudsz megadni ("", vagy '' jelek k�z�). Az itt megadott css olsz�lyok r� ker�lnek a "thumbnailImg"-ben �s az "images"-ben megadott k�pekre is. 

link			-	URL-t kell megadni sz�veges m�don ("", vagy '' jelek k�z�). Ha az �rt�ke nem '', hanem tartalmaz URL-t, akkor "thumbnailImg"-ben megadott k�p fog megjelenni �s arra a k�pre val� kattint�s az itt megadott URL-t fogja megh�vni.

images			-	Egy t�mb�t kell megadni (["../images/kep1.jpg","../images/kep1.jpg"] ilyen modon). A t�mbben felsorolt k�pek a "thumbnailImg"-ben magadott k�pre kattintva jelennek majd meg a k�pgal�ri�ban �s lapozhat�v� v�lnak. A thumbnail-ek k�z�tt nem jelennek meg.

showDescription	-	K�t �llapota van (true, vagy false lehet az �rt�ke). Ha true, akkor a "description" tulajdons�gban megadott sz�veget HTML-k�nt fogja kezelni �s az "images"-ben magadott k�pek helyett a "description" tartalm�t fogja majd bet�lteni a k�pgal�ri�ba, miut�n a thumbnail-re kattintasz. 
					Ha false az �rt�ke, akkor a "description"-ben megadott sz�veget, sz�vegk�nt fogja kezelni �s az �sszes "images"-ben felsorolt k�pek al� fogja helyezni.

description		-	Sz�veget, vagy HTML tartalmat lehet megadni ("", vagy '' jelek k�z�). Ha a "showDescription" tulajdons�g �rt�ke false, akkor az itt megadott sz�veg meg fog jelenni az �ssze "images"-ben felsorolt k�p alatt. Ha a "showDescription" �rt�ke true, akkor HTML tartalmat kell megadni.

