import App from "../App";

const API = "https://api.themoviedb.org/3/";
const pagina = '&language=en-US&page=1';
const YOUTUBE = "https://www.youtube.com/watch?v=";
const autorizacion = import.meta.env.VITE_APP_TOKEN_API;
//const CORS = "https://cors-anywhere.herokuapp.com/";
const mokeoActivo = false;
const opciones = {
  mode: "cors",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": autorizacion
  }
}
const peliculasArray="{\"results\":[{\"adult\":false,\"backdrop_path\":\"/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg\",\"genre_ids\":[28,12,878],\"id\":640146,\"original_language\":\"en\",\"original_title\":\"Ant-ManandtheWasp:Quantumania\",\"overview\":\"Super-HeropartnersScottLangandHopevanDyne,alongwithwithHope'sparentsJanetvanDyneandHankPym,andScott'sdaughterCassieLang,findthemselvesexploringtheQuantumRealm,interactingwithstrangenewcreaturesandembarkingonanadventurethatwillpushthembeyondthelimitsofwhattheythoughtpossible.\",\"popularity\":9200.005,\"poster_path\":\"/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg\",\"release_date\":\"2023-02-15\",\"title\":\"Ant-ManandtheWasp:Quantumania\",\"video\":false,\"vote_average\":6.5,\"vote_count\":2079},{\"adult\":false,\"backdrop_path\":\"/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg\",\"genre_ids\":[16,12,10751,14,35],\"id\":502356,\"original_language\":\"en\",\"original_title\":\"TheSuperMarioBros.Movie\",\"overview\":\"Whileworkingundergroundtofixawatermain,Brooklynplumbers—andbrothers—MarioandLuigiaretransporteddownamysteriouspipeandwanderintoamagicalnewworld.Butwhenthebrothersareseparated,MarioembarksonanepicquesttofindLuigi.\",\"popularity\":6128.924,\"poster_path\":\"/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg\",\"release_date\":\"2023-04-05\",\"title\":\"TheSuperMarioBros.Movie\",\"video\":false,\"vote_average\":7.5,\"vote_count\":1655},{\"adult\":false,\"backdrop_path\":\"/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg\",\"genre_ids\":[28,35,14,12],\"id\":594767,\"original_language\":\"en\",\"original_title\":\"Shazam!FuryoftheGods\",\"overview\":\"BillyBatsonandhisfostersiblings,whotransformintosuperheroesbysaying\\\"Shazam!\\\",areforcedtogetbackintoactionandfighttheDaughtersofAtlas,whotheymuststopfromusingaweaponthatcoulddestroytheworld.\",\"popularity\":5286.148,\"poster_path\":\"/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg\",\"release_date\":\"2023-03-15\",\"title\":\"Shazam!FuryoftheGods\",\"video\":false,\"vote_average\":6.8,\"vote_count\":1380},{\"adult\":false,\"backdrop_path\":\"/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg\",\"genre_ids\":[10749,28,35],\"id\":868759,\"original_language\":\"en\",\"original_title\":\"Ghosted\",\"overview\":\"Salt-of-the-earthColefallsheadoverheelsforenigmaticSadie—butthenmakestheshockingdiscoverythatshe’sasecretagent.Beforetheycandecideonaseconddate,ColeandSadiearesweptawayonaninternationaladventuretosavetheworld.\",\"popularity\":4667.034,\"poster_path\":\"/liLN69YgoovHVgmlHJ876PKi5Yi.jpg\",\"release_date\":\"2023-04-18\",\"title\":\"Ghosted\",\"video\":false,\"vote_average\":7.3,\"vote_count\":513},{\"adult\":false,\"backdrop_path\":\"/8rpDcsfLJypbO6vREc0547VKqEv.jpg\",\"genre_ids\":[878,12,28],\"id\":76600,\"original_language\":\"en\",\"original_title\":\"Avatar:TheWayofWater\",\"overview\":\"Setmorethanadecadeaftertheeventsofthefirstfilm,learnthestoryoftheSullyfamily(Jake,Neytiri,andtheirkids),thetroublethatfollowsthem,thelengthstheygotokeepeachothersafe,thebattlestheyfighttostayalive,andthetragediestheyendure.\",\"popularity\":4048.285,\"poster_path\":\"/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg\",\"release_date\":\"2022-12-14\",\"title\":\"Avatar:TheWayofWater\",\"video\":false,\"vote_average\":7.7,\"vote_count\":7701},{\"adult\":false,\"backdrop_path\":\"/44immBwzhDVyjn87b3x3l9mlhAD.jpg\",\"genre_ids\":[27,9648,53],\"id\":934433,\"original_language\":\"en\",\"original_title\":\"ScreamVI\",\"overview\":\"FollowingthelatestGhostfacekillings,thefoursurvivorsleaveWoodsborobehindandstartafreshchapter.\",\"popularity\":3854.657,\"poster_path\":\"/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg\",\"release_date\":\"2023-03-08\",\"title\":\"ScreamVI\",\"video\":false,\"vote_average\":7.4,\"vote_count\":908},{\"adult\":false,\"backdrop_path\":\"/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg\",\"genre_ids\":[28,12,36,18,10752],\"id\":948713,\"original_language\":\"en\",\"original_title\":\"TheLastKingdom:SevenKingsMustDie\",\"overview\":\"InthewakeofKingEdward'sdeath,UhtredofBebbanburgandhiscomradesadventureacrossafracturedkingdominthehopesofunitingEnglandatlast.\",\"popularity\":3286.846,\"poster_path\":\"/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg\",\"release_date\":\"2023-04-14\",\"title\":\"TheLastKingdom:SevenKingsMustDie\",\"video\":false,\"vote_average\":7.3,\"vote_count\":277},{\"adult\":false,\"backdrop_path\":\"/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg\",\"genre_ids\":[18,28],\"id\":677179,\"original_language\":\"en\",\"original_title\":\"CreedIII\",\"overview\":\"Afterdominatingtheboxingworld,AdonisCreedhasbeenthrivinginbothhiscareerandfamilylife.Whenachildhoodfriendandformerboxingprodigy,DamianAnderson,resurfacesafterservingalongsentenceinprison,heiseagertoprovethathedeserveshisshotinthering.Theface-offbetweenformerfriendsismorethanjustafight.Tosettlethescore,AdonismustputhisfutureonthelinetobattleDamian—afighterwhohasnothingtolose.\",\"popularity\":3125.645,\"poster_path\":\"/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg\",\"release_date\":\"2023-03-01\",\"title\":\"CreedIII\",\"video\":false,\"vote_average\":7.3,\"vote_count\":1247},{\"adult\":false,\"backdrop_path\":\"/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg\",\"genre_ids\":[35,9648,28],\"id\":638974,\"original_language\":\"en\",\"original_title\":\"MurderMystery2\",\"overview\":\"Afterstartingtheirowndetectiveagency,NickandAudreySpitzlandacareer-makingcasewhentheirbillionairepaliskidnappedfromhiswedding.\",\"popularity\":2099.981,\"poster_path\":\"/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg\",\"release_date\":\"2023-03-28\",\"title\":\"MurderMystery2\",\"video\":false,\"vote_average\":6.6,\"vote_count\":920},{\"adult\":false,\"backdrop_path\":\"/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg\",\"genre_ids\":[27,9648,53],\"id\":758323,\"original_language\":\"en\",\"original_title\":\"ThePope'sExorcist\",\"overview\":\"FatherGabrieleAmorth,ChiefExorcistoftheVatican,investigatesayoungboy'sterrifyingpossessionandendsupuncoveringacenturies-oldconspiracytheVaticanhasdesperatelytriedtokeephidden.\",\"popularity\":1798.764,\"poster_path\":\"/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg\",\"release_date\":\"2023-04-05\",\"title\":\"ThePope'sExorcist\",\"video\":false,\"vote_average\":6.8,\"vote_count\":201},{\"adult\":false,\"backdrop_path\":\"/nDmPjKLqLwWyd4Ssti8HCdhW5cZ.jpg\",\"genre_ids\":[28],\"id\":1048300,\"original_language\":\"en\",\"original_title\":\"Adrenaline\",\"overview\":\"AfemaleFBIagentholidayinginEasternEuropewithherfamilygetsherlifeupsidedownwhenherdaughteriskidnapped.Shehastoteamupwithacriminalontheruntosaveherdaughterbeforetimerunsout.\",\"popularity\":1621.437,\"poster_path\":\"/qVzRt8c2v4gGBYsnaflXVVeQ9Lh.jpg\",\"release_date\":\"2022-12-15\",\"title\":\"Adrenaline\",\"video\":false,\"vote_average\":5.3,\"vote_count\":17},{\"adult\":false,\"backdrop_path\":\"/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg\",\"genre_ids\":[27],\"id\":713704,\"original_language\":\"en\",\"original_title\":\"EvilDeadRise\",\"overview\":\"TwosistersfindanancientvinylthatgivesbirthtobloodthirstydemonsthatrunamokinaLosAngelesapartmentbuildingandthruststhemintoaprimalbattleforsurvivalastheyfacethemostnightmarishversionoffamilyimaginable.\",\"popularity\":1528.922,\"poster_path\":\"/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg\",\"release_date\":\"2023-04-12\",\"title\":\"EvilDeadRise\",\"video\":false,\"vote_average\":7,\"vote_count\":304},{\"adult\":false,\"backdrop_path\":\"/h8gHn0OzBoaefsYseUByqsmEDMY.jpg\",\"genre_ids\":[28,53,80],\"id\":603692,\"original_language\":\"en\",\"original_title\":\"JohnWick:Chapter4\",\"overview\":\"Withthepriceonhisheadeverincreasing,JohnWickuncoversapathtodefeatingTheHighTable.Butbeforehecanearnhisfreedom,Wickmustfaceoffagainstanewenemywithpowerfulalliancesacrosstheglobeandforcesthatturnoldfriendsintofoes.\",\"popularity\":1477.085,\"poster_path\":\"/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg\",\"release_date\":\"2023-03-22\",\"title\":\"JohnWick:Chapter4\",\"video\":false,\"vote_average\":7.9,\"vote_count\":1274},{\"adult\":false,\"backdrop_path\":\"/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg\",\"genre_ids\":[16,10751,14,12,35,18],\"id\":315162,\"original_language\":\"en\",\"original_title\":\"PussinBoots:TheLastWish\",\"overview\":\"PussinBootsdiscoversthathispassionforadventurehastakenitstoll:Hehasburnedthrougheightofhisninelives,leavinghimwithonlyonelifeleft.PusssetsoutonanepicjourneytofindthemythicalLastWishandrestorehisninelives.\",\"popularity\":1438.306,\"poster_path\":\"/kuf6dutpsT0vSVehic3EZIqkOBt.jpg\",\"release_date\":\"2022-12-07\",\"title\":\"PussinBoots:TheLastWish\",\"video\":false,\"vote_average\":8.3,\"vote_count\":5399},{\"adult\":false,\"backdrop_path\":\"/a2tys4sD7xzVaogPntGsT1ypVoT.jpg\",\"genre_ids\":[53,35,80],\"id\":804150,\"original_language\":\"en\",\"original_title\":\"CocaineBear\",\"overview\":\"Inspiredbyatruestory,anoddballgroupofcops,criminals,touristsandteensconvergeinaGeorgiaforestwherea500-poundblackbeargoesonamurderousrampageafterunintentionallyingestingcocaine.\",\"popularity\":1392.609,\"poster_path\":\"/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg\",\"release_date\":\"2023-02-22\",\"title\":\"CocaineBear\",\"video\":false,\"vote_average\":6.4,\"vote_count\":929},{\"adult\":false,\"backdrop_path\":\"/tFaC1Fb1sv1dALB0i9Avi76MHmn.jpg\",\"genre_ids\":[10751,28,12],\"id\":946310,\"original_language\":\"nl\",\"original_title\":\"DePiratenvanHiernaastII:DeNinja'svandeOverkant\",\"overview\":\"ThepiratesfeelrightathomeinSandborough,buttheatmospherecoolsrightdownwhentheninjascometoliveinthestreet.Afterall,piratesandninjasareswornenemies!WhilepiratecaptainHectorBlunderbussstrugglestogetridofhisnewneighbours,sonBillyandninjadaughterYukabecomefriends.Thepirateschallengetheninjastotheultimatebattleatthevillage'sannualhexathlon.Whowillwinthematch?Ninjasarefasterandmoreagileofcourse,butpiratesarethebestcheatsinallofthesevenseas...\",\"popularity\":1291.185,\"poster_path\":\"/uDsvma9dAwnDPVuCFi99YpWvBk0.jpg\",\"release_date\":\"2022-04-20\",\"title\":\"PiratesDowntheStreetII:TheNinjasfromAcross\",\"video\":false,\"vote_average\":6.5,\"vote_count\":32},{\"adult\":false,\"backdrop_path\":\"/54IXMMEQKlkPXHqPExWy98UBmtE.jpg\",\"genre_ids\":[27],\"id\":1008005,\"original_language\":\"es\",\"original_title\":\"Laniñadelacomunión\",\"overview\":\"Spain,late1980s.NewcomerSaratriestofitinwiththeotherteensinthistight-knitsmalltownintheprovinceofTarragona.Ifonlysheweremorelikeherextrovertedbestfriend,Rebe.Theygooutonenightatanightclub,onthewayhome,theycomeuponalittlegirlholdingadoll,dressedforherfirstcommunion.Andthat'swhenthenightmarebegins.\",\"popularity\":1280.799,\"poster_path\":\"/uYxrWr9o44yO0HvVfFFHGu01gfX.jpg\",\"release_date\":\"2023-02-10\",\"title\":\"TheCommunionGirl\",\"video\":false,\"vote_average\":6.4,\"vote_count\":67},{\"adult\":false,\"backdrop_path\":\"/eEF40Xk2twM3WjRNZftfo771gjv.jpg\",\"genre_ids\":[878,12,53],\"id\":700391,\"original_language\":\"en\",\"original_title\":\"65\",\"overview\":\"65millionyearsago,theonly2survivorsofaspaceshipfromSomaristhatcrash-landedonEarthmustfendoffdinosaursandreachtheescapevesselintimebeforeanimminentasteroidstrikethreatenstodestroytheplanet.\",\"popularity\":1187.041,\"poster_path\":\"/rzRb63TldOKdKydCvWJM8B6EkPM.jpg\",\"release_date\":\"2023-03-02\",\"title\":\"65\",\"video\":false,\"vote_average\":6.3,\"vote_count\":866},{\"adult\":false,\"backdrop_path\":\"/rPSJAElGxOTko1zK6uIlYnTMFxN.jpg\",\"genre_ids\":[80],\"id\":1104040,\"original_language\":\"en\",\"original_title\":\"GangsofLagos\",\"overview\":\"Agroupoffriendswhoeachhavetonavigatetheirowndestiny,growinguponthebustlingstreetsandneighborhoodofIsaleEko,Lagos.\",\"popularity\":1185.872,\"poster_path\":\"/nGwFsB6EXUCr21wzPgtP5juZPSv.jpg\",\"release_date\":\"2023-04-07\",\"title\":\"GangsofLagos\",\"video\":false,\"vote_average\":5.4,\"vote_count\":25},{\"adult\":false,\"backdrop_path\":\"/eNJhWy7xFzR74SYaSJHqJZuroDm.jpg\",\"genre_ids\":[28,878],\"id\":1033219,\"original_language\":\"en\",\"original_title\":\"AttackonTitan\",\"overview\":\"AsviablewaterisdepletedonEarth,amissionissenttoSaturn'smoonTitantoretrievesustainableH2Oreservesfromitsalieninhabitants.Butjustasthehumansacquirethepreciousresource,theyareattackedbyTitanrebels,whodon'ttrustthattheEarthlingswillleaveinpeace.\",\"popularity\":1113.904,\"poster_path\":\"/qNz4l8UgTkD8rlqiKZ556pCJ9iO.jpg\",\"release_date\":\"2022-09-30\",\"title\":\"AttackonTitan\",\"video\":false,\"vote_average\":6.1,\"vote_count\":110}]}";
export async function get(path , numeroPagina) {
    // console.log(API + path + API_KEY);
    path = `${path}?page=${numeroPagina ? numeroPagina : 1}`;
    //console.log( API + path);
  if(!mokeoActivo){
    return fetch( API + path, opciones).then((result) => result.json());
  }else{
    return mockData(peliculasArray);
  }
  
}

