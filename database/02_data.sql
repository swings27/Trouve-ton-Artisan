-- Données de la table Catégorie
INSERT INTO
    categorie (nom)
VALUES
    ('Alimentation'),
    ('Bâtiment'),
    ('Fabrication'),
    ('Services');

-- Données de la table Spécialité
INSERT INTO
    specialite (nom, id_categorie)
VALUES
    ('Boucher', 1),
    ('Boulanger', 1),
    ('Chocolatier', 1),
    ('Traiteur', 1),
    ('Chauffagiste', 2),
    ('Electricien', 2),
    ('Menuisier', 2),
    ('Plombier', 2),
    ('Bijoutier', 3),
    ('Couturier', 3),
    ('Ferronier', 3),
    ('Coiffeur', 4),
    ('Fleuriste', 4),
    ('Toiletteur', 4),
    ('Webdesign', 4);

-- Données de la table Artisan
INSERT INTO
    artisan (
        nom,
        email,
        ville,
        note,
        site_web,
        a_propos,
        top,
        id_specialite
    )
VALUES
    (
        'Boucherie Dumont',
        'boucherie.dumond@gmail.com',
        'Lyon',
        4.5,
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        1
    ),
    (
        'Au pain chaud',
        'aupainchaud@hotmail.com',
        'Montélimar',
        4.8,
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        TRUE,
        2
    ),
    (
        'Chocolaterie Labbé',
        'chocolaterie-labbe@gmail.com',
        'Lyon',
        4.9,
        'https://chocolaterie-labbe.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        TRUE,
        3
    ),
    (
        'Traiteur Truchon',
        'contact@truchon-traiteur.fr',
        'Lyon',
        4.1,
        'https://truchon-traiteur.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        4
    ),
    (
        'Orville Salmons',
        'o-salmons@live.com',
        'Evian',
        5.0,
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        TRUE,
        5
    ),
    (
        'Mont Blanc Electricité',
        'contact@mont-blanc-electricite.com',
        'Chamonix',
        4.5,
        'https://mont-blanc-electricite.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        6
    ),
    (
        'Boutot & fils',
        'boutot-menuiserie@gmail.com',
        'Bourg-en-bresse',
        4.7,
        'https://boutot-menuiserie.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        7
    ),
    (
        'Vallis Bellemare',
        'v.bellemare@gmail.com',
        'Vienne',
        4.0,
        'https://plomberie-bellemare.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        8
    ),
    (
        'Claude Quinn',
        'claude.quinn@gmail.com',
        'Aix-les-bains',
        4.2,
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        9
    ),
    (
        'Amitee Lécuyer',
        'a.amitee@hotmail.com',
        'Annecy',
        4.5,
        'https://lecuyer-couture.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        10
    ),
    (
        'Ernest Carignan',
        'e-carigan@hotmail.com',
        'Le Puy-en-Velay',
        5.0,
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        11
    ),
    (
        'Royden Charbonneau',
        'r.charbonneau@gmail.com',
        'Saint-Priest',
        3.8,
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        12
    ),
    (
        'Leala Dennis',
        'l.dennos@hotmail.fr',
        'Chambéry',
        3.8,
        'https://coiffure-leala-chambery.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        12
    ),
    (
        'C''est sup''hair',
        'sup-hair@gmail.com',
        'Romans-sur-Isère',
        4.1,
        'https://sup-hair.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        12
    ),
    (
        'Le monde des fleurs',
        'contact@le-monde-des-fleurs-annonay.fr',
        'Annonay',
        4.6,
        'https://le-monde-des-fleurs-annonay.fr',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        13
    ),
    (
        'Valérie Laderoute',
        'v-laredoute@gmail.com',
        'Valence',
        4.5,
        NULL,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        14
    ),
    (
        'CM Graphisme',
        'contact@cm-graphisme.com',
        'Valence',
        4.4,
        'https://cm-graphisme.com',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
        FALSE,
        15
    );