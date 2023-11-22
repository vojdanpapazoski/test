# Test Theory 

1 - World wide Web pretstavuva svetska internetska mreza koja ja koristat 
    korisnicite i serverite 

2 - Preku HTTP se isprakjaat request i response - poraki pomegju serverot i klientot
    klientot isprakja request (baranje) do serverot i od nego dobiva response(odgovor)

3 - Node Js. e Javascript Runtime Enviorement i pretstavuva asinhron jazik na JS 
    koj moze da se koristi za development na serverska ili klientska strana na nekoja 
    aplikacija ili servis. Node Js reagira na odredeno baranje na korisnik ili kompjuterski sistem 
    i toa go pravi da bide event-driven.
    Express e framework na Node.Js, express se inicira vo Node.js, Express se vnesuva kako third-party module
    i se koristi za pogolema citlivost na kodot, poprifatliva i polesna sintaksa, i reiskoristlivost na kodot

4 - MVC arhitektura pretstavuva monolitna arhitektura i koncept-struktura
    za izgradba na nekoj servis ili aplikacija. MVC oznacuva model-view-controller	
    i e sostaven od tie tri dela. Modelot ja socinuva i obrabotuva biznis logikata i shemite, 
    view e klientskata strana t.e. ona sto se renderira i prikazuva vo browser,
    i controllerot pretstavuva eden tip na posrednik (middleware) pomegju view i   
    model - controllerot reagira na baranjata na view, go manipulira modelot za da 
    ja obraboti logikata i za da vrati soodveten odgovor vo view

5 - Ruti se url pateki te.endpoint-i i url doagja od zborot unoform resource locator. Rutite 
    pravat requesti do aplikacijata so pomos na http requesti
    Rutite pretstavuvaat mesta za interakcija i za aktiviranje na odredena funkcionalnost
    koja e planirana za odredena ruta

6 - moduli se paketi koi gi koristime za pogolema funckionalnost i reiskoristlivost na kodot 
    ima core moduli kako (os,fs,http,path) ima lokalni moduli (onie koi sto nie gi kreirame) 
    ima third-party moduli (instalirani importirani moduli koi ni olesnuvaat razlicni funkcionalnosti) 

7 - veb servis e tip na arhitektura i web softver koj sto ovozmozuva standardizirana komunikacija i protokol na 
    komunikacija i informacii pomegju klient i server. Edna aplikacija ili veb stranica so nekakva funkcionalna sodrzina moze da se smeta za veb servis
    Ima dva najkoristeni vidovi na web servisi i toa se SOAP i Rest. Primer za veb servis moze da bide nekakva weatherApp
    kade sto so api korisnikot moze da se informira za vremenska prognoza 
    
8 - Jwt avtentifikaija se pravi so json web token, taa avtentifikacija sekogas e stateles i takva avtentifikacija 
    e potrebna na sekoj koj sozdava account posetuva veb stranici i se avtentificira kako korisnik vo web prostorot.
    Jwt se sostoi od tri dela header, payload i signature 
    Vo header se sodrzi naslovot, i algoritamot koj sto se koristi za tokenot, payload gi sodrzi informaciite datata za korisnikot
    a vo signature stoi potpisot t.e. tajniot kluc    

9 - Mongo Db e document-oriented, nerelaciona baza na podatoci i se koristi za cuvanje na podatoci vo web prostorot. 
    Tie se fleksibilni, mozat da se promenuvaat da se dopolnuvaat da se brisat ili da se sozdavaat novi. Mongo DB 
    Funkcionira na princip na kolekcii i datata se cuva vo format na key-value pairs i koristi Json sintaksa.
    Na toj nacin zacuvanata data se zema i se koristi za prikazuvanje renderiranje vo nekoja aplikacija ili servis.  

10- Mongo Db e nerelaciona baza na podatoci otvorena za site korisnici dodeka mongoose e third-party modul koj se instalira i koj se koristi vo Node.js
    i pretstavuva biblioteka za polesna i modularna rabota so MongoDB. Mongoose go koristime za kreiranje na shemata vo modelot i za konektiranje so data-bazata
    
11- Razlikata pomegju dvata tipa na funkcii e vo toa sto sinhronata funkcija se izvrsuva redosledno linija po linija edna po druga 
    i na toj nacin e uslovna za da se pristapi kon sledna funcija mora predhodnata da bide zavrsena. So sinhron tip na funkcii znacajno se zgolemuva vremeto 
    na rabotata na aplikacijata, stanuva pospora i ja narusuva opstata funcionalnost. ponekogas pri izgradba na nekoja funkcionalnost e potrebno da se koristi 
    sinhrona funkcija. Asinhronata funkcija ne ja narusuva rabotata i brzinata i funkcionalnosta na aplikacijata, drugi funkcii isto taka mozat da se izvrsuvaat 
    vo isto vreme i nezavisno moze da raboti vo odnos na drugite funkcii i zatoa generalno se koristat asinhron tip na funkcii  