export async function getSinPaginado(path) {
  // console.log(API + path + API_KEY);
  path = `${path}`;
  //console.log( API + path);
if(!mokeoActivo){
  return fetch( API + path, opciones).then((result) => result.json());
}else{
  return mockData(peliculasArray);
}

}
export async function getSimilarMovies(movieId){
  const path = `movie/${movieId}/similar`;
 // console.log(API + path + API_KEY);
  if(!mokeoActivo){
    return fetch( API + path , opciones).then((result) => result.json());
  }else{
    return mockData(peliculasArray);
  }
 
}

export async function getMoviesByWord(word , pag){
  const path = `search/keyword?query=${word}?page=${pag ? pag : 1}`;
  //console.log(path);
  return fetch(API + path , opciones).then(r=>r.json());

}

export async function getTrailerVideo(movie_id){
  const path = `movie/${movie_id}/videos`
  let array = await fetch(API + path , opciones).then(r=>r.json());
  let trailer = array.results.find(({type})=> type === "Trailer");

  if(!trailer)
    return null;

  return YOUTUBE + trailer.key;
}

export async function getCategorias(){
  const path = `genre/movie/list?language=en`
  return fetch(API + path , opciones).then(r=>r.json());
}

function mockData(jsonString) {
  return new Promise((resolve, reject) => {
    try {
      const data = JSON.parse(jsonString);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

