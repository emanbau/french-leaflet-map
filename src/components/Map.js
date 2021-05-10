import React from 'react';
import { MapContainer ,GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import '../App.css';

function Map({ regions }) {

    const mapStyle = {
        fillColor: "black",
        weight: 1,
        color: 'rgba(255, 255, 255, 0.4)',
        fillOpacity: 0.25,
    }

    const popupContent = [
        {
            nom: "Île-de-France",
            content: `L'île de France n'est une île que dans le sens où des rivières - avec des noms étranges tels que l'Essonne, l'Epte, l'Aisne, l'Eure et l'Ourcq - et une poignée de canaux délimitent ses limites (à environ 81 km / 50 miles de la centre de Paris). La France est née dans ce bassin tempéré, où les attractions comprennent Paris, Versailles, Fontainebleau, Notre-Dame de Chartres et Giverny. Malgré l'industrialisation (et Disneyland Paris), de nombreuses poches de charme subsistent, notamment les forêts de Rambouillet et de Fontainebleau, et le hameau des artistes de Barbizon.`,
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
        },
        {
            nom: "Centre-Val de Loire",
            content: `Cette zone comprend deux anciennes provinces, la Touraine (centrée sur Tours) et l'Anjou (centrée sur Angers). Il était aimé de la royauté et de la noblesse, florissant à la Renaissance jusqu'à ce qu'Henri IV déménage sa cour à Paris. Rendez-vous ici pour voir les plus beaux châteaux de France. Irriguée par la Loire et ses nombreux affluents, la vallée produit de nombreux vins superbes.`,
            image: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-506396747_high.jpg'
        },
        {
            nom: "Bourgogne-Franche-Comté",
            content: `Située dans l'est de la France, la région Bourgogne-Franche-Comté est constituée des deux anciennes régions de Bourgogne et de Franche-Comté qui ont été fusionnées en une seule région en janvier 2016. La région est limitrophe de la Suisse et des régions françaises Auvergne-Rhône-Alpes, Centre-Val de Loire, Ile-de-France et Alsace-Champagne-Ardenne-Lorraine.
            L'ancienne région de la Bourgogne est célèbre dans le monde entier pour ses vins fins et les vignobles attirent de nombreux touristes, cependant, une grande partie du reste de la région, en particulier la région de Franche-Comté, est largement méconnue. Pourtant, il abrite une campagne vallonnée qui varie de la chaîne du Jura à de grandes forêts, des châteaux historiques et des édifices religieux, de beaux villages et une dispersion de grandes villes, dont Dijon.
            La région Bourgogne-Franche-Comté est également une destination de choix pour les gourmands, avec de nombreux plats signatures et des fromages AOC accompagnés de délicieux vins. Pendant l'été, le temps est ensoleillé et chaud bien qu'il pleuve et pendant l'hiver les températures peuvent descendre en dessous de zéro.`,
            image: 'https://i.pinimg.com/originals/29/61/c3/2961c33c16e27788d015a2e5e1610cea.jpg'
        },
        {
            nom: "Normandie",
            content: `Cette région sera à jamais liée à l'invasion du jour J de 1944. Certains lecteurs considèrent qu'une visite des plages du débarquement est la partie la plus intéressante du point de vue émotionnel de leur voyage. La Normandie compte 599 km de côtes et une tradition maritime. C'est un week-end populaire au départ de Paris, et de nombreux hôtels et restaurants prospèrent ici, en particulier autour de la ville-casino de Deauville. Les grandes attractions de la Normandie incluent la cathédrale de Rouen, la ville médiévale de Bayeux, le village de pêcheurs de Honfleur et l'abbaye du Mont St-Michel.`,
            image: 'https://www.tripsavvy.com/thmb/a3pN4TFxy5e7euQ2f82buus3U40=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-813892224-3c92cb95350d4c67ae3a3be475e758bd.jpg'
        },
        {
            nom: "Hauts-de-France",
            content: `Les Hauts-de-France est une région administrative du nord de la France, créée par la réforme territoriale de 2014. Fruit de la fusion du Nord-Pas-de-Calais et de la Picardie (elles-mêmes créées en 1972), elle fut d'abord provisoirement dénommée Nord-Pas-de-Calais-Picardie. Il s'étend sur 31 806 km2 et comprend cinq départements: l'Aisne, le Nord, l'Oise, le Pas-de-Calais et la Somme. Sa capitale est Lille, principale ville de la région et auparavant capitale du Nord-Pas-de-Calais. Amiens, capitale de l'ancienne Picardie, est la deuxième plus grande ville de la région.
            La région est bordée au nord par la mer du Nord sur 45 kilomètres et à l'ouest par la Manche sur plus de 120 kilomètres. De l'autre côté se trouve le Kent au Royaume-Uni, à 35 kilomètres. Côté terre, la région borde la Belgique (Hainaut et Flandre occidentale) au nord-est, de Bray-Dunes à Watigny, sur plus de 350 kilomètres. Il borde également la Normandie à l'ouest, l'Ile-de-France au sud et le Grand Est à l'est.
            Située au cœur de l'Europe, avec 6009976 habitants au 1er janvier 2015, et une densité de population de 189 habitants / km2, c'est la 3ème région la plus densément peuplée de France et la 2ème la plus densément peuplée de France métropolitaine après l'Île-de-France .`,
            image: 'https://preview.redd.it/k8wrnp6xkn601.jpg?width=960&crop=smart&auto=webp&s=1ee93d4d54d16449145c0ed40125cd3edf666a63'
        },
        {
            nom: "Grand Est",
            content: `Située dans le nord-est de la France, la région du Grand Est a été créée en janvier 2016 et est constituée des anciennes régions d'Alsace, de Champagne-Ardenne et de Lorraine. Frontalières de la Belgique, du Luxembourg, de l'Allemagne et de la Suisse, les anciennes régions d'Alsace et de Lorraine ont été âprement disputées au fil des ans pour basculer entre le contrôle de la France et de l'Allemagne à plusieurs reprises. En conséquence, il existe un certain nombre d'influences germaniques dans la région, des spécialités culinaires aux noms de lieux.
            L'Alsace-Champagne-Ardenne-Lorraine possède une belle campagne et un certain nombre de vignobles, y compris les vignobles de champagne de renommée mondiale. Il y a aussi des forêts, des rivières, les montagnes vosgiennes et plusieurs grandes villes dont Strasbourg, Metz, Nancy et Reims.`,
            image: 'https://static.visit.alsace/wp-content/uploads/2019/01/petite-france-pont-saint-martin-bruno-paci-1600x900.jpg'
        },
        {
            nom: "Pays de la Loire",
            content: `La région Pays de la Loire est une création récente, pas une des régions historiques de France dans sa forme. En effet, la capitale régionale, Nantes, était autrefois la capitale de la Bretagne - à laquelle elle n'appartient plus. Sur le plan historique, les Pays de la Loire couvrent des parties des anciennes provinces de Bretagne, d'Anjou, du Maine et du Poitou. La région est célèbre pour ses nombreux châteaux qui longent la Loire créant un label éponyme «Châteaux de la Loire» protégé par le site du patrimoine mondial de l'UNESCO. De nombreux touristes, français et internationaux, viennent dans la région pendant les vacances pour les visiter. Il est également connu pour le «Puy du Fou», un parc d'attraction où l'histoire se mêle aux performances et à la nature.
            Le Pays de la Loire couvre la région au sud de la Bretagne et de la Normandie, le long des tronçons inférieurs de la Loire, le plus long fleuve de France avec 1012 km. Un climat océanique y règne.`,
            image: 'https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/f0cfe76a-41ec-11ea-a879-e56a76ed3e8a?source=next&fit=scale-down&quality=highest&width=1440'
        },
        {
            nom: "Bretagne",
            content: `En saillie dans l'Atlantique, la région la plus occidentale de la France est connue pour ses côtes rocheuses, ses racines celtiques, ses pluies fréquentes et son ancien dialecte, apparenté aux langues gaéliques du Pays de Galles et d'Irlande. De nombreux vacanciers français aiment le littoral (rivalisé uniquement par la Côte d’Azur) pour ses plages de sable, ses falaises et ses prix relativement modestes - selon les normes françaises. Quimper est la capitale culturelle de la Bretagne, tandis que Carnac abrite d'anciens dolmens celtiques et des tumulus.`,
            image: 'https://cdn.odysseytraveller.com/app/uploads/2020/01/Quimper.jpg'
        },
        {
            nom: "Nouvelle-Aquitaine",
            content: `La restructuration des régions de France en janvier 2016 a permis de fusionner les anciennes régions d'Aquitaine, du Limousin et du Poitou-Charentes pour former une nouvelle super région qui couvre la majeure partie du sud-ouest de la France, de la frontière espagnole à La Rochelle. Le nom de cette nouvelle région est Nouvelle-Aquitaine.
            Cette région est très appréciée des vacanciers et des expatriés attirés par le climat ensoleillé, les jolies villes et villages, la campagne vallonnée et les vignobles et les plages de l'Atlantique.          
            C'est une région très diversifiée. Dans l'extrême sud, près de la frontière espagnole, la région est connue comme la région basque avec une culture et une cuisine distinctes et un certain nombre de stations balnéaires animées. Plus à l'intérieur des terres, les départements de la Dordogne et du Lot-et-Garonne sont typiques du sud-ouest de la France avec une campagne pittoresque, des rivières sinueuses et de beaux villages bastides. Le paysage varie des vignobles autour de Bordeaux et de Cognac, des champs de tournesols en Charente, de la verdure vallonnée en Limousin et des marais verdoyants du Marais Poitevin dans les Deux-Sèvres. Tout au long de la côte, il y a des stations balnéaires populaires et des plages naturelles plus calmes.`,
            image: 'https://www.azamara.com/sites/default/files/heros/bordeaux-france.jpg'
        },
        {
            nom: "Occitanie",
            content: `La restructuration des régions de France en janvier 2016 a permis de fusionner les anciennes régions Languedoc-Roussillon et Midi-Pyrénées pour former une nouvelle super région qui couvre une grande partie du sud de la France, y compris une partie du littoral méditerranéen et une partie des Pyrénées les montagnes. Le nom de cette nouvelle région est Occitanie.
            Cette région est populaire auprès des vacanciers et des expatriés qui sont attirés par le climat ensoleillé, les jolies villes et villages, la campagne vallonnée et les vignobles et les plages de la Méditerranée.
            Le paysage varie des montagnes pyrénéennes, des plages méditerranéennes, de la Camargue marécageuse et des montagnes des Cévennes. Les plages sont plus calmes que leurs homologues le long de la Rivera et sont donc populaires auprès des familles et la région comprend deux sites populaires du patrimoine mondial de l'UNESCO - la cité médiévale de Carcassonne et le Canal du Midi. Il existe également plusieurs grandes villes en Languedoc-Roussillon-Midi-Pyrénées - Toulouse, Montpellier et Perpignan.`,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/1_carcassonne_aerial_2016.jpg/1200px-1_carcassonne_aerial_2016.jpg'
        },
        {
            nom: "Auvergne-Rhône-Alpes",
            content: `La restructuration des régions de France en janvier 2016 a permis de fusionner les anciennes régions Languedoc-Roussillon et Midi-Pyrénées pour former une nouvelle super région qui couvre une grande partie du sud de la France, y compris une partie du littoral méditerranéen et une partie des Pyrénées les montagnes. Le nom de cette nouvelle région est l'Occitanie.
            Cette région est populaire auprès des vacanciers et des expatriés qui sont attirés par le climat ensoleillé, les jolies villes et villages, la campagne vallonnée et les vignobles et les plages de la Méditerranée.
            En janvier 2016, les régions françaises ont été réduites de 22 à 13 et les deux régions Auvergne et Rhône-Alpes dans le sud-est de la France ont été fusionnées pour former une seule région, actuellement dénommée Auvergne-Rhône-Alpes. Cette région s'étend de la frontière suisse et italienne au centre de la France.     
            Cette région comprend désormais la chaîne de montagnes des Alpes de renommée mondiale et le Massif Central moins connu, ainsi que les vignobles de la vallée du Rhône, les champs de lavande du nord de la Provence et les emblématiques volcans éteints d'Auvergne. Certaines parties de la région, en particulier les Alpes, sont très populaires auprès des touristes, des acheteurs de biens immobiliers et des expatriés, tandis que d'autres zones restent à découvrir.  
            Outre des paysages vallonnés et des montagnes, Auvergne-Rhône-Alpes compte quelques grandes villes dont la capitale gastronomique Lyon, Grenoble, Annecy et Clermont-Ferrand. Le temps varie considérablement. Les Alpes sont couvertes de neige de fin décembre à mai mais pendant l'été la région est ensoleillée et chaude, surtout dans le sud.`,
            image: 'http://1.bp.blogspot.com/-WQqvRPLTkCo/VOjW_mv905I/AAAAAAAABUg/9i2xEwTIR8g/s1600/54aad011bbf87.jpg'
        },
        {
            nom: "Provence-Alpes-Côte d'Azur",
            content: `Située dans le sud-est de la France, Provence-Alpes-Côte d’Azur est l’une des régions les plus prisées de France auprès des vacanciers et l’une des régions les plus chères pour acheter une propriété en France. Comme le montre le nom de la région, Provence-Alpes-Côte d’Azur abrite les champs de lavande vallonnés de la Provence, les Alpes du Sud et la partie de la côte méditerranéenne connue sous le nom de Côte d’Azur ou de Côte d’Azur.
            La Côte d’Azur est très appréciée des riches qui amarrent leurs yachts dans les ports ou achètent des villas avec vue sur la mer, ainsi que des familles à la recherche de vacances à la plage. Certaines des principales villes de la côte sont Nice, Marseille, Saint-Tropez et Cannes. Il y a beaucoup plus en Provence-Alpes-Côte d'Azur que la côte - il y a plusieurs parcs nationaux dans la région, un certain nombre de stations de ski dans les Alpes du Sud et des villes et villages pittoresques comme Avignon, Aix-en-Provence et Gordes.`,
            image: 'https://www.renfe-sncf.com/rw-en/blog/PublishingImages/avignon-48-hours/avignon_48_hours.jpg'
        },
        {
            nom: "Corse",
            content: `Aussi surnommée Île de Beauté, la Corse est une île située à 200 km de la Côte d'Azur. Elle est composée de deux départements: la Haute Corse avec Bastia comme ville principale et la Basse Corse avec Ajaccio comme ville principale. La Corse est la troisième plus grande Méditerranée occidentale derrière la Sicile et la Sardaigne. En effet, sa longueur est de 183 km et sa largeur de 80 km. Terre de caractère et de beauté, vous pouvez trouver d'innombrables merveilles du Nord au Sud, d'Ouest en Est.
            L'île a tout ce dont vous pourriez rêver pour des vacances: le climat méditerranéen ensoleillé, la mer, les montagnes et des paysages de rêve. La Corse a choisi de préserver sa nature avec 5 réserves naturelles qui couvrent plus d'un tiers de l'île. Chaque recoin de la Corse a quelque chose de surprenant, un lieu magique comme nulle part ailleurs, la Corse offre des paysages étonnants, du Cap Corse au Golfe de Porto; des Calanches de Piana (classées par l'UNESCO) à la réserve de Scandola; des gorges de Spelunca, à la forêt d'Aïtone ou aux Aiguilles de Bavela; des îles Lavezzi, au large de Bonifacio, aux îles sanguinaires, face au golfe d'Ajaccio, tout en Corse est beauté et tempérament.
            Le climat présent sur l'île est le climat méditerranéen; en été (juin à août), les températures varient de 25 à 30 ° C.`,
            image: 'https://assets.serenity.co.uk/20000-20999/20616/1296x864.jpg'
        },
    ];

    const popupOptions = {
        'className': 'popup',
    }

    const onEachRegion = (region, layer) => {
        const name = region.properties.nom
        let content, image;
        let index;
        for (let i = 0; i < popupContent.length; i++) {
            if (popupContent[i].nom === name) {
                index = popupContent[i];
                break;
            }
        }
        content = index.content;
        image = index.image;
        layer.bindPopup(`
            <h2 classname='popup-heading' >${name}</h2>
            <p>${content}</p>
            <img src=${image} width='300px' height='auto' />
        `, popupOptions)
    }

    return (
        <MapContainer 
            style={{height: "100vh", backgroundColor: '#303030' }} 
            zoomControl={false} 
            dragging={true}
            doubleClickZoom={false}
            scrollWheelZoom={false}
            zoom={6} 
            center={[46.5, 3]}
        >
            <GeoJSON data={regions} style={mapStyle} onEachFeature={onEachRegion}>
            </GeoJSON>
        </MapContainer>
    )
}

export default Map
